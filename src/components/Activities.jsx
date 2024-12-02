import React, { useState } from 'react'
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
import yourTravel from './images/your-travel-ai-ass.png';
import playStore from './images/play-store-btn.png';
import appStore from './images/app-store.png';
import { Link } from 'react-router-dom';
import NavigationalHeader from './NavigationalHeader';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './Footer';
// import activitiesTicket from './images/activities-ticket-card-img.png';
// import afterEnd from './images/after-tickets-card-img.png';
// import appStore from './images/app-store';
// import banner from './images/banner-bg.png';
// import before from './images/before-footer-bg.png';
// import bookingDetail from './images/booking-details-card-img.png';
// import bookingEmira from './images/booking-emira-card-img.png';
// import cartImage from './images/cart-img-2.png';




const Activities = () => {
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
            <NavigationalHeader />
            <div class="hotel-listing-main">
                <div class="container">
                    <section class="hotel-sec-1">

                        <div class="row">
                            <div class="col-lg-3 col-md-3 hotel-listing-left-sec">
                                <div class="g-map">
                                    <img src={googleMaps} alt="" />
                                </div>
                                <div class="filter-section">
                                    <h2 class="filter-heading">Filters</h2>
                                    {/* <!-- Price Filter --> */}
                                    <div class="filter-options">
                                        <div class="filter-title">Price</div>
                                        <input type="range" class="form-range price-slider" id="priceRange" min="50" max="1200" step="10" value="50" />
                                        <div class="price-range">
                                            <span>$50</span>
                                            <span>$1200</span>
                                        </div>
                                    </div>

                                    {/* <!-- Search Property --> */}
                                    <div class="filter-options">
                                        <div class="filter-title">Search Property</div>
                                        <input type="text" class="form-control" placeholder="Search Property by Name" />
                                    </div>
                                    <hr />
                                    {/* <!-- Rating Filter --> */}
                                    <div class="filter-options">
                                        <div class="filter-title">Rating</div>
                                        <div class="rating-buttons">
                                            <button class="btn btn-sm">0</button>
                                            <button class="btn btn-sm">1+</button>
                                            <button class="btn btn-sm">2+</button>
                                            <button class="btn btn-sm">3+</button>
                                            <button class="btn btn-sm">4+</button>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* <!-- Amenities Filter --> */}
                                    <div class="filter-options">
                                        <div class="filter-title">Amenities</div>
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
                                    {/* <!-- Freebies Filter --> */}
                                    <div class="filter-options">
                                        <div class="filter-title">Freebies</div>
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
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="pool" />
                                            <label class="form-check-label" for="pool">Free cancellation</label>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* <!-- Payment type --> */}
                                    <div class="filter-options">
                                        <div class="filter-title">Freebies</div>
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
                                    {/* <!-- Property cancellation options --> */}
                                    <div class="filter-options">
                                        <div class="filter-title">Property cancellation options</div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="fitness" />
                                            <label class="form-check-label" for="fitness">Fully refundable property</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="pool" />
                                            <label class="form-check-label" for="pool">NON refundable property</label>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* <!-- Traveler experience --> */}
                                    <div class="filter-options">
                                        <div class="filter-title">Traveler experience</div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="fitness" />
                                            <label class="form-check-label" for="fitness">Eco-certified</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="pool" />
                                            <label class="form-check-label" for="pool">Business friendly</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="fitness" />
                                            <label class="form-check-label" for="fitness">Family friendlylabel</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="pool" />
                                            <label class="form-check-label" for="pool">LGBTQ welcoming</label>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* <!-- Accessibility --> */}
                                    <div class="filter-options">
                                        <div class="filter-title">Accessibility</div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="pool" />
                                            <label class="form-check-label" for="pool">Elevator</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="fitness" />
                                            <label class="form-check-label" for="fitness">Service animals allowed</label>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div class="col-lg-9 col-md-9">

                                {/* <!-- Row 1: Tabs --> */}
                                <div class="row">
                                    <div class="col-12">
                                        <div class="hotel-list-tabs">
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item">
                                                    <Link class="nav-link active" id="hotels-tab" data-bs-toggle="tab" to="#hotels"
                                                        role="tab" aria-controls="hotels" aria-selected="true">
                                                        Our Top Pick <br /><span class="sub-tabs">257 places</span>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class="nav-link" id="motels-tab" data-bs-toggle="tab" to="#motels" role="tab"
                                                        aria-controls="motels" aria-selected="false">
                                                        Motels <br /><span class="sub-tabs">51 places</span>
                                                    </Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link class="nav-link" id="resorts-tab" data-bs-toggle="tab" to="#resorts" role="tab"
                                                        aria-controls="resorts" aria-selected="false">
                                                        Resorts <br /><span class="sub-tabs">72 places</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Row 2: Filters and Sort --> */}
                                <div class="row my-4">
                                    <div class="col-md-6">
                                        <p>Showing 4 of 257 places</p>
                                    </div>
                                    <div class="col-md-6 text-md-end">
                                        <div class="dropdown">
                                            <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Sort by Price
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><Link class="dropdown-item" to="#">Low to High</Link></li>
                                                <li><Link class="dropdown-item" to="#">High to Low</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Row 3: Listings and Suggested Section --> */}
                                <div class="tab-content" id="myTabContent">
                                    {/* <!-- Hotels Tab Content --> */}
                                    <div class="tab-pane fade show active" id="hotels" role="tabpanel" aria-labelledby="hotels-tab">
                                        <div class="row">
                                            {/* <!-- Left side: Hotel Listings --> */}
                                            <div class="col-md-8">
                                                {/* <!-- Hotel Card --> */}
                                                <div class="hotel-listing-card">
                                                    <div class="card">
                                                        <div class="row g-0 ruk-card-content">
                                                            <div class="col-md-4 hotel-img">
                                                                <img src={activitiesCard} class="img-fluid rounded-start"
                                                                    alt="Hotel Image" />
                                                            </div>
                                                            <div class="col-md-8">
                                                                <div class="card-content-right">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">CVK Park Bosphorus Hotel Istanbul</h5>
                                                                        <span class="sh-on-map"><Link to="#">Show On Map</Link></span>
                                                                        <p class="card-text">
                                                                            <small class="text-muted cart-list"><span class="svg-icon">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                                </svg></span> Free Cancellation anytime <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                                </svg><span>No</span>
                                                                                Upfront</small><br />
                                                                        </p>
                                                                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                                                    </div>
                                                                    <div class="card-buttom d-flex justify-content-between">
                                                                        <p class="card-text"><span class="Start-from">
                                                                            Starting from </span><span class="text-dangerr">$240/night</span>
                                                                        </p>
                                                                        <Link to='/ActivitiesDetails'> <button class="btn btn-book">Book Now</button></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="row g-0 ruk-card-content">
                                                            <div class="col-md-4 hotel-img">
                                                                <img src={activitiesCard} class="img-fluid rounded-start"
                                                                    alt="Hotel Image" />
                                                            </div>
                                                            <div class="col-md-8">
                                                                <div class="card-content-right">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">CVK Park Bosphorus Hotel Istanbul</h5>
                                                                        <span class="sh-on-map"><Link to="#">Show On Map</Link></span>
                                                                        <p class="card-text">
                                                                            <small class="text-muted cart-list"><span class="svg-icon">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                                </svg></span> Free Cancellation anytime <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                                </svg><span /> No
                                                                                Upfront</small><br />
                                                                        </p>
                                                                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                                                    </div>
                                                                    <div class="card-buttom d-flex justify-content-between">
                                                                        <p class="card-text"><span class="Start-from">
                                                                            Starting from </span><span class="text-dangerr">$240/night</span>
                                                                        </p>
                                                                        <Link to='/ActivitiesDetails'> <button class="btn btn-book">Book Now</button></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="row g-0 ruk-card-content">
                                                            <div class="col-md-4 hotel-img">
                                                                <img src={activitiesCard} class="img-fluid rounded-start"
                                                                    alt="Hotel Image" />
                                                            </div>
                                                            <div class="col-md-8">
                                                                <div class="card-content-right">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">CVK Park Bosphorus Hotel Istanbul</h5>
                                                                        <span class="sh-on-map"><Link to="#">Show On Map</Link></span>
                                                                        <p class="card-text">
                                                                            <small class="text-muted cart-list"><span class="svg-icon">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                                </svg></span> Free Cancellation anytime <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                                </svg><span /> No
                                                                                Upfront</small><br />
                                                                        </p>
                                                                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                                                    </div>
                                                                    <div class="card-buttom d-flex justify-content-between">
                                                                        <p class="card-text"><span class="Start-from">
                                                                            Starting from </span><span class="text-dangerr">$240/night</span>
                                                                        </p>
                                                                        <Link to='/ActivitiesDetails'> <button class="btn btn-book">Book Now</button></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="row g-0 ruk-card-content">
                                                            <div class="col-md-4 hotel-img">
                                                                <img src={activitiesCard} class="img-fluid rounded-start"
                                                                    alt="Hotel Image" />
                                                            </div>
                                                            <div class="col-md-8">
                                                                <div class="card-content-right">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">CVK Park Bosphorus Hotel Istanbul</h5>
                                                                        <span class="sh-on-map"><Link to="#">Show On Map</Link></span>
                                                                        <p class="card-text">
                                                                            <small class="text-muted cart-list" /><span class="svg-icon">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                                </svg></span> Free Cancellation anytime <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                            </svg><span /> No
                                                                            Upfront<small /><br />
                                                                        </p>
                                                                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                                                    </div>
                                                                    <div class="card-buttom d-flex justify-content-between">
                                                                        <p class="card-text"><span class="Start-from">
                                                                            Starting from </span><span class="text-dangerr">$240/night</span>
                                                                        </p>
                                                                        <Link to='/ActivitiesDetails'> <button class="btn btn-book">Book Now</button></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="row g-0 ruk-card-content">
                                                            <div class="col-md-4 hotel-img">
                                                                <img src={activitiesCard} class="img-fluid rounded-start"
                                                                    alt="Hotel Image" />
                                                            </div>
                                                            <div class="col-md-8">
                                                                <div class="card-content-right">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">CVK Park Bosphorus Hotel Istanbul</h5>
                                                                        <span class="sh-on-map"><Link to="#">Show On Map</Link></span>
                                                                        <p class="card-text">
                                                                            <small class="text-muted cart-list" /><span class="svg-icon">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                                </svg></span> Free Cancellation anytime <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                            </svg><span /> No
                                                                            Upfront<small /><br />
                                                                        </p>
                                                                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                                                    </div>
                                                                    <div class="card-buttom d-flex justify-content-between">
                                                                        <p class="card-text"><span class="Start-from">
                                                                            Starting from </span><span class="text-dangerr">$240/night</span>
                                                                        </p>
                                                                        <Link to='/ActivitiesDetails'> <button class="btn btn-book">Book Now</button></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="row g-0 ruk-card-content">
                                                            <div class="col-md-4 hotel-img">
                                                                <img src={activitiesCard} class="img-fluid rounded-start"
                                                                    alt="Hotel Image" />
                                                            </div>
                                                            <div class="col-md-8">
                                                                <div class="card-content-right">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">CVK Park Bosphorus Hotel Istanbul</h5>
                                                                        <span class="sh-on-map"><Link to="#">Show On Map</Link></span>
                                                                        <p class="card-text">
                                                                            <small class="text-muted cart-list" /><span class="svg-icon">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                                </svg></span> Free Cancellation anytime <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                            </svg><span /> No
                                                                            Upfront<small /><br />
                                                                        </p>
                                                                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                                                    </div>
                                                                    <div class="card-buttom d-flex justify-content-between">
                                                                        <p class="card-text"><span class="Start-from">
                                                                            Starting from </span><span class="text-dangerr">$240/night</span>
                                                                        </p>
                                                                        <Link to='/ActivitiesDetails'> <button class="btn btn-book">Book Now</button></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="row g-0 ruk-card-content">
                                                            <div class="col-md-4 hotel-img">
                                                                <img src={activitiesCard} class="img-fluid rounded-start"
                                                                    alt="Hotel Image" />
                                                            </div>
                                                            <div class="col-md-8">
                                                                <div class="card-content-right">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">CVK Park Bosphorus Hotel Istanbul</h5>
                                                                        <span class="sh-on-map"><Link to="#">Show On Map</Link></span>
                                                                        <p class="card-text">
                                                                            <small class="text-muted cart-list" /><span class="svg-icon">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                                </svg></span> Free Cancellation anytime <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F" />
                                                                            </svg><span /> No
                                                                            Upfront<small /><br />
                                                                        </p>
                                                                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                                                                    </div>
                                                                    <div class="card-buttom d-flex justify-content-between">
                                                                        <p class="card-text"><span class="Start-from">
                                                                            Starting from </span><span class="text-dangerr">$240/night</span>
                                                                        </p>
                                                                        <Link to='/ActivitiesDetails'> <button class="btn btn-book">Book Now</button></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-more">
                                                        <Link to="#" class="btn btn-warning btn-lg">View More<span class="ms-2"><img src="images/under-btn-icon.png" alt="" /></span></Link>
                                                    </div>
                                                </div>
                                                {/* <!-- Repeat more cards as needed --> */}
                                            </div>

                                            {/* <!-- Right side: Suggested Section --> */}
                                            <div class="col-md-4">
                                                <div class="suggested-section">
                                                    <h6 class="sugested-h6">Suggested By ORUS</h6>
                                                    <div class="suggested-box">
                                                        <div class="hotel-card-right">
                                                            <img src={activitiesSuggest} alt="Hotel Image" />
                                                            <div class="hotel-card-body">
                                                                <div class="d-flex justify-content-between align-items-center">
                                                                    <div class="suggested">Suggested</div>
                                                                    <div class="hotel-rating">4.8 <span class="text-danger">★</span></div>
                                                                </div>
                                                                <div class="hotel-name">CVK Park Bosphorus Hotel Istanbul</div>
                                                                <div class="hotel-features">
                                                                    <small class="text-muted cart-list"><span class="svg-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F"></path>
                                                                        </svg></span> Free Cancellation anytime <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F"></path>
                                                                        </svg> No Upfront</small>
                                                                </div>
                                                                <div class="d-flex justify-content-between align-items-center">
                                                                    <div class="hotel-price">
                                                                        <span class="st-from">Starting from </span><span class="text-dangerr">$240/night</span>

                                                                    </div>
                                                                    <Link to="#" class="view-details">View Details</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="advertisement p-3">
                                                            <h6 class="advertisement-h">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h6>
                                                            <p class="advertisement-p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
                                                            <button class="btn btn-advertisement">Show Details</button>
                                                        </div>
                                                        <div class="hotel-card-right">
                                                            <img src={activitiesSuggest} alt="Hotel Image" />
                                                            <div class="hotel-card-body">
                                                                <div class="d-flex justify-content-between align-items-center">
                                                                    <div class="suggested">Suggested</div>
                                                                    <div class="hotel-rating">4.8 <span class="text-danger">★</span></div>
                                                                </div>
                                                                <div class="hotel-name">CVK Park Bosphorus Hotel Istanbul</div>
                                                                <div class="hotel-features">
                                                                    <small class="text-muted cart-list"><span class="svg-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F"></path>
                                                                        </svg></span> Free Cancellation anytime <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F"></path>
                                                                        </svg> No Upfront</small>
                                                                </div>
                                                                <div class="d-flex justify-content-between align-items-center">
                                                                    <div class="hotel-price">
                                                                        <span class="st-from">Starting from </span><span class="text-dangerr">$240/night</span>

                                                                    </div>
                                                                    <Link to="#" class="view-details">View Details</Link>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div class="ai-assistant-container">
                                                            <div class="expand-btn">
                                                                <i class="bi bi-arrow-up-right"></i>
                                                            </div>
                                                            <div class="ai-assistant-logo">
                                                          <Link to='/ChatbotInterface'><img src={yourTravel} alt="AI Assistant Logo" /></Link>
                                                            </div>
                                                            <h2 class="ai-assistant-heading">Your Travel AI Assistant</h2>

                                                            <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10">
                                                                <h1 className="text-3xl font-bold mb-6 text-indigo-600"> Prompt Suggestion</h1>
                                                                <form
                                                                    onSubmit={handlePromptSubmit}
                                                                    className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
                                                                >
                                                                    <label
                                                                        htmlFor="prompt"
                                                                        className="block text-sm font-medium text-gray-700"
                                                                    >
                                                                        Enter your prompt:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        id="prompt"
                                                                        value={prompt}
                                                                        onChange={(e) => setPrompt(e.target.value)}
                                                                        placeholder="Type your query..."
                                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                        required
                                                                    />
                                                                    <button
                                                                        type="submit"
                                                                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        Get Suggestions
                                                                    </button>
                                                                </form>

                                                                <div className="w-full max-w-2xl mt-8">
                                                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Suggestions:</h2>
                                                                    {suggestions.length > 0 ? (
                                                                        <div className="grid gap-4">
                                                                            {suggestions.map((item) => (
                                                                                <div
                                                                                    key={item.id}
                                                                                    className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                                                                                >
                                                                                    <h3 className="text-lg font-bold text-indigo-700">
                                                                                        {item.title}
                                                                                    </h3>
                                                                                    <p className="text-sm text-gray-600">{item.description}</p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    ) : (
                                                                        <p className="text-gray-500 text-center">No suggestions available. Try another prompt!</p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Motels Tab Content --> */}
                                        <div class="tab-pane fade" id="motels" role="tabpanel" aria-labelledby="motels-tab">
                                            <div class="row">
                                                <div class="col-md-8">
                                                    {/* <!-- Add motel-specific cards here --> */}
                                                    <div class="card mb-3">
                                                        <div class="row g-0">
                                                            <div class="col-md-4">
                                                                <img src="motel-image.jpg" class="img-fluid rounded-start"
                                                                    alt="Motel Image" />
                                                            </div>
                                                            <div class="col-md-8">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Sunrise Motel</h5>
                                                                    <p class="card-text">
                                                                        <small class="text-muted">Free WiFi • No Pets</small><br />
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    </p>
                                                                    <p class="card-text">
                                                                        Starting from <span class="text-danger">$150/night</span>
                                                                    </p>
                                                                    <button class="btn btn-warning">Book Now</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-4">
                                                    {/* <!-- Same suggested section for Motels tab --> */}
                                                    <div class="suggested-section">
                                                        <h6 class="text-warning">Suggested By ORUS</h6>
                                                        <div class="card mb-3">
                                                            <img src="motel-suggested.jpg" class="card-img-top" alt="Suggested Motel" />
                                                            <div class="card-body">
                                                                <h5 class="card-title">Sunrise Motel</h5>
                                                                <p class="card-text">Free WiFi • No Pets</p>
                                                                <p class="card-text">Starting from <span
                                                                    class="text-danger">$150/night</span></p>
                                                                <Link to="#" class="btn btn-link">View Details</Link>
                                                            </div>
                                                        </div>
                                                        <div class="advertisement bg-warning p-3 text-center">
                                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                                                            <button class="btn btn-light">Show Details</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Resorts Tab Content --> */}
                                        <div class="tab-pane fade" id="resorts" role="tabpanel" aria-labelledby="resorts-tab">
                                            <div class="row">
                                                <div class="col-md-8">
                                                    {/* <!-- Add resort-specific cards here --> */}
                                                    <div class="card mb-3">
                                                        <div class="row g-0">
                                                            <div class="col-md-4">
                                                                <img src="resort-image.jpg" class="img-fluid rounded-start"
                                                                    alt="Resort Image" />
                                                            </div>
                                                            <div class="col-md-8">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Tropical Resort</h5>
                                                                    <p class="card-text">
                                                                        <small class="text-muted">All Inclusive • Beach
                                                                            Access</small><br />
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    </p>
                                                                    <p class="card-text">
                                                                        Starting from <span class="text-danger">$350/night</span>
                                                                    </p>
                                                                    <button class="btn btn-warning">Book Now</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-4">
                                                    {/* <!-- Same suggested section for Resorts tab --> */}
                                                    <div class="suggested-section">
                                                        <h6 class="text-warning">Suggested By ORUS</h6>
                                                        <div class="card mb-3">
                                                            <img src="resort-suggested.jpg" class="card-img-top" alt="Suggested Resort" />
                                                            <div class="card-body">
                                                                <h5 class="card-title">Tropical Resort</h5>
                                                                <p class="card-text">All Inclusive • Beach Access</p>
                                                                <p class="card-text">Starting from <span
                                                                    class="text-danger">$350/night</span></p>
                                                                <Link to="#" class="btn btn-link">View Details</Link>
                                                            </div>
                                                        </div>
                                                        <div class="advertisement bg-warning p-3 text-center">
                                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                                                            <button class="btn btn-light">Show Details</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Footer Section --> */}
                                </div>
                            </div>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Activities;