import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Sidebar from './Sidebar'; // Ensure this path is correct
import '../App.css'; // Import your CSS file for custom styles

// Import images
import flight1 from '../Images/flight1.jpg';
import flight2 from '../Images/flight2.jpg';
import flight3 from '../Images/flight3.jpg';

// FlightBookingForm component
const FlightBookingForm = ({ title }) => {
  const [flightType, setFlightType] = useState('One Way');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travellers, setTravellers] = useState(1);
  const [classType, setClassType] = useState('Economy');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      flightType,
      from,
      to,
      departureDate,
      returnDate,
      travellers,
      classType,
    });
  };

  return (
    <div className="flight-booking-form">
      <h2>{title}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFlightType">
          <Form.Label>Flight Type</Form.Label>
          <Form.Control
            as="select"
            value={flightType}
            onChange={(e) => setFlightType(e.target.value)}
          >
            <option>One Way</option>
            <option>Round Trip</option>
            <option>Multi-City</option>
          </Form.Control>
        </Form.Group>
        <div className="form-row">
          <Form.Group controlId="formFrom">
            <Form.Label>From</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter departure city"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formTo">
            <Form.Label>To</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter destination city"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="form-row">
          <Form.Group controlId="formDepartureDate">
            <Form.Label>Departure Date</Form.Label>
            <Form.Control
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </Form.Group>
          {flightType === 'Round Trip' && (
            <Form.Group controlId="formReturnDate">
              <Form.Label>Return Date</Form.Label>
              <Form.Control
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </Form.Group>
          )}
        </div>
        <Form.Group controlId="formTravellers">
          <Form.Label>Travellers</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={travellers}
            onChange={(e) => setTravellers(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formClass">
          <Form.Label>Class</Form.Label>
          <Form.Control
            as="select"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
          >
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Search Flights
        </Button>
      </Form>
    </div>
  );
};

// Services component
const Services = () => {
  return (
    <Container fluid className="services">
      <Row noGutters>
        <Col md={3} className="sidebar">
          <Sidebar /> {/* Include the Sidebar component */}
        </Col>
        <Col md={9} className="main-content">
          <FlightBookingForm title="Book Flight Tickets" />

          {/* Our Services Section with images */}
          <Card className="info-box mt-4">
            <Card.Body>
              <Card.Title>Our Flight Services</Card.Title>
              <Row noGutters>
                <Col md={4} className="service-box mt-3">
                  <Card.Body>
                    <img src={flight1} alt="Quick Booking" className="service-image" />
                    <Card.Title>Quick Booking</Card.Title>
                    <p>Book your flights in just a few clicks!</p>
                  </Card.Body>
                </Col>
                <Col md={4} className="service-box mt-3">
                  <Card.Body>
                    <img src={flight2} alt="Best Prices" className="service-image" />
                    <Card.Title>Best Prices</Card.Title>
                    <p>Find the best flight deals available.</p>
                  </Card.Body>
                </Col>
                <Col md={4} className="service-box mt-3">
                  <Card.Body>
                    <img src={flight3} alt="24/7 Support" className="service-image" />
                    <Card.Title>24/7 Support</Card.Title>
                    <p>We're here to help you anytime.</p>
                  </Card.Body>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
