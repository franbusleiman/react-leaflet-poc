import { useState } from "react";
import { MapContainer, TileLayer, Polyline, useMapEvents } from "react-leaflet";
import CustomMarker from "./CustomMarker";
import { LatLngTuple } from "leaflet";

//Note for TS and react-scripts Dependencies
// react-scripts@5.0.1 is compatible to typescript@4.5.5 (and not with TS@5.0.0)

const App = () => {
  const position: LatLngTuple = [-31.415634, -64.194254];
  const marker2Position: LatLngTuple = [18.121769, -65.539487];
  const marker3Position: LatLngTuple = [18.164306, -65.408915];
  const marker4Position: LatLngTuple = [18.311427, -65.327476];
  const path: LatLngTuple[] = [
    position,
    marker2Position,
    marker3Position,
    marker3Position,
    marker4Position,
  ];
  const dashArray: string = "2, 10";

  const [Zoom, setZoom] = useState<number>(14);

  //Map event component
  const MapEvents = () => {
    useMapEvents({
      //typecasting in TS
      zoomend(this: L.Map) {
        const zoom = this.getZoom();
        setZoom(zoom);
        console.log("zoom: " + Zoom);
      },
    });

    return false;
  };

  return (
    <MapContainer
      center={position}
      zoom={Zoom}
      style={{ height: "1000px", width: "100%" }}
    >
      <MapEvents />

      <TileLayer
       url= 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}'

       	attribution= '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       	ext= 'png'
      />

      {Zoom > 10 && (
        <>

          <CustomMarker
            position={marker2Position}
            imageUrls={[
              "https://conocedores.com/wp-content/uploads/2019/05/islas-virgenes-britanicas-08052019.jpg",
            ]}
          />
          <CustomMarker
            position={marker3Position}
            imageUrls={[
              "https://images.hola.com/imagenes/viajes/20200323163766/islas-virgenes-britanicas-caribe-secreto/0-801-833/islas-virgenes-t.jpg?tx=w_680",
            ]}
          />
          <CustomMarker
            position={marker4Position}
            imageUrls={[
              "https://traveler.marriott.com/es/wp-content/uploads/sites/2/2022/12/GI-183379491-Couple-Walking-Beach-1920x1080-420x236.jpg",
            ]}
          />
        </>
      )}

      {/* <Polyline positions={path} color="white" dashArray={dashArray}/> */}
    </MapContainer>
  );
};

export default App;
