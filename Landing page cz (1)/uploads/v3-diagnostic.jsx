// VARIAÇÃO 3 — "Split Diagnostic"
// Hero dividido (problema | solução), antes/depois logo no topo,
// agendamento inline embutido, foco máximo em conversão.

function V3Nav({ dark, iconStyle }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const bg = dark ? CZ.darkBg : CZ.lightBg;
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: bg, borderBottom: `1px solid ${border}`,
      padding: '14px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: 'Inter, sans-serif',
    }}>
      <CzLogo dark={dark} size={20} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: sub, letterSpacing: '0.1em',
          display: 'flex', alignItems: 'center', gap: 6, paddingRight: 14, borderRight: `1px solid ${border}`,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', animation: 'czPulse 2s infinite' }} />
          AGENDA ABERTA · 3 VAGAS / SEMANA
        </div>
        <BtnPrimary icon={<Icon kind="whatsapp" style={iconStyle} dark={dark} size={16} />}>WhatsApp</BtnPrimary>
      </div>
    </nav>
  );
}

function V3Hero({ dark, iconStyle, variant }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;

  const leftBg = dark ? '#161E2A' : '#F7F8FA';
  const rightBg = dark ? CZ.darkBg : '#FFFFFF';

  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 720, borderBottom: `1px solid ${border}` }}>
      {/* Lado esquerdo: o problema */}
      <div style={{ background: leftBg, padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: `1px solid ${border}`, position: 'relative' }}>
        <Reveal>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#EF4444', letterSpacing: '0.18em', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444' }} /> SEM CZ
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', color: fg, letterSpacing: '-0.03em', lineHeight: 1, margin: '0 0 32px' }}>
            {variant === 'b' ? 'Cliente espera. Concorrente atende.' : 'Sua equipe responde tarde. O cliente já foi.'}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              ['4h 12min', 'tempo médio de resposta'],
              ['63%', 'leads perdidos fora do horário'],
              ['1,2%', 'conversão da landing antiga'],
              ['R$ 87', 'custo por lead qualificado'],
            ].map(([k, v]) => (
              <li key={v} style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '12px 0', borderBottom: `1px dashed ${border}` }}>
                <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 28, color: fg, letterSpacing: '-0.02em', minWidth: 100 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: sub }}>{v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Lado direito: a solução */}
      <div style={{ background: rightBg, padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: CZ.orange, opacity: 0.08, filter: 'blur(120px)', borderRadius: '50%' }} />
        <Reveal>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.18em', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: CZ.orange, animation: 'czPulse 2s infinite' }} /> COM CZ
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', color: fg, letterSpacing: '-0.03em', lineHeight: 1, margin: '0 0 32px', position: 'relative' }}>
            Atende em <span style={{ color: CZ.orange }}>0,8s.</span><br />Agenda sozinho.<br />Você só fecha.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'flex', flexDirection: 'column', gap: 14, position: 'relative' }}>
            {[
              ['0,8s', 'tempo médio de resposta'],
              ['0%', 'leads perdidos · 24/7'],
              ['7,4%', 'conversão landing CZ'],
              ['R$ 19', 'custo por lead qualificado'],
            ].map(([k, v]) => (
              <li key={v} style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '12px 0', borderBottom: `1px dashed ${border}` }}>
                <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 28, color: CZ.orange, letterSpacing: '-0.02em', minWidth: 100 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: sub }}>{v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={300}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', position: 'relative' }}>
            <BtnPrimary large icon={<Icon kind="whatsapp" style={iconStyle} dark={dark} size={18} />}>Quero esses números</BtnPrimary>
            <BtnSecondary dark={dark} large icon={<Icon kind="calendar" style={iconStyle} dark={dark} size={18} />}>Agendar 30min</BtnSecondary>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function V3Demo({ dark }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const surface = dark ? '#161E2A' : '#F7F8FA';

  return (
    <section style={{ padding: '100px 56px', background: surface, borderBottom: `1px solid ${border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60, alignItems: 'center' }}>
        <Reveal>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.15em', marginBottom: 12 }}>↳ DEMO AO VIVO</div>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 3.5vw, 48px)', color: fg, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 20px' }}>
              Conversa real,<br />sem script.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: sub, lineHeight: 1.6, margin: '0 0 28px' }}>
              Esse agente foi treinado com a base de uma cliente nossa do setor logístico. Veja como ele qualifica e agenda — em segundos.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div><Metric value="<1s" label="primeira resposta" dark={dark} accent /></div>
              <div><Metric value="98%" label="taxa de resolução sem humano" dark={dark} /></div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}><AiChatDemo dark={dark} /></Reveal>
      </div>
    </section>
  );
}

function V3Services({ dark, iconStyle }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const surface = dark ? CZ.darkBg : CZ.lightBg;

  const services = [
    { kind: 'workflow', title: 'Landing pages premium', price: 'a partir de R$ 9.800', desc: 'Página de conversão sob medida + copy estratégica + A/B test.' },
    { kind: 'bot', title: 'Agente de IA', price: 'a partir de R$ 14.500', desc: 'Treinado, conectado ao seu canal e ao CRM. Inclui 90 dias de calibragem.' },
    { kind: 'link', title: 'Pacote completo', price: 'a partir de R$ 22.000', desc: 'Landing + agente + integrações + 90 dias de operação acompanhada. O combo que entrega ROI.', highlight: true },
  ];

  return (
    <section style={{ padding: '100px 56px', background: surface, borderBottom: `1px solid ${border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: 48, textAlign: 'center' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.15em', marginBottom: 12 }}>↳ INVESTIMENTO TRANSPARENTE</div>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', color: fg, letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>
              Escolha onde começar.
            </h2>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div style={{
                background: s.highlight ? (dark ? '#1F2937' : '#FFFFFF') : (dark ? '#161E2A' : '#FFFFFF'),
                border: `${s.highlight ? '2px' : '1px'} solid ${s.highlight ? CZ.orange : border}`,
                borderRadius: 14, padding: 28, display: 'flex', flexDirection: 'column', gap: 16, position: 'relative',
              }}>
                {s.highlight && (
                  <div style={{ position: 'absolute', top: -12, left: 28, background: CZ.orange, color: 'white', padding: '4px 12px', borderRadius: 999, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.12em', fontWeight: 600 }}>+ESCOLHIDO</div>
                )}
                <Icon kind={s.kind} style={iconStyle} dark={dark} size={28} />
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: fg, letterSpacing: '-0.02em', margin: 0 }}>{s.title}</h3>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: CZ.orange, letterSpacing: '0.05em' }}>{s.price}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: sub, lineHeight: 1.55, margin: 0, flex: 1 }}>{s.desc}</p>
                <BtnSecondary dark={dark} icon={LineIcon.arrowRight(dark ? CZ.darkLogo : CZ.lightLogo)}>Quero esse</BtnSecondary>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function V3Schedule({ dark, iconStyle }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const surface = dark ? '#161E2A' : '#FFFFFF';
  const days = [
    { d: 'SEG', n: '28', slots: 2 },
    { d: 'TER', n: '29', slots: 0 },
    { d: 'QUA', n: '30', slots: 3, hot: true },
    { d: 'QUI', n: '01', slots: 1 },
    { d: 'SEX', n: '02', slots: 4 },
  ];
  const [selected, setSelected] = React.useState(2);
  const [time, setTime] = React.useState('10:00');
  const times = ['09:00', '10:00', '11:00', '14:00', '15:30', '17:00'];

  return (
    <section style={{ padding: '100px 56px', borderBottom: `1px solid ${border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.15em', marginBottom: 12 }}>↳ DIAGNÓSTICO GRATUITO · 30MIN</div>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', color: fg, letterSpacing: '-0.03em', lineHeight: 1, margin: '0 0 16px' }}>
              Escolha um horário agora.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: sub, maxWidth: 540, margin: '0 auto' }}>
              Sem formulário longo. Você sai da call com um plano de automação real, mesmo que não feche com a gente.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, padding: 32, maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: sub, letterSpacing: '0.1em', marginBottom: 16 }}>SEMANA · ABR 28 → MAI 02</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, marginBottom: 24 }}>
              {days.map((day, i) => {
                const isSel = i === selected;
                const dis = day.slots === 0;
                return (
                  <button key={day.n} onClick={() => !dis && setSelected(i)} disabled={dis}
                    style={{
                      padding: '16px 0', borderRadius: 10, cursor: dis ? 'not-allowed' : 'pointer',
                      background: isSel ? CZ.orange : (dark ? CZ.darkBg : '#F7F8FA'),
                      color: isSel ? 'white' : (dis ? sub : fg),
                      border: `1px solid ${isSel ? CZ.orange : border}`,
                      fontFamily: 'Inter, sans-serif',
                      opacity: dis ? 0.4 : 1,
                      transition: 'all .2s ease',
                    }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: '0.1em', opacity: 0.8 }}>{day.d}</div>
                    <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 24, margin: '4px 0' }}>{day.n}</div>
                    <div style={{ fontSize: 10, opacity: 0.8 }}>{day.slots === 0 ? 'lotado' : `${day.slots} vagas`}</div>
                  </button>
                );
              })}
            </div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: sub, letterSpacing: '0.1em', marginBottom: 12 }}>HORÁRIOS DISPONÍVEIS</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8, marginBottom: 24 }}>
              {times.map(t => (
                <button key={t} onClick={() => setTime(t)}
                  style={{
                    padding: '12px 0', borderRadius: 8, cursor: 'pointer',
                    background: time === t ? CZ.orange : 'transparent',
                    color: time === t ? 'white' : fg,
                    border: `1px solid ${time === t ? CZ.orange : border}`,
                    fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 600,
                    transition: 'all .2s ease',
                  }}>{t}</button>
              ))}
            </div>
            <div style={{
              padding: 16, borderRadius: 10, background: dark ? CZ.darkBg : '#F7F8FA', border: `1px dashed ${border}`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20,
              fontFamily: 'Inter, sans-serif', fontSize: 14, color: sub,
            }}>
              <span>Selecionado: <strong style={{ color: fg }}>{days[selected].d} {days[selected].n} · {time}</strong> · 30 minutos · Google Meet</span>
              <Icon kind="check" style="line" dark={dark} />
            </div>
            <BtnPrimary large icon={LineIcon.arrowRight('white')}>Confirmar agendamento</BtnPrimary>
            <div style={{ marginTop: 16, fontFamily: 'Inter, sans-serif', fontSize: 12, color: sub, textAlign: 'center' }}>
              Prefere WhatsApp? <a href="#" style={{ color: CZ.orange, textDecoration: 'none', fontWeight: 600 }}>Fale com a gente direto →</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function V3Cases({ dark }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const surface = dark ? '#161E2A' : '#F7F8FA';
  const cases = [
    { tag: 'Imobiliário', title: 'RealEstate Elite', kpi: '+184%', kpiLabel: 'leads/mês' },
    { tag: 'Logística', title: 'CorpLog', kpi: '−72%', kpiLabel: 'tempo de fechamento' },
    { tag: 'B2B SaaS', title: 'Vector&Co', kpi: '+312%', kpiLabel: 'conversão landing' },
  ];
  return (
    <section style={{ padding: '100px 56px', background: surface, borderBottom: `1px solid ${border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: 40, textAlign: 'center' }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.15em', marginBottom: 12 }}>↳ CLIENTES QUE JÁ FIZERAM</div>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 3.5vw, 48px)', color: fg, letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>
              Resultados em 60 dias.
            </h2>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div style={{ background: dark ? CZ.darkBg : '#FFFFFF', border: `1px solid ${border}`, borderRadius: 14, padding: 28 }}>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: sub, letterSpacing: '0.12em', marginBottom: 8 }}>{c.tag}</div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 20, color: fg, letterSpacing: '-0.02em', margin: '0 0 24px' }}>{c.title}</h3>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 56, color: CZ.orange, lineHeight: 1, letterSpacing: '-0.03em' }}>{c.kpi}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: sub, marginTop: 6 }}>{c.kpiLabel}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function V3Footer({ dark }) {
  const sub = dark ? CZ.darkMuted : CZ.lightMuted;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  return (
    <footer style={{ padding: '32px 56px', borderTop: `1px solid ${border}`, fontFamily: 'Inter, sans-serif', fontSize: 13, color: sub }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <CzLogo dark={dark} size={18} />
        <div>© 2026 CZ Tech</div>
        <div style={{ display: 'flex', gap: 18 }}>
          <a href="#" style={{ color: sub, textDecoration: 'none' }}>LinkedIn</a>
          <a href="#" style={{ color: sub, textDecoration: 'none' }}>Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

function VariationDiagnostic({ dark, iconStyle, heroVariant }) {
  const bg = dark ? CZ.darkBg : CZ.lightBg;
  return (
    <div style={{ background: bg }}>
      <V3Nav dark={dark} iconStyle={iconStyle} />
      <V3Hero dark={dark} iconStyle={iconStyle} variant={heroVariant} />
      <V3Demo dark={dark} />
      <V3Services dark={dark} iconStyle={iconStyle} />
      <V3Schedule dark={dark} iconStyle={iconStyle} />
      <V3Cases dark={dark} />
      <V3Footer dark={dark} />
    </div>
  );
}

window.VariationDiagnostic = VariationDiagnostic;
