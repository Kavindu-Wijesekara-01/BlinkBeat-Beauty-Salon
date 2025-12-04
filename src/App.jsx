// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from './components/About'; // Fixed path
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import TeamMembers from './components/TeamMembers';
import Item from './components/Item';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <Hero />
                <Services />
                <About />
                <Gallery />
                <TeamMembers />
                <ContactSection />
                <Footer />
              </>
            } 
          />
          
          <Route 
            path="/items" 
            element={
              <>
                <Navbar />
                <Item />
                <Footer />
              </>
            } 
          />
          
          {/* Add a catch-all route for 404 */}
          <Route 
            path="*" 
            element={
              <>
                <Navbar />
                <div className="pt-24 min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <p className="text-lg">The page you're looking for doesn't exist.</p>
                    <a href="/" className="mt-6 inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition">
                      Go Back Home
                    </a>
                  </div>
                </div>
                <Footer />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;