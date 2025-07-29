import React from "react";
import { useParams } from "react-router-dom";

const mockListing = {
  title: "Modern Duplex for Sale",
  location: "Gulshan-2, Dhaka",
  price: "৳ 1.95 Crore",
  type: "For Sale",
  description: "Spacious 4-bedroom duplex with modern amenities, rooftop garden, and 2-car parking.",
  image: "https://img.daisyui.com/images/house/photo-1523217582562-09d0def993a6.jpg",
  agent: {
    name: "Rezaul Karim",
    phone: "+8801XXXXXX",
    email: "reza@propertyagent.com",
  },
};

const ListingDetails = () => {
  const { id } = useParams();
  // Later you can fetch listing data using this id

  return (
    <section className="px-6 lg:px-24 py-16 bg-base-100 text-base-content">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <img src={mockListing.image} alt={mockListing.title} className="rounded-box shadow-lg w-full" />

        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">{mockListing.title}</h1>
          <p className="text-base-content/80 mb-2">{mockListing.location}</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="badge badge-secondary">{mockListing.type}</span>
            <span className="text-xl text-primary font-semibold">{mockListing.price}</span>
          </div>
          <p className="mb-6">{mockListing.description}</p>

          {/* Agent Info */}
          <div className="bg-base-200 p-6 rounded-box shadow">
            <h2 className="text-lg font-bold text-secondary mb-2">Contact Agent</h2>
            <p className="text-base-content/80">{mockListing.agent.name}</p>
            <p className="text-base-content/80">{mockListing.agent.phone}</p>
            <p className="text-base-content/80">{mockListing.agent.email}</p>
            <button className="btn btn-sm btn-accent mt-4 w-full">Send Inquiry</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingDetails;
