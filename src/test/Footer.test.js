import React from "react";
import ReactDOM  from "react-dom";
import Footer from "../components/footer/Footer";


it("renders without crashing", () => {
    const footer = document.createElement("footer");
    ReactDOM.render(<Footer></Footer>, footer)
})