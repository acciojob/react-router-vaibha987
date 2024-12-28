
import React from "react";
import './../styles/App.css';
import {BrowserRouter} from "react-router"
import { Routes } from "react-router"
import { Route } from "react-router"
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
