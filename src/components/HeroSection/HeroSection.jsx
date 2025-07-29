import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-base-200 text-base-content py-20 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left */}
      <div className="max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
          Find Your Perfect Home
        </h1>
        <p className="text-lg text-base-content/80 mb-6">
          Explore the best properties in your city. Whether you're buying or renting, Bari Ghar makes it simple and trustworthy.
        </p>
        <a href="#listings" className="btn btn-primary text-primary-content shadow">
          Browse Listings
        </a>
      </div>

      {/* Right */}
      <img
        src="https://img.daisyui.com/images/house/photo-1505691938895-1758d7feb511.jpg"
        alt="Dream home"
        className="rounded-lg shadow-lg w-full max-w-md lg:max-w-xl"
      />
    </section>
  );
};

export default HeroSection;