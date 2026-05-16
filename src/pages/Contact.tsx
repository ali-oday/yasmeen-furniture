import { useState, type FormEvent } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const { error: insertError } = await supabase
      .from('contact_submissions')
      .insert([{
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        message: form.message,
      }]);

    if (insertError) {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
    setSubmitting(false);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const inputStyle = (hasValue: boolean) => ({
    width: '100%',
    padding: '16px 20px',
    borderRadius: '12px',
    border: `1px solid ${hasValue ? 'rgba(200,169,110,0.3)' : 'rgba(255,255,255,0.08)'}`,
    background: 'rgba(255,255,255,0.03)',
    color: '#F5F0E8',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
  });

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
          }}>Get in Touch</span>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            color: '#F5F0E8',
            marginBottom: '16px',
          }}>Contact Us</h1>
          <p style={{
            fontSize: '16px',
            color: '#808080',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Have a question or want to visit our showroom? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{
        padding: '0 24px 120px',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '64px',
        }}>
          {/* Contact Info */}
          <div>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#F5F0E8',
              marginBottom: '24px',
            }}>Visit Our Showroom</h2>
            <p style={{
              fontSize: '15px',
              color: '#909090',
              lineHeight: 1.8,
              marginBottom: '40px',
            }}>
              Experience our collection in person. Our showroom features fully assembled bedroom sets so you can see, touch, and feel the quality before you buy.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                {
                  icon: '📍',
                  title: 'Location',
                  lines: ['Al Mansour District', 'Baghdad, Iraq'],
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  lines: ['+964 770 123 4567', '+964 750 987 6543'],
                },
                {
                  icon: '✉️',
                  title: 'Email',
                  lines: ['info@alyasmeen.com', 'sales@alyasmeen.com'],
                },
                {
                  icon: '🕐',
                  title: 'Working Hours',
                  lines: ['Sat - Thu: 10:00 AM - 8:00 PM', 'Friday: Closed'],
                },
              ].map(({ icon, title, lines }) => (
                <div key={title} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(200,169,110,0.08)',
                    border: '1px solid rgba(200,169,110,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#F5F0E8',
                      marginBottom: '6px',
                    }}>{title}</h4>
                    {lines.map((line) => (
                      <p key={line} style={{ fontSize: '14px', color: '#808080', lineHeight: 1.6 }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: '#161616',
            borderRadius: '24px',
            padding: '48px',
            border: '1px solid rgba(200,169,110,0.08)',
          }}>
            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '48px 0',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(200,169,110,0.1)',
                  border: '2px solid #C8A96E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: '28px',
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#F5F0E8',
                  marginBottom: '12px',
                }}>Message Sent!</h3>
                <p style={{
                  fontSize: '15px',
                  color: '#909090',
                  marginBottom: '32px',
                }}>
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    padding: '12px 32px',
                    borderRadius: '12px',
                    border: '1px solid rgba(200,169,110,0.3)',
                    background: 'transparent',
                    color: '#C8A96E',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#F5F0E8',
                  marginBottom: '32px',
                }}>Send Us a Message</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#A0A0A0',
                      marginBottom: '8px',
                    }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      style={inputStyle(!!form.name)}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = form.name ? 'rgba(200,169,110,0.3)' : 'rgba(255,255,255,0.08)'; }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#A0A0A0',
                      marginBottom: '8px',
                    }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      style={inputStyle(!!form.email)}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = form.email ? 'rgba(200,169,110,0.3)' : 'rgba(255,255,255,0.08)'; }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#A0A0A0',
                      marginBottom: '8px',
                    }}>Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+964 7XX XXX XXXX"
                      style={inputStyle(!!form.phone)}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = form.phone ? 'rgba(200,169,110,0.3)' : 'rgba(255,255,255,0.08)'; }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: '#A0A0A0',
                      marginBottom: '8px',
                    }}>Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about what you're looking for..."
                      style={{
                        ...inputStyle(!!form.message),
                        resize: 'vertical',
                        minHeight: '120px',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = form.message ? 'rgba(200,169,110,0.3)' : 'rgba(255,255,255,0.08)'; }}
                    />
                  </div>

                  {error && (
                    <p style={{ fontSize: '14px', color: '#E54B4B' }}>{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      padding: '16px 40px',
                      borderRadius: '12px',
                      border: 'none',
                      background: submitting
                        ? 'rgba(200,169,110,0.5)'
                        : 'linear-gradient(135deg, #C8A96E, #A07D4A)',
                      color: '#0F0F0F',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(200,169,110,0.3)',
                    }}
                    onMouseEnter={(e) => {
                      if (!submitting) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,169,110,0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(200,169,110,0.3)';
                    }}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
