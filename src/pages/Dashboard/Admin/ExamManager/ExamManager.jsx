import React, { useState, useEffect } from "react";
import axios from "axios";
import ExamListTable from "./ExamListTable/ExamListTable";
import ResultSetupForm from "./ResultSetupForm/ResultSetupForm";
import useFetchExam from "../../../../hooks/useFetchExam";
import { useQueryClient } from "@tanstack/react-query";

const ExamManager = () => {
  const { data: exams } = useFetchExam();
  const queryClient = useQueryClient();

  const togglePublishStatus = async (exams) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/api/update-exam-status/${exams._id}`,
        {
          isPublished: !exams.isPublished,
        },
      );
      queryClient.invalidateQueries({ queryKey: ["exams"] });
    } catch (err) {
      alert("Error updating status");
    }
  };

  const handleDelete = async (id) => {
    if (
      window.confirm(
        "Are you sure? This will delete the configuration and ALL student results for this exam!",
      )
    ) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/delete-exam/${id}`,
        );
        queryClient.invalidateQueries({ queryKey: ["exams"] });
        alert("Exam deleted successfully");
      } catch (error) {
        alert("Error deleting exam");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
          Exam Manager
        </h1>

        {/* Result Setup Form */}
        <ResultSetupForm />

        <div className="my-10 border-t border-gray-200"></div>

        <ExamListTable
          exams={exams}
          handleDelete={handleDelete}
          togglePublishStatus={togglePublishStatus}
        />
      </div>
    </div>
  );
};

export default ExamManager;
