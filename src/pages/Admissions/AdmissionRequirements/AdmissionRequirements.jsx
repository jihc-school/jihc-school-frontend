import React from 'react';
import { FaCheckCircle, FaInfoCircle, FaFileAlt } from 'react-icons/fa';

const AdmissionRequirements = () => {
  const eligibility = [
    { grade: "Playgroup", age: "3.5 - 4.5 Years" },
    { grade: "Nursery", age: "4.5 - 5.5 Years" },
    { grade: "Class 1", age: "6+ Years" },
    { grade: "Class 6", age: "11+ Years" },
  ];

  const documents = [
    "Attested copy of Birth Certificate",
    "4 Copies of Passport size photograph",
    "Previous School's Transfer Certificate (TC)",
    "Parent's NID Photocopy",
    "Student's Blood Group Certificate",
    "Academic Transcript / Report Card"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 bg-white border-y border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* --- Left Side: Eligibility Table --- */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <FaInfoCircle size={20} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 italic">Eligibility</h3>
          </div>
          
          <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 text-xs font-black uppercase tracking-widest text-gray-400">Class Grade</th>
                  <th className="py-4 text-xs font-black uppercase tracking-widest text-gray-400 text-right">Age Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {eligibility.map((item, index) => (
                  <tr key={index} className="group">
                    <td className="py-5 font-bold text-gray-800 group-hover:text-primary transition-colors">{item.grade}</td>
                    <td className="py-5 text-right font-medium text-gray-500 italic">{item.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-6 text-xs text-gray-400 font-medium leading-relaxed">
              * Age is calculated as of January 1st of the admission year. Slight relaxations may apply based on school policy.
            </p>
          </div>
        </div>

        {/* --- Right Side: Required Documents --- */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <FaFileAlt size={20} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 italic">Documents Needed</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-primary/20 transition-all">
                <FaCheckCircle className="text-primary mt-1 shrink-0" />
                <span className="text-sm font-semibold text-gray-700 leading-tight">
                  {doc}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-dashed border-primary/20">
            <p className="text-sm font-bold text-primary italic text-center">
              Please bring all original documents for verification during the interview session.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdmissionRequirements;