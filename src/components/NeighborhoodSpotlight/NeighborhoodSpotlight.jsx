import React from 'react'

const NeighborhoodSpotlight = () => {
  const areas = [
    {
      name: "Gulshan",
      tagline: "Luxury & Lifestyle",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Dhanmondi",
      tagline: "Culture & Community",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Bashundhara",
      tagline: "Modern Living",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <section className="py-16 px-4 lg:px-20 bg-base-100">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Explore Neighborhoods</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {areas.map((area, idx) => (
          <div key={idx} className="card bg-base-200 shadow-md">
            <figure>
              <img
                src={area.img}
                alt={`View of ${area.name}`}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-secondary">{area.name}</h3>
              <p>{area.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NeighborhoodSpotlight
