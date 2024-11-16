// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 px-4 md:px-8 shadow-lg sticky top-0 w-full z-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-sm sm:text-lg md:text-2xl font-bold truncate">
            <span className="text-teal-400">STAR </span> TRINITY CONTRACTING W.L.L
          </h1>

          {/* Hamburger Menu */}
          <button
            className="text-teal-400 lg:hidden text-2xl sm:text-3xl focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="navbar-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? '×' : '☰'}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`relative px-3 py-2 font-medium transition-colors duration-200 ${
                location.pathname === '/'
                  ? 'text-teal-400 border-b-2 border-teal-400'
                  : 'hover:text-teal-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`relative px-3 py-2 font-medium transition-colors duration-200 ${
                location.pathname === '/about'
                  ? 'text-teal-400 border-b-2 border-teal-400'
                  : 'hover:text-teal-300'
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`relative px-3 py-2 font-medium transition-colors duration-200 ${
                location.pathname === '/services'
                  ? 'text-teal-400 border-b-2 border-teal-400'
                  : 'hover:text-teal-300'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`relative px-3 py-2 font-medium transition-colors duration-200 ${
                location.pathname === '/contact'
                  ? 'text-teal-400 border-b-2 border-teal-400'
                  : 'hover:text-teal-300'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="navbar-menu"
          className={`lg:hidden ${
            isOpen ? 'block' : 'hidden'
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-4 pt-4 pb-3">
            <Link
              to="/"
              className={`relative block px-4 py-2 font-medium text-center transition-colors duration-200 ${
                location.pathname === '/'
                  ? 'text-teal-400 bg-gray-800'
                  : 'hover:text-teal-300 hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`relative block px-4 py-2 font-medium text-center transition-colors duration-200 ${
                location.pathname === '/about'
                  ? 'text-teal-400 bg-gray-800'
                  : 'hover:text-teal-300 hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`relative block px-4 py-2 font-medium text-center transition-colors duration-200 ${
                location.pathname === '/services'
                  ? 'text-teal-400 bg-gray-800'
                  : 'hover:text-teal-300 hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`relative block px-4 py-2 font-medium text-center transition-colors duration-200 ${
                location.pathname === '/contact'
                  ? 'text-teal-400 bg-gray-800'
                  : 'hover:text-teal-300 hover:bg-gray-800'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
