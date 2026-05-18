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

  const [incomeData, setIncomeData] =
    useState([]);

  const [flatOwners, setFlatOwners] =
    useState([]);

  // SEARCH

  const [searchTerm, setSearchTerm] =
    useState("");

  // PAGINATION

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 10;

  // EDIT

  const [editId, setEditId] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  // FETCH DATA

  const fetchData = async () => {
    try {
      const querySnapshot =
        await getDocs(
          collection(
            db,
            "apartment_amounts"
          )
        );

      let result =
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

      result.sort((a, b) => {
        return (
          Number(a.flat) -
          Number(b.flat)
        );
      });

      setIncomeData(result);
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH FLAT OWNERS

  const fetchFlatOwners =
    async () => {
      try {
        const querySnapshot =
          await getDocs(
            collection(
              db,
              "flat_owners"
            )
          );

        let result =
          querySnapshot.docs.map(
            (doc) => ({
              id: doc.id,
              ...doc.data(),
            })
          );

        result.sort((a, b) => {
          return (
            Number(a.flat) -
            Number(b.flat)
          );
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

    // AUTO OWNER

    if (name === "flat") {
      const selectedFlat =
        flatOwners.find(
          (item) =>
            String(item.flat) ===
            String(value)
        );

      updatedData.owner =
        selectedFlat
          ? selectedFlat.owner
          : "";
    }

    // TOTAL CALCULATION

    const total =
      Number(
        updatedData.waterBill || 0
      ) +
      Number(
        updatedData.electricityBill ||
          0
      ) +
      Number(
        updatedData.maintainanceBill ||
          0
      ) +
      Number(
        updatedData.garbageBill || 0
      ) +
      Number(
        updatedData.otherBill || 0
      );

    updatedData.amount = total;

    setData(updatedData);
  };

  // RESET FORM

  const resetForm = () => {
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

    setEditId(null);

    setShowModal(false);
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

      resetForm();

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE

  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Are you sure want to delete?"
      );

    if (!confirmDelete) return;

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
      garbageBill:
        item.garbageBill,
      otherBill: item.otherBill,

      description:
        item.description,
      amount: item.amount,
    });

    setEditId(item.id);

    setShowModal(true);
  };

  // SEARCH

  const filteredData =
    incomeData.filter((item) => {
      return (
        item.owner
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        item.flat
          ?.toString()
          .includes(searchTerm) ||
        item.billDate
          ?.includes(searchTerm)
      );
    });

  // PAGINATION

  const totalPages = Math.ceil(
    filteredData.length /
      itemsPerPage
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
      {/* FORM */}

      <div className="card shadow mb-4">
        <div className="card-body">
          <h3 className="text-center mb-4">
            Add Apartment Amount
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* FLAT */}

              <div className="col-md-3 mb-3">
                <label>
                  Flat No
                </label>

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

              {/* OWNER */}

              <div className="col-md-3 mb-3">
                <label>
                  Owner Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={data.owner}
                  readOnly
                />
              </div>

              {/* DATE */}

              <div className="col-md-3 mb-3">
                <label>
                  Bill Date
                </label>

                <input
                  type="date"
                  className="form-control"
                  name="billDate"
                  value={data.billDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* WATER */}

              <div className="col-md-3 mb-3">
                <label>
                  Water Bill
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="waterBill"
                  value={data.waterBill}
                  onChange={handleChange}
                  placeholder="Leave empty for Pending"
                />
              </div>

              {/* ELECTRICITY */}

              <div className="col-md-3 mb-3">
                <label>
                  Electricity Bill
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="electricityBill"
                  value={data.electricityBill}
                  onChange={handleChange}
                  placeholder="Leave empty for Pending"
                />
              </div>

              {/* MAINTAINANCE */}

              <div className="col-md-3 mb-3">
                <label>
                  Maintainance Bill
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="maintainanceBill"
                  value={data.maintainanceBill}
                  onChange={handleChange}
                  placeholder="Leave empty for Pending"
                />
              </div>

              {/* GARBAGE */}

              <div className="col-md-3 mb-3">
                <label>
                  Garbage Bill
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="garbageBill"
                  value={data.garbageBill}
                  onChange={handleChange}
                  placeholder="Leave empty for Pending"
                />
              </div>

              {/* OTHER */}

              <div className="col-md-3 mb-3">
                <label>
                  Other Bill
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="otherBill"
                  value={data.otherBill}
                  onChange={handleChange}
                  placeholder="Leave empty for Pending"
                />
              </div>

              {/* TOTAL */}

              <div className="col-md-3 mb-3">
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

              {/* DESCRIPTION */}

              <div className="col-md-12 mb-3">
                <label>
                  Description
                </label>

                <textarea
                  className="form-control"
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="text-center">
              <button className="btn btn-success px-5">
                {editId
                  ? "Update"
                  : "Add Amount"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* TABLE */}

      <div className="card shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
            <h3>
              Apartment Amount History
            </h3>

            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              style={{
                width: "250px",
              }}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(
                  e.target.value
                );

                setCurrentPage(1);
              }}
            />
          </div>

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
                {currentItems.length >
                0 ? (
                  currentItems.map(
                    (
                      item,
                      index
                    ) => (
                      <tr
                        key={item.id}
                      >
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
                          {
                            item.billDate
                          }
                        </td>

                        {/* WATER */}

                        <td>
                          {item.waterBill ? (
                            <span className="fw-bold text-success">
                              ₹{" "}
                              {
                                item.waterBill
                              }
                            </span>
                          ) : (
                            <span className="badge bg-danger">
                              Pending
                            </span>
                          )}
                        </td>

                        {/* ELECTRICITY */}

                        <td>
                          {item.electricityBill ? (
                            <span className="fw-bold text-success">
                              ₹{" "}
                              {
                                item.electricityBill
                              }
                            </span>
                          ) : (
                            <span className="badge bg-danger">
                              Pending
                            </span>
                          )}
                        </td>

                        {/* MAINTAINANCE */}

                        <td>
                          {item.maintainanceBill ? (
                            <span className="fw-bold text-success">
                              ₹{" "}
                              {
                                item.maintainanceBill
                              }
                            </span>
                          ) : (
                            <span className="badge bg-danger">
                              Pending
                            </span>
                          )}
                        </td>

                        {/* GARBAGE */}

                        <td>
                          {item.garbageBill ? (
                            <span className="fw-bold text-success">
                              ₹{" "}
                              {
                                item.garbageBill
                              }
                            </span>
                          ) : (
                            <span className="badge bg-danger">
                              Pending
                            </span>
                          )}
                        </td>

                        {/* OTHER */}

                        <td>
                          {item.otherBill ? (
                            <span className="fw-bold text-success">
                              ₹{" "}
                              {
                                item.otherBill
                              }
                            </span>
                          ) : (
                            <span className="badge bg-danger">
                              Pending
                            </span>
                          )}
                        </td>

                        {/* TOTAL */}

                        <td className="fw-bold text-success">
                          ₹{" "}
                          {item.amount}
                        </td>

                        <td>
                          {
                            item.description
                          }
                        </td>

                        <td>
                          {item.time}
                        </td>

                        {/* EDIT */}

                        <td className="text-center">
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

                        <td className="text-center">
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
            <ul className="pagination">
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
                      currentPage -
                        1
                    )
                  }
                >
                  Previous
                </button>
              </li>

              {[...Array(
                totalPages
              )].map(
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
                      currentPage +
                        1
                    )
                  }
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddIncome;