import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Card, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FlightOffersModal = () => {
  const [show, setShow] = useState(false);
  const [flightOffers, setFlightOffers] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const getFlightOffers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/amadeus/flight-offers');
        setFlightOffers(response.data);
      } catch (error) {
        setError('Error fetching flight offers');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    getFlightOffers();
  }, []);

  const filteredFlights = flightOffers?.data.filter((offer) =>
    offer.itineraries[0].segments[0].departure.at.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.itineraries[0].segments[0].arrival.at.toLowerCase().includes(searchTerm.toLowerCase()) ||
    offer.itineraries[0].segments[0].carrierCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Search Flight
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Flight Offers</Modal.Title>
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : filteredFlights?.length > 0 ? (
            <Row xs={1} sm={2} md={3} className="g-4">
              {filteredFlights.map((offer, index) => (
                <Col key={index}>
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title>Flight {index + 1}</Card.Title>
                      <Card.Text>
                        <strong>Price:</strong> ${offer.price.total}
                      </Card.Text>
                      <Card.Text>
                        <strong>Departure:</strong> {offer.itineraries[0].segments[0].departure.at}
                      </Card.Text>
                      <Card.Text>
                        <strong>Arrival:</strong>{' '}
                        {offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.at}
                      </Card.Text>
                      <Card.Text>
                        <strong>Airline:</strong> {offer.itineraries[0].segments[0].carrierCode}
                      </Card.Text>
                      <Link to="/FlightCheckOut">
                        <Button variant="warning">Book Now</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Alert variant="warning">No flights match your search.</Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FlightOffersModal;
