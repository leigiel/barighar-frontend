import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchListingById } from "../../../lib/api";

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchListingById(id)
      .then((data) => setListing(data))
      .catch(() => setError("Listing not found"));
  }, [id]);

  if (error) return <p className="text-error text-center mt-10">{error}</p>;
  if (!listing) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="px-6 lg:px-24 py-16 bg-base-100 text-base-content">
      <div className="max-w-3xl mx-auto bg-base-200 rounded-box p-6 shadow-md">
        <h1 className="text-3xl font-bold text-primary mb-2">
          {listing.title}
        </h1>
        <p className="text-base-content/80 mb-2">
          {listing.location} • {listing.size}
        </p>
        <div className="flex items-center gap-4 mb-4">
          <span className="badge badge-secondary">{listing.type}</span>
          <span className="text-xl text-primary font-semibold">
            ৳ {listing.price}
          </span>
        </div>
        <p className="mb-6">{listing.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <strong>Bedrooms:</strong> {listing.bedrooms}
          </div>
          <div>
            <strong>Bathrooms:</strong> {listing.bathrooms}
          </div>
          <div className="col-span-2">
            <strong>Room Types:</strong>{" "}
            {listing.roomTypes?.join(", ") || "—"}
          </div>
          <div className="col-span-2">
            <strong>Amenities:</strong>{" "}
            {listing.amenities?.join(", ") || "—"}
          </div>
        </div>

        <div className="text-sm text-base-content/70">
          <strong>Posted By:</strong> {listing.postedBy || "admin@barighar.com"}
        </div>
      </div>
    </section>
  );
};

export default ListingDetails;
