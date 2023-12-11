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
      <div class="container my-5">
        <div class="row">
          <div class="col-md-6">
            <img
              src={product.image}
              alt="Product Image"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <h2 class="mb-3">{product.title}</h2>
            <p class="text-muted">
              Category: <span class="text-primary">{product.category}</span>
            </p>
            <p class="lead">{product.price}</p>
            <p>
             {product.description}
            </p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
