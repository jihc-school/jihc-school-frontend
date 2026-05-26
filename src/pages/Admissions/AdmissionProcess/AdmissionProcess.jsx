import React from 'react';
import { FaEdit, FaFileAlt, FaUsers, FaCheckDouble } from 'react-icons/fa';

const AdmissionProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Online Registration",
      desc: "Fill out our digital application form with student's basic information.",
      icon: <FaEdit />,
      accent: "border-blue-500"
    },
    {
      id: "02",
      title: "Submit Documents",
      desc: "Upload or bring required documents like Birth Certificate & Photos.",
      icon: <FaFileAlt />,
      accent: "border-purple-500"
    },
    {
      id: "03",
      title: "Assessment & Viva",
      desc: "A friendly interaction session for the student and guardians.",
      icon: <FaUsers />,
      accent: "border-amber-500"
    },
    {
      id: "04",
      title: "Final Enrollment",
      desc: "Complete the fee payment and welcome your child to our family.",
      icon: <FaCheckDouble />,
      accent: "border-green-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- Left Side: Image --- */}
        <div className="relative sticky top-24">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1523050853063-915894612233?auto=format&fit=crop&q=80&w=800" 
              alt="Admission Process" 
              className="w-full h-[600px] object-cover"
            />
          </div>
          {/* Decorative Badge */}
          <div className="absolute -bottom-8 -right-8 bg-primary p-10 rounded-[2.5rem] text-white shadow-xl hidden md:block">
            <p className="text-4xl font-black italic">100%</p>
            <p className="text-xs font-bold uppercase tracking-widest opacity-80">Digital Process</p>
          </div>
        </div>

        {/* --- Right Side: Steps --- */}
        <div className="space-y-6">
          <div className="mb-10">
            <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-2">Step by Step</h2>
            <h3 className="text-4xl font-bold text-gray-900 italic">How to apply?</h3>
          </div>

          {steps.map((item, index) => (
            <div 
              key={index} 
              className={`group flex items-center gap-6 bg-white p-6 md:p-8 rounded-3xl border-l-8 ${item.accent} shadow-sm hover:shadow-xl transition-all duration-300 border-y border-r border-gray-100`}
            >
              {/* Number Label */}
              <div className="text-5xl font-black text-gray-100 group-hover:text-primary/10 transition-colors leading-none">
                {item.id}
              </div>

              {/* Icon */}
              <div className="text-2xl text-gray-400 group-hover:text-primary transition-colors">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdmissionProcess;