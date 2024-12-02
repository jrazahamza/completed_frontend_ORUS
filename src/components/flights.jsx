import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import NavigationalHeader from "./NavigationalHeader";
import googleMap from "../Images/goole-map.png";
import FlightComponents from "./flightComponents";
import Carlo from '../Images/right-side-card-flight-between.png'
const Flights = () => {
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const exampleData = [
    { id: 1, title: 'Paris Vacation', description: 'Explore the romantic city of Paris with guided tours and gourmet dining.' },
    { id: 2, title: 'Tropical Beaches in Maldives', description: 'Relax on white sand beaches with crystal-clear waters in the Maldives.' },
    { id: 3, title: 'Adventure in New Zealand', description: 'Enjoy bungee jumping, hiking, and stunning landscapes in New Zealand.' },
    { id: 4, title: 'Cultural Experience in Japan', description: 'Dive into Japanese traditions with temple visits, tea ceremonies, and sushi making.' },
    { id: 5, title: 'Road Trip Across the USA', description: 'Experience iconic landmarks and scenic routes across the United States.' },
  ];


  const handlePromptSubmit = (e) => {
    e.preventDefault();
    const filteredSuggestions = exampleData.filter((item) =>
      item.title.toLowerCase().includes(prompt.toLowerCase()) ||
      item.description.toLowerCase().includes(prompt.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };
  return (
    <>
      {/* Header Section */}
      <NavigationalHeader />
      <div className="row">
        {/* Left Column: Map */}
        <div className="col-lg-3 col-md-3 hotel-listing-left-sec">
          <div className="g-map">
            <img src={googleMap} alt="Map" className="img-fluid rounded" />
          </div>
        </div>

        {/* Middle Column: Tabs */}
        <div className="col-lg-6 col-md-6">
          <div className="hotel-list-tabs">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="fastest-tab"
                  data-bs-toggle="tab"
                  href="#fastest"
                  role="tab"
                  aria-controls="fastest"
                  aria-selected="true"
                >
                  Fastest <br />
                  <span className="sub-tabs">157 Flights</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="cheapest-tab"
                  data-bs-toggle="tab"
                  href="#cheapest"
                  role="tab"
                  aria-controls="cheapest"
                  aria-selected="false"
                >
                  Cheapest <br />
                  <span className="sub-tabs">41 Flights</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="quickest-tab"
                  data-bs-toggle="tab"
                  href="#quickest"
                  role="tab"
                  aria-controls="quickest"
                  aria-selected="false"
                >
                  Quickest <br />
                  <span className="sub-tabs">72 Flights</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Filters and Sort */}
        <div className="col-lg-3 col-md-3 text-md-end">
          <div className="row my-4">
            {/* Filters Info */}
            <div className="col-md-6">
              <p>Showing 4 of 257 places</p>
            </div>

            {/* Sort Dropdown */}
            <div className="col-md-6">
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort by Price
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Low to High
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      High to Low
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="container my-5">
        <div className="row">
          {/* Left Column */}
          <aside className="col-md-3">
            <div className="filter-section">
              <h2 className="filter-heading">Filters</h2>

              <div className="filter-options">
                <div className="filter-title">Price per Person</div>
                <input
                  type="range"
                  className="form-range price-slider"
                  min="50"
                  max="1200"
                  step="10"
                  defaultValue="50"
                />
                <div className="price-range">
                  <span>$50</span>
                  <span>$1200</span>
                </div>
              </div>

              <div className="filter-options">
                <div className="filter-title">Times</div>
                <label>Departure 00:00 - 24:00</label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="24"
                  step="1"
                  defaultValue="12"
                />
                <label>Arrival 00:00 - 24:00</label>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="24"
                  step="1"
                  defaultValue="12"
                />
              </div>

              <div className="filter-options">
                <div className="filter-title">Search Airline</div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Property by Name"
                />
              </div>

              <div className="filter-options">
                <div className="filter-title">Rating</div>
                <div className="rating-buttons">
                  {[...Array(5)].map((_, index) => (
                    <button key={index} className="btn btn-sm">
                      {index}+
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div class="filter-options">
              <div class="filter-title">Stops</div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="frontDesk" checked />
                <label class="form-check-label" for="frontDesk">24hr front desk</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="airConditioned" checked />
                <label class="form-check-label" for="airConditioned">Air-conditioned</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="fitness" />
                <label class="form-check-label" for="fitness">Fitness</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="pool" />
                <label class="form-check-label" for="pool">Pool</label>
              </div>
              <div class="show-more">+24 more</div>
            </div>
            <hr />

            <div class="filter-options">
              <div class="filter-title">Cabin Class</div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="frontDesk" checked />
                <label class="form-check-label" for="frontDesk">Free breakfast</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="airConditioned" checked />
                <label class="form-check-label" for="airConditioned">Free parking</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="fitness" />
                <label class="form-check-label" for="fitness">Free internet</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="pool" />
                <label class="form-check-label" for="pool">Free airport shuttle</label>
              </div>
            </div>
            <div class="filter-options">
              <div class="filter-title">Payment type</div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="fitness" />
                <label class="form-check-label" for="fitness">Reserve now, pay later</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="pool" />
                <label class="form-check-label" for="pool">Reserve without a credit card</label>
              </div>
            </div>
            <hr />


          </aside>

          {/* Middle Column */}
          <main className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="hotel-listing-card flight-listing-cards">
                  {[...Array(7)].map((_, index) => (
                    <div key={index} className="card flight-card p-3">
                      <FlightComponents />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          {/* Right Column */}
          <aside className="col-md-3">
            <div class="suggested-section">
              <h6 class="sugested-h6">Suggested By ORUS</h6>
              <div class="suggested-box">
                <div class="right-side-cards">
                  <div class="card flight-card">
                    <div class="right-card-header d-flex justify-content-between">
                      <div class="text-end d-flex">
                        <p class="m-0 stops-info">2 Stops <span class="travel-time">2h 12m</span></p>
                        <span class="badge fastest-badge">Fastest</span>
                      </div>
                    </div>
                    <img
                      src={Carlo}
                      alt="Suggestion"
                      className="rounded me-2"
                    />
                  </div>
                  <div class="advertisement p-3">
                    <h6 class="advertisement-h">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h6>
                    <p class="advertisement-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                    <button class="btn btn-advertisement">Show Details</button>
                  </div>
                  <div className="bg-warning p-3 text-center rounded">
                    <h6>Your Travel AI Assistant</h6>
                    <div className="min-vh-100 d-flex flex-column align-items-center bg-light py-4">
                      {/* Form Section */}
                      <form
                        onSubmit={handlePromptSubmit}
                        className="w-100 mx-auto p-4 rounded bg-white shadow-sm"
                        style={{ maxWidth: "500px" }}
                      >
                        <div className="mb-3">
                          <label htmlFor="prompt" className="form-label fw-bold text-secondary">
                            Enter your prompt:
                          </label>
                          <input
                            type="text"
                            id="prompt"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Type your query..."
                            className="form-control"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary w-100 fw-bold"
                        >
                          Get Suggestions
                        </button>
                      </form>

                      {/* Suggestions Section */}
                      <div className="w-100 mt-4" style={{ maxWidth: "700px" }}>
                        <h2 className="fs-5 fw-bold text-secondary mb-3">Suggestions:</h2>
                        {suggestions.length > 0 ? (
                          <div className="row g-3">
                            {suggestions.map((item) => (
                              <div key={item.id} className="col-md-6">
                                <div className="p-3 bg-white rounded shadow-sm border border-secondary">
                                  <h3 className="fs-6 fw-bold text-primary">{item.title}</h3>
                                  <p className="text-muted small">{item.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-muted text-center mt-3">
                            No suggestions available. Try another prompt!
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Flights;
