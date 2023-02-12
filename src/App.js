import React from 'react'
import { BrowserRouter as Router, Routes, Route,   } from 'react-router-dom'
import "./App.css"
import Navbar from './Common/Navbar/Navbar'
import Home from './Components/Pages/Home'
import About from './Components/About/About'


const App = () => {
  return (
    <div>
      
        <Router>   
        <Navbar/>  
          <Routes>
              <Route path='/' exact element={<Home/>}></Route>
              <Route path='/about' exact element={<About/>}></Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App   