import React, { useState } from "react";
import '../App.css';
import {Link, useNavigate} from "react-router-dom";
import {registerWithEmailAndPassword} from "../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Signuppage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const res =await registerWithEmailAndPassword(email, password);
    
    if (res.error) setError(res.error);
  };

  

    return (
      <div>
             <h3 style={{ textAlign: "center", marginTop:"80px" }}>Create your account</h3>
      <br></br>
          {/* Signup page */}
          <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
          
          {/* Signup form */}
          <form onSubmit={handleSubmit}>
            {/* <table>
          ...............Names
            <tr>
              <td>
                <label className='Signuplabel'>
                    <span className='Signupspan'>First Name</span>
                    <input className='Signupinput'  type="text" name="fname" value={this.state.username} onChange={this.handleChange} />
                </label>
              </td>
              <td>
              <label className='Signuplabel'>
                    <span className='Signupspan'>Second Name</span>
                    <input className='Signupinput'  type="text" name="Sname" value={this.state.username} onChange={this.handleChange} />
              </label>
              </td>
            </tr>
            <br></br>

          ................Date and class
            <tr>
              <td>
                <label className='Signuplabel'>
                    <span className='Signupspan' style={{positoion:'absolute', zIndex:'1', top:'2', left:'0', backgroundColor:'white'}}>Date of birth</span>
                </label>
                <DatePicker className='Signupinput' selected={ this.state.startDate } onChange={ this.handleChange } name="startDate" dateFormat="MM/dd/yyyy"/>
              </td>
              <td>
              <label className='Signuplabel'>
                    <span className='Signupspan'>Class</span>
                    <input className='Signupinput'  type="text" name="Sname" value={this.state.username} onChange={this.handleChange} />
              </label>
              </td>
            </tr>
            <br></br>
          ....................School Details
            <tr>
              <td>
                <label className='Signuplabel'>
                    <span className='Signupspan'>School Name</span>
                    <input className='Signupinput'  type="text" name="fname" value={this.state.username} onChange={this.handleChange} />
                </label>
              </td>
              <td>
              <label className='Signuplabel'>
                    <span className='Signupspan'>School ID</span>
                    <input className='Signupinput'  type="text" name="Sname" value={this.state.username} onChange={this.handleChange} />
              </label>
              </td>
            </tr>
           </table> */}
                <br/>


            {/* Email */}
                <label className='loginlabel'>
                  <span className='loginspan'>Student Email</span>
                  <input className='logininput'  type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <br/>
            {/* ...............Passwords
            <table>
              <tr>
                <td> */}
                <label className='Signuplabel'>
                  <span className='Signupspan'>Password</span>
                  <input className='Signupinput'  type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                {/* </td>
                <td>
                <label className='Signuplabel'>
                  <span className='Signupspan'>Confirm Password</span>
                  <input className='Signupinput'  type="password" name="Confirm_password" value={this.state.Confirm_password} onChange={this.handleChange} />
                </label>
                </td>
              </tr>
            </table> */}

                <br/>

                <button className='loginpbtn' type="submit">Log In</button>
              </form>      
          </div>


        {/* Dont have an account link */}  
          <div style={{textAlign: 'center', fontSize: '13px', marginTop: '10px'}}>
            Have an account already?,<Link to="/Loginpage"><span style={{color: "blue"}}>Log in</span></Link>
          </div>
                   
      </div>
    );
  }




export default Signuppage ;
