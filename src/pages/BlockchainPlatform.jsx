import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import ProjectNavigation from '../components/ProjectNavigation';
import CaseStudyFooter from '../components/CaseStudyFooter';
import './WatsonOrchestrate.css';
import './BlockchainPlatform.css';

const heroImage = '/images/blockchain-platform.png';

// Fade carousel images
const showcaseImages = [
  { src: '/images/Blockchain/Hifi_2x (2)_edited.jpg', alt: 'IBM Blockchain Platform UI - View 1' },
  { src: '/images/Blockchain/Hifi_2x_edited.jpg', alt: 'IBM Blockchain Platform UI - View 2' },
  { src: '/images/Blockchain/Hifi_2x (1)_edited.jpg', alt: 'IBM Blockchain Platform UI - View 3' },
  { src: '/images/Blockchain/Hifi Copy 2_2x_edited.jpg', alt: 'IBM Blockchain Platform UI - View 4' },
];

// Getting started app (Buy app) images
const gettingStartedImages = [
  { src: '/images/Blockchain/1_create_select plan.png', alt: 'Select plan screen' },
  { src: '/images/Blockchain/2_create_choose cluster.png', alt: 'Choose cluster screen' },
  { src: '/images/Blockchain/4. wait time_cart.png', alt: 'Wait time with cart screen' },
  { src: '/images/Blockchain/5_complete with cart.png', alt: 'Complete with cart screen' },
  { src: '/images/Blockchain/5. wait time copy 13.png', alt: 'Wait time screen' },
  { src: '/images/Blockchain/6_platform.png', alt: 'Platform screen' },
];

function BlockchainPlatform() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-cycle through showcase images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  // Fullscreen gallery handlers
  const openFullscreen = (index) => {
    setFullscreenIndex(index);
    setFullscreenOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setFullscreenIndex((prev) => (prev - 1 + gettingStartedImages.length) % gettingStartedImages.length);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setFullscreenIndex((prev) => (prev + 1) % gettingStartedImages.length);
  };

  // Keyboard navigation for fullscreen
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!fullscreenOpen) return;
      if (e.key === 'Escape') closeFullscreen();
      if (e.key === 'ArrowLeft') setFullscreenIndex((prev) => (prev - 1 + gettingStartedImages.length) % gettingStartedImages.length);
      if (e.key === 'ArrowRight') setFullscreenIndex((prev) => (prev + 1) % gettingStartedImages.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullscreenOpen]);

  return (
    <div className="case-study blockchain-platform">
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      <PageHeader onMenuOpen={openMenu} />

      {/* Hero Section */}
      <section className="cs-hero">
        <h1 className="cs-title script-font">IBM Blockchain Platform</h1>
        <p className="cs-subtitle script-font">2018-2020</p>
        <div className="cs-hero-image">
          <img src={heroImage} alt="IBM Blockchain Platform - Nodes interface showing Peers, Certificate Authorities, and Ordering services" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Overview</h2>

        <div className="cs-meta">
          <p className="cs-meta-item script-font">Role: Visual and UX designer</p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">User problem statement</h3>
          <p className="cs-text">
            Developers need a reliable way to trust, monitor, and manage blockchain networks, so that their transactions and business operations run smoothly and securely.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Business value and need</h3>
          <p className="cs-text">
            IBM needed to provide a platform that allowed customers to experiment with and run blockchain networks, enabling real-world use cases, inviting others to their network, and ultimately driving monetization in an emerging technology space.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">My contribution summary</h3>
          <ul className="cs-list">
            <li><strong>Reduced</strong> onboarding time by 50% through simplified UI and guided workflows</li>
            <li><strong>Improved</strong> user confidence by providing in-context resources, <strong>reducing support tickets and drop-off</strong></li>
            <li>Streamlined Kubernetes connection with clear UI states and guidance, <strong>cutting setup complexity and support reliance by 50%</strong></li>
            <li><strong>Enabled faster experimentation</strong> with blockchain networks through approachable, interactive design</li>
            <li>Supported revenue growth by helping onboard major customers like Walmart and Maersk</li>
          </ul>
        </div>
      </section>

      {/* Full-width Platform Screenshot - Fade Carousel */}
      <section className="bc-platform-showcase">
        <div className="bc-fade-carousel">
          {showcaseImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`bc-fade-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </section>

      {/* In the product section */}
      <section className="cs-section">
        <p className="bc-product-label script-font">In-the-product Get Started Resource Model explanation</p>
        <p className="cs-text bc-goal-text">Goal: provide users with resources they'll need without overwhelming them</p>
      </section>

      {/* Work and Evidence Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Work and evidence</h2>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Visual and UX design work</h3>
          <p className="cs-text">
            The Blockchain team was the first team of my IBM career. As a visual and UX designer I was constantly learning and keeping up with the complexities of Blockchain (a very emerging technology at the time). As a fast moving, global design team, we were challenged with designing for users in a way that educated, provided trust, and didn't overwhelm with information. My largest design impact while on this team was re-envisioning the Get Started /Buy experience based on user feedback.
          </p>
        </div>

        {/* 2x2 Work Grid with titles and descriptions */}
        <div className="bc-work-grid">
          <div className="bc-work-column">
            <h4 className="bc-work-title script-font">Getting started/Buy exp (below)</h4>
            <div className="bc-work-item">
              <img src="/images/Blockchain/1_create_select plan.png" alt="Create select plan screen" />
            </div>
            <p className="cs-text">
              Understand the current problems with the experience (NPS and research)
              Work cross-team and with PM to push feasibility and component design
              Iterate, test, and define a new experience that addresses pain points and can feasibly be built.
            </p>
          </div>
          <div className="bc-work-column">
            <h4 className="bc-work-title script-font">Get started resources modal (above)</h4>
            <div className="bc-work-item">
              <img src="/images/Blockchain/Hifi_2x (2)_edited.jpg" alt="High fidelity UI design" />
            </div>
            <p className="cs-text">
              Organize and design resources to best meet the needs of a user at whatever stage of the experience they are at.
              Test and get feedback, take UX frames up to hi-fi visuals with the Carbon design system
            </p>
          </div>
        </div>

        <div className="bc-work-grid">
          <div className="bc-work-column">
            <h4 className="bc-work-title script-font">UX Design work</h4>
            <div className="bc-work-item">
              <img src="/images/Blockchain/Update Channel - Channel capabilities_2x.png" alt="Update Channel capabilities" />
            </div>
            <p className="cs-text">
              Take on multiple UX and Visual design story issues.
              Iterate and communicate with the right people to design wires and/or hi fis that address the user problem or new feature request
            </p>
          </div>
          <div className="bc-work-column">
            <h4 className="bc-work-title script-font">Journey maps</h4>
            <div className="bc-work-item">
              <img src="/images/Blockchain/full minus detail.png" alt="Full platform view" />
            </div>
            <p className="cs-text">
              Design a visual that displays the high level experience of a Blockchain Platform user from discovery to extended use. These designs were successfully used on websites, important presentations and in client meetings to get an overarching view of the process. I created multiple iterations for more detailed parts of the process and other products I later worked on
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started App Grid */}
      <section className="cs-section">
        <h3 className="bc-section-subtitle script-font">Getting started exp (Buy exp)</h3>

        <div className="bc-app-grid">
          {gettingStartedImages.map((image, index) => (
            <div
              key={index}
              className="bc-app-grid-item"
              onClick={() => openFullscreen(index)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        <p className="cs-text bc-app-description">
          Working cross-team and with PM, I designed an experience that allowed in-context kubernetes cluster creation- a previously huge barrier to entry for our users. On top of this we implemented multiple designs to enhance the buy experience. We cut the time to set up and connect kubernetes clusters (required for the platform) in half.
        </p>
      </section>

      {/* Fullscreen overlay for Getting Started images */}
      {fullscreenOpen && (
        <div className="bc-fullscreen-overlay" onClick={closeFullscreen}>
          <button className="bc-fullscreen-close" onClick={closeFullscreen} aria-label="Close fullscreen">
            <span></span>
            <span></span>
          </button>

          <button className="bc-fullscreen-nav bc-fullscreen-prev" onClick={goToPrev} aria-label="Previous image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="bc-fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={gettingStartedImages[fullscreenIndex].src}
              alt={gettingStartedImages[fullscreenIndex].alt}
            />
          </div>

          <button className="bc-fullscreen-nav bc-fullscreen-next" onClick={goToNext} aria-label="Next image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="bc-fullscreen-indicators">
            {gettingStartedImages.map((_, index) => (
              <button
                key={index}
                className={`bc-fullscreen-indicator ${index === fullscreenIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenIndex(index);
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Reflection Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Reflection</h2>

        <p className="cs-text">
          This work challenged me and pushed me in so many ways. It introduced me to the many ways to work with developers, how to pick the right battles with implementing designs, prioritizing work, and collaborating with several teams.
        </p>

        <p className="cs-text">
          Through blockchain I learned the necessity of understanding the technology and business of the product I'm working on. Without understanding how blockchain works I would not have been able to build quality product or communicate confidently with development teams. I'm lucky to have had such a start to my career that forced me to dive deep into new technologies off the bat.
        </p>

        {/* Award Section */}
        <div className="bc-award-section">
          <div className="bc-award-badge">
            <img src="/images/RedDot_Design_Award_edited.jpg" alt="Red Dot Design Award Winner 2019" />
          </div>
          <div className="bc-award-text">
            <p className="cs-text">
              This platform experience won a Reddot Design Award in 2019. We were fortunate to accept the award in person in Berlin, Germany.
            </p>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation
        prevProject={{ name: 'IBM Trusted Identity', path: '/work/trusted-identity' }}
        nextProject={{ name: 'IBM Watson Orchestrate', path: '/work/watson-orchestrate' }}
      />

      <CaseStudyFooter />
    </div>
  );
}

export default BlockchainPlatform;
