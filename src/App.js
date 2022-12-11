import './App.css';
import React from 'react';
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import render from "react-dom";
import ReactDOM from "react-dom/client";
import Simulator from "./Simulator";
import Home from "./Home";
import Mainmenu from './Components/Mainmenu';
import Loginpage from './Components/Loginpage';
import vchemgif from "./Assets/chemlab.gif";


function App() {
    const navigate = useNavigate()
  return (
    
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="Simulator" element={<Simulator />} />
       <Route path="Loginpage" element={<Loginpage />} />
       <Route path='Mainmenu' element={<Mainmenu />} />
    </Routes>
                          
);
}
export default App;
