import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route , Link, Navigate, Outlet } from "react-router-dom";
import './App.css'
import './css/responsive.css'

import Home from './components/Home';
import AssetInfo from './components/AssetInfo';

function App() {
 

  return (
    <div>
  
  <Router>
 
       <Routes>
          <Route path="/" element={<Home Link={Link}/>}/>
          <Route path="/asset/management-info" element={<AssetInfo Link={Link}/>}/>
       </Routes>
     
    </Router>
    </div>
  )
}

export default App
