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

            <Link to='/blogs'>
              <FontAwesomeIcon icon={faHome} /> blogs
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <FontAwesomeIcon icon={faInfoCircle} /> about
            </Link>
          </li>
          <li>
              <Link to='/reviews'>
                <FontAwesomeIcon icon={faStar} /> reviews
              </Link>
            </li>
            <li>
          <Link to='/bookings'>
            <FontAwesomeIcon icon={faConciergeBell} /> bookings
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
