import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Sidebar from './Sidebar'; // Ensure this path is correct

// Import images from the correct directory
import landscape from '../Images/landscape.jpg'; 
import THAILAND from '../Images/THAILAND.jpg'; 
import react2 from '../Images/react2.jpg'; 

const Dashboard = () => {
  return (
    <Container fluid className="dashboard">
      <Row>
        <Col sm={2} className='sidebar'>
          <Sidebar /> {/* Include the Sidebar component */}
        </Col>
        <Col sm={10} className='carousel-container'>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={react2} // Use imported variable
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Enjoy the Trip</h3>
                <p>Skipping ahead to the part of my life where I travel the world.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={THAILAND}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Enjoy the Trip</h3>
                <p>Until you step into the unknown, you don’t know what you’re made of.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={landscape} // Correctly use imported variable
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Here We Are</h3>
                <p>Don’t spend your money on things. Spend it on experiences!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
