import { Caps, MIcon } from './atoms.jsx';

export function ContactSection({ accent }) {
  return (
    <section className="vv-section" id="contact">
      <div className="vv-container">
        <div className="vv-contact">
          <div className="vv-contact-text">
            <Caps color="rgba(255,255,255,0.55)" style={{ display: 'block', marginBottom: 18 }}>
              Currently · Open for Q3 work
            </Caps>
            <h2 className="vv-contact-title">
              Let's build<br />something
            </h2>
            <p className="vv-contact-lede">
              I take 1–2 projects a quarter — strategy, design lead, or fractional design partner. Drop a line and I'll send process notes + a calendar.
            </p>
          </div>
          <div className="vv-contact-list">
            <a href="mailto:venus@valdivia.co" className="vv-contact-row">
              <div>
                <Caps color="rgba(255,255,255,0.45)">Email</Caps>
                <div className="vv-contact-v">venus@valdivia.co</div>
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
            <a href="#" className="vv-contact-row">
              <div>
                <Caps color="rgba(255,255,255,0.45)">Elsewhere</Caps>
                <div className="vv-contact-v">LinkedIn · Read.cv · Are.na</div>
              </div>
              <MIcon name="arrow_outward" size={18} style={{ opacity: 0.5 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
