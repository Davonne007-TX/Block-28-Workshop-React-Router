import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Blue from './components/Blue'
import Red from './components/Red'
import Pink from './components/Pink'
import Home from './components/Home'

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/blue">Blue</Link></li>
              <li><Link to="/red">Red</Link></li>
              <li><Link to="/pink">Pink</Link></li>
            </ul>
          </nav>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/pink" element={<Pink /> } />
          </Routes>
        </div>
      </div> {/*last div to container */}
    </>
  )
}

export default App
