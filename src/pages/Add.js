function Add(){
    return (
        <>
        <div className="container my-5">
    <h2 className="mb-4">Add Product</h2>
    <form>
      <div className="mb-3">
        <label for="productName" className="form-label">Product Name</label>
        <input type="text" className="form-control" id="productName" required/>
      </div>
      <div className="mb-3">
        <label for="productCategory" className="form-label">Product Category</label>
        <select className="form-select" id="productCategory" required>
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>
      <div className="mb-3">
        <label for="productPrice" className="form-label">Product Price</label>
        <input type="number" className="form-control" id="productPrice" required/>
      </div>
      <div className="mb-3">
        <label for="productDescription" className="form-label">Product Description</label>
        <textarea className="form-control" id="productDescription" rows="3" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
  </div>

        
        </>
    );
}

export default Add;