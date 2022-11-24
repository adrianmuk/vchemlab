import * as React from 'react';
import Home from '../Home';
import {  useNavigate, Link} from "react-router-dom";

function ResponsiveAppBar() {
    const navigate = useNavigate()
  return (
    
    <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
            <div class="container">
              
              
                 <a class="navbar-brand logo-text" href="#">V-Chemlab</a> 
                <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav ms-auto navbar-nav-scroll">
                        <li class="nav-item">
                            <Link to="../" class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#details">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#features">Pricing</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Features</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown01">
                                <li><a class="dropdown-item" href="#">Article Details</a></li>
                                <li><div class="dropdown-divider"></div></li>
                                <li><a class="dropdown-item" href="#">Terms Conditions</a></li>
                                <li><div class="dropdown-divider"></div></li>
                                <li><a class="dropdown-item" href="#">Privacy Policy</a></li>
                            </ul>
                        </li>
                    </ul>
                    <span class="nav-item">
                        <a class="btn-solid-sm" href="#contact">Login</a>
                    </span>
                </div> 
            </div> 
        </nav>
      
  );
}
export default ResponsiveAppBar;
