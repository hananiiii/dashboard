import './App.css'
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Sidebar from './components/sidebar'
import Header from './components/header'
function App() {
  const [openSidebarToggle,setOpenSidebarToggle]=useState(false)
  const openSidebar=() =>{
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <>
    
        <div className="grid-container">
        <Header openSidebar={openSidebar}/>
          <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
        
          <Home/>
          </div>
        
     
    </>
  )
}

export default App
