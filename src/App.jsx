import React from 'react';
import Navbar from './components/Navbar';
import { Routes, useLocation,Route } from 'react-router-dom';
import Home from './pages/Home';
import AllHotels from './pages/AllHotels';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';
import Experience from './pages/Experience';
//import Layout from "./pages/dashboardHotel/Layout";
import Layout from './pages/dashboardHotel/Layout';
import Dashboard from './pages/dashboardHotel/Dashboard';
import AddHotel from './pages/dashboardHotel/AddHotel';
import HotelList from './pages/dashboardHotel/HotelList';
function App() {

  const isDashboard= useLocation().pathname.includes("dashboard")
  return (
    <>
      {!isDashboard && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<AllHotels />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/dashboard' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='add-hotel' element={<AddHotel/>}/>
            <Route path='hotel-list' element={<HotelList/>}/>
          </Route>
        </Routes>
      </div>
      
    </>
  )
}

export default App