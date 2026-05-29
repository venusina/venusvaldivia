import { Caps, MIcon } from './atoms.jsx';

const VIBE_BIG = {
  title: 'Soonday', sub: 'Founder · AI-First Venture', year: '2024',
  blurb: 'Building an AI-first venture from concept to shipped beta — design, code, and growth.',
  img: '/images/soonday-outcome.png'
};

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

export function VibeSection({ accent }) {
  return (
    <section className="vv-section" id="vibe">
      <div className="vv-container">
        <SectionHeader eyebrow="Side quests · Built solo" title="UX Engineering & AI Workflows" />
        <div className="vv-bento">
          <a href="#case-soonday" className="vv-bento-hero">
            <img src={VIBE_BIG.img} alt={VIBE_BIG.title} loading="lazy" decoding="async" />
            <div className="vv-bento-hero-overlay" />
            <div className="vv-bento-hero-tag">
              <span className="vv-dot vv-dot-live" />
              <Caps color="rgba(255,255,255,0.85)">Live · soonday.co</Caps>
            </div>
            <div className="vv-bento-hero-text">
              <Caps color="rgba(255,255,255,0.7)" style={{ marginBottom: 10, display: 'block' }}>{VIBE_BIG.year} · AI-Assisted Eng</Caps>
              <div className="vv-bento-hero-title">{VIBE_BIG.title}</div>
              <div className="vv-bento-hero-sub">{VIBE_BIG.sub}</div>
            </div>
          </a>
          <div className="vv-bento-side">
            <a href="#case-ai-engineering" className="vv-bento-card">
              <div>
                <Caps>2025</Caps>
                <div className="vv-bento-card-title">UX Engineering & AI</div>
                <div className="vv-bento-card-blurb">
                  Rethinking how AI tools integrate into a precision design-to-code workflow.
                </div>
              </div>
              <div className="vv-bento-card-cta">
                Read <MIcon name="arrow_outward" size={14} />
              </div>
            </a>
            <a href="#" className="vv-bento-cta-card">
              <div className="vv-bento-cta-title">View all<br />side projects</div>
              <div className="vv-bento-cta-foot">
                <Caps color="rgba(255,255,255,0.6)">07 projects</Caps>
                <MIcon name="arrow_forward" size={22} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
