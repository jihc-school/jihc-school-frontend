import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import Swal from "sweetalert2";

const ForgotPasswordForm = ({ onBack }) => {
  const [email, setEmail] = useState("");

  // Handle Forgot Password
  const handleForgotPassword = async (email) => {
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        icon: "success",
        title: "Email Sent!",
        text: "Check your inbox to reset your password.",
        confirmButtonColor: "#111827",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong!",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="w-full bg-white/40 md:bg-white border border-gray-100 rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-8 md:p-10 shadow-xl shadow-gray-200/50 relative overflow-hidden">
      <h2 className="text-gray-800 font-black text-xl mb-6 uppercase tracking-widest">
        Reset Access
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleForgotPassword(email);
        }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-gray-400 ml-2 italic tracking-widest">
            Enter Registered Email
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@school.edu"
            className="w-full px-6 py-4 bg-gray-50/80 border-none rounded-2xl outline-none font-bold text-sm text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gray-900 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-primary transition-all"
        >
          Send Reset Link
        </button>

        <button
          type="button"
          onClick={onBack}
          className="w-full text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-gray-600 transition-colors"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
