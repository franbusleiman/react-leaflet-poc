import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomSlider from './CustomSlider';


const CustomMarker = ({ position, popupText, imageUrls }) => {
  const customIcon = divIcon({
    className: 'custom-icon',
    html: `
        <div class="marker">
          <div class="marker-icon">
            <img
              src="${imageUrls[0]}" /
              alt="Custom Marker"
            />
          </div>
          <div class="marker-beak"></div>
        </div>
      `,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
  });

  const sliderSettings = {
    arrows: true,
    dots: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Marker position={position} icon={customIcon}>
      <Popup className="request-popup">

      <CustomSlider imageUrls={imageUrls}/>

      
      </Popup>
    </Marker>
  );
}

export default CustomMarker;