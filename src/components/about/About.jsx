import React from 'react'
import "./about.css"
import Card2 from './Card2'
const About = () => {
  return (
      <div className='about' id="about">
          <h1>About Us</h1>
          <span>Allow us to tell you a short story...</span>
          <div className='card2'>
        <div className='card-items2'>
          <Card2 image="./images/pexels-max-vakhtbovych-5998051 1.jpg" value="Chapter I" />
          <Card2 image="./images/pexels-houzlook-com-3356416 2.jpg" value="Chapter III" />
          
        </div>
        <div className='card-items2'>

              <Card2 image="./images/pexels-max-vakhtbovych-6492403 1.jpg" value="Chapter II"/>
              <Card2 image="./images/pexels-oleg-zaicev-4834891 1.jpg" value="Chapter IV"/>
        </div>

          
          </div>
    </div>
  )
}

export default About