// App principal: monta as 3 variações dentro do design canvas + tweaks panel.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "v1Dark": true,
  "v1IconStyle": "line",
  "v1HeroVariant": "a",
  "v2Dark": false,
  "v2IconStyle": "line",
  "v2HeroVariant": "a",
  "v3Dark": false,
  "v3IconStyle": "line",
  "v3HeroVariant": "a"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  return (
    <>
      <DesignCanvas>
        <DCSection id="variations" title="CZ Tech · 3 direções de landing" subtitle="Use Tweaks (canto inferior direito) para alternar modo claro/escuro, estilo de ícones e headline em cada variação.">
          <DCArtboard id="v1" label="01 · Corporate Authority — escuro, hero centrado, autoridade séria" width={1280} height={3600}>
            <VariationCorporate
              dark={tweaks.v1Dark}
              iconStyle={tweaks.v1IconStyle}
              heroVariant={tweaks.v1HeroVariant}
            />
          </DCArtboard>
          <DCArtboard id="v2" label="02 · Editorial Bold — tipografia gigante, vibe revista, demo no destaque" width={1280} height={3800}>
            <VariationEditorial
              dark={tweaks.v2Dark}
              iconStyle={tweaks.v2IconStyle}
              heroVariant={tweaks.v2HeroVariant}
            />
          </DCArtboard>
          <DCArtboard id="v3" label="03 · Split Diagnostic — antes/depois no hero, agendamento inline" width={1280} height={3400}>
            <VariationDiagnostic
              dark={tweaks.v3Dark}
              iconStyle={tweaks.v3IconStyle}
              heroVariant={tweaks.v3HeroVariant}
            />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks · CZ Tech">
        <TweakSection label="01 · Corporate Authority">
          <TweakToggle label="Modo escuro" value={tweaks.v1Dark} onChange={v => setTweak('v1Dark', v)} />
          <TweakRadio label="Ícones" value={tweaks.v1IconStyle} options={[{value:'line',label:'Line'},{value:'emoji',label:'Emoji'},{value:'none',label:'Nenhum'}]} onChange={v => setTweak('v1IconStyle', v)} />
          <TweakRadio label="Headline do hero" value={tweaks.v1HeroVariant} options={[{value:'a',label:'A · Pare de perder'},{value:'b',label:'B · Nunca dorme'}]} onChange={v => setTweak('v1HeroVariant', v)} />
        </TweakSection>
        <TweakSection label="02 · Editorial Bold">
          <TweakToggle label="Modo escuro" value={tweaks.v2Dark} onChange={v => setTweak('v2Dark', v)} />
          <TweakRadio label="Ícones" value={tweaks.v2IconStyle} options={[{value:'line',label:'Line'},{value:'emoji',label:'Emoji'},{value:'none',label:'Nenhum'}]} onChange={v => setTweak('v2IconStyle', v)} />
          <TweakRadio label="Headline do hero" value={tweaks.v2HeroVariant} options={[{value:'a',label:'A · Vender dormindo'},{value:'b',label:'B · Cada minuto'}]} onChange={v => setTweak('v2HeroVariant', v)} />
        </TweakSection>
        <TweakSection label="03 · Split Diagnostic">
          <TweakToggle label="Modo escuro" value={tweaks.v3Dark} onChange={v => setTweak('v3Dark', v)} />
          <TweakRadio label="Ícones" value={tweaks.v3IconStyle} options={[{value:'line',label:'Line'},{value:'emoji',label:'Emoji'},{value:'none',label:'Nenhum'}]} onChange={v => setTweak('v3IconStyle', v)} />
          <TweakRadio label="Headline do hero" value={tweaks.v3HeroVariant} options={[{value:'a',label:'A · Equipe responde tarde'},{value:'b',label:'B · Concorrente atende'}]} onChange={v => setTweak('v3HeroVariant', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
