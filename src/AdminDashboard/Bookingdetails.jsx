// BookingDetails.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookingDetails = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the booking details from the backend
    axios.get(`/api/bookings/${id}`)
      .then(response => {
        setBooking(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching booking details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      {booking ? (
        <div>
          <p><strong>User:</strong> {booking.user}</p>
          <p><strong>Flight:</strong> {booking.flight}</p>
          <p><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
          <p><strong>Status:</strong> {booking.status}</p>
          <p><strong>Special Requests:</strong> {booking.specialRequests}</p>
        </div>
      ) : (
        <p>Booking not found.</p>
      )}
    </div>
  );
};

export default BookingDetails;
