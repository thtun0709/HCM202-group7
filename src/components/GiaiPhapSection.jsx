import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Megaphone, Heart, GraduationCap, Users, Sparkles } from 'lucide-react';

/* Phần 4: Giải pháp thích ứng của Đảng & Khơi dậy niềm tin thanh niên */

const PARTY_SOLUTIONS = [
  {
    icon: Megaphone,
    color: '#1565c0',
    bg: 'rgba(21,101,192,0.07)',
    border: 'rgba(21,101,192,0.2)',
    label: '4.1. Đổi Mới Tuyên Truyền',
    title: 'Chuyển Đổi Số Công Tác Tư Tưởng',
    items: [
      'Thay lối tuyên truyền một chiều bằng định dạng số gần gũi Gen Z (infographic, podcast, video ngắn)',
      'Kiểm chứng thông tin (fact-checking) ngay tại nơi phát sinh để phản bác tin xuyên tạc kịp thời',
      'Lấy thông tin chính thống, số liệu minh bạch và thành tựu thực tế của đất nước làm công cụ thuyết phục',
    ],
    basis: 'Vận dụng nguyên tắc "thường xuyên tự đổi mới, tự chỉnh đốn" và tinh thần chống bảo thủ, giáo điều của Hồ Chí Minh.',
  },
  {
    icon: Heart,
    color: '#b71c1c',
    bg: 'rgba(183,28,28,0.07)',
    border: 'rgba(183,28,28,0.2)',
    label: '4.2. Làm Trong Sạch Bộ Máy',
    title: 'Phòng, Chống "Giặc Nội Xâm"',
    items: [
      '"Không có vùng cấm, không có ngoại lệ" trong phòng, chống tham nhũng, lãng phí, tiêu cực',
      'Dũng cảm nhìn thẳng vào sự thật — nghiêm túc "tự phê bình và phê bình"',
      'Kiên quyết xử lý cán bộ suy thoái để củng cố niềm tin của nhân dân và thế hệ trẻ',
    ],
    basis: 'Vận dụng nguyên tắc "kỷ luật nghiêm minh" và quyết tâm giữ vững bản chất "Đảng là đạo đức, là văn minh".',
  },
  {
    icon: Heart,
    color: '#2e7d32',
    bg: 'rgba(46,125,50,0.07)',
    border: 'rgba(46,125,50,0.2)',
    label: '4.3. Đồng Hành Thanh Niên',
    title: 'Trao Quyền & Lắng Nghe Người Trẻ',
    items: [
      'Khắc ghi lời dạy Bác: "Nước nhà thịnh hay suy, yếu hay mạnh một phần lớn là do các thanh niên"',
      'Chuyển từ "áp đặt" sang "đối thoại và lắng nghe", giải đáp thẳng thắn các băn khoăn của người trẻ',
      'Ban hành chính sách hỗ trợ khởi nghiệp, phát triển công nghệ cao (bán dẫn, AI) — tạo "đường băng" cống hiến',
      'Nhân rộng các tấm gương đảng viên trẻ tiên phong, dấn thân để truyền cảm hứng sống đẹp',
    ],
    basis: 'Quán triệt tư tưởng "dân là gốc" và nguyên tắc "liên hệ mật thiết với nhân dân" của Hồ Chí Minh.',
  },
];

const REAL_EXAMPLES = [
  {
    icon: Users,
    color: '#0288d1',
    title: 'Đối Thoại & Hỗ Trợ Người Trẻ',
    desc: 'Hội nghị đối thoại thường niên giữa Thủ tướng Chính phủ với thanh niên; Chiến lược quốc gia về phát triển nguồn nhân lực công nghệ bán dẫn và Trí tuệ nhân tạo (AI) mở ra hàng ngàn cơ hội cho sinh viên công nghệ.',
  },
  {
    icon: Sparkles,
    color: '#c2185b',
    title: 'Đổi Mới Truyền Thông Chính Thống',
    desc: 'Các kênh truyền thông của Đoàn, Hội và cơ quan báo chí chính thống (VTV Digital, Thành đoàn, Thông tin Chính phủ) chuyển mình mạnh mẽ sang TikTok, Podcast, nhận được hàng triệu lượt tương tác tích cực từ sinh viên.',
  },
];

const YOUTH_DUTIES = [
  {
    icon: GraduationCap,
    color: '#D4AF37',
    title: 'Rèn Luyện "Sức Đề Kháng Số"',
    desc: 'Xây dựng "hệ miễn dịch thông tin": đầu lạnh (tư duy phản biện, kiểm chứng) và trái tim nóng (lòng yêu nước, tự hào dân tộc).',
  },
  {
    icon: Cpu,
    color: '#E8C84D',
    title: 'Học Tập Chuyên Môn Giỏi',
    desc: 'Nâng cao kỹ năng công nghệ, thành thạo AI, bán dẫn; giữ gìn đạo đức Cần, Kiệm, Liêm, Chính trong lối sống số hiện đại.',
  },
  {
    icon: Heart,
    color: '#F5E8A3',
    title: '"Vừa Hồng, Vừa Chuyên"',
    desc: 'Không a dua, lan truyền tin đồn; chủ động bảo vệ nền tảng tư tưởng trên không gian số — đây là đạo đức cách mạng mới.',
  },
];

function SolutionRow({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.1 }}
      style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
        flexDirection: isLeft ? 'row' : 'row-reverse',
        marginBottom: '2rem',
      }}
      className="solution-row"
    >
      {/* Icon */}
      <div style={{
        flexShrink: 0,
        width: 56, height: 56,
        borderRadius: 16,
        background: item.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 8px 24px ${item.color}44`,
      }}>
        <item.icon size={26} color="white" strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        background: item.bg,
        border: `1.5px solid ${item.border}`,
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem 1.75rem',
      }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: item.color, marginBottom: '0.35rem' }}>
          {item.label}
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--gray-800)', marginBottom: '0.75rem' }}>
          {item.title}
        </h3>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
          {item.items.map((pt, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.87rem', color: 'var(--gray-700)', alignItems: 'flex-start' }}>
              <span style={{ color: item.color, marginTop: 3, flexShrink: 0 }}>▸</span>
              {pt}
            </li>
          ))}
        </ul>
        <div style={{ background: 'rgba(0,0,0,0.04)', borderRadius: 'var(--radius-sm)', padding: '0.65rem 0.9rem', borderLeft: `3px solid ${item.color}` }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--gray-600)', fontStyle: 'italic', lineHeight: 1.6 }}>
            <strong style={{ color: item.color }}>Cơ sở lý luận:</strong> {item.basis}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function YouthCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      className="hover-card-soft"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{
        background: '#FFFFFF',
        border: '1.5px solid var(--gray-200)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        boxShadow: 'var(--shadow-card)',
        borderTop: `3px solid ${item.color}`,
      }}
    >
      <div style={{ width: 48, height: 48, borderRadius: 14, background: `${item.color}18`, border: `1px solid ${item.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
        <Icon size={22} color={item.color} strokeWidth={1.8} />
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--gray-800)', marginBottom: '0.6rem' }}>
        {item.title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>{item.desc}</p>
    </motion.div>
  );
}

export default function GiaiPhapSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });
  const youthRef = useRef(null);
  const youthInView = useInView(youthRef, { once: true });

  return (
    <section id="giai-phap" style={{ background: 'var(--white)', padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="section-label">Phần 4</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.5rem' }}>
            Giải Pháp Thích Ứng & Khơi Dậy Niềm Tin Thanh Niên
          </h2>
          <span className="gold-divider" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 640, fontSize: '0.97rem' }}>
            Từ nguyên tắc của Hồ Chí Minh đến hành động thực tiễn — Đảng phải đổi mới, thanh niên phải rèn luyện.
          </p>
        </motion.div>

        {/* Solutions */}
        <div style={{ marginBottom: '4rem' }}>
          {PARTY_SOLUTIONS.map((item, i) => (
            <SolutionRow key={i} item={item} index={i} />
          ))}
        </div>

        {/* Youth responsibilities */}
        <motion.div
          ref={youthRef}
          initial={{ opacity: 0, y: 30 }}
          animate={youthInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', color: 'var(--red-deep)' }}>
            Trách Nhiệm Của Thanh Niên, Sinh Viên
          </h3>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 500, margin: '0 auto', fontSize: '0.95rem' }}>
            Vận dụng phương châm <em>"dĩ bất biến, ứng vạn biến"</em> và lời dạy Bác: thanh niên phải <em>"vừa hồng, vừa chuyên"</em>.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
          {YOUTH_DUTIES.map((item, i) => (
            <YouthCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Minh Chứng Thực Tiễn */}
        <div style={{
          background: 'var(--gray-50)',
          border: '1px solid var(--gray-200)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.25rem',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--red-deep)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Thực Tiễn Sống Động
            </span>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--gray-800)', marginTop: '0.2rem' }}>
              Ví Dụ Thực Tế Về Sự Đồng Hành & Đổi Mới
            </h4>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {REAL_EXAMPLES.map((ex, i) => {
              const Icon = ex.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid var(--gray-200)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    borderLeft: `4px solid ${ex.color}`,
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: `${ex.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} color={ex.color} />
                    </div>
                    <h5 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--gray-800)' }}>
                      {ex.title}
                    </h5>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>
                    {ex.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .solution-row { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
