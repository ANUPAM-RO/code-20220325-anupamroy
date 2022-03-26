import React from 'react'
import "./card2.css"
const Cart2 = ({image ,value}) => {
  return (
    <div className="Card2-main">
      <img src={image} alt="" className='card2-image'/>
      <div className="card-capture">
              <span className='card2-value'>{value}</span>
              <span className='card2-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</span>
      </div>
    </div>
  )
}

export default Cart2