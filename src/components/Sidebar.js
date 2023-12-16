import { Link } from "react-router-dom";


function Sidebar (){
    return (
<>
        
<ul className="list-group list-group-flush sidebar">
    <li className="list-group-item"> <Link to='/products'> Get All Products</Link></li>
    <li className="list-group-item"><Link to="/categories"> Get All Categories</Link></li>
    <li className="list-group-item"><a href="#"> Get All Products</a></li>
 
</ul>
</>


    );
}
export default Sidebar;