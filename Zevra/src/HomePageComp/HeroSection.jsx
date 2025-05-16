import React, { useState } from "react";
import "../bokking.css";
import { BiCurrentLocation } from "react-icons/bi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import l from "leaflet"


const HeroSection = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [currentlocation , setcurrentlocation] = useState("");
  const [ridetime , setridetime] = useState('');
  const [ridedate , setridedate] = useState('');


  const position = [51.505, -0.09]; // Default map center (London)
  const zoomLevel = 13; // Initial zoom level


  const handlecurrentlocation = ()=>{
    alert("get your current location");
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center ">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-snug">
            Book Your EV Ride <br />
            <span className="text-indigo-600">with a Tap 🚗⚡</span>
          </h1>
          <p className="text-gray-700 text-lg mb-10">
            Travel eco-friendly and smart with AI-operated electric cabs. Enjoy
            comfort, speed, and sustainability in one ride.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-xl space-y-5 border border-gray-200">
            <div className="flex items-center justify-end ">

            <input
              type="text"
              placeholder="📍 Pickup Location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 placeholder-gray-500 relative"

              />
<BiCurrentLocation className="absolute size-7 m-3 cursor-pointer" onClick={handlecurrentlocation}/>

              </div>
            <input
              type="text"
              placeholder="🎯 Drop Location"
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 placeholder-gray-500"
            />


            <div className="flex items-center justify-center gap-7">
                <input
              type="time"
              placeholder="🎯 Drop Location"
              value={ridetime}
              onChange={(e) => setridetime(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 placeholder-gray-500"
            />

            <input
              type="date"
              placeholder="🎯 Drop Location"
              value={ridedate}
              onChange={(e) => setridedate(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-800 placeholder-gray-500"
            />
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-200">
              🚀 See Prices
            </button>
          </div>
        </div>

        {/* Right Side (Map or Animation Placeholder) */}
        <div className="w-full h-[400px] bg-white rounded-2xl shadow-xl border border-dashed border-gray-300  text-gray-500 text-lg">
      <MapContainer
        center={position}
        zoom={zoomLevel}

      ></MapContainer>



        </div>
      </div>
    </div>
  );
};

export default HeroSection;
