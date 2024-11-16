// src/components/Service2.jsx
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  "Manager",
  "Executive Officer",
  "Public Relation Officer",
  "Accountant",
  "Auditor",
  "Cashier",
  "Secretaries",
  "Receptionist / Front Desk Clerk",
  "Cooks",
  "Restaurant Captain",
  "Barman / Bartender",
  "Waiter / Waitress",
  "Baker",
  "Housekeeper",
  "Janitor",
  "Service Man / Bell Boy",
  "Store Keeper",
  "Security Guard",
  "Security Officer"
];

const Service2 = () => {
  return (
    <div className='bg-white'>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#711B45] text-center mb-8"
      >
        General Cleaning & Hospitality Services
      </motion.h2>

      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1726718652365-bfdafc166392?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-black bg-opacity-70 p-10 w-full max-w-6xl rounded-lg"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            General Cleaning & Hospitality Services
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white text-center text-lg mb-6"
          >
            We provide a variety of services across housekeeping, event support, cleaning, managerial roles, and more.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 text-white text-lg">
            {services.map((service, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start"
              >
                <span className="mr-2 text-yellow-300">•</span> {service}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service2;