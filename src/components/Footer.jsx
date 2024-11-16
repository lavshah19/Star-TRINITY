// src/components/Footer.jsx
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#711B45] text-white py-6 mt-8 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Company Information */}
          <div className="mb-4 md:mb-0 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-bold"
            >
              <span className="text-yellow-500">STAR</span> TRINITY CONTRACTING W.L.L
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-md text-gray-200"
            >
              Your satisfaction is our priority!
            </motion.p>
          </div>

          {/* Center: Links */}
          <div className="mb-4 md:mb-0 text-center">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl font-semibold"
            >
              <span className="text-yellow-500">Quick </span>Links
            </motion.h4>
            <ul className="flex space-x-4 text-lg text-gray-200 items-center justify-center">
              <li>
                <Link to="/" className="hover:text-yellow-300 hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-300 hover:underline">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-300 hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-300 hover:underline">Contact</Link>
              </li>
            </ul>
            <div className="text-center mt-4">
              <p className="text-md text-gray-200">
                © {new Date().getFullYear()} STAR TRINITY CONTRACTING W.L.L. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Side: Social Media */}
          <div className="text-center">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl font-semibold"
            >
              <span className="text-yellow-500">Follow </span> Us
            </motion.h4>
            <div className="flex space-x-4 mt-2 justify-center">
              <a href="https://www.facebook.com/Rajaramesh?mibextid=LQQJ4d" aria-label="Follow us on Facebook" className="hover:text-yellow-300">
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </a>
              <a href="https://x.com/RameshR69740146?s=08" aria-label="Follow us on Twitter" className="hover:text-yellow-300">
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
              <a href="https://www.instagram.com/raw_mesh07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Follow us on Instagram" className="hover:text-yellow-300">
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
