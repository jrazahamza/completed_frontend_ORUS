import React from 'react'
import emirates from "../Images/booking-emira-card-img.png";
import { Link } from 'react-router-dom';
const FlightComponents = () => {
  return (
   <>
   <div className="d-flex justify-content-between align-items-center">
                      {/* Airline Info */}
                      <div className="d-flex align-items-center">
                        <img
                          src={emirates}
                          alt="Airline Logo"
                          className="airline-logo"
                          style={{ width: "50px" }}
                        />
                        <div className="ms-3">
                          <h5 className="airline-name">Emirates Airlines</h5>
                          <small className="text-muted">Operated by XYZ Airlines</small>
                          <Link to='/FlightCheckOut'>  <button type="button" class="btn btn-warning">Book Now</button></Link>
                        </div>
                      </div>

                      {/* Flight Info */}
                      <div className="text-end">
                        <p className="m-0 stops-info">
                          2 Stops <span className="travel-time">2h 12m</span>
                        </p>
                        <span className="badge bg-primary">Fastest</span>
                      </div>
                    </div>
   </>
  )
}

export default FlightComponents;