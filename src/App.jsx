import { useState } from 'react'
import NavBar from './components/Header/NavBar'
import Home from './pages/Home/Home'
import AboutMe from './components/About/AboutMe'
import Project from './pages/Project/Project'
import About from './pages/About/About'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Project />
    </>
  )
}

export default App
