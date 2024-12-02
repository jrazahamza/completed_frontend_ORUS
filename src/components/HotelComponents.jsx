import React from 'react'
import HotelPNG from "../Images/hotel-img.png";
import { Link } from 'react-router-dom';

const HotelComponents = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        {/* Hotel Info */}
        <div className="d-flex align-items-center">
          <img
            src={HotelPNG}
            alt="Hotel Logo"
            className="img-fluid"
            style={{ width: "50px" }}
          />
          <div className="ms-3">
            <h5 className="hotel-name">CVK Park Bosphorus Hotel Istanbul</h5>
            <p className="text-muted">
              Free Cancellation anytime, No Upfront. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            {/* Price Info */}
            <div className="d-flex align-items-center">
              <h6 className="mb-0">Price: </h6>
              <span className="ms-2 fs-4 fw-bold">$150 per night</span>
            </div>
            <Link to='/HotelDetailing'>
              <button type="button" className="btn btn-warning mt-2">Book Now</button>
            </Link>
          </div>
        </div>

        {/* Travel Info */}
        <div className="text-end">
          <p className="m-0 stops-info">
            2 Stops <span className="travel-time">2h 12m</span>
          </p>
          <span className="badge bg-primary">Fastest</span>
        </div>
      </div>
    </>
  );
}

export default HotelComponents;
