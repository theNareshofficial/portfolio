import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Project', path: '/project' },
    { name: 'About', path: '/about' },
    { name: 'Coffee', path: '/coffee' },
  ];

  return (
    <nav className="bg-black text-white font-bold py-3">
      <div className="container flex justify-between items-center mx-auto px-4 max-w-screen-xl">
        {/* Logo Section */}
        <div className="logo flex items-center">
          <img
            className="w-15 h-10 cursor-pointer hover:shadow-lg hover:shadow-purple-800 rounded-full"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi609luN-_Nyx9Ti8cv-M_WPXmrJIwjYManZyVS5tg_xE25O_-et5CM8A6hwzMrzEqHJiPbEqkToK7EOh1jywMDQtCpsuB4DrAzLyqfYbiVvzZj_E3ZNHsgEjJORyMvJ4t7mp26v62OTs5DIvlh6mWbYbWuuHAXwowRytPn6xS_VgMVEYY/s220/ai%20circle.png"
            alt="theNareshofficial Logo"
          />
          <span className="ml-2 text-xl hover:text-yellow-400">
            theNareshofficial
          </span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-yellow-400 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-yellow-400 hover:underline hover:decoration-wavy hover:p-1 hover:rounded-xl"
              aria-label={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-start space-y-2 px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block hover:text-yellow-400 hover:underline hover:decoration-wavy hover:p-1"
              aria-label={link.name}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;