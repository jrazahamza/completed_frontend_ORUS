import React from 'react'
import NavigationalHeader from './NavigationalHeader'
import Footer from './Footer'
import Testimonial from '../Images/test-imonial-pro-img.png';
import Section4Image from '../Images/section-4-img-1.png';
import Section4Image2 from '../Images/section-4-img-2.png';
import Experiencecart from '../Images/experience-cart-bg.png';
import cartImage from '../Images/cart-img-4.png';
const HomePage = () => {
  return (
    <>
    <NavigationalHeader/>
    <div class="main-section">

{/* <!-- section-1 --> */}
<div class="section-1">        
    <div class="carousel-section">
        <div class="container"> 
            <div class="carousel-header">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
            <div class="ruk-first-carousel">
                <div class="carousel-item">
                    <div class="ruk-carousel-img">
                        <img src="images/slide-item-img.png" alt="Project 1"/>
                        <span class="circle-arrow-bg">
                            <img src="images/slider-arrow.png" alt="Project 1" class="slide-icon-img"/>
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
                        <img src={cartImage} alt="Project 1"/>
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
         </div> 
    </div>
</div>
{/* <!-- end of section-1 --> */}

{/* <!-- section-2 --> */}
<div class="section-2"> 
    <div class="sec2-heading"><h2 class="sec2-h2">Lorem Ipsum</h2></div> 
    <div class="sec2-tabs-content">
        <div class="tab-section">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="asia-tab" data-bs-toggle="tab" data-bs-target="#asia" type="button" role="tab" aria-controls="asia" aria-selected="true">Asia</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="europe-tab" data-bs-toggle="tab" data-bs-target="#europe" type="button" role="tab" aria-controls="europe" aria-selected="false">Europe</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="north-america-tab" data-bs-toggle="tab" data-bs-target="#north-america" type="button" role="tab" aria-controls="north-america" aria-selected="false">North America</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="middle-east-tab" data-bs-toggle="tab" data-bs-target="#middle-east" type="button" role="tab" aria-controls="middle-east" aria-selected="false">Middle East</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="australia-tab" data-bs-toggle="tab" data-bs-target="#australia" type="button" role="tab" aria-controls="australia" aria-selected="false">Australia</button>
                </li>
            </ul>
            <div class="tab-content mt-4" id="myTabContent">
                {/* <!-- Asia Tab --> */}
                <div class="tab-pane fade show active" id="asia" role="tabpanel" aria-labelledby="asia-tab">
                    <div class="tabs-content">
                        <h1>Asia</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <a href="#" class="btn-discover">Discover</a>
                    </div>
                </div>
                {/* <!-- Europe Tab --> */}
                <div class="tab-pane fade" id="europe" role="tabpanel" aria-labelledby="europe-tab">
                    <div class="tabs-content">
                        <h1>Europe</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <a href="#" class="btn-discover">Discover</a>
                    </div>
                </div>
                {/* <!-- North America Tab --> */}
                <div class="tab-pane fade" id="north-america" role="tabpanel" aria-labelledby="north-america-tab">
                    <div class="tabs-content">
                        <h1>North America</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <a href="#" class="btn-discover">Discover</a>
                    </div>
                </div>
                {/* <!-- Middle East Tab --> */}
                <div class="tab-pane fade" id="middle-east" role="tabpanel" aria-labelledby="middle-east-tab">
                    <div class="tabs-content">
                        <h1>Middle East</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <a href="#" class="btn-discover">Discover</a>
                    </div>
                </div>
                {/* <!-- Australia Tab --> */}
                <div class="tab-pane fade" id="australia" role="tabpanel" aria-labelledby="australia-tab">
                    <div class="tabs-content">
                        <h1>Australia</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <a href="#" class="btn-discover">Discover</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- end of section-2 -->
<!--  section-3 --> */}
<div class="section-3">

<div class="row">
    {/* <!-- Left Section: Single Image --> */}
    <div class="col-lg-6">
        <div class="image-section">
            <div class="sec3-single-img-con">
                <h2 class="get-ready">Get ready</h2>
                <p>collection of the most
                    beautiful places
                    and experience </p>
            </div>
        </div>
    </div>

    {/* <!-- Right Section --> */}
    <div class="col-lg-6 sec3-left-col">
        {/* <!-- Search Section (First Row) --> */}
        <div class="search-section">
            <div class="w-full max-w-md">
                <div class="flex items-center">
                    <span class="fa-search-svg search-border-bottom"><svg xmlns="http://www.w3.org/2000/svg"
                            width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path
                                d="M24.6582 21.6152L19.79 16.7471C19.5703 16.5273 19.2725 16.4053 18.96 16.4053H18.1641C19.5117 14.6816 20.3125 12.5137 20.3125 10.1553C20.3125 4.54492 15.7666 -0.000976562 10.1562 -0.000976562C4.5459 -0.000976562 0 4.54492 0 10.1553C0 15.7656 4.5459 20.3115 10.1562 20.3115C12.5146 20.3115 14.6826 19.5107 16.4062 18.1631V18.959C16.4062 19.2715 16.5283 19.5693 16.748 19.7891L21.6162 24.6572C22.0752 25.1162 22.8174 25.1162 23.2715 24.6572L24.6533 23.2754C25.1123 22.8164 25.1123 22.0742 24.6582 21.6152ZM10.1562 16.4053C6.7041 16.4053 3.90625 13.6123 3.90625 10.1553C3.90625 6.70312 6.69922 3.90527 10.1562 3.90527C13.6084 3.90527 16.4062 6.69824 16.4062 10.1553C16.4062 13.6074 13.6133 16.4053 10.1562 16.4053Z"
                                fill="#FE6326" />
                        </svg>
                        <input
                            class="sec3-search-input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Search" aria-label="Search"/>
                    </span>
                </div>
            </div>
        </div>

        {/* <!-- Tabs Section (Second Row) --> */}
        <ul class="nav nav-tabs mb-3" id="tabMenu" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#content1"
                    type="button" role="tab">Experience</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#content2" type="button"
                    role="tab">Stays</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="tab3" data-bs-toggle="tab" data-bs-target="#content3" type="button"
                    role="tab">Flights</button>
            </li>
        </ul>

        <div class="tab-content">
            {/* <!-- Tab 1 Content with Carousel --> */}
            <div class="tab-pane fade show active" id="content1" role="tabpanel">
                <div id="carouselTab1" class="carousel slide" data-bs-ride="carousel">
                    {/* <!-- <div class="carousel-inner"> --> */}
                    <div class="ruk-experience-tabs-carousel">
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="images/experience-cart-bg.png" alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="images/experience-cart-bg.png" alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="images/experience-cart-bg.png" alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="images/experience-cart-bg.png" alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="images/experience-cart-bg.png" alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Tab 2 Content with Carousel --> */}
            <div class="tab-pane fade" id="content2" role="tabpanel">
                <div id="carouselTab2" class="carousel slide" data-bs-ride="carousel">
                    <div class="ruk-experience-tabs2-carousel">
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="images/experience-cart-bg.png" alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="images/experience-cart-bg.png" alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="images/experience-cart-bg.png" alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="images/experience-cart-bg.png" alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="images/experience-cart-bg.png" alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Tab 3 Content with Carousel --> */}
            <div class="tab-pane fade" id="content3" role="tabpanel">
                <div id="carouselTab3" class="carousel slide" data-bs-ride="carousel">
                    <div class="ruk-experience-tabs2-carousel">
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src={Experiencecart} alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src={Experiencecart} alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src={Experiencecart} alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src={Experiencecart} alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src={Experiencecart} alt="Project 1"/>
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
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

{/* <!-- end of section-3 -->

<!-- section-4 --> */}
<div class="section-4">

    <section class="image-text-section py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h2 class="section-title">Lorem Ipsum</h2>
                    <p class="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <p class="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <a href="#" class="btn btn-warning btn-lg">Explore Now <span class="ms-2"><img src="images/under-btn-icon.png" alt=""/></span></a>
                </div>
                <div class="col-lg-6 position-relative">
                    <div class="img-wrapper">
                        <img src={Section4Image} alt="Image 1" class="img-fluid img-main rounded shadow"/>
                        <img src={Section4Image2} alt="Image 2" class="img-fluid img-secondary rounded shadow"/>
                    </div>
                </div>
            </div>
        </div>
    </section>


</div>


{/* <!-- end of section-2 -->


<!-- section-5 --> */}
<div class="section-5">
 <section class="testimonials-section py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 testimonial-left">
            <div class="col-md-6 col-lg-10">
            <div class="testimonial-card">
                <div class="d-flex align-items-center mb-3">
                <img src={Testimonial} class="rounded-circle testimonial-img" alt="Customer"/>
                <div class="testimonial-content">
                    <h5 class="mb-0">Elizabeth</h5>                
                    <p class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            </div>

            <div class="col-md-6 col-lg-10 mr-left">
            <div class="testimonial-card border-grident">
                <div class="d-flex align-items-center mb-3">
                <img src={Testimonial} class="rounded-circle testimonial-img" alt="Customer"/>
                <div class="testimonial-content">
                    <h5 class="mb-0">Elizabeth</h5>                
                    <p class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            </div>

            <div class="col-md-6 col-lg-10">
            <div class="testimonial-card">
                <div class="d-flex align-items-center mb-3">
                <img src={Testimonial} class="rounded-circle testimonial-img" alt="Customer"/>
                <div class="testimonial-content">
                    <h5 class="mb-0">Elizabeth</h5>                
                    <p class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>            
        <div class="col-lg-6 testimonial-right">
          <h2 class="section-title">What Customers Are Saying..</h2>
          <p class="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <div class="d-flex justify-content-left">
            <button class="btn btn-arrow me-2"><span class="ruk-svg-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                <circle cx="22.0202" cy="22.0246" r="15.5716" transform="rotate(-134.39 22.0202 22.0246)" fill="url(#paint0_linear_1_1948)"/>
                <path d="M31.1934 21.6221L13.8162 22.265" stroke="white" stroke-width="1.3899" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.0659 29.0322C19.3321 25.8063 17.5986 24.4044 13.8163 22.2658C17.0667 20.3454 18.6827 19.0061 20.4766 15.2246" stroke="white" stroke-width="1.3899" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_1_1948" x1="22.0202" y1="6.45297" x2="22.0202" y2="37.5962" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE6326"/>
                <stop offset="1" stop-color="#DDD507"/>
                </linearGradient>
                </defs>
                </svg></span></button>
            <button class="btn btn-arrow"><span class="ruk-svg-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22.0202" cy="21.9836" r="15.5716" transform="rotate(48.5361 22.0202 21.9836)" fill="url(#paint0_linear_1_1953)"/>
                <path d="M12.8389 21.915L30.2261 22.16" stroke="white" stroke-width="1.3899" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.3305 15.0319C24.8974 18.3421 26.5571 19.8306 30.2253 22.1595C26.8812 23.9115 25.1989 25.1666 23.2144 28.8516" stroke="white" stroke-width="1.3899" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_1_1953" x1="22.0202" y1="6.41195" x2="22.0202" y2="37.5552" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE6326"/>
                <stop offset="1" stop-color="#DDD507"/>
                </linearGradient>
                </defs>
                </svg></span></button>
          </div>
        </div>
    </div>
    </div>
  </section>
</div>
{/* <!-- end of section-5 -->

<!-- section-6 --> */}
<div class="section-1">        
    <div class="carousel-section">
        <div class="container"> 
            <div class="carousel-header">
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
            <div class="ruk-first-carousel">
                <div class="carousel-item">
                    <div class="ruk-carousel-img">
                        <img src="images/slide-item-img.png" alt="Project 1"/>
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
         </div> 
    </div>
</div>
{/* <!-- end of section-6 --> */}

</div>




<section class="hero-section">
<div class="hero-sec-conent">
        <h1>Get A Custom Itinerary For Your Trip</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore </p>
        <a href="#" class="btn hero-btn">Start A Trip With Orus <span class="ms-2">
            <img src="images/under-btn-icon.png" alt=""/></span></a>
</div>
</section>



    <Footer/>
    
    
    </>
  )
}

export default HomePage;