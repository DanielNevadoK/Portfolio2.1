import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './LandingPage'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import BagelHouseCafe from './project_cases/BagelHouse/BagelHouseCafe';
import BrokenRecords from './project_cases/broken_records/BrokenRecords';

function App() {
  const [count, setCount] = useState(0)

  return (
<Router>
      <Routes>
        {/* Route for the main one-page layout */}
        <Route 
          path="/" 
          element={
            <>
              <LandingPage />
              <Projects />
              <Resume />
              <Contact />
            </>
          } 
        />
        {/* Route for the BagelHouseCafe project page */}
        {/* <Route path="/project_cases/hair-salon-es" element={<HairSalonEs />} /> */}
        <Route path="/project_cases/broken-records" element={<BrokenRecords />} />
        <Route path="/project_cases/bagel-house-cafe" element={<BagelHouseCafe />} />
      </Routes>
    </Router>
  )
}

export default App
