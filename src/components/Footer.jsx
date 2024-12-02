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
const Footer = () => {
  return (
    <>
   {/* Footer Section */}
 <footer className="footer-section bg-light py-5">
 <div className="container">
   <div className="row">
     {/* Logo & Info */}
     <div className="col-md-3 mb-4">
     <img src={footerLogo} alt="ORUS Logo" className="img-fluid mb-3" />
       <p className="text-muted">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore et dolore magna aliqua.
       </p>
     </div>
     {/* Explore Links */}
     <div className="col-md-2 mb-4">
       <h5 className="text-dark">Explore</h5>
       <ul className="list-unstyled">
         <li><Link to="#" className="text-muted">Write a Review</Link></li>
         <li><Link to="#" className="text-muted">Add a Place</Link></li>
         <li><Link to="#" className="text-muted">Join</Link></li>
         <li><Link to="#" className="text-muted">Travelers' Choice</Link></li>
         <li><Link to="#" className="text-muted">Insurance</Link></li>
       </ul>
     </div>
     {/* About Links */}
     <div className="col-md-2 mb-4">
       <h5 className="text-dark">About ORUS</h5>
       <ul className="list-unstyled">
         <li><Link to="#" className="text-muted">About Us</Link></li>
         <li><Link to="#" className="text-muted">Press</Link></li>
         <li><Link to="#" className="text-muted">Resources</Link></li>
         <li><Link to="#" className="text-muted">Careers</Link></li>
       </ul>
     </div>
     {/* Business Links */}
     <div className="col-md-3 mb-4">
       <h5 className="text-dark">Do Business With Us</h5>
       <ul className="list-unstyled">
         <li><Link to="#" className="text-muted">Owners</Link></li>
         <li><Link to="#" className="text-muted">Business Advantage</Link></li>
         <li><Link to="#" className="text-muted">Advertise with Us</Link></li>
         <li><Link to="#" className="text-muted">Become an Affiliate</Link></li>
       </ul>
     </div>
     {/* App Links */}
     <div className="col-md-2 mb-4">
       <h5 className="text-dark">Get The App</h5>
       <div>
       <li><Link to="#"><img src={playStore} alt=""/></Link></li>
         <li><Link to="#"><img src={appStore} alt=""/></Link></li>
       </div>
     </div>
   </div>
   <div className="row mt-4">
     <div className="col text-center">
       <div className="foo-bottom-row-con d-flex justify-content-center flex-wrap">
         <Link to="#" className="text-muted mx-2">Terms of Use</Link>
         <Link to="#" className="text-muted mx-2">Privacy and Cookies Statement</Link>
         <Link to="#" className="text-muted mx-2">Cookie Consent</Link>
         <Link to="#" className="text-muted mx-2">Site Map</Link>
         <Link to="#" className="text-muted mx-2">How the Site Works</Link>
       </div>
     </div>
   </div>
 </div>
</footer>
{/* Footer Bottom */}
<div className="footer-bottom bg-dark text-white py-3">
 <div className="container">
   <div className="d-flex justify-content-between align-items-center flex-wrap">
     <p className="mb-0">&copy; 2024 | ORUS. All rights reserved.</p>
     <div>
       <Link to="#" className="text-white mx-2"><img src={fbImage} alt="Facebook" className="img-fluid" /></Link>
       <Link to="#" className="text-white mx-2"><img src={insImage} alt="Instagram" className="img-fluid" /></Link>
       <Link to="#" className="text-white mx-2"><img src={piImage} alt="Pinterest" className="img-fluid" /></Link>
       <Link to="#" className="text-white mx-2"><img src={twImage} alt="Twitter" className="img-fluid" /></Link>
     </div>
   </div>
 </div>
</div>
</>
  )
}

export default Footer