import { useState } from 'react'
import NavBar from './components/Header/NavBar'
import Home from './pages/Home/Home'
import AboutMe from './components/About/AboutMe'
import Projects from './components/Projects/Projects'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
    </>
  )
}

export default App
