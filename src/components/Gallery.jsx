// Gallery.jsx
import { useState, useRef, useEffect } from 'react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
    
  useEffect(() => {
      setIsVisible(true);
    }, []);

  const [visibleCount, setVisibleCount] = useState(6);
  const [loadedImages, setLoadedImages] = useState({});
  const imageRefs = useRef([]);

  // Sample images - replace these with your actual salon photos
  const allImages = [
    { id: 1, src: '/cutting.jpg', alt: 'Hair Style 1' },
    { id: 2, src: '/colour2.jpg', alt: 'Hair Style 2' },
    { id: 3, src: '/facial.jpg', alt: 'Hair Style 3' },
    { id: 4, src: '/tratment.jpg', alt: 'Hair Style 4' },
    { id: 5, src: '/img1.avif', alt: 'Hair Style 5' },
    { id: 6, src: '/img2.avif', alt: 'Hair Style 6' },
    { id: 7, src: '/img3.avif', alt: 'Hair Style 7' },
    { id: 8, src: '/img4.avif', alt: 'Hair Style 8' },
    { id: 9, src: '/img5.avif', alt: 'Hair Style 9' },
    { id: 10, src: '/img6.avif', alt: 'Hair Style 10' },
    { id: 11, src: '/img7.avif', alt: 'Hair Style 11' },
    { id: 12, src: '/img8.avif', alt: 'Hair Style 12' },
  ];

  const visibleImages = allImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < allImages.length;
  const hasLessImages = visibleCount > 6;

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleImages]);

  const handleShowMore = () => {
    // Show 6 more images each time
    const newCount = visibleCount + 6;
    setVisibleCount(newCount > allImages.length ? allImages.length : newCount);
    
    // Add animation to new images
    setTimeout(() => {
      const newImages = allImages.slice(visibleCount, newCount);
      newImages.forEach((image, index) => {
        const ref = imageRefs.current[visibleCount + index];
        if (ref) {
          ref.classList.add('animate-fade-in-up');
        }
      });
    }, 100);
  };

  const handleShowLess = () => {
    // Animate out before hiding
    const imagesToHide = allImages.slice(6, visibleCount);
    imagesToHide.forEach((image, index) => {
      const ref = imageRefs.current[6 + index];
      if (ref) {
        ref.classList.remove('animate-fade-in-up');
        ref.classList.add('animate-fade-out');
      }
    });

    // Wait for fade out animation to complete before hiding
    setTimeout(() => {
      setVisibleCount(6);
      
      // Reset animations for remaining images
      setTimeout(() => {
        allImages.slice(0, 6).forEach((image, index) => {
          const ref = imageRefs.current[index];
          if (ref) {
            ref.classList.remove('animate-fade-out');
            ref.classList.add('animate-fade-in-up');
          }
        });
      }, 300);
    }, 500);
  };

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-16 md:px-10 bg-white" id='gallery'>
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-down">
            Our Work Gallery
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

          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-300 mt-3">
            Discover our latest hair transformations and styling masterpieces
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleImages.map((image, index) => (
            <div 
              key={image.id}
              ref={el => imageRefs.current[index] = el}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 opacity-0"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={`w-full h-72 object-cover rounded-xl transition-all duration-300 ${
                    loadedImages[image.id] ? 'opacity-100' : 'opacity-100'
                  }`}
                  onLoad={() => handleImageLoad(image.id)}
                />
                
                {/* Loading Skeleton */}
                {!loadedImages[image.id] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-3 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* Button Container */}
        <div className="text-center mt-12 space-x-4 space-y-4 sm:space-y-0">
          {/* Show More Button */}
          {hasMoreImages && (
            <button
              onClick={handleShowMore}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                Show More
                <svg 
                  className="w-4 h-4 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          )}

          {/* Show Less Button */}
          {hasLessImages && (
            <button
              onClick={handleShowLess}
              className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                Show Less
                <svg 
                  className="w-4 h-4 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </span>
            </button>
          )}

          {/* All loaded message */}
          {!hasMoreImages && allImages.length > 6 && (
            <div className="inline-block ml-4 animate-fade-in">
              <p className="text-gray-600 font-medium bg-white py-2 px-4 rounded-full shadow-md">
                🎉 All photos loaded
              </p>
            </div>
          )}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Showing {visibleImages.length} of {allImages.length} photos
          </p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-out forwards;
        }

        .animate-fade-out {
          animation: fadeOut 0.4s ease-in forwards;
        }

        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default Gallery;