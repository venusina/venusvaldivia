import { Caps, MIcon } from '../components/atoms.jsx';
import { PROJECTS_ALL } from '../data/projects.js';

function ProjectArchiveCard({ p, accent, stagger }) {
  const href = p.href || `#case-${p.id}`;
  const linkProps = p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <article className={`vv-archive-card ${stagger ? 'is-stagger' : ''}`}>
      <a href={href} {...linkProps} className="vv-archive-card-art">
        <img src={p.img} alt={p.title} loading="lazy" />
      </a>
      <div className="vv-archive-card-body">
        <div className="vv-archive-card-head">
          <h2 className="vv-archive-card-title" style={{ fontSize: "34px", fontWeight: "600" }}>{p.title}</h2>
          <Caps>{p.year}</Caps>
        </div>
        <p className="vv-archive-card-blurb">{p.blurb}</p>
        <a href={href} {...linkProps} className="vv-archive-card-link" style={{ borderColor: accent }}>
          <span>View project</span>
          <MIcon name="arrow_forward" size={14} />
        </a>
      </div>
    </article>
  );
}

export function ProjectsPage({ accent }) {
  return (
    <div data-screen-label="Venus Valdivia · projects">
      <section className="vv-archive-head-section">
        <div className="vv-container">
          <h1 className="vv-archive-h1">Projects</h1>
          <div className="vv-archive-head-meta">
            <Caps>Selected portfolio</Caps>
            <Caps>{PROJECTS_ALL.length} 2016 — 2026</Caps>
          </div>
          <div className="vv-rule" />
        </div>
      </section>

      <section className="vv-archive-grid-section">
        <div className="vv-container">
          <div className="vv-archive-grid">
            {PROJECTS_ALL.map((p, i) => (
              <ProjectArchiveCard
                key={p.id}
                p={p}
                accent={accent}
                stagger={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
