import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from './Sidebar';
import '../App.css'; 

// Replace these with your actual image paths
import beach from '../Images/beach.jpg';
import mountains from '../Images/mountains.jpg';
import cityscape from '../Images/cityscape.jpg';
import adventure from '../Images/adventure.jpg';
import cultural from '../Images/cultural.jpg';
import nature from '../Images/nature.jpg';
import historic from '../Images/historic.jpg';
import deserts from '../Images/deserts.jpg';
import landmarks from '../Images/landmarks.jpg';

const Home = () => {
  return (
    <div className="home">
      <Sidebar /> {/* Include the Sidebar */}
      <div className="content"></div>
      {/* Header/Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Travel the World</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Destinations
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">New York</a></li>
                <li><a className="dropdown-item" href="#">Los Angeles</a></li>
                <li><a className="dropdown-item" href="#">Paris</a></li>
                <li><a className="dropdown-item" href="#">London</a></li>
                <li><a className="dropdown-item" href="#">Tokyo</a></li>
                <li><a className="dropdown-item" href="#">Sydney</a></li>
                <li><a className="dropdown-item" href="#">Rome</a></li>
                <li><a className="dropdown-item" href="#">Dubai</a></li>
                <li><a className="dropdown-item" href="#">Hong Kong</a></li>
                <li><a className="dropdown-item" href="#">Istanbul</a></li>
                <li><a className="dropdown-item" href="#">Barcelona</a></li>
                <li><a className="dropdown-item" href="#">Moscow</a></li>
                <li><a className="dropdown-item" href="#">Singapore</a></li>
                <li><a className="dropdown-item" href="#">Bangkok</a></li>
                <li><a className="dropdown-item" href="#">Amsterdam</a></li>
                <li><a className="dropdown-item" href="#">Vienna</a></li>
                <li><a className="dropdown-item" href="#">Lisbon</a></li>
                <li><a className="dropdown-item" href="#">Buenos Aires</a></li>
                <li><a className="dropdown-item" href="#">Cape Town</a></li>
                <li><a className="dropdown-item" href="#">Seoul</a></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex ms-auto">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {/* Content Section */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={beach} className="card-img-top" alt="Beach Vacation" />
              <div className="card-body">
                <h5 className="card-title">Beach Vacation</h5>
                <p className="card-text">
                  Enjoy the sun, sand, and sea on a relaxing beach vacation. Perfect for unwinding and rejuvenating.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={mountains} className="card-img-top" alt="Mountain Adventure" />
              <div className="card-body">
                <h5 className="card-title">Mountain Adventure</h5>
                <p className="card-text">
                  Experience the thrill of the mountains with activities like hiking, climbing, and breathtaking views.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={cityscape} className="card-img-top" alt="Cityscape" />
              <div className="card-body">
                <h5 className="card-title">Cityscape</h5>
                <p className="card-text">
                  Explore bustling cityscapes, from towering skyscrapers to vibrant street life and culture.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={adventure} className="card-img-top" alt="Adventure Travel" />
              <div className="card-body">
                <h5 className="card-title">Adventure Travel</h5>
                <p className="card-text">
                  Engage in thrilling adventures like zip-lining, white-water rafting, and more for an adrenaline rush.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={cultural} className="card-img-top" alt="Cultural Experiences" />
              <div className="card-body">
                <h5 className="card-title">Cultural Experiences</h5>
                <p className="card-text">
                  Dive into local traditions, festivals, and historical sites to gain a deeper cultural understanding.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={nature} className="card-img-top" alt="Nature Escapes" />
              <div className="card-body">
                <h5 className="card-title">Nature Escapes</h5>
                <p className="card-text">
                  Escape to serene natural environments, whether it's a forest, lake, or mountain retreat.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={historic} className="card-img-top" alt="Historic Landmarks" />
              <div className="card-body">
                <h5 className="card-title">Historic Landmarks</h5>
                <p className="card-text">
                  Visit landmarks that tell the story of our past, from ancient ruins to iconic monuments.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={landmarks} className="card-img-top" alt="Famous Landmarks" />
              <div className="card-body">
                <h5 className="card-title">Famous Landmarks</h5>
                <p className="card-text">
                  Discover famous landmarks that are renowned for their architectural beauty and historical significance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={deserts} className="card-img-top" alt="deserts" />
              <div className="card-body">
                <h5 className="card-title">famous deserts</h5>
                <p className="card-text">
                 The world's most iconic deserts, celebrated for their breathtaking beauty and sandy expanses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Home;
