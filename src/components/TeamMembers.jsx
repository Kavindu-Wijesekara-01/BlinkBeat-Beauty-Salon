import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const reviews = [
    { name: "Sarah", text: "Amazing products! My hair never felt better.", rating: 5 },
    { name: "Mike", text: "Great quality and worth every penny.", rating: 5 },
    { name: "Emma", text: "My salon clients keep coming back for these!", rating: 4 },
    { name: "David", text: "Excellent service and authentic products.", rating: 5 }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-pink-900 via-black to-pink-800">


      <div className="container mx-auto px-4">

        
        {/* Section Header - Using your exact styles */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          
          <div 
            className={`flex justify-center items-center gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          >
            <div className="w-8 h-1 rounded-xl bg-pink-500"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="w-8 h-1 rounded-xl bg-rose-500"></div>
          </div>

          <p className="text-white max-w-2xl mx-auto mt-3">
            Experience the quality difference that our customers love.
          </p>
        </div>

        {/* Review Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-lg border border-pink-500/20 p-8 rounded-2xl shadow-lg">
            <div className="text-center">
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-2xl ${i < reviews[currentIndex].rating ? 'text-yellow-400' : 'text-gray-700'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-white text-lg italic mb-6">
                "{reviews[currentIndex].text}"
              </p>
              
              {/* Customer Name */}
              <p className="font-bold text-white text-xl">- {reviews[currentIndex].name}</p>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    i === currentIndex ? 'bg-pink-500 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* About Our Items Section */}
        <div className="text-center mb-12">
          <p className="text-white text-xl max-w-3xl mx-auto mb-8">
            Explore our collection of imported branded beauty items that professionals trust and customers love.
          </p>
          
          {/* Navigation Button */}
          <Link 
            to="/items" 
            className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Explore Our Products
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;