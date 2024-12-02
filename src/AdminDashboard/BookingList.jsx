import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingList = () => {
  // Sample static booking data
  const [bookings] = useState([
    { id: 1, user: "John Doe", flight: "NYC to LA", date: "2024-11-25", status: "Confirmed" },
    { id: 2, user: "Jane Smith", flight: "LA to SF", date: "2024-12-05", status: "Pending" },
    { id: 3, user: "Mike Johnson", flight: "SF to Chicago", date: "2024-12-15", status: "Cancelled" },
  ]);

  return (
    <div className="table-container p-4">
      <h2 className="text-xl font-semibold mb-4">Flight Bookings</h2>
      <table className="table w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-left">User</th>
            <th className="border p-2 text-left">Flight</th>
            <th className="border p-2 text-left">Date</th>
            <th className="border p-2 text-left">Status</th>
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="border p-2">{booking.user}</td>
              <td className="border p-2">{booking.flight}</td>
              <td className="border p-2">{new Date(booking.date).toLocaleDateString()}</td>
              <td className="border p-2">{booking.status}</td>
              <td className="border p-2">
                <Link to={`/booking/${booking.id}`} className="text-blue-600 hover:text-blue-800">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
