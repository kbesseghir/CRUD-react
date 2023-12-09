import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Products(){
    const apiUrl=' http://localhost:9000/products'
    const [products,setproducts]=useState([]);

    useEffect(()=>{
fetch(apiUrl).then((response)=>response.json()).then((data)=>setproducts(data))

    },[])
    return (
        <>
        <h1>Product page</h1>
        <Link  to='/products/add' className="btn btn-success btn-sm mt-5">Add New Product</Link>

        <table class="table table-striped mt-5">
        <thead>
        <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Operations</th>
        </tr>
       
        </thead>
        <tbody>
        {products.map((product)=>{
         return   (
            <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
            <button className="btn btn-danger btn-sm mx-2">Delete</button>
            <button className="btn btn-info btn-sm mx-2">View</button>
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