import React, {
  useEffect,
  useState,
} from "react";

import { db } from "../firebase";

import {
  collection,
  getDocs,
} from "firebase/firestore";

export const MyInfo = () => {

  const [allData, setAllData] =
    useState([]);

  const [userData, setUserData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [selectedMonth, setSelectedMonth] =
    useState("");

  // TOTALS

  const [overallAmount, setOverallAmount] =
    useState(0);

  const [thisMonthAmount, setThisMonthAmount] =
    useState(0);

  const [paidAmount, setPaidAmount] =
    useState(0);

  // LOGIN USER

  const loginUser = JSON.parse(
    localStorage.getItem("user")
  );

  // FETCH DATA

  const fetchMyData = async () => {

    try {

      // GET apartment_amounts DATA

      const querySnapshot =
        await getDocs(
          collection(
            db,
            "apartment_amounts"
          )
        );

      const result =
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

      // FILTER USER DATA USING FLAT

      const userRecords =
        result.filter(
          (item) =>
            String(item.flat) ===
            String(loginUser?.flat)
        );

      setAllData(userRecords);

      // OVERALL TOTAL

      let overall = 0;

      userRecords.forEach((item) => {
        overall += Number(
          item.amount || 0
        );
      });

      setOverallAmount(overall);

      // CURRENT MONTH

      const currentMonth =
        new Date()
          .toISOString()
          .slice(0, 7);

      setSelectedMonth(currentMonth);

      // CURRENT MONTH DATA

      const currentData =
        userRecords.find((item) =>
          item.billDate?.startsWith(
            currentMonth
          )
        );

      setUserData(currentData);

      // CURRENT MONTH TOTAL

      let currentMonthTotal = 0;

      userRecords.forEach((item) => {

        if (
          item.billDate?.startsWith(
            currentMonth
          )
        ) {
          currentMonthTotal += Number(
            item.amount || 0
          );
        }

      });

      setThisMonthAmount(
        currentMonthTotal
      );

      // PAID AMOUNT

      let paid = 0;

      userRecords.forEach((item) => {

        paid +=
          Number(
            item.waterBill || 0
          ) +
          Number(
            item.electricityBill ||
              0
          ) +
          Number(
            item.maintainanceBill ||
              0
          ) +
          Number(
            item.garbageBill || 0
          ) +
          Number(
            item.otherBill || 0
          );

      });

      setPaidAmount(paid);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchMyData();

  }, []);

  // MONTH CHANGE

  const handleMonthChange = (e) => {

    const month = e.target.value;

    setSelectedMonth(month);

    const matchedData =
      allData.find((item) =>
        item.billDate?.startsWith(
          month
        )
      );

    setUserData(matchedData);

    // MONTH TOTAL

    let monthTotal = 0;

    allData.forEach((item) => {

      if (
        item.billDate?.startsWith(
          month
        )
      ) {

        monthTotal += Number(
          item.amount || 0
        );

      }

    });

    setThisMonthAmount(monthTotal);
  };

  // STATUS BADGE

  const getBadgeClass = (
    value
  ) => {

    return value &&
      Number(value) > 0
      ? "bg-success"
      : "bg-danger";
  };

  const getStatusText = (
    value
  ) => {

    return value &&
      Number(value) > 0
      ? `₹ ${value}`
      : "Pending";
  };

  if (loading) {

    return (
      <div className="container mt-5 text-center">
        <h4>Loading...</h4>
      </div>
    );
  }

  if (!userData) {

    return (
      <div className="container mt-5">

        <div className="row justify-content-center">

          <div className="col-md-3">

            <label className="fw-bold mb-2" style={{color:"#fff !important"}}>
              Select Month
            </label>

            <input
              type="month"
              className="form-control"
              value={selectedMonth}
              onChange={handleMonthChange}
            />

          </div>

        </div>

        <div className="alert alert-danger mt-4 text-center" >
          No Data Found For Selected Month
        </div>

      </div>
    );
  }

  return (

    <div className="container mt-4 pb-5 my">

      {/* MONTH */}

      <div className="row justify-content-center mb-4 ">

        <div className="col-md-3">

          <label className="fw-bold mb-2 white-text text-white" style={{color:"#fff !important"}}>
            Select Month
          </label>

          <input
            type="month"
            className="form-control"
            value={selectedMonth}
            onChange={handleMonthChange}
          />

        </div>

      </div>

      {/* TOTAL BOXES */}

      <div className="row">

        <div className="col-md-4 mb-3">

          <div className="card bg-primary text-white shadow">

            <div className="card-body text-center">

              <h5>
                Overall Amount
              </h5>

              <h2>
                ₹ {overallAmount}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div className="card bg-success text-white shadow">

            <div className="card-body text-center">

              <h5>
                This Month Amount
              </h5>

              <h2>
                ₹ {thisMonthAmount}
              </h2>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div className="card bg-warning shadow">

            <div className="card-body text-center">

              <h5>
                Total Paid Amount
              </h5>

              <h2>
                ₹ {paidAmount}
              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN CARD */}

      <div className="card shadow-lg border-0" style={{background:"transparent"}}>

        {/* <div className="card-header bg-dark text-white text-center">

          <h3 className="mb-0">
            My Information
          </h3>

        </div> */}

        <div className="card-body" >

          {/* TOP INFO */}

          <div className="row mb-4">

            <div className="col-md-4 mt-2">

              <div className="card  text-white shadow">

                <div className="card-body text-center">

                  <h6 style={{color:"#000"}}>
                    Flat Number
                  </h6>

                  <h2 style={{fontSize:"20px",color:"#000"}}>
                    {userData.flat}
                  </h2>

                </div>

              </div>

            </div>

            <div className="col-md-4 mt-2">

              <div className="card  text-white shadow">

                <div className="card-body text-center">

                  <h6  style={{color:"#000"}}>
                    Owner Name
                  </h6>

                  <h5 style={{color:"#000"}}>
                    {userData.owner}
                  </h5>

                </div>

              </div>

            </div>

            <div className="col-md-4 mt-2">

              <div className="card   shadow">

                <div className="card-body text-center">

                  <h6>
                    Bill Date
                  </h6>

                  <h5>
                    {userData.billDate}
                  </h5>

                </div>

              </div>

            </div>

          </div>

          {/* BILL STATUS */}

          <div className="row">

            {/* WATER */}

            <div className="col-md-4 mb-3">

              <div className="card shadow-sm">

                <div className="card-body text-center">

                  <h5>
                    Water Bill
                  </h5>

                  <span
                    className={`badge ${getBadgeClass(
                      userData.waterBill
                    )} p-2`}
                  >
                    {getStatusText(
                      userData.waterBill
                    )}
                  </span>

                </div>

              </div>

            </div>

            {/* ELECTRICITY */}

            <div className="col-md-4 mb-3">

              <div className="card shadow-sm">

                <div className="card-body text-center">

                  <h5>
                    Electricity Bill
                  </h5>

                  <span
                    className={`badge ${getBadgeClass(
                      userData.electricityBill
                    )} p-2`}
                  >
                    {getStatusText(
                      userData.electricityBill
                    )}
                  </span>

                </div>

              </div>

            </div>

            {/* MAINTAINANCE */}

            <div className="col-md-4 mb-3">

              <div className="card shadow-sm">

                <div className="card-body text-center">

                  <h5>
                    Maintainance Bill
                  </h5>

                  <span
                    className={`badge ${getBadgeClass(
                      userData.maintainanceBill
                    )} p-2`}
                  >
                    {getStatusText(
                      userData.maintainanceBill
                    )}
                  </span>

                </div>

              </div>

            </div>

            {/* GARBAGE */}

            <div className="col-md-6 mb-3">

              <div className="card shadow-sm">

                <div className="card-body text-center">

                  <h5>
                    Garbage Bill
                  </h5>

                  <span
                    className={`badge ${getBadgeClass(
                      userData.garbageBill
                    )} p-2`}
                  >
                    {getStatusText(
                      userData.garbageBill
                    )}
                  </span>

                </div>

              </div>

            </div>

            {/* OTHER */}

            <div className="col-md-6 mb-3">

              <div className="card shadow-sm">

                <div className="card-body text-center">

                  <h5>
                    Other Bill
                  </h5>

                  <span
                    className={`badge ${getBadgeClass(
                      userData.otherBill
                    )} p-2`}
                  >
                    {getStatusText(
                      userData.otherBill
                    )}
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MyInfo;