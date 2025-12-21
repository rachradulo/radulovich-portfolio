import { Link } from 'react-router-dom';
import './ProjectNavigation.css';

function ProjectNavigation({ prevProject, nextProject }) {
  return (
    <nav className="project-navigation">
      {prevProject ? (
        <Link to={prevProject.path} className="project-nav-link prev">
          <span className="arrow">←</span>
          <span className="project-name script-font">{prevProject.name}</span>
        </Link>
      ) : (
        <div className="project-nav-placeholder" />
      )}

      {nextProject ? (
        <Link to={nextProject.path} className="project-nav-link next">
          <span className="project-name script-font">{nextProject.name}</span>
          <span className="arrow">→</span>
        </Link>
      ) : (
        <div className="project-nav-placeholder" />
      )}
    </nav>
  );
}

export default ProjectNavigation;
