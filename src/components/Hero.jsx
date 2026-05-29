import { Caps, MIcon } from './atoms.jsx';

export function HeroEditorial({ accent }) {
  return (
    <section className="vv-hero vv-hero-editorial" id="top">
      <div className="vv-container">
        
        <div className="vv-hero-hi">Hi, I'm Venus.</div>
        <h1 className="vv-hero-title">
          Design Lead <span className="vv-amp">&amp;</span> Product Strategist
        </h1>
        <p className="vv-hero-lede">
          I lead design on high-retention AI products and build the internal workflows that drive business growth.
        </p>
        <div className="vv-hero-ctas">
          <a href="#contact" className="vv-btn vv-btn-solid" style={{ background: accent, borderStyle: "solid", borderWidth: "1px", borderColor: "rgb(24, 23, 23)", color: "#ffffff" }}>
            Get in touch <MIcon name="arrow_outward" size={16} />
          </a>
          <a href="#work" className="vv-btn vv-btn-ghost">
            See projects <MIcon name="expand_more" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function HeroMinimal({ accent }) {
  return (
    <section className="vv-hero vv-hero-minimal" id="top">
      <div className="vv-container vv-hero-minimal-inner">
        <div className="vv-monogram">VV</div>
        <Caps style={{ display: 'block', marginBottom: 12 }}>Independent · London</Caps>
        <h1 className="vv-hero-title vv-hero-title-minimal">
          Designing the<br />
          <span className="vv-italic">shape of </span>
          AI products.
        </h1>
        <p className="vv-hero-lede" style={{ maxWidth: 540, margin: '24px auto 28px' }}>
          Design Lead &amp; Product Strategist. 11 years across enterprise, media, and growth.
        </p>
        <a href="#about" className="vv-btn vv-btn-solid" style={{ background: accent }}>
          Read about Venus <MIcon name="arrow_outward" size={16} />
        </a>
      </div>
    </section>
  );
}

export function HeroImage({ accent }) {
  return (
    <section className="vv-hero vv-hero-image" id="top">
      <div className="vv-container">
        <div className="vv-hero-image-grid">
          <div className="vv-hero-image-art">
            <img src="/images/venus_darmody.png" alt="Venus Valdivia portrait" loading="lazy" decoding="async" />
            <div className="vv-hero-image-overlay" />
            <div className="vv-hero-image-meta-top">
              <Caps color="rgba(255,255,255,0.7)">Portfolio · 2014—2026</Caps>
            </div>
            <div className="vv-hero-image-meta-bottom">
              <div className="vv-hero-hi" style={{ color: 'rgba(255,255,255,0.75)' }}>Hi, I'm Venus.</div>
              <h1 className="vv-hero-title" style={{ color: '#fff' }}>
                Design Lead &amp; Strategist
              </h1>
            </div>
            <div className="vv-hero-image-bubble" style={{ background: accent }}>
              <MIcon name="arrow_outward" size={22} />
            </div>
          </div>
          <div className="vv-hero-image-text">
            <p className="vv-hero-lede" style={{ marginTop: 0 }}>
              I lead design on high-retention AI products and build the internal workflows that drive business growth.
            </p>
            <div className="vv-hero-ctas">
              <a href="#contact" className="vv-btn vv-btn-solid" style={{ background: accent }}>
                Get in touch <MIcon name="arrow_outward" size={16} />
              </a>
              <a href="#work" className="vv-btn vv-btn-ghost">
                See projects <MIcon name="expand_more" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
