import React from 'react'
import "./card2.css"
const Cart2 = ({image ,value}) => {
  return (
    <div className="Cart2-main">
      <img src={image} alt="" />
      <div className="card-capture">
              <span className='cart2-value'>{value}</span>
              <span className='card2-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</span>
      </div>
    </div>
  )
}

export default Cart2