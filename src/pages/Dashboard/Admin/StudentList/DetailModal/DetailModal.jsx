import React from "react";
import { FaTimes } from "react-icons/fa";

const DetailModal = ({ student, onClose }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-2 md:p-6">
      <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] max-w-2xl w-full p-6 md:p-10 shadow-2xl relative max-h-[95vh] flex flex-col">
        {/* Close Action */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-black transition-colors z-10"
        >
          <FaTimes size={20} />
        </button>

        {/* Profile Header */}
        <div className="text-center mb-8 shrink-0">
          <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full mb-4 border-4 border-white shadow-lg overflow-hidden">
            <img
              src={
                student.profileImage ||
                `https://api.dicebear.com/7.x/initials/svg?seed=${student.name}`
              }
              alt="student profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight leading-none">
            {student.name}
          </h3>
          <p className="text-blue-600 font-bold text-xs uppercase mt-2 tracking-widest">
            ID: {student.studentId} • {student.status}
          </p>
        </div>

        {/* Scrollable Information Grid */}
        <div className="overflow-y-auto pr-2 custom-scrollbar space-y-6">
          {/* Section: Academic Details */}
          <div>
            <h4 className="text-[10px] font-black uppercase text-gray-400 mb-3 tracking-widest border-b pb-1">
              Academic Info
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <DetailItem label="Roll" value={student.roll} />
              <DetailItem label="Class" value={`Class ${student.class}`} />
              <DetailItem label="Section" value={student.section || "N/A"} />
              <DetailItem
                label="Admission"
                value={formatDate(student.admissionDate)}
              />
            </div>
          </div>

          {/* Section: Personal Details */}
          <div>
            <h4 className="text-[10px] font-black uppercase text-gray-400 mb-3 tracking-widest border-b pb-1">
              Personal Info
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <DetailItem label="Gender" value={student.gender || "N/A"} />
              <DetailItem
                label="Blood Group"
                value={student.bloodGroup || "N/A"}
              />
              <DetailItem
                label="Birth Date"
                value={formatDate(student.dateOfBirth)}
              />
            </div>
          </div>

          {/* Section: Contact & Location */}
          <div>
            <h4 className="text-[10px] font-black uppercase text-gray-400 mb-3 tracking-widest border-b pb-1">
              Contact & Location
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <DetailItem label="Email" value={student.email || "N/A"} />
              <DetailItem label="Phone" value={student.phone} />
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <span className="text-[10px] font-black uppercase text-gray-400 block mb-1">
                Residential Address
              </span>
              <p className="text-sm font-bold text-gray-700 leading-relaxed">
                {student.address || "No address provided"}
              </p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-4 border-t text-center shrink-0">
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
            Last Updated: {formatDate(student.updatedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
    <span className="text-[10px] font-black uppercase text-gray-400 block mb-1">
      {label}
    </span>
    <span className="font-bold text-gray-900 text-sm">{value}</span>
  </div>
);

export default DetailModal;
