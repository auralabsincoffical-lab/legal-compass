import { useState, FormEvent } from 'react';

declare function gtag(...args: unknown[]): void;
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

const UserSvg = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const BuildingSvg = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01"/>
  </svg>
);

const ShieldSvg = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const ChevronSvg = ({ open }: { open: boolean }) => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const Eyebrow = ({ children, light }: { children: string; light?: boolean }) => (
  <span style={{
    fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const,
    color: light ? 'var(--gold)' : 'var(--gold)', marginBottom: 8, display: 'block',
  }}>{children}</span>
);

const SectionH2 = ({ children, white }: { children: string; white?: boolean }) => (
  <h2 style={{
    fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700,
    color: white ? '#fff' : 'var(--navy)', marginBottom: 14,
  }}>{children}</h2>
);

const PHONE = '+918240844919';
const PHONE_DISPLAY = '+91 82408 44919';
const WA_LINK = 'https://wa.me/918240844919';
const WA_LINK_MSG = 'https://wa.me/918240844919?text=Hi%2C%20I%20need%20legal%20assistance.%20Please%20call%20me%20back.';

const trackWa = () => { if (typeof gtag !== 'undefined') gtag('event', 'whatsapp_click'); };
const trackCall = () => { if (typeof gtag !== 'undefined') gtag('event', 'call_click'); };

const StickyTopbar = () => (
  <header style={{
    position: 'sticky', top: 0, zIndex: 100,
    background: 'var(--navy)', padding: '12px 16px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  }}>
    <div style={{ fontSize: 12, fontWeight: 600 }}>
      <span style={{ color: '#fff' }}>S K </span>
      <span style={{ color: 'var(--gold)' }}>Legal Consultancy</span>
      <span style={{ color: '#fff' }}> & Services</span>
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <a href={`tel:${PHONE}`} onClick={trackCall} style={{
        background: 'var(--gold)', color: 'var(--navy)', fontSize: 11, fontWeight: 700,
        padding: '7px 14px', borderRadius: 4, display: 'inline-flex', alignItems: 'center', gap: 4,
      }}>
        <PhoneSvg size={14} /> Call Now
      </a>
      <a href={WA_LINK} onClick={trackWa} className="topbar-wa" style={{
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
      12 people contacted us for legal help today
    </span>
  </div>
);

const avatars = [
  { bg: '#c9a84c', initials: 'SK', textColor: 'var(--navy)' },
  { bg: '#1a8f6e', initials: 'PS', textColor: '#fff' },
  { bg: '#5a4ab5', initials: 'GA', textColor: '#fff' },
  { bg: '#c0392b', initials: 'RD', textColor: '#fff' },
];

const HeroSection = () => (
  <section className="hero-section" style={{
    background: 'linear-gradient(160deg, #0d1b2a 0%, #1a3352 100%)',
    padding: '24px 16px 28px',
  }}>
    <div className="hero-inner">
      <div className="hero-left">
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'var(--gold-light)', border: '1px solid var(--gold-border)',
          color: 'var(--gold)', fontSize: 10, fontWeight: 700, letterSpacing: '1.2px',
          textTransform: 'uppercase' as const, padding: '5px 12px', borderRadius: 20, marginBottom: 14,
        }}>
          ⚖️ Legal Services — Kolkata
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700,
          color: '#fff', lineHeight: 1.32, marginBottom: 12,
        }} className="hero-h1">
          Need Legal Help in Kolkata?{' '}
          <span style={{ color: 'var(--gold)' }}>28 Years of Trusted Expertise</span> — At Your Service.
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13, lineHeight: 1.65, marginBottom: 18 }}>
          28+ years | 500+ cases | Criminal · Civil · Family · Corporate · Immigration — speak directly with a Senior Advocate.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <div style={{ display: 'flex' }}>
            {avatars.map((a, i) => (
              <div key={i} style={{
                width: 28, height: 28, borderRadius: '50%', background: a.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, fontWeight: 700, color: a.textColor,
                border: '2px solid var(--navy)', marginLeft: i === 0 ? 0 : -8,
                position: 'relative', zIndex: 4 - i,
              }}>{a.initials}</div>
            ))}
          </div>
          <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.75)' }}>
            500+ clients trusted us with their legal matters
          </span>
        </div>
        <a href={WA_LINK} onClick={trackWa} style={{
          width: '100%', background: '#25D366', color: '#fff', fontSize: 15, fontWeight: 700,
          padding: 15, borderRadius: 8, display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 8, marginBottom: 10, border: 'none', cursor: 'pointer',
        }}>
          <WhatsAppSvg size={17} /> WhatsApp Us — Free Consult
        </a>
        <a href={`tel:${PHONE}`} onClick={trackCall} style={{
          width: '100%', background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.2)', color: '#fff',
          fontSize: 14, fontWeight: 600, padding: 12, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <PhoneSvg size={14} /> Call {PHONE_DISPLAY}
        </a>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 12 }}>
          <span style={{ width: 6, height: 6, background: '#25D366', borderRadius: '50%', display: 'inline-block' }} />
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>We respond within 30 minutes · Mon–Sat</span>
        </div>
      </div>
      <div className="hero-right">
        <div style={{
          background: 'var(--navy-deep)', borderRadius: 12, padding: 28,
          borderLeft: '4px solid var(--gold)', position: 'relative',
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%', background: 'var(--gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, fontWeight: 700, color: 'var(--navy)', marginBottom: 16,
          }}>SK</div>
          <div style={{ color: 'var(--gold)', fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase' as const, marginBottom: 6 }}>Free Consultation</div>
          <div style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>S K Legal Consultancy</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6 }}>Kolkata High Court Practitioner<br/>28+ Years in Legal Practice</div>
        </div>
      </div>
    </div>
  </section>
);

const TrustStats = () => (
  <div style={{ background: '#fff', borderBottom: '1px solid var(--border-custom)', display: 'flex' }}>
    {[
      { num: '500', suffix: '+', label: 'Cases Handled', suffixColor: 'var(--gold)' },
      { num: '28', suffix: '+', label: 'Yrs Practice', suffixColor: 'var(--gold)' },
      { num: '', suffix: '4.7★', label: 'Google Rating', suffixColor: 'var(--gold)', allGold: true },
    ].map((s, i) => (
      <div key={i} style={{
        flex: 1, textAlign: 'center', padding: '12px 6px',
        borderRight: i < 2 ? '1px solid var(--border-custom)' : 'none',
      }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: s.allGold ? 'var(--gold)' : 'var(--navy)' }}>
          {s.num}<span style={{ color: s.suffixColor }}>{s.suffix}</span>
        </div>
        <div style={{ fontSize: 10.5, color: '#888', textTransform: 'uppercase' as const, marginTop: 2 }}>{s.label}</div>
      </div>
    ))}
  </div>
);

const PainSection = () => (
  <section className="section-pad" style={{ background: 'var(--navy)', padding: '20px 16px' }}>
    <Eyebrow>THE REALITY</Eyebrow>
    <div style={{
      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,168,76,0.2)',
      borderLeft: '3px solid var(--gold)', borderRadius: '0 8px 8px 0', padding: 14,
      fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.82)',
    }}>
      Legal problems don't wait — whether it's a <strong>criminal charge</strong>, a <strong>property dispute</strong>, a <strong>family matter</strong>, or a <strong>business compliance issue</strong>. Without the right legal counsel, simple cases can drag for years and cost you lakhs unnecessarily.
    </div>
  </section>
);

const steps = [
  { title: 'WhatsApp or Call Us', desc: 'Reach out instantly. No forms, no waiting. We respond within 30 minutes.' },
  { title: 'Free Consultation', desc: 'Speak directly with a Senior Advocate. Understand your options — zero cost.' },
  { title: 'We Handle Everything', desc: 'From first filing to final order — you focus on life, we handle the courts.' },
];

const HowItWorks = () => (
  <section className="section-pad" style={{ background: 'var(--off)', padding: '20px 16px' }}>
    <Eyebrow>HOW IT WORKS</Eyebrow>
    <SectionH2>3 Simple Steps to Get Started</SectionH2>
    <div className="steps-container">
      {steps.map((s, i) => (
        <div key={i} style={{
          display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 0',
          borderBottom: i < 2 ? '1px solid var(--border-custom)' : 'none',
        }}>
          <div style={{
            width: 32, height: 32, minWidth: 32, borderRadius: '50%', background: 'var(--navy)',
            color: 'var(--gold)', fontSize: 13, fontWeight: 700, display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>{i + 1}</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)', marginBottom: 3 }}>{s.title}</div>
            <div style={{ fontSize: 12, color: 'var(--muted-custom)', lineHeight: 1.55 }}>{s.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const services = [
  'Criminal Defence & Bail',
  'Property & Civil Disputes',
  'Divorce & Family Law',
  'Child Custody & Alimony',
  'Corporate & Business Law',
  'Immigration & Visa Issues',
  'Domestic Violence Cases',
  'Real Estate & Land Matters',
];

const ServicesSection = () => (
  <section className="section-pad" style={{ background: '#fff', padding: '20px 16px' }}>
    <Eyebrow>WHAT WE HANDLE</Eyebrow>
    <SectionH2>Our Legal Practice Areas</SectionH2>
    <div className="services-grid">
      {services.map((s, i) => (
        <div key={i} style={{
          background: '#fff', border: '1px solid var(--border-custom)',
          borderLeft: '3px solid var(--gold)', borderRadius: '0 6px 6px 0',
          padding: '10px 12px', fontSize: 12.5, fontWeight: 500, color: 'var(--text)', lineHeight: 1.4,
        }}>{s}</div>
      ))}
    </div>
  </section>
);

const whyCards = [
  { icon: <UserSvg />, title: 'Direct Access to Senior Advocates', desc: 'You speak with experienced advocates personally — not juniors. Senior attention from day one.' },
  { icon: <BuildingSvg />, title: 'Kolkata Courts, Inside Out', desc: 'Kolkata High Court, City Civil Court, and district courts across West Bengal — 28 years of courtroom experience.' },
  { icon: <ShieldSvg />, title: 'Clear Fees, No Surprises', desc: 'Transparent pricing discussed upfront. No hidden charges, no shock bills mid-case.' },
];

const WhyChooseUs = () => (
  <section className="section-pad" style={{ background: 'var(--off)', padding: '20px 16px' }}>
    <Eyebrow>WHY CHOOSE US</Eyebrow>
    <SectionH2>What Sets Us Apart</SectionH2>
    <div className="why-cards">
      {whyCards.map((c, i) => (
        <div key={i} style={{
          background: '#fff', border: '1px solid var(--border-custom)', borderRadius: 8,
          padding: 16, display: 'flex', gap: 14, alignItems: 'flex-start',
        }}>
          <div style={{
            width: 38, height: 38, minWidth: 38, borderRadius: 8, background: 'var(--navy)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>{c.icon}</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)', marginBottom: 3 }}>{c.title}</div>
            <div style={{ fontSize: 12.5, color: 'var(--muted-custom)', lineHeight: 1.55 }}>{c.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const reviews = [
  { text: 'The other staffs are also helpful and work as per your requirement. Highly professional and resolved my property case faster than expected.', name: 'Golam J.', case: 'Property Dispute, Newtown' },
  { text: 'In any situation or any problem they solved quickly with best advice. Very satisfied with the way they handled my criminal matter.', name: 'Priyanka S.', case: 'Criminal Case, Chinar Park' },
  { text: 'Excellent legal guidance throughout my divorce proceedings. They explained every step clearly and kept me informed at all times. Highly recommend.', name: 'Rahul D.', case: 'Divorce, Salt Lake' },
];

const ReviewsSection = () => (
  <section className="section-pad" style={{ background: 'var(--off)', padding: '20px 16px' }}>
    <Eyebrow>CLIENT REVIEWS</Eyebrow>
    <SectionH2>What Our Clients Say</SectionH2>
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      background: '#fff', border: '1px solid var(--border-custom)',
      borderRadius: 6, padding: '9px 14px', marginBottom: 14,
    }}>
      <span style={{
        fontSize: 18, fontWeight: 700,
        background: 'linear-gradient(135deg,#4285f4,#ea4335,#fbbc04,#34a853)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      }}>G</span>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#1c1c1c' }}>4.7 ★★★★★</div>
        <div style={{ fontSize: 11, color: '#888' }}>186 Google Reviews</div>
      </div>
    </div>
    <div className="review-cards" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {reviews.map((r, i) => (
        <div key={i} style={{
          background: '#fff', border: '1px solid var(--border-custom)',
          borderRadius: 8, padding: 14,
        }}>
          <div style={{ color: 'var(--gold)', fontSize: 12, marginBottom: 6 }}>★★★★★</div>
          <div style={{ fontSize: 12.5, fontStyle: 'italic', color: '#444', lineHeight: 1.6, marginBottom: 8 }}>
            "{r.text}"
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--navy)' }}>{r.name}</div>
          <div style={{ fontSize: 11, color: '#999' }}>{r.case}</div>
        </div>
      ))}
    </div>
  </section>
);

const faqs = [
  { q: 'What types of legal cases do you handle?', a: 'We handle criminal defence, civil & property disputes, family & divorce law, corporate matters, immigration cases, domestic violence, and real estate litigation across Kolkata courts.' },
  { q: 'Is the first consultation really free?', a: 'Yes — completely free, with a Senior Advocate directly (not a junior). Call or WhatsApp to schedule. No obligation to proceed after.' },
  { q: 'How long does a typical case take?', a: 'It varies by case type. Mutual consent divorce: 6–8 months. Criminal bail: can be same day. Property disputes: 1–3 years. We focus on the fastest resolution strategy from day one.' },
  { q: 'Do you practise at the Kolkata High Court?', a: 'Yes. We regularly appear at the Kolkata High Court, City Civil Court, and district courts across West Bengal with 28+ years of courtroom experience.' },
  { q: 'Can you help with immigration and visa issues?', a: 'Absolutely. We assist with visa applications, immigration appeals, deportation matters, and overseas legal documentation for Indian citizens and NRIs.' },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="section-pad" style={{ background: 'var(--navy)', padding: '20px 16px' }}>
      <Eyebrow light>COMMON QUESTIONS</Eyebrow>
      <SectionH2 white>Frequently Asked</SectionH2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {faqs.map((f, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8, padding: '12px 14px',
            }}>
              <div onClick={() => setOpenIdx(isOpen ? -1 : i)} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                cursor: 'pointer',
              }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{f.q}</span>
                <ChevronSvg open={isOpen} />
              </div>
              {isOpen && (
                <div style={{
                  fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6,
                  marginTop: 8, paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.08)',
                }}>{f.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const CallbackForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    if (!phone) { alert('Please enter your phone number'); return; }
    setSubmitted(true);
    fetch('/api/leads', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, source: 'form', timestamp: new Date() }),
    }).catch(() => {});
  };

  if (submitted) {
    return (
      <section className="section-pad" style={{ background: '#fff', padding: '20px 16px' }}>
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ fontSize: 24, marginBottom: 8 }}>✓</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--navy)' }}>
            Thank you! We'll call you back within 30 minutes.
          </div>
        </div>
      </section>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', border: '1px solid var(--border-custom)',
    borderRadius: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
    outline: 'none', transition: 'border-color 0.2s',
  };

  return (
    <section className="section-pad" style={{ background: '#fff', padding: '20px 16px' }}>
      <Eyebrow>NOT READY TO CALL?</Eyebrow>
      <h2 style={{
        fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700,
        color: 'var(--navy)', marginBottom: 14,
      }}>Request a Callback — Just Leave Your Number.</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 460 }}>
        <input name="name" type="text" placeholder="Your Name" style={inputStyle}
          onFocus={e => e.currentTarget.style.borderColor = 'var(--gold)'}
          onBlur={e => e.currentTarget.style.borderColor = 'var(--border-custom)'} />
        <input name="phone" type="tel" placeholder="Phone Number" required style={inputStyle}
          onFocus={e => e.currentTarget.style.borderColor = 'var(--gold)'}
          onBlur={e => e.currentTarget.style.borderColor = 'var(--border-custom)'} />
        <button type="submit" style={{
          width: '100%', background: 'var(--gold)', color: 'var(--navy)',
          fontSize: 14, fontWeight: 700, padding: 14, borderRadius: 8, border: 'none',
          cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'opacity 0.2s',
        }} onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
           onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
          Request Free Callback →
        </button>
      </form>
      <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
        <a href={`tel:${PHONE}`} onClick={trackCall} style={{
          background: 'var(--gold)', color: 'var(--navy)', fontSize: 13, fontWeight: 700,
          padding: '10px 18px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <PhoneSvg size={14} /> Call Now
        </a>
        <a href={WA_LINK} onClick={trackWa} style={{
          background: '#25D366', color: '#fff', fontSize: 13, fontWeight: 700,
          padding: '10px 18px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <WhatsAppSvg size={15} /> WhatsApp
        </a>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{
    background: '#06111d', padding: 16, textAlign: 'center',
    fontSize: 11, color: 'rgba(255,255,255,0.35)', lineHeight: 1.9,
  }}>
    <div style={{ fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
      S K Legal Consultancy & Services
    </div>
    <div>Kolkata High Court Practitioner · All consultations strictly confidential</div>
    <div>2nd Floor, Chinar Park, Newtown, Kolkata 700136</div>
  </footer>
);

const StickyBottomBar = () => (
  <div className="sticky-bottom-bar" style={{
    position: 'sticky', bottom: 0, zIndex: 200,
    background: 'var(--navy)', borderTop: '1px solid rgba(255,255,255,0.08)',
    padding: '10px 16px 16px', display: 'flex', gap: 10,
  }}>
    <a href={WA_LINK_MSG} target="_blank" rel="noopener" onClick={trackWa} style={{
      flex: 1.4, background: '#25D366', color: '#fff', fontSize: 13, fontWeight: 700,
      padding: '13px 10px', borderRadius: 8, border: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
    }}>
      <WhatsAppSvg size={15} /> WhatsApp Now
    </a>
    <a href={`tel:${PHONE}`} onClick={trackCall} style={{
      flex: 1, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
      color: '#fff', fontSize: 13, fontWeight: 600,
      padding: '13px 10px', borderRadius: 8,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
    }}>
      <PhoneSvg size={14} /> Call Now
    </a>
  </div>
);

const Index = () => (
  <>
    <StickyTopbar />
    <UrgencyStrip />
    <HeroSection />
    <TrustStats />
    <PainSection />
    <HowItWorks />
    <ServicesSection />
    <WhyChooseUs />
    <ReviewsSection />
    <FaqSection />
    <CallbackForm />
    <Footer />
    <StickyBottomBar />
  </>
);

export default Index;
