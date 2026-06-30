import { Caps, MIcon } from '../components/atoms.jsx';

function CSHero({ accent }) {
  const handleBack = (e) => {
    e.preventDefault();
    const prev = sessionStorage.getItem('vv-prev-hash');
    if (prev && prev !== '#case-atlassian') {
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
        <div className="vv-cs-hero-grid">
          <div className="vv-cs-hero-text">
            <Caps style={{ letterSpacing: '0.2em', display: 'block', marginBottom: 20 }}>
              Case study · Atlassian
            </Caps>
            <h1 className="vv-cs-hero-title">
              Atlassian: Growth &amp; Monetization UX
            </h1>
            <p className="vv-cs-hero-lede">
              Elevating the upgrade journey from Standard to Premium through strategic
              product design and Advanced Roadmaps optimisation.
            </p>
            <div className="vv-cs-hero-role">
              <Caps>Role: Senior Product Designer</Caps>
            </div>
          </div>

          <div className="vv-cs-hero-art">
            <img
              alt="Atlassian product interface"
              src="/images/atlassian.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CSOverview({ accent }) {
  return (
    <section className="vv-cs-section vv-cs-overview">
      <div className="vv-container vv-cs-two-col">
        <div className="vv-cs-two-col-l">
          <h2 className="vv-cs-section-title">Project<br />Overview</h2>
        </div>
        <div className="vv-cs-two-col-r">
          <p className="vv-cs-body">
            This project focused on identifying high-intent opportunities for Atlassian
            customers to transition from Standard to Premium tiers. A primary driver
            for this migration was the &lsquo;Advanced Roadmaps&rsquo; feature set, a
            powerful tool for cross-team planning that often remained underutilised due
            to initial configuration complexity.
          </p>
          <aside className="vv-cs-callout" style={{ borderLeftColor: accent }}>
            <Caps style={{ display: 'block', marginBottom: 12 }}>The Challenge</Caps>
            <p className="vv-cs-callout-text">
              Customers were struggling with setting up Advanced Roadmap plans correctly,
              leading to a drop-off before they could experience the core value
              proposition of the Premium tier.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function CSMapping() {
  return (
    <section className="vv-cs-section vv-cs-mapping">
      <div className="vv-container">
        <div className="vv-cs-mapping-art">
          <img
            alt="Current state product mapping"
            src="/images/ProductMapping.png"
          />
        </div>
        <p className="vv-cs-caption">
          Current state product mapping and opportunity identification across the ecosystem.
        </p>
      </div>
    </section>
  );
}

const AUDIENCE = [
  { icon: 'admin_panel_settings', title: 'Jira Admins', body: 'System gatekeepers responsible for infrastructure and licensing.' },
  { icon: 'engineering', title: 'Eng Managers', body: 'Leaders focused on resource allocation and technical roadmaps.' },
  { icon: 'rebase_edit', title: 'Agile Delivery', body: 'Managers ensuring velocity and cross-functional alignment.' },
  { icon: 'account_tree', title: 'Delivery Leads', body: 'Stakeholders overseeing complex multi-team release cycles.' },
];

function CSAudience() {
  return (
    <section className="vv-cs-section vv-cs-audience">
      <div className="vv-container vv-cs-two-col">
        <div className="vv-cs-two-col-l">
          <h2 className="vv-cs-section-title">Target<br />Audience</h2>
          <p className="vv-cs-side-note">
            The core user groups managing enterprise-scale delivery and infrastructure.
          </p>
        </div>
        <div className="vv-cs-two-col-r">
          <div className="vv-cs-audience-grid">
            {AUDIENCE.map((a) => (
              <div className="vv-cs-audience-card" key={a.title}>
                <span className="vv-cs-audience-icon">
                  <MIcon name={a.icon} size={32} weight={300} />
                </span>
                <h3 className="vv-cs-audience-title">{a.title}</h3>
                <p className="vv-cs-audience-body">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CSApproach({ accent }) {
  return (
    <section className="vv-cs-section vv-cs-approach">
      <div className="vv-container">
        <h2 className="vv-cs-display">The Approach</h2>

        <div className="vv-cs-bento">
          <div className="vv-cs-bento-card vv-cs-bento-personal">
            <div>
              <Caps style={{ display: 'block', marginBottom: 16 }}>01 — Strategy</Caps>
              <h3 className="vv-cs-bento-title">Personalisation</h3>
              <p className="vv-cs-bento-body">
                We shifted from generic upgrade prompts to hyper-contextual messaging.
                By identifying &lsquo;moments of intent&rsquo; within the workspace
                &mdash; such as when a user attempts to link multiple projects &mdash;
                we served tailored content that highlighted exactly how Premium solves
                their immediate problem.
              </p>
            </div>
            <div className="vv-cs-bento-iconrow">
              <MIcon name="person_search" size={28} weight={300} />
              <MIcon name="target" size={28} weight={300} />
            </div>
          </div>

          <div className="vv-cs-bento-card vv-cs-bento-explore">
            <Caps style={{ display: 'block', marginBottom: 16 }}>01.5 — Exploration</Caps>
            <h3 className="vv-cs-bento-title-sm">Exploration</h3>
            <div className="vv-cs-bento-explore-img">
              <img
                alt="Iterative design exploration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjrzkjS728dcBWMotBUcgkAFsIW4wpdJRidLoLEUCL0cckMqnbHTtLGOcF-23T9vDnBaEan_05_5aZkuuqdRG0LBNNQCObpYOtoI1J4M9Sl35bPTrO9Y-PjbTZcVnaikbL_qXc5lCbICOh4xVXzzmEL04QNflIRjHlDbUhzidxKOjsouEWpN6kh_KxEG-sL40ML38z9Vxvl9zSwLiMbhXQrH5uT6tUXa8fmC0DCMhSrJn0Mksz3fBADtjbVQdiPCrrWYgVAj7xF-4Z"
              />
            </div>
            <p className="vv-cs-caption">Iterative design exploration for contextual upgrade prompts.</p>
          </div>

          <div className="vv-cs-bento-card vv-cs-bento-optimize">
            <div>
              <Caps style={{ display: 'block', marginBottom: 16 }}>02 — Flow</Caps>
              <h3 className="vv-cs-bento-title-sm">Optimisation</h3>
              <p className="vv-cs-bento-body">
                Improving navigation and accessibility for upgrade paths by removing
                friction in the payment gateway and license management screens.
              </p>
            </div>
            <button className="vv-cs-flow-btn">View Flow Analysis</button>
          </div>

          <div className="vv-cs-bento-card vv-cs-bento-ui">
            <Caps color="rgba(255,255,255,0.55)" style={{ display: 'block', marginBottom: 16 }}>
              03 — Interface
            </Caps>
            <h3 className="vv-cs-bento-title">UI Enhancement</h3>
            <div className="vv-cs-ui-grid">
              <div className="vv-cs-ui-item">
                <MIcon name="chat_bubble_outline" size={20} weight={300} />
                <span>Guided tooltips for feature discovery and onboarding.</span>
              </div>
              <div className="vv-cs-ui-item">
                <MIcon name="ads_click" size={20} weight={300} />
                <span>Contextual hotspots on high-value premium features.</span>
              </div>
              <div className="vv-cs-ui-item">
                <MIcon name="insights" size={20} weight={300} />
                <span>Data-driven dashboard insights for decision makers.</span>
              </div>
            </div>
          </div>

          <div className="vv-cs-bento-card vv-cs-bento-iter">
            <div className="vv-cs-iter-art">
              <img
                alt="Design critique"
                src="/images/Atlassian Iteractive design.png"
              />
            </div>
            <div className="vv-cs-iter-text">
              <Caps style={{ display: 'block', marginBottom: 16 }}>04 — Validation</Caps>
              <h3 className="vv-cs-bento-title-sm">Iterative Design</h3>
              <p className="vv-cs-bento-body">
                Continuous feedback loops and A/B testing allowed us to refine the
                placement of CTA buttons, ensuring they were enticing without being
                intrusive to the core workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CSImpact({ accent }) {
  return (
    <section className="vv-cs-section vv-cs-impact">
      <div className="vv-container vv-cs-impact-inner">
        <h2 className="vv-cs-display">Strategic Impact</h2>
        <p className="vv-cs-impact-lede">
          The culmination of the project resulted in a 14% increase in Standard to
          Premium conversion rates within the first quarter of deployment, validating
          our hypothesis on contextual nudges.
        </p>
        <div className="vv-cs-impact-ctas">
          <a href="#" className="vv-btn vv-btn-solid" style={{ background: accent }}>
            View full results <MIcon name="arrow_outward" size={14} />
          </a>
          <a href="#projects" className="vv-btn vv-btn-ghost">
            Project archive <MIcon name="arrow_forward" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

function CSNext() {
  return (
    <section className="vv-cs-section vv-cs-next">
      <div className="vv-container vv-cs-next-inner">
        <Caps>Next case study</Caps>
        <a href="#case-axs" className="vv-cs-next-title">
          AXS — Platform re-build
          <MIcon name="arrow_outward" size={28} />
        </a>
      </div>
    </section>
  );
}

export function CaseAtlassianPage({ accent }) {
  return (
    <div data-screen-label="Venus Valdivia · Atlassian case study">
      <CSHero accent={accent} />
      <CSOverview accent={accent} />
      <CSMapping />
      <CSAudience />
      <CSApproach accent={accent} />
      <CSImpact accent={accent} />
      <CSNext />
    </div>
  );
}
