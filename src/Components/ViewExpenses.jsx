import React, { useEffect, useState } from "react";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

import { db } from "../firebase";

import { toast } from "react-toastify";

const ViewExpenses = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const querySnapshot = await getDocs(collection(db, "expenses"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setExpenses(data);
  };
  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "expenses", id));

    toast.success("Deleted Successfully");

    fetchExpenses();
  };
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="text-center mb-4">Monthly Expenses</h3>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {expenses.length > 0 ? (
                expenses.map((e, i) => (
                  <tr key={e.id}>
                    <td>{i + 1}</td>
                    <td>{e.title}</td>
                    <td>₹ {e.amount}</td>
                    <td>{e.category}</td>
                    <td>{e.date}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(e.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>No Expenses Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewExpenses;
