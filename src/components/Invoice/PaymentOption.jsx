import React from "react";

const PaymentOptions = () => {
  return (
    <section className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Payment Option</h2>
      <div className="flex gap-4 mb-4">
        {["Cash on Delivery", "Venmo", "PayPal", "Amazon Pay", "Credit/Debit Card"].map((method, idx) => (
          <label key={idx} className="flex items-center gap-2">
            <input type="radio" name="payment-method" />
            <span>{method}</span>
          </label>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Name on Card"
          className="input col-span-3"
        />
        <input
          type="text"
          placeholder="Card Number"
          className="input col-span-3"
        />
        <input type="text" placeholder="Expire Date" className="input" />
        <input type="text" placeholder="CVC" className="input" />
      </div>
      <button className="btn-orange w-full mt-6">Book Now</button>
    </section>
  );
};

export default PaymentOptions;
