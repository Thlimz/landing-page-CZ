// landing-app.jsx
// Landing page final — V1 Corporate fullscreen + painel de Tweaks completo.
// Reutiliza VariationCorporate de v1-corporate.jsx sem modificá-lo.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": true,
  "iconStyle": "line",
  "heroVariant": "b",
  "primaryColor": "#FF6B35",
  "primaryColorDark": "#E5552B",
  "whatsappUrl": "https://wa.me/5511000000000",
  "calendarUrl": "https://calendly.com/cz-tech/diagnostico",
  "showLogos": true,
  "showProcess": true,
  "showBeforeAfter": true,
  "showAiDemo": true,
  "showCases": true
}/*EDITMODE-END*/;

// Aplica a cor primária customizada mutando o objeto CZ global.
// Como todos os componentes de v1-corporate.jsx leem CZ.orange / CZ.orangeDark
// no momento do render, qualquer mudança aqui propaga no próximo render.
function useBrandColor(primary, primaryDark) {
  React.useLayoutEffect(() => {
    window.CZ.orange = primary;
    window.CZ.orangeDark = primaryDark;
  }, [primary, primaryDark]);
}

// Intercepta cliques nas CTAs do WhatsApp / agenda dentro do container e
// reescreve href dinamicamente. Isso evita ter que editar o template original.
function useCtaLinks(rootRef, whatsappUrl, calendarUrl) {
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const apply = () => {
      root.querySelectorAll('a').forEach((a) => {
        const txt = (a.textContent || '').toLowerCase();
        if (txt.includes('whatsapp') || txt.includes('whats')) {
          a.href = whatsappUrl;
          a.target = '_blank';
          a.rel = 'noopener';
        } else if (txt.includes('agendar') || txt.includes('agenda') || txt.includes('diagn')) {
          a.href = calendarUrl;
          a.target = '_blank';
          a.rel = 'noopener';
        }
      });
    };
    apply();
    // Re-aplica quando o DOM muda (Reveal animations, etc.)
    const mo = new MutationObserver(apply);
    mo.observe(root, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, [whatsappUrl, calendarUrl]);
}

function LandingApp() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const rootRef = React.useRef(null);

  useBrandColor(tweaks.primaryColor, tweaks.primaryColorDark);
  useCtaLinks(rootRef, tweaks.whatsappUrl, tweaks.calendarUrl);

  return (
    <>
      <style>{window.sharedKeyframes}</style>
      <div ref={rootRef}>
        <FilteredCorporate
          dark={tweaks.dark}
          iconStyle={tweaks.iconStyle}
          heroVariant={tweaks.heroVariant}
          show={{
            logos: tweaks.showLogos,
            process: tweaks.showProcess,
            beforeAfter: tweaks.showBeforeAfter,
            aiDemo: tweaks.showAiDemo,
            cases: tweaks.showCases,
          }}
        />
      </div>

      <TweaksPanel title="Tweaks · Landing CZ">
        <TweakSection label="Identidade">
          <TweakToggle label="Modo escuro" value={tweaks.dark}
            onChange={(v) => setTweak('dark', v)} />
          <TweakColor label="Cor primária" value={tweaks.primaryColor}
            onChange={(v) => setTweak({ primaryColor: v, primaryColorDark: shade(v, -0.12) })} />
          <TweakRadio label="Ícones" value={tweaks.iconStyle}
            options={[{ value: 'line', label: 'Line' }, { value: 'emoji', label: 'Emoji' }, { value: 'none', label: 'Off' }]}
            onChange={(v) => setTweak('iconStyle', v)} />
        </TweakSection>

        <TweakSection label="Hero">
          <TweakRadio label="Headline" value={tweaks.heroVariant}
            options={[
              { value: 'a', label: 'A · Pare de perder' },
              { value: 'b', label: 'B · Nunca dorme' },
            ]}
            onChange={(v) => setTweak('heroVariant', v)} />
        </TweakSection>

        <TweakSection label="CTAs">
          <TweakText label="WhatsApp URL" value={tweaks.whatsappUrl}
            placeholder="https://wa.me/55..."
            onChange={(v) => setTweak('whatsappUrl', v)} />
          <TweakText label="Agenda URL" value={tweaks.calendarUrl}
            placeholder="https://calendly.com/..."
            onChange={(v) => setTweak('calendarUrl', v)} />
        </TweakSection>

        <TweakSection label="Seções">
          <TweakToggle label="Logos de clientes" value={tweaks.showLogos}
            onChange={(v) => setTweak('showLogos', v)} />
          <TweakToggle label="Processo (4 etapas)" value={tweaks.showProcess}
            onChange={(v) => setTweak('showProcess', v)} />
          <TweakToggle label="Antes / Depois" value={tweaks.showBeforeAfter}
            onChange={(v) => setTweak('showBeforeAfter', v)} />
          <TweakToggle label="Demo do agente IA" value={tweaks.showAiDemo}
            onChange={(v) => setTweak('showAiDemo', v)} />
          <TweakToggle label="Cases" value={tweaks.showCases}
            onChange={(v) => setTweak('showCases', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

// Recompõe a V1 chamando os subcomponentes individualmente — assim podemos
// ligar/desligar seções sem editar v1-corporate.jsx.
function FilteredCorporate({ dark, iconStyle, heroVariant, show }) {
  const bg = dark ? CZ.darkBg : CZ.lightBg;
  return (
    <div style={{ background: bg, minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <V1Nav dark={dark} iconStyle={iconStyle} />
      <V1Hero dark={dark} iconStyle={iconStyle} variant={heroVariant} />
      {show.logos && <V1Logos dark={dark} />}
      <V1Services dark={dark} iconStyle={iconStyle} />
      {show.process && <V1Process dark={dark} iconStyle={iconStyle} />}
      {show.beforeAfter && <V1BeforeAfter dark={dark} />}
      {show.aiDemo && <V1AiDemo dark={dark} />}
      {show.cases && <V1Cases dark={dark} />}
      <V1Cta dark={dark} iconStyle={iconStyle} />
      <V1Footer dark={dark} />
    </div>
  );
}

// Pequeno utilitário pra escurecer/clarear hex.
function shade(hex, amt) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  const r = Math.max(0, Math.min(255, ((n >> 16) & 0xff) + Math.round(255 * amt)));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + Math.round(255 * amt)));
  const b = Math.max(0, Math.min(255, (n & 0xff) + Math.round(255 * amt)));
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

ReactDOM.createRoot(document.getElementById('root')).render(<LandingApp />);
