import React from 'react'

import Navbar from '../components/Navbar'
import PromotionalLine from '../components/PromotionalLine'
import HeroSection from '../components/HeroSection'
import Filters from '../components/Filters'

const Homepage = () => {
  return (
    <>
        <PromotionalLine />
        <Navbar />
        <HeroSection />
        <Filters />
    </>
  )
}

export default Homepage