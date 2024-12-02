import React from "react";

const FlightDetails = () => {
  return (
    <section className="bg-white shadow-md p-6 rounded-lg mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Cairo To Los Angeles</h2>
          <p className="text-sm text-gray-500">Emirates Airline</p>
          <p className="text-sm text-gray-500">Thursday, Dec 8 - Friday, Dec 9</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-orange-500">$240</p>
        </div>
      </div>
      <div className="mt-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="payment-plan" defaultChecked />
          <span>Pay in full</span>
        </label>
        <label className="flex items-center gap-2 mt-2">
          <input type="radio" name="payment-plan" />
          <span>Pay part now, part later</span>
        </label>
      </div>
    </section>
  );
};

export default FlightDetails;
