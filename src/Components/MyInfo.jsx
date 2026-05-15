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

  // LOGIN USER

  const loginUser = JSON.parse(
    localStorage.getItem("user")
  );

  // FETCH DATA

  const fetchMyData = async () => {

    try {

      const querySnapshot =
        await getDocs(
          collection(db, "flat_owners")
        );

      const result =
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

      // FILTER LOGIN USER FLAT

      const userRecords =
        result.filter(
          (item) =>
            String(item.flat) ===
            String(loginUser?.flat)
        );

      setAllData(userRecords);

      // CURRENT MONTH DEFAULT

      const currentMonth =
        new Date()
          .toISOString()
          .slice(0, 7);

      setSelectedMonth(currentMonth);

      // FIND CURRENT MONTH DATA

      const currentData =
        userRecords.find((item) =>
          item.billDate?.startsWith(
            currentMonth
          )
        );

      setUserData(currentData);

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
  };

  // BADGE COLOR

  const getBadge = (status) => {

    return status === "Active"
      ? "bg-success"
      : "bg-danger";
  };

  if (loading) {

    return (
      <div className="container mt-5 text-center mb-4">
        <h4>Loading...</h4>
      </div>
    );
  }

  if (!userData) {

    return (
      <div className="container mt-3 mb-5" style={{paddingBottom:"20px"}}>

        {/* MONTH PICKER */}

        <div className="row justify-content-center ">

          <div className="col-md-3">

            <label className="fw-bold mb-2 mont">
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

        <div className="alert alert-danger text-center">
          No Data Found For Selected Month
        </div>

      </div>
    );
  }

  return (

    <div className="container mt-3 pb-5">

      {/* MONTH SELECT */}

      <div className="row justify-content-center mb-4">

        <div className="col-md-3">

          <label className="fw-bold mb-2 mont">
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

      <div className="row justify-content-center">

        <div className="col-md-12">

          <div className="card shadow-lg border-0" style={{background:"transparent"}}>

            <div className="card-header  text-center">

              <h3 className="mb-0" style={{color:"#000",background:"#fff",padding:"6px",borderRadius:"5px"}}>
                My Information
              </h3>

            </div>

            <div className="card-body myc">

              {/* TOP INFO */}

              <div className="row ">

                <div className="col-md-4 mb-3">

                  <div className="card bg-primary text-white shadow">

                    <div className="card-body text-center">

                      <h6>Flat Number</h6>

                      <h2 style={{fontSize: '20px'}}>
                        {userData.flat}
                      </h2>

                    </div>

                  </div>

                </div>

                <div className="col-md-4 mb-3">

                  <div className="card text-white shadow c11">

                    <div className="card-body text-center">

                      <h6>Owner Name</h6>

                      <h5>
                        {userData.owner}
                      </h5>

                    </div>

                  </div>

                </div>

                <div className="col-md-4 mb-1">

                  <div className="card bg-warning text-dark shadow">

                    <div className="card-body text-center">

                      <h6>Bill Date</h6>

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

                <div className="col-md-4 mb-1">

                  <div className="card shadow-sm border-1">

                    <div className="card-body text-center">

                      <h5>
                        Water Bill
                      </h5>

                      <span
                        className={`badge ${getBadge(
                          userData.waterBill
                        )} p-2`}
                      >
                        {userData.waterBill}
                      </span>

                    </div>

                  </div>

                </div>

                {/* ELECTRICITY */}

                <div className="col-md-4 mb-3">

                  <div className="card shadow-sm border-1">

                    <div className="card-body text-center">

                      <h5>
                        Electricity Bill
                      </h5>

                      <span
                        className={`badge ${getBadge(
                          userData.electricityBill
                        )} p-2`}
                      >
                        {
                          userData.electricityBill
                        }
                      </span>

                    </div>

                  </div>

                </div>

                {/* MAINTAINANCE */}

                <div className="col-md-4 mb-3">

                  <div className="card shadow-sm border-1">

                    <div className="card-body text-center">

                      <h5>
                        Maintainance Bill
                      </h5>

                      <span
                        className={`badge ${getBadge(
                          userData.maintainanceBill
                        )} p-2`}
                      >
                        {
                          userData.maintainanceBill
                        }
                      </span>

                    </div>

                  </div>

                </div>

                {/* GARBAGE */}

                <div className="col-md-6 mb-3">

                  <div className="card shadow-sm border-1">

                    <div className="card-body text-center">

                      <h5>
                        Garbage Bill
                      </h5>

                      <span
                        className={`badge ${getBadge(
                          userData.garbageBill
                        )} p-2`}
                      >
                        {
                          userData.garbageBill
                        }
                      </span>

                    </div>

                  </div>

                </div>

                {/* OTHER */}

                <div className="col-md-6 mb-3">

                  <div className="card shadow-sm border-1">

                    <div className="card-body text-center">

                      <h5>
                        Other Bill
                      </h5>

                      <span
                        className={`badge ${getBadge(
                          userData.otherBill
                        )} p-2`}
                      >
                        {
                          userData.otherBill
                        }
                      </span>

                    </div>

                  </div>

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