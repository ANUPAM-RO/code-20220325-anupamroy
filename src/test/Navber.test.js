import React from "react";
import ReactDOM  from "react-dom";
import Navber from "../components/navber/Navber";

it("renders without crashing", () => {
    const nav = document.createElement("nav");
    ReactDOM.render(<Navber></Navber>, nav); 
})