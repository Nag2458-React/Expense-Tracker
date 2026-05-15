import React, { useState } from "react";

import { addDoc, collection } from "firebase/firestore";

import { db } from "../firebase";

import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";

import track from "../assets/track.png";

const Signup = () => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    flat: "",
    email: "",
    password: "",
  });

  // HANDLE CHANGE

  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // SAVE USER DATA

      await addDoc(collection(db, "users"), {
        name: data.name,
        flat: data.flat,
        email: data.email,
        password: data.password,
        role: "user",
      });

      toast.success("Signup Success");

      navigate("/login");

    } catch (error) {

      console.log(error);

      toast.error("Something Went Wrong");
    }
  };

  return (
    <div className="container">

      <div className="text-center pt-2 pb-3">
        <img
          src={track}
          alt="track"
          style={{ width: "200px" }}
        />
      </div>

      <div className="row justify-content-center">

        <div className="col-md-4">

          <div className="card shadow border-0">

            <div className="card-body p-4">

              <h3 className="text-center mb-2">
                Signup
              </h3>

              <form onSubmit={handleSubmit}>

                {/* NAME */}

                <div className="mb-2">

                  <label className="fw-bold mb-1">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* FLAT */}

                <div className="mb-2">

                  <label className="fw-bold mb-1">
                    Flat Number
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Flat Number"
                    name="flat"
                    value={data.flat}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* EMAIL */}

                <div className="mb-2">

                  <label className="fw-bold mb-1">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />

                </div>

                {/* PASSWORD */}

                <div className="mb-2">

                  <label className="fw-bold mb-1">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                  />

                </div>

                <button className="btn btn-success w-100">
                  Signup
                </button>

              </form>

              <div className="mt-3 text-center">

                Already have account ?

                <Link to="/login">
                  {" "}Login
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Signup;