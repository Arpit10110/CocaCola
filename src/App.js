import React from 'react'
import {HashRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./components/Home.jsx"
import Contact from "./components/Contact"
import "./Style/style.css"
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   </Router>
  )
}

export default App
