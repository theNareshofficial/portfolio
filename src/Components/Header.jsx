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
            className="w-15 h-10 cursor-pointer shadow-lg shadow-purple-600 hover:shadow-lg hover:shadow-yellow-500 rounded-full"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY2U6VHuaSJ6q205WjLGkfnI-2ZnzsrueSNpSDu6Y-5ZCwW46SOemUWqjQvObZICved9SZvyhakf7-sdOwpa92rhsdfL-CZnxeceUcQyUosOLeNjOtS-UTZjuYoloRxFLZ-tQsJfM7apsafdQUtaD5j7CsRRr-QoTSkIFHvkwvczVI2jw/s220/Naresh-modified.png"
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