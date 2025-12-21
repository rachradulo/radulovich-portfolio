import './Work.css';

const projects = [
  {
    id: 1,
    title: 'IBM Watson Orchestrate',
    image: '/images/Watson-Orchestrate-Explainer-5E-Desktop.webp',
    link: '/work/watson-orchestrate',
  },
  {
    id: 2,
    title: 'IBM Transformation Advisor',
    image: '/images/transformation-advisor.jpg',
    link: '/work/transformation-advisor',
  },
  {
    id: 3,
    title: 'IBM Trusted Identity',
    image: '/images/trusted-identity.jpg',
    link: '/work/trusted-identity',
  },
  {
    id: 4,
    title: 'IBM Blockchain Platform',
    image: '/images/blockchain-platform.png',
    link: '/work/blockchain-platform',
  },
];

function Work() {
  return (
    <section id="work" className="work-section">
      <h2 className="work-title script-font">Work</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <a key={project.id} href={project.link} className="project-card">
            <div className="project-image-container">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="project-overlay">
                <h3 className="project-title script-font">{project.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Work;
