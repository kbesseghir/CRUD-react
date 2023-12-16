import { useEffect, useState } from "react";
import '../App.css'
function Categories() {
    const [categories,setcategories] = useState([])
    const apiUrl=" http://localhost:9000/categories";

    useEffect(()=>{
        fetch(apiUrl).then((response) => response.json())
        .then((data) => setcategories(data));
    }, []);
    
    return (
        <div className="container ">
            <div className="row ">
                {categories.map((category) => (
                    <div key={category.id} className="col-md-6 ">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={category.image} className="img-fluid rounded-start" alt={category.name} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{category.name}</h5>
                                        <p className="card-text">{category.description}</p>
                                        <button className="btn btn-primary">show Products</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Categories;