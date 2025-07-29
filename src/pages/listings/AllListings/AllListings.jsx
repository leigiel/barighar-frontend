import React from "react";
import { Link } from "react-router-dom";

const listings = [
  {
    id: 1,
    title: "Cozy Flat in Uttara",
    location: "Uttara, Dhaka",
    price: "৳ 28,000/month",
    type: "For Rent",
    image: "https://img.daisyui.com/images/house/photo-1549187774-b4b22e620b49.jpg",
  },
  {
    id: 2,
    title: "Modern Duplex for Sale",
    location: "Gulshan-2",
    price: "৳ 1.95 Crore",
    type: "For Sale",
    image: "https://img.daisyui.com/images/house/photo-1523217582562-09d0def993a6.jpg",
  },
  // Add more listings or fetch from API
];

const AllListings = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-base-100 text-base-content">
      <h1 className="text-4xl font-bold text-primary text-center mb-10">Browse Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((home) => (
          <div key={home.id} className="card bg-base-200 shadow-md">
            <figure>
              <img src={home.image} alt={home.title} className="h-56 w-full object-cover rounded-t-box" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg text-secondary">{home.title}</h2>
              <p className="text-sm text-base-content/70">{home.location}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="badge badge-outline badge-accent">{home.type}</span>
                <span className="text-primary font-semibold">{home.price}</span>
              </div>
              <div className="mt-4">
                <Link to={`/listing/${home.id}`} className="btn btn-sm btn-primary w-full">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllListings;
