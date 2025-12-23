import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import ProjectNavigation from '../components/ProjectNavigation';
import CaseStudyFooter from '../components/CaseStudyFooter';
import { FullscreenSlider } from '../components/sliders';
import './WatsonOrchestrate.css';
import './TransformationAdvisor.css';

// Work and Evidence images for clickable fullscreen viewing
const researchImages = [
  { src: '/images/Transformation-advisor/Screen Shot 2021-12-08 at 12.04.14 AM.png', alt: 'Research - Scope/big questions analysis' }
];
const rolledUpCostImages = [
  { src: '/images/Transformation-advisor/Screen Shot 2021-12-07 at 3_edited.jpg', alt: 'Rolled up cost - Java Applications with Common JAR files and cost columns' }
];
const advancedFilteringImages = [
  { src: '/images/Transformation-advisor/Screen Shot 2021-12-08 at 12.10.08 AM.png', alt: 'Advanced filtering - JBoss Migration assessment with filter dropdown' }
];
const domainCentricImages = [
  { src: '/images/Transformation-advisor/1. a copy 6.png', alt: 'Domain centric view - Moneybank workspace' }
];

const heroImage = '/images/Transformation-advisor/Screen Shot 2021-12-07 at 3.57.22 PM.png';

function TransformationAdvisor() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="case-study transformation-advisor">
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      <PageHeader onMenuOpen={openMenu} />

      {/* Hero Section */}
      <section className="cs-hero">
        <h1 className="cs-title script-font">IBM Transformation Advisor</h1>
        <p className="cs-subtitle script-font">2020</p>
        <div className="cs-hero-image">
          <img src={heroImage} alt="IBM Transformation Advisor - Java Applications interface showing workspaces and application analysis" />
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
            Champ (a solutions architect) and Jane (an applications developer) need to modernize their company's complex legacy, mission-critical applications so they can continue to scale infrastructure, save money, and maintain stability.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Business value and need</h3>
          <p className="cs-text">
            IBM needed to support customers in modernizing applications. Transformation Advisor was built to guide and provide visibility for developers and solution architects through that workflow.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">My contribution summary</h3>
          <ul className="cs-list">
            <li>Designed a cost and time estimation feature based on customer parameters, helping teams prioritize modernization efforts more efficiently</li>
            <li>Improved dashboard filtering to support diverse customer needs, allowing users to customize views and track progress throughout their modernization journey</li>
          </ul>
        </div>

      </section>

      {/* Screen Iteration - Full Width */}
      <section className="cs-full-width-image ta-wide-image">
        <img src="/images/Transformation-advisor/Screen Shot 2021-12-08 at 12.18.22 AM.png" alt="Screen iteration from TA rolled up cost work - collection of wireframe thumbnails" />
        <p className="ta-caption script-font">Screen iteration from TA rolled up cost work</p>
      </section>

      {/* Work and Evidence Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Work and evidence</h2>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">UX, Research and Visual design work</h3>
          <p className="cs-text">
            IBM Transformation Advisor (TA) is a product to help businesses modernize monolith applications and move them to the cloud. In my 6 months on the team, I collaborated with design and developers to ideate on how to implement new tech in a usable way. This team allowed me to use and grow my UX skills as well as research and visual design skills. My biggest impact on this project was tackling a UX challenge of "rolled up cost" to give a more accurate, rolled-up estimate of development days modernization would take.
          </p>
        </div>

        <div className="cs-two-column">
          <div className="cs-column">
            <h4 className="cs-column-title script-font">Research</h4>
            <div className="ta-clickable-image">
              <FullscreenSlider images={researchImages} className="ta-evidence-slider" />
            </div>
            <p className="cs-text">
              I planned, ran, and synthesized research sessions to understand the goals of future TA versions. I presented findings and used those findings to impact design work moving forward.
            </p>
          </div>
          <div className="cs-column">
            <h4 className="cs-column-title script-font">Rolled up cost</h4>
            <div className="ta-clickable-image">
              <FullscreenSlider images={rolledUpCostImages} className="ta-evidence-slider" />
            </div>
            <p className="cs-text">
              The aim of this work was to give a more accurate estimate of how many development days applications would take to modernize based on the number of shared files between them.
            </p>
          </div>
        </div>

        <div className="cs-two-column">
          <div className="cs-column">
            <h4 className="cs-column-title script-font">Advanced filtering</h4>
            <div className="ta-clickable-image">
              <FullscreenSlider images={advancedFilteringImages} className="ta-evidence-slider ta-filtering-slider" />
            </div>
            <p className="cs-text">
              My advanced filtering designs were small in UX weight but impactful to allow users to simplify their application views to focus on the most important apps.
            </p>
          </div>
          <div className="cs-column">
            <h4 className="cs-column-title script-font">Domain centric view</h4>
            <div className="ta-clickable-image">
              <FullscreenSlider images={domainCentricImages} className="ta-evidence-slider" />
            </div>
            <p className="cs-text">
              User feedback told us that TA could be enhanced by reorganizing the structure of applications. This mid-fi work addressed that need.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Map Section - Full Width */}
      <section className="cs-full-width-image ta-wide-image">
        <h3 className="cs-block-title script-font ta-journey-title">TA user journey map</h3>
        <img src="/images/Transformation-advisor/journey map V1_2x.png" alt="Transformation Advisor user journey map" />
      </section>

      {/* Reflection Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Reflection</h2>

        <p className="cs-text">
          Working on Transformation Advisor taught me the importance of understanding complex technical concepts in order to design effective user experiences. The rolled-up cost feature required deep collaboration with developers and stakeholders to translate technical requirements into intuitive interfaces.
        </p>

        <p className="cs-text">
          This project reinforced my ability to work within an agile environment, iterate quickly based on user feedback, and balance business needs with user needs. The experience of designing for enterprise software users helped me develop a more nuanced understanding of how to simplify complex workflows.
        </p>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation
        prevProject={{ name: 'IBM Blockchain Platform', path: '/work/blockchain-platform' }}
        nextProject={{ name: 'IBM Trusted Identity', path: '/work/trusted-identity' }}
      />

      <CaseStudyFooter />
    </div>
  );
}

export default TransformationAdvisor;
