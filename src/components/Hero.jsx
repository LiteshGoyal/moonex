import React from "react";
import { useState } from "react";
const Hero = () => {
  const sectionStyle = {
    backgroundImage: `url("/bg-img.svg")`,
    backgroundSize: "cover", // Make sure the image covers the entire section
    backgroundRepeat: "no-repeat", // Avoid image repetition
    height: "100vh", // Full viewport height
    width: "100%", // Full width
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div style={sectionStyle} className="smw-full">
      <nav className="py-4 px-6 flex justify-between items-center lg:mx-12">
        {/* Logo */}
        <img src="/logo.svg" alt="Logo" />

        {/* Hamburger Button (Visible on small screens) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col lg:flex-row items-start lg:items-center w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-32 text-white ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <li className="hover:text-yellow-400 cursor-pointer font-bold">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer font-bold">
            <a href="/">About Us</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer font-bold">
            <a href="/">Roadmap</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer font-bold">
            <a href="#faq">FAQs</a>
          </li>
          <li className="hover:text-yellow-400 cursor-pointer font-bold">
            <a href="/">Contact Us</a>
          </li>
        </ul>

        {/* Connect Wallet Button */}
        <button className="hidden md:block bg-yellow-400 w-48 px-4 font-bold py-2 text-[#111111] rounded-full hover:bg-yellow-500">
          Connect Wallet
        </button>
      </nav>
      <section className="text-center text-white py-20 lg:w-6/12 relative mx-4 lg:ms-20 my-28 text-start">
        <h1 className="text-4xl md:text-6xl font-black">
          Trusted Multi-Chain <span className="text-[#efd728]"> DEX</span>{" "}
          Platform
        </h1>
        <p className="mt-4 text-lg text-[#9E9E9E]">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX.
        </p>
        <div className="mt-6 flex justify-start gap-4">
          <button className="bg-yellow-400 px-6 py-2 text-[#111111] font-bold rounded-full hover:bg-yellow-500">
            Connect Wallet
          </button>
          <button className="bg-transparent border-2 border-yellow-400 px-6 py-2 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black">
            Trade Crypto
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
