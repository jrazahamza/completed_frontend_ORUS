import React from 'react'
import React from 'react'
import Header from './header'
import Footer from './Footer'
import SideBar from './SideBar'
const Suggestions = () => {
 
  return (
    <>
    <Header/>
    <div class="container">
    <div class="profile-container">
        {/* <!-- Sidebar --> */}
      <SideBar/>
      
        {/* <!-- Content Area --> */}
        <div class="content">
              
        </div>
      </div>      
</div>

    <Footer/>
    </>
  )
}



export default Suggestions;