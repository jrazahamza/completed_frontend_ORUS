import React from 'react'
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
// import start from './images/1star.png';
// import activities1 from './images/activities-1.png';
// import activities2 from './images/activities-2.png';
// import activities3 from './images/activities-3.png';
// import activities4 from './images/activities-4.png';
// import activities5 from './images/activities-5.png';
// import activities6 from './images/activities-6.png';
// import activities7 from './images/activities-7.png';
import activitiesCard from './images/activities-card-img.png';
import activitiesSuggest from './images/activities-suggest-card.png';
import yourTravel  from './images/your-travel-ai-ass.png';
import playStore  from './images/play-store-btn.png';
import appStore  from   './images/app-store.png' ;
// import activitiesTicket from './images/activities-ticket-card-img.png';
// import afterEnd from './images/after-tickets-card-img.png';
// import appStore from './images/app-store';
// import banner from './images/banner-bg.png';
// import before from './images/before-footer-bg.png';
// import bookingDetail from './images/booking-details-card-img.png';
// import bookingEmira from './images/booking-emira-card-img.png';
// import cartImage from './images/cart-img-2.png';
import { Link } from 'react-router-dom';
const  Header= () => {
  return (
    <header class="">
    {/* <!-- Navigation Bar --> */}
    <div class="container ">
        {/* <!-- Navigation Bar --> */}
        <nav class="navbar navbar-expand-lg navbar-custom">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src={orusLogo} alt="Logo"/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                    <ul class="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/Hotel-Listining">Create Your Trip</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/HotelDetailing">Discover</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/hotelCheckout">About</Link>
                        </li>
                        <li class="dropdown">
                            <Link class="btn dropdown-toggle drop-down-more" to="#" role="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">                                
                                More
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="languageDropdown">
                                <li><Link class="dropdown-item" to="/ItinerarySuggestions">Itenrary sugestion</Link></li>
                                <li><Link class="dropdown-item" to="/IntinaryCreated">Itenrary Created</Link></li>
                                <li><Link class="dropdown-item" to="/Flights">Flights Listing</Link></li>
                                <li><Link class="dropdown-item" to="/Questions">Questions</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center">
                        {/* <!-- Language Dropdown --> */}
                        <div class="dropdown me-3">
                            <Link class="btn dropdown-toggle" to="#" role="button" id="languageDropdown"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="flag-icon"><img
                                        src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
                                        alt="Flag" height="20"/></span>
                                English
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="languageDropdown">
                                <li><Link class="dropdown-item" to="#">English</Link></li>
                                <li><Link class="dropdown-item" to="#">Español</Link></li>
                            </ul>
                        </div>
                        <span class="drop-devider"><svg xmlns="http://www.w3.org/2000/svg" width="3" height="21"
                                viewBox="0 0 3 21" fill="none">
                                <rect x="0.919922" y="0.494629" width="2" height="19.8" fill="white"
                                    fill-opacity="0.3" />
                            </svg></span>
                        {/* <!-- Currency Dropdown --> */}
                        <div class="dropdown currency-dropdown me-3">
                            <Link class="btn dropdown-toggle" to="#" role="button" id="currencyDropdown"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                USD
                            </Link>
                            <ul class="dropdown-menu" aria-labelledby="currencyDropdown">
                                <li><Link class="dropdown-item" to="#">USD</Link></li>
                                <li><Link class="dropdown-item" to="#">EUR</Link></li>
                            </ul>
                        </div>
                        <span class="drop-devider"><svg xmlns="http://www.w3.org/2000/svg" width="3" height="21"
                                viewBox="0 0 3 21" fill="none">
                                <rect x="0.919922" y="0.494629" width="2" height="19.8" fill="white"
                                    fill-opacity="0.3" />
                            </svg></span>
                        {/* <!-- User Avatar --> */}
                        <div class="user-avatar me-3">
                          <Link to='/Customerintinary'> <img src={orusAvatar} alt="User Avatar"/></Link>
                        </div>

                        {/* <!-- Button --> */}
                        <Link class="btn btn-custom" to="#">Get The App</Link>
                    </div>
                </div>
            </div>
        </nav>
        </div>

</header>

  )
}

export default Header