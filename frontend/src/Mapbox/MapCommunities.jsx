
import { useState, memo, useMemo, useEffect, useRef, useCallback } from "react";
import Map, {
  GeolocateControl,
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  
  Source,
  Layer
} from "react-map-gl";

import Geocoder from "./Geocoder";
import Icon from './icon.svg'
import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import {useControl} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import * as parkDate from "./data.json";


function CommunityMap({showDataList = true,style, width = '70vw', height='60vh'}) {
  const [popupInfo, setPopupInfo] = useState(null);

  const [viewPort, setViewPort] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    
    zoom:10
  });
  


  if (!viewPort) return null;

  return (
    <div className="relative">
     
      <Map
        mapboxAccessToken='pk.eyJ1Ijoia2F1c2hhbi01NDA5IiwiYSI6ImNsamxsbnN6cTBwY2kzZnNkbGl4MzN3d28ifQ.Z5eT8YhsfauPp6lGLbYT8w'
        initialViewState={viewPort}
        onViewportChange={(viewPort) => {
          setViewPort(viewPort);
          
        }}
        style={{
          width: width,
          height: height,
        }}
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
      >
        
        <Geocoder/>        

        <GeolocateControl position="top-right" />
        <FullscreenControl position="top-right" />
        <NavigationControl position="top-right" />
        <ScaleControl />
        
      
        {parkDate.features.map((park, index) => (
            <Marker className="cursor-pointer"
              key={park.properties.PARK_ID}
              longitude={park.geometry.coordinates[0]}
              latitude={park.geometry.coordinates[1]}
              onClick={(e) => {
                
                e.originalEvent.stopPropagation();
                setPopupInfo(park);
              }}
            >
                <button
              className="marker-btn"
              
            >
              <img src={Icon} alt="Skate Park Icon" />
            </button>
            </Marker>
        ))}
        {popupInfo && (
          <Popup 
            longitude={popupInfo.geometry.coordinates[0]}
            latitude={popupInfo.geometry.coordinates[1]}
            anchor="right"
            onClose={() => setPopupInfo(null)}
          >
            <div className="text-lg">
              <h2>{popupInfo.properties.NAME}</h2>
              <p>{popupInfo.properties.DESCRIPTIO}</p>
            </div>
          </Popup>

        )}
      </Map>

    </div>
  );
}

export default CommunityMap;


