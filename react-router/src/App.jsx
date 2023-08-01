import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Blue from './components/Blue'
import Red from './components/Red'
import Pink from './components/Pink'
import Green from './components/Green'
import Yellow from './components/Yellow'
import Footer from './components/Footer'

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
        <Footer />
      </div>
   
    </>
    
  )
}

export default App



{
  /* Lecture Notes - Thursday 7-31
      - useState, tracks the state. change the state
      - useEffect = side effects, if state changes, keep track of the state, trigger the useEffect
      - the difference between controlled forms and uncontrolled form, is the useState
      
      - BrowserRower needs to be wrapped in the App

      - look up useParams(), something to do with the parameters. wrapping something 
      - useNavigate = programmatically, navigate to a page 




  */
}