import React from 'react'
import Header from './header'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Image from './images/day-2-7.png';
import SlideItem from  './images/slide-item-img.png'
import ItineraryAccordion from './IninaryAccordin';
const IntinaryCreated = () => {
  return (
   <div>
    <Header/>

    <div class="itenrary-sugestion-main-section m-5">    
    <div className="container">
        <div class="row">
            <div class="col-lg-2">
                <div class="map-container">
                    {/* <!-- Embed Google Maps iframe --> */}
                    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.925879491568!2d-73.99209448459587!3d40.76214497932645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855202b4f57%3A0x7e47e2f4e5752a0b!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635291214672!5m2!1sen!2sus"
      width="100%" 
      height="100%" 
      style={{border: 0}} 
      allowFullScreen 
      loading="lazy">
    </iframe>
                </div>
            </div>
            <div class="col-lg-10 itenary-right-content">
                {/* <!-- tour-info 1 --> */}
                <div class="tour-info">
                    <h3 class="tour-title">New York City for 3 days for a group of friends</h3>
                    <div class="itenary-top-btn-gr">
                        <button class="finalize-itineray">Finalize Itinerary</button>
                        <button class="save-itineray">Save Itinerary</button>
                    </div>
                    <p class="tour-details">Cancun offers a perfect blend of stunning beaches, vibrant arts scene, and thrilling water activities like snorkeling and scuba diving. You can explore must-see attractions, relax at luxurious beach resorts, and immerse yourself in the local arts and theatre scene. With its warm weather in September, Cancun provides the ideal setting for a solo traveler seeking a mix of relaxation and adventure. Whether you're lounging on the sandy shores or diving into the crystal-clear waters, Cancun has something to offer every traveler looking for a memorable vacation experience.</p>                    
                </div>
                {/* <!-- end of tour-info 1 -->
                <!-- section-1 --> */}
                <div class="section-1 itenrary-first-carousel">        
                    <div class="carousel-section">
                         <div class="container"> 
                            <div class="carousel-header">
                                <h2>Places To Stay</h2>
                                <h3>NewYork City, NewYork</h3>
                            </div>
                            <div class="ruk-first-carousel">
                                <div class="carousel-item">
                                    <div class="ruk-carousel-img">
                                        <img src={SlideItem} alt="Project 1"/>
                                        <span class="circle-arrow-bg">
                                          <img src="images/slider-arrow.png" alt="Project 1" class="slide-icon-img"/> 
                                            <span class="slide-icon-img">arr</span>
                                        </span>                    
                                    </div>
                                    <div class="ruk-carousel-text">
                                        <div class="ruk-cart-header">
                                            <h5>Lorem Ipsum</h5>
                                            <span class="price">$450</span>
                                        </div>
                                        <div class="paragraph">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                        </div>
                                        <div class="ruk-cart-star">                                                
                                            <span class="svg-star"><svg xmlns="http://www.w3.org/2000/svg" width="101" height="20" viewBox="0 0 101 20" fill="none">
                                                <path d="M9.6705 0L11.8412 6.6808H18.8658L13.1828 10.8098L15.3535 17.4906L9.6705 13.3616L3.98747 17.4906L6.1582 10.8098L0.475165 6.6808H7.49978L9.6705 0Z" fill="#DDD507"/>
                                                <path d="M29.9752 0L32.1459 6.6808H39.1705L33.4875 10.8098L35.6582 17.4906L29.9752 13.3616L24.2922 17.4906L26.4629 10.8098L20.7799 6.6808H27.8045L29.9752 0Z" fill="#DDD507"/>
                                                <path d="M50.2779 0L52.4486 6.6808H59.4733L53.7902 10.8098L55.961 17.4906L50.2779 13.3616L44.5949 17.4906L46.7656 10.8098L41.0826 6.6808H48.1072L50.2779 0Z" fill="#DDD507"/>
                                                <path d="M70.5826 0L72.7533 6.6808H79.7779L74.0949 10.8098L76.2656 17.4906L70.5826 13.3616L64.8996 17.4906L67.0703 10.8098L61.3873 6.6808H68.4119L70.5826 0Z" fill="#DDD507"/>
                                                <path d="M90.8853 0L93.0561 6.6808H100.081L94.3976 10.8098L96.5684 17.4906L90.8853 13.3616L85.2023 17.4906L87.373 10.8098L81.69 6.6808H88.7146L90.8853 0Z" fill="#DDD507"/>
                                                </svg></span>
                                            <span class="ruk-reviews"><b>4.3</b> (11,458 Reviews)</span>
                                        </div>
                                    </div>
                                </div>                    
                                <div class="carousel-item">
                                    <div class="ruk-carousel-img">
                                        <img src="images/cart-img-2.png" alt="Project 1"/>
                                        <img src="images/slider-arrow.png" alt="Project 1" class="slide-icon-img"/>                    
                                    </div>
                                    <div class="ruk-carousel-text">
                                        <div class="ruk-cart-header">
                                            <h5>Lorem Ipsum</h5>
                                            <span class="price">$450</span>
                                        </div>
                                        <div class="paragraph">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                        </div>
                                        <div class="ruk-cart-star">                                                
                                            <span class="svg-star"><svg xmlns="http://www.w3.org/2000/svg" width="101" height="20" viewBox="0 0 101 20" fill="none">
                                                <path d="M9.6705 0L11.8412 6.6808H18.8658L13.1828 10.8098L15.3535 17.4906L9.6705 13.3616L3.98747 17.4906L6.1582 10.8098L0.475165 6.6808H7.49978L9.6705 0Z" fill="#DDD507"/>
                                                <path d="M29.9752 0L32.1459 6.6808H39.1705L33.4875 10.8098L35.6582 17.4906L29.9752 13.3616L24.2922 17.4906L26.4629 10.8098L20.7799 6.6808H27.8045L29.9752 0Z" fill="#DDD507"/>
                                                <path d="M50.2779 0L52.4486 6.6808H59.4733L53.7902 10.8098L55.961 17.4906L50.2779 13.3616L44.5949 17.4906L46.7656 10.8098L41.0826 6.6808H48.1072L50.2779 0Z" fill="#DDD507"/>
                                                <path d="M70.5826 0L72.7533 6.6808H79.7779L74.0949 10.8098L76.2656 17.4906L70.5826 13.3616L64.8996 17.4906L67.0703 10.8098L61.3873 6.6808H68.4119L70.5826 0Z" fill="#DDD507"/>
                                                <path d="M90.8853 0L93.0561 6.6808H100.081L94.3976 10.8098L96.5684 17.4906L90.8853 13.3616L85.2023 17.4906L87.373 10.8098L81.69 6.6808H88.7146L90.8853 0Z" fill="#DDD507"/>
                                                </svg></span>
                                            <span class="ruk-reviews"><b>4.3</b> (11,458 Reviews)</span>
                                        </div>
                                    </div>
                                </div>                   
                                <div class="carousel-item">
                                    <div class="ruk-carousel-img">
                                        <img src="images/cart-img-3.png" alt="Project 1"/>
                                        <img src="images/slider-arrow.png" alt="Project 1" class="slide-icon-img"/>                    
                                    </div>
                                    <div class="ruk-carousel-text">
                                        <div class="ruk-cart-header">
                                            <h5>Lorem Ipsum</h5>
                                            <span class="price">$450</span>
                                        </div>
                                        <div class="paragraph">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                        </div>
                                        <div class="ruk-cart-star">                                                
                                            <span class="svg-star"><svg xmlns="http://www.w3.org/2000/svg" width="101" height="20" viewBox="0 0 101 20" fill="none">
                                                <path d="M9.6705 0L11.8412 6.6808H18.8658L13.1828 10.8098L15.3535 17.4906L9.6705 13.3616L3.98747 17.4906L6.1582 10.8098L0.475165 6.6808H7.49978L9.6705 0Z" fill="#DDD507"/>
                                                <path d="M29.9752 0L32.1459 6.6808H39.1705L33.4875 10.8098L35.6582 17.4906L29.9752 13.3616L24.2922 17.4906L26.4629 10.8098L20.7799 6.6808H27.8045L29.9752 0Z" fill="#DDD507"/>
                                                <path d="M50.2779 0L52.4486 6.6808H59.4733L53.7902 10.8098L55.961 17.4906L50.2779 13.3616L44.5949 17.4906L46.7656 10.8098L41.0826 6.6808H48.1072L50.2779 0Z" fill="#DDD507"/>
                                                <path d="M70.5826 0L72.7533 6.6808H79.7779L74.0949 10.8098L76.2656 17.4906L70.5826 13.3616L64.8996 17.4906L67.0703 10.8098L61.3873 6.6808H68.4119L70.5826 0Z" fill="#DDD507"/>
                                                <path d="M90.8853 0L93.0561 6.6808H100.081L94.3976 10.8098L96.5684 17.4906L90.8853 13.3616L85.2023 17.4906L87.373 10.8098L81.69 6.6808H88.7146L90.8853 0Z" fill="#DDD507"/>
                                                </svg></span>
                                            <span class="ruk-reviews"><b>4.3</b> (11,458 Reviews)</span>
                                        </div>
                                    </div>
                                </div>                   
                                <div class="carousel-item">
                                    <div class="ruk-carousel-img">
                                        <img src="images/cart-img-4.png" alt="Project 1"/>
                                        <img src="images/slider-arrow.png" alt="Project 1" class="slide-icon-img"/>                    
                                    </div>
                                    <div class="ruk-carousel-text">
                                        <div class="ruk-cart-header">
                                            <h5>Lorem Ipsum</h5>
                                            <span class="price">$450</span>
                                        </div>
                                        <div class="paragraph">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                        </div>
                                        <div class="ruk-cart-star">                                                
                                            <span class="svg-star"><svg xmlns="http://www.w3.org/2000/svg" width="101" height="20" viewBox="0 0 101 20" fill="none">
                                                <path d="M9.6705 0L11.8412 6.6808H18.8658L13.1828 10.8098L15.3535 17.4906L9.6705 13.3616L3.98747 17.4906L6.1582 10.8098L0.475165 6.6808H7.49978L9.6705 0Z" fill="#DDD507"/>
                                                <path d="M29.9752 0L32.1459 6.6808H39.1705L33.4875 10.8098L35.6582 17.4906L29.9752 13.3616L24.2922 17.4906L26.4629 10.8098L20.7799 6.6808H27.8045L29.9752 0Z" fill="#DDD507"/>
                                                <path d="M50.2779 0L52.4486 6.6808H59.4733L53.7902 10.8098L55.961 17.4906L50.2779 13.3616L44.5949 17.4906L46.7656 10.8098L41.0826 6.6808H48.1072L50.2779 0Z" fill="#DDD507"/>
                                                <path d="M70.5826 0L72.7533 6.6808H79.7779L74.0949 10.8098L76.2656 17.4906L70.5826 13.3616L64.8996 17.4906L67.0703 10.8098L61.3873 6.6808H68.4119L70.5826 0Z" fill="#DDD507"/>
                                                <path d="M90.8853 0L93.0561 6.6808H100.081L94.3976 10.8098L96.5684 17.4906L90.8853 13.3616L85.2023 17.4906L87.373 10.8098L81.69 6.6808H88.7146L90.8853 0Z" fill="#DDD507"/>
                                                </svg></span>
                                            <span class="ruk-reviews"><b>4.3</b> (11,458 Reviews)</span>
                                        </div>
                                    </div>
                                </div>                   
                                <div class="carousel-item">
                                    <div class="ruk-carousel-img">
                                        <img src="images/cart-img-5.png" alt="Project 1"/>
                                        <img src="images/slider-arrow.png" alt="Project 1" class="slide-icon-img"/>                    
                                    </div>
                                    <div class="ruk-carousel-text">
                                        <div class="ruk-cart-header">
                                            <h5>Lorem Ipsum</h5>
                                            <span class="price">$450</span>
                                        </div>
                                        <div class="paragraph">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                        </div>
                                        <div class="ruk-cart-star">                                                
                                            <span class="svg-star"><svg xmlns="http://www.w3.org/2000/svg" width="101" height="20" viewBox="0 0 101 20" fill="none">
                                                <path d="M9.6705 0L11.8412 6.6808H18.8658L13.1828 10.8098L15.3535 17.4906L9.6705 13.3616L3.98747 17.4906L6.1582 10.8098L0.475165 6.6808H7.49978L9.6705 0Z" fill="#DDD507"/>
                                                <path d="M29.9752 0L32.1459 6.6808H39.1705L33.4875 10.8098L35.6582 17.4906L29.9752 13.3616L24.2922 17.4906L26.4629 10.8098L20.7799 6.6808H27.8045L29.9752 0Z" fill="#DDD507"/>
                                                <path d="M50.2779 0L52.4486 6.6808H59.4733L53.7902 10.8098L55.961 17.4906L50.2779 13.3616L44.5949 17.4906L46.7656 10.8098L41.0826 6.6808H48.1072L50.2779 0Z" fill="#DDD507"/>
                                                <path d="M70.5826 0L72.7533 6.6808H79.7779L74.0949 10.8098L76.2656 17.4906L70.5826 13.3616L64.8996 17.4906L67.0703 10.8098L61.3873 6.6808H68.4119L70.5826 0Z" fill="#DDD507"/>
                                                <path d="M90.8853 0L93.0561 6.6808H100.081L94.3976 10.8098L96.5684 17.4906L90.8853 13.3616L85.2023 17.4906L87.373 10.8098L81.69 6.6808H88.7146L90.8853 0Z" fill="#DDD507"/>
                                                </svg></span>
                                            <span class="ruk-reviews"><b>4.3</b> (11,458 Reviews)</span>
                                        </div>
                                    </div>
                                </div>                   
                                <div class="carousel-item">
                                    <div class="ruk-carousel-img">
                                        <img src="images/cart-img-3.png" alt="Project 1"/>
                                        <img src="images/slider-arrow.png" alt="Project 1" class="slide-icon-img"/>                    
                                    </div>
                                    <div class="ruk-carousel-text">
                                        <div class="ruk-cart-header">
                                            <h5>Lorem Ipsum</h5>
                                            <span class="price">$450</span>
                                        </div>
                                        <div class="paragraph">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                        </div>
                                        <div class="ruk-cart-star">                                                
                                            <span class="svg-star"><svg xmlns="http://www.w3.org/2000/svg" width="101" height="20" viewBox="0 0 101 20" fill="none">
                                                <path d="M9.6705 0L11.8412 6.6808H18.8658L13.1828 10.8098L15.3535 17.4906L9.6705 13.3616L3.98747 17.4906L6.1582 10.8098L0.475165 6.6808H7.49978L9.6705 0Z" fill="#DDD507"/>
                                                <path d="M29.9752 0L32.1459 6.6808H39.1705L33.4875 10.8098L35.6582 17.4906L29.9752 13.3616L24.2922 17.4906L26.4629 10.8098L20.7799 6.6808H27.8045L29.9752 0Z" fill="#DDD507"/>
                                                <path d="M50.2779 0L52.4486 6.6808H59.4733L53.7902 10.8098L55.961 17.4906L50.2779 13.3616L44.5949 17.4906L46.7656 10.8098L41.0826 6.6808H48.1072L50.2779 0Z" fill="#DDD507"/>
                                                <path d="M70.5826 0L72.7533 6.6808H79.7779L74.0949 10.8098L76.2656 17.4906L70.5826 13.3616L64.8996 17.4906L67.0703 10.8098L61.3873 6.6808H68.4119L70.5826 0Z" fill="#DDD507"/>
                                                <path d="M90.8853 0L93.0561 6.6808H100.081L94.3976 10.8098L96.5684 17.4906L90.8853 13.3616L85.2023 17.4906L87.373 10.8098L81.69 6.6808H88.7146L90.8853 0Z" fill="#DDD507"/>
                                                </svg></span>
                                            <span class="ruk-reviews"><b>4.3</b> (11,458 Reviews)</span>
                                        </div>
                                    </div>
                                </div>                   
                                <div class="carousel-item">
                                    <div class="ruk-carousel-img">
                                        <img src="images/cart-img-4.png" alt="Project 1"/>
                                        <img src="images/slider-arrow.png" alt="Project 1" class="slide-icon-img"/>                    
                                    </div>
                                    <div class="ruk-carousel-text">
                                        <div class="ruk-cart-header">
                                            <h5>Lorem Ipsum</h5>
                                            <span class="price">$450</span>
                                        </div>
                                        <div class="paragraph">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                        </div>
                                        <div class="ruk-cart-star">                                                
                                            <span class="svg-star"><svg xmlns="http://www.w3.org/2000/svg" width="101" height="20" viewBox="0 0 101 20" fill="none">
                                                <path d="M9.6705 0L11.8412 6.6808H18.8658L13.1828 10.8098L15.3535 17.4906L9.6705 13.3616L3.98747 17.4906L6.1582 10.8098L0.475165 6.6808H7.49978L9.6705 0Z" fill="#DDD507"/>
                                                <path d="M29.9752 0L32.1459 6.6808H39.1705L33.4875 10.8098L35.6582 17.4906L29.9752 13.3616L24.2922 17.4906L26.4629 10.8098L20.7799 6.6808H27.8045L29.9752 0Z" fill="#DDD507"/>
                                                <path d="M50.2779 0L52.4486 6.6808H59.4733L53.7902 10.8098L55.961 17.4906L50.2779 13.3616L44.5949 17.4906L46.7656 10.8098L41.0826 6.6808H48.1072L50.2779 0Z" fill="#DDD507"/>
                                                <path d="M70.5826 0L72.7533 6.6808H79.7779L74.0949 10.8098L76.2656 17.4906L70.5826 13.3616L64.8996 17.4906L67.0703 10.8098L61.3873 6.6808H68.4119L70.5826 0Z" fill="#DDD507"/>
                                                <path d="M90.8853 0L93.0561 6.6808H100.081L94.3976 10.8098L96.5684 17.4906L90.8853 13.3616L85.2023 17.4906L87.373 10.8098L81.69 6.6808H88.7146L90.8853 0Z" fill="#DDD507"/>
                                                </svg></span>
                                            <span class="ruk-reviews"><b>4.3</b> (11,458 Reviews)</span>
                                        </div>
                                    </div>
                                </div>                   
                            </div>
                        {/* <!-- </div> --> */}
                    </div>
                </div>
                {/* <!-- end of section-1 --> */}
                
                <div class="day-section">
                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex">
                                <div class="day-box">
                                    <h5>Day 1</h5>
                                    <p>7</p>
                                </div>
                                <div class="day-box">
                                    <h5>Day 2</h5>
                                    <p>7</p>
                                </div>
                                <div class="day-box">
                                    <h5>Day 3</h5>
                                    <p>7</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <h4>Day 2 - 7 May</h4>
                            <p class="text-muted">New York City, New York</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            
                              <ItineraryAccordion/>
                               
                                {/* <!-- Timeline Item 4 (Collapsible) --> */}
                               
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <br/>        
                </div>
                {/* <!-- end of day section 1 -->
                <!-- day section 2 --> */}
                <div class="day-section">
                    <div class="row">
                        <div class="col-12">
                            <h4>Day 2 - 7 May</h4>
                            <p class="text-muted">New York City, New York</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            
                                {/* <!-- Timeline Item 2 (Collapsible) --> */}
                              
                                {/* <!-- Timeline Item 3 (Collapsible) --> */}
                                
                                {/* <!-- Timeline Item 4 (Collapsible) --> */}
                               <ItineraryAccordion/>
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <br/>        
                    </div>
                    </div>
</div>
</div>
</div> 
</div>
    <Footer/>

    </div>
)};

export default  IntinaryCreated;
