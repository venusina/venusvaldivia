import { MIcon } from './atoms.jsx';

export function Header({ accent, onOpenMenu }) {
  return (
    <header className="vv-header">
      <div className="vv-container vv-header-inner">
        <a href="#top" className="vv-logo">
<span>Venus Valdivia</span>
        </a>
        <nav className="vv-nav-desktop">
          <a href="#about">About</a>
          <a href="#projects">All projects</a>
        </nav>
        <div className="vv-header-cta">
          <span className="vv-status">
            <span className="vv-dot" />
            <span className="vv-status-text">Available</span>
          </span>
          <a href="#contact" className="vv-btn vv-btn-solid" style={{ background: accent }}>
            <span>Get in touch</span>
            <MIcon name="arrow_outward" size={14} />
          </a>
          <button className="vv-burger" onClick={onOpenMenu} aria-label="Menu">
            <MIcon name="menu" size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
