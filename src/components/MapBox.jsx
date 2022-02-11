import React, { useState } from 'react';
import ReactMapGL from "react-map-gl";

const MapBox = () => {
    const [viewport, setViewport] = useState({
      width: 1100,
      height: 500,
      latitude: 13.893276,
      longitude: 108.97234,
      zoom: 8,
    });
    return (
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken="pk.eyJ1IjoidGFpY2FuIiwiYSI6ImNremY5bTVmYTBvZWcydnBjemg4djlwMHoifQ.1BDfJZRaX_cUdXKW3Po-gw"
      />
    );
  };

export default MapBox;
