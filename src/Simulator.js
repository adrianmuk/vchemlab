import React, { Component } from 'react';
import './App.css';
import Sidenav from './Components/Sidenav';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
//import Testubecompo from './Components/Testubecompo';
import Workspace from './Components/Workspace';

import chemlabgif from './Assets/chemlab.gif';


function Simulator (){
  return (
    
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Sidenav></Sidenav>  
      <Workspace></Workspace>
    </div>   
     
  );
}


 export default Simulator;
