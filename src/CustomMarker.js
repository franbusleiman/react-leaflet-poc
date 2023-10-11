import React from 'react';
import { Marker , Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';

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
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    });
  
    return (
      <Marker position={position} icon={customIcon}>
        <Popup className='request-popup' >
        <img src={imageUrl} alt="Custom Popup Image" />
        </Popup>
      </Marker>
    );
  };

export default CustomMarker;