import { Caps, MIcon } from './atoms.jsx';

export function ContactSection({ accent }) {
  return (
    <section className="vv-section" id="contact">
      <div className="vv-container">
        <div className="vv-contact">
          <div className="vv-contact-text">
            <Caps color="rgba(255,255,255,0.55)" style={{ display: 'block', marginBottom: 18 }}>
              Available
            </Caps>
            <h2 className="vv-contact-title">
              Let's build<br />something
            </h2>
            <p className="vv-contact-lede">
              I take 1–2 projects a quarter — strategy, design lead, or fractional design partner. Drop a line and I'll send process notes + a calendar.
            </p>
          </div>
          <div className="vv-contact-list">
            <a href="mailto:venusdarmody@gmail.com" className="vv-contact-row">
              <div>
                <Caps color="rgba(255,255,255,0.45)">Email</Caps>
                <div className="vv-contact-v">email me</div>
              </div>
              <MIcon name="content_copy" size={18} style={{ opacity: 0.5 }} />
            </a>
            <a href="https://www.linkedin.com/in/venus-darmody-6016791a" target="_blank" rel="noreferrer noopener" className="vv-contact-row">
              <div>
                <Caps color="rgba(255,255,255,0.45)">Socials</Caps>
                <div className="vv-contact-v">LinkedIn</div>
              </div>
              <MIcon name="arrow_outward" size={18} style={{ opacity: 0.5 }} />
            </a>
            <a href="/images/venus%20UX%202026.pdf" download="venus UX 2026.pdf" className="vv-contact-row">
              <div>
                <Caps color="rgba(255,255,255,0.45)">View CV</Caps>
                <div className="vv-contact-v">Download CV </div>
              </div>
              <MIcon name="arrow_outward" size={18} style={{ opacity: 0.5 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
