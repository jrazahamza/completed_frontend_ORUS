import React, { useState } from 'react';
import './css/custumer-profile.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import fbImage from './images/fb.png';
import insImage from './images/ins.png';
import piImage from './images/pi.png';
import twImage from './images/tw.png';
import footerLogo from './images/ours-footer-logo.png';
import orusLogo from './images/ours-logo.png';
import orusAvatar from './images/user-icon.png';
import googleMaps from './images/goole-map.png';
// import start from './images/1star.png';
// import activities1 from './images/activities-1.png';
// import activities2 from './images/activities-2.png';
// import activities3 from './images/activities-3.png';
// import activities4 from './images/activities-4.png';
// import activities5 from './images/activities-5.png';
// import activities6 from './images/activities-6.png';
// import activities7 from './images/activities-7.png';
// import activitiesCard from './images/activities-card-img.png';
// import activitiesSuggest from './images/activities-suggest-card.png';
// import yourTravel  from './images/your-travel-ai-ass.png';
// import playShrefre  from './images/play-shrefre-btn.png';
// import appShrefre  from   './images/app-shrefre.png' ;
// import activitiesTicket from './images/activities-ticket-card-img.png';
// import afterEnd from './images/after-tickets-card-img.png';
// import appShrefre from './images/app-shrefre';
// import banner from './images/banner-bg.png';
// import before from './images/before-footer-bg.png';
// import bookingDetail from './images/booking-details-card-img.png';
// import bookingEmira from './images/booking-emira-card-img';
import { Link } from 'react-router-dom';
import FlightOffersModal from './SearchFlight';

const NavigationalHeader = () => {
    return (
        <header className="hotel-listing">
            <div className="bg">
                {/* Navigation Bar */}
                <div className="container banner-section">
                    <nav className="navbar navbar-expand-lg navbar-cushrefm">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="activities">
                                <img src={orusLogo} alt="Logo" />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarContent"
                                aria-controls="navbarContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarContent">
                                <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Hotel-Listining">Create Your Trip</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/HotelDetailing">Discover</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/Hotel-hotelCheckout">About</a>
                                    </li>
                                    <li className="dropdown">
                                        <a className="btn dropdown-toggle drop-down-more" href="#" role="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            More
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                                            <li><Link className="dropdown-item" to="/ItinerarySuggestions">Itinerary Suggestion</Link></li>
                                            <li><Link className="dropdown-item" to="/IntinaryCreated">Itinerary Created</Link></li>
                                            <li><Link className="dropdown-item" to="/Flights">Flights Listing</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="d-flex align-items-center">
                                    {/* Language Dropdown */}
                                    <div className="dropdown me-3">
                                        <a className="btn dropdown-toggle" href="#" role="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="flag-icon"><img src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png" alt="Flag" height="20" /></span>
                                            English
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                                            <li><a className="dropdown-item" href="#">English</a></li>
                                            <li><a className="dropdown-item" href="#">Español</a></li>
                                        </ul>
                                    </div>
                                    <span className="drop-devider"><svg xmlns="http://www.w3.org/2000/svg" width="3" height="21" viewBox="0 0 3 21" fill="none">
                                        <rect x="0.919922" y="0.494629" width="2" height="19.8" fill="white" fill-opacity="0.3" />
                                    </svg></span>
                                    {/* Currency Dropdown */}
                                    <div className="dropdown currency-dropdown me-3">
                                        <a className="btn dropdown-toggle" href="#" role="button" id="currencyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            USD
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
                                            <li><a className="dropdown-item" href="#">USD</a></li>
                                            <li><a className="dropdown-item" href="#">EUR</a></li>
                                        </ul>
                                    </div>
                                    <span className="drop-devider"><svg xmlns="http://www.w3.org/2000/svg" width="3" height="21" viewBox="0 0 3 21" fill="none">
                                        <rect x="0.919922" y="0.494629" width="2" height="19.8" fill="white" fill-opacity="0.3" />
                                    </svg></span>
                                    {/* User Avatar */}
                                    <div className="user-avatar me-3">
                                    <Link to='/Customerintinary'>  <img src={orusAvatar} alt="User Avatar" /></Link>
                                    </div>
                                    {/* Button */}
                                    <a className="btn btn-cushrefm" href="#">Get The App</a>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Banner Content */}
                    <div className="banner-content">
                        <h1 className="banner-headeing">Lorem Ipsum</h1>
                        <p className="banner-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>

                    <div className="banner-table">
                        <div className="booking-section">
                            {/* Tabs for different options (Flights, Stays, etc.) */}
                            <ul className="nav nav-tabs mb-3" id="bookingTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="flights-tab" data-bs-toggle="tab" href="#flights" role="tab" aria-controls="flights" aria-selected="true">
                                        <i className="fa fa-plane" aria-hidden="true"></i> Flights
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="stays-tab" data-bs-toggle="tab" href="#stays" role="tab" aria-controls="stays" aria-selected="false">
                                        <i className="fa fa-bed" aria-hidden="true"></i> Stays
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="activities-tab" data-bs-toggle="tab" href="#activities" role="tab" aria-controls="activities" aria-selected="false">
                                        <i className="fas fa-binoculars"></i> Activities
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="cabs-tab" data-bs-toggle="tab" href="#cabs" role="tab" aria-controls="cabs" aria-selected="false">
                                        <i className="fa fa-car" aria-hidden="true"></i> Cabs
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="offers-tab" data-bs-toggle="tab" href="#offers" role="tab" aria-controls="offers" aria-selected="false">
                                        <i className="fa fa-gift" aria-hidden="true"></i> Offers
                                    </a>
                                </li>
                            </ul>

                            {/* Tab Content */}
                            <div className="tab-content" id="bookingTabContent">
                                <div className="tab-pane fade show active" id="flights" role="tabpanel" aria-labelledby="flights-tab">
                                    <div className="container search-section">
                                        <form >
                                            <div class="tab-pane flights-tabs fade show active" id="flights" role="tabpanel"
                                                aria-labelledby="flights-tab">
                                                <div class="row flights-content align-items-center tabs-divider">
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label"><i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            From</div>
                                                        <div class="location-value">Warsaw, Poland</div>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label"><i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            To</div>
                                                        <div class="location-value">Paris, France</div>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label"><i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                                                            Departure</div>
                                                        <div class="date-value">12 Jan, 2024</div>
                                                        <div class="input-group mb-3">
                                                            <input type="date" class="form-control" placeholder="Paris , France"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label"><i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                                                            Return</div>
                                                        <div class="date-value">19 Jan, 2024</div>
                                                        <div class="input-group mb-3">
                                                            <input type="date" class="form-control" placeholder="Paris , France"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                                                        <span class="promo-code-link">+ Add Promo Code</span>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                                                 <FlightOffersModal/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="stays" role="tabpanel" aria-labelledby="stays-tab">
                                    <div className="container search-section">
                                        <form action="#">
                                            <div class="tab-pane flights-tabs fade show active" id="stays" role="tabpanel"
                                                aria-labelledby="flights-tab">
                                                <div class="row flights-content align-items-center tabs-divider">
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label"><i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            From</div>
                                                        <div class="location-value">Warsaw, Poland</div>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label"><i class="fa fa-calendar" aria-hidden="true"></i>
                                                            Check In</div>
                                                        <div class="date-value">12 Jan, 2024</div>
                                                        <div class="input-group mb-3">
                                                            <input type="date" class="form-control" placeholder="Paris , France"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label"><i class="fa fa-calendar" aria-hidden="true"></i>
                                                            Check Out</div>
                                                        <div class="date-value">19 Jan, 2024</div>
                                                        <div class="input-group mb-3">
                                                            <input type="date" class="form-control" placeholder="Paris , France"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label"><i class="fa fa-users" aria-hidden="true"></i>
                                                            Travelers</div>
                                                        <div class="travelers-value">2 adults · 0 children · 1 room</div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                                                        <span class="promo-code-link">+ Add Promo Code</span>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                                                        <button class="btn show-hotels-btn">Search Flights</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="activities" role="tabpanel" aria-labelledby="activities-tab">
                                    <div className="container search-section">
                                        <form action="#">
                                            <div class="tab-pane flights-tabs fade show active" id="activities" role="tabpanel"
                                                aria-labelledby="flights-tab">
                                                <div class="row flights-content align-items-center tabs-divider">
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label">Location</div>
                                                        <div class="location-value">Warsaw, Poland</div>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label">Activity Date</div>
                                                        <div class="date-value">12 Jan, 2024</div>
                                                        <div class="input-group mb-3">
                                                            <input type="date" class="form-control" placeholder="Paris , France"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label">Participants</div>
                                                        <div class="travelers-value">2 adults</div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                                                        <span class="promo-code-link">+ Add Promo Code</span>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                                                        <button class="btn show-hotels-btn">Search Flights</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="cabs" role="tabpanel" aria-labelledby="cabs-tab">
                                    <div className="container search-section">
                                        <form action="#">
                                            <div class="tab-pane flights-tabs fade show active" id="cabs" role="tabpanel"
                                                aria-labelledby="flights-tab">
                                                <div class="row flights-content align-items-center tabs-divider">
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label">Pick-up Location</div>
                                                        <div class="location-value">Warsaw, Poland</div>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label">Drop-off Location</div>
                                                        <div class="location-value">Krakow, Poland</div>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label">Pick-up Date</div>
                                                        <div class="date-value">12 Jan, 2024</div>
                                                        <div class="input-group mb-3">
                                                            <input type="date" class="form-control" placeholder="Paris , France"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                                                        <span class="promo-code-link">+ Add Promo Code</span>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                                                        <button class="btn show-hotels-btn">Search Flights</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="offers" role="tabpanel" aria-labelledby="offers-tab">
                                    <div className="container search-section">
                                        <form action="#">
                                            <div class="tab-pane flights-tabs fade show active" id="flights" role="tabpanel"
                                                aria-labelledby="flights-tab">
                                                <div class="row flights-content align-items-center tabs-divider">
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label">Offer Location</div>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control" placeholder="Paris , France"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3">
                                                        <div class="input-label">Offer Date</div>
                                                        <div class="input-group mb-3">
                                                            <input type="date" class="form-control" placeholder="Paris , France"
                                                                aria-describedby="basic-addon2" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                                                        <span class="promo-code-link">+ Add Promo Code</span>
                                                    </div>
                                                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                                                     <Link to='/FlightOffers'>   <button class="btn show-hotels-btn">Search Flights</button></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavigationalHeader;
