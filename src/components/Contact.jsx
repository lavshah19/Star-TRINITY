// src/components/Contact.jsx
import React from 'react';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <div className="p-4 min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
        {/* Left Side: Contact Information */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8 bg-[#711B45] shadow-md rounded-lg p-6 flex items-center justify-center flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-center text-white"
          >
            Contact Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 md:mt-4 text-base md:text-lg text-center text-white"
          >
            Get in touch with us for inquiries, support, or partnership opportunities. We’re here to help!
          </motion.p>
          <div className="mt-6 text-white text-center">
            <p>
              <strong>Email:</strong>
              <a href="mailto:info@adminstartrinity.com" className="text-yellow-200 hover:underline">
              info@adminstartrinity.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>
              <a href="tel:+97477880478" className="text-yellow-200 hover:underline">
                +974 77880478
              </a>
            </p>
            <p><strong>Address:</strong> P.O. Box: 41029, Al Ghanim, Doha, Qatar</p>
            <p><strong>Chief Executive Officer:</strong> Mohammed Nasser M.Y Al-Haddad</p>
            <p><strong>Business Executive:</strong>  Ramesh Rokaya</p>
          </div>
         
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 shadow-md rounded-lg p-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
