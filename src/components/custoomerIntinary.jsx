import React from 'react';
import './css/custumer-profile.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fbImage from './images/fb.png';
import insImage from './images/ins.png';
import piImage from './images/pi.png';
import twImage from './images/tw.png';
import footerLogo from './images/ours-footer-logo.png';
import orusLogo from './images/ours-logo.png';
import orusAvatar from './images/user-icon.png'; 
import googleMaps from './images/goole-map.png';  
import activitiesCard from './images/activities-card-img.png';
import activitiesSuggest from './images/activities-suggest-card.png';
import yourTravel from './images/your-travel-ai-ass.png';
import playStore from './images/play-store-btn.png';
import appStore from './images/app-store.png';
import SideBar from './SideBar';
import Header from './header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import IntineraryImage from './images/booking-emira-card-img.png'; // Renamed image import

const Intinery = () => {
  return (
    <>
      <Header />

      <div className="container">
        <div className="profile-container">
          {/* Sidebar */}
          <div className="sidebar">
            <SideBar />
          </div>
        
          {/* Content Area */}
          <div className="content">
            <div className="booking-detail">
              <h1 className="mb-4">Tickets/Bookings</h1>
              {/* Tabs Section */}
              <ul className="nav nav-tabs tickets-booking" id="ticketTabs" role="tablist">
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
                    <i className="fas fa-plane"></i> Past Itinerary
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
                    <i className="fas fa-bed"></i> Future Itinerary
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
                    <i className="fas fa-umbrella-beach"></i> Current Itinerary
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="ticketTabsContent">
                {/* Flights Tab */}
                <div className="tab-pane fade show active" id="flights" role="tabpanel" aria-labelledby="flights-tab">
                  <div className="ticket-card row">
                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                      <img src={IntineraryImage} alt="Airline Logo" />
                    </div>
                    <div className="col-md-10">
                      <div className="col-md-12">Title</div>
                      <div className="col-md-12">Content</div>
                      <div className="col-md-12">List</div>
                      <div className="col-md-12">Button</div>
                    </div>
                  </div>
                </div>

                {/* Stays Tab */}
                <div className="tab-pane fade" id="stays" role="tabpanel" aria-labelledby="stays-tab">
                  <p>No stays available at the moment.</p>
                </div>

                {/* Activities Tab */}
                <div className="tab-pane fade" id="activities" role="tabpanel" aria-labelledby="activities-tab">
                  <p>No activities available at the moment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>      
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default Intinery;
