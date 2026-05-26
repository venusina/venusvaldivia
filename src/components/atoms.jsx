export function Caps({ children, color, style, className }) {
  return (
    <span className={className} style={{
      fontFamily: 'Epilogue, sans-serif',
      fontSize: 11,
      letterSpacing: '0.14em',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: color || 'var(--muted)',
      ...style
    }}>{children}</span>
  );
}

export function MIcon({ name, size = 22, weight = 400, fill = 0, style }) {
  return (
    <span
      className="material-symbols-outlined"
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
        lineHeight: 1,
        ...style,
        color: style?.color || 'currentColor'
      }}>
      {name}
    </span>
  );
}
