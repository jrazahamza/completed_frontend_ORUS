import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const UserDash = () => {
  const [booking, setBooking] = useState({
    flight: "",
    members: 0,
    price: 0,
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({
      ...booking,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    
    const newBooking = {
      ...booking,
      id: existingBookings.length + 1,
    };

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, newBooking])
    );

    alert("Booking successfully submitted!");

   
    setBooking({ flight: "", members: 0, price: 0 });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Submit Your Booking</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Flight Name</Form.Label>
              <Form.Control
                type="text"
                name="flight"
                value={booking.flight}
                onChange={handleChange}
                placeholder="Enter flight name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Total Members</Form.Label>
              <Form.Control
                type="number"
                name="members"
                value={booking.members}
                onChange={handleChange}
                placeholder="Enter number of members"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Total Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={booking.price}
                onChange={handleChange}
                placeholder="Enter total price"
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit Booking
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDash;
