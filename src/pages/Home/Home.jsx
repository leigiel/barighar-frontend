import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import SearchBar from '../../components/SearchBar/SearchBar'
import FeaturedListings from '../../components/FeaturedListings/FeaturedListings'
import ServicesSection from '../../components/ServicesSection/ServicesSection'
import NeighborhoodSpotlight from '../../components/NeighborhoodSpotlight/NeighborhoodSpotlight'
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection'
import StatsSection from '../../components/StatsSection/StatsSection'
import CallToAction from '../../components/CallToAction/CallToAction'

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedListings />
      <SearchBar />
      <ServicesSection />
      <NeighborhoodSpotlight />
      <TestimonialsSection />
      <StatsSection />
      <CallToAction />
    </main>
  )
}

export default Home
