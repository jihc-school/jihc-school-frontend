import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaSearch,
  FaFileExcel,
  FaFilePdf,
  FaFilter,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";
import StudentTable from "./StudentTable/StudentTable";
import DetailModal from "./DetailModal/DetailModal";
import EditModal from "./EditModal/EditModal";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [activeStudent, setActiveStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/all-students`,
      );
      setStudents(response.data);
      setFilteredStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    let result = students;

    if (searchTerm) {
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.roll.toString().includes(searchTerm),
      );
    }

    if (selectedClass) result = result.filter((s) => s.class === selectedClass);

    if (selectedStatus)
      result = result.filter((s) => s.status === selectedStatus);

    setFilteredStudents(result);
  }, [searchTerm, selectedClass, selectedStatus, students]);

  const exportExcel = () => {
    if (filteredStudents.length === 0) {
      return Swal.fire("Empty!", "No data available to export.", "warning");
    }

    const ws = XLSX.utils.json_to_sheet(
      filteredStudents.map(
        ({ roll, name, studentId, class: cls, phone, status }) => ({
          Roll: roll,
          Name: name,
          "Student ID": studentId,
          Class: cls,
          Phone: phone,
          Status: status,
        }),
      ),
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");
    XLSX.writeFile(wb, `Student_List_${new Date().toLocaleDateString()}.xlsx`);
  };

  const exportPDF = async () => {
    try {
      Swal.fire({
        title: "Preparing PDF...",
        text: "It might take a moment.",
        didOpen: () => {
          Swal.showLoading();
        },
      });

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/download-student-pdf`,
        {
          params: {
            searchTerm: searchTerm,
            className: selectedClass,
            status: selectedStatus,
          },
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `Report_${new Date().toLocaleDateString()}.pdf`,
      );
      document.body.appendChild(link);
      link.click();
      Swal.close();
    } catch (error) {
      Swal.fire("Error!", "Could not generate PDF.", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-100">
              <FaUserGraduate size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900 leading-none">
                Student <span className="text-blue-600/30">Database</span>
              </h2>
              <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase flex items-center gap-1">
                <FaUsers /> Total Students: {filteredStudents.length}
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

        {/* Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="relative md:col-span-2">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Name, Roll or ID..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-600 font-medium transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <select
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none font-bold text-gray-700 appearance-none cursor-pointer focus:border-blue-600"
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">All Classes</option>
              {[6, 7, 8, 9, 10].map((c) => (
                <option key={c} value={c.toString()}>
                  Class {c}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <select
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none font-bold text-gray-700 appearance-none cursor-pointer focus:border-blue-600"
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="Active">Active Students</option>
              <option value="Inactive">Inactive Students</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>

        <StudentTable
          students={filteredStudents}
          onView={(s) => {
            setActiveStudent(s);
            setIsDetailOpen(true);
          }}
          onEdit={(s) => {
            setActiveStudent(s);
            setIsEditOpen(true);
          }}
          onDelete={fetchStudents}
        />
      </div>

      {isDetailOpen && (
        <DetailModal
          student={activeStudent}
          onClose={() => setIsDetailOpen(false)}
        />
      )}
      {isEditOpen && (
        <EditModal
          student={activeStudent}
          onClose={() => setIsEditOpen(false)}
          onUpdate={fetchStudents}
        />
      )}
    </div>
  );
};

export default StudentList;
