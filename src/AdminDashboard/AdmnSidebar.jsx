import React from 'react'
import { Nav } from 'react-bootstrap';

const AdmnSidebar = () => {
  return (
  <>
      <div className="d-flex flex-column col-3 bg-dark text-white" style={{ height: '100vh', width: '250px' }}>
            <div className="text-center py-4">
                <h4>Admin Panel</h4>
            </div>
            <Nav defaultActiveKey="#dashboard" className="flex-column hover">
                <Nav.Link href="#dashboard" className="text-white">Dashboard</Nav.Link>
                <Nav.Link href="#users" className="text-white">Flights</Nav.Link>
                <Nav.Link href="#settings" className="text-white">Statistics</Nav.Link>
                <Nav.Link href="#logs" className="text-white">Settings</Nav.Link>
                <Nav.Link href="/" className="text-white">Log Out</Nav.Link>
            </Nav>
        </div>
       
  </>
  )
}

export default AdmnSidebar