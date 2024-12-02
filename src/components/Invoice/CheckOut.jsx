import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const CheckOut = () => {
  const [invoiceData, setInvoiceData] = useState({
    id: Date.now(),
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    flight: "Cairo To Los Angeles",
    baseFare: 240,
    taxes: 20,
    serviceFee: 5,
    total: 265,
    members: 1,
    status: "Pending",
  });

  const updateInvoiceData = (field, value) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const BookNow = () => {
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const updatedBookings = [...existingBookings, invoiceData];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    alert("Your ticket has been booked!");

    setInvoiceData({
      id: Date.now(),
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      flight: "Cairo To Los Angeles",
      baseFare: 240,
      taxes: 20,
      serviceFee: 5,
      total: 265,
      members: 1,
      status: "Pending",
    });
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="max-w-5xl mx-auto p-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-bold">Cairo To Los Angeles</h2>
            <p className="text-sm text-gray-500">Emirates Airline</p>
            <p className="text-sm text-gray-500">Thursday, Dec 8 - Friday, Dec 9</p>
            <div className="mt-4 text-orange-500 text-2xl font-bold">
              ${invoiceData.baseFare}
            </div>
          </section>
          <section className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Billing Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => updateInvoiceData("firstName", e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => updateInvoiceData("lastName", e.target.value)}
              />
              <input
                type="tel"
                placeholder="Contact Number"
                onChange={(e) => updateInvoiceData("contact", e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => updateInvoiceData("email", e.target.value)}
              />
            </div>
          </section>
        </div>
        <aside className="bg-white shadow-md p-6 rounded-lg lg:col-span-1">
          <h2 className="text-lg font-bold mb-4">Invoice Summary</h2>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${invoiceData.total}</span>
          </div>
          <button className="btn-orange w-full mt-4" onClick={BookNow}>
            Book Now
          </button>
        </aside>
      </main>
    </div>
  );
};

export default CheckOut;
