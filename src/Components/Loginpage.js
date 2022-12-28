import React from 'react';
import '../App.css';
import {Link, useNavigate} from "react-router-dom";

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
             <h3 style={{ textAlign: "center", marginTop:"80px" }}>Welcome to V-chemlab</h3>
      
  {/* Login form */}
          <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
              <form onSubmit={this.handleSubmit}>
           
                <br/>
                <label className='loginlabel'>
                  <span className='loginspan'>Username or Email</span>
                  <input className='logininput'  type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                </label>
                <br/>
                <label className='loginlabel'>
                  <span className='loginspan'>Password</span>
                  <input className='logininput'  type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                  <br></br>
                  <span style={{color:'blue'}}>Forgot password?</span>
                </label>
                
                {/* <span>Forgot Password?</span> */}
                <button className='loginpbtn'>Log In</button>
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

}


export default Loginpage ;
