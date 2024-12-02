import React from "react";
import { Link } from "react-router-dom";

const Ticket = ({ data }) => {
  if (!data) {
    return (
      <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
        <div className="text-center">
          <h2 className="mb-4 text-danger">No Ticket Information Available</h2>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <main className="container bg-white shadow rounded p-4 my-5">
        <h2 className="text-center mb-5">Your Ticket</h2>
        <div className="mb-4">
          {/* Customer Details */}
          <section className="border p-3 rounded">
            <h5 className="mb-3 text-primary">Customer Information</h5>
            <div className="row">
              <div className="col-md-6 mb-2">
                <strong>Name:</strong> {data.firstName} {data.lastName}
              </div>
              <div className="col-md-6 mb-2">
                <strong>Contact:</strong> {data.contact}
              </div>
              <div className="col-md-6">
                <strong>Email:</strong> {data.email}
              </div>
            </div>
          </section>
        </div>

        <div>
          {/* Booking Details */}
          <section className="border p-3 rounded">
            <h5 className="mb-3 text-primary">Booking Details</h5>
            <div className="row">
              <div className="col-md-6 mb-2">
                <strong>Route:</strong> Cairo To Los Angeles
              </div>
              <div className="col-md-6 mb-2">
                <strong>Flight:</strong> Emirates Airline
              </div>
              <div className="col-md-6 mb-2">
                <strong>Dates:</strong> Thursday, Dec 8 - Friday, Dec 9
              </div>
              <div className="col-md-6">
                <strong>Total Fare:</strong> ${data.total}
              </div>
            </div>
          </section>
        </div>

        <Link
          to="/"
          className="btn btn-warning text-white d-block mt-4"
        >
          Back to Home
        </Link>
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">© 2024 ORUS. All rights reserved!</p>
      </footer>
    </div>
  );
};

export default Ticket;
