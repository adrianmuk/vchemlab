import React, { Component } from 'react';
import './App.css';
import Sidenav from './Components/Sidenav';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
//import Testubecompo from './Components/Testubecompo';
import Workspace from './Components/Workspace';
import InstructNotebookTile from './Components/InstructNotebookTile';

import chemlabgif from './Assets/chemlab.gif';


function Simulator (){
  return (
    
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <div class="Simulato_lower_row">
          <div><Sidenav></Sidenav> </div>
          <div><Workspace></Workspace></div>
          {/* <div><InstructNotebookTile></InstructNotebookTile>  </div> */}
      </div>
      <div class="Simfooter">Developed by @Alozious and @Adrian</div>
 
    </div>   
     
  );
}


 export default Simulator;
