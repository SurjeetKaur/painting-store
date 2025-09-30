import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="bg-black text-white flex flex-col justify-center h-[100px] items-center">
        <p>&copy; {new Date().getFullYear()} SK Painting Store. All rights reserved.</p>
        <div className="flex gap-6 mt-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className='text-orange text-2xl' />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='text-orange text-2xl' />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className='text-orange text-2xl' />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;