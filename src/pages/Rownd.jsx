import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import ProjectNavigation from '../components/ProjectNavigation';
import CaseStudyFooter from '../components/CaseStudyFooter';
import './WatsonOrchestrate.css';

const heroImage = '/images/rownd/rownd-hero.png';

function Rownd() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="case-study rownd">
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      <PageHeader onMenuOpen={openMenu} />

      {/* Hero Section */}
      <section className="cs-hero">
        <h1 className="cs-title script-font">Designing and Scaling Authentication at Rownd</h1>
        <p className="cs-subtitle script-font">Founder & Head of Design · B2C, B2B, and Government Platforms</p>
        <div className="cs-hero-image">
          <img src={heroImage} alt="Rownd - Authentication platform" />
        </div>
      </section>

      {/* Role & Scope Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Role & Scope</h2>
        <p className="cs-text">
          As Founder and Head of Design at Rownd, I led product design and UX strategy across the entire platform—from high-conversion sign-in experiences to complex admin and configuration workflows.
        </p>
        <p className="cs-text">
          I worked closely with front-end and back-end engineers to design systems that balanced usability, security, and scalability, and partnered directly with customers to inform product direction. Over four years, my role evolved from hands-on execution to setting design direction, prioritizing feature work, and making tradeoffs across UX, engineering effort, and business goals.
        </p>
      </section>

      {/* 0→1 Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">From Idea to Product: 0→1 at Rownd</h2>
        <p className="cs-text">
          Rownd began as an early exploration of modern authentication patterns and evolved into a production platform supporting consumer, enterprise, and government use cases.
        </p>
        <p className="cs-text">
          Designing from zero meant defining fundamentals before interfaces—how users experience sign-in, how identity evolves over time, and how the system scales across very different customer needs. With no existing product constraints, early design decisions shaped both the user experience and the underlying product architecture.
        </p>
        <p className="cs-text">
          Rather than over-polishing early concepts, the focus was on shipping usable flows quickly, learning from real customer behavior, and refining direction based on adoption and friction.
        </p>
      </section>

      {/* Brand Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Brand as Product Foundation</h2>
        <p className="cs-text">
          I owned Rownd's brand from the ground up, designing the visual language and interaction principles alongside the product itself.
        </p>
        <p className="cs-text">
          Brand decisions emphasized trust, clarity, and consistency across marketing, onboarding, and in-product experiences—critical for a product operating in authentication and identity.
        </p>
      </section>

      {/* Core Design Challenges Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Core Design Challenges</h2>
        <p className="cs-text">
          Rownd's design work centered around a small set of persistent challenges:
        </p>
        <ul className="cs-list">
          <li>Reducing sign-in friction without compromising security</li>
          <li>Supporting multiple user states (guest, verified, returning)</li>
          <li>Designing for different audiences (end users, developers, admins)</li>
          <li>Scaling UX consistency as the product and team grew</li>
        </ul>
        <p className="cs-text">
          These challenges informed nearly every product and design decision.
        </p>
      </section>

      {/* Approach Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">How I Approached Design</h2>
        <p className="cs-text">
          My approach emphasized clarity, constraint, and iteration:
        </p>
        <ul className="cs-list">
          <li>Prioritized conversion and speed to value over exhaustive customization early</li>
          <li>Shipped opinionated defaults, then layered flexibility as customer needs matured</li>
          <li>Used direct customer interaction to identify friction and validate direction</li>
          <li>Balanced UX improvements against engineering complexity and long-term maintainability</li>
        </ul>
        <p className="cs-text">
          Design decisions were rarely about ideal solutions—they were about choosing the right solution given real-world constraints.
        </p>
      </section>

      {/* Case Study 1 */}
      <section className="cs-section">
        <h2 className="cs-section-title">Case Study 1: Progressive Sign-In</h2>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Problem</h3>
          <p className="cs-text">
            Traditional authentication flows often force users to sign up or verify too early, creating friction and drop-off—especially for first-time users.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Constraints</h3>
          <ul className="cs-list">
            <li>Security and compliance requirements</li>
            <li>Multiple customer implementations</li>
            <li>Backend identity states that needed to stay aligned with UX</li>
          </ul>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Approach</h3>
          <p className="cs-text">
            I helped design a progressive identity model that allowed users to begin using an app immediately, introducing verification only at meaningful moments.
          </p>
          <p className="cs-text">
            This required close collaboration with engineering to ensure the UX accurately reflected backend identity states and could adapt as users transitioned from guest to verified.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Outcome</h3>
          <ul className="cs-list">
            <li>Reduced early-stage friction in sign-in flows</li>
            <li>Gave customers flexibility without overwhelming configuration</li>
            <li>Established a reusable pattern applied across the platform</li>
          </ul>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="cs-section">
        <h2 className="cs-section-title">Case Study 2: Sign In with Mobile App</h2>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Problem</h3>
          <p className="cs-text">
            Desktop sign-in can introduce unnecessary friction for users already authenticated on their mobile device. Existing solutions often feel unclear or overly complex.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Constraints</h3>
          <ul className="cs-list">
            <li>Cross-device security requirements</li>
            <li>Clear trust signals were critical</li>
            <li>Needed to feel fast without feeling risky</li>
          </ul>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Approach</h3>
          <p className="cs-text">
            I led the design of a cross-device sign-in experience that allowed users to authenticate on desktop using their mobile app. The focus was on transparency—clearly communicating what was happening, where, and why.
          </p>
          <p className="cs-text">
            UX decisions were made in close partnership with engineering to ensure the flow was secure, reliable, and easy for customers to implement.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Outcome</h3>
          <ul className="cs-list">
            <li>Created a seamless cross-device sign-in experience</li>
            <li>Reduced friction for returning users</li>
            <li>Expanded Rownd's authentication model beyond single-device assumptions</li>
          </ul>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Leadership & Collaboration</h2>
        <p className="cs-text">
          In addition to hands-on design work, I:
        </p>
        <ul className="cs-list">
          <li>Partnered daily with front-end and back-end engineers on complex systems</li>
          <li>Worked directly with customers to understand pain points and validate solutions</li>
          <li>Helped prioritize feature requests based on impact and feasibility</li>
          <li>Represented Rownd in customer conversations, demos, and speaking engagements</li>
        </ul>
        <p className="cs-text">
          Staying close to real user problems helped keep design decisions grounded and pragmatic.
        </p>
      </section>

      {/* Reflection Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Reflection</h2>
        <p className="cs-text">
          Designing at Rownd required constant tradeoffs. Over time, I learned to:
        </p>
        <ul className="cs-list">
          <li>Favor momentum over perfection when speed mattered most</li>
          <li>Set constraints early to avoid over-engineering</li>
          <li>Make confident decisions with incomplete information</li>
          <li>Shift from executing solutions to shaping long-term direction</li>
        </ul>
        <p className="cs-text">
          These lessons continue to shape how I approach design leadership.
        </p>
      </section>

      {/* Final Signal Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Key Takeaways</h2>
        <ul className="cs-list">
          <li>End-to-end ownership of product and brand</li>
          <li>Strong systems thinking across UX, engineering, and business</li>
          <li>Comfort operating in ambiguity and scale</li>
          <li>Proven design leadership under real constraints</li>
        </ul>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation
        prevProject={{ name: 'IBM Blockchain Platform', path: '/work/blockchain-platform' }}
        nextProject={{ name: 'IBM Watson Orchestrate', path: '/work/watson-orchestrate' }}
      />

      <CaseStudyFooter />
    </div>
  );
}

export default Rownd;
