import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Services from './Components/Services';
import Forgot from './Components/Forgot';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import About from './Components/About';
import Ratings from './Components/Ratings';
import Contact from './Components/Contact';
import Sidebar from './Components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const location = useLocation();
  const showSidebar = ['/dashboard', '/blogs', '/about', '/reviews', '/contact','/bookings'].includes(location.pathname);

  return (
    <div className="app-container">
      {showSidebar && <Sidebar />}
      <div className={`content ${showSidebar ? 'with-sidebar' : ''}`}>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/signup" element={<Signup />} />

          {/* Main Application Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Ratings />} />
          <Route path="/bookings" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
      
        </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
