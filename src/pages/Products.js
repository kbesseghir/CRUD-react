import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function Products() {
  const apiUrl = " http://localhost:9000/products";
  const [products, setproducts] = useState([]);
 const  deleteProduct =(product)=>{

    Swal.fire({
        title: "Do you want to Delete this product?",
        showDenyButton: true,
        showCancelButton: true,
        showConfirmButton: false,

        denyButtonText: `Delete`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isDenied) {
            fetch(`${apiUrl}/${product.id}`,{method:'DELETE'})
            .then((response) => response.json())
            .then((data) => getAllProducts());
        //   Swal.fire("Deleted!", "", "success");
        } else if (result.isDismissed) {
          Swal.fire("Product is not deleted", "", "info");
        }
      });
  

 }
 const getAllProducts =()=>{
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setproducts(data));}
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <h1>Product page</h1>
      <Link to="/products/add" className="btn btn-success btn-sm mt-5">
        Add New Product
      </Link>

      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <button className="btn btn-danger btn-sm mx-2" onClick={()=>deleteProduct(product)}>Delete</button>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-info btn-sm mx-2"
                  >
                    View
                  </Link>
                  <button className="btn btn-primary btn-sm mx-2">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
