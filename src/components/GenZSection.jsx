import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Wifi,
  Eye,
  AlertTriangle,
  MessageSquare,
  Shield,
  Users2,
  ExternalLink,
  X,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import thachThucImg from '../assets/thachthuc.webp';
import doiMoiNgonNguImg from '../assets/đổi mới ngôn ngữ.webp';
import banLinhHanhDongImg from '../assets/bản lĩnh và hành động.jpg';

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

/* Hướng đi trọng tâm — Kết hợp giải pháp & minh chứng tư liệu thực tế */
const FOCUS_DIRECTIONS = [
  {
    icon: MessageSquare,
    color: '#D4AF37',
    badge: 'Đổi Mới Phương Thức',
    title: 'Đổi Mới "Ngôn Ngữ" Giao Tiếp',
    image: doiMoiNgonNguImg,
    sourceName: 'Đoàn TNCS Hồ Chí Minh & Báo Tiền Phong',
    articleUrl: 'https://doanthanhnien.vn/',
    desc: 'Hiện diện sinh động trên không gian số, nói bằng ngôn ngữ của giới trẻ — infographic, podcast, video ngắn trên TikTok, Threads. Biến những nội dung chính trị khô khan trở nên trực quan, gần gũi và hấp dẫn thế hệ số.',
    modalTitle: 'Đổi Mới Phương Thức & "Ngôn Ngữ" Giao Tiếp Tiếp Cận Gen Z',
    modalDesc: 'Để chủ trương của Đảng và chính sách pháp luật của Nhà nước thẩm thấu tự nhiên vào giới trẻ, các cấp bộ Đoàn và lực lượng chức năng đã tích cực đổi mới phương thức tiếp cận: tạo ra các nội dung số trực quan, sinh động, hình ảnh minh họa gần gũi, video ngắn tương tác cao, biến không gian số thành môi trường lan tỏa lý tưởng sống đẹp và năng lượng tích cực.',
  },
  {
    icon: Users2,
    color: '#E8C84D',
    badge: 'Lắng Nghe & Đối Thoại',
    title: 'Lắng Nghe Thay Vì Áp Đặt',
    image: banLinhHanhDongImg,
    sourceName: 'Báo Điện Tử Chính Phủ',
    articleUrl: 'https://baochinhphu.vn/thu-tuong-chinh-phu-chu-tri-hoi-nghi-doi-thoai-voi-thanh-nien-102230322214817863.htm',
    desc: 'Tạo môi trường cởi mở để thanh niên bày tỏ chính kiến, thực hiện đối thoại trực tiếp. Tiêu biểu là Hội nghị Thủ tướng Chính phủ đối thoại với thanh niên: "Xây dựng nguồn nhân lực trẻ chất lượng cao đáp ứng kỷ nguyên số".',
    modalTitle: 'Thủ Tướng Chính Phủ Chủ Trì Hội Nghị Đối Thoại Với Thanh Niên',
    modalDesc: 'Thủ tướng Phạm Minh Chính trực tiếp gặp gỡ, lắng nghe tâm tư nguyện vọng và đối thoại cùng các đại biểu thanh niên tiêu biểu trên toàn quốc. Đảng và Chính phủ khẳng định thanh niên là lực lượng xung kích đi đầu trong chuyển đổi số quốc gia và đổi mới sáng tạo, đặt trọn niềm tin và kỳ vọng vào bản lĩnh của thế hệ tương lai.',
  },
  {
    icon: Shield,
    color: '#42a5f5',
    badge: 'Bản Lĩnh & Nhận Diện',
    title: 'Trang Bị Bản Lĩnh & "Hệ Miễn Dịch Số"',
    image: thachThucImg,
    sourceName: 'Trung Tâm Xử Lý Tin Giả Việt Nam (VAFC) / Bộ TT&TT',
    articleUrl: 'https://tingia.gov.vn/',
    desc: 'Xây dựng "hệ miễn dịch thông tin" cho Gen Z: rèn luyện tư duy phản biện sắc bén, bản lĩnh chính trị vững vàng để tự nhận diện, vạch trần và miễn nhiễm trước các chiêu trò tin giả, luận điệu xuyên tạc trên mạng xã hội.',
    modalTitle: 'Cảnh Báo Tin Giả & Xây Dựng Bản Lĩnh Không Gian Mạng Cho Gen Z',
    modalDesc: 'Trên không gian mạng hiện nay, các thế lực thù địch liên tục tung tin giả (fake news), cắt ghép video xuyên tạc nhằm xói mòn lòng tin của giới trẻ. Việc trang bị bản lĩnh chính trị và "hệ miễn dịch thông tin" giúp thanh niên chủ động nhận diện, không bị dẫn dắt và tích cực bảo vệ nền tảng tư tưởng của Đảng trên không gian mạng.',
  },
];

function ChallengeCard({ c, i }) {
  const Icon = c.icon;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.12 }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 'var(--radius-md)',
        padding: '1.5rem',
        borderLeft: `3px solid ${c.color}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '150px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem' }}>
        <Icon size={18} color={c.color} />
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.98rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
          {c.title}
        </h4>
      </div>
      <p style={{ fontSize: '0.86rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.65, margin: 0 }}>
        {c.desc}
      </p>
    </motion.div>
  );
}

export default function GenZSection() {
  const [selectedModal, setSelectedModal] = useState(null);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  /* Xử lý phím Escape và khóa body scroll khi mở modal */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedModal(null);
    };
    if (selectedModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedModal]);

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
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            Phần 3 · Tùng
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#FFFFFF', marginTop: '0.5rem' }}>
            Đảng &{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Niềm Tin Thế Hệ Số
            </span>
          </h2>
          <span className="gold-divider center" />

          {/* Dẫn nhập thuyết trình */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(212,175,55,0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem 1.5rem',
            maxWidth: 760,
            margin: '1.5rem auto 0',
            textAlign: 'left',
          }}>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
              "Nếu các thế hệ đi trước hun đúc niềm tin qua khói lửa chiến tranh, thì Gen Z hôm nay đang lớn lên trong một chiến trường hoàn toàn mới: <strong>Chiến trường không gian mạng</strong>."
            </p>
          </div>
        </motion.div>

        {/* ── 1. Thách thức ── */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <AlertTriangle size={20} color="#ff7043" />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
              Những Thách Thức Trên Không Gian Số
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {CHALLENGES.map((c, i) => (
              <ChallengeCard key={i} c={c} i={i} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)', margin: '3.5rem 0' }} />

        {/* ── 2. Hướng Đi Trọng Tâm (Tích hợp giải pháp & minh chứng thực tế) ── */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.75rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Shield size={20} color="var(--gold)" />
              <div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Hướng Đi Trọng Tâm & Minh Chứng Thực Tế
                </span>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>
                  Nhấp vào từng thẻ để phóng to hình ảnh tư liệu và mở bài báo gốc
                </span>
              </div>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              color: 'var(--gold)',
              background: 'rgba(212,175,55,0.1)',
              padding: '0.35rem 0.8rem',
              borderRadius: '100px',
              border: '1px solid rgba(212,175,55,0.25)',
            }}>
              <Sparkles size={13} />
              <span>3 Trụ cột hành động</span>
            </div>
          </div>

          {/* Hàng 3 Card Hướng Đi Trọng Tâm kết hợp ảnh + nội dung */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {FOCUS_DIRECTIONS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                onClick={() => setSelectedModal(item)}
                className="hover-card-soft"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1.5px solid ${item.color}35`,
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                  transition: 'all 0.28s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 16px 36px ${item.color}25`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}35`;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.25)';
                }}
              >
                {/* Khung ảnh thumbnail */}
                <div style={{
                  position: 'relative',
                  height: '185px',
                  width: '100%',
                  background: '#090d16',
                  overflow: 'hidden',
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,15,25,0.92) 0%, rgba(10,15,25,0.2) 60%, transparent 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    padding: '0.8rem 1rem',
                  }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: '#FFFFFF',
                      background: item.color,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '100px',
                    }}>
                      {item.badge}
                    </span>
                    <span style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                    }}>
                      <Maximize2 size={13} />
                    </span>
                  </div>
                </div>

                {/* Nội dung card */}
                <div style={{
                  padding: '1.4rem 1.35rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.65rem' }}>
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: `${item.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <item.icon size={16} color={item.color} />
                      </div>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: item.color,
                        margin: 0,
                      }}>
                        {item.title}
                      </h3>
                    </div>

                    <p style={{
                      fontSize: '0.86rem',
                      color: 'rgba(255,255,255,0.72)',
                      lineHeight: 1.65,
                      margin: 0,
                    }}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Nút hành động */}
                  <div style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                    color: item.color,
                    fontWeight: 600,
                  }}>
                    <span>Xem tư liệu & bài báo</span>
                    <ExternalLink size={13} />
                  </div>
                </div>
              </motion.div>
            ))}
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

      {/* ── MODAL POPUP LIGHTBOX CHO PHẦN 3 ── */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedModal(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(8, 12, 22, 0.82)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#161c2b',
                borderRadius: '1.25rem',
                maxWidth: '720px',
                width: '100%',
                maxHeight: '92vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(212,175,55,0.3)',
              }}
            >
              {/* Header Modal */}
              <div style={{
                padding: '1.2rem 1.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: selectedModal.color,
                    background: `${selectedModal.color}20`,
                    padding: '0.2rem 0.65rem',
                    borderRadius: '100px',
                    display: 'inline-block',
                    marginBottom: '0.35rem',
                    border: `1px solid ${selectedModal.color}40`,
                  }}>
                    {selectedModal.badge}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    margin: 0,
                    lineHeight: 1.35,
                  }}>
                    {selectedModal.modalTitle || selectedModal.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedModal(null)}
                  type="button"
                  aria-label="Đóng"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.7)',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body Modal: Hình ảnh & Phân tích */}
              <div style={{
                padding: '1.5rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}>
                {/* Khung hiển thị ảnh */}
                <div style={{
                  borderRadius: '0.85rem',
                  overflow: 'hidden',
                  background: '#090d16',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  maxHeight: '390px',
                }}>
                  <img
                    src={selectedModal.image}
                    alt={selectedModal.title}
                    style={{
                      width: '100%',
                      maxHeight: '390px',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Description */}
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderLeft: `4px solid ${selectedModal.color}`,
                  borderRadius: '0 0.65rem 0.65rem 0',
                  padding: '1.1rem 1.35rem',
                }}>
                  <p style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.85)',
                    margin: 0,
                  }}>
                    {selectedModal.modalDesc || selectedModal.desc}
                  </p>
                </div>
              </div>

              {/* Footer Modal: Nguồn & Nút đọc bài báo gốc */}
              <div style={{
                padding: '1rem 1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
                  Nguồn / Đơn vị tư liệu: <strong style={{ color: 'var(--gold)' }}>{selectedModal.sourceName}</strong>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <button
                    onClick={() => setSelectedModal(null)}
                    type="button"
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255,255,255,0.18)',
                      background: 'rgba(255,255,255,0.06)',
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Đóng
                  </button>

                  {selectedModal.articleUrl && (
                    <a
                      href={selectedModal.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.55rem 1.2rem',
                        borderRadius: '0.5rem',
                        background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
                        color: '#1a1000',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        boxShadow: '0 4px 14px rgba(212,175,55,0.3)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(212,175,55,0.45)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(212,175,55,0.3)';
                      }}
                    >
                      <span>Mở link bài báo gốc</span>
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

