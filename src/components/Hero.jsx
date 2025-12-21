import './Hero.css';

function Hero({ onMenuOpen }) {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <button className="menu-button" onClick={onMenuOpen} aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="hero-content">
        <h1 className="hero-name script-font">
          Rachel Orrino
          <span className="formerly">(Formerly Rachel Radulovich)</span>
        </h1>

        <p className="hero-description">
          is currently a co-founder & design leader<br />
          @ <a href="https://rownd.com" target="_blank" rel="noopener noreferrer" className="rownd-link">Rownd</a> in Raleigh, North Carolina.
        </p>

        <button className="my-work-button" onClick={scrollToWork}>
          My Work
        </button>
      </div>
    </section>
  );
}

export default Hero;
