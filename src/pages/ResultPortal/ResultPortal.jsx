import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaFileDownload,
  FaTrophy,
  FaGraduationCap,
  FaCheckCircle,
} from "react-icons/fa";
import useFetchResult from "../../hooks/useFetchResult";
import axios from "axios";

const ResultPortal = () => {
  const [searchMode, setSearchMode] = useState("individual");
  const [hasSearched, setHasSearched] = useState(false);
  const [exams, setExams] = useState([]);
  const [sortType, setSortType] = useState("marks");
  const [filters, setFilters] = useState({
    className: "",
    examName: "",
    academicYear: "",
    studentId: "",
  });

  // Function to load exam list
  const fetchExams = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/exam-configs`,
      );
      setExams(res.data.data);
    } catch (err) {
      console.error("Error fetching exams:", err);
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  const academicYears = [...new Set(exams?.map((e) => e.academicYear))];

  const [selectedYear, setSelectedYear] = useState("");
  const filteredExams = exams?.filter((e) => e.academicYear === selectedYear);

  const { data: result, isLoading } = useFetchResult(filters);
  if (result) {
    console.log("My Result Data:", result);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newFilters = {
      className: formData.get("className"),
      academicYear: formData.get("academicYear"),
      examName: formData.get("examName"),
    };

    if (searchMode === "individual") {
      newFilters.studentId = formData.get("studentId");
    }

    setFilters(newFilters);
    setHasSearched(true);
  };

  const sortedResult = Array.isArray(result)
    ? [...result].sort((a, b) => {
        if (sortType === "merit") {
          if (a.status === "Pass" && b.status !== "Pass") return -1;
          if (a.status !== "Pass" && b.status === "Pass") return 1;

          if (b.gpa !== a.gpa) {
            return b.gpa - a.gpa;
          }

          if (b.totalObtainedMarks !== a.totalObtainedMarks) {
            return b.totalObtainedMarks - a.totalObtainedMarks;
          }

          return (a.student?.roll || 0) - (b.student?.roll || 0);
        }
        if (sortType === "marks")
          return b.totalObtainedMarks - a.totalObtainedMarks;
        if (sortType === "gpa") return b.gpa - a.gpa;
        if (sortType === "roll")
          return (a.student?.roll || 0) - (b.student?.roll || 0);
        return 0;
      })
    : result;

  const handleDownload = () => {
    const params = {
      className: filters.className,
      examName: filters.examName,
      academicYear: filters.academicYear,
      sortBy: searchMode === "class" ? sortType : "",
    };

    if (searchMode === "individual" && filters.studentId) {
      params.studentId = filters.studentId;
    }

    const queryParams = new URLSearchParams(params).toString();

    const downloadUrl = `${import.meta.env.VITE_API_URL}/api/download-pdf?${queryParams}`;

    window.open(downloadUrl, "_blank");
  };

  if (isLoading) {
    return <div className="text-center py-20">Loading Results...</div>;
  }

  if (hasSearched && !result) {
    return (
      <div className="text-center py-20 text-red-500">
        No data found for these filters.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* --- Header Section --- */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-100 pb-10">
          <div>
            <h1 className="text-5xl font-black italic uppercase tracking-tighter">
              Result <span className="text-gray-300">Dashboard</span>
            </h1>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.4em] mt-2">
              Academic Performance & Analytics
            </p>
          </div>

          <div className="flex bg-gray-100 p-1 rounded-2xl">
            <button
              onClick={() => {
                setSearchMode("individual");
                setHasSearched(false);
              }}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${searchMode === "individual" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400"}`}
            >
              Individual
            </button>
            <button
              onClick={() => {
                setSearchMode("class");
                setHasSearched(false);
              }}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${searchMode === "class" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400"}`}
            >
              Class-wise
            </button>
          </div>
        </div>

        {/* --- Search Filters --- */}
        <form
          onSubmit={handleSearch}
          className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end mb-16"
        >
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 italic">
              Academic Year
            </label>
            <select
              name="academicYear"
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:border-primary outline-none font-bold text-gray-700 cursor-pointer appearance-none"
            >
              <option value="">Select Year</option>
              {academicYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 italic">
              Exam Name
            </label>
            <select
              name="examName"
              className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:border-primary outline-none font-bold text-gray-700 cursor-pointer appearance-none"
            >
              <option value="">Select Exam</option>
              {filteredExams?.map((exam) => (
                <option key={exam._id} value={exam.examName}>
                  {exam.examName}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 italic">
              Select Class
            </label>
            <select
              name="className"
              required
              className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:border-primary outline-none font-bold text-gray-700 cursor-pointer appearance-none"
            >
              <option value="">Choose Class</option>
              <option value="Play">Play</option>
              <option value="Nursery">Nursery</option>
              <option value="One">One</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
              <option value="Four">Four</option>
              <option value="Five">Five</option>
              <option value="Six">Six</option>
              <option value="Seven">Seven</option>
              <option value="Eight">Eight</option>
              <option value="Nine">Nine</option>
              <option value="Ten">Ten</option>
            </select>
          </div>

          {searchMode === "individual" && (
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 italic">
                Student Id
              </label>
              <input
                required
                name="studentId"
                type="text"
                placeholder="Ex: 2026101"
                className="w-full p-4 bg-white border border-gray-200 rounded-2xl focus:border-primary outline-none font-bold text-gray-700 transition-all"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full h-[58px] bg-gray-900 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl hover:bg-primary transition-all flex items-center justify-center gap-3"
          >
            <FaSearch size={14} /> Search
          </button>
        </form>

        {/* --- Result Rendering --- */}
        {hasSearched ? (
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-500">
            {searchMode === "individual" ? (
              /* Individual View */
              <div className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200/50">
                <div className="p-10 bg-gray-900 text-white flex justify-between items-end">
                  <div>
                    <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-1">
                      Mark Sheet
                    </h2>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                      {result?.student?.name} • {result.class}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-black italic text-primary leading-none">
                      {result.grade}
                    </p>
                    <p className="text-[10px] font-black text-gray-500 uppercase mt-1">
                      GPA {result.totalGPA}
                    </p>
                  </div>
                </div>
                <div className="p-8 md:p-12 space-y-5">
                  {result.subjects.map((sub, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0"
                    >
                      <span className="font-bold text-gray-800">
                        {sub.subjectName}
                      </span>
                      <div className="flex gap-8 items-center font-black italic">
                        <span className="text-gray-300 text-sm">
                          Marks: {sub.obtainedMarks}
                        </span>
                        <span className="text-primary">{sub.grade}</span>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={handleDownload}
                    className="w-full mt-8 py-4 bg-gray-50 text-gray-900 font-black uppercase tracking-widest rounded-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <FaFileDownload /> Download Transcript
                  </button>
                </div>
              </div>
            ) : (
              /* --- Class-wise View --- */
              <div className="space-y-8">
                {/* Sorting Tabs */}
                <div className="flex flex-wrap items-center gap-4 bg-gray-50 p-2 rounded-2xl w-fit border border-gray-100">
                  <span className="text-[10px] font-black uppercase text-gray-400 px-4 italic">
                    Sort By:
                  </span>
                  {[
                    { id: "merit", label: "Merit List" },
                    { id: "marks", label: "Total Marks" },
                    { id: "gpa", label: "GPA" },
                    { id: "roll", label: "Roll No" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSortType(tab.id)}
                      className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        sortType === tab.id
                          ? "bg-white text-gray-900 shadow-sm border border-gray-100"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Top 3 Cards (Using sortedResult) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {sortedResult.slice(0, 3).map((top, i) => (
                    <div
                      key={i}
                      className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center shadow-sm relative overflow-hidden group hover:border-primary/30 transition-all"
                    >
                      <FaTrophy
                        className={`text-3xl mx-auto mb-4 ${top.rank === 1 ? "text-amber-500" : top.rank === 2 ? "text-gray-400" : "text-orange-400"}`}
                      />
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1 italic">
                        Rank #{top.rank}
                      </p>
                      <p className="text-xl font-black text-gray-900 italic">
                        {top.student?.name}
                      </p>
                      <p className="text-xs font-bold text-primary mt-1 uppercase tracking-widest">
                        Marks: {top.totalObtainedMarks}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50/50 border-b border-gray-100">
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                          Roll
                        </th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                          Student Name
                        </th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">
                          GPA
                        </th>
                        <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {sortedResult.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-gray-50/50 transition-colors group"
                        >
                          <td className="p-6 font-bold text-gray-300 italic group-hover:text-primary transition-colors">
                            #{row.student.roll}
                          </td>
                          <td className="p-6 font-bold text-gray-800">
                            {row.student?.name}
                          </td>
                          <td className="p-6 font-black text-gray-900 text-center tracking-tighter">
                            {row?.gpa}
                          </td>
                          <td className="p-6 text-right">
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase text-green-500 bg-green-50 px-3 py-1 rounded-full">
                              <FaCheckCircle /> {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <button
                    onClick={handleDownload}
                    className="w-full mt-8 py-4 bg-gray-50 text-gray-900 font-black uppercase tracking-widest rounded-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <FaFileDownload /> Download Transcript
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20 flex flex-col items-center justify-center space-y-4 opacity-10">
            <FaGraduationCap size={100} />
            <p className="font-black uppercase tracking-[1em] text-sm">
              Enter Details
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPortal;
