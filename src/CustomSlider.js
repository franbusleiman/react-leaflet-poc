import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CustomSlider = ({imageUrls }) => {

  const sliderSettings = {
    arrows: true,
    dots: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
  
        <Slider {...sliderSettings}>
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Custom Popup Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
  );
}

export default CustomSlider;