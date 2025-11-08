import React from 'react'
import Navbar from "../Layout/Navbar"

// import LoginPage from './LoginPage'
// import bg from "../assets/travel-bg.jpg"
import HomePageSec from "../Component/HomePage/HomePageSec"
import DestinationPage from '../page/DestinationPage'
import ConnectPage from '../page/ConnectPage'
import Footer from "../Layout/Footer"

const HomePage = () => {
    return (
        <>
            <Navbar />
            {/* <LoginPage /> */}
            <HomePageSec />
            <DestinationPage />
            <ConnectPage />
            <Footer />
              
        </>
    )
}

export default HomePage

 