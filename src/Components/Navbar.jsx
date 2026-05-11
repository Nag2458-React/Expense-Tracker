import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Expense Tracker
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-speedometer2 me-2"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-income">
                <i className="bi bi-wallet2 me-2"></i> Add Income
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-expense">
                <i className="bi bi-cash-stack me-2"></i> Add Expense
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-category">
                <i className="bi bi-tags me-2"></i> Add Category
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/view-expenses">
                <i className="bi bi-bar-chart-line me-2"></i> View Expenses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
