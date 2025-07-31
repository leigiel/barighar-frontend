import React, { useState } from "react";

const ListingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    type: "Rent",
    location: "",
    size: "",
    bedrooms: "",
    bathrooms: "",
    roomTypes: "",
    amenities: "",
    description: "",
    postedBy: "",
    available: true,
    featured: false,
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // For fields roomTypes and amenities, user inputs comma-separated strings, convert to arrays on submit

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic required validation
    if (!formData.title || !formData.price || !formData.location || !formData.type) {
      setMessage("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("price", Number(formData.price));
    data.append("type", formData.type);
    data.append("location", formData.location);
    data.append("size", formData.size);
    data.append("bedrooms", Number(formData.bedrooms));
    data.append("bathrooms", Number(formData.bathrooms));

    // Convert comma-separated strings into JSON strings
    // so backend can parse as array of strings
    if (formData.roomTypes.trim()) {
      data.append("roomTypes", JSON.stringify(formData.roomTypes.split(",").map(s => s.trim())));
    } else {
      data.append("roomTypes", JSON.stringify([]));
    }

    if (formData.amenities.trim()) {
      data.append("amenities", JSON.stringify(formData.amenities.split(",").map(s => s.trim())));
    } else {
      data.append("amenities", JSON.stringify([]));
    }

    data.append("description", formData.description);
    data.append("postedBy", formData.postedBy);
    data.append("available", formData.available);
    data.append("featured", formData.featured);

    if (imageFile) {
      data.append("image", imageFile);
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/listings`, {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error("Failed to create listing");
      }

      await res.json();

      setMessage("Listing created successfully!");
      setFormData({
        title: "",
        price: "",
        type: "Rent",
        location: "",
        size: "",
        bedrooms: "",
        bathrooms: "",
        roomTypes: "",
        amenities: "",
        description: "",
        postedBy: "",
        available: true,
        featured: false,
      });
      setImageFile(null);
    } catch (error) {
      setMessage(error.message || "Error creating listing");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 shadow rounded">
      <h2 className="text-2xl mb-4">Create New Listing</h2>

      <label className="block mb-2">
        Title*:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        Price*:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
          min={0}
        />
      </label>

      <label className="block mb-2">
        Type*:
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        >
          <option value="Rent">Rent</option>
          <option value="Sale">Sale</option>
        </select>
      </label>

      <label className="block mb-2">
        Location*:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        Size (e.g., "850 sqft"):
        <input
          type="text"
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g., 850 sqft"
        />
      </label>

      <label className="block mb-2">
        Bedrooms:
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          min={0}
          placeholder="Number of bedrooms"
        />
      </label>

      <label className="block mb-2">
        Bathrooms:
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          min={0}
          placeholder="Number of bathrooms"
        />
      </label>

      <label className="block mb-2">
        Room Types (comma separated):
        <input
          type="text"
          name="roomTypes"
          value={formData.roomTypes}
          onChange={handleChange}
          placeholder="e.g., Drawing Room, Kitchen, Balcony"
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        Amenities (comma separated):
        <input
          type="text"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
          placeholder="e.g., Lift, Security, AC"
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows={4}
        />
      </label>

      <label className="block mb-2">
        Posted By (email):
        <input
          type="email"
          name="postedBy"
          value={formData.postedBy}
          onChange={handleChange}
          placeholder="admin@example.com"
          className="w-full border rounded px-3 py-2"
        />
      </label>

      <label className="inline-flex items-center mb-2">
        <input
          type="checkbox"
          name="available"
          checked={formData.available}
          onChange={handleChange}
          className="mr-2"
        />
        Available
      </label>

      <label className="inline-flex items-center mb-4">
        <input
          type="checkbox"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          className="mr-2"
        />
        Featured Listing
      </label>

      <label className="block mb-4">
        Upload Image:
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Submitting..." : "Create Listing"}
      </button>

      {message && <p className="mt-4 text-center">{message}</p>}
    </form>
  );
};

export default ListingForm;
