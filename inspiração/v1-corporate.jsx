// VARIAÇÃO 1 — "Corporate Authority"
// Modo escuro, hero centrado clássico, tipografia editorial sóbria, números grandes.

function V1Nav({ dark, iconStyle }) {
  const bg = dark ? 'rgba(15,22,32,0.85)' : 'rgba(255,255,255,0.85)';
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 10,
      backdropFilter: 'blur(12px)',
      background: bg,
      borderBottom: `1px solid ${border}`,
      padding: '18px 56px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <CzLogo dark={dark} size={22} />
      <div style={{ display: 'flex', gap: 36, fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
        {['Soluções', 'Serviços', 'Processo', 'Cases', 'Contato'].map((l) =>
        <a key={l} href={`#${l.toLowerCase()}`} style={{ color: sub, textDecoration: 'none', fontWeight: 500 }}>{l}</a>
        )}
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <BtnSecondary dark={dark} icon={<Icon kind="calendar" style={iconStyle} dark={dark} size={16} />}>Agendar call</BtnSecondary>
        <BtnPrimary icon={<Icon kind="whatsapp" style={iconStyle} dark={dark} size={16} />}>WhatsApp</BtnPrimary>
      </div>
    </nav>);

}

function V1Hero({ dark, iconStyle, variant }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const gridColor = dark ? 'rgba(255,255,255,0.04)' : 'rgba(15,22,32,0.05)';

  return (
    <section style={{ position: 'relative', padding: '120px 56px 100px', overflow: 'hidden' }}>
      {/* Grid de fundo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)'
      }} />
      {/* Glow laranja */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 300, background: CZ.orange, opacity: 0.15, filter: 'blur(120px)', borderRadius: '50%'
      }} />

      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 999,
            border: `1px solid ${dark ? CZ.darkBorder : CZ.lightBorder}`,
            background: dark ? 'rgba(255,107,53,0.06)' : 'rgba(255,107,53,0.06)',
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange,
            letterSpacing: '0.12em', marginBottom: 32
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: CZ.orange, animation: 'czPulse 2s infinite' }} />
            CONSULTORIA · IA · CONVERSÃO
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(48px, 6vw, 88px)',
            lineHeight: 0.98,
            letterSpacing: '-0.04em',
            color: fg,
            margin: '0 0 28px'
          }}>
            {variant === 'b' ?
            <>Atendimento que <span style={{ color: CZ.orange }}>nunca dorme.</span><br />Vendas que <em style={{ fontStyle: 'normal', fontFamily: 'Fraunces, serif', fontWeight: 500 }}>nunca param.</em></> :

            <>Pare de perder cliente<br />enquanto sua equipe <span style={{ color: CZ.orange }}>dorme.</span></>
            }
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 19, color: sub, maxWidth: 640, margin: '0 auto 40px', lineHeight: 1.55
          }}>Landing pages premium e agentes de IA que respondem, qualificam e agendam seus leads — 24h por dia.

          </p>
        </Reveal>

        <Reveal delay={360}>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 60 }}>
            <BtnPrimary large icon={<Icon kind="whatsapp" style={iconStyle} dark={dark} size={18} />}>Falar no WhatsApp</BtnPrimary>
            <BtnSecondary dark={dark} large icon={<Icon kind="calendar" style={iconStyle} dark={dark} size={18} />}>Agendar diagnóstico</BtnSecondary>
          </div>
        </Reveal>

        {/* KPI strip */}
        <Reveal delay={500}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
            padding: '36px 0 0',
            borderTop: `1px solid ${dark ? CZ.darkBorder : CZ.lightBorder}`
          }}>
            <div style={{ textAlign: 'left' }}><Metric value="+312%" label="aumento médio em conversão" dark={dark} accent /></div>
            <div style={{ textAlign: 'left' }}><Metric value="0,8s" label="tempo de resposta do agente" dark={dark} /></div>
            <div style={{ textAlign: 'left' }}><Metric value="24/7" label="atendimento sem pausa" dark={dark} /></div>
            <div style={{ textAlign: 'left' }}><Metric value="47" label="empresas digitalizadas" dark={dark} /></div>
          </div>
        </Reveal>
      </div>
    </section>);

}

function V1Logos({ dark }) {
  const sub = dark ? CZ.darkMuted : CZ.lightMuted;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const logos = ['CORPLOG', 'REALESTATE ELITE', 'NORTHFIELD', 'ATLAS BANK', 'VECTOR&CO', 'KAVERA'];
  return (
    <section style={{ padding: '40px 56px', borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: sub, letterSpacing: '0.15em' }}>EMPRESAS QUE CONFIAM</div>
        {logos.map((l) =>
        <div key={l} style={{
          fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 14,
          color: sub, letterSpacing: '0.05em', opacity: 0.7
        }}>{l}</div>
        )}
      </div>
    </section>);

}

function V1Services({ dark, iconStyle }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const surface = dark ? '#161E2A' : '#FFFFFF';

  const services = [
  { kind: 'workflow', title: 'Landing pages premium', desc: 'Páginas de conversão construídas para empresas que precisam transmitir autoridade desde o primeiro pixel.', features: ['Design corporativo sob medida', 'Tempo de carregamento &lt;1s', 'A/B test integrado'] },
  { kind: 'bot', title: 'Agentes de IA', desc: 'Atendimento autônomo no WhatsApp, Instagram e site. Qualifica, agenda, vende — sem alucinar.', features: ['Treinado com sua base', 'Tom de voz da marca', 'Handoff humano inteligente'] },
  { kind: 'link', title: 'Integração & CRM', desc: 'Conectamos sua landing e o agente ao CRM, planilhas, calendário e pipeline de vendas.', features: ['HubSpot · Pipedrive · RD', 'Webhooks customizados', 'Dashboard único'] }];


  return (
    <section id="serviços" style={{ padding: '120px 56px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.15em', marginBottom: 12 }}>01 · SOLUÇÕES</div>
              <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', color: fg, letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>
                Três pilares.<br />Um só sistema.
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: sub, maxWidth: 380, lineHeight: 1.55, margin: 0 }}>
              Não vendemos serviço solto. Entregamos uma operação digital ponta-a-ponta, do primeiro clique ao CRM.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: border, border: `1px solid ${border}`, borderRadius: 16, overflow: 'hidden' }}>
          {services.map((s, i) =>
          <Reveal key={s.title} delay={i * 120}>
              <div style={{ background: surface, padding: 36, height: '100%', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: dark ? 'rgba(255,107,53,0.1)' : 'rgba(255,107,53,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon kind={s.kind} style={iconStyle} dark={dark} size={26} />
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: fg, letterSpacing: '-0.02em', margin: 0 }}>{s.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: sub, lineHeight: 1.6, margin: 0, flex: 1 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, borderTop: `1px solid ${border}`, paddingTop: 18 }}>
                  {s.features.map((f) =>
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Inter, sans-serif', fontSize: 13, color: sub }}
                dangerouslySetInnerHTML={{ __html: `<span style="color:${CZ.orange};font-weight:700">+</span> ${f}` }} />
                )}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

function V1Process({ dark, iconStyle }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const surface = dark ? '#0B1118' : '#F7F8FA';

  const steps = [
  { n: '01', t: 'Diagnóstico', d: 'Mapeamos sua jornada atual, gargalos e oportunidades de automação. 60 minutos com nosso time.', dur: '1 dia' },
  { n: '02', t: 'Arquitetura', d: 'Desenhamos o fluxo da landing + agente + CRM. Você aprova antes de uma linha de código.', dur: '3 dias' },
  { n: '03', t: 'Construção', d: 'Design, redação de conversão e treinamento do agente acontecem em paralelo.', dur: '10–15 dias' },
  { n: '04', t: 'Operação', d: 'Acompanhamento, A/B testing e ajustes contínuos por 90 dias após o lançamento.', dur: 'contínuo' }];


  return (
    <section id="processo" style={{ padding: '120px 56px', background: surface, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.15em', marginBottom: 12 }}>02 · PROCESSO</div>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', color: fg, letterSpacing: '-0.03em', lineHeight: 1, margin: 0, maxWidth: 800 }}>
              De diagnóstico a piloto automático em <span style={{ color: CZ.orange }}>~3 semanas</span>.
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
          {/* Linha conectora */}
          <div style={{ position: 'absolute', top: 36, left: '12%', right: '12%', height: 1, background: `repeating-linear-gradient(90deg, ${border} 0 6px, transparent 6px 12px)` }} />
          {steps.map((s, i) =>
          <Reveal key={s.n} delay={i * 120}>
              <div style={{ position: 'relative' }}>
                <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: dark ? CZ.darkBg : '#FFFFFF',
                border: `1px solid ${i === 0 ? CZ.orange : border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 22,
                color: i === 0 ? CZ.orange : fg,
                marginBottom: 20
              }}>{s.n}</div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 20, color: fg, margin: '0 0 8px', letterSpacing: '-0.02em' }}>{s.t}</h3>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.1em', marginBottom: 12 }}>↳ {s.dur}</div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: sub, lineHeight: 1.55, margin: 0 }}>{s.d}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

function V1BeforeAfter({ dark }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  return (
    <section style={{ padding: '120px 56px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.15em', marginBottom: 12 }}>03 · IMPACTO</div>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', color: fg, letterSpacing: '-0.03em', lineHeight: 1, margin: 0, maxWidth: 800 }}>
              O antes e o depois de quem<br />automatiza com a CZ.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: sub, maxWidth: 600, marginTop: 16 }}>
              Médias do nosso portfólio nos primeiros 60 dias após o go-live.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <BeforeAfter dark={dark} />
        </Reveal>
      </div>
    </section>);

}

function V1AiDemo({ dark }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const surface = dark ? '#0B1118' : '#F7F8FA';

  return (
    <section style={{ padding: '120px 56px', background: surface, borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <Reveal>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.15em', marginBottom: 12 }}>04 · DEMO AO VIVO</div>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 3.5vw, 48px)', color: fg, letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 0 20px' }}>
              Veja seu próximo<br />vendedor trabalhando.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: sub, lineHeight: 1.6, marginBottom: 28, maxWidth: 460 }}>
              Treinado com a sua base de conhecimento, calibrado no seu tom de voz e conectado direto ao seu CRM. Não é template — é um agente desenhado pra fechar.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Resposta em &lt;1 segundo, 24/7', 'Qualificação automática de leads', 'Handoff inteligente para humano', 'Logs auditáveis de cada conversa'].map((f) =>
              <li key={f} style={{ display: 'flex', gap: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, color: sub }}>
                  <span style={{ color: CZ.orange, marginTop: 2 }}>{LineIcon.check(CZ.orange)}</span>
                  <span dangerouslySetInnerHTML={{ __html: f }} />
                </li>
              )}
            </ul>
            <BtnPrimary icon={LineIcon.arrowRight('white')}>Quero esse agente no meu negócio</BtnPrimary>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <AiChatDemo dark={dark} />
        </Reveal>
      </div>
    </section>);

}

function V1Cases({ dark }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const surface = dark ? '#161E2A' : '#FFFFFF';

  const cases = [
  { tag: 'Imobiliário · Luxo', title: 'RealEstate Elite', desc: 'Landing premium + agente que qualifica visitantes em até 90s. CRM integrado ao calendário dos corretores.', kpi: '+184%', kpiLabel: 'leads qualificados/mês' },
  { tag: 'Logística B2B', title: 'CorpLog', desc: 'Agente WhatsApp que tira dúvidas de prazo, fecha cotação e envia para o vendedor com contexto completo.', kpi: '−72%', kpiLabel: 'tempo médio de fechamento' }];


  return (
    <section id="cases" style={{ padding: '120px 56px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.15em', marginBottom: 12 }}>05 · CASES</div>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 56px)', color: fg, letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>
              Resultados, não promessas.
            </h2>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {cases.map((c, i) =>
          <Reveal key={c.title} delay={i * 150}>
              <article style={{ background: surface, border: `1px solid ${border}`, borderRadius: 16, overflow: 'hidden' }}>
                <ImgPlaceholder label={`screenshot · ${c.title}`} height={260} dark={dark} />
                <div style={{ padding: 28 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, gap: 20 }}>
                    <div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: CZ.orange, letterSpacing: '0.12em', marginBottom: 6 }}>{c.tag}</div>
                      <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 24, color: fg, margin: 0, letterSpacing: '-0.02em' }}>{c.title}</h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 32, color: CZ.orange, lineHeight: 1, letterSpacing: '-0.03em' }}>{c.kpi}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: sub, marginTop: 4 }}>{c.kpiLabel}</div>
                    </div>
                  </div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: sub, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

function V1Cta({ dark, iconStyle }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  return (
    <section id="contato" style={{ padding: '140px 56px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at center, ${CZ.orange}22 0%, transparent 60%)` }} />
      <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 72px)', color: fg, letterSpacing: '-0.04em', lineHeight: 1, margin: '0 0 24px' }}>
            Pronto pra parar de<br />perder cliente?
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, color: sub, maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.55 }}>
            Diagnóstico gratuito de 30 minutos. Você sai com um plano claro de automação — independente de fechar com a gente.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <BtnPrimary large icon={<Icon kind="whatsapp" style={iconStyle} dark={dark} size={18} />}>Falar agora no WhatsApp</BtnPrimary>
            <BtnSecondary dark={dark} large icon={<Icon kind="calendar" style={iconStyle} dark={dark} size={18} />}>Agendar diagnóstico (30min)</BtnSecondary>
          </div>
        </Reveal>
      </div>
    </section>);

}

function V1Footer({ dark }) {
  const sub = dark ? CZ.darkMuted : CZ.lightMuted;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  return (
    <footer style={{ padding: '40px 56px', borderTop: `1px solid ${border}`, fontFamily: 'Inter, sans-serif', fontSize: 13, color: sub }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <CzLogo dark={dark} size={18} />
        <div>© 2026 CZ Tech · CNPJ 00.000.000/0001-00</div>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="#" style={{ color: sub, textDecoration: 'none' }}>LinkedIn</a>
          <a href="#" style={{ color: sub, textDecoration: 'none' }}>Instagram</a>
          <a href="#" style={{ color: sub, textDecoration: 'none' }}>Privacidade</a>
        </div>
      </div>
    </footer>);

}

function VariationCorporate({ dark, iconStyle, heroVariant }) {
  const bg = dark ? CZ.darkBg : CZ.lightBg;
  return (
    <div style={{ background: bg, minHeight: 1600, fontFamily: 'Inter, sans-serif' }}>
      <V1Nav dark={dark} iconStyle={iconStyle} />
      <V1Hero dark={dark} iconStyle={iconStyle} variant={heroVariant} />
      <V1Logos dark={dark} />
      <V1Services dark={dark} iconStyle={iconStyle} />
      <V1Process dark={dark} iconStyle={iconStyle} />
      <V1BeforeAfter dark={dark} />
      <V1AiDemo dark={dark} />
      <V1Cases dark={dark} />
      <V1Cta dark={dark} iconStyle={iconStyle} />
      <V1Footer dark={dark} />
    </div>);

}

Object.assign(window, {
  VariationCorporate,
  V1Nav, V1Hero, V1Logos, V1Services, V1Process,
  V1BeforeAfter, V1AiDemo, V1Cases, V1Cta, V1Footer,
});