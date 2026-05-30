import React from 'react';

export default function Nav({ activePage }) {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services and Solutions' },
    { href: '/resources', label: 'Free Resources' },
    { href: '/case-studies', label: 'Case Studies' },
  ];

  return (
    <>
      <nav className="wk-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div onClick={() => (window.location.href = '/')}
            style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#dc692f', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>WK</span>
          </div>
          <span style={{ fontWeight: '600', fontSize: '20px', color: '#7d472a' }}>White Kim</span>
        </div>

        <div className="wk-nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              color: activePage === l.href ? '#dc692f' : '#7d472a',
              textDecoration: 'none',
              fontWeight: activePage === l.href ? '600' : '500',
              fontSize: '14px',
              borderBottom: activePage === l.href ? '2px solid #dc692f' : 'none',
              paddingBottom: activePage === l.href ? '2px' : '0',
            }}>{l.label}</a>
          ))}
        </div>

        <a href="/book-a-call" className="wk-nav-cta" style={{ textDecoration: 'none' }}>
          <button style={{ color: 'white', backgroundColor: '#dc692f', padding: '12px 28px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', whiteSpace: 'nowrap' }}>
            BOOK A CALL
          </button>
        </a>

        <button className="wk-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`wk-mobile-nav ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}
            style={{ color: activePage === l.href ? '#dc692f' : '#7d472a' }}>
            {l.label}
          </a>
        ))}
        <a href="/book-a-call" onClick={() => setOpen(false)} style={{ color: '#dc692f', fontWeight: '700' }}>
          Book a Call
        </a>
      </div>
    </>
  );
}
