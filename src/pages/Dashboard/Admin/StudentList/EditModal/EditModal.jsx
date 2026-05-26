import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTimes } from "react-icons/fa";

const EditModal = ({ student, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({ ...student });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/update-student/${student._id}`,
        formData,
      );

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Student record has been updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      onUpdate();
      onClose();
    } catch (error) {
      Swal.fire(
        "Error!",
        error.response?.data?.message || "Operation failed",
        "error",
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-2 md:p-6">
      <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] max-w-4xl w-full p-6 md:p-10 shadow-2xl relative max-h-[95vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-black transition-colors z-10"
        >
          <FaTimes size={20} />
        </button>

        {/* Modal Header */}
        <div className="mb-8 shrink-0">
          <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900">
            Edit Student <span className="text-blue-600">Profile</span>
          </h3>
          <p className="text-xs font-bold text-gray-400 uppercase">
            System ID: {student.studentId}
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleUpdate}
          className="overflow-y-auto pr-2 custom-scrollbar space-y-8 flex-grow"
        >
          {/* Section: Academic & Basic Info */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest border-b pb-2">
              Academic Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 ml-1">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 outline-none font-bold text-gray-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 ml-1">
                  Roll Number
                </label>
                <input
                  name="roll"
                  type="number"
                  value={formData.roll}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 outline-none font-bold text-gray-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 ml-1">
                  Class
                </label>
                <input
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 outline-none font-bold text-gray-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 ml-1">
                  Section
                </label>
                <input
                  name="section"
                  value={formData.section || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 outline-none font-bold text-gray-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 ml-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 outline-none font-bold cursor-pointer text-gray-700"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 ml-1">
                  Blood Group
                </label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 outline-none font-bold cursor-pointer text-gray-700"
                >
                  <option value="">Select Blood</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                    (bg) => (
                      <option key={bg} value={bg}>
                        {bg}
                      </option>
                    ),
                  )}
                </select>
              </div>
            </div>
          </div>

          {/* Section: Contact & Account Metadata */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest border-b pb-2">
              Contact & Account Status
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 ml-1">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 outline-none font-bold text-gray-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 ml-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 outline-none font-bold text-gray-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 ml-1">
                  Date of Birth
                </label>
                <input
                  name="dateOfBirth"
                  type="date"
                  value={
                    formData.dateOfBirth
                      ? formData.dateOfBirth.split("T")[0]
                      : ""
                  }
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 outline-none font-bold cursor-pointer text-gray-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 ml-1">
                  Account Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 outline-none font-bold cursor-pointer text-gray-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section: Address */}
          <div className="space-y-1 pb-4">
            <label className="text-[10px] font-black uppercase text-gray-500 ml-1">
              Residential Address
            </label>
            <textarea
              name="address"
              rows="2"
              value={formData.address || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-600 outline-none font-bold text-gray-700 resize-none"
            ></textarea>
          </div>
        </form>

        <div className="pt-6 border-t shrink-0">
          <button
            type="submit"
            onClick={handleUpdate}
            className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-blue-600 transition-all uppercase tracking-widest shadow-lg active:scale-[0.98]"
          >
            Save Record Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
