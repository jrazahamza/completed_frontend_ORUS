import React from 'react'
import { Link } from 'react-router-dom';
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
import Footer from './Footer';
import Header from './header';
import SideBar from './SideBar';
// import activitiesTicket from './images/activities-ticket-card-img.png';
// import afterEnd from './images/after-tickets-card-img.png';
// import appStore from './images/app-store';
// import banner from './images/banner-bg.png';
// import before from './images/before-footer-bg.png';
// import bookingDetail from './images/booking-details-card-img.png';
// import bookingEmira from './images/booking-emira-card-img.png';
// import cartImage from './images/cart-img-2.png';

const Avatar = () => {
  return (
   <>
 <Header />
    <div class="container">
    <div class="profile-container">
        {/* <!-- Sidebar --> */}
      <SideBar/>
      
        {/* <!-- Content Area --> */}
        <div class="content">
            <h3>Select Your Avatar</h3>
            <div class="row mt-5">
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
                <div class="col-lg-2"><img  src={orusAvatar} alt="User Avatar"/></div>
            </div>
        </div>
      </div>      
</div>

 <Footer/>
   </>
  )
}

export default Avatar;