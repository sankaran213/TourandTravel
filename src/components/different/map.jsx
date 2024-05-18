import React from "react";
import pool from "../../../server/database";
const currentDate = new Date();
const dayOfWeek = currentDate.getDay();

// Convert day number to day name
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = days[dayOfWeek];
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(userCoords, handleGeoError);
}

function userCoords(position) {
  const userLatitude = position.coords.latitude;
  const userLongitude = position.coords.longitude;
  const att = [userLatitude, userLongitude, today];
  pool.query(
    `INSERT INTO locations (Latitude, Longitude, RegistrationDateTime) VALUES (?, ?, ?)`,
    att
  );
}

const Maps = () => {
  return (
    <div>
      <h1>Your Location coords.</h1>
    </div>
  );
};

export default Maps;
