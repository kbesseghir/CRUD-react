import { useEffect, useState } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
function Categories() {
    const [categories,setcategories] = useState([])
    const apiUrl=" http://localhost:9000/categories";
    const getAllCategories=() =>{ fetch(apiUrl).then((response) => response.json())
        .then((data) => setcategories(data));}
    const deleteCategory =(category)=>{
        Swal.fire({
        title: "Do you want to Delete this product?",
        showDenyButton: true,
        showCancelButton: true,
        showConfirmButton: false,

        denyButtonText: `Delete`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isDenied) {
            fetch(`${apiUrl}/${category.id}`,{method:'DELETE'})
            .then((response) => response.json()).then((data) => getAllCategories(data))
          Swal.fire("Deleted!", "", "success");
        } else if (result.isDismissed) {
          Swal.fire("Product is not deleted", "", "info");
        }
      });
        }
        useEffect(()=>{
           getAllCategories();
        }, []);

        
    
    return (
        <>
        <h1>Categories page</h1>
      <Link to="/categories/add" className="btn btn-success btn-sm mt-5 mb-5">
        Add New Category
      </Link>
        <div className="container">
          <div className="row">
            {categories.map((category) => (
              <div key={category.id} className="col-12 mb-4">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={category.image}
                        className="img-fluid rounded-start"
                        alt={category.name}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{category.name}</h5>
                        <p className="card-text">{category.description}</p>
                        <button className="btn btn-primary">Show Details</button>
                        <button className="btn btn-danger btn-sm mx-2" onClick={()=>deleteCategory(category)}>Delete</button>
                        
                        <Link to={`/categories/edit/${category.id}`} className="btn btn-primary btn-sm mx-2">Edit</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>  );
      
}
export default Categories;