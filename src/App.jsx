import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Work from './components/Work';
import Footer from './components/Footer';
import WatsonOrchestrate from './pages/WatsonOrchestrate';
import './styles/index.css';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="app">
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      <Hero onMenuOpen={openMenu} />
      <Work />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/watson-orchestrate" element={<WatsonOrchestrate />} />
        {/* Future project pages */}
        <Route path="/work/blockchain-platform" element={<div>IBM Blockchain Platform - Coming Soon</div>} />
        <Route path="/work/transformation-advisor" element={<div>IBM Transformation Advisor - Coming Soon</div>} />
        <Route path="/work/trusted-identity" element={<div>Trusted Identity - Coming Soon</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
