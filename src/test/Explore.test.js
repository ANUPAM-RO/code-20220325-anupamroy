import React from "react";
import ReactDOM  from "react-dom";
import Explore from "../components/explore/Explore";


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Explore></Explore> , div)
})