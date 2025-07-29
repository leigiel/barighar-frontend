import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 lg:px-24 py-16 bg-base-100 text-base-content">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Get in Touch</h1>
        <p className="mt-4 text-lg text-base-content/80">
          Whether you're curious about a listing, need help navigating your journey, or just want to say hello — Bari Ghar is here for you.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-base-200 p-6 rounded-box shadow">
          <h3 className="text-xl font-semibold text-secondary mb-2">📍 Address</h3>
          <p>12/C Gulshan Avenue, Dhaka, Bangladesh</p>
        </div>
        <div className="bg-base-200 p-6 rounded-box shadow">
          <h3 className="text-xl font-semibold text-secondary mb-2">📞 Phone</h3>
          <p>+880 1XXX-XXXXXX</p>
        </div>
        <div className="bg-base-200 p-6 rounded-box shadow">
          <h3 className="text-xl font-semibold text-secondary mb-2">📧 Email</h3>
          <p>support@barighar.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-base-200 p-8 rounded-box shadow">
        <h2 className="text-2xl font-bold text-primary mb-4">Send Us a Message</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
          <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
          <textarea placeholder="Your Message" className="textarea textarea-bordered w-full h-32" required></textarea>
          <button type="submit" className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;