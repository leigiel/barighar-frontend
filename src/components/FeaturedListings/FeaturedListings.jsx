import React, { useEffect, useState } from "react";
import ListingCard from "../../pages/Shared/ListingCard/ListingCard";

const FeaturedListings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/listings`);
        const data = await res.json();
        setListings(data.slice(0, 6)); // Show top 6
      } catch (err) {
        console.error("Failed to fetch listings", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) return <div className="text-center p-10">Loading featured listings...</div>;

  return (
    <section className="px-6 lg:px-24 py-12 bg-base-100 text-base-content">
      <h2 className="text-3xl font-bold mb-6">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map(listing => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
