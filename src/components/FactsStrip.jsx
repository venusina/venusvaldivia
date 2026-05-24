export function FactsStrip({ accent }) {
  const facts = [
    { k: '11', v: 'Years\ndesigning' },
    { k: '24', v: 'Products\nshipped' },
    { k: '8', v: 'Industries\nworked in' },
    { k: '∞', v: 'Coffee\nconsumed' },
  ];

  return (
    <section className="vv-section vv-section-facts">
      <div className="vv-container">
        <div className="vv-facts">
          {facts.map((f, i) => (
            <div key={i} className={`vv-fact ${i === 0 ? 'is-accent' : ''}`} style={i === 0 ? { background: accent } : null}>
              <div className="vv-fact-k">{f.k}</div>
              <div className="vv-fact-v">{f.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
