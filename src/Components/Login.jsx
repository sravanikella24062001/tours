import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; // Go up one level to find App.css


const Login = () => {
  return (
    <div className="login-background">
      <Container>
        <Row>
          <Col sm={6}>
            <div className="login-heading">
              <h1>
                ,,
                Vacation mode activated, no work emails to be found</h1>
            </div>
          </Col>
          <Col sm={6}>
            <div className='login'>
              <h1 className="h1">Welcome to travels</h1>
              <label>Name</label>
              <input type="text" placeholder='Enter Your name'/>
              <label>Password</label>
              <input type="password" placeholder='Enter Your Password'/>
              <Link to='/forgotpassword'><p className='forgot'>Forgot Password?</p></Link>
              <Link to='/dashboard'><button className="button">Login</button></Link>
              <p className='sign'>New User ?<Link to='/signup'> Signup</Link></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
