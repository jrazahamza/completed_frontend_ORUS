import React from 'react';
import Image from '../Images/day-2-7.png';  // Ensure this path is correct
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Ensure Bootstrap JS is loaded

const ItineraryAccordion = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="timeline">
                        {/* Timeline Item 1 (Collapsible) */}
                        <div className="timeline-item">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            American Museum of Natural History
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="row g-0">
                                                <div className="col-md-3">
                                                    <img src={Image} className="img-fluid" alt="American Museum" />
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <div className="rating-title d-flex justify-content-between">
                                                            <h5 className="card-title">American Museum of Natural History</h5>
                                                            <p>4.8 ★</p>
                                                        </div>
                                                        <p className="card-text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                            <span className="read-more-btn">Read More</span>
                                                        </p>
                                                        <div className="ctg-time d-flex">
                                                            <p className="category"><i className="fa fa-home" aria-hidden="true"></i> Natural History Museums</p>
                                                            <p className="duration mx-3"><i className="fa fa-clock-o" aria-hidden="true"></i> More than 3 hours</p>
                                                            <p className="dolor">$$</p>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="btn accordion-btn-see-hours">See Hours</button>
                                                            <button className="btn accordion-btn-remove mx-3">Remove</button>
                                                            <button className="btn accordion-edit-btn">Edit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 2 (Collapsible) */}
                        <div className="timeline-item">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            American Museum of Natural History
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="row g-0">
                                                <div className="col-md-3">
                                                    <img src={Image} className="img-fluid" alt="American Museum" />
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <div className="rating-title d-flex justify-content-between">
                                                            <h5 className="card-title">American Museum of Natural History</h5>
                                                            <p>4.8 ★</p>
                                                        </div>
                                                        <p className="card-text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                            <span className="read-more-btn">Read More</span>
                                                        </p>
                                                        <div className="ctg-time d-flex">
                                                            <p className="category"><i className="fa fa-home" aria-hidden="true"></i> Natural History Museums</p>
                                                            <p className="duration mx-3"><i className="fa fa-clock-o" aria-hidden="true"></i> More than 3 hours</p>
                                                            <p className="dolor">$$</p>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="btn accordion-btn-see-hours">See Hours</button>
                                                            <button className="btn accordion-btn-remove mx-3">Remove</button>
                                                            <button className="btn accordion-edit-btn">Edit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 3 (Collapsible) */}
                        <div className="timeline-item">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            American Museum of Natural History
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="row g-0">
                                                <div className="col-md-3">
                                                    <img src={Image} className="img-fluid" alt="American Museum" />
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <div className="rating-title d-flex justify-content-between">
                                                            <h5 className="card-title">American Museum of Natural History</h5>
                                                            <p>4.8 ★</p>
                                                        </div>
                                                        <p className="card-text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                            <span className="read-more-btn">Read More</span>
                                                        </p>
                                                        <div className="ctg-time d-flex">
                                                            <p className="category"><i className="fa fa-home" aria-hidden="true"></i> Natural History Museums</p>
                                                            <p className="duration mx-3"><i className="fa fa-clock-o" aria-hidden="true"></i> More than 3 hours</p>
                                                            <p className="dolor">$$</p>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="btn accordion-btn-see-hours">See Hours</button>
                                                            <button className="btn accordion-btn-remove mx-3">Remove</button>
                                                            <button className="btn accordion-edit-btn">Edit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 4 (Collapsible) */}
                        <div className="timeline-item">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            American Museum of Natural History
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="row g-0">
                                                <div className="col-md-3">
                                                    <img src={Image} className="img-fluid" alt="American Museum" />
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="card-body">
                                                        <div className="rating-title d-flex justify-content-between">
                                                            <h5 className="card-title">American Museum of Natural History</h5>
                                                            <p>4.8 ★</p>
                                                        </div>
                                                        <p className="card-text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                                            <span className="read-more-btn">Read More</span>
                                                        </p>
                                                        <div className="ctg-time d-flex">
                                                            <p className="category"><i className="fa fa-home" aria-hidden="true"></i> Natural History Museums</p>
                                                            <p className="duration mx-3"><i className="fa fa-clock-o" aria-hidden="true"></i> More than 3 hours</p>
                                                            <p className="dolor">$$</p>
                                                        </div>
                                                        <div className="actions">
                                                            <button className="btn accordion-btn-see-hours">See Hours</button>
                                                            <button className="btn accordion-btn-remove mx-3">Remove</button>
                                                            <button className="btn accordion-edit-btn">Edit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ItineraryAccordion;
