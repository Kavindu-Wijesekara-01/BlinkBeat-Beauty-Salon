import { img } from 'framer-motion/client';
import React, { useState,useEffect } from 'react';

const Services = () => {

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
      setIsVisible(true);
    }, []);

  const salonServices = [
    {
      id: 1,
      icon: (
        
        <img src="/cutting.jpg" alt="hello" className='rounded-2xl' />
      
      ),
      title: "Hair Styling",
      description: "Professional haircuts, styling, and complete hair makeovers for any occasion.",
      price: "Starting at Rs.1000.00",
      duration: "45 min"
    },
    {
      id: 2,
      icon: (
        
        <img src='/colour2.jpg' alt='' className=' rounded-2xl' />
      ),
      title: "Hair Coloring",
      description: "Expert different color services including highlights, and full color transformations.",
      price: "Starting at Rs.15000.00",
      duration: "60 min"
    },
    {
      id: 3,
      icon: (
        <img src='/tratment.jpg' alt='' className='rounded-2xl'  />
      ),
      title: "Hair Treatments",
      description: "Nourishing treatments for damaged hair, keratin treatments, and deep conditioning.",
      price: "Starting at Rs.13000.00",
      duration: "45 min"
    },
    {
      id: 4,
      icon: (
        <img src='/facial.jpg' alt='' className=' rounded-2xl' ></img>
      ),
      title: "Makeup & Facials ",
      description: "Professional makeup and Facials application for weddings, events, and special occasions.",
      price: "Starting at Rs.10000.00",
      duration: "45 min"
    },
    
    
  ];

  // Function to scroll to ContactSection
  const scrollToContactSection = (serviceName = '') => {
    // First scroll to the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // If a service name is provided, you could optionally auto-fill the service dropdown
      // after a short delay to ensure the section is visible
      if (serviceName) {
        setTimeout(() => {
          const serviceSelect = document.querySelector('select[name="service"]');
          if (serviceSelect) {
            // Find the option that matches the service name
            const options = Array.from(serviceSelect.options);
            const matchingOption = options.find(option => 
              option.text.includes(serviceName) || 
              serviceName.includes(option.text.split(' ')[0])
            );
            
            if (matchingOption) {
              serviceSelect.value = matchingOption.value;
              // Trigger change event if needed
              const event = new Event('change', { bubbles: true });
              serviceSelect.dispatchEvent(event);
            }
          }
        }, 800); // Delay to allow smooth scrolling to complete
      }
    }
  };

  return (
    <section className="py-16 bg-white" id='services'>
      <div className="container mx-auto px-5 md:px-25">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Our Beauty Services
          </h2>
          
          <div 
              className={`flex justify-center items-center gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            >
              <div className="w-8 h-1 rounded-xl px bg-pink-500"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="w-8 h-1 rounded-xl px bg-rose-500"></div>
          </div>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6 mt-3">
            Indulge in our premium beauty treatments designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {salonServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg p-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100 group"
            >
              <div className="mb-3 rounded-3xl inline-block transition-colors w-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-800 font-bold">{service.price}</span>
                <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded">
                  {service.duration}
                </span>
              </div>
              <button 
                onClick={() => scrollToContactSection(service.title)}
                className="w-full bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Services;