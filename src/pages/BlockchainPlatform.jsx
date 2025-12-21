import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import ProjectNavigation from '../components/ProjectNavigation';
import CaseStudyFooter from '../components/CaseStudyFooter';
import './WatsonOrchestrate.css';
import './BlockchainPlatform.css';

const heroImage = '/images/Blockchain/6_platform.png';

function BlockchainPlatform() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

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

      {/* Full-width Platform Screenshot */}
      <section className="bc-platform-showcase">
        <div className="bc-platform-image">
          <img src="/images/Blockchain/Artboard Copy.png" alt="IBM Blockchain Platform interface showing Understand, Build, Operate, and Grow tabs with Ordering Services and Certificate Authorities" />
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

        {/* Before/After Comparison */}
        <div className="bc-comparison-grid">
          <div className="bc-comparison-column">
            <h4 className="bc-comparison-title script-font">Getting started/Buy app (before)</h4>
            <div className="bc-comparison-images">
              <img src="/images/Blockchain/1_create_select plan.png" alt="Original getting started - select plan screen" />
              <img src="/images/Blockchain/2_create_choose cluster.png" alt="Original getting started - choose cluster screen" />
            </div>
            <p className="cs-text">
              Understand the current problems with the experience (NPS and research). Share more nuanced pain points and usability tests with stakeholders. Sketch, test, and define a new experience that addresses pain points and can feasibly be built.
            </p>
          </div>
          <div className="bc-comparison-column">
            <h4 className="bc-comparison-title script-font">Get started resource model (After)</h4>
            <div className="bc-comparison-images">
              <img src="/images/Blockchain/4. wait time_cart.png" alt="New getting started - wait time with cart" />
              <img src="/images/Blockchain/5_complete with cart.png" alt="New getting started - complete with cart" />
            </div>
            <p className="cs-text">
              Organize and design resources to best meet the needs of a user at whatever stage of their experience they're in. Test and get feedback, take till home up to FI visuals with the Carbon design system.
            </p>
          </div>
        </div>
      </section>

      {/* UX Design Work Section */}
      <section className="cs-section">
        <h3 className="bc-section-subtitle script-font">UX Design work</h3>

        <div className="bc-ux-grid">
          <div className="bc-ux-column">
            <div className="bc-ux-image">
              <img src="/images/Blockchain/Hifi_2x.png" alt="UI Design work - high fidelity mockups" />
            </div>
            <p className="cs-text">
              Take on multiple UX and Visual Design story issues. Discuss and communicate with the right people to design wireframes and/or hi-fis that address the user problem or new feature request.
            </p>
          </div>
          <div className="bc-ux-column">
            <h4 className="bc-column-title script-font">Journey Maps</h4>
            <div className="bc-ux-image">
              <img src="/images/Blockchain/Hifi_2x (1).png" alt="Journey maps for blockchain platform user experience" />
            </div>
            <p className="cs-text">
              Design a visual that displays the high-level experience of a Blockchain Platform user from discovery to extended use. These designs were repeatedly used on websites, important presentations and in model mapping to give an overarching view of the process. I created multiple iterations for more detailed parts of the process and other product(s) I later worked on.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started App Grid */}
      <section className="cs-section">
        <h3 className="bc-section-subtitle script-font">Getting started app (Buy app)</h3>

        <div className="bc-app-grid">
          <div className="bc-app-item">
            <img src="/images/Blockchain/1_create_select plan.png" alt="Select plan screen" />
          </div>
          <div className="bc-app-item">
            <img src="/images/Blockchain/2_create_choose cluster.png" alt="Choose cluster screen" />
          </div>
          <div className="bc-app-item">
            <img src="/images/Blockchain/4. wait time_cart.png" alt="Wait time with cart screen" />
          </div>
          <div className="bc-app-item">
            <img src="/images/Blockchain/4.1 wait time_no cart.png" alt="Wait time without cart screen" />
          </div>
          <div className="bc-app-item">
            <img src="/images/Blockchain/5_complete with cart.png" alt="Complete with cart screen" />
          </div>
          <div className="bc-app-item">
            <img src="/images/Blockchain/app switcher 2_2x.png" alt="App switcher design" />
          </div>
        </div>

        <p className="cs-text bc-app-description">
          Working cross-team and with PM, I designed an experience that allowed in-context kubernetes cluster creation- a previously huge barrier to entry for our users. On top of this we implemented multiple designs to enhance the buy experience. We cut the time to set up and connect kubernetes clusters (required for the platform) in half.
        </p>
      </section>

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
            <div className="bc-reddot-text">
              <span className="bc-reddot-logo">red dot</span>
              <span className="bc-reddot-label">design award</span>
              <span className="bc-reddot-year">winner 2019</span>
            </div>
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
