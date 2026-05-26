import { Caps, MIcon } from './atoms.jsx';
import { PROJECTS } from '../data/projects.js';

function SectionHeader({ eyebrow, title, count }) {
  return (
    <header className="vv-section-head">
      <div className="vv-section-head-top">
        <Caps>{eyebrow}</Caps>
        {count && <Caps>{count}</Caps>}
      </div>
      <h2 className="vv-section-title">{title}</h2>
      <div className="vv-rule" />
    </header>
  );
}

function ProjectCardOutlined({ p, reverse }) {
  return (
    <article className={`vv-card vv-card-outlined ${reverse ? 'is-reverse' : ''}`}>
      <div className="vv-card-text">
        <div className="vv-card-headings">
          <h3 className="vv-card-title">{p.title}</h3>
          <div className="vv-card-sub">{p.sub}</div>
        </div>
        <p className="vv-card-blurb">{p.blurb}</p>
        <a
          href={p.href || `#case-${p.id}`}
          target={p.external ? '_blank' : undefined}
          rel={p.external ? 'noopener noreferrer' : undefined}
          className="vv-card-pill">
          View Project
        </a>
      </div>
      <div className="vv-card-art">
        <img src={p.img} alt={p.title} loading="lazy" />
      </div>
    </article>
  );
}

function ProjectCardEditorial({ p, accent }) {
  return (
    <a
      href={p.href || `#case-${p.id}`}
      target={p.external ? '_blank' : undefined}
      rel={p.external ? 'noopener noreferrer' : undefined}
      className="vv-card vv-card-editorial">
      <div className="vv-card-edi-row">
        <span className="vv-card-edi-n" style={{ color: accent }}>— {p.n}</span>
        <Caps>{p.tag}</Caps>
        <span className="vv-card-edi-spacer" />
        <Caps>{p.year}</Caps>
      </div>
      <h3 className="vv-card-edi-title">
        {p.title} <span className="vv-card-edi-sub">— {p.sub}</span>
      </h3>
      <div className="vv-card-edi-art">
        <img src={p.img} alt={p.title} loading="lazy" />
      </div>
      <p className="vv-card-edi-blurb">{p.blurb}</p>
      <span className="vv-card-edi-cta" style={{ borderColor: accent }}>
        Case study <MIcon name="arrow_outward" size={14} />
      </span>
    </a>
  );
}

export function LatestProjects({ cardVariant, accent }) {
  return (
    <section className="vv-section" id="work">
      <div className="vv-container">
        <header className="vv-section-head">
          <h2 className="vv-section-title" style={{ fontSize: 26 }}>Latest projects</h2>
          <div className="vv-rule" />
        </header>
        <div className={`vv-cards ${cardVariant === 'editorial' ? 'is-editorial' : 'is-outlined'}`}>
          {PROJECTS.map((p, i) =>
            cardVariant === 'editorial' ? (
              <ProjectCardEditorial key={p.id} p={p} accent={accent} />
            ) : (
              <ProjectCardOutlined key={p.id} p={p} reverse={i % 2 === 1} />
            )
          )}
        </div>
        <div className="vv-section-foot">
          <a href="#projects" className="vv-btn vv-btn-ghost vv-btn-full">
            View all 12 projects <MIcon name="arrow_forward" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
