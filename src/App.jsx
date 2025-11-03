import React from "react";
import logo from "./epc.png";
import "./App.css";
import "animate.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Services from "./Services";
import About from "./About"; // 👈 fixed import name
import Gallery from "./Gallery";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <img src={logo} className="App-logo" alt="logo" />
                  <a href="tel:4233567792">
  <button className="btn">Get a free estimate</button>
</a>
                  <p className="epc3 animate__animated animate__fadeInDown animate__delay-1s">We dont just paint, we transform.</p>
                  <p className="epc animate__animated animate__fadeInDown">
                    Welcome
                  </p>
                  <p className="epc epc2 animate__animated animate__fadeInDown animate__delay-1s">
                    30+ Years of Trusted Commercial & Residential Painting
                  </p>

                  <p className="ms">
                    "At Emerson Painting Company, our mission is to serve with
                    excellence, beauty, precision, and purpose to every space we
                    touch. We believe painting is more than a trade; it’s a gift
                    from God, and we honor that gift by delivering honest work,
                    reliable service, and results that reflect our commitment to
                    doing things right. From residential homes to commercial
                    buildings, we transform environments with integrity, skill,
                    and heart."
                  </p>
                </>
              }
            />
            <Route path="/services" element={<Services />} />
             <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
