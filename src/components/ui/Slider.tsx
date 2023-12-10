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
    <div className=" relative flex justify-center w-full border-red-500 max-w-[1400px] h-[900px]  m-auto py-16 px-4 group">
      <Image
        src={images[currentImageIndex]}
        alt={`Slider Image ${currentImageIndex + 1}`}
        className='w-full h-full rounded-2xl'
        // style={{objectFit: "contain"}}S
        // fill={true}
        //  objectFit='cover'
        // layout='fill'
         width={1400}
         height={780}
      />
    </div>
  );
};

export default Slider;