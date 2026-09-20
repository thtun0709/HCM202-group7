import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wifi, Eye, AlertTriangle, MessageSquare, Shield } from 'lucide-react';

/* Phần 3: Đảng & Gen Z – Thách thức không gian mạng */

const CHALLENGES = [
  {
    icon: Wifi,
    color: '#ff7043',
    title: 'Chiến Trường Không Gian Mạng',
    desc: 'Tin giả (fake news), cắt ghép video và luận điệu xuyên tạc tinh vi — mục đích nhắm vào tâm lý tò mò để xói mòn lòng tin của thế hệ trẻ.',
  },
  {
    icon: Eye,
    color: '#ab47bc',
    title: 'Tâm Lý Đặc Trưng Của Gen Z',
    desc: 'Tiếp cận thông tin cực nhanh nhưng thiếu thời gian kiểm chứng; xu hướng tư duy phản biện cao — nếu thiếu định hướng dễ biến thành xa rời.',
  },
  {
    icon: AlertTriangle,
    color: '#42a5f5',
    title: 'Nguy Cơ Xa Rời Thiết Chế',
    desc: 'Một bộ phận e dè, xa cách với Đoàn, Hội khi các hoạt động còn mang nặng tính hình thức — đây là thách thức cần nhìn thẳng.',
  },
];

const SOLUTIONS_BRIEF = [
  {
    icon: MessageSquare,
    color: '#D4AF37',
    title: 'Đổi Mới "Ngôn Ngữ" Giao Tiếp',
    desc: 'Hiện diện sinh động trên không gian số, nói bằng ngôn ngữ của giới trẻ — infographic, podcast, video ngắn trên TikTok, Threads.',
  },
  {
    icon: Eye,
    color: '#E8C84D',
    title: 'Lắng Nghe Thay Vì Áp Đặt',
    desc: 'Tạo môi trường cởi mở để thanh niên bày tỏ chính kiến, thực hiện đối thoại thay vì tuyên truyền một chiều, khô khan.',
  },
  {
    icon: Shield,
    color: '#F5E8A3',
    title: 'Trang Bị Bản Lĩnh Chính Trị',
    desc: 'Xây dựng "hệ miễn dịch thông tin": tư duy phản biện sắc bén để tự "miễn dịch" trước những thông tin độc hại trên mạng.',
  },
];

function ChallengeCard({ c, i }) {
  const Icon = c.icon;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.12 }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 'var(--radius-md)',
        padding: '1.5rem',
        borderLeft: `3px solid ${c.color}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
        <Icon size={18} color={c.color} />
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF' }}>
          {c.title}
        </h4>
      </div>
      <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.62)', lineHeight: 1.7 }}>{c.desc}</p>
    </motion.div>
  );
}

function SolutionCard({ s, i }) {
  const Icon = s.icon;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      className="hover-card-soft"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: `1.5px solid ${s.color}44`,
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: -30, right: -30, width: 100, height: 100, borderRadius: '50%', background: `radial-gradient(circle, ${s.color}22 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ width: 40, height: 40, borderRadius: 12, background: `${s.color}22`, border: `1px solid ${s.color}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
        <Icon size={18} color={s.color} />
      </div>

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: s.color, marginBottom: '0.75rem' }}>
        {s.title}
      </h3>

      <p style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>{s.desc}</p>
    </motion.div>
  );
}

export default function GenZSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="gen-z" style={{
      background: 'var(--dark-bg)',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Nền */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(139,0,0,0.25) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(212,175,55,0.10) 0%, transparent 40%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      <div className="noise-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Phần 3
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Đảng &{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Niềm Tin Thế Hệ Số
            </span>
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 580, margin: '0 auto', fontSize: '0.97rem' }}>
            Gen Z lớn lên trên không gian mạng — chiến trường mới đặt ra thách thức sống còn cho việc giữ vững niềm tin của thế hệ trẻ vào Đảng.
          </p>
        </motion.div>

        {/* Thách thức */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <AlertTriangle size={20} color="#ff7043" />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
              Những Thách Thức Trên Không Gian Số
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {CHALLENGES.map((c, i) => <ChallengeCard key={i} c={c} i={i} />)}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)', margin: '3.5rem 0' }} />

        {/* Giải pháp sơ lược */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <Shield size={20} color="var(--gold)" />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
              Hướng Đi Trọng Tâm
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {SOLUTIONS_BRIEF.map((s, i) => <SolutionCard key={i} s={s} i={i} />)}
          </div>
        </div>

        {/* Quote kết */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: '3.5rem',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(212,175,55,0.25)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.6, maxWidth: 680, margin: '0 auto' }}>
            "Niềm tin của giới trẻ không đến từ những khẩu hiệu sáo rỗng, mà được xây đắp từ sự chân thành, minh bạch và hiệu quả thực tế."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
