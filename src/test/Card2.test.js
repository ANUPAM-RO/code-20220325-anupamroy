import React from "react";
import ReactDOM  from "react-dom";
import Card2 from "../components/about/Card2";


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card2></Card2>, div)
})