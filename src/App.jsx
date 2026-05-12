import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import AddExpense from "./Components/AddExpense";
import ViewExpenses from "./Components/ViewExpenses";
import AddCategory from "./Components/AddCategory";
import AddIncome from "./Components/AddIncome";

import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar only after login pages */}
      <Routes>
        {/* FIRST OPEN LOGIN PAGE */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* AFTER LOGIN */}
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
            </>
          }
        />

        <Route
          path="/add-income"
          element={
            <>
              <Navbar />
              <AddIncome />
            </>
          }
        />

        <Route
          path="/add-expense"
          element={
            <>
              <Navbar />
              <AddExpense />
            </>
          }
        />

        <Route
          path="/add-category"
          element={
            <>
              <Navbar />
              <AddCategory />
            </>
          }
        />

        <Route
          path="/view-expenses"
          element={
            <>
              <Navbar />
              <ViewExpenses />
            </>
          }
        />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
