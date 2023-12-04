import { Marker, Popup } from "react-leaflet";
import { LatLngTuple, divIcon } from "leaflet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./CustomSlider";

interface CustomMarkerProps {
  position: LatLngTuple;
  imageUrls: string[];
  popupText?: string;
}

const CustomMarker = ({
  position,
  imageUrls,
  popupText,
}: CustomMarkerProps) => {
  const customIcon = divIcon({
    className: "custom-icon",
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
    //Todo Check Marker interface type for later project updates
    <Marker position={position} icon={customIcon}>
      <Popup className="request-popup" autoPanPadding={[-55, 10]} interactive>
        <CustomSlider imageUrls={imageUrls} />
        <div style={{ width: 500 }}></div>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
