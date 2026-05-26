import { Caps } from './atoms.jsx';

export function Footer() {
  return (
    <footer className="vv-footer">
      <div className="vv-container vv-footer-inner">
        <div className="vv-footer-l">
          <Caps>© 2026 Venus Valdivia · All rights reserved</Caps>
        </div>
        <div className="vv-footer-r">
          {['LinkedIn', 'Read.cv', 'Are.na', 'Privacy'].map((x) => (
            <a
              key={x}
              href={x === 'LinkedIn' ? 'https://www.linkedin.com/in/venus-valdivia-darmody-6016791a/' : '#'}
              target={x === 'LinkedIn' ? '_blank' : undefined}
              rel={x === 'LinkedIn' ? 'noopener noreferrer' : undefined}
            >
              {x}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
