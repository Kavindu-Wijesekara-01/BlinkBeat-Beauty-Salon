// Hero.jsx
import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0]);
  const statsRef = useRef(null);

  const targetNumbers = [10, 2000, 50];
  const duration = 3000; 

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start counting animation
          targetNumbers.forEach((target, index) => {
            const startTime = Date.now();
            const startValue = 0;
            
            const updateCounter = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              
              if (elapsed < duration) {
                const progress = elapsed / duration;
                const currentValue = Math.floor(startValue + progress * target);
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = currentValue;
                  return newCounters;
                });
                requestAnimationFrame(updateCounter);
              } else {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = target;
                  return newCounters;
                });
              }
            };
            
            requestAnimationFrame(updateCounter);
          });
        }
      },
      { threshold: 1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-pink-900 via-black to-pink-800" id='home'>
      
      {/* Animated Pink/Black Background Elements */}
      <div className="absolute inset-0">
    

        {/* Animated Grid with Pink Lines */}
        <div className="absolute inset-0 opacity-55">
          <div className="grid grid-cols-12 gap-20 md:gap-8 h-full animate-grid-move">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-pink-500/20 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-12 gap-8 h-full animate-grid-move-vertical">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-b border-pink-500/20 w-full"></div>
            ))}
          </div>
        </div>

        {/* Floating Pink Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-pink-400/40 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        {/* Pink Light Beams */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-300/30 to-transparent animate-light-sweep"></div>
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rose-300/20 to-transparent animate-light-sweep-delayed"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-300/20 to-transparent animate-light-sweep-reverse"></div>

        
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4 ">
        <div className="text-center text-white max-w-4xl mx-auto w-full">
          
          {/* Premium Indicator */}
          <div 
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-pink-500/20 rounded-full px-6 py-3 mb-8 mt-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <div className="flex gap-1">
              {[1, 2, 3].map((star) => (
                <div key={star} className="text-yellow-500 text-md">✦</div>
              ))}
            </div>
            <span className="text-sm font-light tracking-widest">PREMIUM BEAUTY EXPERIENCE</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 mb-8">
            <div 
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <h1 className="sm:text-5xl md:text-7xl font-light tracking-tight mb-4">
                <span className="block text-white/90 font-bold text-6xl md:text-8xl">BlinkBeat</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-rose-200 mt-2 font-semibold text-5xl md:text-6xl font-pacifico">
                  Beauty
                </span>
              </h1>
            </div>

            {/* Animated Divider */}
            <div 
              className={`flex justify-center items-center gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            >
              <div className="w-8 h-px bg-pink-400/50"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="w-8 h-px bg-rose-400/50"></div>
            </div>

            <div 
              className={`transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed font-light">
                Experience luxury beauty treatments in our exclusive pink sanctuary, 
                where elegance meets modern aesthetics for your perfect glow.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-3 justify-center items-center mb-12 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button className="group relative bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white md:px-6 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 md:w-auto sm:w-auto max-w-xs shadow-lg hover:shadow-pink-500/25">
              <span className="relative z-10 flex items-center justify-center gap-2">
                BOOK YOUR SESSION
                
              </span>
            </button>

            <button className="group border border-pink-500/30 hover:border-pink-500/60 backdrop-blur-lg bg-pink-500/10 hover:bg-pink-500/20 text-white md:px-8 px-10 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 md:w-auto sm:w-auto max-w-xs">
              <span className="flex items-center justify-center gap-2">
                VIEW SERVICES
                <svg className="w-4 h-4 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Animated Stats */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-3 gap-6 max-w-md mx-auto transition-all duration-1000 delay-1100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { number: counters[0], suffix: '+', label: 'Years Excellence' },
              { number: counters[1], suffix: '+', label: 'Clients Served' },
              { number: counters[2], suffix: '+', label: 'Awards Won' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-medium text-pink-300 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-xs text-pink-200/70 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes orb-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
          }
          33% { 
            transform: translateY(-20px) translateX(15px) scale(1.05); 
          }
          66% { 
            transform: translateY(10px) translateX(-10px) scale(0.95); 
          }
        }
        
        @keyframes orb-float-reverse {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1); 
          }
          33% { 
            transform: translateY(15px) translateX(-15px) scale(0.95); 
          }
          66% { 
            transform: translateY(-10px) translateX(10px) scale(1.05); 
          }
        }
        
        @keyframes orb-pulse {
          0%, 100% { 
            opacity: 0.1; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.2; 
            transform: scale(1.1);
          }
        }
        
        @keyframes grid-move {
          0% { transform: translateX(0px); }
          100% { transform: translateX(-16px); }
        }
        
        @keyframes grid-move-vertical {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-16px); }
        }
        
        @keyframes particle-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-40px) translateX(20px) rotate(90deg);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-20px) translateX(-20px) rotate(180deg);
            opacity: 0.4;
          }
          75% { 
            transform: translateY(20px) translateX(10px) rotate(270deg);
            opacity: 0.7;
          }
        }
        
        @keyframes light-sweep {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes light-sweep-delayed {
          0% { transform: translateX(-150%) skewX(-15deg); }
          100% { transform: translateX(150%) skewX(-15deg); }
        }
        
        @keyframes light-sweep-reverse {
          0% { transform: translateX(100%) skewX(15deg); }
          100% { transform: translateX(-200%) skewX(15deg); }
        }
        
        @keyframes wave {
          0% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-10px) scaleY(1.2); }
          100% { transform: translateX(0) scaleY(1); }
        }
        
        .animate-orb-float {
          animation: orb-float 20s ease-in-out infinite;
        }
        
        .animate-orb-float-reverse {
          animation: orb-float-reverse 25s ease-in-out infinite;
        }
        
        .animate-orb-pulse {
          animation: orb-pulse 15s ease-in-out infinite;
        }
        
        .animate-grid-move {
          animation: grid-move 40s linear infinite;
        }
        
        .animate-grid-move-vertical {
          animation: grid-move-vertical 35s linear infinite;
        }
        
        .animate-particle-float {
          animation: particle-float 20s ease-in-out infinite;
        }
        
        .animate-light-sweep {
          animation: light-sweep 8s ease-in-out infinite;
        }
        
        .animate-light-sweep-delayed {
          animation: light-sweep 12s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-light-sweep-reverse {
          animation: light-sweep-reverse 10s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 4s ease-in-out infinite;
        }
        
        .animate-wave-delayed {
          animation: wave 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Hero;