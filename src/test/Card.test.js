import React from "react";
import ReactDOM  from "react-dom";
import Card from "../components/explore/Card";


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card></Card> , div)
})