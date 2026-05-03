// VARIAÇÃO 2 — "Editorial Bold"
// Modo claro por padrão, hero assimétrico com tipografia gigante editorial,
// demo de IA viva no hero, bordas marcadas, vibe revista/startup.

function V2Nav({ dark, iconStyle }) {
  const bg = dark ? CZ.darkBg : CZ.lightBg;
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: bg,
      borderBottom: `2px solid ${dark ? CZ.darkLogo : CZ.lightLogo}`,
      padding: '20px 56px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <CzLogo dark={dark} size={22} />
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: sub,
          letterSpacing: '0.12em', borderLeft: `1px solid ${border}`, paddingLeft: 28
        }}>EDIÇÃO #07 · ABR 2026</div>
      </div>
      <div style={{ display: 'flex', gap: 32, fontSize: 14 }}>
        {['Pauta', 'Serviços', 'Cases', 'Manifesto'].map((l) =>
        <a key={l} href="#" style={{ color: fg, textDecoration: 'none', fontWeight: 600 }}>{l}</a>
        )}
      </div>
      <BtnPrimary icon={<Icon kind="whatsapp" style={iconStyle} dark={dark} size={16} />}>Conversar</BtnPrimary>
    </nav>);

}

function V2Hero({ dark, iconStyle, variant }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;

  return (
    <section style={{
      padding: '60px 56px 80px',
      borderBottom: `2px solid ${dark ? CZ.darkLogo : CZ.lightLogo}`,
      position: 'relative'
    }}>
      <Reveal>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange,
          letterSpacing: '0.18em', marginBottom: 24
        }}>↳ MANIFESTO 01 · IA APLICADA AO COMERCIAL</div>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'end' }}>
        <Reveal delay={100}>
          <h1 style={{
            fontFamily: 'Fraunces, serif',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(72px, 10vw, 156px)',
            lineHeight: 0.86,
            letterSpacing: '-0.04em',
            color: fg,
            margin: 0
          }}>
            {variant === 'b' ?
            <>Cada<br /><span style={{ fontStyle: 'normal', fontFamily: 'Manrope', fontWeight: 800, color: CZ.orange }}>minuto</span><br />conta.</> :

            <>Vender<br />enquanto<br /><span style={{ fontStyle: 'normal', fontFamily: 'Manrope', fontWeight: 800, color: CZ.orange }}>você dorme.</span></>
            }
          </h1>
        </Reveal>

        <Reveal delay={250}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 18, color: fg, lineHeight: 1.5, margin: 0, fontWeight: 500
            }}>
              A CZ desenha landing pages e agentes de IA pra empresas tradicionais que decidiram parar de competir no manual.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: sub, lineHeight: 1.6, margin: 0 }}>
              Operação digital de ponta-a-ponta, do primeiro clique no anúncio até o lead qualificado dentro do CRM. Sem terceirizar nada.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <BtnPrimary large icon={<Icon kind="whatsapp" style={iconStyle} dark={dark} size={18} />}>WhatsApp</BtnPrimary>
              <BtnSecondary dark={dark} large icon={<Icon kind="calendar" style={iconStyle} dark={dark} size={18} />}>Agendar</BtnSecondary>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Strip metadados editorial */}
      <div style={{
        marginTop: 60, padding: '20px 0', borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`,
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: sub, letterSpacing: '0.1em'
      }}>
        <div><div style={{ color: CZ.orange, marginBottom: 4 }}>FUNDADA</div>2023 · SÃO PAULO</div>
        <div><div style={{ color: CZ.orange, marginBottom: 4 }}>EQUIPE</div>12 ESPECIALISTAS</div>
        <div><div style={{ color: CZ.orange, marginBottom: 4 }}>STACK</div>REACT · GPT · N8N · HUBSPOT</div>
        <div><div style={{ color: CZ.orange, marginBottom: 4 }}>NPS</div>72 · ÚLT. 12 MESES</div>
        <div><div style={{ color: CZ.orange, marginBottom: 4 }}>ENTREGA</div>~3 SEMANAS DO BRIEFING</div>
      </div>
    </section>);

}

function V2DemoBlock({ dark, iconStyle }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const surface = dark ? '#161E2A' : '#F7F8FA';

  return (
    <section style={{ padding: '120px 56px', background: surface, borderBottom: `2px solid ${dark ? CZ.darkLogo : CZ.lightLogo}` }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.18em' }}>§ 01</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: sub, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Em campo · demonstração ao vivo</span>
          </div>
          <h2 style={{
            fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 88px)',
            color: fg, lineHeight: 0.95, letterSpacing: '-0.03em', margin: '0 0 60px', maxWidth: 1000
          }}>
            Um <span style={{ fontStyle: 'italic', color: CZ.orange }}>vendedor</span> que não precisa de café, comissão ou descanso.
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          <Reveal delay={150}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {[
              ['Em &lt;1 segundo', 'O cliente recebe a primeira resposta. Sempre.'],
              ['Aprende com sua base', 'Catálogo, FAQ, condições comerciais — tudo em contexto.'],
              ['Qualifica e agenda', 'Não passa lead frio pro humano. Já vem com contexto e horário marcado.'],
              ['Auditável', 'Cada conversa fica registrada e exportável.']].
              map(([t, d]) =>
              <div key={t} style={{ paddingBottom: 20, borderBottom: `1px solid ${border}` }}>
                  <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 22, color: fg, letterSpacing: '-0.02em', marginBottom: 6 }}
                dangerouslySetInnerHTML={{ __html: t }} />
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: sub, lineHeight: 1.55 }}>{d}</div>
                </div>
              )}
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div style={{ position: 'sticky', top: 100 }}>
              <AiChatDemo dark={dark} />
              <div style={{ marginTop: 16, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: sub, textAlign: 'right', letterSpacing: '0.1em' }}>

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

function V2Process({ dark }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const surface = dark ? CZ.darkBg : CZ.lightBg;

  const steps = [
  { n: '01', t: 'Diagnóstico', dur: 'DIA 1', d: '60 min mapeando jornada, gargalos e oportunidade real de automação no seu funil.' },
  { n: '02', t: 'Arquitetura', dur: 'DIA 2–4', d: 'Fluxo da landing + agente + CRM desenhado e aprovado antes de uma linha de código.' },
  { n: '03', t: 'Construção', dur: 'DIA 5–18', d: 'Design, copy de conversão e treinamento do agente em paralelo.' },
  { n: '04', t: 'Operação', dur: 'DIA 19+', d: '90 dias de A/B testing e calibragem inclusos. Você só vê o gráfico subir.' }];


  return (
    <section style={{ padding: '120px 56px', background: surface, borderBottom: `2px solid ${dark ? CZ.darkLogo : CZ.lightLogo}` }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.18em' }}>§ 02</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: sub, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Processo · 21 dias do briefing ao live</span>
          </div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(48px, 6vw, 88px)', color: fg, lineHeight: 0.95, letterSpacing: '-0.03em', margin: '0 0 60px', fontWeight: 400 }}>
            Não é mágica.<br />É <span style={{ fontStyle: 'italic', color: CZ.orange }}>método.</span>
          </h2>
        </Reveal>
        <div style={{ borderTop: `1px solid ${border}` }}>
          {steps.map((s, i) =>
          <Reveal key={s.n} delay={i * 80}>
              <div style={{
              display: 'grid', gridTemplateColumns: '120px 200px 1fr 200px',
              gap: 32, padding: '32px 0', borderBottom: `1px solid ${border}`,
              alignItems: 'baseline'
            }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: 64, color: CZ.orange, lineHeight: 1, fontStyle: 'italic' }}>{s.n}</div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 32, color: fg, margin: 0, letterSpacing: '-0.02em' }}>{s.t}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: sub, lineHeight: 1.55, margin: 0, maxWidth: 480 }}>{s.d}</p>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: sub, letterSpacing: '0.15em', textAlign: 'right' }}>↳ {s.dur}</div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

function V2BeforeAfter({ dark }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  return (
    <section style={{ padding: '120px 56px', borderBottom: `2px solid ${dark ? CZ.darkLogo : CZ.lightLogo}` }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.18em' }}>§ 03</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: sub, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Antes & depois · médias dos primeiros 60 dias</span>
          </div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(48px, 6vw, 88px)', color: fg, lineHeight: 0.95, letterSpacing: '-0.03em', margin: '0 0 60px', fontWeight: 400 }}>
            Os números <span style={{ fontStyle: 'italic', color: CZ.orange }}>falam.</span>
          </h2>
        </Reveal>
        <Reveal delay={150}><BeforeAfter dark={dark} /></Reveal>
      </div>
    </section>);

}

function V2Cases({ dark }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  const border = dark ? CZ.darkBorder : CZ.lightBorder;
  const surface = dark ? '#161E2A' : '#F7F8FA';

  const cases = [
  { n: '01', tag: 'Imobiliário · Luxo', title: 'RealEstate Elite', desc: 'Landing premium + agente que qualifica visitantes em até 90s. Calendário dos corretores conectado.', kpi: '+184%', kpiLabel: 'leads qualificados/mês', img: 'screenshot · landing realestate elite' },
  { n: '02', tag: 'Logística B2B', title: 'CorpLog', desc: 'Agente WhatsApp que tira dúvidas de prazo, fecha cotação e envia para o vendedor com contexto completo.', kpi: '−72%', kpiLabel: 'tempo médio de fechamento', img: 'screenshot · dashboard corplog' }];

  return (
    <section style={{ padding: '120px 56px', background: surface, borderBottom: `2px solid ${dark ? CZ.darkLogo : CZ.lightLogo}` }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: CZ.orange, letterSpacing: '0.18em' }}>§ 04</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: sub, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Casos em campo</span>
          </div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(48px, 6vw, 88px)', color: fg, lineHeight: 0.95, letterSpacing: '-0.03em', margin: '0 0 60px', fontWeight: 400 }}>
            Quem <span style={{ fontStyle: 'italic', color: CZ.orange }}>já parou</span> de perder.
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {cases.map((c, i) =>
          <Reveal key={c.n} delay={i * 150}>
              <article style={{ background: dark ? CZ.darkBg : '#FFFFFF', border: `1px solid ${border}`, padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${border}` }}>
                  <span style={{ fontFamily: 'Fraunces, serif', fontSize: 32, color: CZ.orange, fontStyle: 'italic' }}>{c.n}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: sub, letterSpacing: '0.12em' }}>{c.tag}</span>
                </div>
                <ImgPlaceholder label={c.img} height={240} dark={dark} />
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 28, color: fg, letterSpacing: '-0.02em', margin: '24px 0 12px' }}>{c.title}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: sub, lineHeight: 1.6, margin: '0 0 24px' }}>{c.desc}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, paddingTop: 20, borderTop: `1px solid ${border}` }}>
                  <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 48, color: CZ.orange, lineHeight: 1, letterSpacing: '-0.03em' }}>{c.kpi}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: sub }}>{c.kpiLabel}</span>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

function V2Cta({ dark, iconStyle }) {
  const fg = dark ? CZ.darkLogo : CZ.lightLogo;
  const sub = dark ? CZ.darkBody : CZ.lightBody;
  return (
    <section style={{ padding: '140px 56px', background: CZ.orange, color: 'white' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 60, alignItems: 'center' }}>
        <Reveal>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(48px, 6vw, 88px)', color: 'white', lineHeight: 0.95, letterSpacing: '-0.03em', margin: 0, fontWeight: 400 }}>
            Vamos <span style={{ fontStyle: 'italic' }}>conversar?</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.55, margin: '0 0 28px' }}>
              30 minutos. Diagnóstico real. Você sai com um plano — independente de fechar com a CZ.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'white', color: CZ.orange, padding: '16px 28px', borderRadius: 8, fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
                {LineIcon.whatsapp(CZ.orange)} WhatsApp direto
              </a>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: 'white', padding: '16px 28px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>
                {LineIcon.calendar('white')} Agendar diagnóstico
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}

function V2Footer({ dark }) {
  const sub = dark ? CZ.darkMuted : CZ.lightMuted;
  return (
    <footer style={{ padding: '40px 56px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: sub, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <div>© 2026 · CZ TECH · SP, BRASIL</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#" style={{ color: sub, textDecoration: 'none' }}>LINKEDIN</a>
          <a href="#" style={{ color: sub, textDecoration: 'none' }}>INSTAGRAM</a>
          <a href="#" style={{ color: sub, textDecoration: 'none' }}>PRIVACIDADE</a>
        </div>
      </div>
    </footer>);

}

function VariationEditorial({ dark, iconStyle, heroVariant }) {
  const bg = dark ? CZ.darkBg : CZ.lightBg;
  return (
    <div style={{ background: bg }}>
      <V2Nav dark={dark} iconStyle={iconStyle} />
      <V2Hero dark={dark} iconStyle={iconStyle} variant={heroVariant} />
      <V2DemoBlock dark={dark} iconStyle={iconStyle} />
      <V2Process dark={dark} />
      <V2BeforeAfter dark={dark} />
      <V2Cases dark={dark} />
      <V2Cta dark={dark} iconStyle={iconStyle} />
      <V2Footer dark={dark} />
    </div>);

}

window.VariationEditorial = VariationEditorial;