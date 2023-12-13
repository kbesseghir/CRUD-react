import { useEffect, useState } from "react";

function Add() {
  const apiUrl = " http://localhost:9000/products";

  const [title, settitel] = useState("");
  const [price, setprice] = useState(0);
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      title: title,
      price: price,
      description: description,
      category: category
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="container my-5">
        <h2 className="mb-4">Add Product</h2>
        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              onChange={(e) => {
                settitel(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select className="form-select" id="productCategory" required onChange={(e) => {
                setcategory(e.target.value);
              }}>
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">women's clothing</option>
              <option value="clothing">men's clothing</option>

            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              onChange={(e) => {
                setprice(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="productDescription"
              className="form-label"
              
            >
              Product Description
            </label>
            <textarea
              className="form-control"
              id="productDescription"
              rows="3"
              required onChange={(e) => {
                setdescription(e.target.value);
              }}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default Add;
