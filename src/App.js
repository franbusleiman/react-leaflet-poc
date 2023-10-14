import React from 'react';
import { MapContainer, TileLayer, Polyline} from 'react-leaflet';
import CustomMarker from './CustomMarker'; 

const App = () => {
  const position = [18.230315, -65.636255  ]
  const marker2Position = [18.121769, -65.539487]; 
  const marker3Position = [18.164306, -65.408915]; 
  const marker4Position = [18.311427, -65.327476]; 
  const path = [position, marker2Position, marker3Position, marker3Position,  marker4Position];
  const dashArray = '2, 10'

        
  return(
    <MapContainer center={position} zoom={13}  style={{height: '1000px', width: '100%' }}>
    <TileLayer
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      attribution='<a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />

  <CustomMarker position={position}  popupText="This is a custom marker popup" imageUrls={["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/0c/24/53/img-20161227-152629-largejpg.jpg?w=700&h=500&s=1", 
  "https://conocedores.com/wp-content/uploads/2019/05/islas-virgenes-britanicas-08052019.jpg"]}/>


  <CustomMarker position={marker2Position}  imageUrls={["https://conocedores.com/wp-content/uploads/2019/05/islas-virgenes-britanicas-08052019.jpg"]}/>

  <CustomMarker position={marker3Position}   imageUrls={["https://images.hola.com/imagenes/viajes/20200323163766/islas-virgenes-britanicas-caribe-secreto/0-801-833/islas-virgenes-t.jpg?tx=w_680"]} />


<CustomMarker position={marker4Position}   imageUrls={["https://traveler.marriott.com/es/wp-content/uploads/sites/2/2022/12/GI-183379491-Couple-Walking-Beach-1920x1080-420x236.jpg"]}/>



  {/* <Polyline positions={path} color="white" dashArray={dashArray}/> */}

    </MapContainer>
  );
}

export default App;
