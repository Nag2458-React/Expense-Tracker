import React, { useEffect, useState } from "react";

import { db } from "../firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { toast } from "react-toastify";

const AddIncome = () => {
  const [amount, setAmount] = useState("");

  const [incomeData, setIncomeData] = useState([]);

  // FETCH INCOME DATA

  const fetchIncome = async () => {
    const querySnapshot = await getDocs(collection(db, "income"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setIncomeData(data);
  };

  useEffect(() => {
    fetchIncome();
  }, []);

  // ADD INCOME

  const handleSubmit = async (e) => {
    e.preventDefault();

    // CURRENT DATE

    const currentDate = new Date();

    const date = currentDate.toLocaleDateString();

    const time = currentDate.toLocaleTimeString();

    try {
      await addDoc(collection(db, "income"), {
        amount,
        date,
        time,
      });

      toast.success("Income Added Successfully");

      setAmount("");

      fetchIncome();
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE INCOME

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "income", id));

      toast.success("Deleted Successfully");

      fetchIncome();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* ADD INCOME FORM */}

        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Add Income</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Monthly Income</label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Income"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>

                <button className="btn btn-success w-100">Add Income</button>
              </form>
            </div>
          </div>
        </div>

        {/* TABLE */}

        <div className="col-md-7">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Income History</h3>

              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>S.No</th>
                    <th>₹ Income</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {incomeData.length > 0 ? (
                    incomeData.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>

                        <td>₹ {item.amount}</td>

                        <td>{item.time}</td>

                        <td>{item.date}</td>

                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(item.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5}>No Income Added</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIncome;
