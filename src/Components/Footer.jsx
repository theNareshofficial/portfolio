import React from 'react';
import { FaGithub, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX, BsMedium } from "react-icons/bs";
import { SiThreads } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialMedia = [
    { href: "https://github.com/theNareshofficial", icon: <FaGithub />, hoverClass: "hover:text-black", label: "GitHub" },
    { href: "https://youtube.com/@nareshtechweb930?si=zY_VFeg7zNsUtLHm", icon: <FaYoutube />, hoverClass: "hover:text-red-600", label: "YouTube" },
    { href: "https://www.instagram.com/the_naresh_offcial/", icon: <GrInstagram />, hoverClass: "hover:text-yellow-500", label: "Instagram" },
    { href: "https://x.com/the_Naresh_tech", icon: <BsTwitterX />, hoverClass: "hover:text-black", label: "Twitter" },
    { href: "https://www.threads.net/@the_naresh_offcial", icon: <SiThreads />, hoverClass: "hover:text-black", label: "Threads" },
    { href: "https://medium.com/@theNareshofficial", icon: <BsMedium />, hoverClass: "hover:text-black", label: "Medium" },
  ];

  return (
    <footer>
      <div className="footer bg-gray-700 text-white grid grid-cols-1 md:grid-cols-2 p-10">
        <div className="left">
          <h1 className="font-bold text-3xl text-white p-12 hover:underline">Follow Me</h1>
          <div className="icon gap-x-6 flex px-2">
            {socialMedia.map((media, index) => (
              <a 
                key={index}
                href={media.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={media.label} 
                className={`text-3xl animate-bounce ${media.hoverClass}`}>
                {media.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="right">
          <h1 className="font-bold text-3xl text-white p-12 hover:text-yellow-400">THANK YOU</h1>
          <p className="font-bold text-lg hover:first-letter:text-white hover:text-yellow-400 px-14">
            © {currentYear} theNareshofficial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
