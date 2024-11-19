import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Project', path: '/project' },
    { name: 'About', path: '/about' },
    { name: 'Coffee', path: '/coffee' }, // You can create a Coffee component later
  ];

  return (
    <>
      <nav className="bg-black text-white font-bold py-3">
        <div className="container text-2xl flex justify-between mx-auto items-center max-w-screen-xl">
          {/* Logo Section */}
          <div className="logo">
            <img
              className="w-10 h-10"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi609luN-_Nyx9Ti8cv-M_WPXmrJIwjYManZyVS5tg_xE25O_-et5CM8A6hwzMrzEqHJiPbEqkToK7EOh1jywMDQtCpsuB4DrAzLyqfYbiVvzZj_E3ZNHsgEjJORyMvJ4t7mp26v62OTs5DIvlh6mWbYbWuuHAXwowRytPn6xS_VgMVEYY/s220/ai%20circle.png"
              alt="theNareshofficial Logo"
            />
          </div>

          {/* Title Section */}
          <div className="hover:text-yellow-400 hover:underline hover:decoration-dotted hover:p-1 hover:rounded-xl hover:cursor-pointer">
            theNareshofficial
          </div>

          {/* Navigation Menu */}
          <div className="menu space-x-3 p-3 flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-yellow-400 hover:underline hover:decoration-wavy hover:first-letter:text-white hover:p-1 hover:rounded-xl hover:first-letter:font-extrabold hover:cursor-pointer"
                aria-label={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
