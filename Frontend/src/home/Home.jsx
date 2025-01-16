import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner.jsx'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
    </div>
  )
}

export default Home