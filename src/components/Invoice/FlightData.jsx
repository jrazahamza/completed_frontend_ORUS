import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({ user: '', flight: '', date: '' });
  const [editing, setEditing] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch bookings when the component mounts or when updated
  useEffect(() => {
    if (editing && id) {
      axios
        .get(`http://localhost:3000/bookings/${id}`)
        .then((response) => setFormData(response.data))
        .catch((error) => console.error('Error fetching booking:', error));
    } else if (!editing) {
      axios
        .get('http://localhost:3000/bookings')
        .then((response) => setBookings(response.data))
        .catch((error) => console.error('Error fetching bookings:', error));
    }
  }, [id, editing]);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for creating or updating a booking
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      axios
        .put(`http://localhost:3000/bookings/${id}`, formData)
        .then(() => {
          setEditing(false);
          navigate('/');
        })
        .catch((error) => console.error('Error updating booking:', error));
    } else {
      axios
        .post('http://localhost:3000/bookings', formData)
        .then(() => navigate('/'))
        .catch((error) => console.error('Error creating booking:', error));
    }
  };

  // Handle deleting a booking
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/bookings/${id}`)
      .then(() => setBookings(bookings.filter((booking) => booking.id !== id)))
      .catch((error) => console.error('Error deleting booking:', error));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{editing ? 'Edit Booking' : 'Flight Booking System'}</h1>

      {editing ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">User</label>
            <input
              type="text"
              name="user"
              className="form-control"
              value={formData.user}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Flight</label>
            <input
              type="text"
              name="flight"
              className="form-control"
              value={formData.flight}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              name="date"
              className="form-control"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            {editing ? 'Update Booking' : 'Add Booking'}
          </button>
        </form>
      ) : (
        <>
          <button
            className="btn btn-primary mb-3"
            onClick={() => setEditing(false)}
          >
            Add Booking
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Flight</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.user}</td>
                  <td>{booking.flight}</td>
                  <td>{booking.date}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => {
                        setEditing(true);
                        navigate(`/booking/edit/${booking.id}`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm ml-2"
                      onClick={() => handleDelete(booking.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Booking;
