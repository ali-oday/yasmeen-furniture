import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(15, 15, 15, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(200, 169, 110, 0.15)' : '1px solid transparent',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
      }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #C8A96E, #A07D4A)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 700,
            color: '#0F0F0F',
          }}>AY</div>
          <div>
            <div style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#F5F0E8',
              letterSpacing: '0.5px',
              lineHeight: 1.2,
            }}>Al Yasmeen</div>
            <div style={{
              fontSize: '10px',
              color: '#C8A96E',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}>Furniture Complex</div>
          </div>
        </Link>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }} className="nav-links">
          {[
            { path: '/', label: 'Home' },
            { path: '/products', label: 'Products' },
            { path: '/contact', label: 'Contact Us' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              style={{
                textDecoration: 'none',
                padding: '8px 20px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: isActive(path) ? 600 : 400,
                color: isActive(path) ? '#C8A96E' : '#A0A0A0',
                background: isActive(path) ? 'rgba(200, 169, 110, 0.1)' : 'transparent',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => {
                if (!isActive(path)) {
                  e.currentTarget.style.color = '#F5F0E8';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(path)) {
                  e.currentTarget.style.color = '#A0A0A0';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
          aria-label="Toggle menu"
        >
          <div style={{
            width: '24px',
            height: '2px',
            background: '#C8A96E',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
          }} />
          <div style={{
            width: '24px',
            height: '2px',
            background: '#C8A96E',
            borderRadius: '2px',
            marginTop: '6px',
            transition: 'all 0.3s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <div style={{
            width: '24px',
            height: '2px',
            background: '#C8A96E',
            borderRadius: '2px',
            marginTop: '6px',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
          }} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" style={{
          background: 'rgba(15, 15, 15, 0.98)',
          padding: '24px',
          borderTop: '1px solid rgba(200, 169, 110, 0.15)',
        }}>
          {[
            { path: '/', label: 'Home' },
            { path: '/products', label: 'Products' },
            { path: '/contact', label: 'Contact Us' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              style={{
                display: 'block',
                textDecoration: 'none',
                padding: '16px 0',
                fontSize: '16px',
                fontWeight: isActive(path) ? 600 : 400,
                color: isActive(path) ? '#C8A96E' : '#A0A0A0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
