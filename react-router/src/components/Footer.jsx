import React from 'react'
import './Footer.css'
import { useNavigate} from 'react-router-dom'

function Footer() {

  const navigate = useNavigate()

  return (
    <>
    <footer>
       <h3>Back to Pages</h3>
        <div className="navigateButtons"> 
          <button onClick={() => navigate('./home')}  className="homeLink">Home</button>
          <button onClick={() => navigate('./blue')} className="blueLink">Blue</button>
          <button onClick={()=> navigate('./red')}  className="redLink">Red</button>
          <button onClick={() => navigate('./pink')} className="pinkLink">Pink</button>
          <button onClick={() => navigate('./green')} className="greenLink">Green</button>
          <button onClick={() => navigate('./yellow')} className="yellowLink">Yellow</button>
          </div>
    </footer>
    </>
  )
}

export default Footer








