import React from 'react';
import './Services.css';
import url1 from './resim1.png';
import url2 from './resim2.png';
import url3 from './resim3.png';
import url4 from './resim4.png';
import url5 from './resim5.png';
import url6 from './resim6.png';

const Services = () => {
  const servicesData = [
    { id: 1, title: "Advanced Camera System", description: "Capture every moment in stunning detail with TechTrekX's advanced camera system. Equipped with state-of-the-art lenses and image processing technology, our smartphone delivers crisp, vibrant photos and videos in any lighting condition.", imageUrl: url1 },
    { id: 2, title: "Powerful Performance", description: "Experience seamless multitasking and lightning-fast performance with the TechTrekX. Powered by the latest processor and ample RAM, our smartphone handles even the most demanding tasks with ease, ensuring smooth operation and lag-free gaming.", imageUrl: url2 },
    { id: 3, title: "Immersive Display", description: "Dive into a world of vivid colors and immersive visuals with the TechTrekX's stunning display. Whether you're streaming your favorite content or browsing the web, our smartphone's high-resolution screen delivers an unparalleled viewing experience.", imageUrl: url3 },
    { id: 4, title: "Long-lasting Battery", description: "Stay connected all day long with the TechTrekX's long-lasting battery. Designed to keep up with your busy lifestyle, our smartphone offers extended usage time on a single charge, so you can go further without interruption.", imageUrl: url4 },
    { id: 5, title: "Enhanced Security Features", description: "Protect your personal information and data with TechTrekX's enhanced security features. From facial recognition to fingerprint sensors, our smartphone offers multiple layers of security to keep your device and information safe from unauthorized access.", imageUrl: url5 },
    { id: 6, title: "Sleek Design", description: "Make a statement with the TechTrekX's sleek and stylish design. Crafted with premium materials and attention to detail, our smartphone not only looks great but feels great in your hand, combining form and function seamlessly.", imageUrl: url6 }
  ];

  return (
    <div className="services-container">
      {servicesData.map(service => (
        <div key={service.id} className="service-card">
          <div className="service-image">
            <img src={service.imageUrl} alt={service.title} />
          </div>
          <div className="service-info">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default Services;
