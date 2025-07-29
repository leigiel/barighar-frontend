import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "🏡",
      title: "Buy a Home",
      description: "Explore a wide range of homes that fit your lifestyle and budget.",
    },
    {
      icon: "📦",
      title: "Rent a Home",
      description: "Find short or long-term rentals with trusted landlords.",
    },
    {
      icon: "📝",
      title: "List Your Property",
      description: "Sell or rent your property with ease and maximum visibility.",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-20 bg-base-200 text-base-content">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="card bg-base-100 shadow">
            <div className="card-body text-center items-center">
              <span className="text-4xl mb-3">{service.icon}</span>
              <h3 className="card-title text-secondary mb-2">{service.title}</h3>
              <p className="text-base-content/80">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;