import React from 'react';
import { FaPaperPlane, FaUserGraduate, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

const AdmissionForm = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <div className="bg-white border-2 border-gray-100 rounded-[3rem] shadow-2xl shadow-gray-200/50 overflow-hidden">
        
        {/* Form Header */}
        <div className="bg-primary p-10 text-white text-center">
          <h2 className="text-3xl font-black uppercase italic tracking-widest mb-2">Application Form</h2>
          <p className="opacity-80 font-medium uppercase text-xs tracking-[0.3em]">Fill in the details carefully</p>
        </div>

        <form className="p-8 md:p-16 space-y-12">
          
          {/* Section 1: Student Information */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <FaUserGraduate className="text-primary text-xl" />
              <h3 className="text-xl font-bold text-gray-800">Student Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-full">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Full Name of Student</label>
                <input type="text" placeholder="John Doe" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary font-bold text-gray-700 transition-all" />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Applying for Class</label>
                <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary font-bold text-gray-700">
                  <option>Select Grade</option>
                  <option>Playgroup</option>
                  <option>Class 1</option>
                  <option>Class 6</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Date of Birth</label>
                <input type="date" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary font-bold text-gray-700" />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Gender</label>
                <div className="flex gap-4">
                  <label className="flex-1 flex items-center justify-center gap-2 p-4 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-primary/5 transition-all">
                    <input type="radio" name="gender" className="radio radio-primary radio-sm" />
                    <span className="font-bold text-sm">Male</span>
                  </label>
                  <label className="flex-1 flex items-center justify-center gap-2 p-4 bg-gray-50 border border-gray-200 rounded-2xl cursor-pointer hover:bg-primary/5 transition-all">
                    <input type="radio" name="gender" className="radio radio-primary radio-sm" />
                    <span className="font-bold text-sm">Female</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Blood Group</label>
                <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary font-bold text-gray-700">
                  <option>Select Group</option>
                  <option>A+</option>
                  <option>B+</option>
                  <option>O+</option>
                  <option>AB+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Guardian Details */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <FaUsers className="text-primary text-xl" />
              <h3 className="text-xl font-bold text-gray-800">Guardian Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Father's Name</label>
                <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary font-bold text-gray-700" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Mother's Name</label>
                <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary font-bold text-gray-700" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Phone Number</label>
                <input type="tel" placeholder="+880" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary font-bold text-gray-700" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Email Address (Optional)</label>
                <input type="email" placeholder="example@mail.com" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-primary font-bold text-gray-700" />
              </div>
            </div>
          </div>

          {/* Section 3: Address */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <h3 className="text-xl font-bold text-gray-800">Address Information</h3>
            </div>
            <textarea rows="3" placeholder="Enter full present address..." className="w-full p-6 bg-gray-50 border border-gray-200 rounded-[2rem] focus:outline-none focus:border-primary font-bold text-gray-700 transition-all"></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button type="submit" className="w-full py-6 bg-primary text-white font-black uppercase tracking-[0.3em] rounded-[2rem] shadow-xl shadow-primary/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3">
              <FaPaperPlane /> Submit Application
            </button>
            <p className="text-center mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              By submitting, you agree to our admission policies.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;