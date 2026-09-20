import { useState, useEffect, useRef } from 'react';
import { Mascot } from 'page-mascot';
import { X, BrainCircuit, Code2, ImageIcon, Sparkles } from 'lucide-react';

const AI_TOOLS = [
  {
    icon: BrainCircuit,
    color: '#10a37f',
    bgColor: 'rgba(16,163,127,0.10)',
    borderColor: 'rgba(16,163,127,0.25)',
    name: 'ChatGPT & NotebookLM',
    badge: 'Phân Tích Nội Dung',
    desc: 'Phân tích tài liệu học phần, tổng hợp các luận điểm chính và cấu trúc bài thuyết trình theo từng phần nội dung.',
  },
  {
    icon: Code2,
    color: '#d97706',
    bgColor: 'rgba(217,119,6,0.10)',
    borderColor: 'rgba(217,119,6,0.25)',
    name: 'Claude Code',
    badge: 'Vibe Coding',
    desc: 'Xây dựng toàn bộ giao diện web tương tác — từ thiết kế UI/UX đến code React với hiệu ứng animation mượt mà.',
  },
  {
    icon: ImageIcon,
    color: '#4285f4',
    bgColor: 'rgba(66,133,244,0.10)',
    borderColor: 'rgba(66,133,244,0.25)',
    name: 'Gemini AI',
    badge: 'Tạo Hình Ảnh',
    desc: 'Tạo và tối ưu hình ảnh minh họa, đồ họa thông tin phục vụ cho bài thuyết trình.',
  },
];

export default function AIUsageButton() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  /* Đóng khi click ngoài */
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  /* Đóng bằng Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      {/* ── Overlay mờ ── */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 1998,
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.28s ease',
        }}
      />

      {/* ── Popup ── */}
      <div
        ref={popupRef}
        style={{
          position: 'fixed',
          bottom: '5.5rem',
          right: '1.5rem',
          zIndex: 1999,
          width: 'min(360px, calc(100vw - 2rem))',
          background: 'rgba(15,5,5,0.94)',
          border: '1px solid rgba(212,175,55,0.30)',
          borderRadius: '20px',
          padding: '1.5rem',
          boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,175,55,0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.96)',
          transformOrigin: 'bottom right',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.28s cubic-bezier(0.4,0,0.2,1), transform 0.28s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={16} color="var(--gold)" />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>
              AI Usage
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Đóng"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '50%',
              width: 28, height: 28,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: 'rgba(255,255,255,0.55)',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = '#FFF'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
          >
            <X size={14} />
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, var(--gold), transparent)', marginBottom: '1.25rem', opacity: 0.4 }} />

        {/* Tool cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {AI_TOOLS.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div
                key={i}
                style={{
                  background: tool.bgColor,
                  border: `1px solid ${tool.borderColor}`,
                  borderRadius: '12px',
                  padding: '0.9rem 1rem',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                  animation: open ? 'fadeSlideIn 0.35s ease both' : 'none',
                  animationDelay: `${i * 0.07 + 0.05}s`,
                }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: tool.bgColor,
                  border: `1.5px solid ${tool.borderColor}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={17} color={tool.color} strokeWidth={1.8} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.3rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>
                      {tool.name}
                    </span>
                    <span style={{
                      fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: tool.color,
                      background: tool.bgColor, border: `1px solid ${tool.borderColor}`,
                      borderRadius: '100px', padding: '0.15rem 0.5rem',
                    }}>
                      {tool.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>
                    {tool.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.28)', textAlign: 'center', letterSpacing: '0.04em' }}>
          Học phần HCM202 · Tư Tưởng Hồ Chí Minh
        </p>
      </div>

      {/* ── Floating Mascot Button ── */}
      {/*
        Mascot ngồi ngay trên vị trí cố định — tracking cursor tự động.
        Bọc trong button-like div để bắt click mở popup.
      */}
      <div
        id="ai-usage-btn"
        onClick={() => setOpen(v => !v)}
        role="button"
        tabIndex={0}
        aria-label="Xem AI Usage"
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(v => !v); }}
        style={{
          position: 'fixed',
          bottom: '1rem',
          right: '1.25rem',
          zIndex: 2000,
          cursor: 'pointer',
          /* Ring vàng khi active */
          outline: open ? '2.5px solid rgba(212,175,55,0.75)' : '2.5px solid transparent',
          outlineOffset: '3px',
          borderRadius: '50%',
          transition: 'outline-color 0.25s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)',
          transform: open ? 'scale(1.08)' : 'scale(1)',
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <Mascot
          directions="/mascots/crt-directions.webp"
          reactions="/mascots/crt-reactions.webp"
          size={72}
          label="Trợ lý AI"
        />
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
