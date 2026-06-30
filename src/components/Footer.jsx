import { Caps } from './atoms.jsx';

export function Footer() {
  return (
    <footer className="vv-footer">
      <div className="vv-container vv-footer-inner">
        <div className="vv-footer-l">
          <Caps>© 2026 Venus Valdivia</Caps>
        </div>
        <div className="vv-footer-r">
          {['LinkedIn', 'Download.cv'].map((x) => (
            <a
              key={x}
              href={x === 'LinkedIn' ? 'https://www.linkedin.com/in/venus-darmody-6016791a' : '/images/venus%20UX%202026.pdf'}
              {...(x === 'Download CV' ? { download: 'venus UX 2026.pdf' } : {})}
              target={x === 'LinkedIn' ? '_blank' : undefined}
              rel={x === 'LinkedIn' ? 'noreferrer noopener' : undefined}
            >
              {x}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
