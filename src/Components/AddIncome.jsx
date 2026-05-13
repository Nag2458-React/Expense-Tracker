import React, { useEffect, useState } from "react";

import { db } from "../firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { toast } from "react-toastify";

const AddIncome = () => {
  const [data, setData] = useState({
    owner: "",
    flat: "",
    waterBill: "",
    electricityBill: "",
    maintainanceBill: "",
    garbageBill: "",
    otherBill: "",
    description: "",
    amount: "",
  });

  const [incomeData, setIncomeData] = useState([]);

  const [editId, setEditId] = useState(null);

  // FETCH DATA

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "apartment_amounts"));

      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setIncomeData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // HANDLE CHANGE

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...data,
      [name]: value,
    };

    // AUTO TOTAL CALCULATION

    const total =
      Number(updatedData.waterBill || 0) +
      Number(updatedData.electricityBill || 0) +
      Number(updatedData.maintainanceBill || 0) +
      Number(updatedData.garbageBill || 0) +
      Number(updatedData.otherBill || 0);

    updatedData.amount = total;

    setData(updatedData);
  };

  // SUBMIT

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date();

    const date = currentDate.toLocaleDateString("en-GB");

    const time = currentDate.toLocaleTimeString();

    try {
      // UPDATE

      if (editId) {
        const updateRef = doc(db, "apartment_amounts", editId);

        await updateDoc(updateRef, {
          ...data,
          date,
          time,
        });

        toast.success("Updated Successfully");

        setEditId(null);
      } else {
        // ADD

        await addDoc(collection(db, "apartment_amounts"), {
          ...data,
          date,
          time,
        });

        toast.success("Added Successfully");
      }

      // RESET FORM

      setData({
        owner: "",
        flat: "",
        waterBill: "",
        electricityBill: "",
        maintainanceBill: "",
        garbageBill: "",
        otherBill: "",
        description: "",
        amount: "",
      });

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "apartment_amounts", id));

      toast.success("Deleted Successfully");

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT

  const handleEdit = (item) => {
    setData({
      owner: item.owner,
      flat: item.flat,
      waterBill: item.waterBill,
      electricityBill: item.electricityBill,
      maintainanceBill: item.maintainanceBill,
      garbageBill: item.garbageBill,
      otherBill: item.otherBill,
      description: item.description,
      amount: item.amount,
    });

    setEditId(item.id);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* FORM */}

        <div className="col-md-12 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">
                {editId ? "Update Apartment Amount" : "Add Apartment Amount"}
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* OWNER */}

                  <div className="col-md-3">
                    <div className="mb-3">
                      <label>Owner Name</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Owner Name"
                        name="owner"
                        value={data.owner}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* FLAT */}

                  <div className="col-md-3">
                    <div className="mb-3">
                      <label>Flat No</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Flat No"
                        name="flat"
                        value={data.flat}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* WATER BILL */}

                  <div className="col-md-3">
                    <div className="mb-3">
                      <label>Water Bill</label>

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Water Bill"
                        name="waterBill"
                        value={data.waterBill}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* ELECTRICITY */}

                  <div className="col-md-3">
                    <div className="mb-3">
                      <label>Electricity Bill</label>

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Electricity Bill"
                        name="electricityBill"
                        value={data.electricityBill}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* MAINTAINANCE */}

                  <div className="col-md-3">
                    <div className="mb-3">
                      <label>Maintainance Bill</label>

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Maintainance Bill"
                        name="maintainanceBill"
                        value={data.maintainanceBill}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* GARBAGE */}

                  <div className="col-md-3">
                    <div className="mb-3">
                      <label>Garbage Bill</label>

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Garbage Bill"
                        name="garbageBill"
                        value={data.garbageBill}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* OTHER */}

                  <div className="col-md-3">
                    <div className="mb-3">
                      <label>Other Bill</label>
                      <small> (Any Events)</small>

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Other Bill"
                        name="otherBill"
                        value={data.otherBill}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* TOTAL */}

                  <div className="col-md-3">
                    <div className="mb-3">
                      <label>Total Amount</label>

                      <input
                        type="number"
                        className="form-control"
                        name="amount"
                        value={data.amount}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="mb-3">
                      <label>Description</label>
                      <small> (For Other Bill)</small>

                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="EX: Dasara Event Bill"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-3">
                  <button className="btn btn-success px-5">
                    {editId ? "Update Amount" : "Add Amount"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* TABLE */}

        <div className="col-md-12">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Apartment Amount History</h3>

              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>S.No</th>
                      <th>Owner</th>
                      <th>Flat</th>
                      <th>Water</th>
                      <th>Electricity</th>
                      <th>Maintainance</th>
                      <th>Garbage</th>
                      <th>Other</th>
                      <th>Total</th>
                      <th>Description</th>
                      <th>Time</th>
                      <th>Date</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {incomeData.length > 0 ? (
                      incomeData.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>

                          <td>{item.owner}</td>

                          <td>{item.flat}</td>

                          <td>₹ {item.waterBill}</td>

                          <td>₹ {item.electricityBill}</td>

                          <td>₹ {item.maintainanceBill}</td>

                          <td>₹ {item.garbageBill}</td>

                          <td>₹ {item.otherBill}</td>

                          <td>
                            <b>₹ {item.amount}</b>
                          </td>
                          <td>
                            {" "}
                            <b>{item.description}</b>
                          </td>
                          <td>{item.time}</td>

                          <td>{item.date}</td>

                          {/* EDIT */}

                          <td>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => handleEdit(item)}
                            >
                              <i className="bi bi-pencil-square"></i>
                            </button>
                          </td>

                          {/* DELETE */}

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
                        <td colSpan={13} className="text-center">
                          No Data Found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIncome;
