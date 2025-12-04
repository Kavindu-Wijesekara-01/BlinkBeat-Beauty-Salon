// Footer.jsx
import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Hair Styling',
    'Hair Coloring',
    'Nail Care',
    'Skin Care',
    'Makeup'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent font-pacifico">
              BlinkBeat Beauty 
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your premier destination for beauty and wellness. We're dedicated to helping you look and feel your absolute best with our expert services.
            </p>
            <div className="flex space-x-4">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <FaFacebook className='w-4 h-4 text-pink-600'/>
                </div>
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <FaYoutube className='w-4 h-4 text-pink-600'/>
              </div>
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <FaTiktok className='w-4 h-4 text-pink-600'/>
              </div>
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <IoLogoWhatsapp className='w-4 h-4 text-pink-600'/>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Devoloper's Details</h4>
            <ul className="space-y-2">
              <li><a href="" className='hover:text-pink-500 text-gray-300'>FACEBOOK</a></li>
              <li><a href="" className='hover:text-pink-500 text-gray-300'>INSTAGRAM</a></li>
              <li><a href="https://www.linkedin.com/in/kavindu-wijesekara-93a8a6385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blanck" className='hover:text-pink-500 text-gray-300'>LINKEDIN</a></li>
              <li><a href="https://github.com/Kavindu-Wijesekara-01" target="_blanck"className='hover:text-pink-500 text-gray-300'>GITHUB</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-pink-400 mt-0.5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <p className="text-gray-300 text-sm">
                  123 Highlevel Road<br />
                  Nugegoda.
                </p>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-pink-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <p className="text-gray-300 text-sm">0776091697</p>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-pink-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <p className="text-gray-300 text-sm">BlinkBeat@mysalon.com</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2 text-white">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 text-white text-sm rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                />
                <button className="bg-linear-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-r-lg text-sm font-semibold hover:from-pink-600 hover:to-purple-700 transition duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} BlinkBeat Beauty Salon. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;