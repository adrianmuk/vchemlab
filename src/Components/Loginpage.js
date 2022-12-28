import React from 'react';
import '../App.css';
import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseError } from 'firebase/app';

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] =useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const res =await logInWithEmailAndPassword(email, password);
    navigate('Mainmenu')
    if (res.error) setError(res.error);
  };


    return (
      <div>
             <h3 style={{ textAlign: "center", marginTop:"80px" }}>Welcome to V-chemlab</h3>
      
  {/* Login form */}
          <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
          {error ? <div>{error}</div> : null}
              <form onSubmit={handleSubmit}>
           
                <br/>
                <label className='loginlabel'>
                  <span className='loginspan'>Username or Email</span>
                  <input className='logininput'  type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <br/>
                <label className='loginlabel'>
                  <span className='loginspan'>Password</span>
                  <input className='logininput'  type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <br></br>
                  <span style={{color:'blue'}}>Forgot password?</span>
                </label>
                
                {/* <span>Forgot Password?</span> */}
                <button className='loginpbtn' type='submit' value='submit'>Log In</button>
              </form>      
          </div>


        {/* Dont have an account link */}  
          <div style={{textAlign: 'center', fontSize: '13px', marginTop: '10px'}}>
            Don't have an account?,<Link to='/Signuppage'><span style={{color: "blue"}}>Sign up</span></Link>
          </div>
          
        {/* Separator line */}
          <div style={{display: 'flex',justifyContent: 'center'}}>
          <hr style={{width:'300px', position:'absolute', zIndex:'0'}}></hr>
          <span style={{background:'white', position:'relative', top:'3px', zIndex:'1', fontSize:'14px'}}> OR </span>
          </div>


        {/* Login with google button */}
        <br></br>
          <div style={{display: 'flex',justifyContent: 'center'}}>
              <button className='contwithgoogle' type="submit" style={{display: 'flex', justifyContent: 'flex-start'}}>
                <img style={{width:'20px', height:'20px', marginRight:'20px', marginTop:'8px', marginLeft: '10px'}} class="googleicon" src="assets/images/googlesvg.svg" alt="alternative" />
                <span style={{marginTop: '5px'}}>Continue with Google</span>
              </button>
          </div>


        {/* Login with microsoft button*/}
          <div style={{display: 'flex',justifyContent: 'center'}}>
              <button className='contwithgoogle' type="submit" style={{display: 'flex', justifyContent: 'flex-start'}}>
                <img style={{width:'20px', height:'20px', marginRight:'20px', marginTop:'8px', marginLeft: '10px'}} class="googleicon" src="assets/images/microsoftlogo.svg" alt="alternative" />
                <span style={{marginTop: '5px'}}>Continue with Microsoft</span>
              </button>
          </div>
          
      </div>
    );
  }


export default Loginpage ;
