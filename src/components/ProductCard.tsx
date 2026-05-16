import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price_range: string;
  image_url: string;
  featured: boolean;
  details: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#161616',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(200, 169, 110, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(200,169,110,0.08)' : '0 4px 20px rgba(0,0,0,0.2)',
        cursor: 'pointer',
      }}
    >
      <div style={{
        position: 'relative',
        height: '280px',
        overflow: 'hidden',
        background: '#1A1A1A',
      }}>
        {!imageLoaded && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #1A1A1A, #222)',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '2px solid rgba(200,169,110,0.2)',
              borderTopColor: '#C8A96E',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }} />
          </div>
        )}
        <img
          src={product.image_url}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            opacity: imageLoaded ? 1 : 0,
          }}
        />
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          background: product.category === 'turkish'
            ? 'rgba(200, 169, 110, 0.9)'
            : 'rgba(180, 60, 60, 0.9)',
          color: product.category === 'turkish' ? '#0F0F0F' : '#FFF',
        }}>
          {product.category}
        </div>
        {product.featured && (
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            fontWeight: 600,
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            color: '#F5F0E8',
          }}>
            Featured
          </div>
        )}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(transparent, rgba(22,22,22,0.9))',
        }} />
      </div>

      <div style={{ padding: '24px' }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#F5F0E8',
          marginBottom: '8px',
          lineHeight: 1.3,
        }}>
          {product.name}
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#909090',
          lineHeight: 1.6,
          marginBottom: '16px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {product.description}
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#C8A96E',
          }}>
            {product.price_range}
          </span>
          <span style={{
            fontSize: '12px',
            color: hovered ? '#C8A96E' : '#606060',
            transition: 'color 0.3s ease',
            fontWeight: 500,
          }}>
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
}
