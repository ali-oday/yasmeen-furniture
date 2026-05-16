import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: '#0A0A0A',
      borderTop: '1px solid rgba(200, 169, 110, 0.1)',
      padding: '64px 24px 32px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '48px',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #C8A96E, #A07D4A)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 700,
              color: '#0F0F0F',
            }}>AY</div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#F5F0E8' }}>Al Yasmeen</div>
              <div style={{ fontSize: '9px', color: '#C8A96E', letterSpacing: '2px', textTransform: 'uppercase' }}>Furniture Complex</div>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: '#808080', lineHeight: 1.7, maxWidth: '300px' }}>
            Premium imported bedroom furniture from Turkey and China, bringing world-class craftsmanship to your home.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#C8A96E', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { path: '/', label: 'Home' },
              { path: '/products', label: 'Products' },
              { path: '/contact', label: 'Contact Us' },
            ].map(({ path, label }) => (
              <Link key={path} to={path} style={{
                textDecoration: 'none',
                fontSize: '14px',
                color: '#808080',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#F5F0E8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#808080'; }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#C8A96E', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>Collections</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/products?category=turkish" style={{
              textDecoration: 'none',
              fontSize: '14px',
              color: '#808080',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#F5F0E8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#808080'; }}
            >
              Turkish Bedrooms
            </Link>
            <Link to="/products?category=chinese" style={{
              textDecoration: 'none',
              fontSize: '14px',
              color: '#808080',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#F5F0E8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#808080'; }}
            >
              Chinese Bedrooms
            </Link>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#C8A96E', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase' }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#808080' }}>
            <span>Baghdad, Iraq</span>
            <span>+964 770 123 4567</span>
            <span>info@alyasmeen.com</span>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1280px',
        margin: '48px auto 0',
        paddingTop: '24px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <p style={{ fontSize: '13px', color: '#505050' }}>
          &copy; {new Date().getFullYear()} Al Yasmeen Furniture Complex. All rights reserved.
        </p>
        <p style={{ fontSize: '13px', color: '#505050' }}>
          Crafted with passion for exceptional living
        </p>
      </div>
    </footer>
  );
}
