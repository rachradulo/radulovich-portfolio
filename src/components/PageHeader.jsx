import { useNavigate } from 'react-router-dom';
import './PageHeader.css';

function PageHeader({ onMenuOpen }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="page-header">
      <button
        className="logo-button"
        onClick={handleLogoClick}
        aria-label="Go to home"
      >
        <span className="logo-text script-font">RO</span>
      </button>

      <button className="hamburger-button" onClick={onMenuOpen} aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default PageHeader;
