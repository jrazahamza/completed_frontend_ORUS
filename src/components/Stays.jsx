import React, { useState } from "react";
import { FaPlane, FaHotel, FaMap } from "react-icons/fa";

const StaysTab = () => {
  const [from, setFrom] = useState("Warsaw, Poland");

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [travelers, setTravelers] = useState("2 adults · 0 children · 1 room");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTravelerSelection = (option) => {
    setTravelers(option);
    setShowDropdown(false);
  };

  return (
    <>
      <div className="bg-gray-800 text-white rounded-lg p-4 flex flex-col gap-6">
        {/* Icon Row */}
        <div className="flex items-center justify-around">
          <div className="flex flex-col items-center">
            <FaPlane className="text-yellow-500 text-2xl mb-2" />
            <span className="text-sm">Flights</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHotel className="text-yellow-500 text-2xl mb-2" />
            <span className="text-sm">Stays</span>
          </div>
          <div className="flex flex-col items-center">
            <FaMap className="text-yellow-500 text-2xl mb-2" />
            <span className="text-sm">Activities</span>
          </div>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium">From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="bg-gray-700 text-white rounded px-4 py-2 focus:outline-none"
              placeholder="Enter location"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium">Check In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-gray-700 text-white rounded px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium">Check Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-gray-700 text-white rounded px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="relative flex flex-col items-start">
            <label className="text-sm font-medium">Travelers</label>
            <div
              className="bg-gray-700 text-white rounded px-4 py-2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {travelers}
            </div>
            {showDropdown && (
              <div className="absolute top-full mt-2 w-full bg-gray-700 rounded shadow-lg z-10">
                <div
                  onClick={() => handleTravelerSelection("1 adult · 0 children · 1 room")}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                >
                  1 adult · 0 children · 1 room
                </div>
                <div
                  onClick={() => handleTravelerSelection("2 adults · 0 children · 1 room")}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                >
                  2 adults · 0 children · 1 room
                </div>
                <div
                  onClick={() => handleTravelerSelection("2 adults · 1 child · 1 room")}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                >
                  2 adults · 1 child · 1 room
                </div>
                <div
                  onClick={() => handleTravelerSelection("3 adults · 2 children · 2 rooms")}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                >
                  3 adults · 2 children · 2 rooms
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="bg-gradient-to-r from-orange-400 m-5 to-yellow-500 text-white font-medium px-6 py-2 rounded hover:opacity-90">
        Show Hotels
      </button>
    </>
  );
};

export default StaysTab;
