import React, { useEffect, useState } from "react";

import { db } from "../firebase";

import { collection, addDoc, getDocs } from "firebase/firestore";

import { toast } from "react-toastify";

const AddExpense = () => {
  const [data, setData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  // Categories State
  const [categories, setCategories] = useState([]);

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));

      const categoryData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCategories(categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Expense
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "expenses"), data);

      toast.success("Expense Added Successfully");

      setData({
        title: "",
        amount: "",
        category: "",
        date: "",
      });
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
              <h3 className="text-center mb-4">Add Expense</h3>

              <form onSubmit={handleSubmit}>
                {/* TITLE */}

                <div className="mb-3">
                  <label>Expense Title</label>

                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* AMOUNT */}

                <div className="mb-3">
                  <label>Amount</label>

                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    value={data.amount}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* CATEGORY */}

                <div className="mb-3">
                  <label>Category</label>

                  <select
                    className="form-control"
                    name="category"
                    value={data.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>

                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.title}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* DATE */}

                <div className="mb-3">
                  <label>Date</label>

                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="btn btn-primary w-100">Add Expense</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
