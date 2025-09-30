
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaBars,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaSearch,
  FaTag,
} from "react-icons/fa";


function Header() {
  const [open, setOpen] = useState(false);
  

  return (
    <header className="bg-black text-white w-full ">
      {/*  Topbar */}
      <div className="flex md:flex-row items-center justify-around px-4 md:px-8">
        {/* Left - Search */}
        <div className=" flex items-center justify-start bg-white rounded-full mx-3  mt-0 md:mb-0 overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className=" px-2 py-2 text-black outline-none"
            />
            <button className=" text-gray-600 bg-white rounded-r-3xl px-3">
              <FaSearch />
            </button>
        </div>

        {/* Center - Logo */}
       
        <Link to="/" className=" text-center hidden md:block font-bold text-xl">
          <img
            src="/images/store_logo.png"
            alt="Logo"
            className="inline-block h-24 w-24 object-contain"
          />
        </Link>
        <Link to="/" className=" md:hidden text-center font-bold text-xl mx-2">
          <img
            src="/images/favicons/favicon-32x32.png"
            alt=" small Logo"
            className=" inline-block "
          />
        </Link>

        {/* Right - Desktop Icons */}
        <div className="hidden md:flex justify-end items-center gap-6">
          <select className="bg-black text-white border border-gray-600 px-2 py-1 rounded">
            <option >English</option>
            <option >French</option>
          </select>
          <select className="bg-black text-white border border-gray-600 px-2 py-1 rounded">
            <option>USD</option>
            <option>CAD</option>
          </select>
          <FaHeart className="cursor-pointer hover:text-orange" />
          <Link to="/signup" ><FaUser className="cursor-pointer hover:text-orange" /></Link>
          <FaShoppingCart className="cursor-pointer hover:text-orange" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/*  Bottom Navigation */}
      <nav className={`flex-col  w-full justify-center pb-4 items-center md:flex-row md:flex md:gap-6 gap-2 bg-black text-lg absolute md:static bg-orange-500 left-0  md:w-auto transition-all duration-200 ease-in ${open ? 'flex top-0 relative' : 'hidden md:flex top-[-400px]'}`}  
      >
        <Link
          to="/"
          className="flex items-center gap-2 py-2 md:py-0 hover:text-orange"
          onClick={() => setOpen(false)}
        >
          <FaHome className="text-orange" /> Home
        </Link>  
        <Link
          to="/about"
          className="flex items-center gap-2 py-2 md:py-0 hover:text-orange"
          onClick={() => setOpen(false)}
        >
          <FaInfoCircle className="text-orange" /> About
        </Link>
        <Link
          to="/contact"
          className="flex items-center gap-2 py-2 md:py-0 hover:text-orange"
          onClick={() => setOpen(false)}
        >
          <FaEnvelope className="text-orange" /> Contact
        </Link>
        <Link
          to="/cart"
          className="flex items-center gap-2 py-2 md:py-0 hover:text-orange"
          onClick={() => setOpen(false)}
        >
          <FaTag className="text-orange" /> Sale
        </Link>

        {/* Mobile-only: icons + language inside menu */}
        <div className="flex md:hidden flex-col gap-3 mt-4 text-white">
          <div className="flex gap-4 justify-center">
            <FaHeart />
            <FaUser />
            <FaShoppingCart />
          </div>
          <div className="flex gap-3 justify-center">
            <select className="bg-black text-white border border-gray-600 px-2 py-1 rounded">
              <option>English</option>
              <option>French</option>
            </select>
            <select className="bg-black text-white border border-gray-600 px-2 py-1 rounded">
              <option>USD</option>
              <option>CAD</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
