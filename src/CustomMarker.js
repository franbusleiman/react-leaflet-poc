import React, {useState, useRef, useEffect} from 'react';
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


  return (
    <Marker position={position} icon={customIcon}>
      <Popup  className="request-popup" interactive>
          <CustomSlider imageUrls={imageUrls} />
          <div style={{width:500}}></div>
        </Popup>
      
    </Marker>
  );
}

export default CustomMarker;