import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

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

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('featured', true)
        .order('created_at', { ascending: true });
      setFeaturedProducts(data || []);
      setLoading(false);
    })();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0F0F0F',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(200,169,110,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(200,169,110,0.04) 0%, transparent 50%)',
        }} />
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,169,110,0.06), transparent 70%)',
          filter: 'blur(60px)',
        }} />

        <div style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '900px',
          padding: '0 24px',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 24px',
            borderRadius: '24px',
            border: '1px solid rgba(200,169,110,0.2)',
            background: 'rgba(200,169,110,0.05)',
            marginBottom: '32px',
            fontSize: '13px',
            color: '#C8A96E',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}>
            Premium Imported Furniture
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 700,
            color: '#F5F0E8',
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-1px',
          }}>
            Where Elegance<br />
            Meets <span style={{
              background: 'linear-gradient(135deg, #C8A96E, #E8D5A8, #C8A96E)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Craftsmanship</span>
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#909090',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 48px',
          }}>
            Discover our exclusive collection of Turkish and Chinese imported bedrooms, each piece a masterpiece of design and durability.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" style={{
              textDecoration: 'none',
              padding: '16px 40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #C8A96E, #A07D4A)',
              color: '#0F0F0F',
              fontSize: '15px',
              fontWeight: 600,
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(200,169,110,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,169,110,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(200,169,110,0.3)';
            }}
            >
              Explore Collection
            </Link>
            <Link to="/contact" style={{
              textDecoration: 'none',
              padding: '16px 40px',
              borderRadius: '12px',
              border: '1px solid rgba(200,169,110,0.3)',
              color: '#C8A96E',
              fontSize: '15px',
              fontWeight: 500,
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(200,169,110,0.08)';
              e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(200,169,110,0.3)';
            }}
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ fontSize: '11px', color: '#606060', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(180deg, #C8A96E, transparent)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        background: '#0A0A0A',
        padding: '80px 24px',
        borderTop: '1px solid rgba(200,169,110,0.08)',
        borderBottom: '1px solid rgba(200,169,110,0.08)',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          textAlign: 'center',
        }}>
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '500+', label: 'Bedrooms Delivered' },
            { value: '2', label: 'Import Origins' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div style={{
                fontSize: '48px',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #C8A96E, #E8D5A8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.2,
                marginBottom: '8px',
              }}>{value}</div>
              <div style={{ fontSize: '14px', color: '#808080', letterSpacing: '1px' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section style={{
        background: '#0F0F0F',
        padding: '120px 24px',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '13px',
              color: '#C8A96E',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '16px',
              fontWeight: 500,
            }}>Our Collection</span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 700,
              color: '#F5F0E8',
              marginBottom: '16px',
            }}>Featured Bedrooms</h2>
            <p style={{ fontSize: '16px', color: '#808080', maxWidth: '500px', margin: '0 auto' }}>
              Handpicked selections from our Turkish and Chinese collections, each representing the finest in imported furniture.
            </p>
          </div>

          {loading ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '32px',
            }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{
                  background: '#161616',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(200,169,110,0.08)',
                }}>
                  <div style={{ height: '280px', background: '#1A1A1A' }} />
                  <div style={{ padding: '24px' }}>
                    <div style={{ height: '20px', background: '#222', borderRadius: '4px', marginBottom: '12px', width: '60%' }} />
                    <div style={{ height: '14px', background: '#222', borderRadius: '4px', marginBottom: '8px', width: '90%' }} />
                    <div style={{ height: '14px', background: '#222', borderRadius: '4px', width: '70%' }} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '32px',
            }}>
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <Link to="/products" style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              borderRadius: '12px',
              border: '1px solid rgba(200,169,110,0.3)',
              color: '#C8A96E',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(200,169,110,0.08)';
              e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(200,169,110,0.3)';
            }}
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section style={{
        background: '#0A0A0A',
        padding: '120px 24px',
        borderTop: '1px solid rgba(200,169,110,0.08)',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '13px',
              color: '#C8A96E',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '16px',
              fontWeight: 500,
            }}>Our Heritage</span>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 700,
              color: '#F5F0E8',
            }}>Two Traditions, One Standard</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '32px',
          }}>
            {[
              {
                origin: 'Turkish',
                title: 'Ottoman Grandeur',
                description: 'From the workshops of Istanbul and Anatolia, our Turkish collection brings centuries of woodworking mastery. Each piece carries the legacy of Ottoman artistry — intricate carvings, rich fabrics, and an unmistakable sense of grandeur that transforms any bedroom into a palace.',
                accent: '#C8A96E',
                image: 'https://images.pexels.com/photos/271739/pexels-photo-271739.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                origin: 'Chinese',
                title: 'Dynastic Refinement',
                description: 'Sourced from master craftsmen across China, our Chinese collection embodies the philosophy of harmony and precision. Mortise-and-tenon joinery, hand-painted lacquer, and balanced proportions create bedrooms that are both meditative and magnificent.',
                accent: '#B43C3C',
                image: 'https://images.pexels.com/photos/279636/pexels-photo-279636.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map(({ origin, title, description, accent, image }) => (
              <div key={origin} style={{
                background: '#161616',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(200,169,110,0.08)',
              }}>
                <div style={{
                  height: '240px',
                  background: `url(${image}) center/cover`,
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(transparent 40%, #161616)',
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    padding: '8px 20px',
                    borderRadius: '24px',
                    background: accent,
                    color: origin === 'Turkish' ? '#0F0F0F' : '#FFF',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}>
                    {origin}
                  </div>
                </div>
                <div style={{ padding: '32px' }}>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#F5F0E8',
                    marginBottom: '16px',
                  }}>{title}</h3>
                  <p style={{
                    fontSize: '15px',
                    color: '#909090',
                    lineHeight: 1.8,
                  }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#0F0F0F',
        padding: '120px 24px',
        borderTop: '1px solid rgba(200,169,110,0.08)',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '80px 48px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(200,169,110,0.08), rgba(200,169,110,0.02))',
          border: '1px solid rgba(200,169,110,0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,169,110,0.1), transparent 70%)',
            filter: 'blur(40px)',
          }} />
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 700,
            color: '#F5F0E8',
            marginBottom: '16px',
            position: 'relative',
          }}>
            Ready to Transform Your Bedroom?
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#909090',
            marginBottom: '40px',
            position: 'relative',
          }}>
            Visit our showroom or contact us for a personalized consultation.
          </p>
          <Link to="/contact" style={{
            textDecoration: 'none',
            display: 'inline-block',
            padding: '16px 48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #C8A96E, #A07D4A)',
            color: '#0F0F0F',
            fontSize: '15px',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(200,169,110,0.3)',
            position: 'relative',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,169,110,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(200,169,110,0.3)';
          }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
