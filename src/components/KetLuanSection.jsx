import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Cpu, Award, Anchor, Sparkles } from 'lucide-react';

/* Phần 5.2: Kết luận & Thông điệp hành động cho thế hệ Gen Z */

const CORE_PRINCIPLES = [
  {
    icon: Award,
    color: 'var(--red-deep)',
    tag: 'Trách nhiệm của Đảng',
    title: 'Đảng Lãnh Đạo Hiệu Quả',
    desc: 'Đảng muốn lãnh đạo đất nước hiệu quả thì phải có đạo đức, văn minh, phải tự chỉnh đốn và gắn bó mật thiết với nhân dân.',
  },
  {
    icon: Anchor,
    color: 'var(--gold)',
    tag: 'Nguyên lý bất biến',
    title: 'Nguyên Tắc Về Niềm Tin',
    desc: 'Công nghệ có thể thay đổi, nhưng nguyên tắc về niềm tin thì không đổi — niềm tin phải được bồi đắp từ sự chân thành và hành động thực chất.',
  },
];

const GENZ_TAKEAWAYS = [
  {
    icon: Compass,
    color: '#1565c0',
    title: '1. Tỉnh Táo',
    desc: 'Luôn kiểm chứng trước khi tin và chia sẻ. Giữ tư duy phản biện sắc bén, không để tin giả dẫn dắt tâm lý.',
  },
  {
    icon: Cpu,
    color: '#b71c1c',
    title: '2. Không Đứng Ngoài',
    desc: 'Tập trung học tập giỏi, làm chủ công nghệ mới và chủ động đóng góp cho đất nước bằng các sản phẩm thực tế.',
  },
  {
    icon: ShieldCheck,
    color: '#2e7d32',
    title: '3. Giữ Mình',
    desc: 'Rèn luyện đạo đức theo tinh thần Cần, Kiệm, Liêm, Chính và luôn sống có trách nhiệm với chính mình và xã hội.',
  },
];

export default function KetLuanSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-50px' });

  return (
    <section
      id="ket-luan"
      style={{
        background: 'linear-gradient(160deg, #FFFFFF 0%, var(--gray-50) 100%)',
        padding: '5.5rem 0',
        borderTop: '1px solid var(--gray-200)',
      }}
    >
      <div className="container">
        {/* ── HEADER 5.2 ── */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 25 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="section-label">Phần 5.2</span>
            <span style={{ color: 'var(--gray-400)', fontSize: '0.75rem' }}>•</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--red-deep)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Kết Luận
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.2rem' }}>
            Đúc Kết & Sứ Mệnh Hành Động
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 640, margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.65 }}>
            Đảng lãnh đạo bằng đạo đức, văn minh — Thế hệ trẻ tiếp nối bằng trách nhiệm, trí tuệ và sự dấn thân.
          </p>
        </motion.div>

        {/* ── 2 NGUYÊN TẮC THEN CHỐT ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
          {CORE_PRINCIPLES.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid var(--gray-200)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.75rem',
                  boxShadow: 'var(--shadow-card)',
                  borderTop: `4px solid ${item.color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: `${item.color === 'var(--gold)' ? '#D4AF37' : '#8B0000'}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color={item.color} />
                  </div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--gray-700)', lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── 3 ĐIỀU SINH VIÊN GEN Z CẦN NHỚ ── */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="section-label">Thế Hệ Số Hành Động</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2.8vw, 1.75rem)', color: 'var(--gray-900)', marginTop: '0.25rem' }}>
              Ba Điều Sinh Viên Gen Z Cần Nhớ
            </h3>
            <span className="gold-divider center" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {GENZ_TAKEAWAYS.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid var(--gray-200)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    boxShadow: 'var(--shadow-card)',
                    borderLeft: `4px solid ${item.color}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={18} color={item.color} />
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: item.color, margin: 0 }}>
                      {item.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── BANNER THÔNG ĐIỆP CHỐT ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, var(--red-deep) 0%, #5a0000 60%, #300000 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2rem, 5vw, 3.25rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(139,0,0,0.35)',
          }}
        >
          {/* Shimmer & Noise */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.18) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div className="noise-overlay" />
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '10%', height: 2,
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            borderRadius: 2,
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.3rem 1rem',
              border: '1px solid rgba(212,175,55,0.45)',
              borderRadius: 100,
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1.25rem',
            }}>
              <Sparkles size={14} color="var(--gold)" />
              Thông Điệp Chốt
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.35rem, 3.8vw, 2.1rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.35,
              maxWidth: 760,
              margin: '0 auto 1.25rem',
            }}>
              “Niềm tin không đến từ khẩu hiệu mà đến từ hành động; thế hệ trẻ cần tỉnh táo, trách nhiệm và chủ động đóng góp cho đất nước.”
            </h3>

            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
              maxWidth: 620,
              margin: '0 auto 2rem',
              lineHeight: 1.65,
              fontStyle: 'italic',
            }}>
              "Nước nhà thịnh hay suy, yếu hay mạnh — một phần lớn là do các thanh niên." — Chủ tịch Hồ Chí Minh
            </p>

            <a
              href="#hero"
              className="cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                color: 'var(--red-deep)',
                textDecoration: 'none',
                padding: '0.8rem 2rem',
                borderRadius: 100,
                fontSize: '0.88rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
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
