import React from 'react';

const StatsSection = () => {
 const stats = [
    { label: "Homes Listed", value: "850+" },
    { label: "Rentals Secured", value: "1,200+" },
    { label: "Cities Covered", value: "14+" },
  ];

  return (
    <section className="py-16 px-4 lg:px-20 bg-base-200 text-center">
      <h2 className="text-3xl font-bold text-primary mb-8">Bari Ghar By the Numbers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xl">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-6 bg-base-100 rounded-box shadow">
            <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
            <p className="text-base-content/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;