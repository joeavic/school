// components/Header.jsx
'use client'
import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#003366] text-white py-2 px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="contact-info text-sm flex items-center space-x-4">
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>+91 123-456-7890</span>
            </div>
            <div className="hidden md:flex items-center">
              <FaEnvelope className="mr-2" />
              <span>info@nosegaypublicschool.edu.in</span>
            </div>
          </div>
          <div className="social-icons flex space-x-4">
            <Link href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4 px-4 md:px-6 shadow-md">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex items-center">
            <div className="logo mr-4">
              <img 
                src="/images/logo.png" 
                alt="Nosegay Public School Logo" 
                className="h-35 md:h-35"
              />
            </div>
            <div className="school-name">
              <h1 className="text-[#003366] text-5xl md:text-5xl font-bold">NOSEGAY PUBLIC SCHOOL</h1>
              <p className="text-gray-600 text-sm italic">Excellence in Education Since 1995</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#004080] px-4 md:px-6">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center md:justify-center">
            <li>
              <Link href="/" className="text-white py-4 px-3 md:px-4 block hover:bg-[#005599] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white py-4 px-3 md:px-4 block hover:bg-[#005599] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/academics" className="text-white py-4 px-3 md:px-4 block hover:bg-[#005599] transition-colors">
                Academics
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="text-white py-4 px-3 md:px-4 block hover:bg-[#005599] transition-colors">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-white py-4 px-3 md:px-4 block hover:bg-[#005599] transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white py-4 px-3 md:px-4 block hover:bg-[#005599] transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;