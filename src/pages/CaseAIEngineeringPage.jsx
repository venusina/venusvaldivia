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
            RETHINKING DESIGN PROCESS WITH AI
          </Caps>
          <h1 className="vv-cs-hero-title">UX ENGINEERING PROCESS</h1>
          <p className="vv-cs-hero-lede">
            This study explores an advanced UX Engineering workflow that treats AI as a precision instrument, prioritising ai workflows and brand-specific designsy stems.
          </p>
        </div>

        <div style={{ width: '100%', aspectRatio: '21/9', overflow: 'hidden', background: 'var(--surface-2)', boxShadow: '0 16px 40px rgba(0, 0, 0, 0.14)' }}>
          <img
            alt="Rethinking AI-Generated Design hero"
            src="/images/VS-code.png"
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
            In my workflow, the Figma file remains the source of truth, not the prompt. By defining complex component hierarchies and design systems upfront, I set the parameters that allow AI to operate productively within an enterprise environment. Without these constraints, generative output is merely average.

My process uses a well-constructed visual system to anchor AI generation. By feeding design tokens and systematic rationale into the workflow, I ensure that the code output is purpose-built and scalable, not just a generic approximation. 
          </p>
          <p className="vv-cs-body">
For me, this is the essential distinction between using AI to generate noise and using it to architect durable, high-craft product experiences.
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
            I began by systematically testing AI models against rigorous, controlled design briefs. The goal wasn't to measure raw creative output, but to assess how faithfully each tool could translate structured design tokens into production-grade, maintainable code.
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
            This reframing of the AI from an unpredictable 'creative partner' to a reliable 'structural engine' changed everything. By ensuring the AI operates strictly within the guardrails of a human-authored design system, we eliminated aesthetic ambiguity. The result: the design craft remains inherently human, while the technical execution reaches a superhuman scale."
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
            The workflow centres on two instruments: Design.md a structured markdown specification
            that encodes design intent in machine-readable form and Google Stitch, which bridges
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
                    architectural constraints no design decisions, only structural interpretation.
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
            is treated as a first draft technically functional, but requiring the craft layer
            that distinguishes polished products from generated artifacts.
          </p>

          <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--surface-2)', marginTop: 24, boxShadow: '0 16px 40px rgba(0, 0, 0, 0.14)' }}>
            <img
              alt="Front-end integration workflow"
              src="/images/vercel.png"
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
            The mature workflow treats AI as an accelerant applied to well-defined engineering
            tasks, never as a decision-maker for aesthetic or architectural choices. Three
            operational modes structure the day-to-day practice, each with clear human oversight
            and defined quality gates.
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
          <h2 className="vv-cs-display" style={{ fontSize: 'clamp(28px, 3.2cqi, 40px)' }}>Bridging Design &amp; Engineering</h2>
          <p className="vv-cs-body" style={{ fontSize: 'clamp(18px, 2.2cqi, 24px)', lineHeight: 1.5, color: 'var(--ink-dim)' }}>
            The evolving role of the UX Engineer is no longer about manual labor, but about
            high-level curation. By understanding AI&rsquo;s limitations, its tendency toward
            the &lsquo;average&rsquo; and its lack of brand context, we can harness its speed
            to elevate the craft. The future of design is not AI-generated; it is AI-amplified,
            human-directed, and engineering-led.
          </p>
          <a
            href="#projects"
            className="vv-cs-back"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 32,
              padding: '14px 32px',
              background: 'var(--ink)',
              color: '#fff',
              fontFamily: 'var(--display)',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: 'none',
            }}
          >
            EXPLORE PROJECTS
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
