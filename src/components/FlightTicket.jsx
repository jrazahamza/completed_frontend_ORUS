import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import '../components/css/style.css'; 

const FlightTicket = () => {
  return (
    <div className="ticket-container">
      <Card className="flight-ticket" style={{ width: '100%', maxWidth: '600px', margin: '20px auto', borderRadius: '10px', position: 'relative', zIndex: 1 }}>
        <Card.Body>
          {/* Ticket Header: Flight Information */}
          <Row className="mb-4">
            <Col xs={6}>
              <h5 className="text-primary">Flight Ticket</h5>
              <p><strong>Airline:</strong> Awesome Air</p>
            </Col>
            <Col xs={6} className="text-end">
              <p><strong>Flight No:</strong> AA1234</p>
              <p><strong>Class:</strong> Economy</p>
            </Col>
          </Row>

          {/* Flight Details */}
          <Row className="mb-4">
            <Col xs={6}>
              <h6><strong>Departure:</strong></h6>
              <p><strong>From:</strong> New York (JFK)</p>
              <p><strong>Time:</strong> 10:30 AM</p>
              <p><strong>Date:</strong> 12 Dec 2024</p>
            </Col>
            <Col xs={6}>
              <h6><strong>Arrival:</strong></h6>
              <p><strong>To:</strong> Los Angeles (LAX)</p>
              <p><strong>Time:</strong> 1:45 PM</p>
              <p><strong>Date:</strong> 12 Dec 2024</p>
            </Col>
          </Row>

          {/* Passenger Information */}
          <Row className="mb-4">
            <Col xs={6}>
              <h6><strong>Passenger:</strong></h6>
              <p>John Doe</p>
            </Col>
            <Col xs={6} className="text-end">
              <h6><strong>Seat:</strong></h6>
              <p>22A</p>
            </Col>
          </Row>

          {/* Ticket Footer */}
          <Row>
            <Col>
              <Button variant="primary" size="sm" block>
                View Details
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FlightTicket;
