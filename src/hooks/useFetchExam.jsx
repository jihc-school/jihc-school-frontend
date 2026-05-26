import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchExam = () => {
  return useQuery({
    queryKey: ["exams"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/exam-configs`);
      return res.data.data;
    },
  });
}

export default useFetchExam;