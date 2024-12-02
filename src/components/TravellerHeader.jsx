import React, { useState } from "react";


const TravelHeader = () => {
  const [from, setFrom] = useState("Warsaw, Poland");
  const [to, setTo] = useState("bayern, germany");
  const [returnt, setReturnt] = useState("");
  const [depature, setDepature] = useState("");
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
            <label className="text-sm font-medium">To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="bg-gray-700 text-white rounded px-4 py-2 focus:outline-none"
              placeholder="Enter location"
            />
          </div>
          
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium">Depature</label>
            <input
              type="date"
              value={depature}
              onChange={(e) => setDepature(e.target.value)}
              className="bg-gray-700 text-white rounded px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-sm font-medium">Return</label>
            <input
              type="date"
              value={returnt}
              onChange={(e) => setReturnt(e.target.value)}
              className="bg-gray-700 text-white rounded px-4 py-2 focus:outline-none"
            />
          </div>
        </div>
      </div>
      {/* <button className="bg-gradient-to-r from-orange-400 m-5 to-yellow-500 text-white font-medium px-6 py-2 rounded hover:opacity-90">
        Show Hotels
      </button> */}
     
    </>
  );
};

export default TravelHeader;
