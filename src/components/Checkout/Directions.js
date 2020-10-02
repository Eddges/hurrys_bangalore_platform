import React, { useState, useEffect } from "react";
import { LoadScript } from "@react-google-maps/api";

export default function Directions() {
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (distance && duration) {
      console.log("Distance & Duration have updated", distance, duration);
    }
  }, [distance, duration]);

  const onLoad = React.useCallback(function callback(map) {
    // Get directions
    const google = window.google;
    const directionsService = new google.maps.DirectionsService();
console.log('IN DIRECTIONS')
    directionsService.route(
      {
        origin: "Liverpool, UK",
        destination: "Oxford, UK",
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDistance(result.routes[0].legs[0].distance.value);
          setDuration(result.routes[0].legs[0].duration.value);
        } else {
          console.error("error fetching directions", result, status);
        }
      }
    );
  }, []);

  return (
    <>
      <LoadScript
        googleMapsApiKey={"AIzaSyBhYZ7B9Qf6DWiixOxZf2GYciJIrmbQHoA"}
        loadingElement={<div />}
        containerElement={<div />}
        mapElement={<div />}
        onLoad={onLoad}
      >
        <div>Distance: {distance}</div>
        <div>Duration: {duration}</div>
      </LoadScript>
    </>
  );
}