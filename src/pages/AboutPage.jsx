import { useState } from 'react';
import { Caps, MIcon } from '../components/atoms.jsx';

function AboutHero({ accent }) {
  return (
    <section className="vv-about-hero" id="top">
      <div className="vv-container vv-about-hero-grid">
        <div className="vv-about-hero-text">
          <span className="vv-about-eyebrow">
            <span className="vv-dot-static" style={{ background: accent }} />
            <Caps>Product design &amp; strategy</Caps>
          </span>
          <h2 className="vv-about-display">
            Venus <span className="vv-italic">Darmody.</span>
          </h2>
          <p className="vv-about-lede">
            I specialise in leading product design strategy and generative AI workflows
            and integration.
          </p>
        </div>

        <div className="vv-about-portrait">
          <img
            alt="Venus Valdivia portrait"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAybvsrtSwrKkhDr12W5NAFxGlRNt32IN8lue-Pu0K6ipYCZBWinMtYXuJiMWmnz1G5yiw77zB1jU6-MctIcGiybP1HSLUVTB5CJDgLJozdbm31zUmrzGvboH8nG4tPy8ZAaETjCjaIQDLCa8wZ4Qxz7KKttncyzhttjSU3UOs-lekzrCHnhldqFh7VPmTJf2u1AeupmzHgjwOu07weCffjbe5yw6Z_Uk6wfTV5d0mSk7qmgmgNWlSonsUXgzDU3nWcn6xavI40kWs-"
          />
        </div>
      </div>
    </section>
  );
}

function AboutBio({ accent }) {
  return (
    <section className="vv-section vv-about-bio">
      <div className="vv-container vv-about-bio-grid">
        <div className="vv-about-bio-l">
          <h2 className="vv-about-h2">About me</h2>
        </div>
        <div className="vv-about-bio-r">
          <p className="vv-about-body">
            Beyond traditional design, I have an entrepreneurial core. I understand the
            realities of product–market fit, technical constraints, and market velocity.
            With over 12 years of experience bridging the gap between complex engineering
            infrastructure and intuitive user experiences, my approach pairs human-centred
            design with modern technical capabilities — AI automation to scale product
            metrics and build high-performing design operations.
          </p>
          <p className="vv-about-body">
            Whether leading internal teams or advising venture-backed startups, my focus
            is the precise quality of digital interfaces and the responsible, seamless
            integration of AI into the user lifecycle. I believe the future of software
            belongs to designers who can command AI infrastructure to build high-trust,
            high-retention products that drive measurable business growth.
          </p>
          <div className="vv-about-bio-ctas">
            <a href="/images/venus%20UX%202026.pdf" download="venus UX 2026.pdf" className="vv-btn vv-btn-solid" style={{ background: accent }}>
              Download CV <MIcon name="download" size={14} style={{ color: '#fff' }} />
            </a>
            <a href="#contact" className="vv-btn vv-btn-ghost">
              Email me <MIcon name="mail" size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    icon: 'diversity_3',
    title: 'Leadership',
    body: 'Building and nurturing high-performance design teams that prioritise empathy, craft, and strategic business impact.',
  },
  {
    icon: 'model_training',
    title: 'AI & Product',
    body: 'Integrating large language models and generative systems into intuitive product ecosystems that feel human-centric.',
  },
  {
    icon: 'search_insights',
    title: 'Research',
    body: 'Industry-led exploration using traditional research tools, behavioural studies, and synthesis at scale.',
  },
];

function AboutPillars({ accent }) {
  return (
    <section className="vv-about-pillars-wrap">
      <div className="vv-container">
        <div className="vv-about-pillars">
          {PILLARS.map((p, i) => (
            <div className="vv-about-pillar" key={p.title}>
              <div className="vv-about-pillar-top">
                <span className="vv-about-pillar-n" style={{ color: accent }}>
                  — 0{i + 1}
                </span>
                <span className="vv-about-pillar-icon">
                  <MIcon name={p.icon} size={28} weight={300} />
                </span>
              </div>
              <h3 className="vv-about-pillar-title">{p.title}</h3>
              <p className="vv-about-pillar-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TOOLS = [
  { icon: 'draw', name: 'Figma' },
  { icon: 'code', name: 'React / Tailwind' },
  { icon: 'memory', name: 'Vercel' },
  { icon: 'auto_awesome', name: 'Claude code' },
  { icon: 'database', name: 'Notion' },
  { icon: 'terminal', name: 'VS Code' },
];

function AboutTools() {
  return (
    <section className="vv-section vv-about-tools">
      <div className="vv-container">
        <div className="vv-about-tools-head">
          <Caps>Ecosystem</Caps>
          <h2 className="vv-about-h2">Technical &amp; tools</h2>
        </div>
        <div className="vv-about-tools-grid">
          {TOOLS.map((t) => (
            <div className="vv-about-tool" key={t.name}>
              <MIcon name={t.icon} size={26} weight={300} />
              <Caps>{t.name}</Caps>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutNewsletter({ accent }) {
  const [email, setEmail] = useState('');
  return (
    <section className="vv-about-newsletter">
      <div className="vv-container vv-about-newsletter-inner">
        <h2 className="vv-about-newsletter-title">
          Let's build  <span className="vv-italic">something</span> together.
        </h2>
        <form
          className="vv-about-newsletter-form"
          onSubmit={(e) => { e.preventDefault(); }}
        >
          <label className="vv-about-newsletter-field">
            <Caps>Email address</Caps>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="vv-btn vv-btn-solid"
            style={{ background: accent }}
          >
            Collaborate <MIcon name="arrow_outward" size={14} />
          </button>
        </form>
      </div>
    </section>
  );
}

export function AboutPage({ accent }) {
  return (
    <div data-screen-label="Venus Valdivia · about">
      <AboutHero accent={accent} />
      <AboutBio accent={accent} />
      <AboutPillars accent={accent} />
      <AboutTools />
      <AboutNewsletter accent={accent} />
    </div>
  );
}
