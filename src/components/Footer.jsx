import React from 'react';
import {   Twitter } from "lucide-react";
import { FaTelegramPlane, FaRedditAlien } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#051422] text-light text-white px-20 py-20">
      <div className="container flex items-center flex-col space-y-12 md:flex-row">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Moonex Logo" className="" />
        </div>
        <ul className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-20 mx-auto font-bold'>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Roadmap</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Contact Us</a></li>
        </ul>
        <div className='space-y-4 font-bold'>
            <p className="text-2xl">Contact <span className='text-[#e0b417]'>Us</span></p>
            <div className="icons flex space-x-4">
                <FaTelegramPlane className='bg-white text-black rounded-full h-8 w-8'/>
                <FaRedditAlien className='rounded-full h-8 w-8'/>
                <Twitter className='rounded-full h-8 w-8'/>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;