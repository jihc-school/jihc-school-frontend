import React, { useState } from "react";
import {
  FaEye,
  FaEdit,
  FaTrashAlt,
  FaToggleOn,
  FaToggleOff,
  FaClipboardList,
} from "react-icons/fa";
import useUserRole from "../../../../../hooks/useUserRole";
import { useNavigate } from "react-router";

const ExamListTable = ({
  exams,
  onEdit,
  togglePublishStatus,
  handleDelete,
}) => {
  const { role } = useUserRole();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleResultEntryClick = (config) => {
    if (role === "admin") {
      navigate(`/admin/result-entry/${config._id}`, {
        state: { examData: config },
      });
    } else if (role === "teacher") {
      navigate(`/teacher/result-entry/${config._id}`, {
        state: { examData: config },
      });
    } else {
      alert("You don't have permission to access this.");
    }
  };

  const filtered = (exams || [])
    .filter(
      (ex) =>
        ex.examName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ex.className?.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-xl font-bold text-gray-700">All Exam Records</h2>
        <input
          type="text"
          placeholder="Search by exam or class..."
          className="w-full md:w-80 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                <th className="p-4 border-b">Exam Name</th>
                <th className="p-4 border-b">Class</th>
                <th className="p-4 border-b">Year</th>
                <th className="p-4 border-b">Subjects</th>
                <th className="p-4 border-b">Status</th>
                <th className="p-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((config) => (
                  <tr
                    key={config._id}
                    className="hover:bg-gray-50 transition-colors border-b"
                  >
                    <td className="p-4 font-medium">{config.examName}</td>
                    <td className="p-4">{config.className}</td>
                    <td className="p-4">{config.academicYear}</td>
                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {config.subjectsConfig?.length || 0} Subjects
                      </span>
                    </td>
                    <td className="p-4">
                      {role === "admin" ? (
                        <button
                          onClick={() => togglePublishStatus(config)}
                          className={`flex items-center gap-2 text-sm font-medium ${
                            config.isPublished
                              ? "text-green-600"
                              : "text-gray-400"
                          }`}
                        >
                          {config.isPublished ? (
                            <FaToggleOn size={24} />
                          ) : (
                            <FaToggleOff size={24} />
                          )}
                          {config.isPublished ? "Published" : "Draft"}
                        </button>
                      ) : (
                        <span
                          className={
                            config.isPublished
                              ? "text-green-600"
                              : "text-gray-400"
                          }
                        >
                          {config.isPublished ? "Published" : "Draft"}
                        </span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        {/* Result Entry Button */}
                        <button
                          onClick={() => handleResultEntryClick(config)}
                          title="Result Entry"
                          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          <FaClipboardList />
                        </button>
                        {role === "admin" && (
                          <>
                            <button
                              onClick={() => onEdit(config)}
                              title="Exam config Edit"
                              className="p-2 bg-amber-500 text-white rounded hover:bg-amber-600"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(config._id)}
                              title="Delete Exam"
                              className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                              <FaTrashAlt />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-10 text-center text-gray-400">
                    No exams found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExamListTable;
