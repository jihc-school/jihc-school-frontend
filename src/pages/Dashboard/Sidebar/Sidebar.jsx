import React from "react";
import { Link, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

import {
  HiOutlineBookOpen,
  HiOutlineChartBar,
  HiOutlineHome,
} from "react-icons/hi";
import {
  HiOutlineBanknotes,
  HiOutlineBellAlert,
  HiOutlineCalendarDays,
  HiOutlineClipboardDocumentCheck,
  HiOutlineCog6Tooth,
  HiOutlineDocumentChartBar,
} from "react-icons/hi2";
import {
  FaChalkboardTeacher,
  FaList,
  FaStumbleupon,
  FaUserPlus,
} from "react-icons/fa";
import useUserRole from "../../../hooks/useUserRole";

const Sidebar = ({ isCollapsed, closeMobile }) => {
  const { logout } = useAuth();
  const { role } = useUserRole();
  const location = useLocation();

  const menuItems = {
    admin: [
      {
        name: "Overview",
        path: "/admin/admin-overview",
        icon: <HiOutlineHome size={20} />,
      },
      {
        name: "Add Student",
        path: "/admin/add-student",
        icon: <FaUserPlus size={20} />,
      },
      {
        name: "Student List",
        path: "/admin/student-list",
        icon: <FaList size={20} />,
      },
      {
        name: "Add Teacher",
        path: "/admin/add-teacher",
        icon: <FaChalkboardTeacher size={20} />,
      },
      {
        name: "Teacher List",
        path: "/admin/teacher-list",
        icon: <FaChalkboardTeacher size={20} />,
      },
      {
        name: "ExamManager",
        path: "/admin/exam-manager",
        icon: <FaStumbleupon size={20} />,
      },
      {
        name: "Financials",
        path: "/admin/accounts",
        icon: <HiOutlineBanknotes size={20} />,
      },
      {
        name: "System Settings",
        path: "/admin/settings",
        icon: <HiOutlineCog6Tooth size={20} />,
      },
    ],
    teacher: [
      {
        name: "Overview",
        path: "/teacher/dashboard",
        icon: <HiOutlineChartBar size={20} />,
      },
      {
        name: "Input Results",
        path: "/teacher/add-results",
        icon: <HiOutlineClipboardDocumentCheck size={20} />,
      },
      {
        name: "My Classes",
        path: "/teacher/classes",
        icon: <HiOutlineBookOpen size={20} />,
      },
      {
        name: "Attendance Report",
        path: "/teacher/attendance",
        icon: <HiOutlineCalendarDays size={20} />,
      },
    ],
    student: [
      {
        name: "Overview",
        path: "/student/profile",
        icon: <HiOutlineHome size={20} />,
      },
      {
        name: "My Results",
        path: "/student/results",
        icon: <HiOutlineDocumentChartBar size={20} />,
      },
      {
        name: "Attendance",
        path: "/student/attendance",
        icon: <HiOutlineCalendarDays size={20} />,
      },
      {
        name: "Notices",
        path: "/student/notices",
        icon: <HiOutlineBellAlert size={20} />,
      },
    ],
  };

  const currentMenu = menuItems[role] || [];

  return (
    <div className="flex flex-col h-full text-gray-300 py-6">
      {/* Logo Section */}
      <div
        className={`px-6 mb-10 flex items-center gap-3 ${isCollapsed ? "justify-center" : ""}`}
      >
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex-shrink-0"></div>
        {!isCollapsed && (
          <span className="text-xl font-bold text-white tracking-tight">
            EduSmart
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {currentMenu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={closeMobile}
            className={`flex items-center p-3 rounded-xl transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "hover:bg-gray-800 hover:text-white"
            } ${isCollapsed ? "justify-center" : "gap-4"}`}
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span className="font-medium">{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 mt-auto">
        <button
          onClick={logout}
          className={`w-full flex items-center p-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors ${isCollapsed ? "justify-center" : "gap-4"}`}
        >
          <span className="text-xl">🚪</span>
          {!isCollapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
