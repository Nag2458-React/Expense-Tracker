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
    billDate: "",

    waterBill: "",
    electricityBill: "",
    maintainanceBill: "",
    garbageBill: "",
    otherBill: "",

    description: "",
    amount: "",
  });

  const [incomeData, setIncomeData] = useState([]);

  // FLAT OWNER DATA

  const [flatOwners, setFlatOwners] = useState([]);

  // SEARCH

  const [searchTerm, setSearchTerm] = useState("");

  // PAGINATION

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const [editId, setEditId] = useState(null);

  // FETCH INCOME DATA

  const fetchData = async () => {
    try {

      const querySnapshot = await getDocs(
        collection(db, "apartment_amounts")
      );

      let result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // SORT FLAT NUMBER

      result.sort((a, b) => {
        return Number(a.flat) - Number(b.flat);
      });

      setIncomeData(result);

    } catch (error) {
      console.log(error);
    }
  };

  // FETCH FLAT OWNERS

  const fetchFlatOwners = async () => {
    try {

      const querySnapshot = await getDocs(
        collection(db, "flat_owners")
      );

      let result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // SORT FLAT NUMBER

      result.sort((a, b) => {
        return Number(a.flat) - Number(b.flat);
      });

      setFlatOwners(result);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchFlatOwners();
  }, []);

  // HANDLE CHANGE

  const handleChange = (e) => {

    const { name, value } = e.target;

    let updatedData = {
      ...data,
      [name]: value,
    };

    // AUTO OWNER BIND

    if (name === "flat") {

      const selectedFlat = flatOwners.find(
        (item) =>
          String(item.flat) === String(value)
      );

      updatedData.owner = selectedFlat
        ? selectedFlat.owner
        : "";
    }

    // AUTO TOTAL

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

    const time =
      new Date().toLocaleTimeString();

    try {

      // UPDATE

      if (editId) {

        const updateRef = doc(
          db,
          "apartment_amounts",
          editId
        );

        await updateDoc(updateRef, {
          ...data,
          time,
        });

        toast.success(
          "Updated Successfully"
        );

        setEditId(null);

      } else {

        // ADD

        await addDoc(
          collection(
            db,
            "apartment_amounts"
          ),
          {
            ...data,
            time,
          }
        );

        toast.success(
          "Added Successfully"
        );
      }

      // RESET FORM

      setData({
        owner: "",
        flat: "",
        billDate: "",

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

      await deleteDoc(
        doc(
          db,
          "apartment_amounts",
          id
        )
      );

      toast.success(
        "Deleted Successfully"
      );

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
      billDate: item.billDate,

      waterBill: item.waterBill,
      electricityBill:
        item.electricityBill,
      maintainanceBill:
        item.maintainanceBill,
      garbageBill: item.garbageBill,
      otherBill: item.otherBill,

      description: item.description,
      amount: item.amount,
    });

    setEditId(item.id);
  };

  // SEARCH FILTER

  const filteredData = incomeData.filter(
    (item) => {

      return (
        item.owner
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        item.flat
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        item.billDate
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        item.description
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
      );
    }
  );

  // PAGINATION

  const totalPages = Math.ceil(
    filteredData.length / itemsPerPage
  );

  const indexOfLastItem =
    currentPage * itemsPerPage;

  const indexOfFirstItem =
    indexOfLastItem - itemsPerPage;

  const currentItems =
    filteredData.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

  return (
    <div className="container mt-5">

      <div className="row">

        {/* FORM */}

        <div className="col-md-12 mb-4">

          <div className="card shadow">

            <div className="card-body">

              <h3 className="text-center mb-4">

                {editId
                  ? "Update Apartment Amount"
                  : "Add Apartment Amount"}

              </h3>

              <form onSubmit={handleSubmit}>

                <div className="row">

                  {/* FLAT */}

                  <div className="col-md-3">

                    <div className="mb-3">

                      <label>Flat No</label>

                      <select
                        className="form-select"
                        name="flat"
                        value={data.flat}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select Flat
                        </option>

                        {flatOwners.map(
                          (item) => (
                            <option
                              key={item.id}
                              value={item.flat}
                            >
                              {item.flat}
                            </option>
                          )
                        )}

                      </select>

                    </div>

                  </div>

                  {/* OWNER */}

                  <div className="col-md-3">

                    <div className="mb-3">

                      <label>
                        Owner Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="owner"
                        value={data.owner}
                        readOnly
                      />

                    </div>

                  </div>

                  {/* BILL DATE */}

                  <div className="col-md-3">

                    <div className="mb-3">

                      <label>
                        Bill Date
                      </label>

                      <input
                        type="date"
                        className="form-control"
                        name="billDate"
                        value={data.billDate}
                        onChange={
                          handleChange
                        }
                        required
                      />

                    </div>

                  </div>

                  {/* WATER */}

                  <div className="col-md-3">

                    <div className="mb-3">

                      <label>
                        Water Bill
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Water Bill"
                        name="waterBill"
                        value={data.waterBill}
                        onChange={
                          handleChange
                        }
                        required
                      />

                    </div>

                  </div>

                  {/* ELECTRICITY */}

                  <div className="col-md-3">

                    <div className="mb-3">

                      <label>
                        Electricity Bill
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Electricity Bill"
                        name="electricityBill"
                        value={
                          data.electricityBill
                        }
                        onChange={
                          handleChange
                        }
                        required
                      />

                    </div>

                  </div>

                  {/* MAINTAINANCE */}

                  <div className="col-md-3">

                    <div className="mb-3">

                      <label>
                        Maintainance Bill
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Maintainance Bill"
                        name="maintainanceBill"
                        value={
                          data.maintainanceBill
                        }
                        onChange={
                          handleChange
                        }
                        required
                      />

                    </div>

                  </div>

                  {/* GARBAGE */}

                  <div className="col-md-3">

                    <div className="mb-3">

                      <label>
                        Garbage Bill
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Garbage Bill"
                        name="garbageBill"
                        value={
                          data.garbageBill
                        }
                        onChange={
                          handleChange
                        }
                      />

                    </div>

                  </div>

                  {/* OTHER */}

                  <div className="col-md-3">

                    <div className="mb-3">

                      <label>
                        Other Bill
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Other Bill"
                        name="otherBill"
                        value={data.otherBill}
                        onChange={
                          handleChange
                        }
                      />

                    </div>

                  </div>

                  {/* TOTAL */}

                  <div className="col-md-3">

                    <div className="mb-3">

                      <label>
                        Total Amount
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        value={data.amount}
                        readOnly
                      />

                    </div>

                  </div>

                  {/* DESCRIPTION */}

                  <div className="col-md-12">

                    <div className="mb-3">

                      <label>
                        Description
                      </label>

                      <textarea
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        value={
                          data.description
                        }
                        onChange={
                          handleChange
                        }
                      ></textarea>

                    </div>

                  </div>

                </div>

                <div className="text-center mt-3">

                  <button className="btn btn-success px-5">

                    {editId
                      ? "Update Amount"
                      : "Add Amount"}

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

              {/* TOP */}

              <div className="d-flex justify-content-between align-items-center mb-3">

                <h3 className="m-0">
                  Apartment Amount History
                </h3>

                {/* SEARCH */}

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  style={{ width: "250px" }}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(
                      e.target.value
                    );
                    setCurrentPage(1);
                  }}
                />

              </div>

              {/* TABLE */}

              <div className="table-responsive">

                <table className="table table-bordered table-striped">

                  <thead className="table-dark">

                    <tr>

                      <th>S.No</th>

                      <th>Owner</th>

                      <th>Flat</th>

                      <th>Bill Date</th>

                      <th>Water</th>

                      <th>Electricity</th>

                      <th>Maintainance</th>

                      <th>Garbage</th>

                      <th>Other</th>

                      <th>Total</th>

                      <th>Description</th>

                      <th>Time</th>

                      <th>Edit</th>

                      <th>Delete</th>

                    </tr>

                  </thead>

                  <tbody>

                    {currentItems.length > 0 ? (

                      currentItems.map(
                        (item, index) => (

                          <tr key={item.id}>

                            <td>
                              {indexOfFirstItem +
                                index +
                                1}
                            </td>

                            <td>
                              {item.owner}
                            </td>

                            <td>
                              {item.flat}
                            </td>

                            <td>
                              {item.billDate}
                            </td>

                            <td>
                              ₹ {item.waterBill}
                            </td>

                            <td>
                              ₹ {item.electricityBill}
                            </td>

                            <td>
                              ₹ {item.maintainanceBill}
                            </td>

                            <td>
                              ₹ {item.garbageBill}
                            </td>

                            <td>
                              ₹ {item.otherBill}
                            </td>

                            <td className="fw-bold text-success">
                              ₹ {item.amount}
                            </td>

                            <td>
                              {item.description}
                            </td>

                            <td>
                              {item.time}
                            </td>

                            {/* EDIT */}

                            <td>

                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() =>
                                  handleEdit(
                                    item
                                  )
                                }
                              >
                                <i className="bi bi-pencil-square"></i>
                              </button>

                            </td>

                            {/* DELETE */}

                            <td>

                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() =>
                                  handleDelete(
                                    item.id
                                  )
                                }
                              >
                                <i className="bi bi-trash"></i>
                              </button>

                            </td>

                          </tr>
                        )
                      )

                    ) : (

                      <tr>

                        <td
                          colSpan={14}
                          className="text-center"
                        >
                          No Data Found
                        </td>

                      </tr>

                    )}

                  </tbody>

                </table>

              </div>

              {/* PAGINATION */}

              <div className="d-flex justify-content-center mt-3">

                <nav>

                  <ul className="pagination">

                    {/* PREVIOUS */}

                    <li
                      className={`page-item ${
                        currentPage === 1
                          ? "disabled"
                          : ""
                      }`}
                    >

                      <button
                        className="page-link"
                        onClick={() =>
                          setCurrentPage(
                            currentPage - 1
                          )
                        }
                      >
                        Previous
                      </button>

                    </li>

                    {/* PAGE NUMBERS */}

                    {[...Array(totalPages)].map(
                      (_, index) => (

                        <li
                          key={index}
                          className={`page-item ${
                            currentPage ===
                            index + 1
                              ? "active"
                              : ""
                          }`}
                        >

                          <button
                            className="page-link"
                            onClick={() =>
                              setCurrentPage(
                                index + 1
                              )
                            }
                          >
                            {index + 1}
                          </button>

                        </li>
                      )
                    )}

                    {/* NEXT */}

                    <li
                      className={`page-item ${
                        currentPage ===
                        totalPages
                          ? "disabled"
                          : ""
                      }`}
                    >

                      <button
                        className="page-link"
                        onClick={() =>
                          setCurrentPage(
                            currentPage + 1
                          )
                        }
                      >
                        Next
                      </button>

                    </li>

                  </ul>

                </nav>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AddIncome;