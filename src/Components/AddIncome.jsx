import React, { useState } from "react";

import { db } from "../firebase";

import { collection, addDoc } from "firebase/firestore";

import { toast } from "react-toastify";

const AddIncome = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "income"), {
        amount,
      });

      toast.success("Income Added Successfully");

      setAmount("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
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
      </div>
    </div>
  );
};

export default AddIncome;
