import React from 'react'
import Header from './header'
import Footer from './Footer'
import SideBar from './SideBar'
import { Link } from 'react-router-dom';
import Profile from './images/customer-profile-img.png'
const CustomerProfile = () => {
  return (
    <>
      <Header/>
    <div class="container">
    <div class="profile-container">
        {/* <!-- Sidebar --> */}
      <SideBar/>
      
        {/* <!-- Content Area --> */}
        <div class="content">
        <div class="content-header">
            <div class="avatar"><img src={Profile} alt=""/></div>
            <h2 class="customer-name">John Doe.</h2>
          </div>
          
          <form class="customer-account-pro-form">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" value="John Doe"/>
              </div>
              <div class="col-md-6 mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="phone" value="+1 000-000-0000"/>
              </div>
            </div>
      
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" value="********"/>
              </div>
              <div class="col-md-6 mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" value="St 32 main downtown, Los Angeles, California, USA"/>
              </div>
            </div>
      
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="dob" class="form-label">Date Of Birth</label>
                <input type="text" class="form-control" id="dob" value="01-01-1992"/>
              </div>
              <div class="col-md-6 mb-3">
                <label for="city-state" class="form-label">City/State</label>
                <input type="text" class="form-control" id="city-state" value="Los Angeles, California"/>
              </div>
            </div>
      
            <div class="mb-3 profile-bottom-acc d-flex justify-content-between">
                <div class="pro-email d-flex">
                    <span class="svg-icon-env"><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.1" cx="24.2112" cy="24.7132" r="24.2112" fill="#DDD507"/>
                        <path d="M29.2609 16.1421H19.1729C16.1465 16.1421 14.1289 17.6553 14.1289 21.1861V28.2477C14.1289 31.7785 16.1465 33.2917 19.1729 33.2917H29.2609C32.2873 33.2917 34.3049 31.7785 34.3049 28.2477V21.1861C34.3049 17.6553 32.2873 16.1421 29.2609 16.1421ZM29.7351 22.2857L26.5775 24.8077C25.9117 25.3424 25.0643 25.6046 24.2169 25.6046C23.3695 25.6046 22.512 25.3424 21.8563 24.8077L18.6988 22.2857C18.376 22.0234 18.3255 21.5392 18.5777 21.2164C18.84 20.8935 19.3141 20.833 19.637 21.0953L22.7945 23.6173C23.5612 24.2327 24.8626 24.2327 25.6292 23.6173L28.7868 21.0953C29.1096 20.833 29.5938 20.8835 29.846 21.2164C30.1083 21.5392 30.0579 22.0234 29.7351 22.2857Z" fill="#FE6326"/>
                        </svg>
                    </span>   
                    <p>alexarawles@gmail.com<br/>
                    1 month ago</p>
                </div>
                <div class="btn-add-em">
                    <button type="button" class="btn add-email-btn">+ Add Email Address</button>
                </div>
                <div class="btn-edit-em">
                    <button type="submit" class="btn edit-email-btn">Save</button>
                </div>
            </div>    
          </form>
        </div>
      </div>      
</div>

    <Footer/>
    </>
  )
}

export default CustomerProfile;