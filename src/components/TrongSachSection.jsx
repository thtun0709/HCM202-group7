import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShieldCheck,
  Gavel,
  BookOpenCheck,
  Users2,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  HeartHandshake,
  ShieldAlert,
} from 'lucide-react';

/* Phần 2: Đảng trong sạch, vững mạnh (Thuyết trình: Thuận) */

const PRINCIPLES_LIST = [
  '1. Lấy chủ nghĩa Mác – Lênin làm nền tảng',
  '2. Tập trung dân chủ (nguyên tắc cơ bản)',
  '3. Tự phê bình và phê bình ("thang thuốc hay")',
  '4. Kỷ luật nghiêm minh, tự giác',
  '5. Thường xuyên tự chỉnh đốn',
  '6. Đoàn kết, thống nhất trong Đảng',
  '7. Liên hệ mật thiết với nhân dân (dân là gốc)',
  '8. Đoàn kết quốc tế trong sáng, vì hòa bình',
];

export default function TrongSachSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="trong-sach" style={{ background: 'var(--gray-50)', padding: '6rem 0' }}>
      <div className="container">
        {/* ── Header Section ── */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className="section-label">Phần 2 · Thuận</span>
            <span style={{ color: 'var(--gray-400)', fontSize: '0.75rem' }}>•</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--red-deep)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Xây Dựng & Chỉnh Đốn Đảng
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3.8vw, 2.5rem)', color: 'var(--red-deep)', marginTop: '0.3rem' }}>
            Đảng Trong Sạch, Vững Mạnh
          </h2>
          <span className="gold-divider center" />
          <p style={{ color: 'var(--gray-600)', maxWidth: 680, margin: '0 auto', fontSize: '0.97rem', lineHeight: 1.7 }}>
            Tư tưởng Hồ Chí Minh về bản chất cách mạng, 8 nguyên tắc sinh hoạt cốt lõi, công tác cán bộ và cuộc chiến không khoan nhượng chống "giặc nội xâm".
          </p>
        </motion.div>

        {/* ── Lưới 4 Trụ Cột Toàn Cảnh (2 Hàng x 2 Cột trên Desktop) ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
          gap: '2rem',
        }}>

          {/* ══════════ TRỤ CỘT 1: BẢN CHẤT & YÊU CẦU XÂY DỰNG ĐẢNG ══════════ */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1.5px solid rgba(26,35,126,0.18)',
              boxShadow: 'var(--shadow-card)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ height: 5, background: 'linear-gradient(90deg, #1a237e, #3949ab)' }} />

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              {/* Header Card */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 14,
                    background: 'linear-gradient(135deg, #1a237e, #303f9f)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 6px 16px rgba(26,35,126,0.3)',
                  }}>
                    <ShieldCheck size={22} color="white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1a237e', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Trụ Cột 01
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
                      2.1. Bản Chất & Yêu Cầu Xây Dựng Đảng
                    </h3>
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'rgba(26,35,126,0.12)' }}>
                  01
                </span>
              </div>

              {/* Trích dẫn nền tảng */}
              <div style={{
                background: 'rgba(26,35,126,0.05)',
                borderLeft: '4px solid #1a237e',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                padding: '0.85rem 1.15rem',
                marginBottom: '1.25rem',
              }}>
                <p style={{ fontSize: '0.88rem', color: '#1a237e', fontStyle: 'italic', fontWeight: 600, margin: 0, lineHeight: 1.55 }}>
                  "Đảng ta là đạo đức, là văn minh"
                </p>
                <span style={{ fontSize: '0.72rem', color: 'var(--gray-500)', marginTop: '0.2rem', display: 'block' }}>
                  — Hồ Chí Minh, Lễ kỷ niệm 30 năm Ngày thành lập Đảng (1960)
                </span>
              </div>

              {/* Danh sách luận điểm */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.5rem', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
                  <CheckCircle2 size={16} color="#1a237e" style={{ flexShrink: 0, marginTop: 3 }} />
                  <div><strong>Mục đích tối thượng:</strong> Giải phóng dân tộc, giải phóng xã hội, giai cấp và con người.</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
                  <CheckCircle2 size={16} color="#1a237e" style={{ flexShrink: 0, marginTop: 3 }} />
                  <div><strong>Đường lối & hoạt động:</strong> Đều vì lợi ích toàn dân tộc, Đảng không có mục đích riêng.</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
                  <CheckCircle2 size={16} color="#1a237e" style={{ flexShrink: 0, marginTop: 3 }} />
                  <div><strong>Yêu cầu xây dựng "Đảng văn minh":</strong> Tiêu biểu cho lương tâm, trí tuệ; luôn trong sạch vững mạnh; hoạt động trong khuôn khổ Hiến pháp và pháp luật, không đứng trên dân tộc.</div>
                </div>
              </div>

              {/* Hộp Cảnh báo đắt giá của Bác */}
              <div style={{
                background: 'rgba(230,81,0,0.06)',
                border: '1.5px dashed rgba(230,81,0,0.35)',
                borderRadius: 'var(--radius-md)',
                padding: '0.9rem 1.15rem',
                marginTop: 'auto',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#c62828', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>
                  <AlertTriangle size={15} color="#c62828" />
                  Cảnh báo sống còn của Hồ Chí Minh:
                </div>
                <p style={{ fontSize: '0.835rem', color: '#b71c1c', margin: 0, fontStyle: 'italic', lineHeight: 1.55 }}>
                  "Đảng không đạo đức, văn minh thì sẽ mất quyền lãnh đạo và thành quả cách mạng sẽ tiêu tan."
                </p>
              </div>
            </div>
          </motion.div>

          {/* ══════════ TRỤ CỘT 2: 8 NGUYÊN TẮC SINH HOẠT CỦA ĐẢNG ══════════ */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1.5px solid rgba(69,39,160,0.18)',
              boxShadow: 'var(--shadow-card)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ height: 5, background: 'linear-gradient(90deg, #4527a0, #7b1fa2)' }} />

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              {/* Header Card */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 14,
                    background: 'linear-gradient(135deg, #4527a0, #6a1b9a)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 6px 16px rgba(69,39,160,0.3)',
                  }}>
                    <Gavel size={22} color="white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4527a0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Trụ Cột 02
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
                      2.2. Các Nguyên Tắc Trong Hoạt Động Của Đảng
                    </h3>
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'rgba(69,39,160,0.12)' }}>
                  02
                </span>
              </div>

              <p style={{ fontSize: '0.86rem', color: 'var(--gray-600)', marginBottom: '1.15rem' }}>
                Tám nguyên tắc bất di bất dịch tạo nên <strong>"cột sống kỷ luật"</strong> và sức mạnh tổ chức của Đảng cầm quyền:
              </p>

              {/* Lưới 8 nguyên tắc sinh hoạt (2 cột rõ ràng, trực quan) */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.6rem',
                marginBottom: '1.5rem',
                flex: 1,
              }}>
                {PRINCIPLES_LIST.map((p, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(69,39,160,0.04)',
                      border: '1px solid rgba(69,39,160,0.12)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.65rem 0.85rem',
                      fontSize: '0.81rem',
                      color: 'var(--gray-800)',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                  >
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%',
                      background: 'rgba(69,39,160,0.15)', color: '#4527a0',
                      fontSize: '0.68rem', fontWeight: 700, display: 'flex',
                      alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      {idx + 1}
                    </span>
                    <span style={{ lineHeight: 1.4 }}>{p.replace(/^\d+\.\s*/, '')}</span>
                  </div>
                ))}
              </div>

              {/* Hộp Đúc kết nguyên tắc */}
              <div style={{
                background: 'rgba(69,39,160,0.06)',
                borderLeft: '4px solid #4527a0',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                padding: '0.85rem 1.15rem',
                marginTop: 'auto',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4527a0', fontWeight: 700, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>
                  <Sparkles size={14} color="#4527a0" />
                  Ý nghĩa lý luận:
                </div>
                <p style={{ fontSize: '0.835rem', color: 'var(--gray-700)', margin: 0, lineHeight: 1.55 }}>
                  Tám nguyên tắc gắn kết chặt chẽ: Dân chủ để phát huy trí tuệ, Tập trung để thống nhất hành động, Tự phê bình để liên tục tiến bộ.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ══════════ TRỤ CỘT 3: XÂY DỰNG ĐỘI NGŨ CÁN BỘ, ĐẢNG VIÊN ══════════ */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1.5px solid rgba(183,28,28,0.18)',
              boxShadow: 'var(--shadow-card)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ height: 5, background: 'linear-gradient(90deg, #8B0000, #c62828)' }} />

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              {/* Header Card */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 14,
                    background: 'linear-gradient(135deg, #8B0000, #b71c1c)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 6px 16px rgba(183,28,28,0.3)',
                  }}>
                    <BookOpenCheck size={22} color="white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#b71c1c', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Trụ Cột 03
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
                      2.3. Xây Dựng Đội Ngũ Cán Bộ, Đảng Viên
                    </h3>
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'rgba(183,28,28,0.12)' }}>
                  03
                </span>
              </div>

              {/* Lời dạy then chốt */}
              <div style={{
                background: 'rgba(183,28,28,0.05)',
                borderLeft: '4px solid #b71c1c',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                padding: '0.85rem 1.15rem',
                marginBottom: '1.25rem',
              }}>
                <p style={{ fontSize: '0.88rem', color: '#b71c1c', fontStyle: 'italic', fontWeight: 700, margin: 0, lineHeight: 1.55 }}>
                  "Cán bộ là cái gốc của mọi công việc"
                </p>
                <span style={{ fontSize: '0.72rem', color: 'var(--gray-500)', marginTop: '0.2rem', display: 'block' }}>
                  Muôn việc thành công hay thất bại đều do cán bộ tốt hay kém
                </span>
              </div>

              {/* Danh sách luận điểm */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.5rem', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
                  <CheckCircle2 size={16} color="#b71c1c" style={{ flexShrink: 0, marginTop: 3 }} />
                  <div><strong>Vừa có đức, vừa có tài:</strong> Tuyệt đối trung thành với Đảng, đặt lợi ích của Đảng và Tổ quốc lên trước lợi ích cá nhân.</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
                  <CheckCircle2 size={16} color="#b71c1c" style={{ flexShrink: 0, marginTop: 3 }} />
                  <div><strong>Tiên phong gương mẫu:</strong> "Đảng viên đi trước, làng nước theo sau"; có tinh thần trách nhiệm, năng động và sáng tạo.</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
                  <CheckCircle2 size={16} color="#b71c1c" style={{ flexShrink: 0, marginTop: 3 }} />
                  <div><strong>Quét sạch "giặc nội xâm":</strong> Kiên quyết phòng và chống tham ô, lãng phí, quan liêu — những căn bệnh đục khoét niềm tin nhân dân.</div>
                </div>
              </div>

              {/* Hộp Công tác cán bộ */}
              <div style={{
                background: 'rgba(0,0,0,0.03)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1.15rem',
                marginTop: 'auto',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gray-700)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>
                  Yêu cầu công tác cán bộ:
                </div>
                <p style={{ fontSize: '0.835rem', color: 'var(--gray-600)', margin: 0, lineHeight: 1.55 }}>
                  Phải hiểu đúng cán bộ, đào tạo chu đáo, sử dụng đúng tài năng và thường xuyên kiểm tra, giúp đỡ cán bộ rèn luyện.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ══════════ TRỤ CỘT 4: MINH CHỨNG THỰC TIỄN HIỆN NAY ══════════ */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1.5px solid rgba(27,94,32,0.18)',
              boxShadow: 'var(--shadow-card)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ height: 5, background: 'linear-gradient(90deg, #1b5e20, #2e7d32)' }} />

            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              {/* Header Card */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 14,
                    background: 'linear-gradient(135deg, #1b5e20, #2e7d32)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 6px 16px rgba(27,94,32,0.3)',
                  }}>
                    <Users2 size={22} color="white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1b5e20', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Trụ Cột 04
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--gray-900)', margin: 0 }}>
                      2.4. Minh Chứng Thực Tiễn Hiện Nay
                    </h3>
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'rgba(27,94,32,0.12)' }}>
                  04
                </span>
              </div>

              {/* 2 Khối minh chứng thực tế chi tiết */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', flex: 1 }}>
                {/* Minh chứng 1 */}
                <div style={{
                  background: 'rgba(27,94,32,0.05)',
                  border: '1px solid rgba(27,94,32,0.18)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.15rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <HeartHandshake size={16} color="#1b5e20" />
                    <strong style={{ fontSize: '0.88rem', color: '#1b5e20' }}>
                      Đảng viên đi trước, làng nước theo sau:
                    </strong>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--gray-700)', margin: 0, lineHeight: 1.6 }}>
                    Trong đại dịch COVID-19 và các đợt bão lũ lịch sử (như <strong>bão Yagi năm 2024</strong>), hàng ngàn cán bộ, đảng viên đã xung kích ở tuyến đầu chống dịch, cứu hộ, cứu trợ và hỗ trợ đồng bào ổn định cuộc sống.
                  </p>
                </div>

                {/* Minh chứng 2 */}
                <div style={{
                  background: 'rgba(183,28,28,0.04)',
                  border: '1px solid rgba(183,28,28,0.18)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem 1.15rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <ShieldAlert size={16} color="#b71c1c" />
                    <strong style={{ fontSize: '0.88rem', color: '#b71c1c' }}>
                      Đấu tranh phòng, chống "giặc nội xâm":
                    </strong>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: 'var(--gray-700)', margin: 0, lineHeight: 1.6 }}>
                    Đẩy mạnh phòng, chống tham nhũng, tiêu cực với phương châm <strong>"không có vùng cấm, không có ngoại lệ"</strong>. Nhiều cán bộ cấp cao bị xử lý nghiêm minh — khẳng định quyết tâm tự chỉnh đốn của Đảng.
                  </p>
                </div>
              </div>

              {/* Hộp Khẳng định niềm tin */}
              <div style={{
                background: 'rgba(27,94,32,0.06)',
                borderLeft: '4px solid #1b5e20',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                padding: '0.85rem 1.15rem',
                marginTop: 'auto',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1b5e20', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>
                  Khẳng định niềm tin:
                </div>
                <p style={{ fontSize: '0.835rem', color: 'var(--gray-700)', margin: 0, lineHeight: 1.55 }}>
                  Hành động kiên quyết, minh bạch đã củng cố niềm tin vững chắc của nhân dân và thế hệ trẻ vào tính liêm chính và sự lãnh đạo của Đảng.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
