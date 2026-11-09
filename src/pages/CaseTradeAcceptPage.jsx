import { Caps, MIcon } from '../components/atoms.jsx';

function CSHero() {
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
  const backLabel = prev === '' || prev === '#' || prev === '#top'
    ? 'Back to home'
    : 'Back to all projects';

  return (
    <section className="vv-cs-hero" style={{ background: '#0d2041', color: '#fff' }}>
      <div className="vv-container">
        <a href="#projects" onClick={handleBack} className="vv-cs-back" style={{ color: '#b9c7dd' }}>
          <MIcon name="arrow_back" size={16} />
          <span>{backLabel}</span>
        </a>

        <div style={{ marginBottom: 40 }}>
          <Caps style={{ letterSpacing: '0.2em', display: 'block', marginBottom: 20, color: '#b9c7dd' }}>
            Case Study &middot; AXS &middot; 2023
          </Caps>
          <h1 className="vv-cs-hero-title" style={{ color: '#fff' }}>TRADEACCEPT</h1>
          <p className="vv-cs-hero-lede" style={{ color: '#b9c7dd' }}>
            Redesigning a complex financial trade entry and approval workflow to reduce confusion,
            surface critical trade states, and support confident decision-making at scale.
          </p>
        </div>

        <div style={{ width: '100%', aspectRatio: '21/9', overflow: 'hidden', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            alt="TradeAccept platform"
            src="/images/axs.png"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}

function CSMeta() {
  const items = [
    { label: 'Role', value: 'Product Design Lead' },
    { label: 'Company', value: 'AXS' },
    { label: 'Duration', value: '12 months' },
    { label: 'Team', value: 'Team of 11' },
    { label: 'Focus', value: 'Dashboard · Trade entry' },
    { label: 'Type', value: 'Evidence-led iteration' },
  ];

  return (
    <section style={{ background: '#0d2041', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="vv-container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 48px', paddingBottom: 48 }}>
          {items.map(item => (
            <div key={item.label}>
              <p style={{ fontSize: 11, letterSpacing: '1.3px', color: '#b9c7dd', fontWeight: 600, marginBottom: 6, textTransform: 'uppercase' }}>{item.label}</p>
              <p style={{ fontSize: 16, color: '#fff' }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSProblem() {
  return (
    <section style={{ background: '#0d2041', padding: '72px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="vv-container">
        <div className="vv-cs-two-col">
          <div className="vv-cs-two-col-l">
            <p style={{ fontSize: 11, letterSpacing: '1.32px', color: '#b9c7dd', fontWeight: 600, marginBottom: 24, textTransform: 'uppercase' }}>
              01 / The Problem
            </p>
            <h2 className="vv-cs-section-title" style={{ color: '#fff' }}>
              Traders couldn't tell what needed their attention.
            </h2>
            <p style={{ fontSize: 16, color: '#b9c7dd', lineHeight: 1.65 }}>
              The existing trade entry form lacked visual hierarchy and clear status indicators, leading to errors, delays, and repeated back-and-forth between teams.
            </p>
          </div>
          <div className="vv-cs-two-col-r" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { title: 'Ambiguous dates', desc: 'Agreement date and trade date were visually identical with no contextual help to distinguish them.' },
              { title: 'Invisible trade states', desc: 'Submitted, rejected, cancelled and withdrawn trades looked the same at a glance.' },
              { title: 'No audit trail', desc: 'Approval history was buried — users had no visibility into what changed and when.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.04)', padding: 24 }}>
                <p style={{ fontSize: 17, fontWeight: 500, color: '#fff', marginBottom: 8 }}>{item.title}</p>
                <p style={{ fontSize: 15, color: '#b9c7dd', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CSProcess() {
  return (
    <section style={{ background: '#0d2041', padding: '72px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="vv-container">
        <p style={{ fontSize: 11, letterSpacing: '1.32px', color: '#b9c7dd', fontWeight: 600, marginBottom: 24, textTransform: 'uppercase' }}>
          02 / Process
        </p>
        <h2 className="vv-cs-section-title" style={{ color: '#fff', maxWidth: 500, marginBottom: 48 }}>
          Evidence-led iteration.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {[
            { step: '01', title: 'Discovery', desc: 'Stakeholder interviews and session recordings to identify where traders dropped off or made errors.' },
            { step: '02', title: 'Definition', desc: 'Mapped pain points to interface decisions. Prioritised status visibility and date disambiguation.' },
            { step: '03', title: 'Wireframing', desc: 'Low-fi flows tested against real user tasks before committing to high-fidelity direction.' },
            { step: '04', title: 'Iteration', desc: 'Prototype → usability testing → refined UI. Repeated until key confusion points were resolved.' },
          ].map(item => (
            <div key={item.step} style={{ paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              <p style={{ fontSize: 11, letterSpacing: '1.3px', color: '#b9c7dd', fontWeight: 600, marginBottom: 12 }}>{item.step}</p>
              <p style={{ fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 10 }}>{item.title}</p>
              <p style={{ fontSize: 15, color: '#b9c7dd', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSLearnings() {
  return (
    <section style={{ background: '#0d2041', padding: '72px 0 32px' }}>
      <div className="vv-container" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div className="vv-cs-two-col">
          <div className="vv-cs-two-col-l">
            <p style={{ fontSize: 11, letterSpacing: '1.32px', color: '#b9c7dd', fontWeight: 600, marginBottom: 24, textTransform: 'uppercase' }}>
              05 / Learnings &amp; Next Iterations
            </p>
            <h2 className="vv-cs-section-title" style={{ color: '#fff' }}>
              Clarity is more than a cleaner interface.
            </h2>
            <p style={{ fontSize: 16, color: '#b9c7dd', lineHeight: 1.65 }}>
              The sessions reinforced that a legible form still needs explicit meaning. Dates, statuses and approval history are part of the experience—not just supporting metadata.
            </p>
          </div>
          <div className="vv-cs-two-col-r" style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {[
              { title: 'Define the dates', desc: 'Add contextual help that distinguishes agreement date from trade date.' },
              { title: 'Make trade states unmistakable', desc: 'Differentiate submitted, rejected, cancelled and withdrawn feedback.' },
              { title: 'Close the visibility gaps', desc: 'Explore trade-level audit details and validate cloning before expanding it.' },
            ].map(item => (
              <div key={item.title}>
                <p style={{ fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 6 }}>{item.title}</p>
                <p style={{ fontSize: 16, color: '#b9c7dd', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.04)', display: 'flex', gap: 48, padding: 28, flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 220px' }}>
            <p style={{ fontSize: 11, letterSpacing: '1.32px', color: '#b9c7dd', fontWeight: 600, textTransform: 'uppercase' }}>Intended Impact</p>
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <p style={{ fontSize: 22, color: '#fff', lineHeight: 1.4, marginBottom: 12 }}>
              Less confusion. More confident entry. A clearer path to action.
            </p>
            <p style={{ fontSize: 13, color: '#b9c7dd', lineHeight: 1.6 }}>
              These are expected benefits of the design direction. The source material does not establish measured efficiency gains or post-launch results.
            </p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>TradeAccept / UX/UI case study</p>
          <p style={{ fontSize: 12, color: '#b9c7dd' }}>Dashboard · Trade entry · Evidence-led iteration</p>
        </div>
      </div>
    </section>
  );
}

export function CaseTradeAcceptPage({ accent }) {
  return (
    <>
      <CSHero />
      <CSMeta />
      <CSProblem />
      <CSProcess />
      <CSLearnings />
    </>
  );
}
