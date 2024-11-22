import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { SiThreads } from "react-icons/si";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer bg-gray-700 text-white grid grid-cols-1 md:grid-cols-2 p-10">
        {/* Left Section */}
        <div className="left">
          <h1 className='font-bold text-3xl text-white p-12 hover:underline'>Follow Me</h1>
          <div className="icon gap-x-6 flex px-2">
            <a href="https://github.com/theNareshofficial" target="_blank" rel="noopener noreferrer" className='text-3xl animate-bounce hover:text-black'><FaGithub /></a>
            <a href="https://youtube.com/@nareshtechweb930?si=zY_VFeg7zNsUtLHm" target="_blank" rel="noopener noreferrer" className='text-3xl animate-bounce hover:text-red-600'><FaYoutube /></a>
            <a href="https://www.instagram.com/the_naresh_offcial/" target="_blank" rel="noopener noreferrer" className='text-3xl animate-bounce hover:text-orange-500'><GrInstagram /></a>
            <a href="https://x.com/the_Naresh_tech" target="_blank" rel="noopener noreferrer" className='text-3xl animate-bounce hover:text-black'><BsTwitterX /></a>
            <a href="https://www.threads.net/@the_naresh_offcial" target="_blank" rel="noopener noreferrer" className='text-3xl animate-bounce hover:text-black'><SiThreads /></a>
            <a href="https://medium.com/@theNareshofficial" target="_blank" rel="noopener noreferrer" className='text-3xl animate-bounce hover:text-black'><BsMedium /></a>
          </div>
        </div>

        {/* Right Section */}
        <div className="right">
          <h1 className='font-bold text-3xl text-white p-12 hover:text-yellow-400'>THANKYOU</h1>
          <div className="icon gap-x-6 flex px-14">
            <p className='font-bold text-lg hover:first-letter:text-white hover:text-yellow-400'>
              © {currentYear} theNareshofficial. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
