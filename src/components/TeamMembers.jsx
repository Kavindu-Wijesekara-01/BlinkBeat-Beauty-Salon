import React, { useState, useEffect } from 'react';
import { Link, Links, useLocation, useNavigate } from 'react-router-dom';


const TeamMembers = () => {

  const [isVisible, setIsVisible] = useState(false);
    
  useEffect(() => {
      setIsVisible(true);
    }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const teamMembers = [
    {
      id: 1,
      name: "FANOLA Wonder Volume Care Shampoo 350ml",
      role: "Hair Shampoo",
      
      specialty: "Rs.24990.00",
      image: "./item5.avif",
      description: "Fanola Wonder Volume Care Shampoo revitalises thin, flat hair with a lightweight, vegan formula designed to boost natural volume and bounce."
    },
    {
      id: 2,
      name: "1000 HOUR Dab-On Hair Colour Concealer",
      role: "Instant Touch-Up for Hair, Roots & Beards",
      
      specialty: "Rs.18990.00",
      image: "./item6.avif",
      description: "Flawless coverage in seconds—wherever you need it. The 1000 HOUR Dab-On Hair Colour Concealer is the quick and easy fix for grey roots, thinning spots, and even patchy beards."
    },
    {
      id: 3,
      name: "GAMMA+ G-Tronic Dual Ionic 2500 Hair Dyer Rose Gold",
      role: "Hair Drayer",
      
      specialty: "Rs.36990.00",
      image: "./item4.avif",
      description: "Super powerful G-TRON digital Motor for longer life,Increased airflow and pressure for professional performance"
    },
    {
      id: 4,
      name: "L'OREAL Vitamino Color 10 in 1 Multipurpose Spray 190ml",
      role: "Vitamino Color 10 in 1 Multipurpose Spray",
      
      specialty: "Rs.25990.00",
      image: "./item3.avif",
      description: "L'Oréal Professionnel's Vitamino Color spray, containing resveratrol, is formulated for all types and needs of color-treated hair. With a single spray, you receive ten immediate benefits to perfect your hair's color. "
    },
    {
      id: 5,
      name: "REDKEN Extreme Play-Safe 450 Heat Protect 200ml",
      role: "Play-Safe 450 Heat Protect",
      
      specialty: "Rs.28990.00",
      image: "./item2.avif",
      description: "This leave-in treatment, infused with with plant protein and tourmaline, fortifies hair while shielding strands from heat up to 450°F/230°C - helping hair stay strong while you style. "
    },
    {
      id: 6,
      name: "HIDEHERE Hyaluronic Perfect Cover BB Cream 25ml",
      role: "Hyaluronic Perfect Cover BB Cream",
      
      specialty: "Rs.27990.00",
      image: "item1.jpg",
      description: "Hidehere Hyaluronic Perfect Cover BB Cream a multitasking formula that combines the benefits of skincare and makeup.  "
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <section id="team" className="relative py-16 bg-linear-to-br from-pink-900 via-black to-pink-800">


      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Imported Branded Item</h2>
          
          <div 
              className={`flex justify-center items-center gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            >
              <div className="w-8 h-1 rounded-xl px bg-pink-500"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="w-8 h-1 rounded-xl px bg-rose-500"></div>
          </div>

          <p className="text-white max-w-2xl mx-auto mt-3">
            Experience your qualitative difference by using  world famous branded items.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {teamMembers.map((member) => (
                <div key={member.id} className="w-full shrink-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Side */}
                    <div className="md:w-1/2 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full object-cover"
                      />
              
                    </div>

                    {/* Content Side */}
                    <div className="md:w-1/2 p-6 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="text-pink-500 font-semibold">{member.role}</span>
                        <h3 className="text-2xl font-bold text-gray-800 mt-2">{member.name}</h3>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-md font-semibold text-gray-700 mb-2">Price:</h4>
                        <p className="text-gray-900 text-2xl">{member.specialty}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">About:</h4>
                        <p className="text-gray-600 leading-relaxed">{member.description}</p>
                      </div>

                      <div className="mt-3">
                        <Link to="/items" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                          View More
                        </Link>
                      </div>

                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/4 transform -translate-y-1/4 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/4 transform -translate-y-1/4 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition duration-300 ${
                  index === currentSlide ? 'bg-pink-500 scale-125' : 'bg-gray-300 hover:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
};

export default TeamMembers;