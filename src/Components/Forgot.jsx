import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; // Go up one level to find App.css

const Forgot = () => {
  return (
    <Row className="justify-content-center">
      <Col sm={6}>
        <div className='forgot-password'>
          <h1 className="pass">Forgot Your Password?</h1>
          <p className="info">Enter your email address and we'll send you a link to reset your password.</p>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Send Reset Link
            </Button>
          </Form>
          <p className='login-link mt-3'>
            Remember your password? <Link to='/login'>Go back to login</Link>
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Forgot;
