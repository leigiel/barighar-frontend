import React from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <NavLink to="/" className="text-base-content hover:text-primary">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="text-base-content hover:text-primary">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="text-base-content hover:text-primary">Contact</NavLink>
      </li>
    </>
  );

  return (
    <header>
      <nav className="navbar bg-base-100 px-10 shadow-md">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost text-accent lg:hidden"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-base-200 text-base-content rounded-box"
            >
              {menuItems}
            </ul>
          </div>
          <a className="ml-2">
            <img src={logo} alt="Bari Ghar" className="h-10 w-auto" />
          </a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {menuItems}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar border border-primary"
              role="button"
            >
              <div className="w-10 rounded-full overflow-hidden">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-base-200 text-base-content rounded-box"
            >
              <li>
                <a className="justify-between hover:text-secondary">
                  Profile <span className="badge badge-secondary">New</span>
                </a>
              </li>
              <li><a className="hover:text-secondary">Settings</a></li>
              <li><a className="hover:text-error">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
