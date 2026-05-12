import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import AddExpense from "./Components/AddExpense";
import ViewExpenses from "./Components/ViewExpenses";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCategory from "./Components/AddCategory";
import AddIncome from "./Components/AddIncome";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/view-expenses" element={<ViewExpenses />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-income" element={<AddIncome />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
