import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => (
  <footer className="bg-base-300 text-base-content pt-10 pb-6">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
      {/* Services */}
      <nav aria-label="Services">
        <h6 className="footer-title">Services</h6>
        <ul className="space-y-2">
          <li><a href="#" className="link link-hover">Branding</a></li>
          <li><a href="#" className="link link-hover">Design</a></li>
          <li><a href="#" className="link link-hover">Marketing</a></li>
          <li><a href="#" className="link link-hover">Advertisement</a></li>
        </ul>
      </nav>

      {/* Company */}
      <nav aria-label="Company">
        <h6 className="footer-title">Company</h6>
        <ul className="space-y-2">
          <li><NavLink to="/about" className="link link-hover">About Us</NavLink></li>
          <li><NavLink to="/terms" className="link link-hover">Terms & Privacy</NavLink></li>
          <li><NavLink to="/contact" className="link link-hover">Contact</NavLink></li>
          <li><a href="#" className="link link-hover">Jobs</a></li>
          <li><a href="#" className="link link-hover">Press Kit</a></li>
        </ul>
      </nav>

      {/* Social */}
      <nav aria-label="Social">
        <h6 className="footer-title">Social</h6>
        <div className="flex space-x-4">
          {/* Replace `a` hrefs with real URLs */}
          <a href="#" className="fill-current hover:text-primary">
            {/* Twitter SVG */}
          </a>
          <a href="#" className="fill-current hover:text-primary">
            {/* YouTube SVG */}
          </a>
          <a href="#" className="fill-current hover:text-primary">
            {/* Facebook SVG */}
          </a>
        </div>
      </nav>
    </div>

    <div className="text-center mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Bari Ghar. All rights reserved.
      </p>
    </div>
  </footer>
)

export default Footer
