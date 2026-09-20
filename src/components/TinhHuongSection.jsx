import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, HelpCircle, AlertOctagon, Compass, ExternalLink, Ship, CheckCircle2, Award } from 'lucide-react';

/* Phần 5: Phân tích chi tiết câu hỏi tình huống & Case Study thực tiễn */

const SITUATION_POINTS = [
  {
    icon: Zap,
    color: '#e65100',
    title: '1. Tốc Độ Thông Tin',
    tag: 'Thách thức lan truyền',
    desc: 'Tin xuyên tạc lan truyền chỉ trong vài giờ; thông tin chính thống thường đi sau và khô cứng. Chúng ta thắng về tính đúng đắn của nội dung nhưng dễ thua về phương thức và tốc độ kể chuyện.',
  },
  {
    icon: HelpCircle,
    color: '#0288d1',
    title: '2. Cách Tiếp Nhận Của Gen Z',
    tag: 'Tư duy phản biện',
    desc: 'Gen Z luôn đặt câu hỏi "Tại sao?". Đây là thế mạnh của người trẻ tri thức, nhưng nếu không được giải đáp thỏa đáng, minh bạch thì sự hoài nghi dễ chuyển hóa thành sự xa cách.',
  },
  {
    icon: AlertOctagon,
    color: '#c2185b',
    title: '3. Gốc Rễ Của Vấn Đề',
    tag: 'Bản chất niềm tin',
    desc: 'Tin giả không tự nó sinh ra sự mất niềm tin, mà nó tấn công và khoét sâu vào những khoảng trống nơi niềm tin đã bị hiện tượng tham nhũng, quan liêu, tiêu cực làm xói mòn.',
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
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="section-label" style={{ color: 'var(--gold)' }}>Phần 5</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>•</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Phân Tích Tình Huống Thực Tế
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3.8vw, 2.5rem)', color: '#FFFFFF', marginTop: '0.3rem' }}>
            Giải Bài Toán Lãnh Đạo Thế Hệ Số
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 680, margin: '0 auto', fontSize: '0.97rem', lineHeight: 1.7 }}>
            Đảng đang lãnh đạo một thế hệ trẻ lớn lên hoàn toàn trên không gian mạng — nơi mọi thứ đều bị đặt câu hỏi. Lời giải theo tư tưởng Hồ Chí Minh là gì?
          </p>
        </motion.div>

        {/* 3 Điểm Mấu Chốt */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {SITUATION_POINTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  position: 'relative',
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${item.color}22`,
                    border: `1px solid ${item.color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color={item.color} />
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.6rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Soi Chiếu Lý Luận: Không Cấm Đoán Mà Đối Thoại & Tự Chỉnh Đốn */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(139,0,0,0.3) 0%, rgba(26,5,5,0.6) 100%)',
            border: '1px solid rgba(212,175,55,0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem 2.25rem',
            marginBottom: '4rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Compass size={24} color="var(--red-deep)" strokeWidth={2} />
            </div>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                Soi chiếu tư tưởng Hồ Chí Minh
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                Lời giải không nằm ở "cấm đoán hay xóa bài"
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Bác từng cảnh báo: <em>"Đảng không đạo đức, không văn minh thì sẽ mất quyền lãnh đạo, vì dân không còn tin theo."</em> Vì thế, giải pháp cốt lõi phải dựa trên 2 nguyên tắc Người đã dạy:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--gold)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--gold-light)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                    1. Liên hệ mật thiết với nhân dân
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.7)' }}>
                    Chuyển sang <strong>đối thoại sòng phẳng, lắng nghe</strong> thay vì tuyên truyền áp đặt một chiều.
                  </div>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '3px solid #e53935' }}>
                  <div style={{ fontWeight: 700, color: '#ff8a80', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                    2. Tự phê bình & tự chỉnh đốn
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.7)' }}>
                    <strong>Dám nhìn thẳng vào khuyết điểm</strong>, kiên quyết xử lý tiêu cực, chứng minh bằng hành động và tính liêm chính thực tế.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Study Thực Tế: Báo Nhân Dân & Nghị Quyết 57-NQ/TW */}
        <motion.div
          ref={caseRef}
          initial={{ opacity: 0, y: 40 }}
          animate={caseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
            border: '1.5px solid rgba(212,175,55,0.35)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <Award size={20} color="var(--gold)" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Minh Chứng Thực Tiễn Sống Động
            </span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.6rem' }}>
            Nghị Quyết 57-NQ/TW: Người Cầm Lái Định Hướng Kỷ Nguyên Mới
          </h3>

          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Dẫn chứng từ bài viết trên <strong>Báo Nhân Dân (25/12/2025)</strong>: <em>"Năm 2026: Hành động đột phá, lan tỏa kết quả, tăng tốc thực hiện Nghị quyết số 57-NQ/TW"</em> của Bộ Chính trị.
          </p>

          {/* 3 Thống kê ấn tượng */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.3rem', fontWeight: 900, color: 'var(--gold-light)' }}>
                16,4%
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.25rem' }}>
                Đóng góp của KHCN, đổi mới sáng tạo & CĐS trong GDP (2025)
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.3rem', fontWeight: 900, color: '#42a5f5' }}>
                44/139
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.25rem' }}>
                Thứ hạng Chỉ số Đổi mới sáng tạo toàn cầu (GII) của Việt Nam
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.3rem', fontWeight: 900, color: '#66bb6a' }}>
                ~4.000
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', marginTop: '0.25rem' }}>
                Doanh nghiệp khởi nghiệp sáng tạo (Startup) toàn quốc
              </div>
            </div>
          </div>

          {/* Phân tích hình tượng con thuyền & lời kết */}
          <div style={{
            background: 'rgba(212,175,55,0.06)',
            border: '1px dashed rgba(212,175,55,0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            marginBottom: '1.75rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <Ship size={20} color="var(--gold)" />
              <strong style={{ color: 'var(--gold-light)', fontSize: '0.95rem' }}>
                Hình ảnh ẩn dụ "Con thuyền và Người cầm lái" trong kỷ nguyên số:
              </strong>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={16} color="var(--gold)" style={{ marginTop: 3, flexShrink: 0 }} />
                <span><strong>Đảng là người cầm lái:</strong> Nghị quyết 57 (12/2024) không trực tiếp tạo ra dòng code hay con chip, mà mở lối, xác định hướng đi chiến lược cho cả quốc gia.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={16} color="var(--gold)" style={{ marginTop: 3, flexShrink: 0 }} />
                <span><strong>Thanh niên & Doanh nghiệp là tay chèo:</strong> 4.000 startup và hàng triệu kỹ sư trẻ chính là lực lượng trực tiếp chèo lái con thuyền bứt phá. Con số 16,4% GDP khẳng định con thuyền đang đi đúng hướng.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={16} color="var(--gold)" style={{ marginTop: 3, flexShrink: 0 }} />
                <span><strong>Tự chỉnh đốn để tiến xa:</strong> Lời Tổng Bí thư nhấn mạnh năm 2026 phải chuyển từ "nền tảng sang kết quả, từ chính sách sang sản phẩm" — không ngủ quên trên thành tích mà liên tục tự đặt yêu cầu cao hơn, đúng tinh thần tự chỉnh đốn của Bác.</span>
              </li>
            </ul>
          </div>

          {/* Nguồn link */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>
              Nguồn trích dẫn: Báo Nhân Dân điện tử (Cơ quan Trung ương của Đảng Cộng sản Việt Nam)
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
                padding: '0.4rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(212,175,55,0.4)',
                background: 'rgba(212,175,55,0.1)',
                transition: 'var(--transition)',
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
