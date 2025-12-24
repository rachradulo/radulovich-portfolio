import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isOpen, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    onClose();

    if (targetId === 'home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (targetId === 'work') {
      if (location.pathname === '/') {
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        navigate('/', { state: { scrollTo: 'work' } });
      }
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      navigate('/about');
    }, 300);
  };

  return (
    <div className={`navigation-overlay ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose} aria-label="Close menu">
        <span></span>
        <span></span>
      </button>

      <nav className="nav-menu">
        <a
          href="/"
          className="nav-link script-font"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Home
        </a>
        <a
          href="#work"
          className="nav-link script-font"
          onClick={(e) => handleNavClick(e, 'work')}
        >
          Work
        </a>
        <a
          href="/about"
          className="nav-link script-font"
          onClick={handleAboutClick}
        >
          About
        </a>
      </nav>
    </div>
  );
}

export default Navigation;
