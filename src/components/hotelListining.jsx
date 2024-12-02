import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import NavigationalHeader from "./NavigationalHeader";
import googleMap from "../Images/goole-map.png";
import FlightComponents from "./flightComponents";
import Carlo from '../Images/right-side-card-flight-between.png'
import HotelComponents from './HotelComponents';
import RightSide from '../Images/right-side-card-img.png'


const HotelListening = () => {

    // PROMPT HANDLING
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



    // FILTER METHOD
    const [priceRange, setPriceRange] = useState(50);
    const [selectedRating, setSelectedRating] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState({
        frontDesk: false,
        airConditioned: false,
        fitness: false,
        pool: false,
    });
    const [searchQuery, setSearchQuery] = useState("");
    const hotels = [
        { name: "CVK Park Bosphorus Hotel", price: 150, rating: 4, amenities: ["frontDesk", "fitness"] },
        { name: "Ritz Carlton", price: 500, rating: 5, amenities: ["airConditioned", "pool"] },
        { name: "Four Seasons", price: 300, rating: 4, amenities: ["frontDesk", "pool"] },
        { name: "Shangri-La", price: 700, rating: 5, amenities: ["fitness", "airConditioned"] },
    ];


    const filteredHotels = hotels.filter(hotel => {
        const withinPriceRange = hotel.price <= priceRange;
        const matchesRating = selectedRating.length === 0 || selectedRating.includes(hotel.rating);
        const matchesAmenities = Object.keys(selectedAmenities).every(amenity => {
            return !selectedAmenities[amenity] || hotel.amenities.includes(amenity);
        })

        const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase());
        return withinPriceRange && matchesRating && matchesAmenities && matchesSearch;
    });

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
                    {/* Left Column - Filters */}
                    <aside className="col-md-3">
                        <div className="filter-section">
                            <h2 className="filter-heading">Filters</h2>

                            {/* Price Filter */}
                            <div className="filter-options">
                                <div className="filter-title">Price per Person</div>
                                <input
                                    type="range"
                                    className="form-range price-slider"
                                    min="50"
                                    max="1200"
                                    step="10"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                />
                                <div className="price-range">
                                    <span>$50</span>
                                    <span>{`$${priceRange}`}</span>
                                </div>
                            </div>

                            {/* Rating Filter */}
                            <div className="filter-options">
                                <div className="filter-title">Rating</div>
                                <div className="rating-buttons">
                                    {[...Array(5)].map((_, index) => (
                                        <button
                                            key={index}
                                            className={`btn btn-sm ${selectedRating.includes(index + 1) ? 'btn-primary' : 'btn-outline-primary'}`}
                                            onClick={() => {
                                                if (selectedRating.includes(index + 1)) {
                                                    setSelectedRating(selectedRating.filter(rating => rating !== index + 1));
                                                } else {
                                                    setSelectedRating([...selectedRating, index + 1]);
                                                }
                                            }}
                                        >
                                            {index + 1}+
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Amenities Filter */}
                            <div className="filter-options">
                                <div className="filter-title">Amenities</div>
                                {["frontDesk", "airConditioned", "fitness", "pool"].map((amenity) => (
                                    <div key={amenity} className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={selectedAmenities[amenity]}
                                            onChange={(e) => {
                                                setSelectedAmenities({
                                                    ...selectedAmenities,
                                                    [amenity]: e.target.checked,
                                                });
                                            }}
                                        />
                                        <label className="form-check-label">{amenity}</label>
                                    </div>
                                ))}
                            </div>

                            {/* Search Filter */}
                            <div className="filter-options">
                                <div className="filter-title">Search Hotel</div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Hotel by Name"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    </aside>

                    {/* Middle Column - Hotel Listings */}
                    <main className="col-md-9">
                        <div className="row">
                            {filteredHotels.length === 0 ? (
                                <p>No hotels found based on your filters.</p>
                            ) : (
                                filteredHotels.map((hotel, index) => (
                                    <div key={index} className="col-md-4">
                                        <div className="hotel-listing-card">
                                            <div className="card p-3">
                                                <HotelComponents hotel={hotel} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
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
                                            src={RightSide}
                                            alt="Suggestion"
                                            className="rounded me-2"
                                        />
                                        <div class="col-md-8">
                                            <div class="card-content-right">
                                                <div class="card-body">
                                                    <h5 class="card-title">CVK Park Bosphorus Hotel Istanbul</h5>
                                                    <span class="sh-on-map"><a href="#">Show On Map</a></span>
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
                                                    <button class="btn btn-book">Book Now</button>
                                                </div>
                                            </div>
                                        </div>
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

            <Footer />
        </>
    )
}



export default HotelListening;