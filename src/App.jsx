import { useState } from 'react'
import NavBar from './components/Header/NavBar'
import Home from './components/Home/Home'
import AboutMe from './components/About/AboutMe'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
    </>
  )
}

export default App
