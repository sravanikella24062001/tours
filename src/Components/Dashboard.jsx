import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Grid } from '@mui/material'; // Ensure you have Material-UI installed
import Sidebar from './Sidebar'; 
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';
import '../App.css';

// Register all necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement, // Required for Line charts
  LineElement,  // Required for Line charts
  ArcElement,   // Required for Pie charts
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
    <Container fluid className="dashboard">
      <Row>
        <Col sm={2} className='sidebar'>
          <Sidebar />
        </Col>
        <Col sm={10} className='dashboard-container'>
          {/* Grid Container for Travel Stats */}
          <Grid container spacing={3} className="grid-container">
            <Grid item xs={12} md={3}>
              <Card className="small-container">Total Bookings <b>1500</b></Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card className="small-container">Top Destinations <b>New York</b></Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card className="small-container">Customer reviews <b>92%</b></Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card className="small-container">Pending Requests <b>45</b></Card>
            </Grid>
          </Grid>

          {/* Explore Destinations and Ratings Components */}
          <ExploreDestinations />
          <Ratings />
        </Col>
      </Row>
    </Container>
  );
};

const ExploreDestinations = () => {
  return (
    <Card className="info-box mt-4">
      <Card.Body>
        <Card.Title>Explore Destinations</Card.Title>
        <Row noGutters>
          <Col md={3} className="adventure-tours-box mt-3">
            <Card.Body>
              <Card.Title>Adventure Tours</Card.Title>
              <ul>
                <li>Mountain Climbing</li>
                <li>Scuba Diving</li>
                <li>Safari</li>
              </ul>
            </Card.Body>
          </Col>
          <Col md={3} className="Cultural-Trips-box mt-3">
            <Card.Body>
              <Card.Title>Cultural Trips</Card.Title>
              <ul>
                <li>Historical Sites</li>
                <li>Museums</li>
                <li>Festivals</li>
              </ul>
            </Card.Body>
          </Col>
          <Col md={3} className="Beach-Vacations-box mt-3">
            <Card.Body>
              <Card.Title>Beach Vacations</Card.Title>
              <ul>
                <li>Tropical Beaches</li>
                <li>Coastal Cities</li>
                <li>Beach Resorts</li>
              </ul>
            </Card.Body>
          </Col>
          <Col md={3} className="City-Tours-box mt-3">
            <Card.Body>
              <Card.Title>City Tours</Card.Title>
              <ul>
                <li>Walking Tours</li>
                <li>City Sightseeing</li>
                <li>Nightlife Exploration</li>
              </ul>
            </Card.Body>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const Ratings = () => {
  const barData = {
    labels: ['Travelers', 'Adventure Seekers', 'Cultural Explorers', 'Relaxation Enthusiasts'],
    datasets: [
      {
        label: 'Ratings',
        data: [85, 70, 90, 65],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Traveler Ratings',
      },
    },
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Visitors',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        tension: 0.1,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Visitor Trends',
      },
    },
  };

  const pieData = {
    labels: ['Adventure', 'Culture', 'Relaxation', 'Exploration'],
    datasets: [
      {
        label: 'Travel Preferences',
        data: [30, 25, 20, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Travel Preferences',
      },
    },
  };

  return (
    <div className="ratings-container">
      <h1>Our Travels</h1>
      <div className="charts-container">
        <div className="chart-box-1">
          <h2>Traveler Ratings</h2>
          <Bar data={barData} options={barOptions} />
        </div>
        <div className="chart-box-2">
          <h2>Travel Preferences</h2>
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div className="chart-box-2">
          <h2>Monthly Visitor Trends</h2>
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
