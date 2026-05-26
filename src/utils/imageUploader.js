import axios from "axios";

export const imageUploader = async (file) => {
  const MAX_SIZE = 200 * 1024; // 200KB

  if (file && file.size > MAX_SIZE) {
    throw new Error("Image size must be less than 200kb");
  }

  if (!file) return null;

  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data?.success) {
      return response.data.data.url;
    } else {
      throw new Error("Upload failed from server side");
    }
  } catch (error) {
    console.error("ImgBB Error Details:", error.response?.data);
    throw new Error(error.response?.data?.error?.message || "Image upload failed");
  }
};
