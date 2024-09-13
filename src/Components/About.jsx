import React from 'react';
import '../App.css'; 
import eiffel from '../Images/eiffel.jpg'; 
import wonders from '../Images/wonders.jpg';
import react4 from '../Images/react4.jpg'; 
import react5 from '../Images/react5.jpg'; 
import react6 from '../Images/react6.jpg'; 
import react7 from '../Images/react7.jpg';

const About = () => {
  return (
    <div className="about-container row mb-4">
      <div className="col-md-6 mb-4">
        <div className="about-content">
          <h1>About Our World Tour Organization</h1>
          <p>
            Welcome to World Travel agency, your gateway to exploring the world’s most breathtaking destinations. As a premier world tour organization, we specialize in creating immersive travel experiences that cater to your every need. From iconic landmarks and cultural adventures to serene getaways and thrilling expeditions, our expert team is dedicated to crafting personalized itineraries that exceed your expectations.
          </p>
          <p>
            At WTS, we believe that travel is more than just a journey—it's a chance to create lifelong memories. Our passionate travel consultants are committed to providing exceptional service, ensuring every detail of your trip is thoughtfully planned and executed. Whether you’re dreaming of a relaxing beach holiday, a cultural city tour, or an adventurous trek, we have the expertise and resources to make your travel dreams a reality.
          </p>
          <p>
            Join us and embark on a remarkable journey around the globe. Discover new cultures, savor exotic cuisines, and witness the wonders of the world with the assurance of personalized service and unparalleled expertise. Let us turn your travel aspirations into unforgettable experiences.
          </p>
        </div>
      </div>
      
      <div className="col-md-6 mb-4 image-gallery">
        <img src={eiffel} className="img-fluid" alt="Eiffel Tower" />
        <img src={react4} className="img-fluid" alt="Image 1" />
        <img src={react5} className="img-fluid" alt=" Image 2" />
        <img src={react6} className="img-fluid" alt=" Image 3" />
        <img src={react7} className="img-fluid" alt=" Image 4" />
        <img src={wonders} className="img-fluid" alt="Wonders of the World" />
      </div>
    </div>
  );
};

export default About;
