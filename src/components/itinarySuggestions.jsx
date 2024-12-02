import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Footer from './Footer';
import Icon from '../Images/under-btn-icon.png'
import Itinary from '../Images/itenrary-sugestion-img.png'
import Header from './header';
const ItinerarySuggestions = () => {
  return (
    <>
    <div className="itenrary-body">
      <header className="itenrary-header">
        {/* Navigation Bar */}
        <div className="container banner-section">
          <Header/>

          {/* banner text content */}
          <div className="itenrary-banner-content">
            <div className="date-loca d-flex">
              <p className="date">
                <i className="fa fa-calendar" aria-hidden="true"></i> May 16 - May 19
              </p>
              <p className="banner-loca">
                <i className="fa fa-map-marker" aria-hidden="true"></i> NewYork City
              </p>
            </div>
            <h4 className="itenrary-banner-headeing">New York City for 3 days for a group of friends</h4>
            <div className="banner-btn-gr d-flex">
              <Button variant="link" className="banner-invide-btn">
                <i className="fa fa-user-plus" aria-hidden="true"></i>Invite
              </Button>
              <Button variant="link" className="banner-shair-icon">
                <i className="fa fa-share" aria-hidden="true"></i>
              </Button>
              <Button variant="link" className="banner-setting-icon">
                <i className="fa fa-cog" aria-hidden="true"></i>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="itenrary-sugestion-main-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="100%"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="New York City Map"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-9">
              {/* Tour Information Section */}
              {['Historical Marvels Tour', 'Parks & Amusements Tour', 'Historical Marvels Tour'].map((tour, index) => (
                <div className="tour-info" key={index}>
                  <h4 className="tour-title">{tour}</h4>
                  <p className="tour-details">
                    Embark on a captivating journey through heritage and culture at St. Patrick's Cathedral and Ellis Island.
                  </p>
                  <div className="card-container d-flex">
                    {[1, 2].map((card, index) => (
                      <div className="tour-card" key={index}>
                        <img src={Itinary} className="card-img-top" alt="Tour Image" />
                        <div className="card-body m-3">
                          <div className="title-rating d-flex justify-content-between">
                            <h5 className="card-title">CVK Park Bosphorus Newyork City</h5>
                            <div className="rating">4.8 ★</div>
                          </div>
                          <p className="location">
                            <i className="fa fa-map-marker" aria-hidden="true"></i> Gümüssuyu Mah. Inönü Cad. No:8, Istanbul
                          </p>
                          <p className="category-itenary">Historical</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {/* Create Itinerary Button */}
              <div className="view-more create-itinerary">
             <Link to='/Questions'>   <Button variant="itinerary" size="lg">
                  Create Itinerary
                  <span className="ms-2">
                    <img src={Icon} alt="Icon" />
                  </span>
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ItinerarySuggestions;
