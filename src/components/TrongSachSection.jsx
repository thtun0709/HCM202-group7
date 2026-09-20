import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ShieldCheck, BookOpenCheck, Users2, Gavel, ChevronRight } from 'lucide-react';

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
      'Mục đích: giải phóng dân tộc, giải phóng xã hội, giai cấp và con người',
      'Đảng không có mục đích riêng ngoài lợi ích của toàn thể dân tộc',
      'Đảng viên thấm nhuần đạo đức cách mạng, suốt đời phấn đấu vì dân',
      'Yêu cầu "Đảng văn minh": Tiêu biểu cho lương tâm, trí tuệ; hoạt động trong khuôn khổ Hiến pháp & pháp luật, không đứng trên dân tộc',
      '⚠️ Cảnh báo: Đảng không đạo đức, văn minh thì sẽ mất quyền lãnh đạo và thành quả cách mạng sẽ tiêu tan',
    ],
    detail: '"Đảng ta là đạo đức, là văn minh" (Lễ kỷ niệm 30 năm thành lập Đảng, 1960). Người nhấn mạnh: khi cầm quyền, Đảng càng phải đề cao tính văn minh, tiền phong gương mẫu và chống lại mọi biểu hiện suy thoái.',
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
    detail: 'Tám nguyên tắc cốt lõi theo tư tưởng Hồ Chí Minh tạo nên "cột sống" kỷ luật và sức mạnh chiến đấu của một Đảng cách mạng cầm quyền chân chính.',
  },
  {
    icon: BookOpenCheck,
    number: '03',
    color: '#b71c1c',
    gradient: 'linear-gradient(135deg, #8B0000 0%, #c62828 100%)',
    title: 'Xây Dựng Đội Ngũ Cán Bộ, Đảng Viên',
    subtitle: '"Cán bộ là cái gốc của mọi công việc"',
    keyPoints: [
      'Cán bộ phải "vừa có đức, vừa có tài" — tuyệt đối trung thành với Đảng',
      'Đặt lợi ích của Đảng và dân tộc lên trước lợi ích cá nhân; không ngừng học tập nâng cao trình độ',
      'Tiên phong gương mẫu: "Đảng viên đi trước, làng nước theo sau"',
      'Chủ động sáng tạo, dám nghĩ dám làm, có tinh thần trách nhiệm cao',
      'Kiên quyết phòng và chống tham ô, lãng phí, quan liêu — Người gọi là "giặc nội xâm"',
    ],
    detail: '"Cán bộ là cái gốc của mọi công việc" — muôn việc thành công hay thất bại đều do cán bộ tốt hay kém. Vì vậy, công tác cán bộ phải hiểu, đào tạo, sử dụng đúng và thường xuyên kiểm tra.',
  },
  {
    icon: Users2,
    number: '04',
    color: '#1b5e20',
    gradient: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
    title: 'Minh Chứng Thực Tiễn Hiện Nay',
    subtitle: 'Đảng hành động, nhân dân đặt trọn niềm tin',
    keyPoints: [
      'Đảng viên đi trước: Tuyến đầu đại dịch COVID-19 & khắc phục bão lũ lịch sử (bão Yagi 2024), cán bộ xông pha cứu hộ, hỗ trợ dân',
      'Chống "giặc nội xâm": Đẩy mạnh phòng chống tham nhũng với phương châm "không có vùng cấm, không có ngoại lệ"',
      'Xử lý nghiêm minh nhiều cán bộ suy thoái, kể cả cấp cao — minh chứng cho quyết tâm tự chỉnh đốn',
    ],
    detail: 'Thực tiễn chứng minh: Cuộc chiến phòng chống tham nhũng, tiêu cực không làm chậm bước phát triển mà củng cố vững chắc niềm tin của nhân dân và thế hệ trẻ vào sự trong sạch của Đảng.',
  },
];

function PrincipleCard({ item, index, isActive, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      className={`interactive-card${isActive ? ' is-active' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      onClick={onClick}
      style={{
        background: isActive ? item.gradient : '#FFFFFF',
        border: isActive ? 'none' : '1.5px solid var(--gray-200)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isActive ? `0 16px 48px ${item.color}44` : 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {isActive && (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Số nền */}
      <div style={{
        position: 'absolute', bottom: -10, right: 10,
        fontFamily: 'var(--font-display)',
        fontSize: '5rem', fontWeight: 900,
        color: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>
        {item.number}
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: isActive ? 'rgba(255,255,255,0.2)' : item.gradient,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon size={22} color="white" strokeWidth={1.8} />
        </div>
        <span className={`chevron-icon${isActive ? ' open' : ''}`}>
          <ChevronRight size={18} color={isActive ? 'rgba(255,255,255,0.7)' : 'var(--gray-400)'} />
        </span>
      </div>

      <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: isActive ? 'rgba(255,255,255,0.7)' : 'var(--gray-400)', marginBottom: '0.3rem' }}>
        Nội dung {item.number}
      </div>

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: isActive ? '#FFFFFF' : 'var(--gray-800)', lineHeight: 1.3, marginBottom: '0.3rem', minHeight: '2.6rem' }}>
        {item.title}
      </h3>

      <p style={{ fontSize: '0.8rem', color: isActive ? 'rgba(255,255,255,0.75)' : 'var(--gray-500)', fontStyle: 'italic' }}>
        {item.subtitle}
      </p>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '1rem' }}>
                {item.detail}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {item.keyPoints.map((point, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.83rem', color: 'rgba(255,255,255,0.9)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'rgba(255,255,255,0.6)', marginTop: 2, flexShrink: 0 }}>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TrongSachSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="trong-sach" style={{ background: 'var(--gray-50)', padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-label">Phần 2 · Thuận</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--red-deep)', marginTop: '0.5rem' }}>
            Đảng Trong Sạch, Vững Mạnh
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 560, margin: '0 auto', fontSize: '0.97rem' }}>
            Nhấp vào từng thẻ để xem phân tích chi tiết về bản chất, nguyên tắc và yêu cầu xây dựng Đảng theo tư tưởng Hồ Chí Minh.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
          alignItems: 'start',
        }}>
          {PRINCIPLES.map((item, i) => (
            <PrincipleCard
              key={i}
              item={item}
              index={i}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
