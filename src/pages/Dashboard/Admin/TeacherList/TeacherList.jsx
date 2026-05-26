import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaSearch,
  FaFileExcel,
  FaUserTie,
  FaUsers,
  FaPlus,
  FaFilePdf,
} from "react-icons/fa";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";
import TeacherTable from "./TeacherTable/TeacherTable";
import TeacherDetailModal from "./TeacherDetailModal/TeacherDetailModal";
import TeacherEditModal from "./TeacherEditModal/TeacherEditModal";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [activeTeacher, setActiveTeacher] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/all-teachers`,
      );

      console.log("Full API Response:", response.data);

      const actualData = response.data.data || [];

      setTeachers(actualData);
      setFilteredTeachers(actualData);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };
  console.log(teachers);

  useEffect(() => {
    let result = teachers;
    if (searchTerm) {
      result = result.filter(
        (t) =>
          `${t.firstName} ${t.lastName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          t.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.email.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    setFilteredTeachers(result);
  }, [searchTerm, teachers]);

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      filteredTeachers.map((t) => ({
        Name: `${t.firstName} ${t.lastName}`,
        Designation: t.designation,
        Email: t.email,
        Phone: t.phone,
        Specialization: t.specialistIn.join(", "),
      })),
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Teachers");
    XLSX.writeFile(wb, `Teacher_List_${new Date().toLocaleDateString()}.xlsx`);
  };

  const exportPDF = async () => {
    try {
      Swal.fire({
        title: "Generating Faculty Report...",
        text: "Please wait while we prepare the document.",
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/download-teacher-pdf`,
        {
          params: {
            searchTerm: searchTerm,
          },
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `Teacher_Directory_${new Date().toLocaleDateString()}.pdf`,
      );
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      Swal.close();
    } catch (error) {
      console.error("PDF Export Error:", error);
      Swal.fire("Error!", "Could not generate Teacher PDF report.", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-100">
              <FaUserTie size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900 leading-none">
                Faculty <span className="text-indigo-600/30">Directory</span>
              </h2>
              <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase flex items-center gap-1">
                <FaUsers /> Total Teachers: {filteredTeachers.length}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={exportExcel}
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-bold hover:bg-green-700 transition-all flex items-center gap-2"
            >
              <FaFileExcel /> Excel
            </button>
            <button
              onClick={exportPDF}
              className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 transition-all flex items-center gap-2"
            >
              <FaFilePdf /> PDF
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Name, Designation or Email..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-indigo-600 font-medium transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <TeacherTable
          teachers={filteredTeachers}
          onView={(t) => {
            setActiveTeacher(t);
            setIsDetailOpen(true);
          }}
          onEdit={(t) => {
            setActiveTeacher(t);
            setIsEditOpen(true);
          }}
          onDelete={fetchTeachers}
        />
      </div>

      {isDetailOpen && (
        <TeacherDetailModal
          teacher={activeTeacher}
          onClose={() => setIsDetailOpen(false)}
        />
      )}
      {isEditOpen && (
        <TeacherEditModal
          teacher={activeTeacher}
          onClose={() => setIsEditOpen(false)}
          onUpdate={fetchTeachers}
        />
      )}
    </div>
  );
};

export default TeacherList;
