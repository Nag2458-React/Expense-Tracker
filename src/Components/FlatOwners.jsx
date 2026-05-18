import React, { useEffect, useState } from "react";
import { db } from "../firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";

import { toast } from "react-toastify";

export const FlatOwners = () => {
  const [formData, setFormData] = useState({
    flat: "",
    owner: "",
    mobile: "",
    mobile1: "",
  });

  const [flatData, setFlatData] = useState([]);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 10;

  const [editId, setEditId] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const isAdmin =
    user?.role === "admin";

  // FETCH DATA

  const fetchData = async () => {
    try {
      const q = query(
        collection(db, "flat_owners"),
        orderBy("flat", "asc")
      );

      const querySnapshot =
        await getDocs(q);

      const result =
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

      setFlatData(result);
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

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // RESET FORM

  const resetForm = () => {
    setFormData({
      flat: "",
      owner: "",
      mobile: "",
      mobile1: "",
    });

    setEditId(null);

    setShowModal(false);
  };

  // SUBMIT

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      toast.error(
        "Only Admin Can Access"
      );

      return;
    }

    try {
      // UPDATE

      if (editId) {
        await updateDoc(
          doc(
            db,
            "flat_owners",
            editId
          ),
          {
            flat: formData.flat,
            owner: formData.owner,
            mobile: formData.mobile,
            mobile1:
              formData.mobile1,
          }
        );

        toast.success(
          "Updated Successfully"
        );
      } else {
        // ADD

        await addDoc(
          collection(
            db,
            "flat_owners"
          ),
          {
            flat: formData.flat,
            owner: formData.owner,
            mobile: formData.mobile,
            mobile1:
              formData.mobile1,
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
        doc(db, "flat_owners", id)
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
    setFormData({
      flat: item.flat || "",
      owner: item.owner || "",
      mobile: item.mobile || "",
      mobile1: item.mobile1 || "",
    });

    setEditId(item.id);

    setShowModal(true);
  };

  // SEARCH

  const filteredData =
    flatData.filter((item) => {
      return (
        item.flat
          ?.toString()
          .includes(searchTerm) ||
        item.owner
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
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
    indexOfLastItem -
    itemsPerPage;

  const currentItems =
    filteredData.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

  return (
    <div className="container mt-5">
      {/* ADD FORM */}

      {isAdmin && (
        <div className="card shadow mb-4">
          <div className="card-body">
            <h3 className="text-center mb-4">
              Flat Owner Master
            </h3>

            <form
              onSubmit={handleSubmit}
            >
              <div className="row">
                {/* FLAT */}

                <div className="col-md-3 mb-3">
                  <label>
                    Flat Number
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    name="flat"
                    value={formData.flat}
                    onChange={
                      handleChange
                    }
                    required
                  />
                </div>

                {/* OWNER */}

                <div className="col-md-3 mb-3">
                  <label>
                    Owner Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="owner"
                    value={
                      formData.owner
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />
                </div>

                {/* MOBILE */}

                <div className="col-md-3 mb-3">
                  <label>
                    Mobile Number
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                    value={
                      formData.mobile
                    }
                    onChange={
                      handleChange
                    }
                    required
                  />
                </div>

                {/* ALT MOBILE */}

                <div className="col-md-3 mb-3">
                  <label>
                    Alternate Mobile
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    name="mobile1"
                    value={
                      formData.mobile1
                    }
                    onChange={
                      handleChange
                    }
                  />
                </div>

                {/* BUTTON */}

                <div className="col-md-12 text-center">
                  <button className="btn btn-success px-5">
                    {editId
                      ? "Update"
                      : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TABLE */}

      <div className="card shadow">
        <div className="card-body">
          {/* TOP */}

          <div className="d-flex justify-content-between mb-3">
            <h3>
              Flat Owner List
            </h3>

            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              style={{
                width: "250px",
                height: "40px",
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

          {/* TABLE */}

          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th className="text-center">
                    S.No
                  </th>

                  <th className="text-center">
                    Flat
                  </th>

                  <th>
                    Owner
                  </th>

                  <th>
                    Mobile Number
                  </th>

                  <th>
                    Alternate Mobile
                  </th>

                  {isAdmin && (
                    <>
                      <th className="text-center">
                        Edit
                      </th>

                      <th className="text-center">
                        Delete
                      </th>
                    </>
                  )}
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
                        <td className="text-center">
                          {indexOfFirstItem +
                            index +
                            1}
                        </td>

                        <td className="text-center">
                          {item.flat}
                        </td>

                        <td>
                          {item.owner}
                        </td>

                        <td>
                          {item.mobile}
                        </td>

                        <td>
                          {item.mobile1}
                        </td>

                        {isAdmin && (
                          <>
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
                          </>
                        )}
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td
                      colSpan={
                        isAdmin
                          ? 7
                          : 5
                      }
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
                        currentPage -
                          1
                      )
                    }
                  >
                    Previous
                  </button>
                </li>

                {/* PAGE NUMBERS */}

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
                        currentPage +
                          1
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

      {/* EDIT MODAL */}

      {showModal && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background:
              "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">
                  Edit Flat Owner
                </h5>

                <button
                  className="btn-close btn-close-white"
                  onClick={
                    resetForm
                  }
                ></button>
              </div>

              <div className="modal-body">
                <form
                  onSubmit={
                    handleSubmit
                  }
                >
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>
                        Flat
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        name="flat"
                        value={
                          formData.flat
                        }
                        onChange={
                          handleChange
                        }
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>
                        Owner
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="owner"
                        value={
                          formData.owner
                        }
                        onChange={
                          handleChange
                        }
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>
                        Mobile
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        name="mobile"
                        value={
                          formData.mobile
                        }
                        onChange={
                          handleChange
                        }
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label>
                        Alternate Mobile
                      </label>

                      <input
                        type="number"
                        className="form-control"
                        name="mobile1"
                        value={
                          formData.mobile1
                        }
                        onChange={
                          handleChange
                        }
                      />
                    </div>
                  </div>

                  <div className="text-end">
                    <button
                      type="button"
                      className="btn btn-secondary me-2"
                      onClick={
                        resetForm
                      }
                    >
                      Close
                    </button>

                    <button className="btn btn-success">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlatOwners;