import React, { useEffect, useState } from "react";
import Tripcard from "./cards";
import axios from "axios";

const Collage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the places!", error);
      });
  }, []);
  return (
    <div className="div">
      <div className="grid place-items-center">
        <h1 className="font-bold text-7xl italic">Top Destinations</h1>
      </div>
      <div className="overflow-x-auto justify-center">
        <div className="flex justify-between space-x-5">
          {places.map((place) => (
            <Tripcard
              imageSrc={place.image_link}
              address={place.place_name}
              City={place.city}
              time={place.Time}
              rating={place.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collage;
