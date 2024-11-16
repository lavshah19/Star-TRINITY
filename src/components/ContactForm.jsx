// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className=" p-6 rounded-lg shadow-md bg-[#E5E7EB] w-[]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='pt-16'>
          <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
