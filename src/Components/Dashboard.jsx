import React, { useEffect, useState } from "react";

import { db } from "../firebase";

import {
  collection,
  getDocs,
} from "firebase/firestore";

const Dashboard = () => {

  const [totalApartments, setTotalApartments] =
    useState(0);

  const [totalAmount, setTotalAmount] =
    useState(0);

  const [waterTotal, setWaterTotal] =
    useState(0);

  const [electricityTotal, setElectricityTotal] =
    useState(0);

  const [maintainanceTotal, setMaintainanceTotal] =
    useState(0);

  const [garbageTotal, setGarbageTotal] =
    useState(0);

  const [otherTotal, setOtherTotal] =
    useState(0);

  // TOTAL FLATS FROM flat_owners

  const [flatOwnersCount, setFlatOwnersCount] =
    useState(0);

  const [apartments, setApartments] =
    useState([]);

  const [allData, setAllData] =
    useState([]);

  // MONTH SELECT

  const [selectedMonth, setSelectedMonth] =
    useState("");

  // SEARCH

  const [searchTerm, setSearchTerm] =
    useState("");

  // PAGINATION

  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 10;

  // FETCH DATA

  const fetchApartments = async () => {
    try {

      // APARTMENT AMOUNTS

      const querySnapshot = await getDocs(
        collection(db, "apartment_amounts")
      );

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAllData(data);

      calculateTotals(data);

      setApartments(data);

      // FLAT OWNERS COUNT

      const flatSnapshot = await getDocs(
        collection(db, "flat_owners")
      );

      setFlatOwnersCount(flatSnapshot.size);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, []);

  // TOTAL CALCULATION

  const calculateTotals = (data) => {

    let total = 0;

    let water = 0;

    let electricity = 0;

    let maintainance = 0;

    let garbage = 0;

    let other = 0;

    data.forEach((item) => {

      total += Number(item.amount || 0);

      water += Number(item.waterBill || 0);

      electricity += Number(
        item.electricityBill || 0
      );

      maintainance += Number(
        item.maintainanceBill || 0
      );

      garbage += Number(
        item.garbageBill || 0
      );

      other += Number(item.otherBill || 0);

    });

    setTotalApartments(data.length);

    setTotalAmount(total);

    setWaterTotal(water);

    setElectricityTotal(electricity);

    setMaintainanceTotal(maintainance);

    setGarbageTotal(garbage);

    setOtherTotal(other);
  };

  // MONTH FILTER

  const handleMonthChange = (e) => {

    const monthValue = e.target.value;

    setSelectedMonth(monthValue);

    setCurrentPage(1);

    if (monthValue === "") {

      setApartments(allData);

      calculateTotals(allData);

      return;
    }

    const filteredData = allData.filter(
      (item) => {

        if (!item.billDate) return false;

        const formattedMonth =
          item.billDate.slice(0, 7);

        return formattedMonth === monthValue;
      }
    );

    setApartments(filteredData);

    calculateTotals(filteredData);
  };

  // SEARCH FILTER

  const filteredApartments =
    apartments.filter((item) => {

      return (
        item.owner
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        item.flat
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        item.billDate
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||

        item.description
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    });

  // PAGINATION

  const totalPages = Math.ceil(
    filteredApartments.length / itemsPerPage
  );

  const indexOfLastItem =
    currentPage * itemsPerPage;

  const indexOfFirstItem =
    indexOfLastItem - itemsPerPage;

  const currentItems =
    filteredApartments.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

  return (
    <div className="container mt-5 pb-5">

      {/* TOP CARDS */}
<div className="">
      <div className="row mb-4">

        {/* TOTAL FLATS */}

        <div className="col-md-3 mb-3">
          <div
            className="card shadow text-center p-3"
            style={{
              background: "#00ffe6",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <h4>Total Flat Owners</h4>

            <h1>{flatOwnersCount}</h1>
          </div>
        </div>

        {/* TOTAL AMOUNT */}

        <div className="col-md-3 mb-3">
          <div
            className="card shadow text-center p-3"
            style={{
              background: "#f7f948",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <h4>Total Amount</h4>

            <h1>₹ {totalAmount}</h1>
          </div>
        </div>

        {/* WATER */}

        <div className="col-md-3 mb-3">
          <div
            className="card shadow text-center p-3"
            style={{
              background: "rgb(97 229 255)",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <h4>Water Total</h4>

            <h1>₹ {waterTotal}</h1>
          </div>
        </div>

        {/* ELECTRICITY */}

        <div className="col-md-3 mb-3">
          <div
            className="card shadow text-center p-3"
            style={{
              background: "rgb(255 221 134)",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <h4>Electricity Total</h4>

            <h1>₹ {electricityTotal}</h1>
          </div>
        </div>

      </div>

      {/* SECOND ROW */}

      <div className="row mb-4">

        {/* MAINTAINANCE */}

        <div className="col-md-3 mb-3">
          <div
            className="card shadow text-center p-3"
            style={{
              background: "#90ee90",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <h4>Maintainance</h4>

            <h1>₹ {maintainanceTotal}</h1>
          </div>
        </div>

        {/* GARBAGE */}

        <div className="col-md-3 mb-3">
          <div
            className="card shadow text-center p-3"
            style={{
              background: "rgb(255 194 194 / 81%)",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <h4>Garbage</h4>

            <h1>₹ {garbageTotal}</h1>
          </div>
        </div>

        {/* OTHER */}

        <div className="col-md-3 mb-3">
          <div
            className="card shadow text-center p-3"
            style={{
              background: "#d8b4fe",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <h4>Other Total</h4>

            <h1>₹ {otherTotal}</h1>
          </div>
        </div>

        {/* TOTAL RECORDS */}

        <div className="col-md-3 mb-3">
          <div
            className="card shadow text-center p-3"
            style={{
              background: "#00ffe6",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <h4>Total Records</h4>

            <h1>{totalApartments}</h1>
          </div>
        </div>

      </div>
</div>
      {/* FILTERS */}

      <div className="row">

        {/* MONTH */}

        <div className="col-md-3 mb-2">

          <label className="fw-bold mb-2" style={{color:"#fff"}}>
            Select Month Report
          </label>

          <div className="input-group">

            <span className="input-group-text">
              Select Month
            </span>

            <input
              style={{ width: "47%" }}
              type="month"
              className="form-control"
              value={selectedMonth}
              onChange={handleMonthChange}
            />

          </div>

        </div>

        {/* BUTTON */}

        <div
          className="col-md-9"
          style={{ textAlign: "right" }}
        >

          <button
            style={{
              background: "rgb(229 251 7)",
            color: "#000",
            fontWeight:"bold",
              marginTop: "30px",
            }}
            className="btn btn-dark"
            onClick={() => {

              setSelectedMonth("");

              setSearchTerm("");

              setApartments(allData);

              calculateTotals(allData);

              setCurrentPage(1);

            }}
          >
            Show All Data
          </button>

        </div>

      </div>

      {/* TABLE */}

      <div className="card shadow">

        <div className="card-body">

          {/* TABLE TOP */}

          <div className="d-flex justify-content-between align-items-center mb-3">

            <h3 className="m-0">
              Apartment Amount Details
            </h3>

            {/* SEARCH */}

            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              style={{ width: "250px" }}
              value={searchTerm}
              onChange={(e) => {

                setSearchTerm(e.target.value);

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
                  <th style={{width: "110px"}}>Bill Date</th>
                  <th>Water</th>
                  <th>Electricity</th>
                  <th>Maintainance</th>
                  <th>Garbage</th>
                  <th>Other</th>
                  <th>Total</th>
                  <th>Description</th>
                  <th>Time</th>
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

                        <td>{item.owner}</td>

                        <td>{item.flat}</td>

                        <td>{item.billDate}</td>

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

                        <td>{item.time}</td>

                      </tr>
                    )
                  )

                ) : (

                  <tr>
                    <td
                      colSpan={12}
                      className="text-center"
                    >
                      No Data Found
                    </td>
                  </tr>

                )}

              </tbody>

              {/* FOOTER */}

              <tfoot className="table-dark">

                <tr>

                  <th colSpan={4}>
                    Grand Total
                  </th>

                  <th>₹ {waterTotal}</th>

                  <th>
                    ₹ {electricityTotal}
                  </th>

                  <th>
                    ₹ {maintainanceTotal}
                  </th>

                  <th>₹ {garbageTotal}</th>

                  <th>₹ {otherTotal}</th>

                  <th>₹ {totalAmount}</th>

                  <th colSpan={2}></th>

                </tr>

              </tfoot>

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
                    currentPage === totalPages
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

export default Dashboard;