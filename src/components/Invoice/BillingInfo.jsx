import React from "react";

const BillingInfo = () => {
  return (
    <section className="bg-white shadow-md p-6 rounded-lg mb-6">
      <h2 className="text-lg font-bold mb-4">Billing Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="input"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input"
        />
        <input
          type="tel"
          placeholder="Contact Number"
          className="input"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="input"
        />
      </div>
      <label className="mt-4 flex items-center gap-2">
        <input type="checkbox" />
        <span>Receive text alerts about this trip.</span>
      </label>
    </section>
  );
};

export default BillingInfo;
