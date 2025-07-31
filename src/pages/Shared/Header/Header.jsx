import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-base-100 shadow-md">
      <nav className="navbar px-6 lg:px-10">
        <div className="navbar-start flex items-center">
          {/* mobile menu code here */}
          <Link
            to="/"
            className="flex items-baseline space-x-1 group"
          >
            <span className="text-2xl md:text-3xl font-extrabold text-primary transition-colors group-hover:text-secondary">
              Bari
            </span>
            <span className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent transition-transform group-hover:scale-105">
              Ghar
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `text-base-content hover:text-primary transition-colors ${
                      isActive ? "font-semibold border-b-2 border-secondary" : ""
                    }`
                  }
                  end
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <button
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar border border-primary"
                aria-label="Open user menu"
              >
                <div className="w-10 rounded-full overflow-hidden">
                  <img
                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                    alt="User avatar"
                  />
                </div>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-2 w-52 bg-base-200 rounded-box shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between hover:text-secondary">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="hover:text-secondary">
                    Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="hover:text-error w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-sm"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
