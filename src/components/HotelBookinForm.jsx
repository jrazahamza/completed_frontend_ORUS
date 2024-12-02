import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

const HotelBookingForm = () => {
  const [offerId, setOfferId] = useState('');
  const [guests, setGuests] = useState('');
  const [payments, setPayments] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
      const res = await axios.post('http://localhost:5000/api/amadeus/hotel-orders', {
        offerId,
        guests: JSON.parse(guests),
        payments: JSON.parse(payments),
      });
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <Container className="mt-5">
      <h1>Hotel Booking</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {response && <Alert variant="success">Booking Successful!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Offer ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Offer ID"
            value={offerId}
            onChange={(e) => setOfferId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Guests (JSON)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder='Example: [{"name": "John Doe", "contact": "johndoe@example.com"}]'
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Payments (JSON)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder='Example: [{"method": "creditCard", "details": {...}}]'
            value={payments}
            onChange={(e) => setPayments(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Book Hotel
        </Button>
      </Form>
    </Container>
  );
};

export default HotelBookingForm;
