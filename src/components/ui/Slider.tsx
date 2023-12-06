// Slider.js

import React, { useState, useEffect } from 'react';

const Slider = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="slider">
      <img
        src={images[currentImageIndex]}
        alt={`Slider Image ${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default Slider;