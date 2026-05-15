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
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // DEFAULT ROLE USER

      await addDoc(collection(db, "users"), {
        ...data,
        role: "user",
      });

      toast.success("Signup Success");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="text-center pt-5 pb-3">
              <img src={track} alt="track" style={{ width: "200px" }} />
            </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Signup</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="btn btn-success w-100">Signup</button>
              </form>

              <div className="mt-3 text-center">
                Already have account ?<Link to="/login"> Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
