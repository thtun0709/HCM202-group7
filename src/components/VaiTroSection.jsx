import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Anchor, Star, Compass, X, ZoomIn, Quote, Sparkles, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import duongCachMenhImg from '../assets/duong_cach_menh.png';
import thanhLapDangImg from '../assets/thanh_lap_dang.png';
import suaDoiLoiLamViecImg from '../assets/sua_doi_loi_lam_viec.jpg';

/* Phần 1: Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam (Thiết kế dạng thẻ riêng biệt trực quan) */

const POINTS = [
  {
    id: '1.1',
    image: duongCachMenhImg,
    tag: 'Tác phẩm Đường Kách mệnh (1927)',
    imageTitle: 'Tác phẩm Đường Kách Mệnh (1927)',
    imageCaption: 'Bảo vật Quốc gia — Tác phẩm đặt nền móng lý luận cho sự ra đời của Đảng và sự nghiệp giải phóng dân tộc.',
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
    imageTitle: 'Hội nghị Thành lập Đảng (3/2/1930)',
    imageCaption: 'Tranh tư liệu lịch sử tái hiện Hội nghị hợp nhất các tổ chức cộng sản tại Cửu Long (Hương Cảng, Trung Quốc).',
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
    },
  },
  {
    id: '1.3',
    image: suaDoiLoiLamViecImg,
    tag: 'Tác phẩm Sửa đổi lối làm việc (1947)',
    imageTitle: 'Tác phẩm Sửa đổi lối làm việc (1947)',
    imageCaption: 'Tác phẩm kinh điển của Chủ tịch Hồ Chí Minh về phương thức lãnh đạo và tư cách của người cán bộ cách mạng.',
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

/* ── Thẻ Riêng Cho Hình Ảnh (Chiếm toàn bộ hàng ngang, hiển thị to, rõ nét) ── */
function ImageCard({ item, index, onImageClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="dedicated-image-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}
      style={{
        background: '#FFFFFF',
        border: `1.5px solid ${item.border}`,
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(1.25rem, 2.5vw, 2rem)',
        boxShadow: 'var(--shadow-card)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Header thẻ ảnh */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.25rem',
        paddingBottom: '0.85rem',
        borderBottom: `1.5px solid ${item.color}18`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: `${item.color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 3px 10px ${item.color}25`,
          }}>
            <ImageIcon size={20} color={item.color} />
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: item.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Tư Liệu Lịch Sử · Mục {item.id}
            </span>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
              {item.imageTitle}
            </h4>
          </div>
        </div>

        <button
          onClick={() => onImageClick(item)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.45rem 1rem',
            borderRadius: 100,
            background: `${item.color}10`,
            border: `1.5px solid ${item.color}35`,
            color: item.color,
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          title="Nhấp để xem ảnh phóng to toàn màn hình"
        >
          <ZoomIn size={15} />
          <span>Phóng to toàn màn hình</span>
        </button>
      </div>

      {/* Khung hiển thị ảnh SÁNG RÕ, TO TOÀN BỘ, HOÀN TOÀN KHÔNG CÒN VIỀN ĐEN */}
      <div
        onClick={() => onImageClick(item)}
        title="Nhấp để xem ảnh phóng to toàn màn hình"
        style={{
          position: 'relative',
          width: '100%',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          cursor: 'pointer',
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem 0',
        }}
      >
        <img
          src={item.image}
          alt={item.imageTitle}
          style={{
            width: '100%',
            maxWidth: item.id === '1.3' ? '680px' : '1080px',
            height: 'auto',
            maxHeight: '760px',
            objectFit: 'contain',
            display: 'block',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 12px 36px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
            border: '1px solid var(--gray-200)',
            transition: 'transform 0.35s ease, box-shadow 0.35s ease',
          }}
          className="point-card-img"
        />

        {/* Nút bấm phóng to nổi ở góc ảnh (giao diện sáng trong suốt, không viền đen) */}
        <div style={{
          position: 'absolute',
          bottom: 16,
          right: 20,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '6px 14px',
          borderRadius: 100,
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--gray-800)',
          border: '1px solid var(--gray-300)',
          boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
        }}>
          <ZoomIn size={14} color="var(--red-deep)" />
          <span>Bấm để phóng to chi tiết</span>
        </div>
      </div>

      {/* Chú thích chân thẻ ảnh */}
      <div style={{
        marginTop: '1.1rem',
        paddingTop: '0.85rem',
        borderTop: '1px solid var(--gray-100)',
        fontSize: '0.86rem',
        color: 'var(--gray-600)',
        fontStyle: 'italic',
        lineHeight: 1.6,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <span style={{ color: item.color, fontWeight: 700, fontSize: '1rem' }}>✦</span>
        <span>{item.imageCaption}</span>
      </div>
    </motion.div>
  );
}

/* ── Thẻ Riêng Cho Nội Dung (Trình bày lý luận và minh chứng) ── */
function ContentCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = item.icon;
  const BoxIcon = item.bottomBox.icon;

  return (
    <motion.div
      ref={ref}
      className="dedicated-content-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 + 0.05 }}
      whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}
      style={{
        background: '#FFFFFF',
        border: `1.5px solid ${item.border}`,
        borderRadius: 'var(--radius-xl)',
        padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
      }}
    >
      <div>
        {/* Tiêu đề & Icon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          marginBottom: '1.35rem',
          paddingBottom: '1rem',
          borderBottom: `2px solid ${item.color}15`,
        }}>
          <div style={{
            width: 44,
            height: 44,
            borderRadius: 12,
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
              fontSize: '0.72rem',
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
              fontSize: 'clamp(1.18rem, 2.2vw, 1.45rem)',
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
          gap: '0.85rem',
        }}>
          {item.items.map((pt, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.6rem',
                fontSize: '0.92rem',
                color: 'var(--gray-700)',
                lineHeight: 1.6,
              }}
            >
              <span style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: item.color,
                marginTop: '0.55rem',
                flexShrink: 0,
              }} />
              <div>
                <strong style={{ color: 'var(--gray-900)', fontWeight: 700 }}>
                  {pt.highlight}{' '}
                </strong>
                <span>{pt.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Khối điểm nhấn dưới cùng (Quote / Công thức / Ví dụ) */}
      <div style={{
        background: item.bg,
        border: `1.5px solid ${item.border}`,
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem 1.4rem',
        marginTop: 'auto',
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
          marginBottom: '0.55rem',
        }}>
          <BoxIcon size={15} color={item.color} />
          {item.bottomBox.title}
        </div>

        {/* Dạng Trích dẫn (1.1) */}
        {item.bottomBox.type === 'quote' && (
          <div>
            <p style={{ fontSize: '0.92rem', color: 'var(--gray-800)', fontStyle: 'italic', margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
              {item.bottomBox.quote}
            </p>
            <p style={{ fontSize: '0.76rem', color: item.color, fontWeight: 600, marginTop: '0.4rem', margin: '0.4rem 0 0' }}>
              — {item.bottomBox.src}
            </p>
          </div>
        )}

        {/* Dạng Công thức (1.2) - ĐÃ XÓA DÒNG MỐC SON LỊCH SỬ */}
        {item.bottomBox.type === 'formula' && (
          <div>
            <div style={{
              fontSize: '0.96rem',
              fontWeight: 700,
              color: '#b71c1c',
              background: '#FFFFFF',
              padding: '0.75rem 1rem',
              borderRadius: 8,
              border: '1.5px dashed rgba(183,28,28,0.35)',
              textAlign: 'center',
              lineHeight: 1.5,
              boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
            }}>
              {item.bottomBox.formula}
            </div>
          </div>
        )}

        {/* Dạng Ví dụ thực tế (1.3) */}
        {item.bottomBox.type === 'examples' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {item.bottomBox.examples.map((ex, exIdx) => (
              <div key={exIdx} style={{ fontSize: '0.84rem', lineHeight: 1.55 }}>
                <span style={{ fontWeight: 700, color: 'var(--gray-900)' }}>{ex.event} </span>
                <span style={{ color: 'var(--gray-700)' }}>{ex.desc}</span>
              </div>
            ))}
          </div>
        )}
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
            <span className="section-label">Phần 1</span>
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

        {/* ── Các Thẻ Riêng Biệt Toàn Bộ Hàng Ngang (Không chia cột) ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {POINTS.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                width: '100%',
              }}
            >
              {/* Thẻ Nội Dung Toàn Bộ Hàng Ngang */}
              <ContentCard item={item} index={i} />

              {/* Thẻ Hình Ảnh Riêng Chiếm Toàn Bộ Hàng Ngang */}
              <ImageCard item={item} index={i} onImageClick={setModalImage} />
            </div>
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
