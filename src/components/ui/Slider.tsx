// Slider.js

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Slider = () => {
  const images = [
'/katsu.png','/onigiri.png','/yakitori.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) =>
  //       (prevIndex + 1) % images.length
  //     );
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [images.length]);

  return (
    <div className="relative flex-1 w-full h-1/2">
      <Image
        src={images[currentImageIndex]}
        alt={`Slider Image ${currentImageIndex + 1}`}
        // className='object-fill'
        // style={{objectFit: "contain"}}
        // fill={true}
        width={750}
        height={500}
      />
    </div>
  );
};

export default Slider;