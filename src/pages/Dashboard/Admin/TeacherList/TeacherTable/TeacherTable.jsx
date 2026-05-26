import React from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const TeacherTable = ({ teachers, onView, onEdit, onDelete }) => {
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This teacher profile will be removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Delete",
    });
    if (result.isConfirmed) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/delete-teacher/${id}`,
        );
        Swal.fire("Deleted!", "Teacher record removed.", "success");
        onDelete();
      } catch (err) {
        Swal.fire("Error!", "Failed to delete.", "error");
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="p-4 rounded-tl-xl font-bold uppercase text-xs">
              Name
            </th>
            <th className="p-4 font-bold uppercase text-xs">Designation</th>
            <th className="p-4 font-bold uppercase text-xs">Phone</th>
            <th className="p-4 font-bold uppercase text-xs">Specialist In</th>
            <th className="p-4 rounded-tr-xl font-bold uppercase text-xs text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {teachers.map((t) => (
            <tr key={t._id} className="hover:bg-indigo-50/30 transition-colors">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    className="w-8 h-8 rounded-full bg-gray-100"
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${t.firstName}`}
                    alt=""
                  />
                  <span className="font-bold text-gray-700">
                    {t.firstName} {t.lastName}
                  </span>
                </div>
              </td>
              <td className="p-4 font-black text-indigo-600 text-xs uppercase tracking-wider">
                {t.designation}
              </td>
              <td className="p-4 text-gray-500 font-medium">{t.phone}</td>
              <td className="p-4">
                <div className="flex flex-wrap gap-1">
                  {t.specialistIn.slice(0, 2).map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[9px] font-bold uppercase"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </td>
              <td className="p-4">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onView(t)}
                    className="p-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg transition-all"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => onEdit(t)}
                    className="p-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg transition-all"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(t._id)}
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

export default TeacherTable;
