import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomSlider = ({ imageUrls }) => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={false}
      showStatus={false}
      showThumbs={false}
      interval={3000}
    >
      {imageUrls.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt={`Custom Popup Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomSlider;