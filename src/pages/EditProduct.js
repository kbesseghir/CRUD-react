import { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import Swal from 'sweetalert2'


function Edit(){
const apiUrl = " http://localhost:9000/products";
const navigate = useNavigate();

let { productId } = useParams();

  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  useEffect(() => {
    fetch(`${apiUrl}/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        // Update state with fetched product details
       ( settitle(data.title));
        setprice(data.price);
        setdescription(data.description);
        setcategory(data.category);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [apiUrl]);
  const formSubmit = (e) => {
    e.preventDefault();
  
    const requestData = {
      title: title,
      price: price,
      description: description,
      category: category
    };


  fetch(`${apiUrl}/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
    Swal.fire({
        title: "Good job!",
        text: "You updated the product info!",
        icon: "success"
      });
    navigate("/products");
};


    return(<>
       <h1>Update Product Information</h1>
       <div className="container my-5">
       <form  onSubmit={formSubmit}>
         <div className="mb-3">
           <label htmlFor="productName" className="form-label">
             Product Name
           </label>
           <input
             type="text"
             className="form-control"
             id="productName"
             value={title}
             onChange={(e) => {
               settitle(e.target.value)
             }}
             required
           />
         </div>
         <div className="mb-3">
           <label htmlFor="productCategory" className="form-label">
             Product Category
           </label>
           <select className="form-select" id="productCategory" required  value= {category}
           onChange={(e) => {
               setcategory(e.target.value);}}
             >
             <option value="">select</option>

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
             value={price}
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
             value={description}
             required onChange={(e) => {
               setdescription(e.target.value);
             }}
           ></textarea>
         </div>
         <button type="submit" className="btn btn-primary">
           Edit 
         </button>
       </form>
     </div> </>)
}
export default Edit;