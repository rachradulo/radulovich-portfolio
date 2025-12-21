import './Navigation.css';

function Navigation({ isOpen, onClose }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    onClose();

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div className={`navigation-overlay ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose} aria-label="Close menu">
        <span></span>
        <span></span>
      </button>

      <nav className="nav-menu">
        <a
          href="#home"
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
          href="#about"
          className="nav-link script-font"
          onClick={(e) => handleNavClick(e, 'about')}
        >
          About
        </a>
      </nav>
    </div>
  );
}

export default Navigation;
