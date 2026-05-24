import { Caps, MIcon } from './atoms.jsx';

export function MobileMenu({ open, onClose, accent }) {
  return (
    <>
      <div className={`vv-scrim ${open ? 'is-open' : ''}`} onClick={onClose} />
      <aside className={`vv-drawer ${open ? 'is-open' : ''}`}>
        <div className="vv-drawer-head">
          <span className="vv-logo">
            <span className="vv-logo-mark" style={{ background: accent }} />
            <span>Venus Valdivia</span>
          </span>
          <button className="vv-burger" onClick={onClose} aria-label="Close">
            <MIcon name="close" size={22} />
          </button>
        </div>
        <nav className="vv-drawer-nav">
          {[
            { l: 'Home', s: 'Currently here', h: '#top' },
            { l: 'Selected work', s: '12 case studies', h: '#projects' },
            { l: 'About Venus', s: 'CV · process · ethos', h: '#about' },
            { l: 'Side projects', s: '7 things I built', h: '#vibe' },
            { l: 'Contact', s: 'Open for Q3', h: '#contact' },
          ].map((m, i) => (
            <a key={i} href={m.h} onClick={onClose} className="vv-drawer-row">
              <div>
                <div className="vv-drawer-row-l">{m.l}</div>
                <div className="vv-drawer-row-s">{m.s}</div>
              </div>
              <MIcon name="arrow_outward" size={20} />
            </a>
          ))}
        </nav>
        <div className="vv-drawer-foot">
          <Caps style={{ display: 'block', marginBottom: 10 }}>Currently</Caps>
          <div className="vv-status-card">
            <span className="vv-dot vv-dot-glow" />
            <div>
              Taking 1–2 projects from August. <br />
              <span style={{ color: 'var(--muted)' }}>Day rate · case-by-case</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
