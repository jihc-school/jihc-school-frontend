import React, { useState } from "react";
import axios from "axios";
import { FaPlus, FaSeedling, FaTrash } from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";

const ResultSetupForm = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    examName: "",
    className: "",
    academicYear: new Date().getFullYear().toString(),
    subjectsConfig: [{ name: "", fullMarks: 100 }],
  });

  const addSubject = () => {
    setFormData((prev) => ({
      ...prev,
      subjectsConfig: [...prev.subjectsConfig, { name: "", fullMarks: 100 }],
    }));
  };

  const removeSubject = (index) => {
    setFormData((prev) => ({
      ...prev,
      subjectsConfig: prev.subjectsConfig.filter((_, i) => i !== index),
    }));
  };

  const handleSubChange = (index, field, value) => {
    const updated = [...formData.subjectsConfig];
    updated[index][field] = field === "fullMarks" ? Number(value) : value;
    setFormData((prev) => ({ ...prev, subjectsConfig: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.examName || !formData.className) {
      alert("Please fill in all required fields.");
      return;
    }

    const payload = {
      ...formData,
      class: formData.className,
    };

    console.log("Sending payload:", payload);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/setup-exam`,
        payload,
      );
      queryClient.invalidateQueries({ queryKey: ["exams"] });
      alert("Blank Result Table Created Successfully!");
    } catch (err) {
      console.error("Submission error:", err.response || err);
      alert(err.response?.data?.message || "Error setting up exam");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-blue-600 mb-4 flex items-center gap-2">
        <FaPlus size={20} /> New Exam Setup
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Exam Name
          </label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-md focus:border-blue-500 outline-none"
            placeholder="e.g. Annual Exam"
            value={formData.examName}
            onChange={(e) =>
              setFormData({ ...formData, examName: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Class
          </label>
          <select
            required
            className="w-full p-2 border rounded-md focus:border-blue-500 outline-none"
            value={formData.className}
            onChange={(e) =>
              setFormData({ ...formData, className: e.target.value })
            }
          >
            <option value="">Select Class</option>
            <option value="Play">Play</option>
            <option value="Nursery">Nursery</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
            <option value="Four">Four</option>
            <option value="Five">Five</option>
            <option value="Six">Six</option>
            <option value="Seven">Seven</option>
            <option value="Eight">Eight</option>
            <option value="Nine">Nine</option>
            <option value="Ten">Ten</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Academic Year
          </label>
          <input
            type="text"
            value={formData.academicYear}
            className="w-full p-2 border rounded-md bg-gray-50"
            onChange={(e) =>
              setFormData({ ...formData, academicYear: e.target.value })
            }
          />
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <label className="block text-sm font-medium text-gray-600">
          Configure Subjects
        </label>
        {formData.subjectsConfig.map((sub, index) => (
          <div key={index} className="flex gap-3 items-center">
            <input
              type="text"
              placeholder="Subject Name"
              required
              className="flex-1 p-2 border rounded-md outline-none"
              value={sub.name}
              onChange={(e) => handleSubChange(index, "name", e.target.value)}
            />
            <input
              type="number"
              placeholder="Full Marks"
              required
              className="w-24 p-2 border rounded-md outline-none"
              value={sub.fullMarks}
              onChange={(e) =>
                handleSubChange(index, "fullMarks", e.target.value)
              }
            />
            {formData.subjectsConfig.length > 1 && (
              <button
                type="button"
                onClick={() => removeSubject(index)}
                className="text-red-400 hover:text-red-600 p-2"
              >
                <FaTrash size={18} />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addSubject}
          className="text-sm text-blue-500 font-medium hover:underline"
        >
          + Add Another Subject
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2"
      >
        <FaSeedling size={18} /> Generate Result Sheets
      </button>
    </form>
  );
};

export default ResultSetupForm;
