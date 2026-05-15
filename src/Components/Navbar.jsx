// Navbar.jsx

import React from "react";

import { Link } from "react-router-dom";

import log from "../assets/log.png";

const Navbar = () => {

  // GET LOGIN USER

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        {/* LOGO */}

        <Link
          className="navbar-brand"
          to="/dashboard"
        >
          <img
            src={log}
            alt="track"
            style={{ width: "150px" }}
          />
        </Link>

        {/* USER DETAILS */}

        <div className="text-white text-center">

          <h5 className="mb-1">
            Welcome to{" "}
            <span
              style={{
                color: "#e5fb07",
              }}
            >
              {user?.name}
            </span>
          </h5>

          {/* FLAT NUMBER */}

          <small
            style={{
              color: "#00ffcc",
              fontWeight: "bold",
            }}
          >
            Flat No : {user?.flat}
          </small>

        </div>

        {/* MENU */}

        <div>
          <ul className="navbar-nav ms-auto d-flex flex-row gap-3 align-items-center">

            {/* DASHBOARD */}

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>

            {/* USER ONLY */}

            {user?.role !== "admin" && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/info"
                >
                  My Info
                </Link>
              </li>
            )}

            {/* ADMIN ONLY */}

            {user?.role === "admin" && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/add-income"
                >
                  Add Amount
                </Link>
              </li>
            )}

            {/* FLAT OWNERS */}

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/flat"
              >
                Flat Owners
              </Link>
            </li>

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