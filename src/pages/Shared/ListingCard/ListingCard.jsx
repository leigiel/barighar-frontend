import React from "react";
import { Link } from "react-router-dom";

const ListingCard = ({ listing }) => {
  const { _id, title, location, price, image } = listing;

  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-primary font-bold mt-2">${price}</p>
        <Link
          to={`/listing/${_id}`}
          className="inline-block mt-4 text-white bg-secondary px-4 py-2 rounded hover:bg-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
