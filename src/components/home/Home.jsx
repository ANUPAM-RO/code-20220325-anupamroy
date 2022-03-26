import React from "react";
import Navber from "../navber/Navber";
import "./home.css";
const Home = () => {
  return (
    <div className="home" id="home">
      <Navber />
      <div className="main">
        <span className="text">Rethink your living & renting</span>
        <h3 className="text-1">Make your stay painless with us</h3>
        <div className="choose">
          <div className="select">
            <span className="text-2">CITY</span>
            <span className="text-3">Select Your city</span>
          </div>
          <div className="select">
            <span className="text-2">DATES</span>
            <span className="text-3">Select your dates</span>
          </div>
          <div className="select">
            <span className="text-2">GUESTS</span>
            <span className="text-3">Add guests</span>
          </div>
          <div className="search">
            <img src="./images/Vector.svg" alt="" className="img-1" />
            <span>Search</span>
          </div>
        </div>
          <img src="./images/image 1.svg" alt="" className="img-2"/>
      </div>
      </div>
  );
};

export default Home;
