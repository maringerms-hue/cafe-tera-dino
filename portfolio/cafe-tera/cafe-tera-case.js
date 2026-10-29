/* Café Tera – Case Study Layout (Maria Springer). Ersetzt auf /projekte/cafe-tera den Standard-Inhalt des Templates. */
(function(){
if(!/\/projekte\/cafe-tera\/?$/.test(location.pathname)&&!window.CTX_PREVIEW)return;
var A='https://maringerms-hue.github.io/cafe-tera-dino/portfolio/cafe-tera/';
var APP='https://maringerms-hue.github.io/cafe-tera-dino/app/';
var GAME='https://maringerms-hue.github.io/cafe-tera-dino/spiel.html';
var WF='https://cdn.prod.website-files.com/6a1829749221212039ae5446/';
var FIGMA_VID=WF+'6ac69445440956d7815a887b_cafe-tera-bestellflow-mobil.mp4',FIGMA_POS=WF+'6ac6944600f9fd3ed55c3116_cafe-tera-bestellflow-mobil-poster.jpg';
var YT='OH82HpD8HPk';
var css=`
.ctx{--lime:#c6f24e;--tx:#fff;--mu:rgba(255,255,255,.68);--mu2:rgba(255,255,255,.5);--ln:rgba(255,255,255,.12);--card:#141412;--mono:"JetBrains Mono",ui-monospace,monospace;color:var(--tx);font-family:Inter,system-ui,sans-serif}
.ctx *{box-sizing:border-box}.ctx img,.ctx video{display:block;max-width:100%;height:auto}.ctx figure,.ctx h1,.ctx h2,.ctx h3,.ctx p,.ctx ol,.ctx ul{margin:0}
.ctx a{color:inherit;text-decoration:none}.ctx :focus-visible{outline:3px solid var(--lime);outline-offset:5px;border-radius:6px}
.ctx-w{max-width:1240px;margin:0 auto;padding:0 56px}
.ctx-k{font:12px/1.55 var(--mono);letter-spacing:.18em;text-transform:uppercase;color:var(--mu2);margin-bottom:22px!important}.ctx-k b{color:var(--lime);font-weight:400;margin-right:14px}
.ctx h1{font-size:clamp(56px,8vw,104px);font-weight:600;letter-spacing:-.045em;line-height:.95}
.ctx h2{font-size:clamp(32px,4vw,50px);font-weight:600;letter-spacing:-.04em;line-height:1.04}
.ctx h3{font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.25}
.ctx-p{font-size:18px;line-height:1.65;color:var(--mu);max-width:620px}.ctx-p+.ctx-p{margin-top:16px}
.ctx-s{padding:110px 0;border-top:1px solid var(--ln);scroll-margin-top:80px}
.ctx-head{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:end;margin-bottom:48px}
.ctx-cap{font-size:13px;line-height:1.5;color:var(--mu2);margin-top:14px}.ctx-cap b{color:var(--lime);font:12px var(--mono);margin-right:10px}
.ctx-img{border-radius:14px;overflow:hidden;border:1px solid var(--ln);background:var(--card)}
.ctx-btn{display:inline-flex;align-items:center;gap:12px;border-radius:100px;background:var(--lime);color:#0f0f0e!important;font-weight:600;font-size:15px;padding:14px 26px;border:1px solid var(--lime);cursor:pointer;font-family:inherit;transition:transform .2s,background .2s}
.ctx-btn:hover{background:#d9f88a;transform:translateY(-2px)}.ctx-btn--g{background:transparent;color:#fff!important;border-color:rgba(255,255,255,.35)}.ctx-btn--g:hover{background:rgba(255,255,255,.08)}
.ctx-acts{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
/* hero */
.ctx-hero{padding:150px 0 90px}.ctx-hero__g{display:grid;grid-template-columns:1.05fr 1fr;gap:64px;align-items:end}
.ctx-sub{font-size:26px;letter-spacing:-.02em;margin-top:20px!important;color:#fff}.ctx-sub span{color:var(--lime)}
.ctx-lead{font-size:21px;line-height:1.5;color:var(--mu)}
.ctx-hero__v{margin-top:60px}
.ctx-meta{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(198,242,78,.4);border-bottom:1px solid var(--ln);margin-top:56px}
.ctx-meta>div{padding:22px 24px 22px 0}.ctx-meta>div+div{padding-left:24px;border-left:1px solid var(--ln)}
.ctx-meta span{font:11px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--mu2)}.ctx-meta p{font-size:15px;line-height:1.5;margin-top:8px!important}
.ctx-nav{display:flex;flex-wrap:wrap;gap:10px 22px;margin-top:28px;font:12px var(--mono);letter-spacing:.06em;color:var(--mu)}.ctx-nav a:hover{color:var(--lime)}.ctx-nav b{color:var(--lime);font-weight:400;margin-right:6px}
/* flow */
.ctx-flow{list-style:none;padding:0;display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid var(--ln);border-bottom:1px solid var(--ln)}
.ctx-flow li{padding:28px 18px 28px 0}.ctx-flow li+li{padding-left:20px;border-left:1px solid var(--ln)}
.ctx-flow i{font:12px var(--mono);font-style:normal;color:var(--lime)}.ctx-flow b{display:block;font-size:18px;margin:10px 0 6px}.ctx-flow span{font-size:13px;color:var(--mu2)}
.ctx-branch{display:flex;justify-content:space-between;gap:20px;align-items:center;margin-top:18px;padding:18px 22px;border:1px solid rgba(198,242,78,.35);background:rgba(198,242,78,.05);border-radius:10px;font-size:15px}.ctx-branch strong{color:var(--lime);font-weight:600}.ctx-branch span{color:var(--mu)}
/* logo */
.ctx-logo{display:grid;grid-template-columns:1.1fr 1fr;gap:28px;align-items:stretch}
.ctx-logo__v{background:#fff4ec;border-radius:16px;overflow:hidden;display:flex;align-items:center;justify-content:center;position:relative;min-height:420px}
.ctx-logo__v video{width:100%;height:100%;object-fit:contain}
.ctx-logo__tag{position:absolute;left:16px;bottom:14px;font:11px var(--mono);letter-spacing:.12em;text-transform:uppercase;color:#1f5a3b;background:rgba(255,255,255,.7);padding:6px 10px;border-radius:100px}
.ctx-replay{position:absolute;right:14px;bottom:12px;border:0;background:#1f5a3b;color:#fff;border-radius:100px;padding:8px 14px;font:600 13px Inter,sans-serif;cursor:pointer}
.ctx-stages{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.ctx-stage{background:#fff4ec;border-radius:12px;overflow:hidden}.ctx-stage img{width:100%;aspect-ratio:1.15;object-fit:contain}
.ctx-stage p{color:#123b27;font-size:13px;padding:0 14px 12px}.ctx-stage p b{font:11px var(--mono);margin-right:8px;color:#d9584a}
.ctx-3col{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-top:44px}.ctx-3col>div{border-top:1px solid var(--ln);padding-top:22px}.ctx-3col h3{margin-bottom:10px}.ctx-3col p{font-size:15px;line-height:1.6;color:var(--mu2)}
/* system */
.ctx-sys{display:grid;gap:22px}
.ctx-mob{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.ctx-mob figure img{border-radius:18px;border:1px solid var(--ln)}
.ctx-mob figcaption{font:11px var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--mu2);margin-top:12px}
/* device / media */
.ctx-demo{display:grid;grid-template-columns:1fr 430px;gap:64px;align-items:center}
.ctx-demo--l{grid-template-columns:430px 1fr}
.ctx-phone{width:100%;max-width:410px;margin:0 auto;aspect-ratio:410/844;border-radius:52px;padding:12px;background:#1b1b19;border:1px solid rgba(255,255,255,.16);box-shadow:0 40px 80px rgba(0,0,0,.45),inset 0 0 0 2px #2a2a27;position:relative}
.ctx-phone__s{position:relative;width:100%;height:100%;border-radius:40px;overflow:hidden;background:#fff4ec}
.ctx-phone__s>img,.ctx-phone__s>video{width:100%;height:100%;object-fit:cover}
.ctx-phone iframe{position:absolute;inset:0;width:100%;height:100%;border:0;background:#fff4ec}
.ctx-load{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:10px;padding:26px;background:linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.72));border:0;cursor:pointer;color:#fff;font-family:inherit}
.ctx-load .ctx-btn{pointer-events:none}.ctx-load small{font:11px var(--mono);letter-spacing:.08em;opacity:.85}
.ctx-live{display:inline-flex;align-items:center;gap:8px;font:11px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--lime)}.ctx-live:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--lime);box-shadow:0 0 0 4px rgba(198,242,78,.18)}
.ctx-list{list-style:none;padding:0;margin-top:26px!important;border-top:1px solid var(--ln)}.ctx-list li{display:flex;gap:16px;padding:13px 0;border-bottom:1px solid var(--ln);font-size:15px;color:var(--mu)}.ctx-list li b{font:12px var(--mono);color:var(--lime);font-weight:400;min-width:24px;padding-top:2px}
.ctx-note{font-size:13px;color:var(--mu2);margin-top:18px!important}.ctx-tl{font-size:14px;color:var(--mu);text-decoration:underline!important;text-underline-offset:5px}
/* 3D */
.ctx-dev{display:grid;grid-template-columns:.8fr 1.2fr;gap:22px;align-items:start}.ctx-dev__r{display:grid;gap:22px}
.ctx-eyes{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:22px}.ctx-eyes img{width:100%;aspect-ratio:4/3;object-fit:cover}
.ctx-tag{display:inline-block;font:11px var(--mono);letter-spacing:.12em;text-transform:uppercase;padding:5px 10px;border-radius:100px;margin-bottom:10px;background:rgba(255,255,255,.08);color:var(--mu)}.ctx-tag--ok{background:rgba(198,242,78,.14);color:var(--lime)}
/* game */
.ctx-sb{background:#f6f1e6;border-radius:14px;overflow:hidden;border:1px solid var(--ln)}
.ctx-screens{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:56px}.ctx-screens figure:nth-child(2){padding-top:50px}.ctx-screens figure:nth-child(3){padding-top:100px}
.ctx-screens img{border-radius:20px;border:1px solid var(--ln)}.ctx-screens figcaption{margin-top:16px;font-size:14px;line-height:1.55;color:var(--mu2)}.ctx-screens figcaption strong{display:block;color:#fff;font-size:16px;margin-bottom:4px}
.ctx-reward{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;margin-top:64px;padding:34px 0;border-top:1px solid rgba(198,242,78,.4);border-bottom:1px solid rgba(198,242,78,.4)}
.ctx-reward h3{font-size:28px;line-height:1.2;max-width:560px}.ctx-reward p{font-size:15px;color:var(--mu);margin-top:12px!important;max-width:580px}
.ctx-big{font-size:112px;line-height:.9;font-weight:600;letter-spacing:-.06em;color:var(--lime);text-align:right}.ctx-big small{display:block;font-size:15px;letter-spacing:0;font-weight:400;color:var(--mu);margin-top:10px}
.ctx-play{margin-top:90px}
/* film */
.ctx-film{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
.ctx-yt{position:relative;border-radius:16px;overflow:hidden;border:1px solid var(--ln);background:#000;aspect-ratio:1200/1100}
.ctx-yt img{width:100%;height:100%;object-fit:cover}.ctx-yt iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.ctx-yt button{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:84px;height:84px;border-radius:50%;border:0;background:var(--lime);color:#0f0f0e;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .2s}.ctx-yt button:hover{transform:translate(-50%,-50%) scale(1.06)}
.ctx-yt span{position:absolute;left:16px;bottom:14px;font:11px var(--mono);letter-spacing:.12em;text-transform:uppercase;background:rgba(0,0,0,.55);padding:6px 10px;border-radius:100px}
.ctx-res{display:grid;grid-template-columns:1fr 1fr;gap:64px}
.ctx-learn{list-style:none;padding:0;margin-top:44px!important;display:grid;grid-template-columns:repeat(3,1fr);gap:32px}.ctx-learn li{border-top:1px solid var(--ln);padding-top:20px;font-size:16px;line-height:1.6;color:var(--mu)}.ctx-learn li b{display:block;font:12px var(--mono);color:var(--lime);font-weight:400;margin-bottom:10px}
@media(max-width:991px){.ctx-w{padding:0 32px}.ctx-head,.ctx-hero__g,.ctx-film,.ctx-res{grid-template-columns:1fr;gap:28px}.ctx-demo,.ctx-demo--l{grid-template-columns:1fr;gap:40px}.ctx-demo--l .ctx-demo__m{order:2}.ctx-logo{grid-template-columns:1fr}.ctx-meta{grid-template-columns:1fr 1fr}.ctx-meta>div:nth-child(3){padding-left:0;border-left:0}.ctx-meta>div:nth-child(n+3){border-top:1px solid var(--ln)}}
@media(max-width:767px){.ctx-w{padding:0 20px}.ctx-hero{padding:110px 0 60px}.ctx-s{padding:72px 0}.ctx-sub{font-size:21px}.ctx-lead{font-size:18px}.ctx-p{font-size:16px}
.ctx-flow{grid-template-columns:1fr}.ctx-flow li,.ctx-flow li+li{padding:14px 0;border-left:0;display:grid;grid-template-columns:34px 1fr;align-items:baseline}.ctx-flow li+li{border-top:1px solid var(--ln)}.ctx-flow b{margin:0;font-size:16px}.ctx-flow span{grid-column:2}
.ctx-branch{display:block}.ctx-branch span{display:block;margin-top:8px}.ctx-3col,.ctx-learn{grid-template-columns:1fr;gap:22px}.ctx-mob{grid-template-columns:1fr 1fr;gap:14px}
.ctx-dev,.ctx-eyes{grid-template-columns:1fr}.ctx-screens{grid-template-columns:1fr 1fr;gap:14px}.ctx-screens figure:nth-child(2){padding-top:0}.ctx-screens figure:nth-child(3){grid-column:1/-1;max-width:70%;justify-self:center;padding-top:10px}
.ctx-reward{grid-template-columns:1fr;gap:20px}.ctx-big{text-align:left;font-size:84px}.ctx-logo__v{min-height:300px}.ctx-phone{max-width:340px}.ctx-sb{border-radius:10px}}
@media(prefers-reduced-motion:reduce){.ctx *{transition:none!important}}
`;
function img(f,alt,w,h,extra){return '<img src="'+A+f+'" alt="'+alt+'" width="'+w+'" height="'+h+'" loading="lazy" decoding="async"'+(extra||'')+'>';}
var I_PLAY='<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>';
var html=`
<section class="ctx-hero"><div class="ctx-w">
 <p class="ctx-k">Branding · Motion · Web-App · 3D</p>
 <div class="ctx-hero__g"><div><h1>Café Tera</h1><p class="ctx-sub">Dein Drink. <span>Dein Moment.</span></p></div>
 <div><p class="ctx-lead">Ein Markenauftritt für ein Café – vom animierten Logo über ein Design System bis zur Web-App mit Bestellflow und einem 3D-Spiel für die Wartezeit.</p>
 <div class="ctx-acts"><a class="ctx-btn" href="#ctx-app">Web-App ausprobieren <span aria-hidden="true">↓</span></a><a class="ctx-btn ctx-btn--g" href="#ctx-game">Zum 3D-Spiel <span aria-hidden="true">↓</span></a></div></div></div>
 <figure class="ctx-hero__v ctx-img">${img('desktop.webp','Café Tera auf dem Desktop: Matcha Himbeere mit Produktkarten der vier Drinks',1621,996,' loading="eager" fetchpriority="high"')}</figure>
 <p class="ctx-cap">Die fertige Produktoberfläche – vier Drinks, eine gemeinsame Bedienlogik.</p>
 <div class="ctx-meta"><div><span>Projekt</span><p>Eigenes Konzeptprojekt · Branding & Web-App</p></div><div><span>Mein Beitrag</span><p>Markenauftritt, Motion-Logo, UX/UI, Frontend, 3D-Charakter, Spielkonzept</p></div><div><span>Tools</span><p>Figma · Blender · HTML/CSS/JS · three.js · Kling AI</p></div><div><span>Jahr</span><p>2026</p></div></div>
 <nav class="ctx-nav" aria-label="Abschnitte der Case Study"><a href="#ctx-flow"><b>01</b>Aufgabe</a><a href="#ctx-logo"><b>02</b>Logo in Bewegung</a><a href="#ctx-system"><b>03</b>Design System</a><a href="#ctx-ui"><b>04</b>Produktwelten</a><a href="#ctx-proto"><b>05</b>Figma-Prototyp</a><a href="#ctx-app"><b>06</b>Web-App</a><a href="#ctx-3d"><b>07</b>3D-Maskottchen</a><a href="#ctx-game"><b>08</b>Spiel</a><a href="#ctx-film"><b>09</b>Brand Film</a><a href="#ctx-result"><b>10</b>Ergebnis</a></nav>
</div></section>

<section class="ctx-s" id="ctx-flow"><div class="ctx-w">
 <p class="ctx-k"><b>01</b>Aufgabe & Nutzungsszenario</p>
 <div class="ctx-head"><h2>Vom ersten Blick<br>bis zur Wartezeit.</h2><div><p class="ctx-p">Café Tera bekommt einen digitalen Auftritt, der sich wie die Marke anfühlt: eine eigene Farbwelt für jeden Drink, eine klare Bestellung am Tisch und ein Moment, der die Wartezeit füllt.</p><p class="ctx-p">Die Herausforderung: eine lebendige Markenwelt gestalten, ohne die Orientierung zwischen Produktauswahl, Warenkorb und Abschluss zu verlieren.</p></div></div>
 <ol class="ctx-flow"><li><i>01</i><b>Entdecken</b><span>Drinks kennenlernen</span></li><li><i>02</i><b>Auswählen</b><span>Produktkarte & Preis</span></li><li><i>03</i><b>Bestellen</b><span>Warenkorb & Zahlung</span></li><li><i>04</i><b>Bestätigung</b><span>Logo-Animation & Danke</span></li><li><i>05</i><b>Warten</b><span>Zeit für eine Spielrunde</span></li></ol>
 <div class="ctx-branch"><strong>Optional nach der Bestellung ↗</strong><span>Spielen → vier farbige Dinos sammeln → 10 % auf den Aktions-Matcha</span></div>
</div></section>

<section class="ctx-s" id="ctx-logo"><div class="ctx-w">
 <p class="ctx-k"><b>02</b>Markenidentität · Logo in Bewegung</p>
 <div class="ctx-head"><h2>Das Logo<br>wird lebendig.</h2><div><p class="ctx-p">Der Dino aus dem Café-Logo ist das Herz der Marke. Für den digitalen Auftritt habe ich ihn als Motion-Logo animiert: Aus der Linienzeichnung wird Farbe, der Dino trinkt seinen Matcha – und ein Herz erscheint.</p><p class="ctx-p">Die Animation läuft direkt nach der Zahlung. Statt eines neutralen Ladebalkens bestätigt die Marke selbst: Deine Bestellung ist angekommen.</p></div></div>
 <div class="ctx-logo">
  <div class="ctx-logo__v"><video muted playsinline preload="metadata" poster="${A}logo-animation-poster.webp" width="1544" height="1340" aria-label="Animiertes Café-Tera-Logo: der Dino wird farbig, trinkt Matcha und ein rotes Herz erscheint"><source src="${A}logo-animation.mp4" type="video/mp4"></video><span class="ctx-logo__tag">Motion-Logo · 5 s</span><button type="button" class="ctx-replay">↻ Nochmal abspielen</button></div>
  <div class="ctx-stages">
   <figure class="ctx-stage">${img('logo-01-linie.webp','Logo-Zustand 1: Linienzeichnung des Dinos',900,781)}<p><b>01</b>Linie – Ruhezustand</p></figure>
   <figure class="ctx-stage">${img('logo-02-erwacht.webp','Logo-Zustand 2: Blätter färben sich, der Dino trinkt',900,781)}<p><b>02</b>Erwachen – erste Farbe</p></figure>
   <figure class="ctx-stage">${img('logo-03-farbe.webp','Logo-Zustand 3: der Dino ist vollständig grün',900,781)}<p><b>03</b>Vollfarbe – Matcha-Grün</p></figure>
   <figure class="ctx-stage">${img('logo-04-herz.webp','Logo-Zustand 4: ein rotes Herz über dem Becher',900,781)}<p><b>04</b>Herz – Bestellung bestätigt</p></figure>
  </div>
 </div>
 <div class="ctx-3col"><div><h3>Feedback mit Charakter</h3><p>Die Animation ersetzt den Ladezustand und gibt eine klare, freundliche Rückmeldung nach der Zahlung.</p></div><div><h3>Aus Linie wird Farbe</h3><p>Der Farbverlauf erzählt in wenigen Sekunden, wofür das Café steht: frische Drinks und kleine, süße Momente.</p></div><div><h3>Eine Figur, viele Einsätze</h3><p>Derselbe Dino erscheint im Logo, in der App, als 3D-Maskottchen im Spiel und im Brand Film.</p></div></div>
</div></section>

<section class="ctx-s" id="ctx-system"><div class="ctx-w">
 <p class="ctx-k"><b>03</b>Farbe, Typografie & Komponenten</p>
 <div class="ctx-head"><h2>Ein System.<br>Vier Getränkewelten.</h2><p class="ctx-p">Creme, Grün und Koralle bilden die Basis. Jede Sorte bekommt ihre eigene Farbe – Struktur und Bedienung bleiben gleich. Abril Fatface setzt die großen Produktnamen, DM Sans übernimmt die funktionalen Texte.</p></div>
 <div class="ctx-sys"><figure class="ctx-img">${img('palette.webp','Design System: Basisfarben Creme, Grün, Koralle und die vier Getränkefarben',1800,1106)}</figure>
 <figure class="ctx-img">${img('components.webp','Typografie und Komponenten: Buttons, Chips, Mengenregler und Eingabefeld',1800,738)}</figure></div>
 <p class="ctx-cap">Design System in Figma – Farben, Schriften und wiederverwendbare Komponenten für den gesamten Bestellflow.</p>
</div></section>

<section class="ctx-s" id="ctx-ui"><div class="ctx-w">
 <p class="ctx-k"><b>04</b>Produktwelten · Interface</p>
 <div class="ctx-head"><h2>Die Sorte wechselt.<br>Die Logik bleibt.</h2><p class="ctx-p">Ein Tipp auf eine Sorte färbt Headline, Hintergrund, Buttons und die aktive Karte um. Die Seite bleibt ruhig und wiedererkennbar, während jedes Produkt seinen eigenen Auftritt bekommt.</p></div>
 <div class="ctx-mob">
  <figure>${img('mobile-himbeere.webp','Mobile Produktauswahl: Matcha Himbeere',364,787)}<figcaption>Himbeere</figcaption></figure>
  <figure>${img('mobile-mango.webp','Mobile Produktauswahl: Matcha Mango',364,787)}<figcaption>Mango</figcaption></figure>
  <figure>${img('mobile-blaubeere.webp','Mobile Produktauswahl: Matcha Blaubeere',364,787)}<figcaption>Blaubeere</figcaption></figure>
  <figure>${img('mobile-cappuccino.webp','Mobile Produktauswahl: Iced Cappuccino',364,787)}<figcaption>Cappuccino</figcaption></figure>
 </div>
 <div class="ctx-3col"><div><h3>01 · Karten als Einstieg</h3><p>Bild, Name und Preis machen das Angebot vergleichbar. Die aktive Karte zeigt das gewählte Getränk.</p></div><div><h3>02 · Farbe mit Funktion</h3><p>Himbeere, Mango, Blaubeere und Cappuccino haben eigene Farbwelten. Anordnung und Bedienung bleiben wiedererkennbar.</p></div><div><h3>03 · Mobil neu gewichtet</h3><p>Kompakte Auswahlkarten und eine feste Leiste mit Preis und Warenkorb bündeln die nächste Handlung.</p></div></div>
</div></section>

<section class="ctx-s" id="ctx-proto"><div class="ctx-w">
 <p class="ctx-k"><b>05</b>Entwurfsphase · Figma</p>
 <div class="ctx-demo ctx-demo--l"><div class="ctx-demo__m"><div class="ctx-phone"><div class="ctx-phone__s"><video controls muted playsinline preload="none" poster="${FIGMA_POS}" aria-label="Aufnahme des Figma-Prototyps: mobiler Bestellflow, ohne Ton"><source src="${FIGMA_VID}" type="video/mp4"></video></div></div></div>
 <div><h2>Den Ablauf gestalten.<br>Die Interaktion erproben.</h2><p class="ctx-p" style="margin-top:24px">Der klickbare Figma-Prototyp war die Grundlage für den Bestellflow. Verbundene Screens und Smart Animate machten Übergänge, Auswahlzustände und Rückmeldungen erlebbar, bevor eine Zeile Code geschrieben war.</p>
 <ul class="ctx-list"><li><b>01</b>Drink wählen und Farbwelt wechseln</li><li><b>02</b>Warenkorb, Menge und Abholung</li><li><b>03</b>Zahlung und Bestätigung</li></ul>
 <p class="ctx-note">Aufnahme des Figma-Prototyps · mobiler Bestellflow, ohne Ton</p></div></div>
</div></section>

<section class="ctx-s" id="ctx-app"><div class="ctx-w">
 <p class="ctx-k"><b>06</b>Umsetzung · HTML / CSS / JavaScript</p>
 <div class="ctx-demo"><div><span class="ctx-live">Live · zum Ausprobieren</span><h2 style="margin-top:18px">Aus dem Entwurf<br>wird eine Web-App.</h2><p class="ctx-p" style="margin-top:24px">Die Umsetzung im Browser verbindet das Interface mit echter Interaktionslogik. Produktauswahl, Warenkorb, Zahlung, Logo-Animation und das anschließende Spiel bilden einen zusammenhängenden Ablauf.</p>
 <ul class="ctx-list"><li><b>01</b>Sorte wählen – die ganze App wechselt die Farbwelt</li><li><b>02</b>In den Warenkorb, bezahlen</li><li><b>03</b>Motion-Logo mit Herz bestätigt die Bestellung</li><li><b>04</b>Danke-Seite lädt zum Spiel mit Dino ein</li></ul>
 <div class="ctx-acts"><a class="ctx-btn ctx-btn--g" href="${APP}" target="_blank" rel="noopener">In neuem Tab öffnen <span aria-hidden="true">↗</span></a></div>
 <p class="ctx-note">Demo: Es wird nichts bestellt und nichts bezahlt. Optimiert für Smartphone-Größe.</p></div>
 <div class="ctx-demo__m"><div class="ctx-phone"><div class="ctx-phone__s" data-embed="${APP}" data-title="Café Tera Web-App (Demo)">${img('mobile-himbeere.webp','Vorschau der Café-Tera-Web-App',364,787)}<button type="button" class="ctx-load"><span class="ctx-btn">Web-App starten ${I_PLAY.replace('28','18').replace('28','18')}</span><small>läuft direkt hier auf der Seite</small></button></div></div></div></div>
</div></section>

<section class="ctx-s" id="ctx-3d"><div class="ctx-w">
 <p class="ctx-k"><b>07</b>Maskottchen · 3D in Blender</p>
 <div class="ctx-head"><h2>Eine Markenfigur.<br>Eine neue Dimension.</h2><div><p class="ctx-p">Für das Spiel habe ich den Dino als 3D-Charakter weiterentwickelt: Modell aus eigenen Referenzansichten, Skelett und Gewichte, Mimik mit Kiefer und Lidern – vorbereitet für Animation im Browser.</p></div></div>
 <div class="ctx-dev"><figure><div class="ctx-img">${img('character-reference.webp','Charakterreferenz: der grüne Dino mit ausgebreiteten Armen',800,1000)}</div><figcaption class="ctx-cap"><b>01</b>Charakterentwurf · Proportionen und Ausdruck</figcaption></figure>
 <div class="ctx-dev__r"><figure><div class="ctx-img">${img('blender-side.webp','Blender: Seitenansicht des Dinos mit Skelett',1800,941)}</div><figcaption class="ctx-cap"><b>02</b>Blender · Modell und Rig in der Seitenansicht</figcaption></figure>
 <figure><div class="ctx-img">${img('blender-front.webp','Blender: Frontansicht des Dinos mit Materialien und Rig',1800,1265)}</div><figcaption class="ctx-cap"><b>03</b>Blender · Materialien und Rig in der Frontansicht</figcaption></figure></div></div>
 <div class="ctx-head" style="margin:90px 0 32px"><h3 style="font-size:28px">Detailarbeit: neue Augen</h3><p class="ctx-p">Die Augen aus dem generierten Modell waren in die Textur eingebacken und hatten unsaubere Ränder. Neu gebaut: eigene Augäpfel, sauber geschnittene Augenhöhlen, glatte Lider und Wimpern. Jetzt kann der Blick im Spiel dem Finger oder der Maus folgen.</p></div>
 <div class="ctx-eyes"><figure><span class="ctx-tag">Vorher</span><div class="ctx-img">${img('eye-before.webp','Vorher: Auge mit ausgefranstem, eingebackenem Rand',1116,837)}</div></figure><figure><span class="ctx-tag ctx-tag--ok">Nachher</span><div class="ctx-img">${img('eye-after.webp','Nachher: neue Augen mit Glanzpunkt, Lidern und Wimpern, Kiefer mit Zunge',1116,837)}</div></figure></div>
</div></section>

<section class="ctx-s" id="ctx-game"><div class="ctx-w">
 <p class="ctx-k"><b>08</b>Spielentwicklung · Nach der Bestellung</p>
 <div class="ctx-head"><h2>Bestellt.<br>Jetzt wird gespielt.</h2><p class="ctx-p">Während der Drink zubereitet wird, können Gäste freiwillig eine Runde spielen: Der Dino versteckt eine Frucht unter einem Becher, mischt – und der Gast tippt auf den richtigen Becher. Das Spiel verbindet die Wartezeit mit einer konkreten Café-Aktion.</p></div>
 <figure class="ctx-sb">${img('game-storyboard.webp','Handgezeichnetes Storyboard des Dino-Becherspiels in acht Bildern',3600,1860)}</figure>
 <p class="ctx-cap"><b>Storyboard</b>Vom Danke-Screen bis zum Saison-Rabatt – der Ablauf als Skizze, bevor das Spiel gebaut wurde.</p>
 <div class="ctx-screens">
  <figure>${img('game-start.webp','Spielstart mit drei Bechern und Sammlung 0 von 4',700,1256)}<figcaption><strong>01 · Beobachten & wählen</strong>Frucht merken, Becher verfolgen und den richtigen Becher antippen.</figcaption></figure>
  <figure>${img('game-win.webp','Gefunden: der Dino ist pink, Sammlung 1 von 4',700,1237)}<figcaption><strong>02 · Dinos sammeln</strong>Die gefundene Frucht färbt den Dino ein, der Fortschritt bleibt sichtbar.</figcaption></figure>
  <figure>${img('game-drink.webp','Produktkarte Matcha Himbeere nach dem Fund',700,1118)}<figcaption><strong>03 · Zurück zum Menü</strong>Zu jedem Dino passt ein Drink – mit direktem Weg zur Bestellung.</figcaption></figure>
 </div>
 <div class="ctx-reward"><div><p class="ctx-k" style="margin-bottom:14px!important">Vier Dinos · ein Sammelziel</p><h3>Alle vier Farben gesammelt?<br>Dann wartet der Matcha-Rabatt.</h3><p>Wer alle vier Dinos findet, bekommt 10 % auf den Aktions-Matcha – nur in Aktionszeiten, zu Halloween auf den Kürbis-Matcha. So bleibt die Belohnung besonders und kostet das Café keine dauerhafte Marge.</p></div><div class="ctx-big">10 %<small>auf den Aktions-Matcha</small></div></div>
 <div class="ctx-3col"><div><h3>Für die Gäste</h3><p>Eine freiwillige Beschäftigung in der Wartezeit – mit sichtbarem Fortschritt und klarem Ziel.</p></div><div><h3>Für das Café</h3><p>Jeder Fund führt zurück zu einem Drink aus dem Menü; die Saison-Aktion macht neugierig auf den Matcha.</p></div><div><h3>Im richtigen Moment</h3><p>Das Spiel erscheint erst nach der Bestellung. Die Produktauswahl bleibt im Mittelpunkt der App.</p></div></div>
 <div class="ctx-play ctx-demo"><div><span class="ctx-live">Live · zum Ausprobieren</span><h2 style="margin-top:18px">Eine Runde<br>mit Dino.</h2><p class="ctx-p" style="margin-top:24px">Das echte Spiel – mit three.js im Browser umgesetzt. Im Café öffnet es sich nach der Bestellung; hier lässt es sich direkt spielen.</p>
 <div class="ctx-acts"><a class="ctx-btn ctx-btn--g" href="${GAME}" target="_blank" rel="noopener">Spiel im neuen Tab <span aria-hidden="true">↗</span></a></div></div>
 <div class="ctx-demo__m"><div class="ctx-phone"><div class="ctx-phone__s" data-embed="${GAME}" data-title="Dino-Becherspiel (Demo)">${img('game-start.webp','Vorschau des Dino-Becherspiels',700,1256)}<button type="button" class="ctx-load"><span class="ctx-btn">Spiel starten ${I_PLAY.replace('28','18').replace('28','18')}</span><small>3D-Spiel · lädt ca. 2 MB</small></button></div></div></div></div>
</div></section>

<section class="ctx-s" id="ctx-film"><div class="ctx-w"><div class="ctx-film">
 <div><p class="ctx-k"><b>09</b>Brand Story · Kling AI</p><h2>Die Marke<br>in Bewegung.</h2><p class="ctx-p" style="margin-top:24px">Zum Abschluss wird aus der Figur eine kurze Markengeschichte: Der Dino trinkt Himbeer-Matcha und wird pink, mit Matcha wieder grün. Der mit Kling AI erstellte Clip greift Drinks, Farbwelt und Charakter von Café Tera auf.</p><p class="ctx-note">KI-gestützter Werbeclip · Kling AI · 15 Sekunden, mit Ton</p></div>
 <div class="ctx-yt" data-yt="${YT}">${img('brand-film.webp','Standbild aus dem Brand Film: pinker Dino mit Matcha im Café',1200,1100)}<button type="button" aria-label="Brand Film abspielen (YouTube)">${I_PLAY}</button><span>YouTube · Video</span></div>
</div></div></section>

<section class="ctx-s" id="ctx-result"><div class="ctx-w">
 <p class="ctx-k"><b>10</b>Ergebnis & Reflexion</p>
 <div class="ctx-res"><h2>Eine Marke,<br>die man erleben kann.</h2><div><p class="ctx-p">Café Tera verbindet Logo, Farbwelt, Bestellung und Spiel zu einem durchgängigen Markenerlebnis. Der Figma-Prototyp bildet den Entwurf ab, die Browser-Umsetzung macht ihn nutzbar – und der Dino trägt die Marke durch jeden Schritt.</p><p class="ctx-p">Ob das Spiel die wahrgenommene Wartezeit verbessert und die Aktion zusätzliche Käufe auslöst, ist eine Frage für Nutzertests und Messungen im echten Café.</p></div></div>
 <ul class="ctx-learn"><li><b>01</b>Ein Maskottchen wirkt erst, wenn es eine Aufgabe im Ablauf hat – hier: Bestellung bestätigen und Wartezeit füllen.</li><li><b>02</b>Ein konsistentes System kann vier sehr unterschiedliche Produktwelten verbinden, ohne die Bedienung zu verändern.</li><li><b>03</b>Kleine Details entscheiden über Sympathie: Blickrichtung, Pupillengröße und Glanzpunkt beim 3D-Dino.</li></ul>
</div></section>`;
function build(){var cs=document.querySelector('main.cs')||document.querySelector('.cs');if(!cs||cs.querySelector('.ctx'))return;
 var st=document.createElement('style');st.textContent=css+'.cs-ctx>*:not(.ctx):not(.cs-next-wrap){display:none!important}';document.head.appendChild(st);
 cs.classList.add('cs-ctx');var root=document.createElement('div');root.className='ctx';root.innerHTML=html;
 var next=cs.querySelector('.cs-next-wrap');cs.insertBefore(root,next||null);
 // logo video: play when visible
 var v=root.querySelector('.ctx-logo__v video'),rb=root.querySelector('.ctx-replay'),rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
 function play(){v.currentTime=0;var p=v.play();if(p&&p.catch)p.catch(function(){});}
 rb.addEventListener('click',play);
 if(!rm&&'IntersectionObserver'in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){play();io.disconnect();}});},{threshold:.5});io.observe(v);}
 // embeds
 [].forEach.call(root.querySelectorAll('[data-embed]'),function(box){var b=box.querySelector('.ctx-load');b.addEventListener('click',function(){
  if(matchMedia('(max-width: 767px)').matches){window.open(box.getAttribute('data-embed'),'_blank','noopener');return;}
  var f=document.createElement('iframe');f.src=box.getAttribute('data-embed');f.title=box.getAttribute('data-title');f.setAttribute('allow','fullscreen; autoplay');f.loading='lazy';
  box.innerHTML='';box.appendChild(f);f.focus();});});
 // youtube
 var yt=root.querySelector('.ctx-yt');yt.querySelector('button').addEventListener('click',function(){var f=document.createElement('iframe');
  f.src='https://www.youtube-nocookie.com/embed/'+yt.getAttribute('data-yt')+'?autoplay=1&rel=0&playsinline=1';f.title='Café Tera Brand Film (YouTube)';f.setAttribute('allow','autoplay; encrypted-media; picture-in-picture; fullscreen');f.setAttribute('allowfullscreen','');yt.appendChild(f);});
 // smooth anchors
 [].forEach.call(root.querySelectorAll('a[href^="#ctx-"]'),function(a){a.addEventListener('click',function(e){var t=document.getElementById(a.getAttribute('href').slice(1));if(!t)return;e.preventDefault();t.scrollIntoView({behavior:rm?'auto':'smooth',block:'start'});});});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
})();
