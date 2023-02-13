import * as React from 'react';
import {  useNavigate, Link} from "react-router-dom";
import "../App.css";

function ResponsiveAppBar() {
    const navigate = useNavigate()
  return (

    <div class="ResNavBarWorkspace">
        {/* <img src="path/to/image.jpg" alt="Description of the image" /> */}
        <p class="logotext">V-Chemlab</p>
        <p  class="workspaceTxt">Workspace Name</p>
    </div> 
               

  );
}
export default ResponsiveAppBar;
