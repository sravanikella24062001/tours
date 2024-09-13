import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faCog, faSignOutAlt,faStar,faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Ensure this path is correct

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Travels</h1>
      <nav>
        <ul>
          <li>
          <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faCog} /> Dashboard
          </Link>
           </li>

            <Link to='/home'>
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </Link>
          </li>
          <li>
              <Link to='/Ratings'>
                <FontAwesomeIcon icon={faStar} /> Ratings
              </Link>
            </li>
            <li>
          <Link to='/services'>
            <FontAwesomeIcon icon={faConciergeBell} /> Services
          </Link>
        </li>
          <li>
            <Link to='/contact'>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Link>
          </li>
          
          <li>
            <Link to='/'>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
