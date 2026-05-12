import React, { useEffect, useState } from "react";

import { db } from "../firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { toast } from "react-toastify";

const AddCategory = () => {
  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState([]);

  // Fetch Categories
  const fetchCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Submit Category
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (category === "") {
      toast.error("Please Enter Category");
      return;
    }

    try {
      await addDoc(collection(db, "categories"), {
        title: category,
      });

      toast.success("Category Added Successfully");

      setCategory("");

      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Category
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "categories", id));

    toast.success("Deleted Successfully");

    fetchCategories();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* FORM CARD */}

          <div className="card shadow mb-4">
            <div className="card-body">
              <h3 className="text-center mb-4">Add Category</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Category Title</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>

                <button className="btn btn-primary w-100">Add Category</button>
              </form>
            </div>
          </div>

          {/* TABLE CARD */}
        </div>
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="text-center mb-3">Categories List</h4>

              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Category Name</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {categories.length > 0 ? (
                    categories.map((cat, index) => (
                      <tr key={cat.id}>
                        <td>{index + 1}</td>

                        <td>{cat.title}</td>

                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(cat.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3}>No Categories Found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
