import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.css'; // Adjust path as necessary

const Contact = () => {
  return (
    <div className="contact-box">
      <div className="contact-follow">
        <h1>Apply Now</h1>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            required
            aria-label="Name"
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="your-email@example.com"
            required
            aria-label="Email Address"
          />
          <label htmlFor="destination">Destination:</label>
          <input
            id="destination"
            type="text"
            placeholder="Destination"
            required
            aria-label="Destination"
          />
          <button className="btn-submit" type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-follow">
        <h1>Contact Us</h1>
        <div className="social-media-links">
          <a href="#" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
