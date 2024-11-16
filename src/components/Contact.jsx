// src/components/Contact.jsx
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      <div className="p-4 min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900">
        {/* Left Side: Contact Information */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8 bg-gray-800 shadow-md rounded-lg p-6 flex items-center justify-center flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-400">Contact Us</h2>
          <p className="mt-2 md:mt-4 text-base md:text-lg text-center text-white">
            Get in touch with us for inquiries, support, or partnership opportunities. We’re here to help!
          </p>
          <div className="mt-6 text-white text-center">
            <p>
              <strong>Email:</strong>
              <a href="mailto:info@satsifydoha.com" className="text-yellow-200 hover:underline">
                info@star.com
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
          </div>
        </div>
        
        {/* Right Side: Contact Form */}
        <div className="flex-1 shadow-md rounded-lg bg-gray-800 p-6">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
