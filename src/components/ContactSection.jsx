import { Caps, MIcon } from './atoms.jsx';

export function ContactSection({ accent }) {
  return (
    <section className="vv-section" id="contact">
      <div className="vv-container">
        <div className="vv-contact">
          <div className="vv-contact-text">
            <Caps color="rgba(255,255,255,0.55)" style={{ display: 'block', marginBottom: 18 }}>
              Currently · Open for work
            </Caps>
            <h2 className="vv-contact-title">
              Let's build<br />something <span className="vv-italic" style={{ color: accent }}>that ships.</span>
            </h2>
            <p className="vv-contact-lede">
              From leading product teams and end-to-end digital products to design engineering and UX strategy. I bridge design, systems, and execution. Drop me a line to discuss future projects.
            </p>
          </div>
          <div className="vv-contact-list">
            <a href="mailto:venusdarmody@gmail.com" className="vv-contact-row">
              <div>
                <Caps color="rgba(255,255,255,0.45)">Email</Caps>
                <div className="vv-contact-v">Venus Valdivia</div>
              </div>
              <MIcon name="content_copy" size={18} style={{ opacity: 0.5 }} />
            </a>
            <a href="#" className="vv-contact-row">
              <div>
                <Caps color="rgba(255,255,255,0.45)">Calendar</Caps>
                <div className="vv-contact-v">Book a 20-min intro</div>
              </div>
              <MIcon name="arrow_outward" size={18} style={{ opacity: 0.5 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/venus-valdivia-darmody-6016791a/"
              className="vv-contact-row"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Caps color="rgba(255,255,255,0.45)">Elsewhere</Caps>
                <div className="vv-contact-v">LinkedIn</div>
              </div>
              <MIcon name="arrow_outward" size={18} style={{ opacity: 0.5 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
