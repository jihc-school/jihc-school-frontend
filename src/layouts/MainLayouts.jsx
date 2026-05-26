import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'

const MainLayouts = () => {
  return (
    <div className='@container'>
        <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        <Footer></Footer>
    </div>
  )
}

export default MainLayouts