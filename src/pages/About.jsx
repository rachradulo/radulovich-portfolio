import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import CaseStudyFooter from '../components/CaseStudyFooter';
import './About.css';

// Accomplishments badges - row 1
const accomplishmentsRow1 = [
  { src: '/images/about/1703693851864.jpeg', alt: 'IBM Blue Core Coaching', hover: '2023 Woman in Business Future Star award winner', link: 'https://www.bizjournals.com/triangle/news/2023/03/23/2023-women-in-business-awards-rachel-radulovich.html' },
  { src: '/images/about/y-combinator-logo_edited.jpg', alt: 'Y Combinator', hover: "YCombinator Founder Alumni (Rownd - now, Llamafarm - Winter '22 batch)", link: 'https://www.ycombinator.com/companies/llamafarm' },
  { src: '/images/about/Screenshot 2024-03-21 at 11.31_edited.jpg', alt: 'NC Tech Awards', hover: 'NC Tech Top 10 Startups to watch winner' },
  { src: '/images/about/Badges_v8-09_Coach.png', alt: 'IBM Enterprise Design Thinking Coach', hover: 'IBM Design thinking Coach achievement' },
];

// Accomplishments badges - row 2
const accomplishmentsRow2 = [
  { src: '/images/about/rockit.png', alt: 'RockIT Winner October 2021', hover: 'IBM RockIT Everyday Hero Award 2021' },
  { src: '/images/about/RedDot_Design_Award_edited.jpg', alt: 'Red Dot Design Award', hover: 'IBM Blockchain Platform design team Reddot award winners', link: 'https://www.red-dot.org/project/ibm-blockchain-platform-41309' },
  { src: '/images/about/Screen Shot 2021-12-07 at 1.53.46 PM.png', alt: 'Women in Business Award Winner - Future Star', hover: 'Selected as Design Coach for new hire team' },
  { src: '/images/about/Team_Essentials.png', alt: 'IBM Team Essentials', hover: 'IBM Design Thinking for AI badge' },
];

// Accomplishments badges - row 3
const accomplishmentsRow3 = [
  { src: '/images/about/Badges_v8-08_Co-Creator.png', alt: 'IBM Enterprise Design Thinking Co-Creator', hover: 'IBM EDT Co-Creator Badge' },
  { src: '/images/about/Group.png', alt: 'IBM Patterns Cohort Coach', hover: "2H People's Choice Culture award for Inclusion" },
  { src: '/images/about/download (3).png', alt: 'IBM + NC State Pathfinder Mentoring Program', hover: 'Pathfinder mentor for NC State students' },
  { src: '/images/about/jumpstart.png', alt: 'IBM Developer JumpStart - Design Thinking Coach', hover: 'Design thinking coach for new hire developer teams' },
];

// Accomplishments badges - row 4
const accomplishmentsRow4 = [
  { src: '/images/about/Patterns-Graduate.png', alt: 'IBM Patterns Graduate - Intermediate', hover: 'Patterns design training completion' },
  { src: '/images/about/Screen Shot 2021-12-07 at 1.54_edited.jpg', alt: '2021 People\'s Choice Culture Award Winner', hover: 'IBM Blue core coach certification (ICF certified)' },
];

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const renderBadge = (badge, key) => {
    const content = (
      <>
        <img src={badge.src} alt={badge.alt} />
        <span className="accomplishment-hover script-font">{badge.hover}</span>
      </>
    );

    if (badge.link) {
      return (
        <a
          key={key}
          href={badge.link}
          target="_blank"
          rel="noopener noreferrer"
          className="accomplishment-item accomplishment-link"
        >
          {content}
        </a>
      );
    }

    return (
      <div key={key} className="accomplishment-item">
        {content}
      </div>
    );
  };

  return (
    <div className="about-page">
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      <PageHeader onMenuOpen={openMenu} />

      {/* About Header */}
      <section className="about-header">
        <h1 className="about-title script-font">About</h1>
      </section>

      {/* Me Section */}
      <section className="about-section about-me-section">
        <div className="about-me-grid">
          <div className="about-me-image">
            <img src="/images/about/Screenshot 2023-03-27 at 9.08.22 PM.png" alt="Rachel Radulovich" />
          </div>
          <div className="about-me-content">
            <h2 className="about-section-title">Me</h2>
            <p className="about-subtitle script-font">Outside the studio</p>
            <p className="about-text">
              When I'm not white-boarding, prototyping, and workshopping, I'm out running, eating, biking, and traveling. I love trying new things and all things active; a new sport, a new restaurant, a new country, I'm there, diving in head first.
            </p>
            <p className="about-text about-fun-facts-label">Fun facts:</p>
            <ul className="about-fun-facts">
              <li>I love making pottery and I have my own pottery wheel at home</li>
              <li>I <strong>love</strong> my 10 year old boarder collie</li>
              <li>I'm always on the hunt for the world's best bagel, taco, and ice cream cone</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="about-section about-accomplishments">
        <p className="about-accomplishments-label script-font">a few</p>
        <h2 className="about-accomplishments-title script-font">Accomplishments</h2>

        <div className="accomplishments-grid">
          {accomplishmentsRow1.map((badge, index) => renderBadge(badge, `row1-${index}`))}
        </div>

        <div className="accomplishments-grid">
          {accomplishmentsRow2.map((badge, index) => renderBadge(badge, `row2-${index}`))}
        </div>

        <div className="accomplishments-grid">
          {accomplishmentsRow3.map((badge, index) => renderBadge(badge, `row3-${index}`))}
        </div>

        <div className="accomplishments-grid accomplishments-grid-partial">
          {accomplishmentsRow4.map((badge, index) => renderBadge(badge, `row4-${index}`))}
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="about-section about-connect">
        <h2 className="about-connect-title script-font">Let's Connect</h2>
        <p className="about-text">
          Drop me a Linkedin message to connect or request a resume
        </p>
        <a
          href="https://www.linkedin.com/in/rachelorrino/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-linkedin-button"
        >
          Find me on Linkedin
        </a>
      </section>

      <CaseStudyFooter />
    </div>
  );
}

export default About;
