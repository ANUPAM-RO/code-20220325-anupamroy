import React from "react";
import "./navber.css";

const Navber = () => {
  return (
    <nav className="navber">
      <div className="container">
        <div className="left">
          <a href="#" className="link">
          <span className="logo">Your logo</span>
            
          </a>
        </div>
        <div className="right">
          <div>
            <a href="#explore" className="link">
              <span>Explore</span>
            </a>
          </div>
          <a href="#about" className="link">
            <span>About Us</span>
          </a>
          <div>
            <span>Cities</span>
            <img src="./images/image 1.svg" alt="" className="image"/>
          </div>
          <button >Call</button>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
