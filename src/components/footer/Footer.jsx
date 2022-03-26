import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
              <div className="footer-left">
                  <div>
                  <span className="logo">Your logo</span>

                  </div>
                  <div>
                  <span className='footer-text'>&copy;  2021  Company Name
                    All rights reserved</span>

                  </div>
        </div>
        <div className="footer-right">
          <div>
              <span>Explore</span>
           
          </div>
            <span>About Us</span>
         
          <div>
            <span>Cities</span>
          </div>
          <button className='button'>Call</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;