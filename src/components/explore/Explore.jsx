import React from 'react'
import Card from './Card'
import "./explore.css"
const Explore = () => {
  return (
      <div className='explore' id="explore">
          <h1> Explore</h1>
          <span className='text4'>From one-guest rooms to penthouses with pools and gardens</span>
          <div className='card'>
              <Card image="./images/pexels-dmitry-zvolskiy-2082087 1.jpg" value="35$" size="28"  text="Room with one king-size bed"/>
              <Card image="./images/pexels-naim-benjelloun-2029670 1.jpg" value="2039$" size="438" text="Penthouse for 8 person" />
          </div>
      </div>
  )
}

export default Explore