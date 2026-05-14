import React, { useEffect, useState } from "react";

import { db } from "../firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

import { toast } from "react-toastify";

export const FlatOwners = () => {

  const [formData, setFormData] = useState({
    flat: "",
    owner: "",
  });

  const [flatData, setFlatData] = useState([]);

  // SEARCH

  const [searchTerm, setSearchTerm] =
    useState("");

  // PAGINATION

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 10;

  // HANDLE CHANGE

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // FETCH DATA WITH SORTING

  const fetchData = async () => {

    try {

      // FIRESTORE QUERY

      const q = query(
        collection(db, "flat_owners"),
        orderBy("flat", "asc")
      );

      const querySnapshot = await getDocs(q);

      let result = querySnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

      // PERFECT NUMBER SORT

      result.sort(
        (a, b) =>
          Number(a.flat) - Number(b.flat)
      );

      setFlatData(result);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await addDoc(
        collection(db, "flat_owners"),
        {
          flat: formData.flat,
          owner: formData.owner,
        }
      );

      toast.success(
        "Flat Owner Added Successfully"
      );

      // RESET FORM

      setFormData({
        flat: "",
        owner: "",
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

  // SEARCH FILTER

  const filteredData = flatData.filter(
    (item) => {

      return (
        item.flat
          ?.toString()
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||

        item.owner
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

      {/* FORM */}

      <div className="card shadow mb-4">

        <div className="card-body">

          <h3 className="text-center mb-4">
            Flat Owner Master
          </h3>

          <form onSubmit={handleSubmit}>

            <div className="row">

              {/* FLAT NUMBER */}

              <div className="col-md-5">

                <div className="mb-3">

                  <label className="fw-bold">
                    Flat Number
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Flat Number"
                    name="flat"
                    value={formData.flat}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* OWNER NAME */}

              <div className="col-md-5">

                <div className="mb-3">

                  <label className="fw-bold">
                    Owner Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Owner Name"
                    name="owner"
                    value={formData.owner}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* BUTTON */}

              <div className="col-md-2">

                <div className="mb-3">

                  <label
                    style={{
                      visibility: "hidden",
                    }}
                  >
                    Submit
                  </label>

                  <button className="btn btn-success w-100">
                    Submit
                  </button>

                </div>

              </div>

            </div>

          </form>

        </div>

      </div>

      {/* TABLE */}

      <div className="card shadow">

        <div className="card-body">

          {/* TOP SECTION */}

          <div className="d-flex justify-content-between align-items-center mb-3">

            <h3 className="m-0">
              Flat Owner List
            </h3>

            {/* SEARCH */}

            <input
              type="text"
              className="form-control"
              placeholder="Search Flat / Owner"
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

                  <th>Flat Number</th>

                  <th>Owner Name</th>

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
                          {item.flat}
                        </td>

                        <td>
                          {item.owner}
                        </td>

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
                      colSpan={4}
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
  );
};