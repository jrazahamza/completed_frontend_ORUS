import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import BookingDetails from './components/Booking-details'
import Avatar from './components/customerAvatar'
import Intinary from './components/custoomerIntinary'
import Payments from './components/payment'
import CustomerSecurity from './components/customerSecurity'
import CustomerProfile from './components/customerProfile'
import CheckOut from './components/checkout'
import EditCustomer from './components/editCustomer'
import Flights from './components/flights'
import IntinaryCreated from './components/intinaryCreated'
import Questions from './components/questions';
import Login from './Authentication/login';
import Register from './Authentication/Register';
import ProtectedRoute from './ProtectedRoutes/protectedRoutes';
import AdminDashboard from './AdminDashboard/adminDashBoard';
import BookingList from './AdminDashboard/BookingList';
import HotelListening from './components/hotelListining'
import Slider from './components/Slider'
import TravelHeader from './components/TravellerHeader'
import ActivitiesTab from './components/ActivitiesTab'
import StaysTab from './components/Stays'
import HomePage from './components/HomePage'
import HotelDetailing from './components/HotelDetailing'
import Ticket from './components/Invoice/Ticket'
import TabsComponent from './components/TabsContent'
import AmadeusTokenComponent from './components/AmadeusApi'
import ActivitiesChecout from './components/ActivitiesChecout'
import ChatbotInterface from './components/ChatBot'
import FlightCheckOut from './components/FlightCheckout'
import ActivitiesDetails from './components/ActivitiesDetails'
import FlightOffers from './components/FlightOffers'
import ItinerarySuggestions from './components/itinarySuggestions'
import SearchFlights from './components/SearchFlight'
import FlightOffersModal from './components/SearchFlight'
import Booking from './components/Invoice/FlightData'
import Data from './components/Invoice/Data'
import UserDash from './AdminDashboard/UserDash'
import Carsoul from './components/Invoice/carsoul'
import HotelBookingForm from './components/HotelBookinForm'
import FlightTicket from './components/FlightTicket'



function App() {
 
  const invoiceData = {
    firstName: "John",
    lastName: "Doe",
    contact: "1234567890",
    email: "john.doe@example.com",
    baseFare: 240,
    taxes: 20,
    serviceFee: 5,
    total: 265,
  };
  return (
    <>
      <BrowserRouter>
      <Routes>
      {/* <Route
         path='/activities'
          element={
            <ProtectedRoute>
             <Activities/>
            </ProtectedRoute>
          }
        /> */}
          <Route
         path='/activities'
          element={
          
             <Activities/>
         
          }
        />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/booking-details' element={<BookingDetails/>}  />
        <Route path='/customer-Avatar' element={<Avatar/>}  /> 
        <Route path='/customer-Intinary' element={<Intinary/>}  />
        <Route path='/Payments' element={< Payments/>}  />
        <Route path='/CustomerSecurity' element={< CustomerSecurity/>}  />
        <Route path='/CustomerProfile' element={< CustomerProfile/>}  />
        <Route path='/Customerintinary' element={< Intinary/>}  />
        <Route path='/hotelCheckout' element={< CheckOut/>}  />
        <Route path='/editCustomer' element={< EditCustomer/>}  /> 
        <Route path='/Flights' element={< Flights/>}  />
        <Route path='/Hotel-Listining' element={< HotelListening/>}  />
        <Route path='/IntinaryCreated' element={<IntinaryCreated/>}  />
        <Route path='/Questions' element={<Questions/>}  />     
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/booking/:id" element={<BookingList />} />
        <Route path="/Slider" element={<Slider/>} />
        <Route path='/flight' element={<TravelHeader/>}     />
        <Route path='/ActivitiesTab' element={<ActivitiesTab/>}/>
        <Route path='/StaysTab' element={<StaysTab/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/HotelDetailing' element={<HotelDetailing/>}/>
        <Route path='/ticket' element={<Ticket  data={invoiceData}/>}/>
        <Route path='/TabsComponent' element={<TabsComponent/>}/>
        <Route path='/AmadeusTokenComponent' element={<AmadeusTokenComponent/>}/>
        <Route path='/ActivitiesChecout' element={<ActivitiesChecout/>}/>
        <Route path='/ChatbotInterface'  element={<ChatbotInterface/>} />
        <Route path='/FlightCheckOut' element={<FlightCheckOut/>}/>
        <Route path='/ActivitiesDetails' element={<ActivitiesDetails/>}/>
        <Route  path='/FlightOffers' element={<FlightOffers/>} />
        <Route path='/ItinerarySuggestions' element={<ItinerarySuggestions/>}/>
        <Route path='/SearchFlights' element={<FlightOffersModal/>}/>
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/userdash' element={<UserDash/>}/>
        <Route path='/Carsoul' element={<Carsoul/>}/>
        <Route path='/FlightTicket' element={<FlightTicket/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
