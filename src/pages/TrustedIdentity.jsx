import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import ProjectNavigation from '../components/ProjectNavigation';
import CaseStudyFooter from '../components/CaseStudyFooter';
import { FullscreenSlider } from '../components/sliders';
import './WatsonOrchestrate.css';
import './TrustedIdentity.css';

const heroImage = '/images/trusted-identity.jpg';

// Alpha showcase slider images (Page_16 through Page_24)
const alphaShowcaseImages = [
  { src: '/images/Identity /identity _Page_16.png', alt: 'IBM Trusted Identity Alpha - Slide 1' },
  { src: '/images/Identity /identity _Page_17.png', alt: 'IBM Trusted Identity Alpha - Slide 2' },
  { src: '/images/Identity /identity _Page_18.png', alt: 'IBM Trusted Identity Alpha - Slide 3' },
  { src: '/images/Identity /identity _Page_19.png', alt: 'IBM Trusted Identity Alpha - Slide 4' },
  { src: '/images/Identity /identity _Page_20.png', alt: 'IBM Trusted Identity Alpha - Slide 5' },
  { src: '/images/Identity /identity _Page_21.png', alt: 'IBM Trusted Identity Alpha - Slide 6' },
  { src: '/images/Identity /identity _Page_22.png', alt: 'IBM Trusted Identity Alpha - Slide 7' },
  { src: '/images/Identity /identity _Page_23.png', alt: 'IBM Trusted Identity Alpha - Slide 8' },
  { src: '/images/Identity /identity _Page_24.png', alt: 'IBM Trusted Identity Alpha - Slide 9' },
];

function TrustedIdentity() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="case-study trusted-identity">
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      <PageHeader onMenuOpen={openMenu} />

      {/* Hero Section */}
      <section className="cs-hero">
        <h1 className="cs-title script-font">IBM Trusted Identity</h1>
        <p className="cs-subtitle script-font">2018-2019</p>
        <div className="cs-hero-image">
          <img src={heroImage} alt="IBM Trusted Identity - Agency Account Dashboard with Verify Credentials" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Overview</h2>

        <div className="cs-meta">
          <p className="cs-meta-item script-font">Role: Design lead (UX, vis, Research, Facilitation)</p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">User problem statement</h3>
          <p className="cs-text">
            Current identity credentials like licenses, passports, and SSN cards are outdated, easily lost, and difficult to replace.
          </p>
          <p className="cs-text">
            Consumers need a secure, digital way to manage identity credentials to make identity verifications as easy and painless as tapping a credit card.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Business value and need</h3>
          <p className="cs-text">
            IBM needed to bring decentralized identity technology from research to market. The goal was to use customer discovery and prototyping to shape a scalable product for both businesses and consumers.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">My contribution summary</h3>
          <ul className="cs-list">
            <li>Designed UI that translated complex identity concepts into clear, interactive use cases for customer feedback</li>
            <li>Identified 3-4 real-world use cases for decentralized identity through nationwide IBM customer workshops and user research</li>
            <li>Applied blockchain to a real world use case and designed end-to-end user and business flows for the Creative Passport, announced at IBM THINK 2019 – a digital wallet enabling musicians to market the music industry "Pay Directory"</li>
          </ul>
        </div>
      </section>

      {/* Glimpse Caption */}
      <section className="cs-section">
        <p className="ti-glimpse-caption script-font">A glimpse to the work I did on the Trusted Identity team</p>
      </section>

      {/* Alpha Showcase Section */}
      <section className="ti-alpha-showcase">
        <div className="ti-alpha-slider">
          <FullscreenSlider images={alphaShowcaseImages} className="ti-alpha-showcase-slider" />
        </div>
      </section>

      {/* Work and Evidence Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Work and evidence</h2>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Design Work (Visual, UX, Research, Facilitation)</h3>
          <p className="cs-text">
            The decentralized identity space was exciting and challenging. Our team worked to develop an initial developer experience for issuing, holding, and verifying digital credentials via web app, chrome extension, mobile app, and other developer tooling. As the designer on the team, I wore every hat from user research to UI designs. I worked with leaders, developers and offering managers to deliver an experience in a short timeframe.
          </p>
        </div>

        {/* Two Column Work Grid */}
        <div className="ti-work-grid">
          <div className="ti-work-column">
            <h4 className="ti-work-title script-font">Product UI & UX Designs</h4>
            <ul className="ti-work-list">
              <li>Sketches and wireframes for the all product components</li>
              <li>Hi-fidelity screen designs and clickable prototypes</li>
              <li>Collaboration with development and QM on priority items in GitHub</li>
            </ul>
          </div>
          <div className="ti-work-column">
            <h4 className="ti-work-title script-font">Research</h4>
            <ul className="ti-work-list">
              <li>Led workshops at conferences to gain user feedback in innovative ways</li>
              <li>Led user testing sessions with sponsor users, analyzed feedback into actions</li>
              <li>Collected feedback via surveys and quick testing at conferences and events</li>
            </ul>
          </div>
        </div>

        <div className="ti-work-grid">
          <div className="ti-work-column">
            <h4 className="ti-work-title script-font">Design thinking lead</h4>
            <ul className="ti-work-list">
              <li>Planned and led internal workshops to collaboratively determine positioning, roadmaps, MVP scopes of work</li>
            </ul>
          </div>
          <div className="ti-work-column">
            <h4 className="ti-work-title script-font">Client workshops & engagements</h4>
            <ul className="ti-work-list">
              <li>Planned and executed multiple client design thinking workshops to outline user pain points and MVP/POC scopes for build</li>
              <li>Design work for client demos/POCs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sketch Prototyping Caption */}
      <section className="cs-section">
        <p className="ti-sketch-caption script-font">Sketch prototyping screens for the web app</p>
        <div className="ti-sketch-image">
          <img src="/images/Identity /Screen Shot 2019-10-07 at 10.51.12 PM.png" alt="Sketch prototyping screens" />
        </div>
      </section>

      {/* Prototypes Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Prototypes</h2>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Web App UI Screens</h3>
          <p className="cs-text">
            Through many iterations, I worked to design the UI for the Verify Creds Identity solution. I heavily collaborated with developers to ensure we were creating a realistic, actionable, and understandable experience for developers. The eventual solution allows developers to create, issue, and verify digital credentials (as well as connect devices and interact with sample applications).
          </p>
        </div>

        {/* Two column Web App UI images */}
        <div className="ti-prototype-grid">
          <div className="ti-prototype-column">
            <img src="/images/Identity /Screen Shot 2019-10-08 at 9.12.08 AM.png" alt="Agency Account Dashboard" />
          </div>
          <div className="ti-prototype-column">
            <img src="/images/Identity /Screen Shot 2019-10-08 at 8.59.20 AM.png" alt="Welcome to your Agent screen" />
          </div>
        </div>

        {/* Chrome Extension and Mobile */}
        <div className="ti-app-grid">
          <div className="ti-app-column">
            <h4 className="ti-app-title script-font">Chrome Extension UI</h4>
            <div className="ti-app-image">
              <img src="/images/Identity /Screen Shot 2019-10-08 at 9.07.55 AM.png" alt="Chrome Extension UI screens" />
            </div>
            <p className="cs-text">
              The chrome extension we worked on acted as a digital wallet within the browser. It was a differentiator in the decentralized identity space.
            </p>
          </div>
          <div className="ti-app-column">
            <h4 className="ti-app-title script-font">Mobile Application</h4>
            <div className="ti-app-image">
              <img src="/images/Identity /Screen Shot 2019-10-08 at 9.08.44 AM.png" alt="Mobile Application screens" />
            </div>
            <p className="cs-text">
              Verify Creds mobile app enables users to manage their identity credentials on the go.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Row */}
      <section className="ti-photo-gallery">
        <img src="/images/Identity /IMG_3042.JPG" alt="Workshop facilitation" />
        <img src="/images/Identity /Screen Shot 2019-10-07 at 10.42.28 PM.png" alt="Team collaboration" />
        <img src="/images/Identity /Image from iOS (6).jpg" alt="IBM Watson team" />
        <img src="/images/Identity /IMG_3044.JPG" alt="Conference presentation" />
        <img src="/images/Identity /Screen Shot 2019-10-07 at 10.38.39 PM.png" alt="Design thinking session" />
      </section>

      {/* Reflection Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Reflection</h2>

        <p className="cs-text">
          This product put me into conferences, client teams, and workshops in a way that I didn't think I was capable of, and I am so thankful for the challenges that made me grow. As the sole designer on the team, I got to wear every hat: sprint lead, user researcher, and product management. My passion for decentralized identity grew on this team and I later went on to founding a startup. This project was unforgettable and IBM, and has as a fun fact—I recently learned it went open source making even my early onboarding work now publicly accessible. This team made me a confident facilitator, better researcher, and better designer.
        </p>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation
        prevProject={{ name: 'IBM Transformation Advisor', path: '/work/transformation-advisor' }}
        nextProject={{ name: 'IBM Blockchain Platform', path: '/work/blockchain-platform' }}
      />

      <CaseStudyFooter />
    </div>
  );
}

export default TrustedIdentity;
