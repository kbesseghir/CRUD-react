function Products(){
    // const apiUrl=
    // const getProducts= ()=>{

    // }
    return (
        <>
        <h1>Product page</h1>
        <button className="btn btn-success btn-sm mt-5">Add New Product</button>

        <table class="table table-striped mt-5">
        <thead>
        <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Operations</th>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>
        <button className="btn btn-danger btn-sm mx-2">Delete</button>
        <button className="btn btn-info btn-sm mx-2">View</button>
        <button className="btn btn-primary btn-sm mx-2">Edit</button>

        </td>
        </tr>
        </thead>
        <tbody>
        
        </tbody>
        </table>
        </>
        );
        
}
export default Products;