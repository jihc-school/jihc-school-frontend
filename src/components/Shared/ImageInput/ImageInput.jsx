import React, { useState } from "react";

const ImageInput = ({ name = "image" }) => {
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const MAX_SIZE = 200 * 1024;

    if (file) {
      if (file.size > MAX_SIZE) {
        setError("Image size must be less than 200kb");
        e.target.value = "";
      } else {
        setError("");
      }
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">
        Profile Image
      </label>
      <input
        required
        name={name}
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        className="w-full py-3 px-4 bg-white border border-gray-200 rounded-2xl file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-gray-900 file:text-white font-bold text-gray-700 cursor-pointer"
      />
      {error && (
        <p className="text-red-500 text-[10px] font-bold ml-2 mt-1">{error}</p>
      )}
    </div>
  );
};

export default ImageInput;
