import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import track from "../assets/track.png";
import { db } from "../firebase";

import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
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
      const querySnapshot = await getDocs(collection(db, "users"));

      let found = false;

      querySnapshot.forEach((doc) => {
        const user = doc.data();

        if (user.email === data.email && user.password === data.password) {
          found = true;
        }
      });

      if (found) {
        toast.success("Login Success");

        navigate("/dashboard");
      } else {
        toast.error("Invalid Email or Password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="text-center pt-5">
        <img src={track} alt="track" style={{ width: "150px" }} />
      </div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow" style={{ marginTop: "30px" }}>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h4 className="text-center mb-3">User Login</h4>

                <hr />

                <div className="mb-3">
                  <label>
                    <i className="bi bi-envelope-fill me-2"></i>
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>
                    <i className="bi bi-lock-fill me-2"></i>
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="text-center">
                  <button className="btn btn-primary w-100">Login</button>
                </div>

                <div className="mt-3 text-center">
                  Don't have account ?<Link to="/signup"> Signup Here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
