import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import log from "../assets/log.png";

import { db } from "../firebase";

import {
  collection,
  getDocs,
} from "firebase/firestore";

const Navbar = () => {
  // LOGIN USER

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // STATES

  const [showPopup, setShowPopup] =
    useState(false);

  const [pendingData, setPendingData] =
    useState([]);

  // LOGOUT

  const handleLogout = () => {
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  // FETCH LOGIN USER PENDING DATA

  const fetchPendingData = async () => {
    try {
      const querySnapshot =
        await getDocs(
          collection(
            db,
            "apartment_amounts"
          )
        );

      const result =
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

      // ONLY LOGIN USER DATA

      const loginUserData =
        result.filter(
          (item) =>
            String(item.flat) ===
            String(user?.flat)
        );

      // PENDING CHECK

      const pending =
        loginUserData.filter(
          (item) =>
            !item.waterBill ||
            !item.electricityBill ||
            !item.maintainanceBill ||
            !item.garbageBill ||
            !item.otherBill
        );

      setPendingData(pending);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPendingData();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          {/* LOGO */}

          <Link
            className="navbar-brand"
            to="/dashboard"
          >
            <img
              src={log}
              alt="logo"
              style={{
                width: "150px",
              }}
            />
          </Link>

          {/* USER */}

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

    {/* NOTIFICATION */}

    <li className="nav-item position-relative">
      <button
        className="btn border-0 bg-transparent notification-btn"
        onClick={() =>
          setShowPopup(!showPopup)
        }
      >
        <span
          className="app-icon fa-stack"
          data-count={pendingData.length}
        >
          <i
            className="bi bi-bell-fill text-white"
            style={{
              fontSize: "24px",
            }}
          ></i>
        </span>
      </button>
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

      {/* POPUP */}

    {/* POPUP */}

{showPopup && (
  <div
    className="card shadow-lg border-0"
    style={{
      position: "fixed",
      top: "70px",
      right: "20px",
      width: "380px",
      zIndex: 9999,
    }}
  >
    {/* HEADER */}

    <div className="card-header  text-white d-flex justify-content-between align-items-center " style={{background: "#ebf963"}}>
      <h5 className="m-0" style={{color:"#000"}}>
        Pending Notifications
      </h5>

      <button
        className="btn-close btn-close-black"
        onClick={() =>
          setShowPopup(false)
        }
      ></button>
    </div>

    {/* BODY */}

    <div
      className="card-body"
      style={{
        maxHeight: "400px",
        overflowY: "auto",
      }}
    >
      {pendingData.length > 0 ? (
        pendingData.map(
          (item, index) => (
            <div
              key={index}
              className="border rounded p-3 mb-3 bg-light"
            >
              <h6 className="fw-bold text-primary">
                Flat : {item.flat}
              </h6>

              <p className="mb-1">
                <strong>
                  Owner :
                </strong>{" "}
                {item.owner}
              </p>

              <p className="mb-2">
                <strong>
                  Bill Date :
                </strong>{" "}
                {item.billDate}
              </p>

              {/* PENDING BADGES */}

              <div className="d-flex flex-wrap gap-2 nots">
                {!item.waterBill && (
                  <span className="badge bg-primary">
                    Water Pending
                  </span>
                )}

                {!item.electricityBill && (
                  <span className="badge bg-warning text-dark">
                    Electricity Pending
                  </span>
                )}

                {!item.maintainanceBill && (
                  <span className="badge bg-success">
                    Maintainance Pending
                  </span>
                )}

                {!item.garbageBill && (
                  <span className="badge bg-danger">
                    Garbage Pending
                  </span>
                )}

                {!item.otherBill && (
                  <span className="badge bg-dark">
                    Other Pending
                  </span>
                )}
              </div>
            </div>
          )
        )
      ) : (
        <div className="alert alert-success text-center">
          No Pending Payments
        </div>
      )}
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;