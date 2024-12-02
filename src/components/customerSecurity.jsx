import React from 'react'
import Header from './header'
import Footer from './Footer'
import SideBar from './SideBar'
import { Link } from 'react-router-dom';
const CustomerSecurity = () => {
  return (
    <>
    <Header/>
    <div class="container">
    <div class="profile-container">
        {/* <!-- Sidebar --> */}
      <SideBar/>
      
        {/* <!-- Content Area --> */}
        <div class="content">
            <h3>Security</h3>
            <p>Change your security settings, set up secure authentication or delete your account.</p>
            <div class="security-setup">
                <div class="password-reset d-flex justify-content-between border">
                    <div class="col-lg-2"><h3>Password</h3></div>
                    <div class="col-lg-8"><p>To change your password, we need to send a reset link to your email address</p></div>
                    <div class="col-lg-2"><button class="reset re-pass">Reset</button></div>
                </div>
                <div class="password-reset d-flex justify-content-between border">
                    <div class="col-lg-2"><h3>Two-factor</h3></div>
                    <div class="col-lg-8"><p>To change your password, we need to send a reset link to your email address</p></div>
                    <div class="col-lg-2"><button class="reset re-pass">Reset</button></div>
                </div>
                <div class="password-reset d-flex justify-content-between border">
                    <div class="col-lg-2"><h3>Active sessions</h3></div>
                    <div class="col-lg-8"><p>To change your password, we need to send a reset link to your email address</p></div>
                    <div class="col-lg-2"><button class="reset re-pass">Reset</button></div>
                </div>
                <div class="password-reset d-flex justify-content-between border">
                    <div class="col-lg-2"><h3>Delete account</h3></div>
                    <div class="col-lg-8"><p>To change your password, we need to send a reset link to your email address</p></div>
                    <div class="col-lg-2"><button class="reset re-pass">Reset</button></div>
                </div>
            </div>            
        </div>
      </div>      
</div>

    <Footer/>
    </>
  )
}

export default CustomerSecurity;