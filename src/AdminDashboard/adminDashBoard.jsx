import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Modal } from "react-bootstrap";
import AdmnSidebar from "./AdmnSidebar";
import StatsBars from "./StaticsBars";
import AdminPieChart from "./AdminPieCharts";

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  
  // Dummy data for flight scheduling
  const flightSchedules = [
    { flightNo: "AA101", departure: "2024-12-10 10:00 AM", arrival: "2024-12-10 02:00 PM", origin: "New York", destination: "London" },
    { flightNo: "BA202", departure: "2024-12-11 11:00 AM", arrival: "2024-12-11 03:00 PM", origin: "Los Angeles", destination: "Tokyo" },
    { flightNo: "DL303", departure: "2024-12-12 08:00 AM", arrival: "2024-12-12 01:00 PM", origin: "Chicago", destination: "Paris" },
    { flightNo: "UA404", departure: "2024-12-13 09:00 AM", arrival: "2024-12-13 01:30 PM", origin: "San Francisco", destination: "Dubai" },
  ];

  // Fetch bookings data from the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((response) => response.json())
      .then((data) => setBookings(data.data)) 
      .catch((error) => console.error("Error fetching bookings:", error));
  }, []);

  return (
    <>
      <div className="d-flex" style={{ height: '100vh' }}>
        <div style={{ width: '250px' }}>
          <AdmnSidebar />
        </div>
        <div style={{ flex: 1, height: '100vh', overflowY: 'auto' }}>
          <Container fluid style={{ height: '100%' }}>
            <Row>
              <Col className="col-12">
                <h1>Admin Dashboard</h1>
                <h4>Bookings Overview</h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Flight</th>
                      <th>Members</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td>{booking.id}</td>
                        <td>{booking.flight}</td>
                        <td>{booking.members}</td>
                        <td>{booking.firstName}</td>
                        <td>{booking.contact}</td>  
                        <td>${booking.total}</td>  
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Col className="col-12 p-5">
                <StatsBars />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container fluid style={{ paddingTop: '50px' }}>
        <Row>
          <Col className="shadow col-5 m-5">
            <h1>Flights Share</h1>
            <AdminPieChart />
          </Col>
          <Col>
            <h3>Flight Scheduling</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Flight No</th>
                  <th>Departure</th>
                  <th>Arrival</th>
                  <th>Origin</th>
                  <th>Destination</th>
                </tr>
              </thead>
              <tbody>
                {flightSchedules.map((schedule, index) => (
                  <tr key={index}>
                    <td>{schedule.flightNo}</td>
                    <td>{schedule.departure}</td>
                    <td>{schedule.arrival}</td>
                    <td>{schedule.origin}</td>
                    <td>{schedule.destination}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;
