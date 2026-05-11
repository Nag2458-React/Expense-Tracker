import React, { useEffect, useState } from "react";

import { db } from "../firebase";

import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const [totalExpense, setTotalExpense] = useState(0);

  const [totalIncome, setTotalIncome] = useState(0);

  const [remaining, setRemaining] = useState(0);

  // FETCH EXPENSES
  const fetchExpenses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "expenses"));

      let expenseTotal = 0;

      querySnapshot.forEach((doc) => {
        expenseTotal += Number(doc.data().amount);
      });

      setTotalExpense(expenseTotal);

      return expenseTotal;
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH INCOME
  const fetchIncome = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "income"));

      let incomeTotal = 0;

      querySnapshot.forEach((doc) => {
        incomeTotal += Number(doc.data().amount);
      });

      setTotalIncome(incomeTotal);

      return incomeTotal;
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH DASHBOARD DATA
  const fetchDashboardData = async () => {
    const expense = await fetchExpenses();

    const income = await fetchIncome();

    setRemaining(income - expense);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* TOTAL EXPENSES */}

        <div className="col-md-4 mb-3">
          <div className="card shadow text-center  c1">
            <h3>Total Expenses</h3>

            <h1>₹ {totalExpense}</h1>
          </div>
        </div>

        {/* TOTAL INCOME */}

        <div className="col-md-4 mb-3">
          <div className="card shadow text-center  c2">
            <h3>Total Income</h3>

            <h1>₹ {totalIncome}</h1>
          </div>
        </div>

        {/* REMAINING */}

        <div className="col-md-4 mb-3">
          <div className="card shadow text-center  c3">
            <h3>Remaining Balance</h3>

            <h1>₹ {remaining}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
