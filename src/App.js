import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Vendor from './pages/Vendor';
import CapabilityStatement from './pages/CapabilityStatement';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/vendor" element={<Vendor />} />
              <Route path="/statement" element={<CapabilityStatement />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
