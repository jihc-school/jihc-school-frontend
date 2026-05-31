import React, { useState } from "react";
import { Outlet, Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import useUserRole from "../hooks/useUserRole";
import Spinner from "../components/Common/Spinner/Spinner";

const DashboardLayout = () => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  if (loading || roleLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner></Spinner>
      </div>
    );

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar Section */}
      <div
        className={`
                    fixed inset-y-0 left-0 z-50 transform bg-gray-900 transition-all duration-300 ease-in-out
                    lg:relative lg:translate-x-0
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
                    ${isCollapsed ? "lg:w-20" : "lg:w-64"}
                `}
      >
        <Sidebar
          role={role}
          isCollapsed={isCollapsed}
          closeMobile={() => setIsMobileOpen(false)}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 lg:px-6 border-b">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-md lg:hidden text-gray-600 hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Desktop Collups Button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:block p-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              <svg
                className={`w-6 h-6 transform transition-transform ${isCollapsed ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="text-sm lg:text-lg font-bold text-blue-600 tracking-tight">
              {role?.toUpperCase()} PANEL
            </div>
          </div>

          {/* User Profile Section */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-700">
                {user?.email.split("@")[0]}
              </p>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
              {user?.email[0].toUpperCase()}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#F8FAFC]">
          {isMobileOpen && (
            <div
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            ></div>
          )}

          <div className="2xl:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
