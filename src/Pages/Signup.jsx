// Signup.jsx

import React, { useState } from "react";

import { db } from "../firebase";

import { collection, addDoc } from "firebase/firestore";

import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
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
      // FIREBASE DATABASE COLLECTION NAME = users

      await addDoc(collection(db, "users"), data);

      toast.success("Signup Successfully");

      setData({
        name: "",
        username: "",
        email: "",
        password: "",
      });

      // LOGIN PAGE REDIRECT

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow" style={{ marginTop: "50px" }}>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h4 className="text-center mb-3">User SignIn</h4>

                <hr />

                <div className="mb-3">
                  <label>
                    <i className="bi bi-person-fill me-2"></i>
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>
                    <i className="bi bi-person-fill me-2"></i>
                    User Name
                  </label>

                  <input
                    type="text"
                    placeholder="User Name"
                    className="form-control"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    required
                  />
                </div>

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
                  <button className="btn btn-primary w-100">SignIn</button>
                </div>

                <div className="mt-3 text-center">
                  Already have account ?<Link to="/login"> Login Here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
