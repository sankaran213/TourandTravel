import React, { useState } from "react";

// Sample data for hotels, places, activities
const hotelsData = [
  {
    name: "The Oberoi Grand Kolkata",
    pricePerDay: 11210,
    stars: 5,
    rating: 4.4,
  },
  { name: "ITC Royal Bengal", pricePerDay: 8100, stars: 5, rating: 4.8 },
  {
    name: "Novotel Kolkata - Hotel & Residences",
    pricePerDay: 5151,
    stars: 5,
    rating: 4.7,
  },
  {
    name: "The Westin Kolkata Rajarhat",
    pricePerDay: 7547,
    stars: 5,
    rating: 4.5,
  },
  { name: "Hotel Casa Fortuna", pricePerDay: 3790, stars: 4, rating: 4.1 },
  {
    name: "Fairfield by Marriott Kolkata",
    pricePerDay: 5040,
    stars: 4,
    rating: 4.3,
  },
  {
    name: "Holiday Inn Express Kolkata Airport",
    pricePerDay: 5600,
    stars: 4,
    rating: 4.4,
  },
  {
    name: "Kenilworth Hotel, Kolkata",
    pricePerDay: 7400,
    stars: 4,
    rating: 4.4,
  },
  {
    name: "Lemon Tree Premier, Kolkata",
    pricePerDay: 8500,
    stars: 3,
    rating: 4.3,
  },
  { name: "ibis Kolkata Rajarhat", pricePerDay: 2900, stars: 3, rating: 4.5 },
  { name: "Barsana Boutique Hotel", pricePerDay: 3968, stars: 3, rating: 4.3 },
  { name: "The Lindsay", pricePerDay: 3223, stars: 3, rating: 4 },
  { name: "Park Palace Hotel", pricePerDay: 1659, stars: 2, rating: 3.6 },
  {
    name: "Hotel Golden Palace (a Unit Of Ksh Projects Pvt Ltd)",
    pricePerDay: 2979,
    stars: 2,
    rating: 4.3,
  },
  {
    name: "OYO 24671 Hotel Park Inn",
    pricePerDay: 1188,
    stars: 2,
    rating: 3.5,
  },
  { name: "Hotel Emirates", pricePerDay: 2471, stars: 2, rating: 4 },
  { name: "Continental Guest House", pricePerDay: 687, stars: 1, rating: 2.9 },
  { name: "Hotel Presidency Inn", pricePerDay: 1907, stars: 1, rating: 3.8 },
  {
    name: "Hotel The Stay Shivalik Inn Private Limited",
    pricePerDay: 971,
    stars: 1,
    rating: 3.9,
  },
  { name: "Ashreen Guest House", pricePerDay: 1424, stars: 1, rating: 3.9 },
];

const placesByCategory = {
  "Holy Places": [
    { name: "St. Paul Cathedral", cost: 30 },
    { name: "Iskcon", cost: 0 },
    { name: "Dakshinashwar Temple", cost: 0 },
    { name: "Princep Ghat", cost: 0 },
    { name: "Kalighat", cost: 0 },
  ],
  Malls: [
    { name: "Quest Mall", cost: 0 },
    { name: "Central Mall", cost: 0 },
    { name: "Axis Mall", cost: 0 },
    { name: "Downtown Mall", cost: 0 },
    { name: "South City Mall", cost: 0 },
    { name: "Acropolis Mall", cost: 0 },
    { name: "City Center 1", cost: 0 },
    { name: "City Center 2", cost: 0 },
    { name: "Lake Mall", cost: 0 },
  ],
  Museums: [
    { name: "Indian Museum", cost: 50 },
    { name: "Wax Museum", cost: 250 },
    { name: "Aircraft Museum", cost: 30 },
    { name: "Birla Planetarium", cost: 100 },
    { name: "National Library Museum", cost: 0 },
    { name: "Science City", cost: 120 },
    { name: "Victoria Memorial", cost: 50 },
  ],
  "Local Markets": [
    { name: "Bada Bazar", cost: 0 },
    { name: "Esplanade", cost: 0 },
    { name: "Gariahat Market", cost: 0 },
    { name: "Sealdah", cost: 0 },
    { name: "Park Street", cost: 0 },
  ],
  "Parks and Other Attractions": [
    { name: "Alipore Zoo", cost: 0 },
    { name: "Howrah Bridge", cost: 0 },
    { name: "Mother House", cost: 0 },
    { name: "Eden Garden", cost: 0 },
    { name: "Eco Park", cost: 30 },
    { name: "Nicco Park", cost: 500 },
  ],
};

const activitiesData = [
  { name: "Hiking", price: 20 },
  { name: "Sightseeing Tour", price: 50 },
  { name: "Boat Ride", price: 30 },
  { name: "Cultural Show", price: 40 },
  { name: "Theme Park Admission", price: 60 },
  // Add more activities
];

const Algo = () => {
  // State variables
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [transportMode, setTransportMode] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [modeOfTravel, setModeOfTravel] = useState("");
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [shortestPath, setShortestPath] = useState("");

  // Function to calculate fare based on transport mode
  const calculateTransportFare = () => {
    let fare = 0;
    if (transportMode === "aeroplane") {
      fare = 200; // Sample fare for aeroplane
    } else if (transportMode === "bus") {
      fare = 50; // Sample fare for bus
    } else if (transportMode === "train") {
      fare = 100; // Sample fare for train
    }
    return fare * numberOfPeople;
  };

  // Function to calculate total travel cost within the city
  const calculateTravelCost = () => {
    let travelCost = 0;
    if (modeOfTravel === "car") {
      travelCost = 50; // Sample travel cost for car
    } else if (modeOfTravel === "toto") {
      travelCost = 20; // Sample travel cost for toto
    } else if (modeOfTravel === "self") {
      travelCost = 0; // No travel cost if self-managed
    }
    return travelCost;
  };

  // Function to calculate total cost of selected places
  const calculatePlacesCost = () => {
    return selectedPlaces.reduce(
      (total, place) => total + (place.cost || 0),
      0
    );
  };

  // Function to calculate total cost of selected activities
  const calculateActivitiesCost = () => {
    return selectedActivities.reduce(
      (total, activity) => total + activity.price,
      0
    );
  };

  // Function to calculate total cost
  const calculateTotalCost = () => {
    const transportFare = calculateTransportFare();
    const hotelCost = selectedHotel
      ? selectedHotel.pricePerDay * numberOfDays
      : 0;
    const travelCost = calculateTravelCost();
    const placesCost = calculatePlacesCost();
    const activitiesCost = calculateActivitiesCost();
    const total =
      transportFare + hotelCost + travelCost + placesCost + activitiesCost;
    setTotalCost(total);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTotalCost();
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Travel Planner</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-semibold">From:</label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold">To:</label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg p-2"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-semibold">Number of People:</label>
              <input
                type="number"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold">Adults:</label>
              <input
                type="number"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold">Children:</label>
              <input
                type="number"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg p-2"
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold">Mode of Transport:</label>
            <select
              value={transportMode}
              onChange={(e) => setTransportMode(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg p-2"
              required
            >
              <option value="">Select Mode</option>
              <option value="aeroplane">Aeroplane</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold">Select Hotel:</label>
            <select
              value={selectedHotel ? selectedHotel.name : ""}
              onChange={(e) =>
                setSelectedHotel(
                  hotelsData.find((hotel) => hotel.name === e.target.value)
                )
              }
              className="w-full bg-gray-700 text-white rounded-lg p-2"
              required
            >
              <option value="">Select Hotel</option>
              {hotelsData.map((hotel) => (
                <option key={hotel.name} value={hotel.name}>
                  {hotel.name} - ₹{hotel.pricePerDay}/day - {hotel.stars} stars
                  - {hotel.rating} rating
                </option>
              ))}
            </select>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-semibold">Number of Days:</label>
              <input
                type="number"
                value={numberOfDays}
                onChange={(e) => setNumberOfDays(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold">Mode of Travel:</label>
              <select
                value={modeOfTravel}
                onChange={(e) => setModeOfTravel(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg p-2"
                required
              >
                <option value="">Select Mode</option>
                <option value="car">Car</option>
                <option value="toto">Toto</option>
                <option value="self">Self</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block font-semibold">
              Select Places to Visit:
            </label>
            <div className="space-y-2">
              {Object.entries(placesByCategory).map(([category, places]) => (
                <div key={category}>
                  <label className="block font-semibold">{category}</label>
                  <div className="space-y-1">
                    {places.map((place) => (
                      <label
                        key={place.name}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          value={place.name}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedPlaces([...selectedPlaces, place]);
                            } else {
                              setSelectedPlaces(
                                selectedPlaces.filter(
                                  (p) => p.name !== place.name
                                )
                              );
                            }
                          }}
                          className="form-checkbox text-indigo-600 bg-gray-700 rounded-lg"
                        />
                        <span>
                          {place.name} - ₹{place.cost}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-semibold">Select Activities:</label>
            <div className="space-y-2">
              {activitiesData.map((activity) => (
                <label
                  key={activity.name}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    value={activity.name}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedActivities([
                          ...selectedActivities,
                          activity,
                        ]);
                      } else {
                        setSelectedActivities(
                          selectedActivities.filter(
                            (a) => a.name !== activity.name
                          )
                        );
                      }
                    }}
                    className="form-checkbox text-indigo-600 bg-gray-700 rounded-lg"
                  />
                  <span>
                    {activity.name} - ₹{activity.price}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Calculate Total Cost
          </button>
        </form>
        {totalCost > 0 && (
          <div className="mt-4 p-4 bg-gray-900 rounded-lg">
            <h2 className="text-2xl font-bold">Total Cost: ₹{totalCost}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Algo;
