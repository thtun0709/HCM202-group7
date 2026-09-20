import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Anchor, Star, Compass } from 'lucide-react';

/* Phần 1: Tính tất yếu và vai trò lãnh đạo của Đảng */

const POINTS = [
  {
    icon: Anchor,
    color: '#1565c0',
    bg: 'rgba(21,101,192,0.08)',
    border: 'rgba(21,101,192,0.22)',
    label: 'Hình Ảnh Ẩn Dụ "Con Thuyền"',
    items: [
      'Con thuyền → cách mạng, hành trình giành độc lập',
      'Người cầm lái → Đảng dẫn dắt con thuyền đúng hướng',
      'Bàn chỉ nam → chủ nghĩa Mác–Lênin, không lạc hướng',
    ],
    quote: '"Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."',
    src: 'Đường cách mệnh, 1927',
  },
  {
    icon: Star,
    color: '#b71c1c',
    bg: 'rgba(183,28,28,0.07)',
    border: 'rgba(183,28,28,0.22)',
    label: 'Sự Ra Đời Tất Yếu Của Đảng',
    items: [
      'Theo Mác–Lênin: Đảng = CNML + phong trào công nhân',
      'Hồ Chí Minh bổ sung: + phong trào yêu nước Việt Nam',
      'Đấu tranh giai cấp gắn chặt đấu tranh dân tộc (xã hội thuộc địa)',
    ],
    quote: 'Đảng ra đời năm 1930 là nhu cầu tất yếu của xã hội Việt Nam.',
    src: '',
  },
  {
    icon: Compass,
    color: '#e65100',
    bg: 'rgba(230,81,0,0.07)',
    border: 'rgba(230,81,0,0.22)',
    label: 'Vai Trò Lãnh Đạo',
    items: [
      'Đảng được toàn dân tộc trao sứ mệnh lãnh đạo cách mạng',
      'Đội tiên phong của giai cấp công nhân và nhân dân lao động',
      '"Ngoài lợi ích của dân tộc, của Tổ quốc, Đảng không có lợi ích gì khác."',
    ],
    quote: 'Cách mạng Tháng Tám 1945: toàn quốc vùng lên trong hai tuần, lập nên Nước Việt Nam DCCH.',
    src: 'Minh chứng thực tiễn',
  },
];

function PointCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      className="hover-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.14 }}
      style={{
        background: item.bg,
        border: `1.5px solid ${item.border}`,
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          width: 44, height: 44,
          borderRadius: 12,
          background: item.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={22} color="white" strokeWidth={1.8} />
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--gray-800)', lineHeight: 1.2 }}>
          {item.label}
        </div>
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
        {item.items.map((pt, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.87rem', color: 'var(--gray-700)' }}>
            <span style={{ color: item.color, marginTop: 3, flexShrink: 0 }}>▸</span>
            {pt}
          </li>
        ))}
      </ul>

      <div style={{
        background: 'rgba(0,0,0,0.04)',
        border: `1px solid ${item.border}`,
        borderRadius: 'var(--radius-sm)',
        padding: '0.85rem 1rem',
      }}>
        <p style={{ fontSize: '0.83rem', color: 'var(--gray-700)', fontStyle: 'italic', lineHeight: 1.6 }}>{item.quote}</p>
        {item.src && <p style={{ fontSize: '0.7rem', color: item.color, fontWeight: 600, marginTop: '0.3rem', letterSpacing: '0.06em' }}>— {item.src}</p>}
      </div>
    </motion.div>
  );
}

export default function VaiTroSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="vai-tro" style={{ background: 'var(--white)', padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="section-label">Phần 1</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.5rem' }}>
            Tính Tất Yếu & Vai Trò Lãnh Đạo Của Đảng
          </h2>
          <span className="gold-divider" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 640, fontSize: '0.97rem' }}>
            Hồ Chí Minh khẳng định sự lãnh đạo của Đảng là tất yếu lịch sử — không phải đặc quyền mà là sứ mệnh được nhân dân ủy thác.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {POINTS.map((item, i) => (
            <PointCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Callout kết luận */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: '3rem',
            background: 'linear-gradient(135deg, rgba(139,0,0,0.05), rgba(212,175,55,0.05))',
            border: '1px solid rgba(212,175,55,0.28)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem 2rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--red-deep)', fontStyle: 'italic', lineHeight: 1.5 }}>
            "Ngoài lợi ích của dân tộc, của Tổ quốc, thì Đảng không có lợi ích gì khác."
          </p>
          <p style={{ marginTop: '0.4rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            — Hồ Chí Minh, Sửa đổi lối làm việc, 1947
          </p>
        </motion.div>
      </div>
    </section>
  );
}
