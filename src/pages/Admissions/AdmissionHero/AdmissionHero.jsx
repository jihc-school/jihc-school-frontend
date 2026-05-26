import React from 'react';
import { FaCalendarCheck, FaClock } from 'react-icons/fa';

const AdmissionHero = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Welcome Text */}
          <div className="text-left">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-bold text-sm uppercase tracking-widest">
                Session 2026-27
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Empowering <br /> 
              <span className="text-primary">Next Generation</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
              Admission is now open for all classes from Play to Grade 10. Start your child's journey toward excellence today.
            </p>
          </div>

          {/* Timeline / Important Dates Card */}
          <div className="bg-white border-2 border-primary/20 p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <FaCalendarCheck className="text-primary" /> Admission Timeline
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                  <FaClock className="text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Application Starts</p>
                  <p className="text-lg font-bold text-gray-800">January 01, 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                  <FaClock className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Deadline</p>
                  <p className="text-lg font-bold text-gray-800">February 28, 2026</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-dashed border-gray-200">
               <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-gray-500 uppercase tracking-widest">Office Hours</span>
                  <span className="text-primary italic">08:00 AM - 04:00 PM</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdmissionHero;