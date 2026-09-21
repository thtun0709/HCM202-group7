import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Anchor, Star, Compass, X, ZoomIn, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import duongCachMenhImg from '../assets/duong_cach_menh.png';
import thanhLapDangImg from '../assets/thanh_lap_dang.png';
import suaDoiLoiLamViecImg from '../assets/sua_doi_loi_lam_viec.jpg';

/* Phần 1: Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam (Thiết kế dạng hàng ngang trực quan) */

const POINTS = [
  {
    id: '1.1',
    image: duongCachMenhImg,
    tag: 'Tác phẩm Đường Kách mệnh (1927)',
    icon: Anchor,
    color: '#1565c0',
    bg: 'rgba(21,101,192,0.03)',
    border: 'rgba(21,101,192,0.22)',
    label: '1.1. Giải Thích Hình Ảnh Ẩn Dụ "Con Thuyền"',
    items: [
      {
        highlight: 'Con thuyền:',
        text: 'Là cách mạng, là dân tộc Việt Nam trên hành trình giành độc lập và đi lên chủ nghĩa xã hội.',
      },
      {
        highlight: 'Người cầm lái:',
        text: 'Là Đảng Cộng sản Việt Nam.',
      },
      {
        highlight: 'Bàn chỉ nam:',
        text: 'Là chủ nghĩa Mác – Lênin.',
      },
      {
        highlight: 'Đúc kết:',
        text: 'Cách mạng muốn thành công phải có Đảng vững vàng lãnh đạo.',
      },
    ],
    bottomBox: {
      type: 'quote',
      title: 'Trích Tác Phẩm Đường Kách Mệnh (1927)',
      icon: Quote,
      quote: '"Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."',
      src: 'Nguyễn Ái Quốc — Đường Kách mệnh (1927)',
    },
  },
  {
    id: '1.2',
    image: thanhLapDangImg,
    tag: 'Ngày Thành lập Đảng (3/2/1930)',
    icon: Star,
    color: '#b71c1c',
    bg: 'rgba(183,28,28,0.03)',
    border: 'rgba(183,28,28,0.22)',
    label: '1.2. Sự Ra Đời Của Đảng',
    items: [
      {
        highlight: 'Theo lý luận Mác – Lênin:',
        text: 'Đảng = chủ nghĩa Mác – Lênin + phong trào công nhân.',
      },
      {
        highlight: 'Hồ Chí Minh bổ sung yếu tố thứ ba:',
        text: 'Đảng Cộng sản Việt Nam = chủ nghĩa Mác – Lênin + phong trào công nhân + phong trào yêu nước.',
      },
      {
        highlight: 'Tính tất yếu lịch sử:',
        text: 'Đảng ra đời năm 1930 là nhu cầu tất yếu của xã hội Việt Nam.',
      },
    ],
    bottomBox: {
      type: 'formula',
      title: 'Quy Luật Sáng Tạo Của Hồ Chí Minh',
      icon: Sparkles,
      formula: 'CN Mác–Lênin + PT Công nhân + PT Yêu nước = Đảng CSVN',
      note: 'Mốc son lịch sử ngày 3/2/1930 — Chấm dứt khủng hoảng đường lối cứu nước',
    },
  },
  {
    id: '1.3',
    image: suaDoiLoiLamViecImg,
    tag: 'Tác phẩm Sửa đổi lối làm việc (1947)',
    icon: Compass,
    color: '#e65100',
    bg: 'rgba(230,81,0,0.03)',
    border: 'rgba(230,81,0,0.22)',
    label: '1.3. Vai Trò Lãnh Đạo Của Đảng',
    items: [
      {
        highlight: 'Sứ mệnh dân tộc:',
        text: 'Đảng được toàn dân tộc trao sứ mệnh lãnh đạo giải phóng dân tộc và đi lên chủ nghĩa xã hội.',
      },
      {
        highlight: 'Đội tiên phong:',
        text: 'Đảng là đội tiên phong của giai cấp công nhân, nhân dân lao động và dân tộc.',
      },
      {
        highlight: 'Không có lợi ích riêng:',
        text: '"Ngoài lợi ích của dân tộc, của Tổ quốc, thì Đảng không có lợi ích gì khác." (Trích tác phẩm Sửa đổi lối làm việc, năm 1947 của Chủ tịch Hồ Chí Minh).',
      },
    ],
    bottomBox: {
      type: 'examples',
      title: 'Ví Dụ Thực Tế Minh Chứng',
      icon: CheckCircle2,
      examples: [
        {
          event: 'Cách mạng Tháng Tám 1945:',
          desc: 'Chỉ trong khoảng hai tuần, nhân dân cả nước đứng lên giành chính quyền dưới sự lãnh đạo của Đảng, lập nên nước Việt Nam Dân chủ Cộng hòa.',
        },
        {
          event: 'Thời kỳ Đổi mới:',
          desc: 'Đảng lãnh đạo chuyển đổi mô hình kinh tế, đưa Việt Nam từ một nước nghèo, thiếu lương thực thành nước có thu nhập trung bình và hội nhập sâu rộng (minh chứng cho vai trò lãnh đạo trong thời bình).',
        },
      ],
    },
  },
];

/* ── Thẻ theo dạng Hàng Ngang (Horizontal Card) ── */
function HorizontalPointCard({ item, index, onImageClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = item.icon;
  const BoxIcon = item.bottomBox.icon;

  return (
    <motion.div
      ref={ref}
      className="horizontal-point-card"
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      style={{
        background: '#FFFFFF',
        border: `1.5px solid ${item.border}`,
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
        boxShadow: 'var(--shadow-card)',
        marginBottom: '2.5rem',
        display: 'grid',
        gridTemplateColumns: 'clamp(380px, 44%, 580px) 1fr',
        gap: 'clamp(1.75rem, 3.5vw, 3rem)',
        alignItems: 'stretch',
      }}
    >
      {/* ── Cột Trái: Hình ảnh tư liệu LỚN, RỘNG, HIỂN THỊ RÕ RÀNG ── */}
      <div
        onClick={() => onImageClick(item)}
        title="Nhấp để phóng to toàn màn hình"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: 320,
          height: '100%',
          maxHeight: 420,
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          cursor: 'pointer',
          background: 'linear-gradient(145deg, #222222 0%, #121212 55%, #080808 100%)',
          border: '1px solid rgba(0,0,0,0.25)',
          boxShadow: 'inset 0 0 25px rgba(0,0,0,0.65), 0 8px 24px rgba(0,0,0,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px',
        }}
      >
        <img
          src={item.image}
          alt={item.tag}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
            borderRadius: 6,
            boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
            transition: 'transform 0.4s ease',
          }}
          className="point-card-img"
        />

        {/* Huy hiệu tag nổi trên ảnh */}
        <div style={{
          position: 'absolute',
          top: 14,
          left: 14,
          background: 'rgba(10,5,5,0.82)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '6px 14px',
          borderRadius: 100,
          fontSize: '0.76rem',
          fontWeight: 700,
          color: '#FFFFFF',
          border: `1px solid ${item.color}aa`,
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          letterSpacing: '0.02em',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color }} />
          {item.tag}
        </div>

        {/* Nút kính lúp góc phải */}
        <div style={{
          position: 'absolute',
          bottom: 14,
          right: 14,
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.72)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255,255,255,0.25)',
          transition: 'all 0.2s',
        }}>
          <ZoomIn size={18} />
        </div>
      </div>

      {/* ── Cột Phải: Nội dung chi tiết & Điểm nhấn ── */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: '0.5rem 0',
      }}>
        <div>
          {/* Tiêu đề & Icon */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            marginBottom: '1.25rem',
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: item.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: `0 6px 18px ${item.color}35`,
            }}>
              <Icon size={22} color="white" strokeWidth={1.9} />
            </div>
            <div>
              <div style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                color: item.color,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.15rem',
              }}>
                Mục {item.id}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                fontWeight: 700,
                color: 'var(--gray-900)',
                margin: 0,
                lineHeight: 1.3,
              }}>
                {item.label}
              </h3>
            </div>
          </div>

          {/* Danh sách ý chính */}
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 1.5rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
          }}>
            {item.items.map((pt, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  fontSize: '0.93rem',
                  color: 'var(--gray-700)',
                  lineHeight: 1.65,
                }}
              >
                <span style={{ color: item.color, marginTop: 4, flexShrink: 0, fontWeight: 700, fontSize: '1rem' }}>▸</span>
                <div>
                  <strong style={{ color: 'var(--gray-900)' }}>{pt.highlight}</strong> {pt.text}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Khung điểm nhấn ở đáy (Bottom Highlight Box) ── */}
        <div style={{
          background: item.bg,
          border: `1.5px solid ${item.border}`,
          borderLeft: `5px solid ${item.color}`,
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            fontSize: '0.76rem',
            fontWeight: 700,
            color: item.color,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.45rem',
          }}>
            <BoxIcon size={15} color={item.color} />
            {item.bottomBox.title}
          </div>

          {/* Dạng Trích dẫn (1.1) */}
          {item.bottomBox.type === 'quote' && (
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-800)', fontStyle: 'italic', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
                {item.bottomBox.quote}
              </p>
              <p style={{ fontSize: '0.75rem', color: item.color, fontWeight: 600, marginTop: '0.35rem', margin: '0.35rem 0 0' }}>
                — {item.bottomBox.src}
              </p>
            </div>
          )}

          {/* Dạng Công thức (1.2) */}
          {item.bottomBox.type === 'formula' && (
            <div>
              <div style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: '#b71c1c',
                background: '#FFFFFF',
                padding: '0.6rem 0.85rem',
                borderRadius: 8,
                border: '1.5px dashed rgba(183,28,28,0.35)',
                textAlign: 'center',
                lineHeight: 1.45,
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              }}>
                {item.bottomBox.formula}
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--gray-600)', fontStyle: 'italic', marginTop: '0.45rem', textAlign: 'center' }}>
                {item.bottomBox.note}
              </div>
            </div>
          )}

          {/* Dạng Ví dụ thực tế (1.3) */}
          {item.bottomBox.type === 'examples' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {item.bottomBox.examples.map((ex, idx) => (
                <div key={idx} style={{ fontSize: '0.86rem', color: 'var(--gray-700)', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--gray-900)' }}>• {ex.event}</strong> {ex.desc}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function VaiTroSection() {
  const [modalImage, setModalImage] = useState(null);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="vai-tro" style={{ background: 'var(--white)', padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="section-label">Phần 1 · Phúc</span>
            <span style={{ color: 'var(--gray-400)', fontSize: '0.75rem' }}>•</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--red-deep)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Tính Tất Yếu & Sứ Mệnh Lịch Sử
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3.8vw, 2.5rem)', color: 'var(--red-deep)', marginTop: '0.3rem' }}>
            Tính Tất Yếu & Vai Trò Lãnh Đạo Của Đảng
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 680, margin: '0 auto', fontSize: '0.97rem', lineHeight: 1.7 }}>
            Hồ Chí Minh khẳng định sự lãnh đạo của Đảng là tất yếu lịch sử — không phải đặc quyền mà là sứ mệnh được nhân dân và Tổ quốc trao gửi.
          </p>
        </motion.div>

        {/* ── 3 Hàng Ngang Trực Quan (Horizontal Rows) ── */}
        <div>
          {POINTS.map((item, i) => (
            <HorizontalPointCard key={i} item={item} index={i} onImageClick={setModalImage} />
          ))}
        </div>

        {/* Callout trích dẫn kết luận */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: '3.5rem',
            background: 'linear-gradient(135deg, rgba(139,0,0,0.05), rgba(212,175,55,0.06))',
            border: '1.5px solid rgba(212,175,55,0.32)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem 2.5rem',
            textAlign: 'center',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
          }}
        >
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.18rem', fontWeight: 700, color: 'var(--red-deep)', fontStyle: 'italic', lineHeight: 1.6, maxWidth: 800, margin: '0 auto' }}>
            "Ngoài lợi ích của dân tộc, của Tổ quốc, thì Đảng không có lợi ích gì khác."
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.78rem', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            — Chủ tịch Hồ Chí Minh, Sửa đổi lối làm việc (1947)
          </p>
        </motion.div>
      </div>

      {/* ── Modal phóng to hình ảnh tư liệu toàn màn hình ── */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(0,0,0,0.88)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: 900,
                width: '100%',
                background: '#180E0E',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(212,175,55,0.45)',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.7)',
              }}
            >
              {/* Nút đóng */}
              <button
                onClick={() => setModalImage(null)}
                aria-label="Đóng"
                style={{
                  position: 'absolute',
                  top: 14,
                  right: 14,
                  background: 'rgba(0,0,0,0.65)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: '50%',
                  width: 38,
                  height: 38,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  zIndex: 10,
                }}
              >
                <X size={20} />
              </button>

              <img
                src={modalImage.image}
                alt={modalImage.tag}
                style={{
                  width: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  background: '#0a0a0a',
                  display: 'block',
                }}
              />

              <div style={{ padding: '1.25rem 1.75rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {modalImage.tag}
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: '#FFFFFF', marginTop: '0.25rem' }}>
                  {modalImage.label}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .point-card-img:hover {
          transform: scale(1.04);
        }
        @media (max-width: 900px) {
          .horizontal-point-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
