/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIReceptionist from './components/AIReceptionist';
import Home from './pages/Home';
import Consultation from './pages/Consultation';
import LegacyParts from './pages/LegacyParts';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Craftsman from './pages/Craftsman';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-industrial-charcoal text-white selection:bg-heritage-gold selection:text-industrial-charcoal-dark font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/craftsman" element={<Craftsman />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/legacy-parts" element={<LegacyParts />} />
        </Routes>
        <Footer />
        <AIReceptionist />
      </div>
    </Router>
  );
}
