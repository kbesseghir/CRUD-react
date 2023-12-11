import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import './App.css'
import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Add from "./pages/Add";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
    <Navbar />

    <div className="row">
    <div className="col-2 sidebar"><Sidebar /></div>
    <div className="col-10">
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/products" element={<Products />}/>
    <Route path="/products/add" element={<Add />}/>
    <Route path="/products/:productId" element={<Details />}/>


    </Routes>
    

    </div>
    </div>
    </div>
  );
}

export default App;
