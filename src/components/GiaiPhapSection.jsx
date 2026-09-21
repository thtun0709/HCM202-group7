import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Megaphone,
  ShieldAlert,
  HeartHandshake,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Users,
  Sparkles,
  CheckCircle2,
  Flame,
} from 'lucide-react';

/* Phần 4: Giải pháp thích ứng của Đảng & Khơi dậy niềm tin thanh niên (Thuyết trình: Huy)
   Bố cục Dual-Track gọn nhẹ, súc tích, trực quan cho trình chiếu */

const PARTY_SOLUTIONS = [
  {
    icon: Megaphone,
    color: '#1565c0',
    title: '4.1. Đổi Mới Tuyên Truyền Số',
    tag: 'Kênh số Gen Z',
    points: [
      { label: 'Đa dạng hoá hình thức:', text: 'Dùng infographic, podcast, video ngắn tiếp cận tự nhiên.' },
      { label: 'Phản bác tin giả:', text: 'Fact-checking chủ động, thuyết phục bằng số liệu minh bạch.' },
    ],
    basis: 'Tự đổi mới, tự chỉnh đốn',
  },
  {
    icon: ShieldAlert,
    color: '#b71c1c',
    title: '4.2. Chống "Giặc Nội Xâm"',
    tag: 'Trong sạch bộ máy',
    points: [
      { label: 'Kỷ luật nghiêm minh:', text: '"Không có vùng cấm, không có ngoại lệ", đẩy lùi tiêu cực.' },
      { label: 'Tự soi, tự sửa:', text: 'Thực hiện tự phê bình và phê bình để giữ vững lòng tin dân.' },
    ],
    basis: 'Đảng là đạo đức, văn minh',
  },
  {
    icon: HeartHandshake,
    color: '#2e7d32',
    title: '4.3. Đồng Hành & Trao Quyền',
    tag: 'Tạo bệ phóng',
    points: [
      { label: 'Lắng nghe & đối thoại:', text: 'Chuyển từ áp đặt sang cởi mở, giải đáp thẳng thắn băn khoăn.' },
      { label: 'Mở đường băng phát triển:', text: 'Chính sách hỗ trợ khởi nghiệp, công nghệ AI và bán dẫn.' },
    ],
    basis: 'Dân là gốc – Thanh niên là rường cột',
  },
];

const YOUTH_SOLUTIONS = [
  {
    icon: ShieldCheck,
    color: '#0288d1',
    title: '4.4a. "Sức Đề Kháng Số"',
    tag: 'Bản lĩnh tư duy',
    points: [
      { label: 'Đầu lạnh – Tim nóng:', text: 'Tư duy phản biện tỉnh táo, kiên định lòng tự hào dân tộc.' },
      { label: 'Kiểm chứng nguồn tin:', text: 'Không tin mù quáng, miễn nhiễm trước thông tin độc hại.' },
    ],
    basis: 'Dĩ bất biến, ứng vạn biến',
  },
  {
    icon: Flame,
    color: '#c2185b',
    title: '4.4b. "Vừa Hồng Vừa Chuyên"',
    tag: 'Văn hóa mạng',
    points: [
      { label: 'Ứng xử có trách nhiệm:', text: 'Tuyệt đối không lan truyền tin giả, không câu view bẩn.' },
      { label: 'Lan tỏa giá trị tốt:', text: 'Chủ động chia sẻ tri thức, bảo vệ nền tảng tư tưởng trên mạng.' },
    ],
    basis: 'Kết hợp Đức và Tài song hành',
  },
  {
    icon: Cpu,
    color: '#e65100',
    title: '4.4c. Làm Chủ Công Nghệ & Giữ Mình',
    tag: 'Hành động cống hiến',
    points: [
      { label: 'Tiên phong tri thức:', text: 'Học tập xuất sắc, làm chủ công nghệ mới (AI, bán dẫn).' },
      { label: 'Rèn luyện lối sống:', text: 'Thực hành Cần, Kiệm, Liêm, Chính ngay trong kỷ nguyên số.' },
    ],
    basis: 'Đất nước đàng hoàng hơn, to đẹp hơn',
  },
];

const REAL_EXAMPLES = [
  {
    icon: Users,
    color: '#1565c0',
    tag: 'Chính sách & Cơ hội',
    title: 'Đối Thoại Thủ Tướng & Chiến Lược AI, Bán Dẫn',
    desc: 'Hội nghị đối thoại thường niên tháo gỡ trực tiếp nguyện vọng của thanh niên; ban hành chiến lược quốc gia mở lối đào tạo nhân lực công nghệ cao cho thế hệ trẻ.',
  },
  {
    icon: Sparkles,
    color: '#c2185b',
    tag: 'Đổi mới truyền thông',
    title: 'Kênh Số Chính Thống Chiếm Lĩnh Không Gian Mạng',
    desc: 'Báo Nhân Dân, VTV Digital, Thành đoàn bùng nổ trên TikTok và Podcast — biến thông tin chính trị thành nội dung thị giác hấp dẫn, tiếp cận hàng triệu bạn trẻ.',
  },
];

export default function GiaiPhapSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="giai-phap" style={{ background: '#FFFFFF', padding: '5rem 0' }}>
      <div className="container">
        {/* ── Header Gọn Gàng ── */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 25 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '2.75rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span className="section-label">Phần 4 · Huy</span>
            <span style={{ color: 'var(--gray-400)', fontSize: '0.75rem' }}>•</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--red-deep)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Giải Pháp Đồng Bộ
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)', color: 'var(--red-deep)', marginTop: '0.2rem' }}>
            Giải Pháp Thích Ứng & Khơi Dậy Niềm Tin
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 680, margin: '0 auto', fontSize: '0.94rem', lineHeight: 1.6 }}>
            Niềm tin được củng cố từ hai phía: <strong>Đảng kiến tạo môi trường</strong> và <strong>Thanh niên rèn luyện, dấn thân</strong>.
          </p>
        </motion.div>

        {/* ── BỐ CỤC DUAL-TRACK SONG HÀNH ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '1.75rem',
          marginBottom: '2.5rem',
          alignItems: 'stretch',
        }}>

          {/* ══════════ CỘT TRÁI: VỀ PHÍA ĐẢNG ══════════ */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'linear-gradient(180deg, rgba(139,0,0,0.02) 0%, rgba(255,255,255,1) 100%)',
              border: '1.5px solid rgba(139,0,0,0.18)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.25rem, 2vw, 1.75rem)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header cột Trái */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingBottom: '1rem',
              borderBottom: '2px solid rgba(139,0,0,0.1)',
              marginBottom: '1.25rem',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'linear-gradient(135deg, var(--red-deep), #b71c1c)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(139,0,0,0.25)',
              }}>
                <GraduationCap size={20} color="white" />
              </div>
              <div>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--red-deep)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Trách nhiệm lãnh đạo
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
                  Về Phía Đảng: Đổi Mới & Kiến Tạo
                </h3>
              </div>
            </div>

            {/* 3 Thẻ giải pháp gọn gàng */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', flex: 1 }}>
              {PARTY_SOLUTIONS.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2, boxShadow: '0 6px 18px rgba(0,0,0,0.05)' }}
                    transition={{ duration: 0.2 }}
                    style={{
                      background: '#FFFFFF',
                      border: `1.5px solid ${item.color}22`,
                      borderLeft: `4px solid ${item.color}`,
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem 1.15rem',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <div style={{ width: 26, height: 26, borderRadius: 6, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <ItemIcon size={14} color={item.color} />
                        </div>
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
                          {item.title}
                        </h4>
                      </div>
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, color: item.color, background: `${item.color}10`, padding: '0.12rem 0.5rem', borderRadius: 100 }}>
                        {item.tag}
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.6rem' }}>
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--gray-700)', lineHeight: 1.45 }}>
                          <CheckCircle2 size={14} color={item.color} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>
                            <strong style={{ color: 'var(--gray-900)' }}>{pt.label}</strong> {pt.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: item.color,
                      background: `${item.color}0c`,
                      padding: '0.18rem 0.55rem',
                      borderRadius: 6,
                    }}>
                      <span>✦ Tư tưởng:</span>
                      <em style={{ fontStyle: 'normal' }}>"{item.basis}"</em>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ══════════ CỘT PHẢI: VỀ PHÍA THANH NIÊN ══════════ */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'linear-gradient(180deg, rgba(2,136,209,0.02) 0%, rgba(255,255,255,1) 100%)',
              border: '1.5px solid rgba(2,136,209,0.2)',
              borderRadius: 'var(--radius-xl)',
              padding: 'clamp(1.25rem, 2vw, 1.75rem)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header cột Phải */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingBottom: '1rem',
              borderBottom: '2px solid rgba(2,136,209,0.12)',
              marginBottom: '1.25rem',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'linear-gradient(135deg, #0288d1, #0277bd)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(2,136,209,0.25)',
              }}>
                <Sparkles size={20} color="white" />
              </div>
              <div>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0288d1', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Sứ mệnh thế hệ trẻ
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
                  Về Phía Thanh Niên: Rèn Luyện & Dấn Thân
                </h3>
              </div>
            </div>

            {/* 3 Thẻ hành động thanh niên gọn gàng */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', flex: 1 }}>
              {YOUTH_SOLUTIONS.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -2, boxShadow: '0 6px 18px rgba(0,0,0,0.05)' }}
                    transition={{ duration: 0.2 }}
                    style={{
                      background: '#FFFFFF',
                      border: `1.5px solid ${item.color}22`,
                      borderLeft: `4px solid ${item.color}`,
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem 1.15rem',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <div style={{ width: 26, height: 26, borderRadius: 6, background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <ItemIcon size={14} color={item.color} />
                        </div>
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
                          {item.title}
                        </h4>
                      </div>
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, color: item.color, background: `${item.color}10`, padding: '0.12rem 0.5rem', borderRadius: 100 }}>
                        {item.tag}
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.6rem' }}>
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.84rem', color: 'var(--gray-700)', lineHeight: 1.45 }}>
                          <CheckCircle2 size={14} color={item.color} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span>
                            <strong style={{ color: 'var(--gray-900)' }}>{pt.label}</strong> {pt.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: item.color,
                      background: `${item.color}0c`,
                      padding: '0.18rem 0.55rem',
                      borderRadius: 6,
                    }}>
                      <span>✦ Tư tưởng:</span>
                      <em style={{ fontStyle: 'normal' }}>"{item.basis}"</em>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ── KHỐI MINH CHỨNG THỰC TIỄN SỐNG ĐỘNG (Gọn nhẹ) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(21,101,192,0.03) 0%, rgba(194,24,91,0.03) 100%)',
            border: '1.5px solid rgba(212,175,55,0.25)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(1.25rem, 2.5vw, 2rem)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--red-deep)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Minh Chứng Đời Sống
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', color: 'var(--gray-900)', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
              Ví Dụ Thực Tế Về Sự Đồng Hành & Chuyển Mình Số
            </h3>
            <span className="gold-divider center" style={{ margin: '0.4rem auto 0' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '1.25rem',
          }}>
            {REAL_EXAMPLES.map((ex, i) => {
              const ExIcon = ex.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(0,0,0,0.06)' }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: '#FFFFFF',
                    border: `1.5px solid ${ex.color}25`,
                    borderLeft: `4px solid ${ex.color}`,
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.15rem 1.35rem',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: `${ex.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <ExIcon size={17} color={ex.color} />
                        </div>
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
                          {ex.title}
                        </h4>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.84rem', color: 'var(--gray-700)', lineHeight: 1.55, margin: 0 }}>
                      {ex.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '0.85rem', paddingTop: '0.6rem', borderTop: '1px solid var(--gray-100)' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: ex.color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      ✓ {ex.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
