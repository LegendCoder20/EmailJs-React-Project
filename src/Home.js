import React from "react";
import {Link} from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/enquiry">Enquiry</Link>
        </div>

        <h1>Martial Arts</h1>
      </div>
    </>
  );
}

export default Home;
