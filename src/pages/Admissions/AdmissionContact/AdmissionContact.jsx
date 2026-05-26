import React from 'react';
import { FaCalendarAlt, FaHeadset, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const AdmissionContact = () => {
  const dates = [
    { label: "Application Starts", date: "Jan 01, 2026", icon: <FaClock className="text-blue-500" /> },
    { label: "Form Deadline", date: "Feb 28, 2026", icon: <FaClock className="text-red-500" /> },
    { label: "Admission Test", date: "Mar 05, 2026", icon: <FaClock className="text-amber-500" /> },
    { label: "Final Result", date: "Mar 10, 2026", icon: <FaClock className="text-green-500" /> },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
        
        {/* --- Left Side: Important Dates --- */}
        <div className="lg:col-span-7 bg-white border border-gray-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-sm order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-xl md:rounded-2xl flex items-center justify-center text-primary shrink-0">
              <FaCalendarAlt size={18} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 italic uppercase leading-none">Important Dates</h3>
              <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Mark your calendar</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dates.map((item, index) => (
              <div key={index} className="p-5 md:p-6 bg-gray-50/50 border border-gray-100 rounded-[1.5rem] md:rounded-[2rem] group hover:bg-white hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  {item.icon}
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-gray-400">{item.label}</span>
                </div>
                <p className="text-lg md:text-xl font-black text-gray-800 italic">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Right Side: Help Support --- */}
        <div className="lg:col-span-5 bg-primary rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-white relative overflow-hidden flex flex-col order-1 lg:order-2 shadow-xl shadow-primary/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <div className="relative z-10 mb-8 md:mb-12">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8">
              <FaHeadset size={20} />
            </div>
            <h3 className="text-2xl md:text-3xl font-black italic uppercase leading-tight mb-3 md:mb-4">Admission <br className="hidden md:block"/> Helpline</h3>
            <p className="text-white/70 text-xs md:text-sm font-medium leading-relaxed">
              Direct assistance during office hours <br/> (8:00 AM - 4:00 PM).
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 relative z-10 mt-auto">
            <a href="tel:+8801234567890" className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl hover:bg-white hover:text-primary transition-all group overflow-hidden">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-primary/10 shrink-0">
                <FaPhoneAlt size={14}/>
              </div>
              <span className="font-bold tracking-wider text-sm md:text-base">+880 1234-567890</span>
            </a>

            <a href="mailto:admission@school.edu" className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl hover:bg-white hover:text-primary transition-all group overflow-hidden">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-primary/10 shrink-0">
                <FaEnvelope size={14}/>
              </div>
              <span className="font-bold tracking-wider text-xs md:text-sm truncate">admission@school.edu</span>
            </a>
          </div>
        </div>

      </div>
      
      <div className="mt-12 text-center px-4">
        <p className="text-[9px] md:text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] md:tracking-[0.4em]">
           Official Admission Portal • Session 2026
        </p>
      </div>
    </div>
  );
};

export default AdmissionContact;