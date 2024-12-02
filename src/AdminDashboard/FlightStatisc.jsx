import React from 'react';
import { Table } from 'react-bootstrap';

function FlightList({ flights }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Flight Number</th>
          <th>Departure</th>
          <th>Destination</th>
          <th>Departure Time</th>
          <th>Arrival Time</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight, index) => (
          <tr key={index}>
            <td>{flight.flightNumber}</td>
            <td>{flight.departure}</td>
            <td>{flight.destination}</td>
            <td>{new Date(flight.departureTime).toLocaleString()}</td>
            <td>{new Date(flight.arrivalTime).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default FlightList;
