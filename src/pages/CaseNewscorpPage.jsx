const C = {
  blue: '#2459d3', dark: '#142033', mid: '#5d6878',
  grayBg: '#f7f8fa', cardBg: '#eef2f8', border: '#dce2ea',
  navy: '#0d2041', navyMid: '#b9c7dd',
};

function BackBtn() {
  const handleBack = () => {
    const prev = sessionStorage.getItem('vv-prev-hash') || '';
    window.location.hash = prev || '';
  };
  return (
    <button onClick={handleBack} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: 'none', border: 'none', cursor: 'pointer',
      color: C.mid, fontSize: 13, fontWeight: 500, padding: 0,
      marginBottom: 48,
    }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Back
    </button>
  );
}

function NCHero() {
  return (
    <section style={{ background: '#fff', padding: '64px 0 0' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px' }}>
        <BackBtn />
        <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 20px' }}>
          NEWSPLAYER / THE AUSTRALIAN
        </p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 700, color: C.dark, margin: '0 0 20px', lineHeight: 1.08, letterSpacing: '-2px' }}>
          Good journalism.<br />Beyond the screen.
        </h1>
        <p style={{ color: C.mid, fontSize: 16, maxWidth: 560, margin: '0 0 40px', lineHeight: 1.65 }}>
          Turning written news into an accessible listening experience — through research-led design that surfaces audio where readers already are.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
          {['UX RESEARCH', 'AUDIO EXPERIENCE'].map(t => (
            <span key={t} style={{ background: C.cardBg, color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.2px', padding: '6px 12px', borderRadius: 4 }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ background: C.cardBg, overflow: 'hidden' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/newscorp/nc-hero.png"
            alt="NewsPlayer product showcase with phone mockup and audio player"
            style={{ maxWidth: '100%', display: 'block', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}

function NCOverview() {
  const cols = [
    { label: 'USER VALUE', text: 'Give existing readers a convenient, flexible way to consume news they already trust.' },
    { label: 'BUSINESS INTENT', text: 'Increase session depth and time-in-app through a habit-forming audio feature.' },
    { label: 'PROJECT LENS', text: 'Identify awareness and usability barriers before scaling the feature further.' },
  ];
  return (
    <section style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 16px' }}>01 / THE OPPORTUNITY</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: C.dark, margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          From a feature to a habit.
        </h2>
        <p style={{ color: C.mid, fontSize: 16, maxWidth: 640, margin: '0 0 56px', lineHeight: 1.65 }}>
          NewsPlayer brings AI-powered voices to The Australian's articles — transforming long reads into on-demand audio. The challenge: most subscribers didn't know it existed, and those who did weren't sure how to use it.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {cols.map(({ label, text }) => (
            <div key={label} style={{ background: C.cardBg, borderRadius: 8, padding: '28px 24px', borderTop: `3px solid ${C.blue}` }}>
              <p style={{ color: C.blue, fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', margin: '0 0 12px' }}>{label}</p>
              <p style={{ color: C.dark, fontSize: 15, lineHeight: 1.6, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NCResearch() {
  return (
    <section style={{ background: C.navy, padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: C.navyMid, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 16px' }}>02 / LISTENING BEFORE DESIGNING</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#fff', margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          Two studies. Two different lenses.
        </h2>
        <p style={{ color: C.navyMid, fontSize: 16, maxWidth: 560, margin: '0 0 56px', lineHeight: 1.65 }}>
          We ran complementary research to understand both why people weren't using audio, and what happened when they tried to.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 56 }}>
          <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 8, padding: '32px 28px' }}>
            <p style={{ color: '#fff', fontSize: 40, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-1px' }}>100</p>
            <p style={{ color: C.navyMid, fontSize: 13, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 12px' }}>Survey Respondents</p>
            <p style={{ color: C.navyMid, fontSize: 14, lineHeight: 1.6, margin: 0 }}>50 current audio listeners + 50 potential listeners — exploring awareness, habits, and motivation.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 8, padding: '32px 28px' }}>
            <p style={{ color: '#fff', fontSize: 40, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-1px' }}>9</p>
            <p style={{ color: C.navyMid, fontSize: 13, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 12px' }}>Usability Participants</p>
            <p style={{ color: C.navyMid, fontSize: 14, lineHeight: 1.6, margin: 0 }}>All primarily read news. Tested on key flows: discovering audio, playing an article, and using the Daily Briefing.</p>
          </div>
        </div>
        <div style={{ borderLeft: `3px solid ${C.blue}`, paddingLeft: 24 }}>
          <p style={{ color: C.navyMid, fontSize: 18, fontStyle: 'italic', lineHeight: 1.6, margin: 0 }}>
            "The problem wasn't only playback. It was the path to the first listen."
          </p>
        </div>
      </div>
    </section>
  );
}

function NCInsights() {
  const barriers = [
    { pct: '51%', text: "Didn't know the feature existed" },
    { pct: '43.6%', text: "Didn't know how to access it" },
    { pct: '30.8%', text: "Hadn't gotten around to trying it" },
  ];
  const behaviors = [
    { n: '01', label: 'FIT THE MOMENT', title: 'A commute-sized opportunity', desc: 'Driving emerged as the primary listening context. The ideal session: 15–20 minutes — roughly a commute or a task.' },
    { n: '02', label: 'BUILD A ROUTINE', title: 'Audio is already a daily ritual — for some', desc: 'Listeners who formed habits listened consistently. The challenge is bridging from occasional to daily use.' },
    { n: '03', label: 'REDUCE THE GUESSWORK', title: 'Preview the value, then give control', desc: 'Users wanted to know what they were getting before they pressed play — length, topic, speaker quality.' },
  ];
  return (
    <section style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 16px' }}>03 / WHAT THE RESEARCH REVEALED</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: C.dark, margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          Make it easy to find.<br />Worth making time for.
        </h2>
        <p style={{ color: C.mid, fontSize: 16, maxWidth: 560, margin: '0 0 56px', lineHeight: 1.65 }}>
          Usability testing surfaced specific friction points. The research images below capture findings from three key areas tested.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 64 }}>
          {['/images/newscorp/nc-insight-3.png', '/images/newscorp/nc-insight-2.png', '/images/newscorp/nc-insight-1.png'].map((src, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'center', background: C.grayBg, borderRadius: 8, padding: 16, overflow: 'hidden' }}>
              <img src={src} alt={`Usability research finding ${i + 1}`} style={{ maxWidth: '100%', display: 'block', height: 'auto', borderRadius: 4 }} />
            </div>
          ))}
        </div>

        <h3 style={{ color: C.dark, fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>Awareness barriers</h3>
        <p style={{ color: C.mid, fontSize: 15, margin: '0 0 32px' }}>Of those who hadn't used audio, the most common reasons were:</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 64 }}>
          {barriers.map(({ pct, text }) => (
            <div key={pct} style={{ background: C.cardBg, borderRadius: 8, padding: '24px 20px', textAlign: 'center' }}>
              <p style={{ color: C.blue, fontSize: 36, fontWeight: 700, margin: '0 0 8px', letterSpacing: '-1px' }}>{pct}</p>
              <p style={{ color: C.mid, fontSize: 13, margin: 0, lineHeight: 1.5 }}>{text}</p>
            </div>
          ))}
        </div>

        <h3 style={{ color: C.dark, fontSize: 20, fontWeight: 700, margin: '0 0 32px' }}>Behavioural insights</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {behaviors.map(({ n, label, title, desc }) => (
            <div key={n} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20, alignItems: 'start', padding: '28px 24px', background: C.grayBg, borderRadius: 8 }}>
              <div style={{ color: C.blue, fontSize: 13, fontWeight: 700, paddingTop: 2 }}>{n}</div>
              <div>
                <p style={{ color: C.blue, fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', margin: '0 0 6px' }}>{label}</p>
                <p style={{ color: C.dark, fontSize: 16, fontWeight: 600, margin: '0 0 8px' }}>{title}</p>
                <p style={{ color: C.mid, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCardMockup() {
  return (
    <div style={{ background: '#fff', padding: 20, display: 'flex', flexDirection: 'column', gap: 13, width: 300 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ background: '#237d9b', borderRadius: 999, padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M12 3C7.5 3 4.5 6 4.5 10.5c0 2.3.8 4 2.3 5.5L12 21l5.2-5c1.5-1.5 2.3-3.2 2.3-5.5C19.5 6 16.5 3 12 3zM9 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
          </svg>
          <span style={{ color: '#fff', fontSize: 12, fontWeight: 500 }}>Button</span>
        </div>
        <span style={{ color: C.mid, fontSize: 10 }}>Last Updated 2 minutes ago</span>
      </div>
      <p style={{ color: C.dark, fontSize: 20, fontWeight: 700, margin: 0, lineHeight: 1.15 }}>Out-of-touch voters must stop letting our poor Government down</p>
      <p style={{ color: C.mid, fontSize: 11, margin: 0 }}>By JUSTO IPSUM</p>
      <div style={{ height: 1, background: '#dce2ea' }} />
      <div style={{ background: '#c8d4e0', height: 160, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#8fa0b3', fontSize: 11 }}>Article photo</span>
      </div>
    </div>
  );
}

function BriefingCardsMockup() {
  const cards = ['Top Stories', 'Quick headlines'];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
      <p style={{ color: C.dark, fontSize: 20, margin: 0, fontWeight: 400 }}>Daily Briefing</p>
      <div style={{ display: 'flex', gap: 16 }}>
        {cards.map(title => (
          <div key={title} style={{ background: '#fff', borderRadius: 10, width: 155, height: 185, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
            <div style={{ background: '#e0e1e2', padding: '10px 12px', textAlign: 'center' }}>
              <span style={{ color: '#606669', fontSize: 14 }}>{title}</span>
            </div>
            <div style={{ padding: '12px 12px 0', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 4 }}>
              <p style={{ color: '#606669', fontSize: 11, margin: 0, lineHeight: 1.3, textAlign: 'center' }}>Surge in oil and gas prices, tragic accident in Japan, and a secret Liberal</p>
              <p style={{ color: '#ed5843', fontSize: 10, margin: 0, textAlign: 'center' }}>14min • 8:00 am</p>
            </div>
            <div style={{ padding: 12 }}>
              <div style={{ background: '#237d9b', borderRadius: 999, padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 3C7.5 3 4.5 6 4.5 10.5c0 2.3.8 4 2.3 5.5L12 21l5.2-5c1.5-1.5 2.3-3.2 2.3-5.5C19.5 6 16.5 3 12 3zM9 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                <span style={{ color: '#fff', fontSize: 13 }}>Select</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p style={{ color: C.mid, fontSize: 10, margin: 0 }}>Source prototype content illustrates layout, not research evidence.</p>
    </div>
  );
}

function StickyPlayerMockup() {
  return (
    <div style={{ background: '#fff', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth: 500 }}>
      <div style={{ flex: 1 }}>
        <p style={{ margin: '0 0 6px', fontSize: 14, color: '#202223' }}>Daily Briefing</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#202223', whiteSpace: 'nowrap' }}>12:15</span>
          <div style={{ flex: 1, position: 'relative', height: 16 }}>
            <div style={{ position: 'absolute', top: 6, left: 0, right: 0, height: 4, background: 'rgba(0,0,0,0.16)', borderRadius: 20 }} />
            <div style={{ position: 'absolute', top: 6, left: 0, width: '24%', height: 4, background: '#237d9b', borderRadius: 20 }} />
            <div style={{ position: 'absolute', top: 2, left: 'calc(24% - 6px)', width: 12, height: 12, background: '#237d9b', borderRadius: '50%' }} />
          </div>
          <span style={{ fontSize: 12, color: '#202223', whiteSpace: 'nowrap' }}>51:48</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.mid} strokeWidth="1.5">
          <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.59"/>
          <text x="7" y="15" fontSize="6" fill={C.mid} stroke="none">15</text>
        </svg>
        <div style={{ background: '#237d9b', borderRadius: '50%', width: 42, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.mid} strokeWidth="1.5">
          <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.49-3.59"/>
          <text x="7" y="15" fontSize="6" fill={C.mid} stroke="none">15</text>
        </svg>
      </div>
    </div>
  );
}

function NCDesign() {
  return (
    <section style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ display: 'flex', gap: 80, alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: 64 }}>
          <div style={{ flex: '0 0 auto', maxWidth: 560 }}>
            <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 16px' }}>04 / FROM EVIDENCE TO INTERFACE</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: C.dark, margin: 0, letterSpacing: '-1.5px', lineHeight: 1.15 }}>
              A clearer invitation. A more familiar listen.
            </h2>
          </div>
          <p style={{ flex: 1, color: C.mid, fontSize: 17, margin: 0, lineHeight: 1.65, minWidth: 240 }}>
            Source explorations translated the findings into three connected moments: discover, choose and control.
          </p>
        </div>

        {/* DISCOVER */}
        <div style={{ display: 'flex', gap: 56, alignItems: 'center', marginBottom: 64, flexWrap: 'wrap' }}>
          <div style={{ background: C.cardBg, padding: 28, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', flex: '0 0 auto', borderRadius: 4 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <span style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase' }}>ARTICLE ENTRY POINT</span>
              <span style={{ color: C.mid, fontSize: 10 }}>SOURCE EXPLORATION</span>
            </div>
            <ArticleCardMockup />
          </div>
          <div style={{ flex: 1, minWidth: 240, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: 0 }}>DISCOVER / REMOVE THE FIRST BARRIER</p>
            <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: C.dark, margin: 0, letterSpacing: '-1px', lineHeight: 1.15 }}>
              Make listening an obvious next step.
            </h3>
            <p style={{ color: C.mid, fontSize: 16, margin: 0, lineHeight: 1.65 }}>
              The article exploration brought an audio action and duration close to the headline, rather than asking readers to find audio elsewhere.
            </p>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 28, height: 28, border: `1px solid ${C.blue}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: C.blue, fontSize: 11 }}>A</span>
              </div>
              <div>
                <p style={{ color: C.dark, fontSize: 15, fontWeight: 600, margin: '0 0 6px' }}>The next refinement</p>
                <p style={{ color: C.mid, fontSize: 14, lineHeight: 1.65, margin: 0 }}>Pair a prominent "Listen" label with duration, and make Save and Share unambiguous. Test recognition rather than relying on an icon alone.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CHOOSE */}
        <div style={{ display: 'flex', gap: 56, alignItems: 'center', marginBottom: 64, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 240, display: 'flex', flexDirection: 'column', gap: 20, order: -1 }}>
            <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: 0 }}>CHOOSE / PREVIEW THE COMMITMENT</p>
            <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: C.dark, margin: 0, letterSpacing: '-1px', lineHeight: 1.15 }}>
              Help people choose before they press play.
            </h3>
            <p style={{ color: C.mid, fontSize: 16, margin: 0, lineHeight: 1.65 }}>
              Briefing explorations compared compact cards and a more distinct selection treatment. Research favoured Quick Update and made the value of topic previews and duration clear.
            </p>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 28, height: 28, border: `1px solid ${C.blue}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: C.blue, fontSize: 11 }}>B</span>
              </div>
              <div>
                <p style={{ color: C.dark, fontSize: 15, fontWeight: 600, margin: '0 0 6px' }}>Build on the card exploration</p>
                <p style={{ color: C.mid, fontSize: 14, lineHeight: 1.65, margin: 0 }}>Surface story titles, categories and durations; explore story navigation and a transcript. Timestamp feasibility remains an open question.</p>
              </div>
            </div>
          </div>
          <div style={{ background: C.cardBg, padding: 28, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', flex: '0 0 auto', borderRadius: 4 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <span style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase' }}>DAILY BRIEFING</span>
              <span style={{ color: C.mid, fontSize: 10 }}>CARD TREATMENT EXPLORATION</span>
            </div>
            <BriefingCardsMockup />
          </div>
        </div>

        {/* CONTROL */}
        <div style={{ background: C.cardBg, padding: '36px 40px', display: 'flex', gap: 56, alignItems: 'center', flexWrap: 'wrap', borderRadius: 4, marginBottom: 48 }}>
          <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 520 }}>
            <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: 0 }}>CONTROL / KEEP THE LISTENER IN CHARGE</p>
            <StickyPlayerMockup />
            <p style={{ color: C.mid, fontSize: 11, margin: 0 }}>Source sticky-player component, with a descriptive briefing label.</p>
          </div>
          <div style={{ flex: 1, minWidth: 240, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: C.dark, margin: 0, lineHeight: 1.3 }}>Small player. Familiar expectations.</h3>
            <p style={{ color: C.mid, fontSize: 14, lineHeight: 1.65, margin: 0 }}>Make the sticky player tappable to expand. Prioritise skip back/forward, playback speed and elapsed/total time over voice selection. These are recommendations to validate—not shipped functionality.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

function NCPriorities() {
  const rows = [
    {
      tier: 'START HERE',
      color: C.blue,
      title: 'Make audio discoverable',
      items: ['Listen button in article toolbar', 'Surface audio in home feed', 'Onboarding prompt for new users'],
    },
    {
      tier: 'BUILD CONFIDENCE',
      color: '#2ecc71',
      title: 'Make playback predictable',
      items: ['Duration + topic preview on all audio cards', 'Skip, speed, and resume controls in sticky player', 'Consistent audio icon system across the app'],
    },
    {
      tier: 'DEEPEN THE HABIT',
      color: '#f39c12',
      title: 'Fit audio to real routines',
      items: ['Commute-ready Daily Briefing (15–20 min)', 'Morning push notification at peak listening times', 'Cross-session resume so users pick up where they left off'],
    },
  ];
  return (
    <section style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 16px' }}>05 / RESEARCH-LED PRIORITIES</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: C.dark, margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          Start with the path to play.
        </h2>
        <p style={{ color: C.mid, fontSize: 16, maxWidth: 560, margin: '0 0 56px', lineHeight: 1.65 }}>
          Recommendations ordered by research evidence and implementation effort — designed to compound over time.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, borderRadius: 8, overflow: 'hidden', border: `1px solid ${C.border}` }}>
          {rows.map(({ tier, color, title, items }) => (
            <div key={tier} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 0 }}>
              <div style={{ background: color, padding: '24px 20px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', lineHeight: 1.4 }}>{tier}</span>
              </div>
              <div style={{ background: C.grayBg, padding: '24px 28px', borderBottom: `1px solid ${C.border}` }}>
                <p style={{ color: C.dark, fontSize: 15, fontWeight: 600, margin: '0 0 12px' }}>{title}</p>
                <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {items.map(item => (
                    <li key={item} style={{ color: C.mid, fontSize: 14, lineHeight: 1.5 }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24, padding: '20px 24px', background: C.cardBg, borderRadius: 8, borderLeft: `3px solid ${C.border}` }}>
          <p style={{ color: C.mid, fontSize: 13, margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: C.dark }}>Quality throughout:</strong> Regardless of tier, every touchpoint should reflect the quality of The Australian's journalism — legible type, appropriate contrast, predictable interaction patterns.
          </p>
        </div>
      </div>
    </section>
  );
}

function NCLearnings() {
  const measures = [
    { label: 'DISCOVERY', text: 'Increase in audio starts from article pages — indicating the entry point works.' },
    { label: 'RETENTION', text: 'Improvement in listen-completion rate — showing content length matches user context.' },
    { label: 'HABIT', text: 'Growth in weekly returning audio users — the signal that routine is forming.' },
  ];
  return (
    <section style={{ background: C.navy, padding: '80px 32px 64px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: C.navyMid, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 16px' }}>06 / THE TAKEAWAY</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#fff', margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          A listening habit starts<br />before the first sound.
        </h2>
        <p style={{ color: C.navyMid, fontSize: 16, maxWidth: 560, margin: '0 0 64px', lineHeight: 1.65 }}>
          Discovery was the real design problem. Once users found audio and understood what it offered, they wanted to use it again. The friction lived before the play button, not after.
        </p>
        <h3 style={{ color: C.navyMid, fontSize: 13, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 24px' }}>What success would measure</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 64 }}>
          {measures.map(({ label, text }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 8, padding: '24px 20px' }}>
              <p style={{ color: C.navyMid, fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', margin: '0 0 10px' }}>{label}</p>
              <p style={{ color: '#fff', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid rgba(255,255,255,0.12)`, paddingTop: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ color: '#fff', fontSize: 18, fontWeight: 600, margin: '0 0 4px' }}>Venus Valdivia</p>
              <p style={{ color: C.navyMid, fontSize: 13, margin: 0 }}>UX Research · Audio Experience · News Corp 2024</p>
            </div>
            <a href="#" style={{ color: C.navyMid, fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}
               onMouseEnter={e => e.target.style.color = '#fff'}
               onMouseLeave={e => e.target.style.color = C.navyMid}>
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseNewscorpPage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <NCHero />
      <NCOverview />
      <NCResearch />
      <NCInsights />
      <NCDesign />
      <NCPriorities />
      <NCLearnings />
    </div>
  );
}
