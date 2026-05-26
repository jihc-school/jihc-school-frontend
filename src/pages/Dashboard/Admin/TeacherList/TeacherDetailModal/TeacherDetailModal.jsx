import React from "react";
import { FaTimes, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeacherDetailModal = ({ teacher, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999] p-2 md:p-6">
      <div className="bg-white rounded-[2.5rem] max-w-2xl w-full p-6 md:p-10 shadow-2xl relative max-h-[95vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-black transition-colors"
        >
          <FaTimes size={20} />
        </button>

        <div className="text-center mb-8 shrink-0">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${teacher.firstName}`}
            className="w-24 h-24 mx-auto bg-gray-100 rounded-3xl mb-4 border-4 border-white shadow-lg"
            alt=""
          />
          <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
            {teacher.firstName} {teacher.lastName}
          </h3>
          <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mt-1">
            {teacher.designation}
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 mt-4">
            {teacher.facebook && (
              <a
                href={teacher.facebook}
                className="text-gray-400 hover:text-blue-600"
              >
                <FaFacebook size={18} />
              </a>
            )}
            {teacher.twitter && (
              <a
                href={teacher.twitter}
                className="text-gray-400 hover:text-sky-500"
              >
                <FaTwitter size={18} />
              </a>
            )}
            {teacher.linkedin && (
              <a
                href={teacher.linkedin}
                className="text-gray-400 hover:text-blue-700"
              >
                <FaLinkedin size={18} />
              </a>
            )}
          </div>
        </div>

        <div className="overflow-y-auto pr-2 custom-scrollbar space-y-6">
          <section>
            <h4 className="text-[10px] font-black uppercase text-gray-400 mb-3 tracking-widest border-b pb-1">
              Professional Vision
            </h4>
            <p className="text-sm font-medium text-gray-600 italic">
              "{teacher.vision || "No vision statement provided."}"
            </p>
          </section>

          <div className="grid grid-cols-2 gap-4">
            <DetailItem label="Email" value={teacher.email} />
            <DetailItem label="Phone" value={teacher.phone} />
          </div>

          <section>
            <h4 className="text-[10px] font-black uppercase text-gray-400 mb-3 tracking-widest border-b pb-1">
              Academic Journey
            </h4>
            <div className="space-y-2">
              {teacher.academicJourney.map((edu, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-3 rounded-xl border border-gray-100"
                >
                  <p className="text-xs font-black text-gray-900 uppercase">
                    {edu.degree}
                  </p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tight">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-[10px] font-black uppercase text-gray-400 mb-3 tracking-widest border-b pb-1">
              Specialties & Awards
            </h4>
            <div className="flex flex-wrap gap-2">
              {teacher.specialistIn.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>
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
    <span className="font-bold text-gray-900 text-sm truncate block">
      {value}
    </span>
  </div>
);

export default TeacherDetailModal;
