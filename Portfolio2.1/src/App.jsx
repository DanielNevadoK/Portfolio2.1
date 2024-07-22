import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './LandingPage'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPage />
    <Projects />
    <Resume />
    <Contact />
    </>
  )
}

export default App
