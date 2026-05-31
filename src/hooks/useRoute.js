import { useState, useEffect } from 'react';

export function useRoute() {
  const getRoute = () => {
    const h = (window.location.hash || '').replace(/^#\/?/, '').split('?')[0];
    if (h === 'about') return 'about';
    if (h === 'projects') return 'projects';
    if (h === 'case-atlassian') return 'case-atlassian';
    if (h === 'case-soonday') return 'case-soonday';
    if (h === 'case-ai-engineering') return 'case-ai-engineering';
    return 'home';
  };

  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = (e) => {
      // Track the previous hash so case-study pages can render a smart Back button.
      try {
        if (e && e.oldURL) {
          const old = new URL(e.oldURL).hash || '';
          sessionStorage.setItem('vv-prev-hash', old);
        }
      } catch (err) { /* ignore */ }
      setRoute(getRoute());
      // Scroll to top on route change (not for in-page anchors)
      const h = (window.location.hash || '').replace(/^#\/?/, '');
      if (h === 'about' || h === 'projects' || h.startsWith('case-') || h === '' || h === 'top') {
        window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      }
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return route;
}
