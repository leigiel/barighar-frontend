import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from '../../assets/heroimg.jpg' // Confirm the image exists

const HeroSection = () => (
  <section
    id="hero"
    className="relative bg-base-200 text-base-content py-20 px-4 lg:px-20 bg-cover bg-center"
    style={{ backgroundImage: `url(${heroimg})` }}
  >
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
          Find Your Perfect Home
        </h1>
        <p className="text-lg text-base-content/80 mb-6">
          Explore the best properties in your city. Whether you’re buying or renting, Bari Ghar makes it simple and trustworthy.
        </p>
        <Link
          to="/listings"
          className="btn btn-primary text-primary-content shadow-lg hover:shadow-xl transition"
        >
          Browse Listings
        </Link>
      </div>
    </div>
  </section>
)

export default HeroSection
