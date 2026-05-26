import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSave, FaArrowLeft, FaSpinner } from "react-icons/fa";
import { useParams } from "react-router";

const ResultEntryPage = ({ onBack }) => {
  const [allResults, setAllResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [examData, setExamData] = useState(null);
  const { examId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const examRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/exam-details/${examId}`,
        );
        const resultsRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/get-edit-results?examId=${examId}`,
        );

        const { exam, students } = examRes.data;
        const savedResults = resultsRes.data.data || [];

        setExamData(exam);

        const mergedData = students.map((student) => {
          const studentPrevResult = savedResults.find(
            (r) => r.student?._id === student._id,
          );

          return {
            studentOid: student._id,
            name: student.name,
            roll: student.roll,
            subjects: exam.subjectsConfig.map((config) => {
              const savedSub = studentPrevResult?.subjects?.find(
                (s) => s.subjectName === config.name,
              );
              return {
                subjectName: config.name,
                fullMarks: config.fullMarks,
                obtainedMarks: savedSub ? savedSub.obtainedMarks : 0,
              };
            }),
          };
        });
        setAllResults(mergedData);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (examId) fetchData();
  }, [examId]);

  const handleMarkChange = (studentOid, subjectName, value, fullMarks) => {
    const numValue = Number(value);
    if (numValue < 0 || numValue > fullMarks) return;

    setAllResults((prev) =>
      prev.map((s) =>
        s.studentOid === studentOid
          ? {
              ...s,
              subjects: s.subjects.map((sub) =>
                sub.subjectName === subjectName
                  ? { ...sub, obtainedMarks: numValue }
                  : sub,
              ),
            }
          : s,
      ),
    );
  };

  const handleSave = async () => {
    if (!window.confirm("Save all changes?")) return;
    setSaving(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/save-bulk`, {
        examId: examId,
        allResults: allResults,
        subjectsConfig: examData.subjectsConfig,
      });
      alert("Results saved successfully!");
    } catch (err) {
      alert("Failed to save.");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !examData)
    return (
      <div className="p-10 text-center">
        <FaSpinner className="animate-spin inline" /> Loading...
      </div>
    );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="w-full mb-6 flex justify-between items-center">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">
            Second Terminal Exam
          </h2>
          <button
            onClick={handleSave}
            disabled={saving}
            className="btn btn-primary hover:btn-outline hover:border-2 border-primary hover:text-primary font-bold px-4 rounded-xl hover:bg-transparent"
          >
            {saving ? "Saving..." : "Save All"}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-white border-b-2 border-gray-100">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-left">
                  Roll
                </th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-left min-w-[200px]">
                  Student Name
                </th>
                {examData.subjectsConfig.map((sub) => (
                  <th
                    key={sub.name}
                    className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-center"
                  >
                    {sub.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {allResults.map((studentRow) => (
                <tr
                  key={studentRow.studentOid}
                  className="hover:bg-indigo-50/30 transition-colors group"
                >
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                    #{studentRow.roll}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {studentRow.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      Class: 10 | Section: A
                    </div>{" "}
                    {/* Example sub-text */}
                  </td>
                  {studentRow.subjects.map((sub) => (
                    <td key={sub.subjectName} className="px-4 py-4 text-center">
                      <input
                        type="number"
                        placeholder="00"
                        className="w-14 h-10 border-2 border-gray-100 rounded-lg text-center font-bold text-gray-700 
                             focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none
                             transition-all bg-gray-50 group-hover:bg-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ..."
                        value={sub.obtainedMarks}
                        onChange={(e) =>
                          handleMarkChange(
                            studentRow.studentOid,
                            sub.subjectName,
                            e.target.value,
                            sub.fullMarks,
                          )
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultEntryPage;
