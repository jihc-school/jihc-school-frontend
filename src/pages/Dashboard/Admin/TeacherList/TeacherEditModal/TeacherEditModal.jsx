import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FaTimes,
  FaPlus,
  FaTrash,
  FaGraduationCap,
  FaUserTag,
} from "react-icons/fa";

const TeacherEditModal = ({ teacher, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({ ...teacher });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSpecialistChange = (index, value) => {
    const newSpecialties = [...formData.specialistIn];
    newSpecialties[index] = value;
    setFormData({ ...formData, specialistIn: newSpecialties });
  };

  const addSpecialty = () => {
    setFormData({ ...formData, specialistIn: [...formData.specialistIn, ""] });
  };

  const removeSpecialty = (index) => {
    const newSpecialties = formData.specialistIn.filter((_, i) => i !== index);
    setFormData({ ...formData, specialistIn: newSpecialties });
  };

  const handleAcademicChange = (index, field, value) => {
    const newJourney = [...formData.academicJourney];
    newJourney[index][field] = value;
    setFormData({ ...formData, academicJourney: newJourney });
  };

  const addAcademic = () => {
    setFormData({
      ...formData,
      academicJourney: [
        ...formData.academicJourney,
        { degree: "", institution: "" },
      ],
    });
  };

  const removeAcademic = (index) => {
    const newJourney = formData.academicJourney.filter((_, i) => i !== index);
    setFormData({ ...formData, academicJourney: newJourney });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/update-teacher/${teacher._id}`,
        formData,
      );
      Swal.fire({
        icon: "success",
        title: "Updated!",
        showConfirmButton: false,
        timer: 1500,
      });
      onUpdate();
      onClose();
    } catch (error) {
      Swal.fire(
        "Error!",
        error.response?.data?.message || "Update failed",
        "error",
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-2 md:p-6">
      <div className="bg-white rounded-[2.5rem] max-w-4xl w-full p-6 md:p-10 shadow-2xl relative max-h-[95vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-black transition-colors"
        >
          <FaTimes size={20} />
        </button>

        <div className="mb-8 shrink-0">
          <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900">
            Edit <span className="text-indigo-600">Teacher Profile</span>
          </h3>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
            Ref ID: {teacher._id}
          </p>
        </div>

        <form
          onSubmit={handleUpdate}
          className="overflow-y-auto pr-2 custom-scrollbar space-y-10 flex-grow"
        >
          {/* Section: Basic Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <InputGroup
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputGroup
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <InputGroup
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
            <InputGroup
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputGroup
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Section: Specialist Areas (Dynamic Array) */}
          <section className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                <FaUserTag /> Specialist Areas
              </h4>
              <button
                type="button"
                onClick={addSpecialty}
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <FaPlus size={10} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {formData.specialistIn.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    value={item}
                    onChange={(e) =>
                      handleSpecialistChange(index, e.target.value)
                    }
                    className="flex-grow px-4 py-2 bg-white border border-gray-200 rounded-xl font-bold text-sm outline-none focus:border-indigo-600"
                    placeholder="e.g. Mathematics"
                  />
                  <button
                    type="button"
                    onClick={() => removeSpecialty(index)}
                    className="text-red-400 hover:text-red-600 px-2"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Academic Journey (Object Array) */}
          <section>
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                <FaGraduationCap /> Academic Journey
              </h4>
              <button
                type="button"
                onClick={addAcademic}
                className="text-indigo-600 font-black text-[10px] uppercase hover:underline"
              >
                + Add Education
              </button>
            </div>
            <div className="space-y-4">
              {formData.academicJourney.map((edu, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end bg-gray-50/50 p-4 rounded-2xl relative group"
                >
                  <InputGroup
                    label="Degree"
                    value={edu.degree}
                    onChange={(e) =>
                      handleAcademicChange(index, "degree", e.target.value)
                    }
                  />
                  <div className="flex gap-2 items-center">
                    <div className="flex-grow">
                      <InputGroup
                        label="Institution"
                        value={edu.institution}
                        onChange={(e) =>
                          handleAcademicChange(
                            index,
                            "institution",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeAcademic(index)}
                      className="text-red-400 hover:text-red-600 mb-2"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </form>

        <div className="pt-6 border-t shrink-0">
          <button
            onClick={handleUpdate}
            className="w-full py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-indigo-600 transition-all uppercase tracking-widest shadow-lg"
          >
            Update Faculty Profile
          </button>
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, ...props }) => (
  <div className="flex flex-col gap-1 w-full">
    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-indigo-600 font-bold text-gray-700 text-sm transition-all"
    />
  </div>
);

export default TeacherEditModal;
