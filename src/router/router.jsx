import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Gallery from "../pages/Gallery/Gallery";
import Teachers from "../pages/Teachers/Teachers";
import TeacherDetails from "../pages/TeacherDetails/TeacherDetails";
import FeeStructure from "../pages/FeeStructure/FeeStructure";
import Admissions from "../pages/Admissions/Admissions";
import ResultPortal from "../pages/ResultPortal/ResultPortal";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardLayouts from "../layouts/DashboardLayouts";
import AddStudent from "../pages/Dashboard/Admin/AddStudent/AddStudent";
import AddTeacher from "../pages/Dashboard/Admin/AddTeacher/AddTeacher";
import StudentList from "../pages/Dashboard/Admin/StudentList/StudentList";
import TeacherList from "../pages/Dashboard/Admin/TeacherList/TeacherList";
import ResultSetup from "../pages/Dashboard/Admin/ExamManager/ExamManager";
import ExamManager from "../pages/Dashboard/Admin/ExamManager/ExamManager";
import ResultEntryPage from "../pages/Dashboard/ResultEntryPage/ResultEntryPage";
import AdminOverview from "../pages/Dashboard/Admin/AdminOverview/AdminOverview";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
        {
          index: true,
          Component: Home
        },
        {
          path: "/about",
          Component: About
        },
        {
          path: "/gallery",
          Component: Gallery
        },
        {
          path: "/teachers",
          Component: Teachers
        },
        {
          path: "/teachers/:id",
          Component: TeacherDetails
        },
        {
          path: "/fees",
          Component: FeeStructure
        },
        {
          path: "/admissions",
          Component: Admissions
        },
        {
          path: "/results",
          Component: ResultPortal
        },
        {
          path: "login",
          Component: LoginPage
        }
      ]
  },

  // Admin Routes 
  {
    path: "/admin",
    Component: DashboardLayouts,
    children: [
        {
          path: "admin-overview",
          Component: AdminOverview
        },
        {
          path: "add-student",
          Component: AddStudent
        },
        {
          path: "add-teacher",
          Component: AddTeacher
        },
        {
          path: "student-list",
          Component: StudentList
        },
        {
          path: "teacher-list",
          Component: TeacherList
        },
        {
          path: "exam-manager",
          Component: ExamManager
        },
        {
          path: "result-entry/:examId",
          Component: ResultEntryPage
        },
      ]
  },

  // Teacher Routes
  {
    path: "/teacher",
    Component: DashboardLayouts,
    children: [
        {
          path: "overview",
          Component: About
        }
      ]
  },
  // Student Routes
  {
    path: "/student",
    Component: DashboardLayouts,
    children: [
        {
          path: "overview",
          Component: About
        }
      ]
  }
]);