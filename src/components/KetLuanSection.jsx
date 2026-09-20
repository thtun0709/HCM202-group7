import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Compass, Anchor, ShieldCheck, Ship } from 'lucide-react';

/* Phần kết: Kết luận & Lời kêu gọi hành động cho sinh viên Gen Z */

const KEY_MESSAGES = [
  {
    num: '01',
    color: '#D4AF37',
    text: 'Sự lãnh đạo của Đảng là tất yếu lịch sử — dựa trên sự ủy thác thiêng liêng của nhân dân, không phải là đặc quyền tự phong.',
  },
  {
    num: '02',
    color: '#E8C84D',
    text: '"Đảng là đạo đức, là văn minh" — xây dựng Đảng trong sạch, vững mạnh và thường xuyên tự chỉnh đốn là điều kiện sống còn để giữ vững niềm tin.',
  },
  {
    num: '03',
    color: '#F5E8A3',
    text: 'Gen Z là thế hệ quyết định "kỷ nguyên vươn mình" — vừa là đối tượng phải được lắng nghe, vừa là lực lượng tiên phong chèo lái đất nước.',
  },
];

const GENZ_TAKEAWAYS = [
  {
    icon: Compass,
    color: '#1565c0',
    title: '1. Tỉnh Táo',
    desc: 'Kiểm chứng nguồn thông tin cẩn trọng trước khi tin và trước khi bấm chia sẻ. Không để tin giả thao túng tâm lý.',
  },
  {
    icon: Anchor,
    color: '#b71c1c',
    title: '2. Đừng Đứng Ngoài',
    desc: 'Hoài nghi phản biện là tốt, nhưng phải đi kèm hành động: học tập chuyên môn giỏi, làm chủ công nghệ để là "tay chèo" chứ không chỉ là người đứng ngoài bình luận.',
  },
  {
    icon: ShieldCheck,
    color: '#2e7d32',
    title: '3. Giữ Mình',
    desc: 'Cần, Kiệm, Liêm, Chính không phải câu chuyện riêng của cán bộ. Một thế hệ trẻ sống tử tế, trách nhiệm chính là nền móng vững chắc cho bộ máy trong sạch mai sau.',
  },
];

export default function KetLuanSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });
  const reflectRef = useRef(null);
  const reflectInView = useInView(reflectRef, { once: true, margin: '-50px' });
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="section-label">Tổng Kết</span>
            <span style={{ color: 'var(--gray-400)', fontSize: '0.75rem' }}>•</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--red-deep)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Thông Điệp Đúc Kết
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.3rem' }}>
            Khẳng Định & Hành Động
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 640, margin: '0 auto', fontSize: '0.97rem' }}>
            Tư tưởng Hồ Chí Minh về Đảng không chỉ dừng ở chỗ Đảng phải lãnh đạo, mà chỉ rõ <strong>Đảng phải như thế nào mới xứng đáng lãnh đạo</strong> — phải là đạo đức, là văn minh, thường xuyên tự chỉnh đốn và gắn bó máu thịt với nhân dân.
          </p>
        </motion.div>

        {/* 3 thông điệp chính */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
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

        {/* Khối suy ngẫm: Con thuyền qua vùng biển mới */}
        <motion.div
          ref={reflectRef}
          initial={{ opacity: 0, y: 30 }}
          animate={reflectInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(139,0,0,0.04) 0%, rgba(212,175,55,0.08) 100%)',
            border: '1.5px solid rgba(212,175,55,0.3)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
            marginBottom: '4rem',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Ship size={22} color="var(--red-deep)" />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--red-deep)', fontWeight: 700 }}>
              Con Thuyền Việt Nam Đi Qua Vùng Biển Mới
            </h3>
          </div>
          <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '1rem' }}>
            Gần một thế kỷ sau <em>Đường cách mệnh</em>, con thuyền Việt Nam đang đi qua một vùng biển mới: chuyển đổi số, trí tuệ nhân tạo và cả những cơn sóng thông tin thật giả lẫn lộn. Sóng đã khác, nhưng nguyên lý thì không đổi — <strong>thuyền vẫn cần một người cầm lái vững vàng, và người cầm lái vẫn cần trọn vẹn niềm tin của những người trên thuyền</strong>.
          </p>
          <p style={{ color: 'var(--gray-700)', fontSize: '0.95rem', lineHeight: 1.85, fontStyle: 'italic' }}>
            Niềm tin ấy không đến từ khẩu hiệu, mà đến từ hai phía cùng hành động: Đảng tiếp tục minh bạch, tự chỉnh đốn và biết lắng nghe người trẻ; còn chúng ta giữ một cái đầu tỉnh táo trước mỗi thông tin và một trái tim không thờ ơ với đất nước. Bởi vì <strong>giữ vững con thuyền không chỉ là việc của người cầm lái, mà là trách nhiệm của tất cả những người đang ngồi trên thuyền.</strong>
          </p>
        </motion.div>

        {/* 3 Điều đúc kết cho Gen Z */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label">Thế Hệ Số Hành Động</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 1.85rem)', color: 'var(--gray-800)', marginTop: '0.3rem' }}>
              Ba Điều Rút Ra Cho Sinh Viên Gen Z
            </h3>
            <span className="gold-divider center" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {GENZ_TAKEAWAYS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid var(--gray-200)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.75rem',
                    boxShadow: 'var(--shadow-card)',
                    borderTop: `4px solid ${item.color}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} color={item.color} />
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: item.color }}>
                      {item.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', lineHeight: 1.75 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
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
              — Chủ tịch Hồ Chí Minh —
            </p>

            <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 'clamp(0.85rem, 1.8vw, 0.97rem)',
              maxWidth: 620,
              margin: '0.5rem auto 2rem',
              lineHeight: 1.75,
            }}>
              Khi được đồng hành và đặt trọn niềm tin, thế hệ số sẽ là lá chắn vững chắc nhất và là những tay chèo kiên cường cho tương lai của Tổ quốc.
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
