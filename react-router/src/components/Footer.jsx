import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer>
       <h3>Back to Pages</h3>
         <div className="footerLinks">
           <li><Link to="/home" className="homeLink">Home</Link></li>
           <li><Link to="/blue" className="blueLink">Blue</Link></li>
           <li><Link to="/red" className="redLink">Red</Link></li>
           <li><Link to="/pink" className="pinkLink">Pink</Link></li>
           <li><Link to="/green" className="greenLink">Green</Link></li>
           <li><Link to="/yellow" className="yellowLink">Yellow</Link></li>
         </div>
    </footer>
    </>
  )
}

export default Footer


