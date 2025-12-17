// ContactSection.jsx
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactSection = () => {

  const [isVisible, setIsVisible] = useState(false);
    
  useEffect(() => {
      setIsVisible(true);
    }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const services = [
    'Haircut & Styling',
    'Hair Coloring',
    'Hair Treatment',
    'Facial Treatment',
    'Other'
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          
          <div 
              className={`flex justify-center items-center gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            >
              <div className="w-8 h-1 rounded-xl px bg-pink-500"></div>
              <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse"></div>
              <div className="w-8 h-1 rounded-xl px bg-rose-500"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
            Ready to book your appointment or have questions? We'd love to hear from you. 
            Contact us today and let us help you look and feel your best.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="rounded-2xl shadow-lg p-8 bg-linear-to-br from-pink-700 via-black to-pink-800">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6 ">
              <div className="flex items-start md:p-3">
                <div className="bg-pink-100 p-3 rounded-full mr-4">                  
                    <FaLocationDot className='w-6 h-6 text-pink-600' />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Our Location</h4>
                  <p className="text-gray-300">123 Highlevel Road<br />Nugegoda.</p>
                </div>
              </div>

              <div className="flex items-start md:p-3">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <IoIosCall className='w-6 h-6 text-pink-600'/>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Phone Number</h4>
                  <p className="text-gray-300">0776091697</p>
                </div>
              </div>

              <div className="flex items-start md:p-3">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <MdEmail className='w-6 h-6 text-pink-600'/>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Email Address</h4>
                  <p className="text-gray-300">BlinkBeat@mysalon.com</p>
                </div>
              </div>

              <div className="flex items-start md:p-3">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <IoTime className='w-6 h-6 text-pink-600'/>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Business Hours</h4>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-7">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <FaFacebook className='w-6 h-6 text-pink-600 cursor-pointer'/>
                </div>
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <FaYoutube className='w-6 h-6 text-pink-600 cursor-pointer'/>
                </div>
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <FaTiktok className='w-6 h-6 text-pink-600 cursor-pointer'/>
                </div>
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <IoLogoWhatsapp className='w-6 h-6 text-pink-600 cursor-pointer'/>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Book an Appointment</h3>
            
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-300"
                  placeholder="Tell us about your needs or any special requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white md:px-6 px-8 py-3 rounded-md transform hover:scale-105 transition duration-300 shadow-lg"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ContactSection;