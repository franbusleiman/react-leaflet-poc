import React from 'react';
import { Marker , Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { Image } from 'react'
const CustomMarker = ({ position, popupText, imageUrl }) => {
    const customIcon = divIcon({
      className: 'custom-icon',
      html: `
        <div class="marker">
          <div class="marker-icon">
            <img
              src="${imageUrl}" /
              alt="Custom Marker"
            />
          </div>
          <div class="marker-beak"></div>
        </div>
      `,
      iconSize: [30, 40],
      iconAnchor: [15, 40],
    });
  
    return (
      <Marker position={position} icon={customIcon}>
        <Popup>{popupText}</Popup>
      </Marker>
    );
  };

export default CustomMarker;