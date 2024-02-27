import "./App.css";
import Home from "./Home";
import Enquiry from "./Enquiry";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/enquiry" element={<Enquiry></Enquiry>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
