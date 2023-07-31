import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Blue from './components/Blue'
import Red from './components/Red'
import Pink from './components/Pink'
import Green from './components/Green'
import Yellow from './components/Yellow'

function App() {

  return (
    <>
      <div id="container">
        <NavBar />

        <div id="main-section">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/pink" element={<Pink />} />
            <Route path="/green" element={<Green />} />
            <Route path="/yellow" element={<Yellow />} />
         </Routes>
        </div>
      </div>
    </>
    
  )
}

export default App