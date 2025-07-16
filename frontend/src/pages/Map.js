import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Header from "../components/Header";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 32.8812,
  lng: -117.2344,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // must be valid key
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <main>
      <Header></Header>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    /></main>
    
  );
}

export default Map;
