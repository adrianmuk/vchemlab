import { lightBlue } from '@mui/material/colors';
import React from 'react';
import '../App.css';

class Loginpage extends React.Component{


  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // add code here to log in the user using the provided username and password
  }

  render() {
    return (
      <div>
             <h3 style={{ textAlign: "center", marginTop:"100px" }}>Welcome to V-chemlab</h3>
      
  
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <form onSubmit={this.handleSubmit}>
                <br/>
                <br/>
                <br/>
                <label className='loginlabel'>
                  <span className='loginspan'>Username or Email</span>
                  <input className='logininput'  type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                </label>
                <br/>
                <label className='loginlabel'>
                  <span className='loginspan'>Password</span>
                  <input className='logininput'  type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </label>

                <button className='loginpbtn' type="submit">Log In</button>
              </form>
              
        
          </div>
          Don't have an account?,<span style={{color: "blue"}}>Sign up</span>
          



          
      </div>
    );
  }

}


 export default Loginpage ;
