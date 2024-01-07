import { useState } from 'react'
import NavBar from './components/Header/NavBar'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Project from './pages/Project/Project'
import About from './pages/About/About'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Project />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
