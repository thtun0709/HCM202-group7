import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  BookOpenCheck,
  Users2,
  Gavel,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  X,
  Image as ImageIcon,
} from 'lucide-react';
import chongGiacNoiXamImg from '../assets/chống giac ngoai xâm.jpg';
import baoYagiImg from '../assets/bão yagi.jpg';

/* Phần 2: Đảng trong sạch, vững mạnh */

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    number: '01',
    color: '#1a237e',
    gradient: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
    title: 'Bản Chất và yêu cầu xây dựng Đảng',
    subtitle: 'Mục đích tối thượng & Yêu cầu xây dựng Đảng',
    pointsTitle: 'Yêu cầu xây dựng "Đảng văn minh"',
    keyPoints: [
      'Tiêu biểu cho lương tâm, trí tuệ, danh dự của dân tộc.',
      'Luôn trong sạch, vững mạnh; khi cầm quyền càng phải chống tiêu cực.',
      'Hoạt động trong khuôn khổ Hiến pháp và pháp luật, không đứng trên dân tộc.',
      'Đảng viên tiên phong, gương mẫu.',
      'Quan hệ quốc tế trong sáng, vì hòa bình, hữu nghị.',
    ],
    detail: '"Đảng ta là đạo đức, là văn minh" (Lễ kỷ niệm 30 năm thành lập Đảng, 1960). Người nhấn mạnh: khi cầm quyền, Đảng càng phải đề cao tính văn minh, tiền phong gương mẫu và chống lại mọi biểu hiện suy thoái, biến chất.',
  },
  {
    icon: Gavel,
    number: '02',
    color: '#4527a0',
    gradient: 'linear-gradient(135deg, #4527a0 0%, #6a1b9a 100%)',
    title: '8 Nguyên Tắc Sinh Hoạt Của Đảng',
    subtitle: 'Nền tảng vững chắc của tổ chức cách mạng',
    keyPoints: [
      '1. Lấy chủ nghĩa Mác – Lênin làm nền tảng tư tưởng và kim chỉ nam',
      '2. Tập trung dân chủ (nguyên tắc tổ chức cơ bản)',
      '3. Tự phê bình và phê bình (thang thuốc hay nhất)',
      '4. Kỷ luật nghiêm minh, tự giác',
      '5. Thường xuyên tự đổi mới, tự chỉnh đốn',
      '6. Đoàn kết, thống nhất trong Đảng',
      '7. Mối quan hệ mật thiết với nhân dân (dân là gốc)',
      '8. Đoàn kết quốc tế trong sáng, vì hòa bình và hữu nghị',
    ],
    detail: 'Tám nguyên tắc cốt lõi theo tư tưởng Hồ Chí Minh tạo nên "cột sống" kỷ luật và sức mạnh chiến đấu của một Đảng cách mạng cầm quyền chân chính, đảm bảo nội bộ luôn thống nhất ý chí và hành động.',
  },
  {
    icon: BookOpenCheck,
    number: '03',
    color: '#b71c1c',
    gradient: 'linear-gradient(135deg, #8B0000 0%, #c62828 100%)',
    title: 'Xây Dựng Đội Ngũ Cán Bộ, Đảng Viên',
    subtitle: '"Cán bộ là cái gốc của mọi công việc"',
    keyPoints: [
      'Tiêu chuẩn kép: Cán bộ phải "vừa có đức, vừa có tài" — tuyệt đối trung thành với lý tưởng cách mạng',
      'Chí công vô tư: Luôn đặt lợi ích của Đảng và dân tộc lên trên hết, trước hết',
      'Gương mẫu đi đầu: Thực hiện phương châm "Đảng viên đi trước, làng nước theo sau"',
      'Tư duy hành động: Chủ động sáng tạo, dám nghĩ, dám làm, dám chịu trách nhiệm vì lợi ích chung',
      'Chống "giặc nội xâm": Kiên quyết quét sạch tham ô, lãng phí, quan liêu — những căn bệnh làm xói mòn uy tín của Đảng',
    ],
    detail: '"Cán bộ là cái gốc của mọi công việc" — muôn việc thành công hay thất bại đều do cán bộ tốt hay kém. Vì vậy, công tác cán bộ phải hiểu, đào tạo, bồi dưỡng, sử dụng đúng người và thường xuyên kiểm tra giám sát.',
  },
  {
    icon: Users2,
    number: '04',
    color: '#1b5e20',
    gradient: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
    title: 'Minh Chứng Thực Tiễn Hiện Nay',
    subtitle: 'Đảng hành động, nhân dân đặt trọn niềm tin',
    keyPoints: [
      {
        text: 'Chống "giặc nội xâm": Đẩy mạnh phòng chống tham nhũng, tiêu cực với phương châm "không có vùng cấm, không có ngoại lệ" — xử lý nghiêm minh cán bộ sai phạm, kể cả cấp cao.',
        modal: {
          title: 'Phòng, Chống Tham Nhũng, Tiêu Cực — Không Có Vùng Cấm',
          badge: 'Minh Chứng 01',
          image: chongGiacNoiXamImg,
          sourceName: 'Báo Dân Trí',
          articleUrl: 'https://dantri.com.vn/thoi-su/174-can-bo-dien-trung-uong-quan-ly-bi-ky-luat-trong-nhiem-ky-20251211125840229.htm',
          desc: 'Những năm gần đây, cuộc đấu tranh phòng, chống tham nhũng, tiêu cực được Đảng ta triển khai quyết liệt, bài bản, đi vào chiều sâu với tinh thần "không có vùng cấm, không có ngoại lệ, bất kể người đó là ai". Đã có 174 cán bộ diện Trung ương quản lý bị thi hành kỷ luật hoặc truy cứu trách nhiệm trong nhiệm kỳ — minh chứng rõ nét cho quyết tâm chính trị làm trong sạch nội bộ Đảng, củng cố vững chắc niềm tin của nhân dân.',
        },
      },
      {
        text: 'Đảng viên đi trước, làng nước theo sau: Tiên phong ở tuyến đầu trong đại dịch COVID-19 và các đợt thiên tai, bão lũ lớn (như bão Yagi 2024) để cứu trợ, giúp dân ổn định đời sống.',
        modal: {
          title: 'Đảng Viên Đi Trước, Làng Nước Theo Sau: Xông Pha Nơi Tuyến Đầu',
          badge: 'Minh Chứng 02',
          image: baoYagiImg,
          sourceName: 'Báo Cần Thơ',
          articleUrl: 'https://baocantho.com.vn/phat-huy-vai-tro-tien-phong-guong-mau-cua-dang-vien-a137922.html',
          desc: 'Trong đại dịch COVID-19 và các đợt thiên tai, bão lũ lịch sử (điển hình như cơn bão số 3 - Yagi năm 2024), hàng vạn cán bộ, đảng viên đã có mặt ngay ở tuyến đầu, xông pha vào những nơi nguy hiểm nhất để cứu nạn, cứu trợ, hỗ trợ người dân dựng lại nhà cửa và khôi phục cuộc sống. Tinh thần gương mẫu, tận tụy ấy khẳng định mối gắn bó máu thịt giữa Đảng với nhân dân.',
        },
      },
    ],
    detail: 'Thực tiễn chứng minh: Cuộc chiến phòng chống tham nhũng, tiêu cực không làm chậm bước phát triển mà củng cố vững chắc niềm tin của nhân dân và thế hệ trẻ vào sự trong sạch, kiên cường của Đảng.',
  },
];

/* ── Thẻ chọn nhỏ gọn (4 thẻ nằm ngang hàng, cùng chiều cao) ── */
function PrincipleSelectorCard({ item, isActive, onClick }) {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      type="button"
      className={`hover-card-soft${isActive ? ' is-active' : ''}`}
      style={{
        background: isActive ? item.gradient : '#FFFFFF',
        border: isActive ? `2px solid ${item.color}` : '1.5px solid var(--gray-200)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.35rem 1.25rem',
        position: 'relative',
        boxShadow: isActive ? `0 14px 36px ${item.color}35` : 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        cursor: 'pointer',
        width: '100%',
        minHeight: '175px',
        transition: 'all 0.28s ease',
        outline: 'none',
      }}
    >
      {/* Mũi tên tam giác trỏ xuống card chi tiết bên dưới khi active */}
      {isActive && (
        <div style={{
          position: 'absolute',
          bottom: -10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: `10px solid ${item.color}`,
          zIndex: 5,
        }} />
      )}

      {/* Số thứ tự nền mờ */}
      <div style={{
        position: 'absolute',
        top: 8,
        right: 14,
        fontFamily: 'var(--font-display)',
        fontSize: '2.5rem',
        fontWeight: 900,
        color: isActive ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.04)',
        lineHeight: 1,
        pointerEvents: 'none',
      }}>
        {item.number}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.85rem' }}>
        <div style={{
          width: 42,
          height: 42,
          borderRadius: 12,
          background: isActive ? 'rgba(255,255,255,0.22)' : item.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={20} color="white" strokeWidth={1.8} />
        </div>
        <span style={{
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '0.2rem 0.6rem',
          borderRadius: '100px',
          background: isActive ? 'rgba(255,255,255,0.18)' : 'var(--gray-100)',
          color: isActive ? '#FFFFFF' : 'var(--gray-600)',
        }}>
          {isActive ? 'Đang xem' : `Phần ${item.number}`}
        </span>
      </div>

      <div style={{
        fontSize: '0.66rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: isActive ? 'rgba(255,255,255,0.72)' : 'var(--gold)',
        marginBottom: '0.25rem',
      }}>
        Nội dung {item.number}
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.98rem',
        fontWeight: 700,
        color: isActive ? '#FFFFFF' : 'var(--gray-800)',
        lineHeight: 1.35,
        margin: '0 0 0.35rem 0',
      }}>
        {item.title}
      </h3>

      <p style={{
        fontSize: '0.76rem',
        color: isActive ? 'rgba(255,255,255,0.78)' : 'var(--gray-500)',
        fontStyle: 'italic',
        lineHeight: 1.4,
        margin: 0,
      }}>
        {item.subtitle}
      </p>
    </button>
  );
}

export default function TrongSachSection() {
  /* Luôn mở sẵn thẻ 1 (index 0) theo yêu cầu */
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedModal, setSelectedModal] = useState(null);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  const activeItem = PRINCIPLES[activeIndex];
  const ActiveIcon = activeItem.icon;

  /* Xử lý phím Escape để đóng modal & khóa scroll khi mở modal */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedModal(null);
      }
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
    <section id="trong-sach" style={{ background: 'var(--gray-50)', padding: '6rem 0' }}>
      <div className="container">
        {/* Header Section */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <span className="section-label">Phần 2 · Thuận</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.5rem' }}>
            Đảng Trong Sạch, Vững Mạnh
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 620, margin: '0 auto', fontSize: '0.97rem' }}>
            Nhấp vào từng thẻ bên dưới để xem toàn cảnh phân tích chuyên sâu về bản chất, nguyên tắc và công tác xây dựng Đảng theo tư tưởng Hồ Chí Minh.
          </p>
        </motion.div>

        {/* ── Hàng 4 thẻ chọn ngang bằng nhau 100% ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          marginBottom: '1.75rem',
        }}>
          {PRINCIPLES.map((item, i) => (
            <PrincipleSelectorCard
              key={i}
              item={item}
              index={i}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>

        {/* ── Card lớn toàn chiều ngang hiển thị chi tiết (Chiều ngang bằng cả 4 card trên) ── */}
        <div style={{ minHeight: '660px', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                border: `1.5px solid ${activeItem.color}30`,
                boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                position: 'relative',
                minHeight: '660px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Dải màu gradient định danh ở đỉnh card */}
              <div style={{ height: 5, background: activeItem.gradient, width: '100%', flexShrink: 0 }} />

              <div style={{
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
              }}>
              {/* Header của Detail Card */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1.5rem',
                flexWrap: 'wrap',
                marginBottom: '1.75rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 54,
                    height: 54,
                    borderRadius: 16,
                    background: activeItem.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: `0 8px 24px ${activeItem.color}35`,
                  }}>
                    <ActiveIcon size={26} color="white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: activeItem.color,
                        background: `${activeItem.color}12`,
                        padding: '0.15rem 0.6rem',
                        borderRadius: '100px',
                      }}>
                        Nội dung {activeItem.number}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--gray-400)' }}>•</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--gray-500)', fontStyle: 'italic' }}>
                        {activeItem.subtitle}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)',
                      fontWeight: 700,
                      color: 'var(--gray-900)',
                      margin: 0,
                    }}>
                      {activeItem.title}
                    </h3>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                  color: 'var(--gray-500)',
                  background: 'var(--gray-50)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '100px',
                  border: '1px solid var(--gray-200)',
                }}>
                  <Sparkles size={14} color="var(--gold)" />
                  <span>Tư tưởng Hồ Chí Minh · Bài thuyết trình</span>
                </div>
              </div>

              {/* Hộp Trích dẫn / Lời Người dạy */}
              <div style={{
                background: `${activeItem.color}08`,
                borderLeft: `4px solid ${activeItem.color}`,
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                padding: '1.2rem 1.5rem',
                marginBottom: '2rem',
              }}>
                <p style={{
                  fontSize: '0.93rem',
                  color: 'var(--gray-800)',
                  lineHeight: 1.75,
                  margin: 0,
                  fontStyle: 'italic',
                }}>
                  {activeItem.detail}
                </p>
              </div>

              {/* Tiêu đề phần Luận điểm */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.25rem',
              }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: activeItem.color,
                }} />
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--gray-800)',
                  letterSpacing: '0.02em',
                  margin: 0,
                }}>
                  {activeItem.pointsTitle || 'Các Luận Điểm & Nguyên Tắc Trọng Tâm'}
                </h4>
              </div>

              {/* Danh sách các ý chính hiển thị dạng lưới */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: activeItem.keyPoints.length > 4 ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
                gap: '0.85rem',
              }}>
                {activeItem.keyPoints.map((pointData, i) => {
                  const text = typeof pointData === 'string' ? pointData : pointData.text;
                  const modalData = typeof pointData === 'object' ? pointData.modal : null;
                  const isWarning = typeof text === 'string' && text.includes('⚠️');

                  return (
                    <div
                      key={i}
                      onClick={() => modalData && setSelectedModal(modalData)}
                      style={{
                        background: isWarning ? 'rgba(230,81,0,0.06)' : modalData ? '#ffffff' : 'var(--gray-50)',
                        border: isWarning
                          ? '1px solid rgba(230,81,0,0.25)'
                          : modalData
                            ? `1.5px solid ${activeItem.color}40`
                            : '1px solid var(--gray-200)',
                        borderRadius: 'var(--radius-md)',
                        padding: activeItem.keyPoints.length <= 2 ? '1.25rem 1.4rem' : '0.9rem 1.15rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.85rem',
                        cursor: modalData ? 'pointer' : 'default',
                        boxShadow: modalData ? '0 4px 14px rgba(0,0,0,0.05)' : 'none',
                        transition: 'all 0.22s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (modalData) {
                          e.currentTarget.style.borderColor = activeItem.color;
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = `0 8px 24px ${activeItem.color}22`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (modalData) {
                          e.currentTarget.style.borderColor = `${activeItem.color}40`;
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.05)';
                        }
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        color={isWarning ? '#e65100' : activeItem.color}
                        style={{ flexShrink: 0, marginTop: 3 }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '0.88rem',
                          color: isWarning ? '#b71c1c' : 'var(--gray-800)',
                          lineHeight: 1.6,
                          fontWeight: isWarning ? 600 : 400,
                        }}>
                          {text}
                        </div>

                        {modalData && (
                          <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            marginTop: '0.65rem',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: activeItem.color,
                            background: `${activeItem.color}10`,
                            padding: '0.25rem 0.7rem',
                            borderRadius: '100px',
                            border: `1px solid ${activeItem.color}25`,
                          }}>
                            <ImageIcon size={13} />
                            <span>Bấm xem hình ảnh tư liệu & bài báo</span>
                            <ExternalLink size={12} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Thanh chuyển nhanh nội dung ở cuối card */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--gray-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)' }}>
                  Đang xem phần <strong>{activeItem.number}/04</strong>: {activeItem.title}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {PRINCIPLES.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      type="button"
                      style={{
                        background: activeIndex === idx ? p.color : 'var(--gray-100)',
                        color: activeIndex === idx ? '#FFFFFF' : 'var(--gray-700)',
                        border: 'none',
                        borderRadius: '100px',
                        padding: '0.35rem 0.85rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Phần {p.number}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>
      </div>

      {/* ── Modal Popup Chi Tiết Tư Liệu Thực Tiễn ── */}
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
              background: 'rgba(10, 15, 25, 0.72)',
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
                background: '#FFFFFF',
                borderRadius: '1.25rem',
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              {/* Modal Header */}
              <div style={{
                padding: '1.2rem 1.5rem',
                borderBottom: '1px solid var(--gray-100)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '1rem',
                background: 'var(--gray-50)',
              }}>
                <div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#1b5e20',
                    background: '#e8f5e9',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '100px',
                    display: 'inline-block',
                    marginBottom: '0.35rem',
                  }}>
                    {selectedModal.badge || 'Tư Liệu Thực Tiễn'}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--gray-900)',
                    margin: 0,
                    lineHeight: 1.35,
                  }}>
                    {selectedModal.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedModal(null)}
                  type="button"
                  aria-label="Đóng"
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--gray-200)',
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--gray-600)',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gray-100)';
                    e.currentTarget.style.color = 'var(--gray-900)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.color = 'var(--gray-600)';
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body: Hình ảnh & Description */}
              <div style={{
                padding: '1.5rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}>
                {/* Khung hình ảnh */}
                <div style={{
                  borderRadius: '0.85rem',
                  overflow: 'hidden',
                  background: '#0a0f1d',
                  border: '1px solid var(--gray-200)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  maxHeight: '380px',
                }}>
                  <img
                    src={selectedModal.image}
                    alt={selectedModal.title}
                    style={{
                      width: '100%',
                      maxHeight: '380px',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Description dưới hình ảnh */}
                <div style={{
                  background: '#f8fafc',
                  borderLeft: '4px solid #1b5e20',
                  borderRadius: '0 0.65rem 0.65rem 0',
                  padding: '1rem 1.25rem',
                }}>
                  <p style={{
                    fontSize: '0.92rem',
                    lineHeight: 1.7,
                    color: 'var(--gray-700)',
                    margin: 0,
                  }}>
                    {selectedModal.desc}
                  </p>
                </div>
              </div>

              {/* Modal Footer: Nguồn & Nút mở link bài báo */}
              <div style={{
                padding: '1rem 1.5rem',
                borderTop: '1px solid var(--gray-100)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                background: 'var(--gray-50)',
              }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--gray-500)' }}>
                  Nguồn tham khảo: <strong style={{ color: 'var(--gray-800)' }}>{selectedModal.sourceName || 'Báo điện tử'}</strong>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <button
                    onClick={() => setSelectedModal(null)}
                    type="button"
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid var(--gray-300)',
                      background: '#ffffff',
                      color: 'var(--gray-700)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Đóng
                  </button>
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
                      background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      boxShadow: '0 4px 12px rgba(27, 94, 32, 0.25)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(27, 94, 32, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(27, 94, 32, 0.25)';
                    }}
                  >
                    <span>Xem bài báo gốc</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

