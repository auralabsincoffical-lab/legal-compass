const PhoneSvg = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const WhatsAppSvg = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const StickyTopbar = () => (
  <header style={{
    position: 'sticky', top: 0, zIndex: 100,
    background: 'var(--navy)', padding: '12px 16px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  }}>
    <div style={{ fontSize: 12, fontWeight: 600 }}>
      <span style={{ color: '#fff' }}>Adv. </span>
      <span style={{ color: 'var(--gold)' }}>Rajesh Mukherjee</span>
      <span style={{ color: '#fff' }}> & Associates</span>
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <a href="tel:+919800000000" style={{
        background: 'var(--gold)', color: 'var(--navy)', fontSize: 11, fontWeight: 700,
        padding: '7px 14px', borderRadius: 4, display: 'inline-flex', alignItems: 'center', gap: 4,
      }}>
        <PhoneSvg size={14} /> Call Now
      </a>
      <a href="https://wa.me/919800000000" className="topbar-wa" style={{
        background: '#25D366', color: '#fff', fontSize: 11, fontWeight: 700,
        padding: '7px 14px', borderRadius: 4, display: 'none', alignItems: 'center', gap: 4,
      }}>
        <WhatsAppSvg size={14} /> WhatsApp
      </a>
    </div>
  </header>
);

const UrgencyStrip = () => (
  <div style={{
    background: '#fef3cd', borderBottom: '1px solid #f5d98f',
    padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8,
  }}>
    <span style={{
      width: 8, height: 8, background: '#e8a000', borderRadius: '50%',
      display: 'inline-block', animation: 'pulse-dot 1.5s infinite', flexShrink: 0,
    }} />
    <span style={{ fontSize: 12, color: '#7a5c00' }}>
      14 people contacted us about divorce cases today
    </span>
  </div>
);

const avatars = [
  { bg: '#c9a84c', initials: 'PR', textColor: 'var(--navy)' },
  { bg: '#1a8f6e', initials: 'SM', textColor: '#fff' },
  { bg: '#5a4ab5', initials: 'AK', textColor: '#fff' },
  { bg: '#c0392b', initials: 'RD', textColor: '#fff' },
];

const HeroSection = () => (
  <section className="hero-section" style={{
    background: 'linear-gradient(160deg, #0d1b2a 0%, #1a3352 100%)',
    padding: '24px 16px 28px',
  }}>
    <div className="hero-inner">
      <div className="hero-left">
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'var(--gold-light)', border: '1px solid var(--gold-border)',
          color: 'var(--gold)', fontSize: 10, fontWeight: 700, letterSpacing: '1.2px',
          textTransform: 'uppercase' as const, padding: '5px 12px', borderRadius: 20, marginBottom: 14,
        }}>
          ⭐ Divorce Lawyer — Kolkata
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700,
          color: '#fff', lineHeight: 1.32, marginBottom: 12,
        }} className="hero-h1">
          Facing a Divorce in Kolkata? Get{' '}
          <span style={{ color: 'var(--gold)' }}>Expert Legal Guidance</span> — Fast.
        </h1>

        {/* Sub */}
        <p style={{
          color: 'rgba(255,255,255,0.72)', fontSize: 13, lineHeight: 1.65, marginBottom: 18,
        }}>
          15+ years | 500+ cases | Speak directly with the Advocate — no juniors, no delays.
        </p>

        {/* Social proof */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <div style={{ display: 'flex' }}>
            {avatars.map((a, i) => (
              <div key={i} style={{
                width: 28, height: 28, borderRadius: '50%', background: a.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, fontWeight: 700, color: a.textColor,
                border: '2px solid var(--navy)', marginLeft: i === 0 ? 0 : -8,
                position: 'relative', zIndex: 4 - i,
              }}>
                {a.initials}
              </div>
            ))}
          </div>
          <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.75)' }}>
            500+ clients trusted us with their family law matters
          </span>
        </div>

        {/* WhatsApp CTA */}
        <a href="https://wa.me/919800000000" style={{
          width: '100%', background: '#25D366', color: '#fff', fontSize: 15, fontWeight: 700,
          padding: 15, borderRadius: 8, display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 8, marginBottom: 10, border: 'none', cursor: 'pointer',
        }}>
          <WhatsAppSvg size={17} /> WhatsApp Us — Free Consult
        </a>

        {/* Call CTA */}
        <a href="tel:+919800000000" style={{
          width: '100%', background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.2)', color: '#fff',
          fontSize: 14, fontWeight: 600, padding: 12, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <PhoneSvg size={14} /> Call +91 98000 00000
        </a>

        {/* Response promise */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 6, marginTop: 12,
        }}>
          <span style={{ width: 6, height: 6, background: '#25D366', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>
            We respond within 30 minutes · Mon–Sat
          </span>
        </div>
      </div>

      {/* Desktop right column */}
      <div className="hero-right">
        <div style={{
          background: 'var(--navy-deep)', borderRadius: 12, padding: 28,
          borderLeft: '4px solid var(--gold)', position: 'relative',
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%', background: 'var(--gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 16,
          }}>
            RM
          </div>
          <div style={{ color: 'var(--gold)', fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' as const, marginBottom: 6 }}>
            Free Consultation
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
            Adv. Rajesh Mukherjee
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6 }}>
            Senior Advocate, High Court<br/>
            15+ years in Family & Divorce Law
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TrustStats = () => (
  <div style={{
    background: '#fff', borderBottom: '1px solid var(--border-custom)',
    display: 'flex',
  }}>
    {[
      { num: '500', suffix: '+', label: 'Cases Handled', suffixColor: 'var(--gold)' },
      { num: '15', suffix: '+', label: 'Yrs Practice', suffixColor: 'var(--gold)' },
      { num: '', suffix: '4.9★', label: 'Google Rating', suffixColor: 'var(--gold)', allGold: true },
    ].map((s, i) => (
      <div key={i} style={{
        flex: 1, textAlign: 'center', padding: '12px 6px',
        borderRight: i < 2 ? '1px solid var(--border-custom)' : 'none',
      }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: s.allGold ? 'var(--gold)' : 'var(--navy)' }}>
          {s.num}<span style={{ color: s.suffixColor }}>{s.suffix}</span>
        </div>
        <div style={{ fontSize: 10.5, color: '#888', textTransform: 'uppercase' as const, marginTop: 2 }}>
          {s.label}
        </div>
      </div>
    ))}
  </div>
);

const Index = () => (
  <>
    <StickyTopbar />
    <UrgencyStrip />
    <HeroSection />
    <TrustStats />
  </>
);

export default Index;
