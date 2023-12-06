import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import './App.css'

function App() {
  return (
    <div className="App">
    <Navbar />

    <div className="row">
    <div className="col-2 sidebar"><Sidebar /></div>
    <div className="col-10">test</div>
    </div>
    </div>
  );
}

export default App;
