// src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

import About from './About';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  const handleContactClick = () => {
    window.location.href =
      'mailto:info@adminstartrinity.com?subject=Inquiry&body=Hello, I would like to know more about your services.';
  };

  return (
    <>
      <div className="min-h-screen flex items-center  text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12 bg-white bg-opacity-90 rounded-lg p-8 md:p-12 ">
          {/* Left Content Section */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#711B45]">
              Welcome to STAR TRINITY CONTRACTING
            </h1>
            <p className="text-lg md:text-xl text-gray-800">
              Your reliable partner in high-quality trading and service
              solutions. We offer expertise and commitment to meet your
              business needs.
            </p>

            {/* Mission Statement */}
            <div className="bg-[#711B45] text-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-md leading-relaxed">
                At STAR TRINITY CONTRACTING W.L.L, we are committed to providing
                top-notch trading and service solutions tailored to meet the
                unique needs of our clients. Our mission is to ensure trust,
                reliability, and customer satisfaction in every business
                partnership.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-6">
              <p className="text-xl font-medium text-[#711B45] mb-4">
                Want to know more about our services? Reach out to us!
              </p>
              <button
                onClick={handleContactClick}
                className="bg-[#711B45] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#9B2D56] transition"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-3/4 h-80 md:h-96 flex items-center justify-center shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1676666379051-383ed1b005e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Introductory"
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
