import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => (
  <section className="py-16 px-6 lg:px-20 bg-primary text-primary-content text-center rounded-box shadow-lg">
    <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
    <p className="mb-8 max-w-xl mx-auto">
      Join thousands of happy customers and browse the best listings today.
    </p>
    <Link to="/listings" className="btn btn-secondary btn-lg">
      Browse Listings
    </Link>
  </section>
)

export default CallToAction
