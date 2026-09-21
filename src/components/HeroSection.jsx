import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import trongDong from '../assets/trong_dong.png';

function fadeUpProps(i) {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.18, duration: 0.7, ease: 'easeOut' },
  };
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `
          radial-gradient(ellipse at 20% 60%, rgba(139,0,0,0.55) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 30%, rgba(100,0,0,0.35) 0%, transparent 55%),
          linear-gradient(170deg, #0D0000 0%, #1A0505 45%, #0A0A0A 100%)
        `,
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        textAlign: 'center',
      }}
    >
      {/* Decorative vertical lines */}
      <div style={vertLineStyle(10)} />
      <div style={vertLineStyle(90)} />

      {/* Gold dot grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.07) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      <div className="noise-overlay" />

      {/* Trống đồng xoay chậm */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(520px, 72vw, 860px)',
        height: 'clamp(520px, 72vw, 860px)',
        zIndex: 1,
        pointerEvents: 'none',
      }}>
        <div style={{ animation: 'trongDongSpin 80s linear infinite', width: '100%', height: '100%' }}>
          <img
            src={trongDong}
            alt=""
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              opacity: 0.10,
              mixBlendMode: 'screen',
              filter: 'invert(1) sepia(1) saturate(4) hue-rotate(5deg)',
            }}
          />
        </div>
      </div>
      <style>{`@keyframes trongDongSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4rem 1.5rem' }}>
        {/* Badge môn học */}
        <motion.div {...fadeUpProps(0)}>
          <span style={{
            display: 'inline-block',
            padding: '0.35rem 1.2rem',
            border: '1px solid rgba(212,175,55,0.5)',
            borderRadius: '100px',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '2rem',
          }}>
            Tư Tưởng Hồ Chí Minh · HCM202
          </span>
        </motion.div>

        {/* Tiêu đề chính */}
        <motion.h1
          {...fadeUpProps(1)}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.9rem, 5.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.2,
            maxWidth: 860,
            margin: '0 auto',
          }}
        >
          Tư Tưởng Hồ Chí Minh Về{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--gold) 30%, var(--gold-light) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Đảng Cộng Sản Việt Nam
          </span>
        </motion.h1>

        {/* Phụ đề */}
        <motion.p
          {...fadeUpProps(2)}
          style={{
            marginTop: '1.25rem',
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.60)',
            maxWidth: 640,
            margin: '1.25rem auto 0',
            fontStyle: 'italic',
          }}
        >
          Vai trò lãnh đạo · Xây dựng Đảng trong sạch · Niềm tin của thế hệ số
        </motion.p>

        {/* Quote nổi bật */}
        <motion.div
          {...fadeUpProps(3)}
          style={{
            marginTop: '2.5rem',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(212,175,55,0.25)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem 2rem',
            maxWidth: 720,
            margin: '2.5rem auto 0',
            backdropFilter: 'blur(10px)',
          }}
        >
          <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            Câu Nói Của Chủ Tịch Hồ Chí Minh
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
            "Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'rgba(212,175,55,0.7)', letterSpacing: '0.08em' }}>
            — Đường Kách mệnh, 1927
          </p>
        </motion.div>

        {/* Scroll CTA */}
        <a
          href="#vai-tro"
          style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', marginTop: '3.5rem', textDecoration: 'none', color: 'rgba(255,255,255,0.40)', opacity: 1 }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Khám phá</span>
          <span className="bounce-arrow">
            <ChevronDown size={20} />
          </span>
        </a>
      </div>
    </section>
  );
}

function vertLineStyle(leftPercent) {
  return {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: `${leftPercent}%`,
    width: '1px',
    background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.12) 30%, rgba(212,175,55,0.12) 70%, transparent)',
    zIndex: 0,
  };
}
