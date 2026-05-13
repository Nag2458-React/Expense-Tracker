// Login.jsx

import React, { useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";

import { useNavigate, Link } from "react-router-dom";
import track from "../assets/track.png";
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

      let foundUser = null;

      querySnapshot.forEach((doc) => {
        const user = doc.data();

        if (user.email === data.email && user.password === data.password) {
          foundUser = user;
        }
      });

      if (foundUser) {
        localStorage.setItem("user", JSON.stringify(foundUser));

        toast.success("Login Success");

        navigate("/dashboard");
      } else {
        toast.error("Invalid Credentials");
      }
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
              <h3 className="text-center mb-4">Login</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <lebel>Email</lebel>
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
                  <lebel>Password</lebel>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="btn btn-primary w-100">Login</button>
              </form>

              <div className="mt-3 text-center">
                Don't have account ?<Link to="/signup"> Signup</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
