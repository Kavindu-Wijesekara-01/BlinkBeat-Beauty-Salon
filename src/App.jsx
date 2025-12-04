// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from './assets/About';
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
    <BrowserRouter basename="/BlinkBeat-Beauty-Salon">
      <Router>
        <ScrollToTop />
        <div className="min-h-screen">
          <Routes>
            
            <Route path="/" element={
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
            } />
            
            
            <Route path="/items" element={
              <>
                <Navbar />
                <Item />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </BrowserRouter>  
  );
}

export default App;