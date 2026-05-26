import React, { useState } from "react";
import {
  FaUserPlus,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaTasks,
  FaLightbulb,
} from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import ImageInput from "../../../../components/Shared/ImageInput/ImageInput";
import { imageUploader } from "../../../../utils/imageUploader";

const AddTeacher = () => {
  const [loading, setLoading] = useState(false);

  const [specialistIn, setSpecialistIn] = useState("");
  const [awards, setAwards] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const [academicJourney, setAcademicJourney] = useState([
    { degree: "", institution: "" },
  ]);

  const handleAcademicChange = (index, field, value) => {
    const updatedJourney = [...academicJourney];
    updatedJourney[index][field] = value;
    setAcademicJourney(updatedJourney);
  };

  const addAcademicField = () => {
    setAcademicJourney([...academicJourney, { degree: "", institution: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const imageFile = formData.get("teacherImage");

    try {
      const imageUrl = await imageUploader(imageFile);

      const data = Object.fromEntries(formData.entries());

      const teacherData = {
        ...data,
        image: imageUrl,
        specialistIn: specialistIn
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s !== ""),
        awards: awards
          .split(",")
          .map((a) => a.trim())
          .filter((a) => a !== ""),
        responsibilities: responsibilities
          .split(",")
          .map((r) => r.trim())
          .filter((r) => r !== ""),
        academicJourney: academicJourney.filter(
          (item) => item.degree && item.institution,
        ),
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/add-teacher`,
        teacherData,
      );

      if (response.data.success || response.status === 201) {
        Swal.fire({
          title: "Success!",
          text: "Teacher added successfully.",
          icon: "success",
          confirmButtonColor: "#111827",
        });

        e.target.reset();
        setSpecialistIn("");
        setAwards("");
        setResponsibilities("");
        setAcademicJourney([{ degree: "", institution: "" }]);
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text:
          error.response?.data?.message ||
          error.message ||
          "Failed to add teacher.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 flex items-center gap-4">
          <div className="p-4 bg-gray-900 text-white rounded-2xl shadow-lg">
            <FaUserPlus size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-black italic uppercase text-gray-900">
              Add New <span className="text-gray-400">Teacher</span>
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Faculty Management
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm space-y-8"
        >
          {/* Identification Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">
                First Name *
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  required
                  name="firstName"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-gray-700 outline-none"
                  placeholder="John"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">
                Last Name *
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  required
                  name="lastName"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-gray-700 outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>
            <ImageInput name="teacherImage"></ImageInput>
          </div>

          {/* Contact & Social Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">
                Email *
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-gray-700 outline-none"
                  placeholder="john@school.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">
                Phone *
              </label>
              <div className="relative">
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  required
                  name="phone"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-gray-700 outline-none"
                  placeholder="+8801..."
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative flex items-center">
              <FaFacebook className="absolute left-4 text-blue-600" />
              <input
                name="facebook"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                placeholder="Facebook Link"
              />
            </div>
            <div className="relative flex items-center">
              <FaTwitter className="absolute left-4 text-sky-400" />
              <input
                name="twitter"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                placeholder="Twitter Link"
              />
            </div>
            <div className="relative flex items-center">
              <FaLinkedin className="absolute left-4 text-blue-800" />
              <input
                name="linkedin"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none"
                placeholder="LinkedIn Link"
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Professional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">
                Designation *
              </label>
              <div className="relative">
                <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  required
                  name="designation"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-gray-700 outline-none"
                  placeholder="Senior Lecturer"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">
                Vision
              </label>
              <div className="relative">
                <FaLightbulb className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                <input
                  name="vision"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-gray-700 outline-none"
                  placeholder="Teaching philosophy..."
                />
              </div>
            </div>
          </div>

          {/* Dynamic Arrays */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">
                Specialist In (Comma Separated)
              </label>
              <input
                value={specialistIn}
                onChange={(e) => setSpecialistIn(e.target.value)}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-gray-700 outline-none"
                placeholder="Physics, Mathematics, Quantum Mechanics"
              />
            </div>

            {/* Academic Journey */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">
                Academic Journey
              </label>
              {academicJourney.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <input
                    value={item.degree}
                    onChange={(e) =>
                      handleAcademicChange(index, "degree", e.target.value)
                    }
                    className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none"
                    placeholder="Degree (e.g. MSc)"
                  />
                  <input
                    value={item.institution}
                    onChange={(e) =>
                      handleAcademicChange(index, "institution", e.target.value)
                    }
                    className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none"
                    placeholder="Institution"
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={addAcademicField}
                className="text-xs font-black uppercase text-gray-900 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                + Add More Education
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">
                  Awards (Comma Separated)
                </label>
                <textarea
                  value={awards}
                  onChange={(e) => setAwards(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-gray-700 outline-none h-24"
                  placeholder="Best Teacher 2024, Research Grant..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">
                  Responsibilities (Comma Separated)
                </label>
                <textarea
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-gray-700 outline-none h-24"
                  placeholder="Class Teacher, Lab In-charge..."
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-gray-900 text-white font-black uppercase tracking-[0.2em] rounded-3xl hover:bg-black transition-all disabled:bg-gray-400 shadow-xl"
          >
            {loading ? "Processing..." : "Register Teacher"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
