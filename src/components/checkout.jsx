import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import Image from "../Images/cvk-right-img.png";
import Image2 from '../Images/cvk-stays.png';
import { Link } from "react-router-dom";

const CheckOut = () => {
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
    <>
      <div className="m-5">
        <Header />
      </div>
      <Container className="py-5">
        {/* Header Section */}
        <Row className="mb-4 border p-3">
          <Col>
            <img src={Image2} alt="Activity" />
          </Col>
          <Col>
            <strong>CVK Park Bosphorus Hotel Istanbul</strong><br />
            <span class="svg-icon"><svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 0.695312C3.20467 0.695312 0.523438 3.25963 0.523438 6.4104C0.523438 7.91089 1.20738 9.90632 2.55622 12.3414C3.63947 14.2965 4.89268 16.0644 5.5445 16.9441C5.65464 17.0944 5.79865 17.2166 5.96485 17.3009C6.13106 17.3852 6.31478 17.4291 6.50112 17.4291C6.68746 17.4291 6.87118 17.3852 7.03739 17.3009C7.20359 17.2166 7.3476 17.0944 7.45774 16.9441C8.10844 16.0644 9.36277 14.2965 10.446 12.3414C11.7926 9.90706 12.4766 7.91164 12.4766 6.4104C12.4766 3.25963 9.79533 0.695312 6.5 0.695312ZM6.5 9.0625C6.02718 9.0625 5.56498 8.92229 5.17184 8.65961C4.7787 8.39692 4.47229 8.02356 4.29135 7.58673C4.11041 7.1499 4.06307 6.66922 4.15531 6.20549C4.24755 5.74175 4.47524 5.31578 4.80957 4.98145C5.14391 4.64711 5.56988 4.41943 6.03361 4.32719C6.49735 4.23494 6.97802 4.28228 7.41485 4.46323C7.85168 4.64417 8.22505 4.95058 8.48773 5.34372C8.75042 5.73685 8.89062 6.19905 8.89062 6.67188C8.88993 7.3057 8.63784 7.91336 8.18966 8.36154C7.74148 8.80972 7.13382 9.06181 6.5 9.0625Z" fill="#DDD507" />
            </svg>
            </span>  Gümüssuyu Mah. İnönü Cad. No:8, Istanbul 34437
          <p/>
        </Col>
      </Row>

      <Row>
        {/* Main Content */}
        <Col lg={8}>
          {/* Payment Options */}
          <Card className="mb-4">
            <Card.Body>
              <h5>Payment Options</h5>
              <Form>
                <small className="text-muted">
                  Pay $207.43 now, and the rest ($57.43) will be automatically charged
                  to the same payment method on Nov 14, 2024. No extra fees.
                </small>
                <Form.Check
                  id="pay-in-full"
                  label="Pay in full"
                  name="paymentOption"
                  className="mb-2"
                  type="radio"
                />
                <Form.Check
                  type="radio"
                  id="pay-later"
                  label="Pay part now, part later"
                  name="paymentOption"
                />
              </Form>
            </Card.Body>
          </Card>

          {/* Billing Information */}
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
                <Form.Check
                  type="checkbox"
                  id="sms-opt-in"
                  label="Receive text alerts about this trip."
                />
              </Form>
            </Card.Body>
          </Card>

          {/* Payment Options */}
          <Card>
            <Card.Body>
              <h5>Payment Option</h5>
              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Check
                      type="radio"
                      id="cash-on-delivery"
                      label="Cash on Delivery"
                      name="paymentMethod"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Check
                      type="radio"
                      id="paypal"
                      label="Paypal"
                      name="paymentMethod"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Check
                      type="radio"
                      id="amazon-pay"
                      label="Amazon Pay"
                      name="paymentMethod"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Check
                      type="radio"
                      id="credit-card"
                      label="Debit/Credit Card"
                      name="paymentMethod"
                      defaultChecked
                    />
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="cardName">
                  <Form.Label>Name on Card</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name on card"
                    value={invoiceData.cardName}
                    onChange={(e) => updateInvoiceData("cardName", e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="cardNumber">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter card number"
                        value={invoiceData.cardNumber}
                        onChange={(e) => updateInvoiceData("cardNumber", e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3" controlId="expiryDate">
                      <Form.Label>Expire Date</Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3" controlId="cvc">
                      <Form.Label>CVC</Form.Label>
                      <Form.Control type="text" placeholder="CVC" />
                    </Form.Group>
                  </Col>
                </Row>
                {/* <Button variant="warning" className="w-100" onClick={BookNow}>
                    Book Now
                  </Button> */}
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Summary */}
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
    </Container >
      <Footer />
    </>
  );
};

export default CheckOut;