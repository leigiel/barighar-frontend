import React from 'react';

const About = () => {
 return (
    <section className="px-6 lg:px-24 py-16 bg-base-100 text-base-content">
      {/* Hero Statement */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">About Bari Ghar</h1>
        <p className="mt-4 text-xl italic text-secondary">
          “Home isn’t just a place. It’s a feeling, a story, a safe corner of the world you call your own.”
        </p>
      </div>

      {/* Who We Are */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Who We Are</h2>
        <p className="text-base-content/80">
          At <strong>Bari Ghar</strong>, we’re more than just a real estate platform. We’re a collective of dreamers,
          doers, and locals who know that choosing a home is deeply personal. From first flats to family upgrades —
          we guide you with clarity and care.
        </p>
        <p className="mt-4 text-base-content/80">
          Our tools are intuitive, our design is warm, and our values are rooted in simplicity, honesty, and making you
          feel at home before you’ve even moved in.
        </p>
      </div>

      {/* Mission */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
        <ul className="list-disc list-inside space-y-2 text-base-content/80">
          <li><strong>Trust</strong> – Verified listings, real support, no hidden games.</li>
          <li><strong>Ease</strong> – Smart tools, guided visits, and clear communication.</li>
          <li><strong>Warmth</strong> – A tone that feels welcoming, never transactional.</li>
        </ul>
      </div>

      {/* Story */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
        <p className="text-base-content/80">
          Bari Ghar began with a simple truth: most platforms treat homes like products. We see homes as milestones.
          Each listing is a chapter, each search is a journey, each match is a new beginning. Our approach is shaped by
          empathy, crafted for Bangladesh, and designed to connect people with homes that truly feel right.
        </p>
      </div>

      {/* Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">What We Value</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Local roots, global standards",
              desc: "We’re built in Bangladesh, inspired by world-class usability and trust."
            },
            {
              title: "Intentional design",
              desc: "Every detail, from colors to copy, is crafted for a smooth journey."
            },
            {
              title: "People over properties",
              desc: "We focus on stories, not just listings. Emotion matters."
            }
          ].map((value, idx) => (
            <div key={idx} className="bg-base-200 p-6 rounded-box shadow-md">
              <h3 className="text-lg font-semibold text-secondary mb-2">{value.title}</h3>
              <p className="text-base-content/80">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-primary">Join the Journey</h2>
        <p className="mt-4 text-base-content/80">
          Bari Ghar is growing — shaped by your feedback and stories. Browse listings, ask questions, save favorites.
          Whether you're buying, renting, or just exploring, we’re honored to be part of your search for “home.”
        </p>
      </div>
    </section>
  );
};

export default About;