import React from "react";
import "./card.css";
const Cart = ({ image, value, size, text }) => {
  return (
    <div className="Cart-main">
      <img src={image} alt="" className="cartImg"/>
      <div className="flex">
        <div className="cart-left">
          <div>
            <span>{text}</span>
          </div>
          <div className="left-item">
            <div className="value">{value}</div>
            <div className="size">{size}M<sup>2</sup></div>
          </div>
        </div>
        <div className="book">Book!</div>
      </div>
    </div>
  );
};

export default Cart;
