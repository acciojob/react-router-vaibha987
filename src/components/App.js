
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./home"
import About from "./about"

const App = () => {
  return (
   <BrowserRouter>
  <Routes>
    <Route  path={"/"} element={<Home/>}/>
    <Route  path={"/about"} element={<About/>}/>
  </Routes>
  
  </BrowserRouter> 
  )
}

export default App
