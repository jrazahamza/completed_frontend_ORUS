import React from "react";

const InvoiceSummary = () => {
  return (
    <aside className="bg-white shadow-md p-6 rounded-lg w-full lg:w-96">
      <h2 className="text-lg font-bold mb-4">Invoice Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Base Fare</span>
          <span className="font-medium">$240</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Discount</span>
          <span className="font-medium">$0</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Taxes</span>
          <span className="font-medium">$20</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Service Fee</span>
          <span className="font-medium">$5</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>$265</span>
        </div>
        <button className="btn-orange w-full mt-4">Book Now</button>
      </div>
    </aside>
  );
};

export default InvoiceSummary;
