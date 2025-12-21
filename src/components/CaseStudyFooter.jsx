import { useNavigate } from 'react-router-dom';
import './CaseStudyFooter.css';

function CaseStudyFooter() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="case-study-footer">
      <button className="home-icon-btn" onClick={handleHomeClick} aria-label="Go to home">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </button>

      <p className="copyright">&copy; 2025 by Rachel Orrino</p>
    </footer>
  );
}

export default CaseStudyFooter;
