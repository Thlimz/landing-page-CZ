// Componentes e tokens compartilhados entre as variações
// Tokens de marca CZ Tech
const CZ = {
  orange: '#FF6B35',
  orangeDark: '#E5552B',
  darkBg: '#0F1620',
  darkSurface: '#1F2937',
  darkBorder: '#2A3645',
  darkLogo: '#F4F4F5',
  darkBody: '#A1A1AA',
  darkMuted: '#6B7480',
  lightBg: '#FFFFFF',
  lightSurface: '#F7F8FA',
  lightBorder: '#E5E7EB',
  lightLogo: '#334155',
  lightBody: '#475569',
  lightMuted: '#94A3B8',
};

// Logo CZ
function CzLogo({ dark = true, size = 28 }) {
  const text = dark ? CZ.darkLogo : CZ.lightLogo;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: size, letterSpacing: '-0.02em' }}>
      <span style={{
        background: CZ.orange,
        color: 'white',
        borderRadius: 6,
        padding: `${size * 0.05}px ${size * 0.28}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.85,
        lineHeight: 1,
      }}>CZ</span>
      <span style={{ color: text }}>TECH</span>
    </div>
  );
}

// SVG icon set (line style, sem emoji)
const LineIcon = {
  workflow: (c = 'currentColor') => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="6" height="6" rx="1.2" />
      <rect x="15" y="3" width="6" height="6" rx="1.2" />
      <rect x="9" y="15" width="6" height="6" rx="1.2" />
      <path d="M6 9v3h12V9M12 12v3" />
    </svg>
  ),
  bot: (c = 'currentColor') => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M12 3v4M9 12h.01M15 12h.01M9 16h6M2 12h2M20 12h2" />
    </svg>
  ),
  link: (c = 'currentColor') => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
      <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
    </svg>
  ),
  whatsapp: (c = 'currentColor') => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={c}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.2-1.4c1.4.7 3 1.1 4.8 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
  ),
  arrowRight: (c = 'currentColor') => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  check: (c = 'currentColor') => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  spark: (c = 'currentColor') => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8" />
    </svg>
  ),
  calendar: (c = 'currentColor') => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 11h18" />
    </svg>
  ),
  clock: (c = 'currentColor') => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  lightning: (c = 'currentColor') => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  ),
};

// Render emoji vs line vs none
function Icon({ kind, style = 'line', dark = true, size = 28 }) {
  if (style === 'none') return null;
  if (style === 'emoji') {
    const map = { workflow: '🌐', bot: '🤖', link: '⚙️', whatsapp: '💬', spark: '✨', calendar: '📅', clock: '⏱️', lightning: '⚡' };
    return <span style={{ fontSize: size }}>{map[kind] || '•'}</span>;
  }
  const color = dark ? CZ.orange : CZ.orange;
  return LineIcon[kind] ? LineIcon[kind](color) : null;
}

// Placeholder de imagem (faixas diagonais sutis com label monoespaçada)
function ImgPlaceholder({ label, height = 220, dark = true }) {
  const stripeA = dark ? '#1A2330' : '#EEF1F4';
  const stripeB = dark ? '#202B3A' : '#E4E8ED';
  const text = dark ? '#5C6B80' : '#8B95A4';
  return (
    <div style={{
      width: '100%',
      height,
      background: `repeating-linear-gradient(135deg, ${stripeA} 0 14px, ${stripeB} 14px 28px)`,
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: text,
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      border: `1px solid ${dark ? CZ.darkBorder : CZ.lightBorder}`,
    }}>
      [ {label} ]
    </div>
  );
}

// Bloco de métrica
function Metric({ value, label, dark = true, accent = false }) {
  const fg = accent ? CZ.orange : (dark ? CZ.darkLogo : CZ.lightLogo);
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  return (
    <div>
      <div style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(40px, 5vw, 64px)',
        color: fg,
        letterSpacing: '-0.04em',
        lineHeight: 1,
      }}>{value}</div>
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        color: sub,
        marginTop: 8,
        maxWidth: 200,
        lineHeight: 1.4,
      }}>{label}</div>
    </div>
  );
}

// Botão CTA primário (laranja)
function BtnPrimary({ children, large = false, icon = null, onClick, href = '#' }) {
  const [hover, setHover] = React.useState(false);
  const padding = large ? '16px 28px' : '12px 22px';
  const fontSize = large ? 16 : 14;
  return (
    <a href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        background: hover ? CZ.orangeDark : CZ.orange,
        color: 'white',
        padding,
        borderRadius: 8,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize,
        textDecoration: 'none',
        transition: 'all .2s ease',
        transform: hover ? 'translateY(-1px)' : 'none',
        boxShadow: hover ? '0 8px 24px rgba(255,107,53,0.35)' : '0 2px 8px rgba(255,107,53,0.2)',
        whiteSpace: 'nowrap',
      }}>
      {icon}
      {children}
    </a>
  );
}

// Botão secundário
function BtnSecondary({ children, large = false, icon = null, dark = true, href = '#' }) {
  const [hover, setHover] = React.useState(false);
  const padding = large ? '16px 28px' : '12px 22px';
  const fontSize = large ? 16 : 14;
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  return (
    <a href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        background: hover ? (dark ? '#1A2330' : '#F0F2F5') : 'transparent',
        color: fg,
        padding,
        borderRadius: 8,
        border: `1px solid ${border}`,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize,
        textDecoration: 'none',
        transition: 'all .2s ease',
        whiteSpace: 'nowrap',
      }}>
      {icon}
      {children}
    </a>
  );
}

// Hook scroll-reveal simples
function useReveal(threshold = 0.15) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold, root: ref.current.closest('.dc-artboard-content') || null });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity .8s ease ${delay}ms, transform .8s ease ${delay}ms`,
    }}>{children}</div>
  );
}

// Demo de chat IA (animada — mensagens aparecem em sequência)
function AiChatDemo({ dark = true, compact = false }) {
  const messages = [
    { from: 'user', text: 'Vocês entregam em SP capital?', t: 200 },
    { from: 'bot', text: 'Sim! Entregamos em SP capital com prazo de 24h. Posso já agendar?', t: 1400 },
    { from: 'user', text: 'Pode sim, amanhã de manhã', t: 2800 },
    { from: 'bot', text: 'Perfeito ✓ Agendado para amanhã 09h. Vou te enviar a confirmação por aqui.', t: 4000 },
  ];
  const [shown, setShown] = React.useState(0);
  const [typing, setTyping] = React.useState(false);
  React.useEffect(() => {
    const timers = [];
    messages.forEach((m, i) => {
      timers.push(setTimeout(() => {
        if (m.from === 'bot') {
          setTyping(true);
          timers.push(setTimeout(() => { setTyping(false); setShown(i + 1); }, 700));
        } else {
          setShown(i + 1);
        }
      }, m.t));
    });
    timers.push(setTimeout(() => { setShown(0); setTyping(false); }, 7000));
    const loop = setInterval(() => {
      setShown(0); setTyping(false);
      messages.forEach((m, i) => {
        setTimeout(() => {
          if (m.from === 'bot') {
            setTyping(true);
            setTimeout(() => { setTyping(false); setShown(i + 1); }, 700);
          } else { setShown(i + 1); }
        }, m.t);
      });
    }, 8000);
    return () => { timers.forEach(clearTimeout); clearInterval(loop); };
  }, []);

  const surface = dark ? '#0B1118' : '#FFFFFF';
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const userBg = dark ? '#1F2937' : '#F0F2F5';
  const userFg = dark ? CZ.darkLogo : CZ.lightLogo;
  const headerBg = dark ? '#0F1620' : '#F7F8FA';
  const headerFg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkMuted : CZ.lightMuted;

  return (
    <div style={{
      background: surface,
      border: `1px solid ${border}`,
      borderRadius: 14,
      overflow: 'hidden',
      fontFamily: 'Inter, sans-serif',
      boxShadow: dark ? '0 24px 60px rgba(0,0,0,0.4)' : '0 24px 60px rgba(15,22,32,0.08)',
      width: '100%',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: headerBg, borderBottom: `1px solid ${border}` }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: CZ.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 12 }}>CZ</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: headerFg }}>Agente CZ · WhatsApp</div>
          <div style={{ fontSize: 11, color: '#22C55E', display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} /> online · responde em 0,8s
          </div>
        </div>
      </div>
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8, minHeight: compact ? 220 : 280, justifyContent: 'flex-end' }}>
        {messages.slice(0, shown).map((m, i) => (
          <div key={i} style={{
            alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
            background: m.from === 'user' ? userBg : CZ.orange,
            color: m.from === 'user' ? userFg : 'white',
            padding: '8px 12px',
            borderRadius: m.from === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
            fontSize: 13,
            maxWidth: '78%',
            lineHeight: 1.4,
            animation: 'czPop 0.3s ease',
          }}>{m.text}</div>
        ))}
        {typing && (
          <div style={{
            alignSelf: 'flex-start', background: CZ.orange, padding: '10px 14px',
            borderRadius: '12px 12px 12px 2px', display: 'flex', gap: 4,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'white', animation: 'czDot 1.2s infinite 0s' }} />
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'white', animation: 'czDot 1.2s infinite .2s' }} />
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'white', animation: 'czDot 1.2s infinite .4s' }} />
          </div>
        )}
      </div>
      <div style={{ padding: '10px 14px', borderTop: `1px solid ${border}`, fontSize: 11, color: sub, fontFamily: 'JetBrains Mono, monospace' }}>
        ▸ demo · agente real responde em qualquer canal
      </div>
    </div>
  );
}

// Slider antes/depois
function BeforeAfter({ dark = true }) {
  const [pos, setPos] = React.useState(50);
  const surface = dark ? '#0B1118' : '#FFFFFF';
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;

  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: 14, overflow: 'hidden', border: `1px solid ${border}`, background: surface, userSelect: 'none' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 320, fontFamily: 'Inter, sans-serif' }}>
        {/* Antes */}
        <div style={{ padding: 28, background: dark ? '#161E2A' : '#F7F8FA', borderRight: `1px solid ${border}`, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.15em', color: sub, fontFamily: 'JetBrains Mono, monospace' }}>ANTES</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: fg, fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.02em' }}>Atendimento manual</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              ['Tempo médio de resposta', '4h 12min'],
              ['Leads perdidos fora do horário', '63%'],
              ['Conversão landing antiga', '1,2%'],
              ['Custo / lead qualificado', 'R$ 87'],
            ].map(([k, v]) => (
              <li key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: sub, paddingBottom: 8, borderBottom: `1px dashed ${border}` }}>
                <span>{k}</span>
                <span style={{ color: fg, fontWeight: 600 }}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Depois */}
        <div style={{ padding: 28, background: dark ? '#0F1620' : '#FFFFFF', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.15em', color: CZ.orange, fontFamily: 'JetBrains Mono, monospace' }}>DEPOIS · COM CZ</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: fg, fontFamily: 'Manrope, sans-serif', letterSpacing: '-0.02em' }}>Operação automatizada</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              ['Tempo médio de resposta', '0,8s'],
              ['Leads perdidos fora do horário', '0%'],
              ['Conversão landing CZ', '7,4%'],
              ['Custo / lead qualificado', 'R$ 19'],
            ].map(([k, v]) => (
              <li key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: sub, paddingBottom: 8, borderBottom: `1px dashed ${border}` }}>
                <span>{k}</span>
                <span style={{ color: CZ.orange, fontWeight: 700 }}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// CSS keyframes globais
const sharedKeyframes = `
  @keyframes czPop { from { opacity: 0; transform: translateY(6px) scale(.96);} to {opacity:1; transform:none;} }
  @keyframes czDot { 0%, 60%, 100% { opacity: .3; transform: translateY(0);} 30% { opacity: 1; transform: translateY(-2px);} }
  @keyframes czPulse { 0%, 100% { opacity: .4;} 50% { opacity: 1;} }
  @keyframes czGrid { from { background-position: 0 0;} to { background-position: 40px 40px;} }
`;

Object.assign(window, {
  CZ, CzLogo, Icon, ImgPlaceholder, Metric, BtnPrimary, BtnSecondary,
  Reveal, useReveal, AiChatDemo, BeforeAfter, sharedKeyframes,
});
