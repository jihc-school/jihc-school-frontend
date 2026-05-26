import React from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const StudentTable = ({ students, onView, onEdit, onDelete }) => {
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/delete-student/${id}`,
        );
        Swal.fire("Deleted!", "Record has been removed.", "success");
        onDelete();
      } catch (err) {
        Swal.fire("Error!", "Delete failed.", "error");
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-4 rounded-tl-xl font-bold uppercase text-xs">
              Roll
            </th>
            <th className="p-4 font-bold uppercase text-xs">Name</th>
            <th className="p-4 font-bold uppercase text-xs">Student ID</th>
            <th className="p-4 font-bold uppercase text-xs">Class</th>
            <th className="p-4 font-bold uppercase text-xs">Phone</th>
            <th className="p-4 rounded-tr-xl font-bold uppercase text-xs text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {students.map((s) => (
            <tr key={s._id} className="hover:bg-blue-50/30 transition-colors">
              <td className="p-4 font-black text-gray-900">{s.roll}</td>
              <td className="p-4 font-bold text-gray-700">{s.name}</td>
              <td className="p-4 text-gray-500 font-mono text-sm">
                {s.studentId}
              </td>
              <td className="p-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase">
                  Class {s.class}
                </span>
              </td>
              <td className="p-4 font-medium text-gray-600">{s.phone}</td>
              <td className="p-4 text-center">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onView(s)}
                    className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => onEdit(s)}
                    className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(s._id)}
                    className="p-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-all"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
