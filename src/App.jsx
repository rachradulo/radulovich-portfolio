import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Work from './components/Work';
import Footer from './components/Footer';
import Rownd from './pages/Rownd';
import WatsonOrchestrate from './pages/WatsonOrchestrate';
import BlockchainPlatform from './pages/BlockchainPlatform';
import TransformationAdvisor from './pages/TransformationAdvisor';
import TrustedIdentity from './pages/TrustedIdentity';
import About from './pages/About';
import './styles/index.css';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (location.state?.scrollTo === 'work') {
      setTimeout(() => {
        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Clear the state so it doesn't scroll again on re-render
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

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
        <Route path="/work/rownd" element={<Rownd />} />
        <Route path="/work/watson-orchestrate" element={<WatsonOrchestrate />} />
        <Route path="/work/blockchain-platform" element={<BlockchainPlatform />} />
        <Route path="/work/transformation-advisor" element={<TransformationAdvisor />} />
        <Route path="/work/trusted-identity" element={<TrustedIdentity />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
