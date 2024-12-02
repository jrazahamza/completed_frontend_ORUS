import React from "react";

const TabsComponent = () => {
  return (
    <div className="container mt-4">
      {/* Tab Navigation */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="flights-tab"
            data-bs-toggle="tab"
            data-bs-target="#flights"
            type="button"
            role="tab"
            aria-controls="flights"
            aria-selected="true"
          >
            Flights
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="stays-tab"
            data-bs-toggle="tab"
            data-bs-target="#stays"
            type="button"
            role="tab"
            aria-controls="stays"
            aria-selected="false"
          >
            Stays
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="activities-tab"
            data-bs-toggle="tab"
            data-bs-target="#activities"
            type="button"
            role="tab"
            aria-controls="activities"
            aria-selected="false"
          >
            Activities
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="cabs-tab"
            data-bs-toggle="tab"
            data-bs-target="#cabs"
            type="button"
            role="tab"
            aria-controls="cabs"
            aria-selected="false"
          >
            Cabs
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="offers-tab"
            data-bs-toggle="tab"
            data-bs-target="#offers"
            type="button"
            role="tab"
            aria-controls="offers"
            aria-selected="false"
          >
            Offers
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content mt-3" id="myTabContent">
        {/* Flights Tab */}
        <div
          className="tab-pane fade show active"
          id="flights"
          role="tabpanel"
          aria-labelledby="flights-tab"
        >
          <h4>Search Flights</h4>
          <p>Plan your trip by booking flights to your favorite destinations.</p>
          <ul>
            <li>From: Warsaw, Poland</li>
            <li>To: Paris, France</li>
            <li>Departure: 12 Jan, 2024</li>
            <li>Return: 19 Jan, 2024</li>
          </ul>
          <button className="btn btn-primary">Search Flights</button>
        </div>

        {/* Stays Tab */}
        <div
          className="tab-pane fade"
          id="stays"
          role="tabpanel"
          aria-labelledby="stays-tab"
        >
          <h4>Find Stays</h4>
          <p>Explore the best hotels and accommodations for your trip.</p>
          <ul>
            <li>Location: Warsaw, Poland</li>
            <li>Check-in: 12 Jan, 2024</li>
            <li>Check-out: 19 Jan, 2024</li>
            <li>Guests: 2 adults, 0 children, 1 room</li>
          </ul>
          <button className="btn btn-primary">Show Hotels</button>
        </div>

        {/* Activities Tab */}
        <div
          className="tab-pane fade"
          id="activities"
          role="tabpanel"
          aria-labelledby="activities-tab"
        >
          <h4>Discover Activities</h4>
          <p>Find exciting activities to make your trip memorable.</p>
          <ul>
            <li>Location: Warsaw, Poland</li>
            <li>Activity Date: 12 Jan, 2024</li>
            <li>Participants: 2 adults</li>
          </ul>
          <button className="btn btn-primary">Search Activities</button>
        </div>

        {/* Cabs Tab */}
        <div
          className="tab-pane fade"
          id="cabs"
          role="tabpanel"
          aria-labelledby="cabs-tab"
        >
          <h4>Book Cabs</h4>
          <p>Travel conveniently with our cab booking service.</p>
          <ul>
            <li>Pick-up Location: Warsaw, Poland</li>
            <li>Drop-off Location: Krakow, Poland</li>
            <li>Pick-up Date: 12 Jan, 2024</li>
          </ul>
          <button className="btn btn-primary">Search Cabs</button>
        </div>

        {/* Offers Tab */}
        <div
          className="tab-pane fade"
          id="offers"
          role="tabpanel"
          aria-labelledby="offers-tab"
        >
          <h4>Exclusive Offers</h4>
          <p>Discover the best deals and offers for your travel.</p>
          <ul>
            <li>Offer Location: Warsaw, Poland</li>
            <li>Offer Date: 12 Jan, 2024</li>
          </ul>
          <button className="btn btn-primary">View Offers</button>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
