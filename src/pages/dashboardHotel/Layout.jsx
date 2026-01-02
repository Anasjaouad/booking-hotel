import React from 'react'
import SideNavbar from '../../components/dashboard/SideNavbar'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/dashboard/Navbar'


function Layout() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      <div className='flex h-full'>

        <SideNavbar/>
        <div>
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout