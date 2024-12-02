import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Footer from "./Footer";
import Image from "../Images/activities-tickets-card-img.png";
import { Link } from "react-router-dom";
import Header from "./header";

const ActivitiesCheckOut = () => {
  const [invoiceData, setInvoiceData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    cardName: "",
    cardNumber: "",
    baseFare: 240,
    taxes: 20,
    serviceFee: 5,
    total: 265,
  });

  const updateInvoiceData = (field, value) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const BookNow = async () => {
    const bookingData = {
      firstName: invoiceData.firstName,
      lastName: invoiceData.lastName,
      contact: invoiceData.contact,
      email: invoiceData.email,
      baseFare: invoiceData.baseFare,
      taxes: invoiceData.taxes,
      serviceFee: invoiceData.serviceFee,
      total: invoiceData.total,
      status: "Pending",
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert("Your ticket has been booked!");
        setInvoiceData({
          firstName: "",
          lastName: "",
          contact: "",
          email: "",
          cardName: "",
          cardNumber: "",
          baseFare: 240,
          taxes: 20,
          serviceFee: 5,
          total: 265,
        });
      } else {
        alert("Failed to book ticket. Please try again.");
      }
    } catch (error) {
      console.error("Error booking ticket:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="m-5">
        <Header />
      </div>
      <Container className="py-5">
        <Row className="mb-4 border p-3">
          <Col>
            <img src={Image} alt="Activity" />
          </Col>
          <Col>
            <h2>Dubai Desert Safari</h2>
            <p className="text-muted">Gümüşsuyu, Mah. İnönü Cad. No:8, Istanbul 34437</p>
            <h4>$240/person</h4>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Card className="mb-4">
              <Card.Body>
                <h5>Billing Information</h5>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter first name"
                          value={invoiceData.firstName}
                          onChange={(e) => updateInvoiceData("firstName", e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter last name"
                          value={invoiceData.lastName}
                          onChange={(e) => updateInvoiceData("lastName", e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="contact">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter contact number"
                      value={invoiceData.contact}
                      onChange={(e) => updateInvoiceData("contact", e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email address"
                      value={invoiceData.email}
                      onChange={(e) => updateInvoiceData("email", e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <h5 className="card-title">Invoice Summary</h5>
                <img src={Image} alt="Invoice" className="m-5" />
                <div className="d-flex justify-content-between mb-2">
                  <span>First Name</span>
                  <span>{invoiceData.firstName}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Last Name</span>
                  <span>{invoiceData.lastName}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Contact Number</span>
                  <span>{invoiceData.contact}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Taxes</span>
                  <span>${invoiceData.taxes}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Service Fee</span>
                  <span>${invoiceData.serviceFee}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <strong>Total</strong>
                  <strong>${invoiceData.total}</strong>
                </div>
                <Button variant="warning" className="mt-3 w-100" onClick={BookNow}>
                  Book Now
                </Button>
                <Link to="/ticket" className="btn btn-warning mt-2 w-100">
                  View Ticket
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ActivitiesCheckOut;
