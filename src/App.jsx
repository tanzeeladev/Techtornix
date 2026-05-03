import React from 'react'
import Navbar from  './Components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Choose from './pages/Choose.jsx'
import Process from './pages/process.jsx'
import Stats from './pages/Stats.jsx'
import TechStack from './pages/TechStack.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Services/>
      <Choose/>
      <Process/>
      <Stats/>
      <TechStack/>
    </div>
  )
}

export default App
