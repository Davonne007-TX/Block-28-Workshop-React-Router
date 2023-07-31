import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer>
       <h3>Back to Pages</h3>
         <div className="footerLinks">
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/blue">Blue</Link></li>
           <li><Link to="/red">Red</Link></li>
           <li><Link to="/pink">Pink</Link></li>
           <li><Link to="/green">Green</Link></li>
           <li><Link to="/yellow">Yellow</Link></li>
         </div>
    </footer>
    </>
  )
}

export default Footer


