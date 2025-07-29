import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import SearchBar from '../../components/SearchBar/SearchBar';
import FeaturedListings from '../../components/FeaturedListings/FeaturedListings';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';
import CallToAction from '../../components/CallToAction/CallToAction';
import NeighborhoodSpotlight from '../../components/NeighborhoodSpotlight/NeighborhoodSpotlight';
import StatsSection from '../../components/StatsSection/StatsSection';

const Home = () => {
  return (
    <>
    <HeroSection></HeroSection>
    <SearchBar></SearchBar>
    <FeaturedListings></FeaturedListings>
  <ServicesSection></ServicesSection>
  <NeighborhoodSpotlight></NeighborhoodSpotlight>
  <TestimonialsSection></TestimonialsSection>
  <StatsSection></StatsSection>
  <CallToAction></CallToAction>
    </>
  );
};

export default Home;