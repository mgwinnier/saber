import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/HeroSection';
import About from './components/AboutUs';
import Vendor from './vendor';
import Statement from './statement';
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
             <Hero />
             <About />
            </>
          } />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/statement" element={<Statement />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
