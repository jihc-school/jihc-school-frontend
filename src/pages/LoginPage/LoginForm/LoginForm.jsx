import React, { useState } from "react";
import { FaUser, FaLock, FaArrowRight } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";

const LoginForm = ({ onForgot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login, role } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    try {
      await login(email, password);
      if (role === "admin") navigate("/admin/overview");
      else if (role === "teacher") navigate("/teacher/overview");
      else navigate("/student/overview");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="w-full">
      {/* --- Login Card (Bento Style) --- */}
      <div className="w-full bg-white/40 md:bg-white border border-gray-100 rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 shadow-xl shadow-gray-200/50 relative overflow-hidden group">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-full -mr-12 -mt-12 z-0 transition-transform group-hover:scale-110"></div>

        <form
          onSubmit={handleLogin}
          className="relative z-10 space-y-5 md:space-y-6"
        >
          {/* Email/ID Field */}
          <div className="space-y-2">
            <label className="text-[9px] md:text-[10px] font-black uppercase text-gray-400 ml-2 italic tracking-widest">
              Identity / Email
            </label>
            <div className="relative group">
              <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                <FaUser size={12} />
              </div>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@school.edu"
                className="w-full pl-12 md:pl-14 pr-6 py-3.5 md:py-4 bg-gray-50/80 border-none rounded-xl md:rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none font-bold text-sm md:text-base text-gray-700 transition-all placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-[9px] md:text-[10px] font-black uppercase text-gray-400 ml-2 italic tracking-widest">
              Access Password
            </label>
            <div className="relative group">
              <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                <FaLock size={12} />
              </div>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-12 md:pl-14 pr-6 py-3.5 md:py-4 bg-gray-50/80 border-none rounded-xl md:rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none font-bold text-sm md:text-base text-gray-700 transition-all placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Actions - Remember & Forgot */}
          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded border-gray-200 text-primary focus:ring-primary/20 cursor-pointer"
              />
              <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-600 transition-colors">
                Remember
              </span>
            </label>
            <button
              type="button"
              onClick={onForgot}
              className="text-[8px] md:text-[10px] font-black text-primary uppercase tracking-widest hover:underline transition-all"
            >
              Forgot?
            </button>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest p-3 rounded-xl border border-red-100 text-center italic">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 md:py-5 bg-gray-900 text-white font-black uppercase tracking-[0.2em] text-[11px] md:text-xs rounded-xl md:rounded-2xl shadow-xl hover:bg-primary hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
          >
            Enter Portal
            <FaArrowRight
              size={10}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
