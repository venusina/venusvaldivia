import { lazy, Suspense, useState, useEffect } from 'react';
import { useRoute } from './hooks/useRoute.js';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { MobileMenu } from './components/MobileMenu.jsx';
import { HeroEditorial, HeroMinimal, HeroImage } from './components/Hero.jsx';
import { LatestProjects } from './components/LatestProjects.jsx';
import { VibeSection } from './components/VibeSection.jsx';
import { FactsStrip } from './components/FactsStrip.jsx';
import { ContactSection } from './components/ContactSection.jsx';
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'));
const CaseAtlassianPage = lazy(() => import('./pages/CaseAtlassianPage.jsx'));
const CaseSoondayPage = lazy(() => import('./pages/CaseSoondayPage.jsx'));
const CaseAIEngineeringPage = lazy(() => import('./pages/CaseAIEngineeringPage.jsx'));
import {
  TweaksPanel,
  TweakSection,
  TweakRadio,
  TweakColor,
  TweakSelect,
  useTweaks,
} from './components/TweaksPanel.jsx';

const VIEWPORTS = {
  mobile: { w: 390, label: 'Mobile · 390' },
  tablet: { w: 820, label: 'Tablet · 820' },
  desktop: { w: 1280, label: 'Desktop · 1280' },
  fluid: { w: null, label: 'Fluid · fit' }
};

function ViewportFrame({ viewport, children }) {
  const v = VIEWPORTS[viewport] || VIEWPORTS.mobile;

  if (!v.w) {
    return (
      <div className="vv-viewport-fluid">
        <div className="vv-viewport-label-floating">{v.label}</div>
        <div className="vv-viewport-fluid-inner">{children}</div>
      </div>
    );
  }

  return (
    <div className="vv-viewport-wrap">
      <div className="vv-viewport-label">{v.label}</div>
      <div className="vv-viewport-frame" style={{ width: v.w, maxWidth: '100%' }}>
        {children}
      </div>
    </div>
  );
}

function Site({ tweaks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const accent = tweaks.accent;
  const route = useRoute();

  useEffect(() => {
    if (menuOpen) {
      const el = document.body;
      const prev = el.style.overflow;
      el.style.overflow = 'hidden';
      return () => { el.style.overflow = prev; };
    }
  }, [menuOpen]);

  const Hero = tweaks.hero === 'minimal' ? HeroMinimal :
    tweaks.hero === 'image' ? HeroImage :
    HeroEditorial;

  return (
    <div className="vv-site" data-screen-label={`Venus Valdivia · ${route}`}>
      <Header accent={accent} onOpenMenu={() => setMenuOpen(true)} />
      <main>
        <Suspense fallback={null}>
          {route === 'about' ? (
            <AboutPage accent={accent} />
          ) : route === 'projects' ? (
            <ProjectsPage accent={accent} />
          ) : route === 'case-atlassian' ? (
            <CaseAtlassianPage accent={accent} />
          ) : route === 'case-soonday' ? (
            <CaseSoondayPage accent={accent} />
          ) : route === 'case-ai-engineering' ? (
            <CaseAIEngineeringPage accent={accent} />
          ) : (
            <>
              <Hero accent={accent} />
              <LatestProjects cardVariant={tweaks.cardStyle} accent={accent} />
              <FactsStrip accent={accent} />
              <VibeSection accent={accent} />
              <ContactSection accent={accent} />
            </>
          )}
        </Suspense>
      </main>
      <Footer />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} accent={accent} />
    </div>
  );
}

export default function App() {
  const TWEAK_DEFAULTS = {
    "viewport": "fluid",
    "hero": "editorial",
    "cardStyle": "outlined",
    "accent": "#000000"
  };

  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  return (
    <>
      <ViewportFrame viewport={tweaks.viewport} key={tweaks.viewport}>
        <Site tweaks={tweaks} />
      </ViewportFrame>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Preview viewport">
          <TweakSelect
            label="Width"
            value={tweaks.viewport}
            options={[
              { value: 'mobile', label: 'Mobile · 390px' },
              { value: 'tablet', label: 'Tablet · 820px' },
              { value: 'desktop', label: 'Desktop · 1280px' },
              { value: 'fluid', label: 'Fluid · fit window' },
            ]}
            onChange={(v) => setTweak('viewport', v)}
          />
        </TweakSection>
        <TweakSection label="Hero layout">
          <TweakRadio
            label="Style"
            value={tweaks.hero}
            options={[
              { value: 'editorial', label: 'Editorial' },
              { value: 'minimal', label: 'Minimal' },
              { value: 'image', label: 'Image' },
            ]}
            onChange={(v) => setTweak('hero', v)}
          />
        </TweakSection>
        <TweakSection label="Project cards">
          <TweakRadio
            label="Card style"
            value={tweaks.cardStyle}
            options={[
              { value: 'outlined', label: 'Outlined' },
              { value: 'editorial', label: 'Editorial' },
            ]}
            onChange={(v) => setTweak('cardStyle', v)}
          />
        </TweakSection>
        <TweakSection label="Accent">
          <TweakColor
            label="Accent color"
            value={tweaks.accent}
            options={['#000000', '#3a4d2a', '#5a1f24', '#1f3a5f', '#b54a1d']}
            onChange={(v) => setTweak('accent', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}
