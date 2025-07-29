import React from 'react';

const SearchBar = () => {
  return (
   <section className="bg-base-100 px-4 lg:px-20 py-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search by city, zip, or keyword"
          className="input input-bordered w-full"
        />
        <select className="select select-bordered w-full">
          <option disabled selected>Property Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Commercial</option>
        </select>
        <select className="select select-bordered w-full">
          <option disabled selected>Status</option>
          <option>For Sale</option>
          <option>For Rent</option>
        </select>
        <button className="btn btn-accent text-accent-content">
          🔎 Search
        </button>
      </div>
    </section>
  );
};

export default SearchBar;