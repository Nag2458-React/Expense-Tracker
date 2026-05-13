// App.jsx

import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import Navbar from "./Components/Navbar";

import Dashboard from "./Components/Dashboard";

import AddIncome from "./Components/AddIncome";

import Signup from "./Pages/Signup";

import Login from "./Pages/Login";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN */}

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Navbar />

              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* ADD INCOME */}

        <Route
          path="/add-income"
          element={
            <PrivateRoute>
              <Navbar />

              <AddIncome />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
