import { Caps, MIcon } from '../components/atoms.jsx';

function CSHero() {
  const handleBack = (e) => {
    e.preventDefault();
    const prev = sessionStorage.getItem('vv-prev-hash');
    if (prev && prev !== '#case-ai-engineering') {
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
            UX ENGINEERING PROCESS
          </Caps>
          <h1 className="vv-cs-hero-title">Rethinking AI-Generated Design</h1>
          <p className="vv-cs-hero-lede">
            Beyond "vibe coding" and repetitive prompt-based templates. This study explores an advanced UX Engineering workflow that treats AI instrument rather than a black-box generator, prioritising architectural control and brand-specific visual systems
          </p>
        </div>

        <div style={{ width: '100%', aspectRatio: '21/9', overflow: 'hidden', background: 'var(--surface-2)' }}>
          <img
            alt="Rethinking AI-Generated Design hero"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnhDi_CYK_Z8LCdV7Y8GOattk4w0_GTzNzo7aMuCsmHv8QSX74JkqC1YWYnc0waE-j6JfKPYErJt8cPNmwc-_mqWTAYm95Ejz_MJUWABCPw4GGCdMhmYscBC7PwnSL8BwgiLMZ7mCqy_SlEm8MXMITnceicoq20xzAYdhSkWPRtmWiQzimHejlbdXcOp4-T11K10fpulzWtwEutbgQG9iakMNxpep_2xQ8UmTeDz9XRLq9Kd_Sx6lYnQM1GW-1bOVSEUWsCdQ--v9T"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.25)' }}
          />
        </div>
      </div>
    </section>
  );
}

function CSDesignDirection() {
  return (
    <section className="vv-cs-section">
      <div className="vv-container vv-cs-two-col">
        <div className="vv-cs-two-col-l">
          <span style={{
            display: 'inline-block',
            background: 'var(--surface-2)',
            padding: '2px 8px',
            fontSize: 11,
            letterSpacing: '0.1em',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>01</span>
          <h2 className="vv-cs-section-title">Design Direction &amp; Visual Systems</h2>
        </div>
        <div className="vv-cs-two-col-r">
          <p className="vv-cs-body">
            I started by defining the visual language and interaction direction in Figma. Instead of creating isolated screens, I focused on scalable visual consistency, typography hierarchy, spacing systems
and reusable UI patterns. 
          </p>
          <p className="vv-cs-body">
            This allowed me to establish a cohesive design foundation before introducing AI tooling into the workflow.
          </p>
        </div>
      </div>
    </section>
  );
}

function CSExperimenting() {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container vv-cs-two-col">
        <div className="vv-cs-two-col-l">
          <span style={{
            display: 'inline-block',
            background: 'var(--surface-2)',
            padding: '2px 8px',
            fontSize: 11,
            letterSpacing: '0.1em',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>02</span>
          <h2 className="vv-cs-section-title">Experimenting with AI Workflows</h2>
        </div>
        <div className="vv-cs-two-col-r">
          <p className="vv-cs-body">
            During the process, I explored multiple AI-driven approaches for translating design into production-ready code. One experiment involved feeding Claude directly with Figma design system structures to evaluate how effectively AI could interpret component patterns and layout logic.
            However, because I did not yet have a fully mature design system in place, I pivoted toward a more hybrid workflow that balanced control, speed, and scalability.
          </p>

          <blockquote style={{
            background: '#000',
            color: '#fff',
            padding: 32,
            margin: '24px 0',
            fontSize: 20,
            fontStyle: 'italic',
            lineHeight: 1.5,
          }}>
            &ldquo;The breakthrough happened when I stopped asking the AI to &lsquo;design&rsquo; and
            started asking it to &lsquo;structurally interpret&rsquo; the Figma specifications.&rdquo;
          </blockquote>

          <p className="vv-cs-body">
            This reframing — from creative collaborator to structural engineer — fundamentally
            changed the quality of outputs. The AI was no longer making aesthetic decisions; it
            was executing precise technical specifications derived from a human-authored design
            system. The craft remained human. The velocity became superhuman.
          </p>
        </div>
      </div>
    </section>
  );
}

function CSDesignToCode() {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container vv-cs-two-col">
        <div className="vv-cs-two-col-l">
          <span style={{
            display: 'inline-block',
            background: 'var(--surface-2)',
            padding: '2px 8px',
            fontSize: 11,
            letterSpacing: '0.1em',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>03</span>
          <h2 className="vv-cs-section-title">Design-to-Code Workflow</h2>
        </div>
        <div className="vv-cs-two-col-r">
          <p className="vv-cs-body">
            The workflow centres on two instruments: Design.md — a structured markdown specification
            that encodes design intent in machine-readable form — and Google Stitch, which bridges
            Figma components directly to generated component code. Together they establish a
            deterministic pipeline from visual intent to production-ready output.
          </p>

          <div className="vv-cs-callout" style={{ borderLeft: '4px solid var(--rule)', paddingLeft: 24, margin: '24px 0' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <MIcon name="check_circle" size={20} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ fontFamily: 'var(--display)', fontSize: 15 }}>Phase A — Design Specification</strong>
                  <p className="vv-cs-body" style={{ fontSize: 14, marginTop: 4 }}>
                    Translate Figma components into structured Design.md documents, encoding
                    spacing, typography, state variants, and interaction patterns.
                  </p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <MIcon name="check_circle" size={20} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ fontFamily: 'var(--display)', fontSize: 15 }}>Phase B — Structural Generation</strong>
                  <p className="vv-cs-body" style={{ fontSize: 14, marginTop: 4 }}>
                    Feed specifications into Google Stitch and AI coding assistants with explicit
                    architectural constraints — no design decisions, only structural interpretation.
                  </p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <MIcon name="check_circle" size={20} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong style={{ fontFamily: 'var(--display)', fontSize: 15 }}>Phase C — Engineering Review</strong>
                  <p className="vv-cs-body" style={{ fontSize: 14, marginTop: 4 }}>
                    Manual audit of generated output against the design specification, refining
                    token usage, accessibility, and component composition before integration.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CSFrontEnd() {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container vv-cs-two-col">
        <div className="vv-cs-two-col-l">
          <span style={{
            display: 'inline-block',
            background: 'var(--surface-2)',
            padding: '2px 8px',
            fontSize: 11,
            letterSpacing: '0.1em',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>04</span>
          <h2 className="vv-cs-section-title">Front-End Integration &amp; UX Engineering</h2>
        </div>
        <div className="vv-cs-two-col-r">
          <p className="vv-cs-body">
            The final integration phase is where UX Engineering disciplines diverge sharply from
            standard development. Every generated component is assessed for semantic correctness,
            motion behaviour, responsive resilience, and accessibility compliance. AI output
            is treated as a first draft — technically functional, but requiring the craft layer
            that distinguishes polished products from generated artifacts.
          </p>

          <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface-2)', marginTop: 24 }}>
            <img
              alt="Front-end integration workflow"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Vz1TbXON93KoedUhk86PuNcw1AMt4pzu1BK8O3sd1PMa1PpaaDQkcxT5eYOz2hUmYqWw2raCdOJPxN0TtBU0PAFO_LFYJez0TXqNXXn1de3aTS2ceDg2tuRxjxuYeXj0ArgW0LVIPzL1L1seWq7CEMWqorkdAoqQ6LJ8gGZRr1VydODfTjc65W_Vnybwfae6BzBb6nRDXl53yqNnNBleeNRMSca93xmQAAp2C2bXqKGBwM52mmTXrh1CEEvWdKGPJ7ggzZaG-vC-"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.25)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CSAugmentedDev() {
  const WORKFLOW_CARDS = [
    {
      icon: 'sync_alt',
      title: 'Refine',
      desc: 'Iterative refinement cycles where AI handles structural repetition and the engineer curates visual and interaction quality.',
    },
    {
      icon: 'rocket_launch',
      title: 'Deploy',
      desc: 'Automated build pipelines validate generated code against design tokens before any component reaches production.',
    },
    {
      icon: 'biotech',
      title: 'Test',
      desc: 'Accessibility audits, cross-viewport testing, and performance profiling close the loop between AI speed and engineering standards.',
    },
  ];

  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container vv-cs-two-col">
        <div className="vv-cs-two-col-l">
          <span style={{
            display: 'inline-block',
            background: 'var(--surface-2)',
            padding: '2px 8px',
            fontSize: 11,
            letterSpacing: '0.1em',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>05</span>
          <h2 className="vv-cs-section-title">AI-Augmented Development Workflow</h2>
        </div>
        <div className="vv-cs-two-col-r">
          <p className="vv-cs-body">
            To streamline iteration and development, I configured: VS Code > Claude AI workflows > GitHub version control > and Vercel deployment, This allowed me to rapidly test, refine, and publish updates while experimenting with AI-assisted engineering practices.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
            marginTop: 24,
          }}>
            {WORKFLOW_CARDS.map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--rule)',
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <MIcon name={card.icon} size={28} />
                <div style={{
                  fontFamily: 'var(--display)',
                  fontWeight: 700,
                  fontSize: 17,
                  color: 'var(--ink)',
                }}>
                  {card.title}
                </div>
                <p className="vv-cs-body" style={{ fontSize: 14, margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CSConclusion() {
  return (
    <section className="vv-cs-section" style={{ borderTop: '1px solid var(--rule)' }}>
      <div className="vv-container">
        <div style={{ maxWidth: '72ch', margin: '0 auto', textAlign: 'center' }}>
          <Caps style={{ letterSpacing: '0.2em', display: 'block', marginBottom: 20 }}>
            CONCLUSION
          </Caps>
          <h3 className="vv-cs-display">Exploration &amp; future of UX Engineering</h3>
          <div className="vv-cs-body" style={{ fontSize: 'clamp(18px, 2.2cqi, 24px)', lineHeight: 1.7, color: 'var(--ink-dim)', textAlign: 'left' }}>
            <p>Was this process faster than a traditional workflow? Not necessarily — at least not yet.</p>
            <p>However, the project became an important exploration into the future of UX engineering and AI-assisted product creation.</p>
            <p>More importantly, it allowed me to:</p>
            <ul>
              <li>bridge UX design and front-end engineering</li>
              <li>experiment with emerging AI workflows</li>
              <li>improve my technical implementation skills</li>
              <li>understand the limitations of AI-generated interfaces</li>
              <li>develop systems for guiding AI outputs with stronger product thinking</li>
            </ul>
            <p>The final result reflects a hybrid approach where design strategy, UX thinking, front-end implementation, and AI tooling work together to create more intentional digital products.</p>
          </div>
          <a
            href="#projects"
            className="vv-cs-back"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
              padding: '14px 32px',
              background: 'var(--ink)',
              color: 'var(--paper)',
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: 'none',
            }}
          >
            EXPLORE MORE STUDIES
          </a>
        </div>
      </div>
    </section>
  );
}

export function CaseAIEngineeringPage({ accent }) {
  return (
    <div data-screen-label="Venus Valdivia · AI Engineering case study">
      <CSHero />
      <CSDesignDirection />
      <CSExperimenting />
      <CSDesignToCode />
      <CSFrontEnd />
      <CSAugmentedDev />
      <CSConclusion />
    </div>
  );
}
