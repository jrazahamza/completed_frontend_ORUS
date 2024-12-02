import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Button, Card, Container, Row, Col, Alert, Form } from 'react-bootstrap';

const FlightOffers = () => {
  const [flightOffers, setFlightOffers] = useState(null);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(new URLSearchParams(location.search).get('search') || '');

  useEffect(() => {
    const getFlightOffers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/amadeus/flight-offers');
        setFlightOffers(response.data);
        setFilteredOffers(response.data.data); 
      } catch (error) {
        setError('Error fetching flight offers');
        console.error('Error:', error);
      }
    };

    getFlightOffers();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = flightOffers?.data.filter(offer =>
        offer.itineraries[0].segments[0].carrierCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.price.total.toString().includes(searchTerm)
      );
      setFilteredOffers(filtered);
    } else {
      setFilteredOffers(flightOffers?.data);
    }
  }, [searchTerm, flightOffers]);

  return (
    <Container className="py-5">
      <h1 className="text-center text-primary mb-5">
        Flight Offers 
      </h1>

      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}

      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by airline or price"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

      {filteredOffers?.length > 0 ? (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredOffers.map((offer, index) => (
            <Col key={index}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>Flight Option {index + 1}</Card.Title>
                  <Card.Text>
                    <strong>Price: </strong>${offer.price.total}
                  </Card.Text>
                  <Card.Text>
                    <strong>Departure: </strong>
                    {offer.itineraries[0].segments[0].departure.at}
                  </Card.Text>
                  <Card.Text>
                    <strong>Arrival: </strong>
                    {offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1].arrival.at}
                  </Card.Text>
                  <Card.Text>
                    <strong>Airline: </strong>
                    {offer.itineraries[0].segments[0].carrierCode}
                  </Card.Text>
                  <div className="text-center">
                    <Link to='/FlightCheckOut'>
                      <Button variant="primary">Book Now</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center text-muted">No flight offers found</p>
      )}
    </Container>
  );
};

export default FlightOffers;
