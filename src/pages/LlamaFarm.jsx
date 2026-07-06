import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Navigation from '../components/Navigation';
import ProjectNavigation from '../components/ProjectNavigation';
import CaseStudyFooter from '../components/CaseStudyFooter';
import { AutoScrollSlider } from '../components/sliders';
import './WatsonOrchestrate.css';
import './LlamaFarm.css';

const heroImage = '/images/llamafarm/media/LF-portfolio-header.png';

// Platform screens for the slider — product screens, then onboarding
const platformImages = [
  { src: '/images/llamafarm/media/product1.png', alt: 'LlamaFarm platform - product screen 1' },
  { src: '/images/llamafarm/media/product2.png', alt: 'LlamaFarm platform - product screen 2' },
  { src: '/images/llamafarm/media/product3.png', alt: 'LlamaFarm platform - product screen 3' },
  { src: '/images/llamafarm/media/product4.png', alt: 'LlamaFarm platform - product screen 4' },
  { src: '/images/llamafarm/media/product5.png', alt: 'LlamaFarm platform - product screen 5' },
  { src: '/images/llamafarm/media/product6.png', alt: 'LlamaFarm platform - product screen 6' },
  { src: '/images/llamafarm/media/onboard1.png', alt: 'LlamaFarm onboarding - step 1' },
  { src: '/images/llamafarm/media/onboard2.png', alt: 'LlamaFarm onboarding - step 2' },
  { src: '/images/llamafarm/media/onboard3.png', alt: 'LlamaFarm onboarding - step 3' },
  { src: '/images/llamafarm/media/onboard4.png', alt: 'LlamaFarm onboarding - step 4' },
  { src: '/images/llamafarm/media/onboard5.png', alt: 'LlamaFarm onboarding - step 5' },
];

function LlamaFarm() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="case-study llamafarm">
      <Navigation isOpen={isMenuOpen} onClose={closeMenu} />
      <PageHeader onMenuOpen={openMenu} />

      {/* Hero Section */}
      <section className="cs-hero">
        <h1 className="cs-title script-font">LlamaFarm</h1>
        <p className="cs-subtitle script-font">2025–2026 · Co-founder & Design Engineer · Open-source, local AI</p>
        <div className="cs-hero-image">
          <img src={heroImage} alt="LlamaFarm - open-source platform for building local AI" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Overview</h2>

        <div className="cs-meta">
          <p className="cs-meta-item script-font">Role: Co-founder & Design Engineer (Product, UX, Brand, Front-end)</p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">User problem statement</h3>
          <p className="cs-text">
            Meet Larry: an inexperienced Air Force developer tasked with building AI solutions for a whole range of problems—equipment management, aircraft maintenance, fitness scheduling, and more. Larry and teams like his can't just reach for big cloud AI APIs; in government—and anywhere privacy, cost, and uptime actually matter—sending your data off to someone else's cloud isn't an option.
          </p>
          <p className="cs-text">
            What Larry needs are local, specialized models he can train and build into his own apps—but that's genuinely hard. Without the right setup, accurate data, and guardrails, local models hallucinate and degrade fast.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">Business value and need</h3>
          <p className="cs-text">
            LlamaFarm is an open-source platform for building local AI projects—enterprise AI on your own hardware, no cloud required. Instead of leaving people to wire it all together themselves, it walks them through the hard parts: choosing the right models, training on the right data, and standing up private AI that actually works. We built it in the open from day one, because the AI space moves too fast to lock into a SaaS product.
          </p>
        </div>

        <div className="cs-block">
          <h3 className="cs-block-title script-font">My contribution summary</h3>
          <ul className="cs-list">
            <li>Co-founded the company and led the design-thinking work that found the problem in the first place</li>
            <li>Designed the entire platform—the web Designer UI and the macOS desktop app—with a focus on onboarding, sample datasets, and making a genuinely hard task feel approachable</li>
            <li>Took over front-end development using AI tools when our engineer left, and shipped the real product</li>
            <li>Built and maintained the brand, website, and docs, and helped grow an open-source community past 500 GitHub stars and a 5,000-strong Reddit following</li>
          </ul>
        </div>
      </section>

      {/* Origin Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">How LlamaFarm Began</h2>
        <p className="cs-text">
          LlamaFarm came out of a pivot. At a pivotal moment, we made the call to move away from <Link to="/work/rownd" className="cs-inline-link">authentication</Link>—right as the AI shift was reshaping everything. We pushed our whole team to embrace AI tools and set out to build something genuinely smart (think a company AI bot that's actually useful), with a real goal underneath it: find a big enough problem that AI itself had created.
        </p>
        <p className="cs-text">
          Through a design workshop I led, the answer got clear—local, private AI is really hard to do. And we had a way in: through Rownd's existing government contract, we already had access to plenty of real users like "Larry"—an Air Force developer working under heavy constraints. He became our north star. If we could enable someone like him to build custom, local AI for his team without needing a PhD to do it, we had a real shot at landing a government contract of our own down the line. That's how LlamaFarm began.
        </p>
      </section>

      {/* Platform Collage */}
      <section className="cs-section lf-image-section">
        <img className="lf-content-image" src="/images/llamafarm/media/better-than-laptop.png" alt="A collage of the LlamaFarm platform - dashboard, RAG, prompts, and packaging" />
      </section>

      {/* Open Source Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">A New Kind of Product: Open Source</h2>
        <p className="cs-text">
          Coming from Rownd, I knew how to build a SaaS product. Open source was a different world—one of the most surprising, most fun, and most brutal parts of the whole thing.
        </p>
        <p className="cs-text">
          We built in the open from the start; with the AI space changing daily, a locked-down SaaS product would never move as fast as building out loud. The community that grew around it was its own kind of thing—people on Reddit are quick to be offended and just as quick to become fiercely loyal if you actually listen, take their feedback, and let them contribute. Some of the most genuine conversations I've had were at an open-source conference, a world away from SaaS sales calls.
        </p>
        <p className="cs-text">
          The metrics changed too. Sales basically didn't exist—success was usage and contribution, not subscriptions, which was nearly impossible to get traditional buy-in for. Stars became the scoreboard (hitting 500 felt amazing) alongside a 5,000-strong Reddit community, but the truest sign of success was watching LlamaFarm become the foundation for a bigger project of our own at <a href="https://rownd.ai" target="_blank" rel="noopener noreferrer" className="cs-inline-link">rownd.ai</a>. None of it was smooth—trusting strangers to contribute, deciding whose feature requests to act on, and just getting GitHub users to talk to me was harder than I expected. Open source is a craft of its own, and I learned it in real time.
        </p>
      </section>

      {/* Open Source Image */}
      <section className="cs-section lf-image-section">
        <img className="lf-content-image" src="/images/llamafarm/media/github-reddit.png" alt="LlamaFarm's presence on GitHub and Reddit" />
      </section>

      {/* Designing for Many Users Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Designing for Many Users at Once</h2>
        <p className="cs-text">
          The hardest design challenge was that I wasn't designing for one user—I was designing for very different people at the same time. How do I help our Air Force developer hit the bare minimum he needs to get local AI working, while also letting a power user from Reddit deeply configure every layer of his AI stack?
        </p>
        <p className="cs-text">
          The answer was a lot of progressive disclosure: a clear, guided path on the surface, with real depth available the moment someone wants to reach for it. Simple enough to get started, deep enough to never hit a wall.
        </p>
      </section>

      {/* Platform Screens Slider */}
      <section className="wo-outcome-slider-section lf-slider-section">
        <AutoScrollSlider images={platformImages} interval={4000} className="wo-outcome-slider" />
      </section>
      <p className="lf-slider-caption script-font">A look inside the platform I designed and built: product screens and the guided onboarding flow</p>

      {/* Designer to Builder Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">From Designer to Builder</h2>
        <p className="cs-text">
          As soon as LlamaFarm got going, our front-end developer left. We had no money to hire, we were in the middle of a massive pivot that might still fail, and I figured I had nothing to lose—so I picked up the front end myself using AI tools, and haven't looked back since.
        </p>
        <p className="cs-text">
          My dev team was incredibly patient; I had questions constantly. I learned to use a terminal, how to prompt Claude, Codex, and Cursor to actually get the outcome I wanted, how to run things locally, a pile of git commands, and how to collaborate through GitHub. It was a whole new world—and I only wish I'd forced myself into it sooner.
        </p>
        <p className="cs-text">
          The proof is the product: I designed and built the entire LlamaFarm UI and the macOS desktop app. I'm especially proud of the onboarding flow, the sample datasets, and how approachable the whole experience feels for something this technically deep.
        </p>
        <p className="cs-text">
          It also changed how I design. I barely open Figma anymore (okay—sometimes). Building directly is just so much faster: I can have an idea, iterate on it through chat, feed in more context when I need to, and reach something real a hundred times faster than before. For me, the days of handing polished Figma files to a developer are gone—this very portfolio is a small example of that new way of working.
        </p>
      </section>

      {/* Designer to Builder Image */}
      <section className="cs-full-width-image">
        <img src="/images/llamafarm/media/designer-to-builder.png" alt="Designing and building LlamaFarm with AI tools" />
      </section>

      {/* Reflection Section */}
      <section className="cs-section">
        <h2 className="cs-section-title">Reflection & What's Next</h2>
        <p className="cs-text">
          LlamaFarm did something I didn't fully see coming: it prepared us for what was next. As government contracts started opening up around local AI and drones, we already had the education, the instincts, and the speed to confidently start building AI for edge devices—which became our next project.
        </p>
        <p className="cs-text">
          The bigger personal shift was learning to move at the speed of AI. I got fast at ramping up on new tools and products the moment they dropped, at evaluating which ones were actually worth adopting, and at figuring out how to prompt each one to get the outcome I wanted. All that constant experimentation kept me ahead of the curve in design—comfortable with tools most people hadn't touched yet, and fluent in a way of working the field was only just starting to catch up to.
        </p>
        <p className="cs-text">
          We've since put LlamaFarm on the back burner, but we still use it, still contribute to it, and it's still quietly powering what we build. For me, it was the project that turned a designer into a design engineer.
        </p>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation
        prevProject={{ name: 'Rownd Authentication', path: '/work/rownd' }}
        nextProject={{ name: 'IBM Watson Orchestrate', path: '/work/watson-orchestrate' }}
      />

      <CaseStudyFooter />
    </div>
  );
}

export default LlamaFarm;
