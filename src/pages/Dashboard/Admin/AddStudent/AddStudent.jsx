import React, { useState } from "react";
import {
  FaUserPlus,
  FaUser,
  FaEnvelope,
  FaIdCard,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaTint,
  FaCalendarAlt,
  FaVenusMars,
} from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import ImageInput from "../../../../components/Shared/ImageInput/ImageInput";
import { imageUploader } from "../../../../utils/imageUploader";

const AddStudent = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const imageFile = formData.get("studentImage");
    const studentData = Object.fromEntries(formData.entries());

    Object.keys(studentData).forEach((key) => {
      if (studentData[key] === "" || studentData[key] === null) {
        delete studentData[key];
      }
    });

    if (studentData.roll) {
      studentData.roll = Number(studentData.roll);
    }

    try {
      const imageUrl = await imageUploader(imageFile);

      const studentData = Object.fromEntries(formData.entries());

      studentData.image = imageUrl;

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/add-student`,
        studentData,
      );

      if (response.data.success || response.status === 201) {
        Swal.fire({
          title: "Success!",
          text: "Student has been registered successfully.",
          icon: "success",
          confirmButtonColor: "#111827",
        });
        e.target.reset();
      }
    } catch (error) {
      console.error("Backend Error:", error.response?.data);
      Swal.fire({
        title: "Error!",
        text:
          error.response?.data?.message ||
          error.response?.data?.error ||
          "Something went wrong.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 flex items-center gap-4">
          <div className="p-4 bg-gray-900 text-white rounded-2xl shadow-lg">
            <FaUserPlus size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900">
              Add New <span className="text-gray-300">Student</span>
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              Enrollment Portal
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none font-bold text-gray-700"
                />
              </div>
            </div>

            {/* Roll */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                Roll Number
              </label>
              <div className="relative">
                <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  required
                  name="roll"
                  type="number"
                  placeholder="Ex: 101"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none font-bold text-gray-700"
                />
              </div>
            </div>

            {/* Student ID */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                Student ID
              </label>
              <div className="relative">
                <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  required
                  name="studentId"
                  type="text"
                  placeholder="Ex: NHS2026001"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none font-bold text-gray-700"
                />
              </div>
            </div>

            {/* Class */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                Class
              </label>
              <div className="relative">
                <FaGraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <select
                  required
                  name="class"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none font-bold text-gray-700 appearance-none"
                >
                  <option value="">Select Class</option>
                  {[
                    "Play",
                    "Nersary",
                    "Two",
                    "Three",
                    "Four",
                    "Five",
                    "Six",
                    "Seven",
                    "Eight",
                    "Nine",
                    "Ten",
                  ].map((c) => (
                    <option key={c} value={c.toString()}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Section */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                Section
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  name="section"
                  type="text"
                  placeholder="Padma / A"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none font-bold text-gray-700"
                />
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                Gender
              </label>
              <div className="relative">
                <FaVenusMars className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <select
                  name="gender"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none font-bold text-gray-700 appearance-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                Date of Birth
              </label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  name="dateOfBirth"
                  type="date"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none font-bold text-gray-700"
                />
              </div>
            </div>

            {/* Blood Group */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                Blood Group
              </label>
              <div className="relative">
                <FaTint className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <select
                  name="bloodGroup"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none font-bold text-gray-700 appearance-none"
                >
                  <option value="">Select</option>
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

            {/* Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  name="email"
                  type="email"
                  placeholder="student@school.com"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none font-bold text-gray-700"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                Phone
              </label>
              <div className="relative">
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="017XXXXXXXX"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none font-bold text-gray-700"
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
                Address
              </label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  name="address"
                  type="text"
                  placeholder="Full Address"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none font-bold text-gray-700"
                />
              </div>
            </div>

            {/* Profile Image */}
            <ImageInput name="studentImage" />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-12 py-5 bg-gray-900 text-white font-black uppercase tracking-[0.2em] rounded-[1.5rem] hover:bg-black transition-all disabled:bg-gray-400"
          >
            {loading ? "Submitting..." : "Register Student"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
