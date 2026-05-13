import React, { useEffect, useState } from "react";

import { db } from "../firebase";

import { collection, getDocs } from "firebase/firestore";

const Dashboard = () => {
  const [totalApartments, setTotalApartments] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);

  const [waterTotal, setWaterTotal] = useState(0);

  const [electricityTotal, setElectricityTotal] = useState(0);

  const [maintainanceTotal, setMaintainanceTotal] = useState(0);

  const [garbageTotal, setGarbageTotal] = useState(0);

  const [otherTotal, setOtherTotal] = useState(0);

  const [apartments, setApartments] = useState([]);

  const [allData, setAllData] = useState([]);

  // MONTH SELECT

  const [selectedMonth, setSelectedMonth] = useState("");

  // FETCH DATA

  const fetchApartments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "apartment_amounts"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAllData(data);

      // FIRST TIME ALL DATA DISPLAY

      calculateTotals(data);

      setApartments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, []);

  // TOTAL CALCULATION FUNCTION

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

      electricity += Number(item.electricityBill || 0);

      maintainance += Number(item.maintainanceBill || 0);

      garbage += Number(item.garbageBill || 0);

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

    // IF MONTH EMPTY => SHOW ALL DATA

    if (monthValue === "") {
      setApartments(allData);

      calculateTotals(allData);

      return;
    }

    // FILTER MONTH DATA

    const filteredData = allData.filter((item) => {
      if (!item.billDate) return false;

      // billDate format => yyyy-mm-dd

      const formattedMonth = item.billDate.slice(0, 7);

      return formattedMonth === monthValue;
    });

    setApartments(filteredData);

    calculateTotals(filteredData);
  };

  return (
    <div className="container mt-5">
      {/* TOP CARDS */}

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
            <h4>Total Flats</h4>

            <h1>{totalApartments}</h1>
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
              background: "#0dcaf0",
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
              background: "#ffb703",
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
              background: "#ff9999",
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
      </div>

      {/* MONTH FILTER */}

      <div className="row mb-2">
        <div className="col-md-6">
          <label
            className="fw-bold mb-2"
            style={{ color: "#fff", fontWeight: "bold" }}
          >
            Select Month Report
          </label>

          <div className="input-group">
            <span className="input-group-text">Select Month</span>

            <input
              style={{ width: "47%" }}
              type="month"
              className="form-control"
              value={selectedMonth}
              onChange={handleMonthChange}
            />
          </div>
        </div>
        <div className="col-md-6" style={{ textAlign: "right" }}>
          <button
            style={{
              background: "#576000",
              border: "1px solid #fff",
              marginTop: "30px",
            }}
            className="btn btn-dark"
            onClick={() => {
              setSelectedMonth("");

              setApartments(allData);

              calculateTotals(allData);
            }}
          >
            Show All Data
          </button>
        </div>
      </div>

      {/* TABLE */}

      <div className="card shadow">
        <div className="card-body">
          <h3 className="text-center mb-4">Apartment Amount Details</h3>

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
                </tr>
              </thead>

              <tbody>
                {apartments.length > 0 ? (
                  apartments.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>

                      <td>{item.owner}</td>

                      <td>{item.flat}</td>

                      <td>{item.billDate}</td>

                      <td>₹ {item.waterBill}</td>

                      <td>₹ {item.electricityBill}</td>

                      <td>₹ {item.maintainanceBill}</td>

                      <td>₹ {item.garbageBill}</td>

                      <td>₹ {item.otherBill}</td>

                      <td className="fw-bold text-success">₹ {item.amount}</td>

                      <td>{item.description}</td>

                      <td>{item.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={12} className="text-center">
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>

              {/* FOOTER */}

              <tfoot className="table-dark">
                <tr>
                  <th colSpan={4}>Grand Total</th>

                  <th>₹ {waterTotal}</th>

                  <th>₹ {electricityTotal}</th>

                  <th>₹ {maintainanceTotal}</th>

                  <th>₹ {garbageTotal}</th>

                  <th>₹ {otherTotal}</th>

                  <th>₹ {totalAmount}</th>

                  <th colSpan={2}></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
