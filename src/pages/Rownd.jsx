import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import ProjectNavigation from '../components/ProjectNavigation';
import CaseStudyFooter from '../components/CaseStudyFooter';
import { AutoScrollSlider } from '../components/sliders';
import './WatsonOrchestrate.css';
import './Rownd.css';

const heroVideo = '/images/rownd/pendomonium-2.mp4';

// Placeholder imagery — swap with real screens in /public/images/rownd/
const platformImages = [
  { src: '/images/rownd/media/platform-1.png', alt: 'Rownd platform - screen 1' },
  { src: '/images/rownd/media/platform-2.png', alt: 'Rownd platform - screen 2' },
  { src: '/images/rownd/media/platform-3.png', alt: 'Rownd platform - screen 3' },
  { src: '/images/rownd/media/platform-4.png', alt: 'Rownd platform - screen 4' },
  { src: '/images/rownd/media/platform-5.png', alt: 'Rownd platform - screen 5' },
  { src: '/images/rownd/media/platform-6.png', alt: 'Rownd platform - screen 6' },
  { src: '/images/rownd/media/platform-7.png', alt: 'Rownd platform - screen 7' },
  { src: '/images/rownd/media/platform-8.png', alt: 'Rownd platform - screen 8' },
];

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
        <h1 className="cs-title script-font">Designing and Scaling Rownd Authentication</h1>
        <p className="cs-subtitle script-font">2021–2025 · Founder & Head of Design · B2C, B2B, and Government Platforms</p>
        <div className="cs-hero-video">
          <video src={heroVideo} autoPlay muted loop playsInline controls />
        </div>
        <p className="rownd-hero-caption script-font">An example of the videos we showcased in the background at conferences</p>
      </section>

      {/* Role & Scope Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Role & Scope</h2>
        <p className="cs-text">
          As Founder and Head of Design at Rownd, I led product design and UX strategy across the entire authentication platform—from high-conversion sign-in experiences to complex admin and configuration workflows. A true 0→1 experience.
        </p>
        <p className="cs-text">
          I worked closely with front-end and back-end engineers to design systems that balanced usability, security, and scalability, and I partnered directly with customers to inform product direction. Over four years, my role evolved from hands-on execution to setting design direction, prioritizing feature work, and making tradeoffs across UX, engineering effort, and business goals.
        </p>
      </section>

      {/* 0→1 Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">From Idea to Product: 0→1 at Rownd</h2>
        <p className="cs-text">
          While in Y Combinator, our team realized there was a bigger problem than the one we set out to solve—and it was as simple as getting users in the door. So we sold the product before it was a product. I mocked up our hypothesis—a simple sign-in experience—overlaid onto real prospect applications, and we pitched those animated screens to potential customers. The idea sold (and this was pre-AI, remember). We had people buying Rownd before it existed.
        </p>
        <p className="cs-text">
          From those early sales calls, I learned, adapted the designs, and translated them into clear direction for the engineers building it. We designed Rownd alongside our customers from day zero, and the growth followed: before long, Rownd authentication was supporting 10M+ end users, and our solution had become vital to the products built on top of it.
        </p>
        <p className="cs-text">
          Along the way I wore the hats of sales, marketing, user research, web design, mobile design, strategy, and UX. The full story of Rownd is hard to capture in one page—so here are a few of the pieces worth highlighting.
        </p>
      </section>

      {/* Real Problem Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">So What Was the Real Problem?</h2>
        <p className="cs-text">
          At first, our customers just wanted to stay focused on their own product and let us handle the front door—the sign-in screen. But over time we realized we were solving something bigger. Next to how complex other solutions were, Rownd's simplicity—connecting a single user across devices and sign-in methods—was the real value.
        </p>
        <p className="cs-text">
          Before Rownd, product teams had no way to truly own their sign-in experience. They couldn't make a quick tweak, test a reordering, or move sign-in deeper into the app to prompt users at the right moment without it turning into a major engineering ticket. Rownd gave them that control—letting product, not just engineering, shape how users came through the door.
        </p>
      </section>

      {/* Designing for Different Users Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Designing for Different Users</h2>
        <p className="cs-text">
          Rownd's design challenge was never about one user—it was about serving several at once, each with different goals and levels of technical depth.
        </p>

        <div className="cs-two-column">
          <div className="cs-column">
            <h4 className="cs-column-title script-font">The customer</h4>
            <div className="cs-column-image">
              <img src="/images/rownd/media/rownd-console.png" alt="Rownd no-code configuration console for customers" />
            </div>
            <p className="cs-text">
              The people who bought and configured Rownd: product owners, marketers, and often the CTO at small-to-mid-sized businesses. They wanted power and flexibility but had little time and little appetite for complexity. For them, design meant sensible defaults, fast configuration, and the ability to reshape the sign-in experience without code.
            </p>
          </div>

          <div className="cs-column">
            <h4 className="cs-column-title script-font">The end user</h4>
            <div className="cs-column-image">
              <img src="/images/rownd/media/rownd-end-user.png" alt="Branded Rownd sign-in widget for end users" />
            </div>
            <p className="cs-text">
              The everyday mobile and web users signing into the apps our customers built. They never knew Rownd by name—and that was the point. For them, design meant getting in the door quickly, securely, and without friction.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="cs-section">
        <h2 className="cs-section-title">Case Study 1: Progressive Sign-In</h2>
        <p className="cs-text">
          <strong>Primary user:</strong> End users—especially first-time users—and the customers who needed flexible identity without heavy configuration.
        </p>

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
            <li>Backend identity states that needed to stay aligned with the UX</li>
          </ul>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Approach</h3>
          <p className="cs-text">
            I designed a progressive identity model that let users begin using an app immediately, introducing verification only at meaningful moments. This required close collaboration with engineering to ensure the UX accurately reflected backend identity states and could adapt as users transitioned from guest to verified.
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

      {/* Progressive Sign-In Image */}
      <section className="cs-full-width-image rownd-tight-image">
        <img src="/images/rownd/media/stardust-case-study.png" alt="Progressive sign-in flow, shown in the Stardust app" />
        <p className="rownd-image-caption script-font">Stardust, a leading period-tracking app, used flows like this to engage users from the very first tap—building trust early instead of turning them away at a sign-up wall</p>
      </section>

      {/* Case Study 2 */}
      <section className="cs-section">
        <h2 className="cs-section-title">Case Study 2: Sign In with Mobile App</h2>
        <p className="cs-text">
          <strong>Primary user:</strong> Returning end users moving between devices, and the customers who wanted a modern, low-friction desktop experience.
        </p>

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
            I led the design of a cross-device sign-in experience that let users authenticate on desktop using their mobile app. The focus was on transparency—clearly communicating what was happening, where, and why. UX decisions were made in close partnership with engineering to keep the flow secure, reliable, and easy for customers to implement.
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

      {/* Sign In with Mobile App Image */}
      <section className="cs-full-width-image rownd-mobile-image">
        <img src="/images/rownd/media/sandboxx-mobile.png" alt="Sign in with mobile app, shown in the Sandboxx app" />
        <p className="rownd-image-caption script-font">This feature in action with our customer Sandboxx</p>
      </section>

      {/* Broader Platform Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">The Broader Platform</h2>
        <p className="cs-text">
          Beyond the sign-in flow itself, I designed the surfaces that made Rownd work for every team behind it.
        </p>
        <p className="cs-text">
          <strong>The Rownd platform — for our customers.</strong> The home for everything Rownd: a no-code console where teams could configure and reshape their authentication without touching engineering. Product could change how sign-in looked across device types (mobile, web, and more), support could look up users and step in to help or disable accounts, marketing could generate branded sign-in links, and developers could confirm their configurations were correct. One place where product, support, marketing, and dev each did their part.
        </p>
        <p className="cs-text">
          <strong>The Rownd end-user experience.</strong> A set of ready-made UI elements—fully configurable and white-labeled for every customer. Each one carried the customer's own tone and branding, so seamlessly that the end user never knew Rownd was there.
        </p>
      </section>

      {/* Broader Platform Slider */}
      <section className="wo-outcome-slider-section">
        <AutoScrollSlider images={platformImages} interval={4000} className="wo-outcome-slider" />
      </section>

      {/* Leadership Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Leadership & Collaboration</h2>
        <p className="cs-text">
          In addition to hands-on design work, I:
        </p>
        <ul className="cs-list">
          <li>Partnered daily with front-end and back-end engineers on complex systems</li>
          <li>Worked directly with customers to understand pain points and validate solutions early</li>
          <li>Prioritized feature requests based on impact and feasibility, leading sprint reviews and planning</li>
          <li>Represented Rownd in sales, customer conversations, demos, and speaking engagements</li>
          <li>Owned Rownd's website and marketing experiences as well as the visual identity and branding—shaping the brand from logo to landing page</li>
        </ul>
      </section>

      {/* Reflection Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Reflection</h2>
        <p className="cs-text">
          Designing at Rownd was a constant exercise in tradeoffs, and it taught me how to work in the gray. I learned to favor momentum over perfection when speed mattered most, to set constraints early so we wouldn't over-engineer, and to make confident decisions with incomplete information. As the company grew, my work shifted from executing individual solutions to shaping long-term direction, and from owning a single screen to owning the product and brand end to end. Along the way I built the kind of systems thinking that connects UX, engineering, and business, and I got genuinely comfortable operating in ambiguity and at scale. More than anything, Rownd proved out design leadership under real constraints.
        </p>
        <p className="cs-text">
          Rownd authentication was so much to me. Eventually my cofounders and I made the call to sell the product so we could fully focus on what's next—ask me sometime how we pivoted a whole team from authentication to autonomous drones… Hah.
        </p>
      </section>

      {/* Speaking & Events Gallery */}
      <section className="rownd-photo-gallery">
        <img src="/images/rownd/speaking/IMG_0680.jpeg" alt="Rownd team at the Pendomonium conference booth" />
        <img src="/images/rownd/speaking/IMG_8350.jpeg" alt="Rownd team at a trade show booth" />
        <img src="/images/rownd/speaking/IMG_0935.jpeg" alt="Rownd at SXSW Pitch" />
        <img src="/images/rownd/speaking/IMG_5156-2.jpg" alt="Leading a workshop with a seated audience" />
        <img src="/images/rownd/speaking/NCTechExpoColor-238.jpg" alt="Keynote talk on sign-up drop-off" />
      </section>
      <p className="rownd-gallery-caption script-font">Rownd out in the world—booths, conferences, and speaking engagements</p>

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
