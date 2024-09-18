
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import '../App.css'; // Ensure you import the CSS file

// Register Chart.js components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement
);

// StarRating component for displaying star ratings
const StarRating = ({ rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);
  return (
    <div className="star-rating">
      {stars.map((filled, index) => (
        <span key={index} className={filled ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
};

const Ratings = () => {
  return (
    <div className="testimonials mt-4">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-box">
        <div className="testimonial">
          <p className="customer-name">John Doe</p>
          <StarRating rating={5} />
          <p>
            "My trip to Europe was absolutely incredible, thanks to World Travel agency. The personalized itinerary was perfect, and every detail was taken care of. Highly recommend!"
          </p>
        </div>
        <div className="testimonial">
          <p className="customer-name">Jane Smith</p>
          <StarRating rating={4} />
          <p>
            "I had the best vacation ever with World Travel agency. From the beautiful destinations to the excellent service, everything was top-notch. Will definitely book with them again!"
          </p>
        </div>
        <div className="testimonial">
          <p className="customer-name">Emily Johnson</p>
          <StarRating rating={5} />
          <p>
            "An unforgettable journey through Asia. World Travel agency provided exceptional support and guidance throughout. They truly made our trip memorable!"
          </p>
        </div>
        {/* Additional testimonials */}
        <div className="testimonial">
          <p className="customer-name">Michael Brown</p>
          <StarRating rating={4} />
          <p>
            "Fantastic experience with [Your Company Name]. The arrangements were flawless, and the customer service was outstanding. Highly recommend for anyone looking for a great travel experience!"
          </p>
        </div>
        <div className="testimonial">
          <p className="customer-name">Sophia Lee</p>
          <StarRating rating={5} />
          <p>
            "A truly exceptional travel agency. [Your Company Name] went above and beyond to ensure our trip was perfect. The attention to detail and personal touch were greatly appreciated!"
          </p>
        </div>
        <div className="testimonial">
          <p className="customer-name">David Wilson</p>
          <StarRating rating={3} />
          <p>
            "Overall a good experience, but there were a few hiccups along the way. [Your Company Name] was responsive and addressed our concerns promptly."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ratings;