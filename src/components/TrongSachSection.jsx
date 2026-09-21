import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ShieldCheck, BookOpenCheck, Users2, Gavel, CheckCircle2, Sparkles } from 'lucide-react';

/* Phần 2: Đảng trong sạch, vững mạnh */

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    number: '01',
    color: '#1a237e',
    gradient: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
    title: 'Bản Chất "Đảng Là Đạo Đức, Là Văn Minh"',
    subtitle: 'Mục đích tối thượng & Yêu cầu xây dựng Đảng',
    keyPoints: [
      'Mục đích tối thượng: Giải phóng dân tộc, giải phóng giai cấp, giải phóng xã hội và con người',
      'Vì dân phục vụ: Đảng không có lợi ích riêng tư ngoài lợi ích tối cao của toàn thể dân tộc',
      'Đạo đức cách mạng: Đảng viên phải thấm nhuần cần, kiệm, liêm, chính, chí công vô tư, suốt đời vì dân',
      'Đảng văn minh: Tiêu biểu cho trí tuệ và lương tâm dân tộc; hoạt động nghiêm túc trong khuôn khổ Hiến pháp & pháp luật',
      '⚠️ Cảnh báo lịch sử: Đảng xa rời đạo đức và văn minh sẽ đánh mất quyền lãnh đạo và thành quả cách mạng sẽ tiêu tan',
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
      'Xông pha tuyến đầu: Đảng viên tiên phong trong tuyến đầu phòng chống dịch bệnh và khắc phục bão lũ lịch sử (bão Yagi 2024)',
      'Đấu tranh chống tiêu cực: Đẩy mạnh phòng chống tham nhũng với nguyên tắc "không có vùng cấm, không có ngoại lệ"',
      'Chỉnh đốn nghiêm minh: Kiên quyết xử lý kỷ luật nghiêm các cán bộ suy thoái tư tưởng, kể cả cán bộ cấp cao',
      'Củng cố niềm tin: Nhân dân và thế hệ trẻ ngày càng tin tưởng tuyệt đối vào sự lãnh đạo trong sạch, vững mạnh của Đảng',
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
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  const activeItem = PRINCIPLES[activeIndex];
  const ActiveIcon = activeItem.icon;

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
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: `1.5px solid ${activeItem.color}30`,
              boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Dải màu gradient định danh ở đỉnh card */}
            <div style={{ height: 5, background: activeItem.gradient, width: '100%' }} />

            <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
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
                  Các Luận Điểm & Nguyên Tắc Trọng Tâm
                </h4>
              </div>

              {/* Danh sách các ý chính hiển thị dạng lưới 2 cột thoáng đãng */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: activeItem.keyPoints.length > 4 ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
                gap: '0.85rem',
              }}>
                {activeItem.keyPoints.map((point, i) => {
                  const isWarning = point.includes('⚠️');
                  return (
                    <div
                      key={i}
                      style={{
                        background: isWarning ? 'rgba(230,81,0,0.06)' : 'var(--gray-50)',
                        border: isWarning ? '1px solid rgba(230,81,0,0.25)' : '1px solid var(--gray-200)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.9rem 1.15rem',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        color={isWarning ? '#e65100' : activeItem.color}
                        style={{ flexShrink: 0, marginTop: 2 }}
                      />
                      <span style={{
                        fontSize: '0.88rem',
                        color: isWarning ? '#b71c1c' : 'var(--gray-700)',
                        lineHeight: 1.6,
                        fontWeight: isWarning ? 600 : 400,
                      }}>
                        {point}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Thanh chuyển nhanh nội dung ở cuối card */}
              <div style={{
                marginTop: '2rem',
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
    </section>
  );
}

