import './App.css';
import React from 'react';
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Simulator from "./Simulator";


function App() {
    const navigate = useNavigate()
  return (
    
  <div className="App">
  <Routes>
    <Route path="Simulator" element={<Simulator></Simulator>} />
    </Routes>
      <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
              <div class="container">
              
              
                  <a class="navbar-brand logo-text" href="#">V-Chemlab</a> 
                  <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                      <ul class="navbar-nav ms-auto navbar-nav-scroll">
                          <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="#header">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#features">Features</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#aboutus">About Us</a>
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
      
          <header id="header" class="header">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 col-xl-5">
                          <div class="text-container">
                              <h1 class="h1-large">Experiment on the go.</h1>
                              <p class="p-large">Simulate chemistry experiments, Visualize chemical processes, bonding, thermo-dynamics, electronic configurations, molecular structure, retrieve properties of chemical elements and balance chemical equations.</p>
                              <Link to="/Simulator" class="btn-solid-lg" >Try it now</Link>
                              <button class="btn-solid-lg" onClick={()=> navigate('Simulator')}>Try it now</button>
                          </div>
                          
                      </div> 
                      <div class="col-lg-6 col-xl-7">
                          <div class="image-container">
                              <img class="img-fluid" src="assets/images/header-image.png" alt="alternative" />
                          </div> 
                      </div> 
                  </div> 
              </div> 
          </header> 






{/* *********************************************features *************************************************/}      
          <div class="cards-2 bg-gray" id="features">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <h2 class="h2-heading">Explore V-chemlab features</h2>
                      </div> 
                  </div>
                  <div class="row">
                      <div class="col-lg-12">
                          
                          <div class="card">
                              <img class="quotes" src="assets/images/expeicon.svg" alt="alternative" />
                              <div class="card-body">
                                  <div class="testimonial-author">Live Experiments</div>
                                  <p class="testimonial-text">Attempt Virtual experiments which are live using virtual apparatus and virtual chemicals </p>
                                  <button class="btn-solid-lg" onClick={()=> navigate('Simulator')}>Try it now</button>
                              </div>
                              <div class="gradient-floor red-to-blue"></div>
                          </div>
                      
                          
                          <div class="card">
                              <img class="quotes" src="assets/images/molviewicon.svg" alt="alternative" />
                              <div class="card-body">
                                  <div class="testimonial-author">Molecular Viewer</div>
                                  <p class="testimonial-text">Generate molecular visualizations either in 3D or 2D of all chemical elements and compounds</p>
                                  <button class="btn-solid-lg" onClick={()=> navigate('Simulator')}>Try it now</button>
                              </div>
                              <div class="gradient-floor blue-to-purple"></div>
                          </div>
                      
                          
                          <div class="card">
                              <img class="quotes" src="assets/images/libraryicon.svg" alt="alternative" />
                              <div class="card-body">
                                  <div class="testimonial-author">Elements/Compound Library</div>
                                  <p class="testimonial-text">Explore the periodic table, core data and properties of all elements and chemical compounds</p>
                                  <button class="btn-solid-lg" onClick={()=> navigate('Simulator')}>Try it now</button>
                              </div>
                              <div class="gradient-floor purple-to-green"></div>
                          </div>
                      
                          
                          
                          <div class="card">
                              <img class="quotes" src="assets/images/elearningicon.svg" alt="alternative" />
                              <div class="card-body">
                                  <div class="testimonial-author">E-learning platform</div>
                                  <p class="testimonial-text">Access our self paced chemistry courses covering all chemistry topics approved by the Ministry.</p>
                                  <button class="btn-solid-lg" onClick={()=> navigate('Simulator')}>Try it now</button>
                              </div>
                              <div class="gradient-floor red-to-blue"></div>
                          </div>
                      
                          
                          <div class="card">
                              <img class="quotes" src="assets/images/balanceequaicon.svg" alt="alternative" />
                              <div class="card-body">
                                  <div class="testimonial-author">Balance equation</div>
                                  <p class="testimonial-text">Enter your reactants, reagents, conditions to predict possible reactions and balance equations</p>
                                  <button class="btn-solid-lg" onClick={()=> navigate('Simulator')}>Try it now</button>
                              </div>
                              <div class="gradient-floor blue-to-purple"></div>
                          </div>
                      
                          
                          <div class="card">
                              <img class="quotes" src="assets/images/calcicon.svg" alt="alternative" />
                              <div class="card-body">
                                  <div class="testimonial-author">Chemical calculator.</div>
                                  <p class="testimonial-text">Calculate chemical and physical properties based on the stoichiometry of a chemical compound</p>
                                  <button class="btn-solid-lg" onClick={()=> navigate('Simulator')}>Try it now</button>
                              </div>
                              <div class="gradient-floor purple-to-green"></div>
                          </div>
                      
                      </div> 
                  </div>
              </div> 
          </div>





{/* *************************************About us ****************************************************/}
          <div id="aboutus" class="basic-1">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 col-xl-7">
                          <div class="image-container">
                              <img class="img-fluid" src="assets/images/details-1.png" alt="alternative" />
                          </div> 
                      </div> 
                      <div class="col-lg-6 col-xl-5">
                          <div class="text-container">
                              <div class="section-title">WHO WE ARE</div>
                              <h2>We are a team passionate about......</h2>
                              <p>changing the learning landscape of Science subjects in Uganda by building virtual simulators that can be accessed anywhere to solve the problem of ill-equipped laboratories, expensive supplies like apparatus and the difficulties faced in understanding of the more of theoretical material.</p>
                              <a class="btn-solid-reg" href="#contact">Contact Us</a>
                          </div> 
                      </div> 
                  </div>
              </div> 
          </div>
      
    


 {/* *********************************************features *************************************************/}      
          <div class="cards-2 bg-gray" id="features">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <h2 class="h2-heading">Compare Features</h2>
                          <p>Choose the plan that fits your needs. You can always start for free.</p>
                      </div> 
                  </div>

                  <div class="row">
                      <div class="col-lg-12">
                          
                          <div class="card">
                              <img class="quotes" src="assets/images/expeicon.svg" alt="alternative" />
                              <div class="card-body">
                                  <div class="testimonial-author">Free</div>
                                  <p class="testimonial-text">The basics for individuals, organization and schools</p>
                                  <button class="btn-solid-lg" onClick={()=> navigate('Simulator')}>Try it now</button>
                              </div>
                              <div class="gradient-floor red-to-blue"></div>
                          </div>
                      
                          
                          <div class="card">
                              <img class="quotes" src="assets/images/molviewicon.svg" alt="alternative" />
                              <div class="card-body">
                                  <div class="testimonial-author">Molecular Viewer</div>
                                  <p class="testimonial-text">Generate molecular visualizations either in 3D or 2D of all chemical elements and compounds</p>
                                  <button class="btn-solid-lg" onClick={()=> navigate('Simulator')}>Try it now</button>
                              </div>
                              <div class="gradient-floor blue-to-purple"></div>
                          </div>
                      
                          
                          <div class="card">
                              <img class="quotes" src="assets/images/libraryicon.svg" alt="alternative" />
                              <div class="card-body">
                                  <div class="testimonial-author">Elements/Compound Library</div>
                                  <p class="testimonial-text">Explore the periodic table, core data and properties of all elements and chemical compounds</p>
                                  <button class="btn-solid-lg" onClick={()=> navigate('Simulator')}>Try it now</button>
                              </div>
                              <div class="gradient-floor purple-to-green"></div>
                          </div>
                                            
                      </div> 
                  </div>
              </div> 
          </div>

      
      
          



{/* ***********************Trusted by and slider******************************************* */}
      
          <div class="slider-1">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <h4>Approved by <span class="blue">500 teachers and The Ministry</span>in Uganda</h4>
                          <hr class="section-divider" />
                      
                          <div class="slider-container">
                              <div class="swiper-container image-slider">
                                  <div class="swiper-wrapper">
                                      <div class="swiper-slide">
                                          <img class="img-fluid" src="assets/images/customer-logo-1.png" alt="alternative" />
                                      </div>
                                      <div class="swiper-slide">
                                          <img class="img-fluid" src="assets/images/customer-logo-2.png" alt="alternative" />
                                      </div>
                                      <div class="swiper-slide">
                                          <img class="img-fluid" src="assets/images/customer-logo-3.png" alt="alternative" />
                                      </div>
                                      <div class="swiper-slide">
                                          <img class="img-fluid" src="assets/images/customer-logo-4.png" alt="alternative" />
                                      </div>
                                      <div class="swiper-slide">
                                          <img class="img-fluid" src="assets/images/customer-logo-5.png" alt="alternative" />
                                      </div>
                                      <div class="swiper-slide">
                                          <img class="img-fluid" src="assets/images/customer-logo-6.png" alt="alternative" />
                                      </div>
                                  </div>
                              </div> 
                          </div> 
                      
                      </div> 
                  </div>
              </div> 
          </div> 
      
      




{/* *****************************************************contact us **************************************/}

          <div id="contact" class="form-1">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6">
                          <div class="text-container">
                              <div class="section-title">Contact Us</div>
                              <h2>Submit the form to Contact Us</h2>
                              <p>Send us an email by filling out the form</p>
                              <p>Follow and contact us using our handles below</p>
                            </div>

                              
                            <div class="footer bg-gray">
              
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="social-container">
                                                <span class="fa-stack">
                                                    <a href="#your-link">
                                                        <i class="fas fa-circle fa-stack-2x"></i>
                                                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                                                    </a>
                                                </span>
                                                <span class="fa-stack">
                                                    <a href="#your-link">
                                                        <i class="fas fa-circle fa-stack-2x"></i>
                                                        <i class="fab fa-twitter fa-stack-1x"></i>
                                                    </a>
                                                </span>
                                                <span class="fa-stack">
                                                    <a href="#your-link">
                                                        <i class="fas fa-circle fa-stack-2x"></i>
                                                        <i class="fab fa-pinterest-p fa-stack-1x"></i>
                                                    </a>
                                                </span>
                                                <span class="fa-stack">
                                                    <a href="#your-link">
                                                        <i class="fas fa-circle fa-stack-2x"></i>
                                                        <i class="fab fa-instagram fa-stack-1x"></i>
                                                    </a>
                                                </span>
                                                <span class="fa-stack">
                                                    <a href="#your-link">
                                                        <i class="fas fa-circle fa-stack-2x"></i>
                                                        <i class="fab fa-youtube fa-stack-1x"></i>
                                                    </a>
                                                </span>
                                            </div> 
                                        </div> 
                                    </div>
                                </div> 
                            </div> 
                    </div> 


                        
                      
                    <div class="col-lg-6">
                          <form>
                              <div class="form-group">
                                  <input type="text" class="form-control-input" placeholder="Name" required />
                              </div>
                              <div class="form-group">
                                  <input type="email" class="form-control-input" placeholder="Email" required />
                              </div>
                              <div class="form-group">
                                  <input type="text" class="form-control-input" placeholder="Industry" required />
                              </div>
                              <div class="form-group">
                                  <input type="text" class="form-control-input" placeholder="Message" required />
                              </div>
                              <div class="form-group">
                                  <button type="submit" class="form-control-submit-button">Submit</button>
                              </div>
                          </form>
                      
                      </div> 
                  </div>
              </div> 
          </div> 







          <div class="copyright bg-gray">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 col-md-12 col-sm-12">
                          <ul class="list-unstyled li-space-lg p-small">
                              <li><a href="#">Article Details</a></li>
                              <li><a href="#">Terms & Conditions</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                          </ul>
                      </div> 
                      <div class="col-lg-3 col-md-12 col-sm-12">
                          <p class="p-small statement">Copyright © <a href="#">Alozious & Arian</a></p>
                      </div> 
                      <div class="col-lg-3 col-md-12 col-sm-12">
                          <p class="p-small statement">Distributed by <a href="https://therichpost.com/" target="_blank">Chimptech</a></p>
                      </div> 
                  </div> 
              </div> 
          </div>
      
          <button id="myBtn">
              <img src="assets/images/up-arrow.png" alt="alternative" />
          </button>
      
      </div>
    
);
}
export default App;
