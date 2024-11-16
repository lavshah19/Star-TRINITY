// src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Service2 from './Service2';
import ConstructionServices from './ConstructionServices';
import MajorClients from './MajorClients';

const Services = () => {
  const services = [
    {
      title: "Masonry and Carpentry Services",
      items: [
        "Mason (Block, Tile, Plaster, Concrete, Marble)",
        "Carpenter (Finishing & Shuttering, Fixer)",
        "Scaffolder (Certified)"
      ],
      img: "https://plus.unsplash.com/premium_photo-1682882688309-54527c93dc97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Electrical and Plumbing Services",
      items: [
        "Electrician",
        "Pipe Fitter",
        "Plumber",
        "Rigger (Certified)"
      ],
      img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Operational and Supervisory Roles",
      items: [
        "Supervisor",
        "Time Keeper",
        "Manlift Operator",
        "Forklift Operator",
      ],
      img: "https://plus.unsplash.com/premium_photo-1661962226921-4ae283c4be59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Fabrication, Painting, and Welding",
      items: [
        "Fabricator (Certified)",
        "Painter",
        "Insulator",
        "Flagman / Banksman",
        "Welder (Certified)",
        "Duct Man",
      ],
      img: "https://images.unsplash.com/photo-1513350375601-5040cae53a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Installation and Logistics Management",
      items: [
        "Installer",
        "Chargehand",
        "Foreman",
        "Crane Operator",
        "Heavy Duty Driver",
        "Store Keeper",
      ],
      img: "https://plus.unsplash.com/premium_photo-1681074963670-2110c58f4c24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  

  return (
    <>
      <motion.div 
        id="services" 
        className="min-h-screen flex items-center  text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto bg-white p-8 md:p-12 rounded-lg ">
          <motion.h1 
            className="text-4xl font-extrabold text-[#711B45] text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our Services
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundImage: `url('${service.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out hover:bg-opacity-30" />
                <div className="relative p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">{service.title}</h2>
                  <ul className="list-disc list-inside text-white">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-lg">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <Service2 />
      <ConstructionServices />
      <MajorClients />
    </>
  );
};

export default Services;
