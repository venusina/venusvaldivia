import { MIcon } from './atoms.jsx';

export function Header({ accent, onOpenMenu }) {
  return (
    <header className="vv-header">
      <div className="vv-container vv-header-inner">
        <a href="#top" className="vv-logo">
          <span className="vv-logo-mark" style={{ background: accent }} />
          <span>Venus Valdivia</span>
        </a>
        <nav className="vv-nav-desktop">
          <a href="#about">About</a>
          <a href="#projects">All projects</a>
        </nav>
        <div className="vv-header-cta">
          <a href="#contact" className="vv-btn vv-btn-solid" style={{ background: '#000000', color: '#ffffff' }}>
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
