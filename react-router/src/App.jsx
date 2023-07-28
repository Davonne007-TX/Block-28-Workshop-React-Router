import './App.css'

function App() {

  return (
    <>
      <div id="container">
        <h1>Aloha React Router...!</h1>

        <div id="navBar">
          <nav>
            <ul>
              <li><Link to="/blue" element={<Blue />}>Blue</Link></li>
            </ul>
          </nav>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/pink" element={<Pink />} />
          </Routes>
        </div>


     
      </div>
    </>
  )
}

export default App
