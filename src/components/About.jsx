// src/components/About.jsx
import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutBoxRef = useRef(null);
  const goalBoxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutBoxRef.current) observer.observe(aboutBoxRef.current);
    if (goalBoxRef.current) observer.observe(goalBoxRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="about" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="container mx-auto p-6 md:p-12 bg-gray-800 rounded-lg shadow-xl">
          <h1 className="text-4xl font-extrabold text-teal-400 text-center mb-6">
            About STAR TRINITY CONTRACTING W.L.L
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* About Box */}
            <div 
              ref={aboutBoxRef}
              className="bg-gray-700 rounded-lg shadow-lg p-6 opacity-0 translate-x-[-50px] transition-all duration-700"
            >
              <h2 className="text-3xl font-bold text-teal-400 mb-4">Who We Are</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                STAR TRINITY CONTRACTING W.L.L is dedicated to delivering outstanding services in Facility Management, Construction, MEP, and Hospitality sectors across Qatar. Known for our efficiency and reliability, we consistently adapt to meet the specific needs of our clients. Over the years, our name has become synonymous with excellence and trustworthiness.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-2">
                Our expert team works tirelessly to ensure our clients receive solutions tailored to their distinct requirements. We value client satisfaction and strive to build strong, lasting partnerships based on trust and mutual success.
              </p>
            </div>

            {/* Our Goal Box */}
            <div 
              ref={goalBoxRef}
              className="bg-teal-600 text-gray-900 rounded-lg shadow-lg p-6 opacity-0 translate-x-[50px] transition-all duration-700"
            >
              <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
              <p className="text-lg leading-relaxed">
                At STAR TRINITY CONTRACTING W.L.L, we aim to uphold professionalism and excellence in every project we undertake. Our primary focus is to meet and exceed the expectations of our clients, ensuring their complete satisfaction through top-quality service delivery.
              </p>
              <p className="text-lg leading-relaxed mt-2">
                We collaborate with several prominent local companies, enabling us to offer diverse services across the following areas:
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-200">
                <li>Integrated Facility Management Solutions</li>
                <li>Comprehensive Construction and Development Services</li>
                <li>Specialized MEP Services</li>
                <li>Innovative Solutions for the Hospitality Sector</li>
                <li>Business Efficiency Consultation Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
