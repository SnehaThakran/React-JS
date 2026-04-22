import React from 'react'
import{BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Hollywood from "./Components/Hollywood"
import Fitness from './Components/Fitness'
import Food from './Components/Food'
import Bollywood from './Components/Bollywood'
import Technology from './Components/Technology'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import './App.css'

const App = () => {
  return (
      <div>
       <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bollywood" element={<Bollywood/>}/>
            <Route path="/technology" element={<Technology/>}/>
            <Route path="/hollywood" element={<Hollywood/>}/>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/food" element={<Food/>}/> 
          </Routes>
        </BrowserRouter>


      </div>
  )
}

export default App