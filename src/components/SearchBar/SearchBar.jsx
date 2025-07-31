import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();
    if (location) queryParams.append("location", location);
    if (status) queryParams.append("type", status); // maps to backend type filter

    navigate(`/listings?${queryParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className=" shadow-lg p-6 rounded-md max-w-4xl mx-auto mt-10 grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
      <div className="flex flex-col">
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search by city or zip"
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="flex flex-col">
        <select
          id="propertyType"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="studio">Studio</option>
        </select>
      </div>

      <div className="flex flex-col">
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Status</option>
          <option value="for-sale">For Sale</option>
          <option value="for-rent">For Rent</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition"
        >
          Search
        </button>
      </div>
    </form>
  );
}
