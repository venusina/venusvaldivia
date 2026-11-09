import { MIcon } from '../components/atoms.jsx';

const C = {
  blue: '#2459d3',
  dark: '#142033',
  mid: '#5d6878',
  grayBg: '#f7f8fa',
  cardBg: '#eef2f8',
  approachBg: '#8ea5ea',
  border: '#dce2ea',
  navy: '#0d2041',
  navyMid: '#b9c7dd',
};

function BackButton() {
  const handleBack = (e) => {
    e.preventDefault();
    const prev = sessionStorage.getItem('vv-prev-hash');
    if (prev && prev !== '#case-tradeaccept') {
      window.location.hash = prev || '';
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = 'projects';
    }
  };

  const prev = (typeof window !== 'undefined' && sessionStorage.getItem('vv-prev-hash')) || '';
  const backLabel = prev === '' || prev === '#' || prev === '#top' ? 'Back to home' : 'Back to all projects';

  return (
    <a href="#projects" onClick={handleBack} className="vv-cs-back" style={{ color: C.blue }}>
      <MIcon name="arrow_back" size={16} />
      <span>{backLabel}</span>
    </a>
  );
}

function Label({ children, style }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.32px', textTransform: 'uppercase', color: C.blue, marginBottom: 18, ...style }}>
      {children}
    </p>
  );
}

function CSHero() {
  return (
    <section style={{ background: '#fff', paddingBottom: 0 }}>
      <div className="vv-container" style={{ paddingTop: 40 }}>
        <BackButton />

        <div style={{ marginTop: 48, marginBottom: 48 }}>
          <Label>Case Study &middot; AXS &middot; 2023</Label>
          <h1 className="vv-cs-hero-title" style={{ color: C.dark, maxWidth: 720, marginBottom: 24 }}>
            Less friction. More clarity. TradeAccept.
          </h1>
          <p className="vv-cs-hero-lede" style={{ color: C.mid, maxWidth: 580 }}>
            Redesigning a complex financial trade entry and approval workflow — reducing confusion, surfacing critical trade states, and supporting confident decision-making at scale.
          </p>
        </div>

        <div style={{ width: '100%', borderRadius: 4, overflow: 'hidden', background: C.cardBg }}>
          <img
            alt="TradeAccept dashboard"
            src="/images/tradeaccept/ta-hero.png"
            style={{ width: '100%', display: 'block' }}
          />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px 48px', padding: '40px 0', borderTop: `1px solid ${C.border}`, marginTop: 0 }}>
          {[
            { label: 'Role', value: 'Product Design Lead' },
            { label: 'Company', value: 'AXS' },
            { label: 'Duration', value: '12 months' },
            { label: 'Team', value: 'Team of 11' },
            { label: 'Focus', value: 'Dashboard · Trade entry' },
            { label: 'Type', value: 'Evidence-led iteration' },
          ].map(item => (
            <div key={item.label}>
              <p style={{ fontSize: 11, letterSpacing: '1.3px', color: C.mid, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase' }}>{item.label}</p>
              <p style={{ fontSize: 16, color: C.dark }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSChallenge() {
  return (
    <section style={{ background: C.grayBg, padding: '80px 0' }}>
      <div className="vv-container">
        <div className="vv-cs-two-col">
          <div className="vv-cs-two-col-l">
            <Label>01 / The Challenge</Label>
            <h2 className="vv-cs-section-title" style={{ color: C.dark }}>
              Complex trades. Unnecessary complexity.
            </h2>
            <p style={{ fontSize: 16, color: C.mid, lineHeight: 1.65 }}>
              The existing ASX TradeAccept interface buried critical information under excessive fields and unclear navigation — leaving traders unsure what needed their attention.
            </p>
          </div>
          <div className="vv-cs-two-col-r" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { tag: 'Ambiguous dates', desc: 'Agreement date and trade date were visually identical with no contextual help to distinguish them.' },
              { tag: 'Invisible trade states', desc: 'Submitted, rejected, cancelled and withdrawn trades looked the same at a glance.' },
              { tag: 'No audit trail', desc: 'Approval history was buried — users had no visibility into what changed and when.' },
            ].map(item => (
              <div key={item.tag} style={{ background: '#fff', border: `1px solid ${C.border}`, padding: 24, borderRadius: 4 }}>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', color: C.blue, marginBottom: 10 }}>{item.tag}</p>
                <p style={{ fontSize: 15, color: C.mid, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 48, borderRadius: 4, overflow: 'hidden', background: C.cardBg }}>
          <img
            alt="Heuristic evaluation of the existing ASX TradeAccept interface"
            src="/images/tradeaccept/ta-challenge.png"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}

function CSApproach() {
  return (
    <section style={{ background: C.approachBg, padding: '80px 0' }}>
      <div className="vv-container">
        <div className="vv-cs-two-col">
          <div className="vv-cs-two-col-l">
            <Label style={{ color: C.navy }}>02 / Approach</Label>
            <h2 className="vv-cs-section-title" style={{ color: C.navy }}>
              Critique, not a handoff.
            </h2>
            <p style={{ fontSize: 16, color: C.navy, lineHeight: 1.65, opacity: 0.8 }}>
              Before designing anything new, heuristic evaluations and expert reviews mapped every usability failure in the existing system. The brief was validated against evidence, not assumption.
            </p>
          </div>
          <div className="vv-cs-two-col-r" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { step: '01', title: 'Heuristic evaluation', desc: 'Assessed the existing TradeAccept interface against Nielsen\'s 10 usability heuristics to identify systemic failures.' },
              { step: '02', title: 'Stakeholder interviews', desc: 'Mapped pain points with internal traders and approvers to understand the daily cost of confusion.' },
              { step: '03', title: 'Design iteration', desc: 'Low-fi flows tested against real user tasks before committing to high-fidelity direction.' },
              { step: '04', title: 'Usability testing', desc: 'Prototype → remote sessions → refined UI. Repeated until key confusion points were resolved.' },
            ].map(item => (
              <div key={item.step} style={{ paddingTop: 20, borderTop: `1px solid rgba(255,255,255,0.3)` }}>
                <p style={{ fontSize: 11, letterSpacing: '1.3px', color: C.navy, fontWeight: 600, marginBottom: 10, opacity: 0.7 }}>{item.step}</p>
                <p style={{ fontSize: 17, fontWeight: 500, color: C.navy, marginBottom: 8 }}>{item.title}</p>
                <p style={{ fontSize: 15, color: C.navy, lineHeight: 1.65, opacity: 0.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
            {['/images/tradeaccept/ta-heuristic-1.png', '/images/tradeaccept/ta-heuristic-2.png', '/images/tradeaccept/ta-heuristic-3.png'].map((src, i) => (
              <div key={i} style={{ borderRadius: 4, overflow: 'hidden', background: 'rgba(255,255,255,0.3)' }}>
                <img alt={`Heuristic evaluation finding ${i + 1}`} src={src} style={{ width: '100%', display: 'block' }} />
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.32px', textTransform: 'uppercase', color: C.navy, opacity: 0.6, textAlign: 'right' }}>
            Heuristic evaluation · source interface
          </p>
        </div>

        <div style={{ marginTop: 24, borderRadius: 4, overflow: 'hidden' }}>
          <img
            alt="Approach comparison — before and after interface critique"
            src="/images/tradeaccept/ta-approach-compare.png"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}

function CSDashboard() {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="vv-container">
        <div className="vv-cs-two-col" style={{ marginBottom: 48 }}>
          <div className="vv-cs-two-col-l">
            <Label>02 / Dashboard</Label>
            <h2 className="vv-cs-section-title" style={{ color: C.dark }}>
              From a landing page to a working view.
            </h2>
          </div>
          <div className="vv-cs-two-col-r">
            <p style={{ fontSize: 16, color: C.mid, lineHeight: 1.65 }}>
              The dashboard was rebuilt from a static list into a triage surface — surfacing pending approvals, real-time trade states, and quick-action paths without additional navigation.
            </p>
          </div>
        </div>

        <div style={{ borderRadius: 4, overflow: 'hidden', background: C.cardBg }}>
          <img
            alt="Redesigned TradeAccept dashboard"
            src="/images/tradeaccept/ta-dashboard.png"
            style={{ width: '100%', display: 'block' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, marginTop: 48 }}>
          {[
            { tag: 'Priority surfacing', desc: 'Trades pending approval are surfaced at the top — not buried in a flat list.' },
            { tag: 'Status at a glance', desc: 'Visual differentiation between pending, approved, in-review and draft states.' },
            { tag: 'Quick action', desc: 'Approve or create a new trade from the dashboard without deep navigation.' },
          ].map(item => (
            <div key={item.tag} style={{ paddingTop: 20, borderTop: `2px solid ${C.blue}` }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', color: C.blue, marginBottom: 10 }}>{item.tag}</p>
              <p style={{ fontSize: 15, color: C.mid, lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSTradeEntry() {
  return (
    <section style={{ background: C.grayBg, padding: '80px 0' }}>
      <div className="vv-container">
        <div className="vv-cs-two-col" style={{ marginBottom: 32 }}>
          <div className="vv-cs-two-col-l">
            <Label>03 / Trade Entry</Label>
            <h2 className="vv-cs-section-title" style={{ color: C.dark }}>
              Give complex entries room to make sense.
            </h2>
          </div>
          <div className="vv-cs-two-col-r">
            <p style={{ fontSize: 16, color: C.mid, lineHeight: 1.65 }}>
              The form evolved from a modal into full-page and compact multi-leg layouts. Essential trade details lead; comments and attachments sit outside the core entry task.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center', padding: '18px 0', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, marginBottom: 32, flexWrap: 'wrap' }}>
          <span style={{ flex: 1, fontSize: 14, color: C.mid, minWidth: 120 }}>Modal entry</span>
          <span style={{ fontSize: 16, color: C.blue }}>→</span>
          <span style={{ flex: 1, fontSize: 14, color: C.dark, minWidth: 120 }}>Full-page form</span>
          <span style={{ fontSize: 16, color: C.blue }}>→</span>
          <span style={{ flex: 1, fontSize: 14, color: C.blue, fontWeight: 600, minWidth: 120 }}>Compact, multi-leg workspace</span>
        </div>

        <div style={{ borderRadius: 4, overflow: 'hidden', background: C.cardBg }}>
          <img
            alt="Trade entry prototype — compact multi-leg workspace"
            src="/images/tradeaccept/ta-trade-entry.png"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
        <p style={{ fontSize: 12, color: C.mid, marginTop: 10 }}>
          Seller draft trade · reconstructed from the source with ASX product components &nbsp;&nbsp;
          <span style={{ fontWeight: 600, color: C.blue, letterSpacing: '1px', textTransform: 'uppercase', fontSize: 11 }}>Source design iteration</span>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginTop: 48 }}>
          {[
            { tag: 'Structure', title: 'A shared view of every leg', desc: 'Compact rows allow users to review and edit several legs within one trade context.' },
            { tag: 'Progressive detail', title: 'Keep supporting content optional', desc: 'Comments, internal attachments and notes are available without dominating the form.' },
            { tag: 'Control', title: 'Draft, review, then submit', desc: 'Separate save and submit actions support draft handling and a deliberate final step.' },
          ].map(item => (
            <div key={item.tag} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.32px', textTransform: 'uppercase', color: C.blue }}>{item.tag}</p>
              <p style={{ fontSize: 20, fontWeight: 500, color: C.dark, lineHeight: 1.3 }}>{item.title}</p>
              <p style={{ fontSize: 16, color: C.mid, lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSUsability() {
  const findings = [
    {
      tag: 'Working',
      title: 'Legs and price guidance',
      observed: 'Legs were easy to understand. The price range helped participants avoid entering an incorrect price.',
      response: 'Retain the leg structure and contextual price range.',
    },
    {
      tag: 'Friction',
      title: 'Two dates, unclear meaning',
      observed: 'Agreement date and trade date were confusing; participants also wanted greater audit visibility.',
      response: 'Add explicit date definitions and trade-level audit details.',
    },
    {
      tag: 'Low priority',
      title: 'Internal reference',
      observed: '1 participant requested it, 3 said they would not use it, and 1 was unsure what it meant.',
      response: 'Keep the internal reference optional and secondary.',
    },
    {
      tag: 'To explore',
      title: 'Confirmation and cloning',
      observed: 'The submission modal was received well. Cloning a previous trade still needed further exploration.',
      response: 'Keep clear submission feedback; test the cloning flow.',
    },
  ];

  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="vv-container">
        <div style={{ display: 'flex', gap: 80, alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: 48 }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <Label>04 / Usability Evidence</Label>
            <h2 className="vv-cs-section-title" style={{ color: C.dark, marginBottom: 16 }}>
              What testing confirmed.<br />What it challenged.
            </h2>
            <p style={{ fontSize: 16, color: C.mid, lineHeight: 1.65 }}>
              Remote usability sessions surfaced practical feedback on trade entry. These are qualitative observations, not measured business outcomes.
            </p>
          </div>
          <div style={{ textAlign: 'left', flexShrink: 0 }}>
            <p style={{ fontSize: 80, fontWeight: 400, color: C.blue, lineHeight: 1, letterSpacing: '-4px' }}>05</p>
            <p style={{ fontSize: 14, color: C.mid, marginTop: 6 }}>participants · remote sessions</p>
          </div>
        </div>

        <div style={{ borderRadius: 4, overflow: 'hidden', background: C.cardBg, marginBottom: 48 }}>
          <img
            alt="Usability testing session — dashboard and trade flow"
            src="/images/tradeaccept/ta-usability.png"
            style={{ width: '100%', display: 'block' }}
          />
        </div>

        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 1fr', gap: 32, padding: '16px 0', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, marginBottom: 0 }}>
            {['Signal', 'Observed in sessions', 'Design response / next step'].map(h => (
              <p key={h} style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.32px', textTransform: 'uppercase', color: C.blue }}>{h}</p>
            ))}
          </div>
          {findings.map(f => (
            <div key={f.title} style={{ display: 'grid', gridTemplateColumns: '280px 1fr 1fr', gap: 32, padding: '24px 0', borderBottom: `1px solid ${C.border}` }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.32px', textTransform: 'uppercase', color: C.blue, marginBottom: 10 }}>{f.tag}</p>
                <p style={{ fontSize: 19, fontWeight: 500, color: C.dark, lineHeight: 1.3 }}>{f.title}</p>
              </div>
              <p style={{ fontSize: 16, color: C.mid, lineHeight: 1.65 }}>{f.observed}</p>
              <p style={{ fontSize: 16, color: C.mid, lineHeight: 1.65 }}>{f.response}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSLearnings() {
  return (
    <section style={{ background: C.navy, padding: '80px 0 40px' }}>
      <div className="vv-container" style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div className="vv-cs-two-col">
          <div className="vv-cs-two-col-l">
            <Label style={{ color: C.navyMid }}>05 / Learnings &amp; Next Iterations</Label>
            <h2 className="vv-cs-section-title" style={{ color: '#fff' }}>
              Clarity is more than a cleaner interface.
            </h2>
            <p style={{ fontSize: 16, color: C.navyMid, lineHeight: 1.65 }}>
              The sessions reinforced that a legible form still needs explicit meaning. Dates, statuses and approval history are part of the experience — not just supporting metadata.
            </p>
          </div>
          <div className="vv-cs-two-col-r" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              { title: 'Define the dates', desc: 'Add contextual help that distinguishes agreement date from trade date.' },
              { title: 'Make trade states unmistakable', desc: 'Differentiate submitted, rejected, cancelled and withdrawn with distinct visual treatments.' },
              { title: 'Close the visibility gaps', desc: 'Explore trade-level audit details and validate cloning before expanding it.' },
            ].map(item => (
              <div key={item.title}>
                <p style={{ fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 6 }}>{item.title}</p>
                <p style={{ fontSize: 16, color: C.navyMid, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.05)', display: 'flex', gap: 48, padding: 28, flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 220px' }}>
            <p style={{ fontSize: 11, letterSpacing: '1.32px', color: C.navyMid, fontWeight: 600, textTransform: 'uppercase' }}>Intended Impact</p>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ fontSize: 22, color: '#fff', lineHeight: 1.4, marginBottom: 12 }}>
              Less confusion. More confident entry. A clearer path to action.
            </p>
            <p style={{ fontSize: 13, color: C.navyMid, lineHeight: 1.6 }}>
              These are expected benefits of the design direction. The source material does not establish measured efficiency gains or post-launch results.
            </p>
          </div>
        </div>

        <div style={{ borderTop: `1px solid rgba(255,255,255,0.15)`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>TradeAccept / UX·UI case study</p>
          <p style={{ fontSize: 12, color: C.navyMid }}>Dashboard · Trade entry · Evidence-led iteration</p>
        </div>
      </div>
    </section>
  );
}

export function CaseTradeAcceptPage() {
  return (
    <>
      <CSHero />
      <CSChallenge />
      <CSApproach />
      <CSDashboard />
      <CSTradeEntry />
      <CSUsability />
      <CSLearnings />
    </>
  );
}
