import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Work from './components/Work';
import Footer from './components/Footer';
import WatsonOrchestrate from './pages/WatsonOrchestrate';
import BlockchainPlatform from './pages/BlockchainPlatform';
import TransformationAdvisor from './pages/TransformationAdvisor';
import TrustedIdentity from './pages/TrustedIdentity';
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
        <Route path="/work/blockchain-platform" element={<BlockchainPlatform />} />
        <Route path="/work/transformation-advisor" element={<TransformationAdvisor />} />
        <Route path="/work/trusted-identity" element={<TrustedIdentity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
