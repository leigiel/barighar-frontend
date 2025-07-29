import React from "react";
import { Link } from "react-router-dom";
const listings = [
  {
    id: 1,
    title: "Modern Apartment in Dhanmondi",
    location: "Dhanmondi, Dhaka",
    price: "৳ 35,000/month",
    type: "For Rent",
    image: "https://img.daisyui.com/images/house/photo-1549187774-b4b22e620b49.jpg",
  },
  {
    id: 2,
    title: "Luxury Villa for Sale",
    location: "Bashundhara R/A",
    price: "৳ 2.25 Crore",
    type: "For Sale",
    image: "https://img.daisyui.com/images/house/photo-1523217582562-09d0def993a6.jpg",
  },
  // Add more listings as needed
];

const FeaturedListings = () => {
  return (
    <section id="listings" className="py-16 px-4 lg:px-20 bg-base-100 text-base-content">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        Featured Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((property) => (
          <div key={property.id} className="card shadow-lg bg-base-200">
            <figure>
              <img src={property.image} alt={property.title} className="h-56 w-full object-cover rounded-t-box" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg text-secondary">{property.title}</h3>
              <p className="text-sm text-base-content/80">{property.location}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="badge badge-accent badge-outline">{property.type}</span>
                <span className="text-primary font-semibold">{property.price}</span>
              </div>
              <div className="mt-4">
                <Link to={`/listing/${property.id}`} className="btn btn-sm btn-primary w-full">
  View Details
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedListings;
