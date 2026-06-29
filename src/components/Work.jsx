import { Link } from 'react-router-dom';
import './Work.css';

const featuredProject = {
  id: 0,
  title: 'Rownd authentication',
  subtitle: '2021–2025',
  image: '/images/rownd/homepage-rownd.png',
  link: '/work/rownd',
};

const projects = [
  {
    id: 1,
    title: 'IBM Watson Orchestrate',
    subtitle: '2021',
    image: '/images/Watson-Orchestrate-Explainer-5E-Desktop.webp',
    link: '/work/watson-orchestrate',
  },
  {
    id: 2,
    title: 'IBM Transformation Advisor',
    subtitle: '2020–2021',
    image: '/images/transformation-advisor.jpg',
    link: '/work/transformation-advisor',
  },
  {
    id: 3,
    title: 'IBM Trusted Identity',
    subtitle: '2018–2019',
    image: '/images/trusted-identity.jpg',
    link: '/work/trusted-identity',
  },
  {
    id: 4,
    title: 'IBM Blockchain Platform',
    subtitle: '2018–2021',
    image: '/images/blockchain-platform.png',
    link: '/work/blockchain-platform',
  },
];

function Work() {
  return (
    <section id="work" className="work-section">
      <h2 className="work-title script-font">Work</h2>

      <div className="projects-grid">
        {/* Featured Project - spans both columns */}
        <Link to={featuredProject.link} className="project-card project-card-featured">
          <div className="project-image-container">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${featuredProject.image})` }}
            />
            <div className="project-overlay">
              <div className="project-title-group">
                <h3 className="project-title script-font">{featuredProject.title}</h3>
                <p className="project-subtitle">{featuredProject.subtitle}</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Regular Projects */}
        {projects.map((project) => (
          <Link key={project.id} to={project.link} className="project-card">
            <div className="project-image-container">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="project-overlay">
                <div className="project-title-group">
                  <h3 className="project-title script-font">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Work;
