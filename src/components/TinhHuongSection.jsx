import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Zap,
  HelpCircle,
  AlertOctagon,
  Compass,
  ExternalLink,
  CheckCircle2,
  Award,
  Users,
} from 'lucide-react';

/* Phần 5.1: Phân tích tình huống thực tế & Dẫn chứng Nghị quyết 57-NQ/TW */

const SITUATION_POINTS = [
  {
    icon: Zap,
    color: '#e65100',
    tag: 'Tốc độ lan truyền',
    title: '1. Tin Xuyên Tạc Lan Nhanh',
    desc: 'Tin xuyên tạc lan truyền trên mạng nhanh hơn thông tin chính thống. Đòi hỏi truyền thông của Đảng phải chủ động, nhanh nhạy và kịp thời dẫn dắt.',
  },
  {
    icon: HelpCircle,
    color: '#0288d1',
    tag: 'Tư duy phản biện',
    title: '2. Gen Z Hay Hỏi "Tại Sao?"',
    desc: 'Thế hệ trẻ có nhu cầu hiểu rõ bản chất vấn đề. Cần được giải thích rõ ràng, minh bạch và thuyết phục thay vì tuyên truyền áp đặt một chiều.',
  },
  {
    icon: AlertOctagon,
    color: '#c2185b',
    tag: 'Bản chất niềm tin',
    title: '3. Khoảng Trống Niềm Tin',
    desc: 'Tin giả dễ tác động và xâm nhập mạnh nhất vào những nơi niềm tin đã bị ảnh hưởng bởi những vấn đề tiêu cực trong đời sống.',
  },
];

const STATS = [
  {
    num: '16,4%',
    label: 'Tỷ trọng KHCN, ĐMST & CĐS trong GDP',
    sub: 'Ước đạt năm 2025',
    color: 'var(--gold-light)',
  },
  {
    num: '44/139',
    label: 'Chỉ số Đổi mới sáng tạo toàn cầu (GII)',
    sub: 'Thứ hạng của Việt Nam',
    color: '#42a5f5',
  },
  {
    num: '~4.000',
    label: 'Doanh nghiệp khởi nghiệp ĐMST',
    sub: 'Lực lượng sáng tạo số',
    color: '#66bb6a',
  },
];

const RESOLUTION_POINTS = [
  {
    tag: 'Định hướng',
    title: 'Bộ Chính trị mở lối (12/2024):',
    desc: 'Ban hành Nghị quyết 57-NQ/TW làm "kim chỉ nam", định hình chiến lược phát triển khoa học công nghệ và đổi mới sáng tạo.',
  },
  {
    tag: 'Hành động',
    title: 'Doanh nghiệp & Nhân dân triển khai:',
    desc: 'Chính doanh nghiệp và người dân là chủ thể trực tiếp hành động, biến định hướng thành kết quả thực tiễn.',
  },
  {
    tag: 'Đột phá',
    title: 'Năm 2026 bứt phá lan tỏa:',
    desc: 'Chuyển từ "xây dựng nền tảng" sang "lan tỏa kết quả", biến chính sách thành sản phẩm cụ thể cho đời sống.',
  },
];

export default function TinhHuongSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });
  const caseRef = useRef(null);
  const caseInView = useInView(caseRef, { once: true, margin: '-60px' });

  return (
    <section
      id="tinh-huong"
      style={{
        background: 'linear-gradient(175deg, #0F0A0A 0%, #1A0D0D 50%, #0D0D0D 100%)',
        padding: '6rem 0',
        position: 'relative',
        color: '#FFFFFF',
        overflow: 'hidden',
        borderTop: '1px solid rgba(212,175,55,0.18)',
      }}
    >
      {/* Background patterns */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 85% 30%, rgba(212,175,55,0.08) 0%, transparent 50%), radial-gradient(circle at 15% 70%, rgba(139,0,0,0.3) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div className="noise-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 25 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="section-label" style={{ color: 'var(--gold)' }}>Phần 5.1</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>•</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Phân Tích Tình Huống
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#FFFFFF', marginTop: '0.2rem' }}>
            Bài Toán Lãnh Đạo Trong Không Gian Mạng
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 680, margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.65 }}>
            Đảng đang lãnh đạo trong bối cảnh Gen Z lớn lên trên không gian mạng — nơi thông tin thật và giả lan truyền rất nhanh.
          </p>
        </motion.div>

        {/* 3 Điểm Mấu Chốt */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {SITUATION_POINTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  borderTop: `3px solid ${item.color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${item.color}20`,
                    border: `1px solid ${item.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color={item.color} />
                  </div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: item.color, background: `${item.color}15`, padding: '0.15rem 0.5rem', borderRadius: 100 }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.08rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Soi Chiếu Lý Luận: Giữ Niềm Tin Nhân Dân */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(139,0,0,0.25) 0%, rgba(26,5,5,0.5) 100%)',
            border: '1.5px solid rgba(212,175,55,0.3)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.5rem, 3vw, 2.25rem)',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <Compass size={22} color="var(--gold)" />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Soi Chiếu Tư Tưởng Hồ Chí Minh
            </span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
            Để Giữ Niềm Tin Của Nhân Dân & Người Trẻ Cần Gì?
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Theo Bác, niềm tin không tự nhiên có mà phải xây đắp từ hai trụ cột căn bản:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.35)', padding: '1.15rem 1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '3.5px solid var(--gold)' }}>
              <div style={{ fontWeight: 700, color: 'var(--gold-light)', fontSize: '0.92rem', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Users size={16} color="var(--gold)" />
                1. Gắn Bó & Đối Thoại Với Dân
              </div>
              <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, margin: 0 }}>
                Lắng nghe tâm tư, đối thoại chân thành và giải đáp thỏa đáng thắc mắc thay vì áp đặt định kiến.
              </p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.35)', padding: '1.15rem 1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '3.5px solid #ef5350' }}>
              <div style={{ fontWeight: 700, color: '#ff8a80', fontSize: '0.92rem', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#ef5350" />
                2. Thường Xuyên Tự Phê Bình & Tự Chỉnh Đốn
              </div>
              <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, margin: 0 }}>
                Dám nhìn thẳng vào khuyết điểm, kiên quyết xử lý tiêu cực, chứng minh bằng hành động liêm chính thực tế.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Dẫn Chứng Thực Tế: Báo Nhân Dân & Nghị Quyết 57-NQ/TW */}
        <motion.div
          ref={caseRef}
          initial={{ opacity: 0, y: 30 }}
          animate={caseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
            border: '1.5px solid rgba(212,175,55,0.3)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} color="var(--gold)" />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Dẫn Chứng Thực Tế · Báo Nhân Dân (25/12/2025)
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
              Nghị Quyết 57-NQ/TW của Bộ Chính trị
            </span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 2.8vw, 1.75rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>
            Tăng Tốc Thực Hiện Nghị Quyết 57: Từ Định Hướng Đến Sản Phẩm
          </h3>

          {/* 3 Con Số Thống Kê */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {STATS.map((st, sIdx) => (
              <div
                key={sIdx}
                style={{
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 900, color: st.color, lineHeight: 1.1 }}>
                  {st.num}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FFFFFF', marginTop: '0.4rem' }}>
                  {st.label}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.15rem' }}>
                  {st.sub}
                </div>
              </div>
            ))}
          </div>

          {/* 3 Điểm Cốt Lõi Nghị Quyết 57 */}
          <div style={{
            background: 'rgba(212,175,55,0.05)',
            border: '1px dashed rgba(212,175,55,0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem 1.5rem',
            marginBottom: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            {RESOLUTION_POINTS.map((rp, rIdx) => (
              <div key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.86rem', lineHeight: 1.6 }}>
                <CheckCircle2 size={16} color="var(--gold)" style={{ flexShrink: 0, marginTop: 3 }} />
                <span>
                  <strong style={{ color: 'var(--gold-light)' }}>{rp.title}</strong>{' '}
                  <span style={{ color: 'rgba(255,255,255,0.85)' }}>{rp.desc}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Link Bài Báo Gốc */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>
              Trích từ: Báo Nhân Dân ngày 25/12/2025
            </div>
            <a
              href="https://nhandan.vn/nam-2026-hanh-dong-dot-pha-lan-toa-ket-qua-tang-toc-thuc-hien-nghi-quyet-so-57-nqtw-post932907.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--gold)',
                fontSize: '0.82rem',
                fontWeight: 600,
                textDecoration: 'none',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(212,175,55,0.4)',
                background: 'rgba(212,175,55,0.1)',
                transition: 'all 0.2s ease',
              }}
            >
              Xem bài viết gốc trên Báo Nhân Dân
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
