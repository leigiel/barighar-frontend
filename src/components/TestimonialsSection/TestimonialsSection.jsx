import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Tanvir Ahmed",
      quote: "Bari Ghar made it easy for me to rent my flat quickly and safely!",
      image: "https://img.daisyui.com/images/stock/photo-1570295999919-56ceb5ecca61.jpg",
    },
    {
      name: "Shamima Nasrin",
      quote: "I found the perfect home in Bashundhara — everything was smooth and professional.",
      image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-20 bg-base-100">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((person, idx) => (
          <div key={idx} className="card card-side bg-base-200 shadow-md p-4 items-center">
            <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full border border-primary mr-6" />
            <div>
              <p className="italic text-base-content/80">“{person.quote}”</p>
              <h4 className="mt-2 font-semibold text-secondary">{person.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;