import React from "react";
import {
  FaGraduationCap,
  FaArrowRight,
  FaClipboardCheck,
} from "react-icons/fa";
import { Link } from "react-router";
import useUserRole from "../../../hooks/useUserRole";

const Banner = () => {
  const {role} = useUserRole()
  console.log(role)
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co.com/ccP22t2V/jihc.jpg"
          alt="School Assembly"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      <div className="max-w-384 w-full mx-auto @[1580px]:px-0 px-4 md:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl space-y-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-500 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            CBSE Affiliated | Estd. 1995
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
            Shaping Tomorrow's <br />
            <span className="text-amber-500">Leaders</span> Today
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
            Empowering students with knowledge, values, and skills to excel in
            academics and life. Join our family of 2500+ students and 100+
            experienced educators.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 pt-4">
            {/* Primary Action - Results */}
            <Link to={"/results"} className="btn btn-primary btn-lg rounded-full shadow-xl shadow-indigo-500/20 group px-8">
              <FaClipboardCheck className="text-xl" />
              Check Results
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary Action - Admission */}
            <Link to={"/admissions"} className="btn btn-outline btn-lg text-white border-white/40 hover:bg-white hover:text-black rounded-full px-8 backdrop-blur-sm">
              <FaGraduationCap className="text-xl" />
              Admissions Open
            </Link>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="flex items-center gap-8 pt-6 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">
                Admissions 2025-26
              </span>
              <span className="text-slate-400 text-xs uppercase tracking-widest">
                Now Open
              </span>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">100% Result</span>
              <span className="text-slate-400 text-xs uppercase tracking-widest">
                Board Examinations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Fade to next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-base-100 to-transparent"></div>
    </section>
  );
};

export default Banner;
