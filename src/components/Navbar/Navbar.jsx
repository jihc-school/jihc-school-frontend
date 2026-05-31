import React from "react";
import { Link, NavLink } from "react-router";
import { FaGraduationCap, FaBars } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import logo from "../../assets/Logo.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {/* Academics Dropdown */}
      <li className="dropdown">
        <details>
          <summary className="flex items-center gap-1">Academics</summary>
          <ul className="p-2 bg-base-100 rounded-t-none z-[50] w-60 shadow-xl border border-base-200">
            <li>
              <NavLink to="/teachers">Teacher's Profile</NavLink>
            </li>
            <li>
              <NavLink to="/fees">Fee Structure</NavLink>
            </li>
            <li>
              <NavLink to="/admissions">Admissions</NavLink>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <NavLink to="/results">Result Portal</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-md sticky @[1580px]:px-0 px-4 md:px-6 lg:px-8 top-0 z-[100]">
      <div className="navbar max-w-384 mx-auto px-0">
        {/* Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost pl-0  lg:hidden"
            >
              {/* FaBars icon for mobile menu */}
              <FaBars className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-64 font-medium border border-base-200 text-base-content"
            >
              {navOptions}
            </ul>
          </div>

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="max-w-14">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[22px] font-black text-primary">JIHC</span>
              <span className="text-[18px] font-bold tracking-[0.25em] mt-1 text-secondary">
                SCHOOL
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold gap-2 text-[15px]">
            {navOptions}
          </ul>
        </div>

        {/* Dashboard Call to Action */}
        <div className="navbar-end">
          {!user ? (
            <Link
              to="/login"
              className="btn btn-primary btn-sm md:btn-md px-6 text-white rounded-full hover:shadow-indigo-300 hover:shadow-lg transition-all flex items-center gap-2"
            >
              {/* MdDashboard*/}
              <MdDashboardCustomize size={20} />
              <span>Login</span>
            </Link>
          ) : (
            <button
              onClick={logout}
              className="btn"
            >
             <span className="font-medium">Logout</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
