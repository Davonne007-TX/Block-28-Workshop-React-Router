import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <nav>
            <ul>
              <li><Link to="/blue">Blue</Link></li>
              <li><Link to="/red">Red</Link></li>
              <li><Link to="/pink">Pink</Link></li>
            </ul>
          </nav>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<h1>Blue</h1>} />
            <Route path="/red" element={<h1>Red</h1>} />
            <Route path="/pink" element={<h1>Pink</h1>} />
          </Routes>
        </div>
      </div> {/*last div to container */}
    </>
  )
}

export default App
