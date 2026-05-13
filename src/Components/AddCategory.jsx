import React, { useEffect, useState } from "react";

import { db } from "../firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { toast } from "react-toastify";

const AddCategory = () => {
  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState([]);

  const [editId, setEditId] = useState(null);

  // FETCH CATEGORIES

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

  // ADD / UPDATE CATEGORY

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (category === "") {
      toast.error("Please Enter Category");
      return;
    }

    try {
      // UPDATE

      if (editId) {
        const updateRef = doc(db, "categories", editId);

        await updateDoc(updateRef, {
          title: category,
        });

        toast.success("Category Updated Successfully");

        setEditId(null);
      } else {
        // ADD

        await addDoc(collection(db, "categories"), {
          title: category,
        });

        toast.success("Category Added Successfully");
      }

      setCategory("");

      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE CATEGORY

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "categories", id));

    toast.success("Deleted Successfully");

    fetchCategories();
  };

  // EDIT CATEGORY

  const handleEdit = (cat) => {
    setCategory(cat.title);

    setEditId(cat.id);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {/* FORM */}

        <div className="col-md-6">
          <div className="card shadow mb-4">
            <div className="card-body">
              <h3 className="text-center mb-4">
                {editId ? "Update Category" : "Add Category"}
              </h3>

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

                <button className="btn btn-primary w-100">
                  {editId ? "Update Category" : "Add Category"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* TABLE */}

        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="text-center mb-3">Categories List</h4>

              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>S.No</th>
                    <th>Category Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {categories.length > 0 ? (
                    categories.map((cat, index) => (
                      <tr key={cat.id}>
                        <td>{index + 1}</td>

                        <td>{cat.title}</td>

                        {/* EDIT */}

                        <td>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => handleEdit(cat)}
                          >
                            <i className="bi bi-pencil-square"></i>
                          </button>
                        </td>

                        {/* DELETE */}

                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(cat.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="text-center">
                        No Categories Found
                      </td>
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
