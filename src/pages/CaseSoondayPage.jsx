import { Caps, MIcon } from '../components/atoms.jsx';

function CSHero() {
  const handleBack = (e) => {
    e.preventDefault();
    const prev = sessionStorage.getItem('vv-prev-hash');
    if (prev && prev !== '#case-soonday') {
      window.location.hash = prev || '';
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = 'projects';
    }
  };

  const prev = (typeof window !== 'undefined' && sessionStorage.getItem('vv-prev-hash')) || '';
  const backLabel = prev === '' || prev === '#' || prev === '#top'
    ? 'Back to home'
    : 'Back to all projects';

  return (
    <section className="vv-cs-hero">
      <div className="vv-container">
        <a href="#projects" onClick={handleBack} className="vv-cs-back">
          <MIcon name="arrow_back" size={16} />
          <span>{backLabel}</span>
        </a>

        <div style={{ marginBottom: 40 }}>
          <Caps style={{ letterSpacing: '0.2em', display: 'block', marginBottom: 20 }}>
            Case Study &middot; 2026
          </Caps>
          <h1 className="vv-cs-hero-title">SOONDAY</h1>
          <p className="vv-cs-hero-lede">
            Soonday combines marketplace strategy, behavioural UX, rapid prototyping,
            and modern AI-assisted workflows to create a new model for an efficient AI
            experience booking.
          </p>
        </div>

        <div style={{ width: '100%', aspectRatio: '21/9', overflow: 'hidden', background: 'var(--surface-2)' }}>
          <img
            alt="Soonday platform hero"
            src="/images/soonday-main.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.25)' }}
          />
        </div>
      </div>
    </section>
  );
}

function CSOpportunity({ accent }) {
  return (
    <section className="vv-cs-section">
      <div className="vv-container vv-cs-two-col">
        <div className="vv-cs-two-col-l">
          <h2 className="vv-cs-section-title">
            Opportunity Discovery &amp; Market Validation
          </h2>
        </div>
        <div className="vv-cs-two-col-r">
          <p className="vv-cs-body">
            The foundation of Soonday was built on rigorous market research and
            validation. We identified a fragmented landscape in the wellness and
            experience booking space, where consumers faced friction across discovery,
            booking, and fulfilment touchpoints.
          </p>
          <p className="vv-cs-body">
            By mapping the competitive landscape and conducting in-depth user
            interviews, we uncovered whitespace opportunities that informed a
            focused product strategy centred on trust, speed, and personalisation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--rule)',
              padding: 28,
            }}>
              <Caps style={{ display: 'block', marginBottom: 14 }}>This early stage involved:</Caps>
              <ul style={{
                margin: 0,
                paddingLeft: 20,
                fontFamily: 'var(--display)',
                fontSize: 15,
                lineHeight: 1.6,
                color: 'var(--ink-dim)',
              }}>
                <li>Consumer surveys across 3 verticals</li>
                <li>Provider interviews &amp; mystery shopping</li>
                <li>Pricing sensitivity analysis</li>
                <li>Platform audit &amp; gap mapping</li>
                <li>Demand signal testing via landing pages</li>
              </ul>
            </div>

            <div style={{
              background: '#ececec',
              borderLeft: `8px solid ${accent}`,
              padding: 28,
            }}>
              <Caps style={{ display: 'block', marginBottom: 14 }}>The core product hypothesis became:</Caps>
              <p style={{
                margin: 0,
                fontFamily: 'var(--display)',
                fontWeight: 700,
                fontSize: 'clamp(16px, 2cqi, 22px)',
                lineHeight: 1.3,
                color: 'var(--ink)',
              }}>
                "Consumers will pay a premium for instant, reliable access to vetted
                wellness providers — if the booking experience is frictionless."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const VERTICALS = [
  {
    label: 'Spa & Wellness',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyfSzFm9K1mZYcXhknp8HROwYPbAWC-TzSPmA0Ywwfxuc1rhx8mdHLVmZTgfZEB0J87AeNt83_Vwq7nULyI3O6-9q3t0lkVDDlbNWt6TkaNlNjbVET4ktpOAR8cprTN5tGJM88rBI5wgCOMn6XGge5Ix4WG-xxiu2dAeKngEZYG2AToqHNhVuEiofaO3lWkaYHHRN4GCmeMv9k87OHEnhNlGrea6dYlFRmyyBAj0DS8I6iVRLC33a0MDqlLM5KDwfRAYam7DX-YSY9',
  },
  {
    label: 'Fitness',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp6IwQL3uS0lp9ws-gtSxsF1rYnHPeGnGe1apkqoevoJG-uJ_eWDZFcBOz6O5bKJZreTR1bTWNsORvnNCElZQJYYwMDbwegzZRrmUEzGvA7FpqmFJgkGIWhDqeblZ9_3NKQ4jp96ojyrV9Cm2oSIb-PFKmjaH9tztAHpbAu8Uu6t5NEL5XVntQk_mLnMshgdvOwMh-TY8qRx0_Hz4lm4tgTLZRaeMOJaTidqN5NlOu6bs489rvb2nIW_ukrEhQyRwKdlZ8GPoz8kZq',
  },
  {
    label: 'Beauty',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsxG9nRsGDsj9l1BAzioorTeM7Nlp5JeZu9LOPVc__Z2X1cfvs5V-il9HSbquvHS33lU08pRpcfvDJWRG4IXXfSWkZ2MDL2JafVkTfQjWDhzXHcrs86-bbfCVQXK09f_iXWR4fWuWvyOkxJWCoAIRMLsXrr69oCxZ9ibzYCpsdyVZS2sUxd_XW80KBmdF0LGUVZ6VBqzlqxmc3DT8jYc8jUSlDmFcQVp_IqJp_x2aP9odemWZr2cRKQGYHeBosWGuEhoAV',
  },
  {
    label: 'Lifestyle',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL5Lj4ZC6r_JGoeBdvF5kDIOYTaVNxR62RlsB1NolQaDUTN9Wra-5u13jQIvJ9Jn3dKFcXQFcRL-ZG5vAedPv3JKXRckXP5l-9oOhlWfytbq7_-lbI7rvcl2M9F3_RFS_jSqi4V0-TsGfIVBTJrjDmWgbiSvTcG2lDQ2uKmkB3zxrchTTyyurGy4oZV9tkQealZ45FXX6p2PY1kUtvmtukKrX5mtAQolq0NGe_6ztrc_mH6IucSTgNCiDpO_hBMMPaYeEIe6Ibdh3A',
  },
];

function CSVerticals() {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
          <h2 className="vv-cs-section-title">Verticals of Excellence</h2>
          <Caps style={{ letterSpacing: '0.2em' }}>04 Strategic Pillars</Caps>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}>
          {VERTICALS.map((v) => (
            <div
              key={v.label}
              style={{
                position: 'relative',
                aspectRatio: '3/4',
                overflow: 'hidden',
                background: 'var(--surface-2)',
              }}
            >
              <img
                alt={v.label}
                src={v.src}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(1) contrast(1.25)',
                  transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'block',
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: 24,
              }}>
                <Caps style={{ color: '#fff', letterSpacing: '0.15em' }}>{v.label}</Caps>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSCompetitor() {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container">
        <h2 className="vv-cs-section-title" style={{ marginBottom: 16 }}>Competitor Analysis</h2>
        <p className="vv-cs-body" style={{ marginBottom: 48, maxWidth: '60ch' }}>
          A structured audit of existing platforms revealed consistent gaps in provider
          transparency, real-time availability, and post-booking engagement — all areas
          where Soonday could establish a meaningful advantage.
        </p>
        <div style={{ width: '100%', overflow: 'hidden', background: 'var(--surface-2)' }}>
          <img
            alt="Competitor landscape analysis"
            src="/images/soonday-competitors.png"
            style={{
              width: '100%',
              display: 'block',
              filter: 'grayscale(1) contrast(1.25)',
            }}
          />
        </div>
        <p className="vv-cs-caption">
          Competitive landscape mapping across booking platforms, pricing models, and UX maturity.
        </p>
      </div>
    </section>
  );
}

function CSValidation({ accent }) {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container vv-cs-two-col">
        <div className="vv-cs-two-col-l">
          <h2 className="vv-cs-section-title">Validation</h2>
        </div>
        <div className="vv-cs-two-col-r">
          <p className="vv-cs-body">
            Before committing to full product development, we ran a series of low-cost
            validation experiments to test our core assumptions around demand, supply,
            and willingness to pay. This de-risked the build phase significantly.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { n: '01', label: 'Demand Capture', desc: 'Landing page experiments with paid traffic to measure booking intent across verticals and price points.' },
              { n: '02', label: 'Inventory Mapping', desc: 'Provider outreach to assess supply-side appetite and willingness to onboard onto a new platform.' },
            ].map((item) => (
              <div
                key={item.n}
                style={{
                  display: 'flex',
                  gap: 24,
                  padding: '28px 32px',
                  background: 'var(--surface)',
                  border: '1px solid var(--rule)',
                }}
              >
                <div style={{
                  fontFamily: 'var(--display)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 4cqi, 48px)',
                  lineHeight: 1,
                  color: accent,
                  flexShrink: 0,
                  minWidth: 56,
                }}>
                  {item.n}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 700,
                    fontSize: 18,
                    color: 'var(--ink)',
                    marginBottom: 8,
                  }}>
                    {item.label}
                  </div>
                  <p className="vv-cs-body" style={{ fontSize: 15 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: '#ececec',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 180,
            border: '1px solid var(--rule)',
          }}>
            <div style={{
              textAlign: 'center',
              fontFamily: 'var(--display)',
              color: 'var(--muted)',
              fontSize: 13,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              Validation results &amp; signal data
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CSUserFlow() {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container">
        <h2 className="vv-cs-section-title" style={{ marginBottom: 48 }}>User Flow Design</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <Caps style={{ display: 'block', marginBottom: 20 }}>Consumer journey</Caps>
            <ul style={{
              margin: 0,
              paddingLeft: 20,
              fontFamily: 'var(--display)',
              fontSize: 16,
              lineHeight: 1.7,
              color: 'var(--ink-dim)',
            }}>
              <li>Awareness &rarr; discovery via social &amp; search</li>
              <li>Browse by vertical, location, or availability</li>
              <li>Provider profile &amp; real-time availability check</li>
              <li>Single-screen booking &amp; payment</li>
              <li>Confirmation, reminders &amp; post-session review</li>
              <li>Loyalty loop &amp; rebooking nudge</li>
            </ul>
          </div>
          <div>
            <Caps style={{ display: 'block', marginBottom: 20 }}>Provider journey</Caps>
            <ul style={{
              margin: 0,
              paddingLeft: 20,
              fontFamily: 'var(--display)',
              fontSize: 16,
              lineHeight: 1.7,
              color: 'var(--ink-dim)',
            }}>
              <li>Onboarding &amp; profile creation</li>
              <li>Calendar sync &amp; availability management</li>
              <li>Service listing &amp; pricing configuration</li>
              <li>Booking receipt &amp; client communication</li>
              <li>Payout dashboard &amp; performance insights</li>
              <li>Review management &amp; reputation building</li>
            </ul>
          </div>
        </div>

        <p className="vv-cs-body" style={{ maxWidth: '70ch' }}>
          Both journeys were stress-tested against edge cases — last-minute cancellations,
          no-show handling, and multi-provider coordination — to ensure the system remained
          resilient and fair for all stakeholders.
        </p>
      </div>
    </section>
  );
}

function CSFlowArchitecture() {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)', paddingTop: 0 }}>
      <div className="vv-container">
        <div style={{ marginBottom: 48 }}>
          <div style={{ width: '100%', overflow: 'hidden', background: 'var(--surface-2)' }}>
            <img
              alt="User flow architecture diagram"
              src="/images/soonday-Onboarding.png"
              style={{
                width: '100%',
                display: 'block',
                filter: 'grayscale(1) contrast(1.25)',
              }}
            />
          </div>
          <p className="vv-cs-caption">
            End-to-end user flow architecture mapping both consumer and provider journeys.
          </p>
        </div>

        <div>
          <div style={{ width: '100%', overflow: 'hidden', background: 'var(--surface-2)' }}>
            <img
              alt="Wireframe explorations"
              src="/images/soonday-wireframes.png"
              style={{
                width: '100%',
                display: 'block',
                filter: 'grayscale(1) contrast(1.25)',
              }}
            />
          </div>
          <p className="vv-cs-caption">
            Low-fidelity wireframe explorations for key screens across the consumer booking flow.
          </p>
        </div>
      </div>
    </section>
  );
}

function CSPrototype({ accent }) {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container vv-cs-two-col">
        <div className="vv-cs-two-col-l">
          <div style={{ width: '100%', overflow: 'hidden', background: 'var(--surface-2)', aspectRatio: '3/4' }}>
            <img
              alt="Rapid prototype screens"
              src="/images/soonday-vibe.png"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(1) contrast(1.25)',
                display: 'block',
              }}
            />
          </div>
        </div>
        <div className="vv-cs-two-col-r">
          <h2 className="vv-cs-section-title">Rapid Prototyping &amp; Vibe Coding</h2>

          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--rule)',
            padding: '28px 32px',
          }}>
            <Caps style={{ display: 'block', marginBottom: 12 }}>AI-Assisted Workflow</Caps>
            <p className="vv-cs-body" style={{ fontSize: 15 }}>
              Using AI code generation tools alongside Figma prototyping, we compressed
              the design-to-testable-prototype cycle from weeks to days. This allowed
              us to put real, interactive experiences in front of users at every stage
              of validation.
            </p>
          </div>

          <div style={{
            background: '#ececec',
            borderLeft: `8px solid ${accent}`,
            padding: '28px 32px',
          }}>
            <Caps style={{ display: 'block', marginBottom: 12 }}>Vibe Coding Principle</Caps>
            <p className="vv-cs-body" style={{ fontSize: 15 }}>
              Rather than specifying every pixel, we defined the interaction feel —
              the &ldquo;vibe&rdquo; — and iterated rapidly with AI-generated code as
              a starting point. The result was a higher-fidelity prototype in less time,
              enabling richer feedback sessions and faster pivots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CSDesignSystems() {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container">
        <h2 className="vv-cs-section-title" style={{ marginBottom: 16 }}>Design Systems</h2>
        <p className="vv-cs-body" style={{ marginBottom: 48, maxWidth: '60ch' }}>
          A minimal, scalable design system was established to ensure consistency
          across the consumer and provider interfaces — covering typography, colour,
          spacing, and component patterns that could evolve as the product grew.
        </p>
        <div style={{ width: '100%', overflow: 'hidden', background: 'var(--surface-2)' }}>
          <img
            alt="Soonday design system"
            src="/images/soonday-outcome.png"
            style={{
              width: '100%',
              display: 'block',
              filter: 'grayscale(1) contrast(1.25)',
            }}
          />
        </div>
        <p className="vv-cs-caption">
          Core design system tokens and component library for the Soonday platform.
        </p>
      </div>
    </section>
  );
}

function CSOutcome() {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container">
        <div style={{ maxWidth: '72ch', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="vv-cs-display">Outcome</h2>
          <p className="vv-cs-body" style={{ fontSize: 'clamp(18px, 2.2cqi, 24px)', lineHeight: 1.5, color: 'var(--ink-dim)' }}>
            Soonday demonstrated that a real-time inventory model — where provider
            availability is surfaced dynamically and bookings are confirmed instantly —
            can meaningfully reduce consumer drop-off and increase provider utilisation.
            The combination of behavioural UX principles and AI-assisted development
            produced a validated, high-fidelity product ready for seed-stage investment
            and early market entry.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CaseSoondayPage({ accent }) {
  return (
    <div data-screen-label="Venus Valdivia · Soonday case study">
      <CSHero />
      <CSOpportunity accent={accent} />
      <CSVerticals />
      <CSCompetitor />
      <CSValidation accent={accent} />
      <CSUserFlow />
      <CSFlowArchitecture />
      <CSPrototype accent={accent} />
      <CSDesignSystems />
      <CSOutcome />
    </div>
  );
}
