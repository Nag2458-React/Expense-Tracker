// Navbar.jsx

import React from "react";

import { Link } from "react-router-dom";

import log from "../assets/log.png";

const Navbar = () => {
  // GET USER DATA FROM LOCALSTORAGE

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* LOGO */}

        <Link className="navbar-brand" to="/dashboard">
          <img src={log} alt="track" style={{ width: "150px" }} />
        </Link>

        {/* USER NAME */}

        <div className="text-white">
          <h5 className="mb-0">
            Welcome to <span style={{ color: "#e5fb07" }}>{user?.name}</span>
          </h5>
        </div>

        {/* MENU */}

        <div>
          <ul className="navbar-nav ms-auto d-flex flex-row gap-3 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>

            {/* ADMIN ONLY */}

            {user?.role === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/add-income">
                  Add Amount
                </Link>
              </li>
            )}

            {/* LOGOUT */}

            <li className="nav-item">
              <button
                className="btn btn-danger btn-sm logs"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
