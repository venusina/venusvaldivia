const C = {
  blue: '#2459d3', dark: '#142033', mid: '#5d6878',
  grayBg: '#f7f8fa', cardBg: '#eef2f8', border: '#dce2ea',
  navy: '#0d2041', navyMid: '#b9c7dd',
  scGreen: '#19a974', scGreenLight: '#e8f7f0',
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

function SCHero() {
  return (
    <section style={{ background: '#fff', padding: '64px 0 0' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px' }}>
        <BackBtn />
        <p style={{ color: C.scGreen, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 20px' }}>
          SAFETYCULTURE / ORGANISATION GROWTH
        </p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 700, color: C.dark, margin: '0 0 20px', lineHeight: 1.08, letterSpacing: '-2px' }}>
          Invite more people.<br />Build better teams.
        </h1>
        <p style={{ color: C.mid, fontSize: 16, maxWidth: 560, margin: '0 0 40px', lineHeight: 1.65 }}>
          Redesigning SafetyCulture's organisation invitation flow to increase the number of users successfully joining their team.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
          {['PRODUCT DESIGN', 'GROWTH', 'USER RESEARCH'].map(t => (
            <span key={t} style={{ background: C.scGreenLight, color: C.scGreen, fontSize: 11, fontWeight: 600, letterSpacing: '1.2px', padding: '6px 12px', borderRadius: 4 }}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 32px 64px' }}>
        <div style={{ background: C.cardBg, borderRadius: 12, overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/safetyculture/sc-hero.png"
            alt="SafetyCulture organisation invitation UI"
            style={{ maxWidth: '100%', display: 'block', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}

function SCGoal() {
  return (
    <section style={{ background: C.navy, padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: C.navyMid, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 24px' }}>BUSINESS GOAL</p>
        <blockquote style={{ margin: 0, padding: 0 }}>
          <p style={{ color: '#fff', fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-1.5px', margin: '0 0 32px' }}>
            "To increase number of users that get invited into the organisation."
          </p>
        </blockquote>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {[
            { label: 'ROLE', value: 'Product Designer' },
            { label: 'FOCUS', value: 'Growth & Onboarding' },
            { label: 'YEAR', value: '2021' },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 8, padding: '20px 24px' }}>
              <p style={{ color: C.navyMid, fontSize: 11, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', margin: '0 0 6px' }}>{label}</p>
              <p style={{ color: '#fff', fontSize: 15, margin: 0 }}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SCCustomerData() {
  const kustomerIssues = [
    { title: 'Wrong organisation', desc: 'Users land in the incorrect organisation due to current functionality — joining the wrong account on sign-up.' },
    { title: 'Region error', desc: 'Users trying to invite someone from a different data centre encounter a region error that blocks the invite.' },
    { title: 'Existing org conflict', desc: 'Users already in an existing org must be manually removed by customer support before they can accept a new invite.' },
    { title: 'Usability gaps', desc: 'The login process has confusing interface design or unclear instructions — users don\'t know what step to take next.' },
    { title: 'Reliability issues', desc: 'Customers report the flow "doesn\'t seem to be working" — the experience doesn\'t behave predictably.' },
  ];
  return (
    <section style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 16px' }}>01 / CUSTOMER DATA</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: C.dark, margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          Insights from Kustomer
        </h2>
        <p style={{ color: C.mid, fontSize: 16, maxWidth: 640, margin: '0 0 48px', lineHeight: 1.65 }}>
          Customer support tickets revealed a pattern of invitation failures across five recurring problem types.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 56 }}>
          {kustomerIssues.map(({ title, desc }) => (
            <div key={title} style={{ background: C.grayBg, borderRadius: 8, padding: '24px 20px', borderLeft: `3px solid ${C.scGreen}` }}>
              <p style={{ color: C.dark, fontSize: 15, fontWeight: 600, margin: '0 0 8px' }}>{title}</p>
              <p style={{ color: C.mid, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', background: C.cardBg, borderRadius: 8, padding: 24 }}>
          <img
            src="/images/safetyculture/sc-data.png"
            alt="Customer data breakdown: Kustomer donut chart and support team quotes"
            style={{ maxWidth: '100%', display: 'block', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}

function SCResearch() {
  return (
    <section style={{ background: C.grayBg, padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 16px' }}>02 / CUSTOMER SUPPORT TEAM</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: C.dark, margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          Insights from the support team
        </h2>
        <p style={{ color: C.mid, fontSize: 16, maxWidth: 640, margin: '0 0 48px', lineHeight: 1.65 }}>
          Major issues arise when a new user registers for a free account outside the organisation. This action allows them to establish a new organisation, leading to confusion.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', background: '#fff', borderRadius: 8, padding: 24, marginBottom: 56 }}>
          <img
            src="/images/safetyculture/sc-research.png"
            alt="Insights from the Customer support team — research wall"
            style={{ maxWidth: '100%', display: 'block', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}

function SCPainPoints() {
  const points = [
    'When an invite link has been sent, if user already exists in a different org they will need to be removed to be able to join the new org',
    'Customers that have been told to join SC create a sign up and they end up creating a new org',
    'Difficult tracking which company has sent a document — users don\'t have the capability to switch organisations',
    'Pending invites are confusing',
    'Some users may not receive the email invitation that was sent',
    'Unclear who can invite others and if they can invite people who are not authorised to view certain documents',
    'Confusion on how to add more than 1 person to the organisation',
    'Pending state for added-but-not-logged-in user is ambiguous',
    'Confusion on how to delete your own org, replacing and removing users (opportunity to introduce a deactivate state)',
  ];
  return (
    <section style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 16px' }}>03 / WHAT WE KNOW</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: C.dark, margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          Customer pain points
        </h2>
        <p style={{ color: C.mid, fontSize: 16, maxWidth: 640, margin: '0 0 48px', lineHeight: 1.65 }}>
          Combining Kustomer data and support team interviews surfaced 9 recurring friction points in the invitation flow.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {points.map((point, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 0 }}>
              <div style={{ background: C.scGreenLight, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '18px 0' }}>
                <span style={{ color: C.scGreen, fontSize: 12, fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div style={{ background: C.grayBg, padding: '16px 24px', borderBottom: `1px solid ${C.border}` }}>
                <p style={{ color: C.dark, fontSize: 15, lineHeight: 1.6, margin: 0 }}>{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SCExploration() {
  return (
    <section style={{ background: C.grayBg, padding: '80px 32px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: C.blue, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 16px' }}>04 / EXPLORATION</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: C.dark, margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          Quick invite
        </h2>
        <p style={{ color: C.mid, fontSize: 16, maxWidth: 640, margin: '0 0 48px', lineHeight: 1.65 }}>
          Streamline the invitation process by implementing a more user-friendly method. This approach includes the convenience of adding multiple users simultaneously, as well as the flexibility to specify permission types and seamlessly add individuals to a preferred site or group.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', background: '#fff', borderRadius: 8, padding: 24 }}>
          <img
            src="/images/safetyculture/sc-exploration.png"
            alt="Quick invite UI exploration with annotation sticky notes"
            style={{ maxWidth: '100%', display: 'block', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}

function SCLearnings() {
  const opportunities = [
    { label: 'DISCOVERY', title: 'Surface the invite flow earlier', desc: 'Make it obvious how to invite team members from the first session — before users encounter blockers.' },
    { label: 'RECOVERY', title: 'Handle edge cases gracefully', desc: 'Existing org conflicts and region errors need clear messaging and self-service paths — not a support ticket.' },
    { label: 'CLARITY', title: 'Simplify the pending state', desc: 'Users need to understand what happens after they send an invite. A clear pending UI removes the guesswork.' },
  ];
  return (
    <section style={{ background: C.navy, padding: '80px 32px 64px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <p style={{ color: C.navyMid, fontSize: 11, fontWeight: 600, letterSpacing: '1.3px', textTransform: 'uppercase', margin: '0 0 16px' }}>05 / DESIGN OPPORTUNITIES</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#fff', margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          An invitation should feel<br />like a welcome.
        </h2>
        <p style={{ color: C.navyMid, fontSize: 16, maxWidth: 560, margin: '0 0 56px', lineHeight: 1.65 }}>
          The research made clear that the invitation flow isn't just a technical handshake — it's the first experience a new team member has of your organisation's culture.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 64 }}>
          {opportunities.map(({ label, title, desc }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 8, padding: '28px 24px', borderTop: `3px solid ${C.scGreen}` }}>
              <p style={{ color: C.scGreen, fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', margin: '0 0 10px' }}>{label}</p>
              <p style={{ color: '#fff', fontSize: 16, fontWeight: 600, margin: '0 0 10px' }}>{title}</p>
              <p style={{ color: C.navyMid, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid rgba(255,255,255,0.12)`, paddingTop: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ color: '#fff', fontSize: 18, fontWeight: 600, margin: '0 0 4px' }}>Venus Valdivia</p>
              <p style={{ color: C.navyMid, fontSize: 13, margin: 0 }}>Product Design · Growth · SafetyCulture 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseSafetyCulturePage() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <SCHero />
      <SCGoal />
      <SCCustomerData />
      <SCResearch />
      <SCPainPoints />
      <SCExploration />
      <SCLearnings />
    </div>
  );
}
