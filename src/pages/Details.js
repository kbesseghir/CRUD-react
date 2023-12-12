import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../App.css'
function Details() {
  const apiUrl = " http://localhost:9000/products";

  let { productId } = useParams();
  const [product, setproduct] = useState({});

  useEffect(() => {
    fetch(`${apiUrl}/${productId}`)
      .then((response) => response.json())
      .then((data) => setproduct(data));
  }, []);
  return (
    <>
      <h1> Product Details </h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt="Product Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">{product.title}</h2>
            <p className="text-muted">
              Category: <span className="text-primary">{product.category}</span>
            </p>
            <p className="lead">{product.price}</p>
            <p>
             {product.description}
            </p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
