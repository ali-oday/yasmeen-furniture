import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
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

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: true });
      setProducts(data || []);
      setLoading(false);
    })();
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  const setCategory = (cat: string) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const categories = [
    { key: 'all', label: 'All Bedrooms' },
    { key: 'turkish', label: 'Turkish' },
    { key: 'chinese', label: 'Chinese' },
  ];

  return (
    <div style={{ background: '#0F0F0F', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        paddingTop: '160px',
        paddingBottom: '64px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,169,110,0.06), transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{ position: 'relative' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '13px',
            color: '#C8A96E',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '16px',
            fontWeight: 500,
          }}>Our Collection</span>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            color: '#F5F0E8',
            marginBottom: '16px',
          }}>Imported Bedrooms</h1>
          <p style={{
            fontSize: '16px',
            color: '#808080',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Browse our curated selection of premium bedroom furniture from Turkey and China.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{
        padding: '0 24px 48px',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
        }}>
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setCategory(key)}
              style={{
                padding: '10px 28px',
                borderRadius: '24px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: activeCategory === key ? 600 : 400,
                background: activeCategory === key
                  ? 'linear-gradient(135deg, #C8A96E, #A07D4A)'
                  : 'rgba(255,255,255,0.05)',
                color: activeCategory === key ? '#0F0F0F' : '#A0A0A0',
                transition: 'all 0.3s ease',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section style={{
        padding: '0 24px 120px',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {loading ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '32px',
            }}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
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
          ) : filtered.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '80px 0',
            }}>
              <p style={{ fontSize: '18px', color: '#606060' }}>No products found in this category.</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '32px',
            }}>
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
