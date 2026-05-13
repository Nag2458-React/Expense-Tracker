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
  const [description, setDescription] = useState("");
  // FETCH DATA

  const fetchApartments = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "apartment_amounts"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setApartments(data);

      // TOTAL FLATS

      setTotalApartments(data.length);

      // TOTALS

      let total = 0;
      let water = 0;
      let electricity = 0;
      let maintainance = 0;
      let garbage = 0;
      let other = 0;
      let description = " ";
      data.forEach((item) => {
        total += Number(item.amount || 0);

        water += Number(item.waterBill || 0);

        electricity += Number(item.electricityBill || 0);

        maintainance += Number(item.maintainanceBill || 0);

        garbage += Number(item.garbageBill || 0);

        other += Number(item.otherBill || 0);
        description += Number(item.description || 0);
      });

      setTotalAmount(total);

      setWaterTotal(water);

      setElectricityTotal(electricity);

      setMaintainanceTotal(maintainance);

      setGarbageTotal(garbage);

      setOtherTotal(other);
      setDescription(description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApartments();
  }, []);

  return (
    <div className="container mt-5">
      {/* TOP BOXES */}

      <div className="row mb-4">
        {/* TOTAL FLATS */}

        <div className="col-md-3 mb-3">
          <div
            className="card shadow text-center "
            style={{
              background: "#00ffe6",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <h4>Total Flats</h4>

            <h1>₹ {totalApartments}</h1>
          </div>
        </div>

        {/* TOTAL AMOUNT */}

        <div className="col-md-3 mb-3">
          <div
            className="card shadow text-center"
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

                  <th>Owner Name</th>

                  <th>Flat No</th>

                  <th>Water Bill</th>

                  <th>Electricity Bill</th>

                  <th>Maintainance</th>

                  <th>Garbage</th>

                  <th>Other</th>

                  <th>Total Amount</th>
                  <th>Description</th>
                  <th>Time</th>

                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {apartments.length > 0 ? (
                  apartments.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>

                      <td>{item.owner}</td>

                      <td>{item.flat}</td>

                      <td>₹ {item.waterBill}</td>

                      <td>₹ {item.electricityBill}</td>

                      <td>₹ {item.maintainanceBill}</td>

                      <td>₹ {item.garbageBill}</td>

                      <td>₹ {item.otherBill}</td>

                      <td className="fw-bold text-success">₹ {item.amount}</td>
                      <td>
                        <b> {item.description}</b>
                      </td>
                      <td>{item.time}</td>

                      <td>{item.date}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={11} className="text-center">
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>

              {/* FOOTER TOTALS */}

              <tfoot className="table-dark">
                <tr>
                  <th colSpan={3}>Grand Total</th>

                  <th>₹ {waterTotal}</th>

                  <th>₹ {electricityTotal}</th>

                  <th>₹ {maintainanceTotal}</th>

                  <th>₹ {garbageTotal}</th>

                  <th>₹ {otherTotal}</th>

                  <th>₹ {totalAmount}</th>
                  <th>₹ {description}</th>

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
