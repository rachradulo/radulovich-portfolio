import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import ProjectNavigation from '../components/ProjectNavigation';
import CaseStudyFooter from '../components/CaseStudyFooter';
import { AutoScrollSlider, FullscreenSlider, MarqueeSlider } from '../components/sliders';
import './WatsonOrchestrate.css';

// Image paths from /public/images/watson-orchestrate/
const heroImage = '/images/Watson-Orchestrate-Explainer-5E-Desktop.webp';

const processImages = [
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.22.04 PM.png', alt: 'Miro board with user journey and wireframes' },
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.06.39 PM.png', alt: 'Wireframe user flow board' },
];

const productUIImages = [
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 6.50.29 PM.png', alt: 'Mid-fi prototype - Chat interface with mission panel' },
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.18.55 PM.png', alt: 'Mid-fi prototype - Capabilities found panel' },
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.19.24 PM.png', alt: 'Mid-fi prototype - Reasoning view' },
];

const outcomeImages = [
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.18.04 PM.png', alt: 'Intro screen - A first look at IBM Watson Orchestrate' },
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.18.16 PM.png', alt: 'Your mission modal - Sales Associate role' },
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.18.33 PM.png', alt: 'Chat onboarding with instructions' },
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.19.55 PM.png', alt: 'Chat interaction with graph view' },
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.20.21 PM.png', alt: 'Chat with capabilities unlocked' },
];

const pressImages = [
  { src: '/images/watson-orchestrate/ibm-think-2020-digital-event-case-study-facebook.jpeg', alt: 'IBM Think typography graphic' },
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.30.05 PM.png', alt: 'Watson Orchestrate connected nodes visualization' },
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.32.19 PM.png', alt: 'IBM Blog - Work Smarter Not Harder article' },
  { src: '/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.37.15 PM.png', alt: 'How IBM Watson Orchestrate automates procurement article' },
];

function WatsonOrchestrate() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="case-study watson-orchestrate">
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      <PageHeader onMenuOpen={openMenu} />

      {/* Hero Section */}
      <section className="cs-hero">
        <h1 className="cs-title script-font">IBM Watson Orchestrate</h1>
        <p className="cs-subtitle script-font">2021 - 1H Playground demo experience</p>
        <div className="cs-hero-image">
          <img src={heroImage} alt="Watson Orchestrate hero - hand interacting with connected nodes" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Overview</h2>

        <div className="cs-meta">
          <p className="cs-meta-item script-font">Role: Design lead, UX designer</p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">User problem statement</h3>
          <p className="cs-text">
            Sellers need a way to automate repetitive tasks like lead generation, initial outreach, and follow-ups so they can focus on high-value work like closing deals and building client relationships.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Business value and need</h3>
          <p className="cs-text">
            In the early days of NLP and AI agents (pre-ChatGPT!), IBM needed to demonstrate real-world business value for the technology that became Watson Orchestrate. This work focused on defining a testable prototype strategy to validate the technology and market need.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">My contribution summary</h3>
          <ul className="cs-list">
            <li>Led the team by prioritizing and delegating work based on business needs, timelines, and goals</li>
            <li>Conducted extensive research with 50+ sellers to define and validate early use cases, synthesizing findings into actionable insights</li>
            <li>Designed the chat-based gamified low-fidelity UX for the first Watson Orchestrate prototype, combining NLP tech with a real-world use case and guiding the team to bring it all together.</li>
            <li>Co-created the pitch and storyline presented to IBM's CEO, which helped secure buy-in and support for the product's growth</li>
          </ul>
        </div>
      </section>

      {/* Work and Evidence Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Work and evidence</h2>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Process and collaboration</h3>
          <AutoScrollSlider images={processImages} interval={5000} />
        </div>

        <div className="cs-tags">
          <span className="cs-tag script-font">UX design</span>
          <span className="cs-tag-separator">,</span>
          <span className="cs-tag script-font">Storytelling</span>
          <span className="cs-tag-separator">,</span>
          <span className="cs-tag script-font">Research</span>
        </div>

        <p className="cs-text">
          Watson Orchestrate (WO) set out to be the digital worker that could complete tedious tasks across business systems for business users. As a strategic design team, our goal was to build that vision and MVP playground experience for its launch at the Think conference. We ran research to understand the space (sales scenario for this playground) and natural language processing, and then we built a story and playground experience for the product launch. My biggest impact on WO was in the UX design and storytelling of the playground.
        </p>
      </section>

      {/* My Impact Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">My impact</h2>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Product UI & UX Designs</h3>
          <p className="cs-text">
            The playground experience required some knowledge of game design. We brainstormed our favorite educational/general game experiences to choose the right amount of "game" and "product"
          </p>
          <p className="cs-text">
            I enjoyed wire-framing from lo fidelity to mid fidelity for this-working closing with dev and visual design to ensure feasibility and ease of hand off.
          </p>
          <FullscreenSlider images={productUIImages} interval={4000} />
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Storytelling and content</h3>
          <p className="cs-text">
            We built out a detailed to-be user journey from our research. We tested it, and then built out alternative paths with it for the experience.
          </p>
          <div className="cs-single-image">
            <img src="/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.02.48 PM.png" alt="User journey flow diagram" />
          </div>
        </div>

        <div className="cs-two-column">
          <div className="cs-column">
            <h4 className="cs-column-title script-font">Research testing & QA</h4>
            <div className="cs-column-image">
              <img src="/images/watson-orchestrate/Screen Shot 2021-05-05 at 11.02.46 AM.png" alt="Slack and Invision testing" />
            </div>
            <p className="cs-text">
              In a short amount of time I came up with a creative way to test our un-coded experience with slack & Invision. The research gave us the quick feedback we needed to get things just right before launch.
            </p>
          </div>

          <div className="cs-column">
            <h4 className="cs-column-title script-font">Playbacks</h4>
            <div className="cs-column-image">
              <img src="/images/watson-orchestrate/Screenshot 2025-12-21 at 4.44.32 PM.png" alt="Team playback presentation" />
            </div>
            <p className="cs-text">
              To ensure stakeholder alignment, we presented our work often and at all levels of fidelity.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="cs-section">
        <div className="cs-block">
          <h3 className="cs-block-title script-font">Outcome: Gamified Watson Orchestrate Playground</h3>
          <FullscreenSlider images={outcomeImages} interval={4000} />
          <p className="cs-text">
            The final outcome for initial launch, was a gamified chat experience. Using natural language (or built in hints) trial users leveraged WO to accomplish their sales challenge. Along the way, they learn about the product capabilities by unlocking new capabilities as they were used and completing tasks. A successful user would complete the playground experience within 10 minutes and would hopefully share their new knowledge of the coming product to their network.
          </p>
        </div>
      </section>

      {/* Press Section */}
      <section className="cs-section">
        <div className="cs-block">
          <h3 className="cs-block-title script-font">Press and articles at release (Spring 2021 - Think conference)</h3>
          <MarqueeSlider images={pressImages} speed={25} />
        </div>
      </section>

      {/* Reflection Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Reflection</h2>
        <p className="cs-text">
          This project taught me a variety of things. Aside from a new extensive knowledge of sales executives lives, I learned about Natural Language processing, AI, content design, gamification and design strategy. As a strategic team our short-term goal of getting this new product off the ground was successful. Being our first project, there are many things we reflected could've been done differently in our process, but all in all we did have success. For the most part, I enjoyed the short term strategy design and believe we continued to improve in the projects following this one. Looking back, In a pre-ChatGPT world, this project was my first look into designing for voice and chat-based interfaces.
        </p>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Awards this experience has achieved (so far)</h3>
          <div className="cs-awards">
            <div className="cs-award">
              <div className="cs-award-logo">
                <img src="/images/watson-orchestrate/Screen Shot 2021-12-08 at 5.28.45 PM.png" alt="CES 2022 Innovation Award" />
              </div>
              <div className="cs-award-text">
                <p>CES 2022 Innovation Award Product Honoree Software & Mobile Apps</p>
              </div>
            </div>
            <div className="cs-award">
              <div className="cs-award-logo">
                <img src="/images/watson-orchestrate/E1HzkhdWQAQO327.jpeg" alt="IBM OTAA Award - Think Conference Presentation" />
              </div>
              <div className="cs-award-text">
                <p>IBM Outstanding Technical Achievement Award (OTAA)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation
        prevProject={{ name: 'IBM Blockchain Platform', path: '/work/blockchain-platform' }}
        nextProject={{ name: 'IBM Transformation Advisor', path: '/work/transformation-advisor' }}
      />

      <CaseStudyFooter />
    </div>
  );
}

export default WatsonOrchestrate;
