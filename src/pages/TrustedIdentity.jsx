import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import ProjectNavigation from '../components/ProjectNavigation';
import CaseStudyFooter from '../components/CaseStudyFooter';
import './WatsonOrchestrate.css';
import './TrustedIdentity.css';

const heroImage = '/images/Identity /Screen Shot 2019-10-07 at 10.09.06 PM.png';

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
        <div className="ti-alpha-content">
          <p className="ti-case-study-label script-font">Case Study 1</p>
          <h2 className="ti-alpha-title">IBM Trusted Identity Alpha</h2>
          <p className="ti-alpha-meta"><strong>Role:</strong> Lead Designer</p>
          <p className="ti-alpha-meta"><strong>Timeline:</strong> October 2018- April 2019</p>
        </div>
        <div className="ti-alpha-image">
          <img src="/images/Identity /identity _Page_17.png" alt="IBM Trusted Identity Alpha - Extension for Agency Account interface" />
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
          <img src="/images/Identity /identity _Page_18.png" alt="Sketch prototyping screens" />
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

        <div className="ti-prototype-image">
          <img src="/images/Identity /identity _Page_19.png" alt="Web App UI Screens - full interface" />
        </div>

        {/* Chrome Extension and Mobile */}
        <div className="ti-app-grid">
          <div className="ti-app-column">
            <h4 className="ti-app-title script-font">Chrome Extension UI</h4>
            <div className="ti-app-image">
              <img src="/images/Identity /identity _Page_20.png" alt="Chrome Extension UI screens" />
            </div>
            <p className="cs-text">
              The chrome extension we worked on acted as a digital wallet within the browser. It was a differentiator in the decentralized identity space.
            </p>
          </div>
          <div className="ti-app-column">
            <h4 className="ti-app-title script-font">Mobile Application</h4>
            <div className="ti-app-image">
              <img src="/images/Identity /identity _Page_21.png" alt="Mobile Application screens" />
            </div>
            <p className="cs-text">
              Verify Creds mobile app enables users to manage their identity credentials on the go.
            </p>
          </div>
        </div>
      </section>

      {/* Large Image Showcase */}
      <section className="ti-large-showcase">
        <img src="/images/Identity /identity _Page_24.png" alt="IBM Trusted Identity comprehensive view" />
      </section>

      {/* Reflection Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Reflection</h2>

        <p className="cs-text">
          This product put me into conferences, client teams, and workshops in a way that I didn't think I was capable of, and I am so thankful for the challenges that made me grow. As the sole designer on the team, I got to wear every hat: sprint lead, user researcher, and product management. My passion for decentralized identity grew on this team and I later went on to founding a startup. This project was unforgettable and IBM, and has as a fun fact—I recently learned it went open source making even my early onboarding work now publicly accessible. This team made me a confident facilitator, better researcher, and better designer.
        </p>

        <a href="https://github.com/IBM-Blockchain-Identity/verify-creds-samples" target="_blank" rel="noopener noreferrer" className="ti-alpha-button">
          Try out the Alpha
        </a>
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
