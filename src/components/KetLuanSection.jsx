import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* Phần kết: Kết luận & Lời kêu gọi hành động */

const KEY_MESSAGES = [
  {
    num: '01',
    color: '#D4AF37',
    text: 'Sự lãnh đạo của Đảng là tất yếu lịch sử — dựa trên sự ủy thác của nhân dân, không phải đặc quyền.',
  },
  {
    num: '02',
    color: '#E8C84D',
    text: '"Đảng là đạo đức, là văn minh" — xây dựng Đảng trong sạch, vững mạnh là điều kiện tiên quyết để giữ vững niềm tin.',
  },
  {
    num: '03',
    color: '#F5E8A3',
    text: 'Gen Z là thế hệ quyết định "kỷ nguyên vươn mình" — vừa là đối tượng phải được lắng nghe, vừa là lực lượng tiên phong.',
  },
];

export default function KetLuanSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <section id="ket-luan" style={{
      background: 'linear-gradient(160deg, #FFFFFF 0%, var(--gray-50) 100%)',
      padding: '6rem 0',
      borderTop: '1px solid var(--gray-200)',
    }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-label">Kết Luận</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.5rem' }}>
            Thông Điệp Kết Luận
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 600, margin: '0 auto', fontSize: '0.97rem' }}>
            Tư tưởng Hồ Chí Minh về Đảng không phải là lý thuyết sách vở — đó là kim chỉ nam sống động cho thực tiễn hôm nay và mai sau.
          </p>
        </motion.div>

        {/* 3 thông điệp chính */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
          {KEY_MESSAGES.map((msg, i) => (
            <motion.div
              key={i}
              className="hover-card-soft"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: '#FFFFFF',
                border: '1.5px solid var(--gray-200)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)',
                borderTop: `3px solid ${msg.color}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div style={{
                width: 44, height: 44,
                borderRadius: '50%',
                background: `linear-gradient(135deg, var(--gold), var(--gold-light))`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: '0.9rem',
                color: 'var(--red-deep)',
              }}>
                {msg.num}
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--gray-700)', lineHeight: 1.75 }}>
                {msg.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{
            background: 'linear-gradient(135deg, var(--red-deep) 0%, #5a0000 60%, #3a0000 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(139,0,0,0.35)',
          }}
        >
          {/* BG shimmer */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div className="noise-overlay" />
          {/* Gold top border */}
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '10%', height: 2,
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            borderRadius: 2,
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-block',
              padding: '0.3rem 1rem',
              border: '1px solid rgba(212,175,55,0.45)',
              borderRadius: 100,
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.25rem',
            }}>
              Lời Kêu Gọi Hành Động
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.4rem, 4vw, 2.3rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.25,
              marginBottom: '1rem',
              maxWidth: 700,
              margin: '0 auto 1rem',
            }}>
              "Nước nhà thịnh hay suy, yếu hay mạnh — một phần lớn là do các thanh niên"
            </h3>

            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
              maxWidth: 620,
              margin: '0 auto 0.5rem',
              lineHeight: 1.75,
            }}>
              — Hồ Chí Minh —
            </p>

            <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 'clamp(0.85rem, 1.8vw, 0.97rem)',
              maxWidth: 600,
              margin: '0.5rem auto 2rem',
              lineHeight: 1.75,
            }}>
              Khi được đồng hành và đặt trọn niềm tin, thế hệ số sẽ là lá chắn vững chắc nhất cho tương lai của đất nước.
            </p>

            <a
              href="#hero"
              className="cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                color: 'var(--red-deep)',
                textDecoration: 'none',
                padding: '0.9rem 2.25rem',
                borderRadius: 100,
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
              }}
            >
              Xem Lại Toàn Bộ
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
