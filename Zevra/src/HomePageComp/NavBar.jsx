import React from "react";
import logoimg from "../assets/logoimg.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-2 bg-white font-sans shadow-sm fixed top-0 z-50 backdrop-blur-md">
      {/* Left: Logo and Navigation Links */}
      <div className="flex items-center gap-16">

        <Link to={"/"}>
        {/* Logo */}
        <div className="h-12 w-auto">
          <img src={logoimg} alt="Logo" className="h-full object-contain" />
        </div>
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-10 text-gray-700 text-base font-semibold tracking-wide">
          <li className="hover:text-black transition-colors cursor-pointer">Book EV</li>
          <li className="hover:text-black transition-colors cursor-pointer">How it Works</li>
          <li className="hover:text-black transition-colors cursor-pointer">Smart AI</li>
          <li className="hover:text-black transition-colors cursor-pointer">Blog</li>
        </ul>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <Link to={"/login"}>
        <button className="text-gray-700 hover:text-black font-medium transition-colors">Sign In</button>
        </Link>
        <Link to={"/create-account"}>
        <button className="bg-gradient-to-r from-black to-gray-800 text-white px-5 py-2 rounded-xl shadow-md hover:from-gray-900 hover:to-black transition-all">
          Get Started ⚡
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
