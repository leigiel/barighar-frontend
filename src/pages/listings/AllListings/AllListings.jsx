import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ListingCard from "../../Shared/ListingCard/ListingCard";

export default function AllListings() {
  const [listings, setListings] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/listings${location.search}`);
        const data = await res.json();
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, [location.search]);

  return (
    <section className="px-6 lg:px-24 py-12 bg-base-100 text-base-content">
      <h2 className="text-3xl font-bold mb-6">All Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.length > 0 ? (
          listings.map((listing) => <ListingCard key={listing._id} listing={listing} />)
        ) : (
          <p>No listings found.</p>
        )}
      </div>
    </section>
  );
}
