import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; // Go up one level to find App.css


const Signup = () => {
  return (
    <Container>
      <div className='signup'>
        <h1 className='head'>New Account</h1>
        <input type='text' placeholder='Enter Your Username'/>
        <input type='email' placeholder='Enter Your Email'/>
        <input type="password" placeholder='Enter Your Password'/>
        <input type="password" placeholder='Confirm Your Password'/>
        <Link to='/login'><button className="in">Sign In</button></Link>
      </div>
    </Container>
  );
}

export default Signup;
