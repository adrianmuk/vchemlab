
import {  useNavigate, Link} from "react-router-dom";
import "../App.css";
import React, { useState } from 'react';
import {String} from 'prop-types';


export default class InstructNotebookTile extends React.Component{

  render(){
    //const navigate = useNavigate()
    const {logText} = this.props;
  return (

    <div>
      <div class="InstructNotebookTile">
      <div class="Instructions">Instructions</div>
      <textarea class="textAreaInst" defaultValue="Get Substance X and mix it with Dilute Sodium Hydroxiode and record your observations, 
Dilute Sulphuric Acid /n
      
      
      "/>
      <div class="Resultslog">Results Log</div>
      <textarea class="textAreaInst" value={logText}/>
      <div class="Notebook">Notebook</div>
      <textarea class="textAreaInst" defaultValue="Write your notes here"/>
      </div>
    </div> 
               

  );
}
}


InstructNotebookTile.propTypes= {
  logText: String,
};