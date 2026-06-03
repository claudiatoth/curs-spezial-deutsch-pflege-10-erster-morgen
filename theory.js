// ============================================
// THEORY.JS — Pflege 10: Erster Morgen
// Dimineața după noaptea cu panică · trezire · dureri · mic dejun · medicamente · Perfekt
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

const theoryHTML = `
<div class="theory-intro">
  <h4>🌅 Prima dimineață — după noaptea cu panică</h4>
  <p>Ai trecut prin <strong>noaptea de panică</strong> cu Frau Müller (L9 — „Mein Herz schlägt schnell"). Ai stat lângă ea până a adormit. Acum e ora 7:00, lumina se face prin perdele. Cum o trezești <strong>fără să o sperii din nou</strong>? Cum afli dacă a dormit? Ce o doare azi-dimineață? Ce mănâncă la mic dejun? Ce pastile la 8:00?</p>
  <p>Lecția aceasta îți dă <strong>RUTINA dimineții</strong> — cea mai delicată parte a zilei în Pflege. Plus o gramatică ușor avansată: <strong>Perfekt cu sein vs haben</strong>. „Sie ist gut aufgewacht" vs „Sie hat gut geschlafen" — diferența contează.</p>
</div>

<div class="theory-pillars">
  <h4>🏛️ Cei 6 piloni ai primei dimineți</h4>
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-icon">🌅</div>
      <div class="pillar-title">Wecken</div>
      <div class="pillar-text">Trezirea blândă · lumină mică · voce caldă · NU bruscă.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">💤</div>
      <div class="pillar-title">Schlaf</div>
      <div class="pillar-text">Cum ai dormit? · răspunsuri gut/schlecht/unruhig + ce semnale dau.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🩹</div>
      <div class="pillar-title">Schmerzen</div>
      <div class="pillar-text">Dureri matinale (Rücken, Gelenk, Kopf) · scala 1-10 (din Agnesa).</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🍞</div>
      <div class="pillar-title">Frühstück</div>
      <div class="pillar-text">Brötchen, Marmelade, Käse, Tee · preferințele Frauei Müller.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">💊</div>
      <div class="pillar-title">Tabletten</div>
      <div class="pillar-text">Pastilele de la 8:00 · cu/fără mâncare · cu/fără apă · CHECK!</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">📐</div>
      <div class="pillar-title">Perfekt</div>
      <div class="pillar-text">sein (ist aufgewacht) vs haben (hat geschlafen) + Partizip II.</div>
    </div>
  </div>
</div>

<!-- ============================================
     SUB 1 — Wecken (trezirea blândă)
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(0)">
    <h4>1️⃣ Wecken — trezirea blândă</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-0">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-1" onclick="toggleAudio(event, 'audio-1')">▶</button>
        <audio id="audio-1" preload="none"><source src="audio/01-wecken.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Trezirea unei persoane de 78 de ani nu e ca trezirea unui copil. <strong>NU deschizi brusc draperia.</strong> NU intri zgomotos. NU spui „Frau Müller, treziți-vă!". <strong>Mergi încet, deschizi puțin perdeaua (lumină indirectă), te apropii încet de pat, vorbești în șoaptă.</strong></p>

    <h5 style="color:#065f46; margin-top:18px;">🌅 Pașii trezirii blânde (în ordine)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Pas</th><th>🇩🇪 Frază</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1. Te apropii</strong></td><td><span class="pflege-fraza">Guten Morgen, Frau Müller.</span></td><td>Bună dimineața, Doamna Müller.</td></tr>
          <tr><td><strong>2. Verifici dacă e treaz</strong></td><td><span class="pflege-fraza">Sind Sie wach?</span></td><td>Sunteți trează?</td></tr>
          <tr><td><strong>3. Anunți ora</strong></td><td><span class="pflege-fraza">Es ist sieben Uhr.</span></td><td>E ora șapte.</td></tr>
          <tr><td><strong>4. Întrebare deschisă</strong></td><td><span class="pflege-fraza">Wie haben Sie geschlafen?</span></td><td>Cum ați dormit?</td></tr>
          <tr><td><strong>5. Ofertă</strong></td><td><span class="pflege-fraza">Möchten Sie aufstehen?</span></td><td>Doriți să vă ridicați?</td></tr>
          <tr><td><strong>6. Promisiune</strong></td><td><span class="pflege-fraza">Ich helfe Ihnen.</span></td><td>Vă ajut.</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💡 Verbe trezire — diferența IMPORTANTĂ</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Verb</th><th>🇷🇴 Sens</th><th>Folosit pentru</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">aufwachen</span></td><td>a se trezi (din somn)</td><td>Procesul fiziologic · ochii se deschid · Sie ist aufgewacht.</td></tr>
          <tr><td><span class="pflege-fraza">aufstehen</span></td><td>a se ridica din pat</td><td>Acțiunea fizică · NU e același cu aufwachen!</td></tr>
          <tr><td><span class="pflege-fraza">wecken</span></td><td>a trezi pe ALTCINEVA</td><td>Andreea weckt Frau Müller (Andreea o trezește).</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>⚠️ Capcana aufwachen vs aufstehen</h5>
      <p>📌 <strong>aufwachen</strong> = a deschide ochii, fiziologic. Sie ist aufgewacht (cu SEIN, mișcare interioară).<br>
      📌 <strong>aufstehen</strong> = a ridica corpul din pat. Sie steht auf (cu SEIN, mișcare exterioară).</p>
      <p>Frau Müller poate fi <strong>aufgewacht dar NICH aufgestanden</strong> — adică s-a trezit dar e încă în pat. Asta e normal — îi dai 10 minute să se trezească complet.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 2 — Wie haben Sie geschlafen?
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(1)">
    <h4>2️⃣ Wie haben Sie geschlafen? — Interpretarea răspunsurilor</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-1">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-2" onclick="toggleAudio(event, 'audio-2')">▶</button>
        <audio id="audio-2" preload="none"><source src="audio/02-schlaf.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">„Wie haben Sie geschlafen?" e <strong>prima întrebare a zilei</strong>. Răspunsul îți spune CUM va decurge ziua. Dacă Frau Müller a dormit prost, vei avea o zi mai grea — răbdare, mai puține activități, repaus. <strong>NOTEAZĂ în caietul Pflege</strong> calitatea somnului zilnic — Hausarzt-ul îți va întreba.</p>

    <h5 style="color:#065f46; margin-top:18px;">💤 Răspunsurile posibile și ce înseamnă</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Răspuns</th><th>🇷🇴 Traducere</th><th>Ce înseamnă pentru ziua ta</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Ich habe gut geschlafen.</span></td><td>Am dormit bine.</td><td>Zi obișnuită · plan normal</td></tr>
          <tr><td><span class="pflege-fraza">Ich habe schlecht geschlafen.</span></td><td>Am dormit prost.</td><td>Mai mult repaus · plimbare scurtă</td></tr>
          <tr><td><span class="pflege-fraza">Ich habe nicht geschlafen.</span></td><td>Nu am dormit.</td><td>ROȘU · poate cer Hausarzt</td></tr>
          <tr><td><span class="pflege-fraza">Ich konnte nicht einschlafen.</span></td><td>Nu am putut adormi.</td><td>Anxietate · investighezi seara cu fraze L9</td></tr>
          <tr><td><span class="pflege-fraza">Ich bin oft aufgewacht.</span></td><td>M-am trezit des.</td><td>Somn fragmentat · oboseală cumulată</td></tr>
          <tr><td><span class="pflege-fraza">Ich habe schöne Träume gehabt.</span></td><td>Am avut vise frumoase.</td><td>Bine · pozitiv · poți întreba despre vis</td></tr>
          <tr><td><span class="pflege-fraza">Ich habe Albträume gehabt.</span></td><td>Am avut coșmaruri.</td><td>Atenție · empatie · fraze L9 dimineață</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💬 Răspunsul tău empatic</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Situație</th><th>🇩🇪 Răspuns</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Răspuns la „gut"</strong></td><td><span class="pflege-fraza">Das freut mich!</span></td><td>Mă bucur!</td></tr>
          <tr><td><strong>Răspuns la „schlecht"</strong></td><td><span class="pflege-fraza">Das tut mir leid. Wie kann ich helfen?</span></td><td>Îmi pare rău. Cum vă pot ajuta?</td></tr>
          <tr><td><strong>Răspuns la „Albträume"</strong></td><td><span class="pflege-fraza">Möchten Sie darüber sprechen?</span></td><td>Doriți să vorbim despre asta?</td></tr>
          <tr><td><strong>Răspuns la „nicht"</strong></td><td><span class="pflege-fraza">Heute machen wir es ruhig.</span></td><td>Azi facem totul liniștit.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="final-note-box">
      <h5>💖 Sfat practic — caietul de somn</h5>
      <p>Notează ZILNIC în caietul Pflege: <em>„03/06/2026: schlecht geschlafen, oft aufgewacht, Rückenschmerzen morgens"</em>. Când vine Hausarzt-ul (sau dacă suni la el), citești <strong>pattern-ul</strong> ultimei săptămâni. Asta e diferența între o Pflegerin NOUĂ și o Pflegerin profesionistă.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 3 — Schmerzen am Morgen
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(2)">
    <h4>3️⃣ Schmerzen am Morgen — durerile matinale + scala 1-10</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-2">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-3" onclick="toggleAudio(event, 'audio-3')">▶</button>
        <audio id="audio-3" preload="none"><source src="audio/03-schmerzen.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Durerile de dimineață sunt <strong>CELE MAI COMUNE</strong> la persoanele de 70+ ani. Spatele, genunchii, șoldurile, capul — toate dor după o noapte de imobilitate. Întrebi sistematic: <strong>„Haben Sie Schmerzen?"</strong>. Apoi cu scala 1-10 (din materialul Agnesei) evaluezi gravitatea.</p>

    <h5 style="color:#065f46; margin-top:18px;">🩹 Durerile comune de dimineață</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Locul durerii</th><th>🇩🇪 Cum spune Frau Müller</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>🦴 Spatele</strong></td><td><span class="pflege-fraza">Mein Rücken tut weh.</span></td><td>Mă doare spatele.</td></tr>
          <tr><td><strong>🦵 Genunchii</strong></td><td><span class="pflege-fraza">Meine Knie tun weh.</span></td><td>Mă dor genunchii.</td></tr>
          <tr><td><strong>🤕 Capul</strong></td><td><span class="pflege-fraza">Ich habe Kopfschmerzen.</span></td><td>Am dureri de cap.</td></tr>
          <tr><td><strong>👋 Mâinile</strong></td><td><span class="pflege-fraza">Meine Hände tun weh.</span></td><td>Mă dor mâinile.</td></tr>
          <tr><td><strong>🦴 Șoldurile</strong></td><td><span class="pflege-fraza">Meine Hüfte tut weh.</span></td><td>Mă doare șoldul.</td></tr>
          <tr><td><strong>🦶 Picioarele</strong></td><td><span class="pflege-fraza">Meine Beine sind schwer.</span></td><td>Picioarele sunt grele.</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📊 Scala 1-10 — cum afli intensitatea (din Agnesa)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Întrebarea ta</th><th>🇩🇪 Frază</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Întrebare principală</strong></td><td><span class="pflege-fraza">Wie stark sind die Schmerzen auf einer Skala von 1 bis 10?</span></td><td>Cât de puternice sunt durerile pe o scală de la 1 la 10?</td></tr>
          <tr><td><strong>Localizare</strong></td><td><span class="pflege-fraza">Wo tut es weh?</span></td><td>Unde vă doare?</td></tr>
          <tr><td><strong>Descriere</strong></td><td><span class="pflege-fraza">Können Sie mir die Schmerzen beschreiben?</span></td><td>Puteți să-mi descrieți durerile?</td></tr>
          <tr><td><strong>Durată</strong></td><td><span class="pflege-fraza">Seit wann haben Sie die Schmerzen?</span></td><td>De când aveți durerile?</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🚨 Interpretarea scalei</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Scor</th><th>Sens</th><th>Acțiune ta</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1-3</strong></td><td>Disconfort ușor</td><td>Caldură · plimbare ușoară · respirație</td></tr>
          <tr><td><strong>4-6</strong></td><td>Durere moderată</td><td>Pastilă (dacă e prescrisă) · repaus · monitorizare</td></tr>
          <tr><td><strong>7-9</strong></td><td>Durere severă</td><td>🚨 SUNI Hausarzt-ul · sau Sprechstundenhilfe pentru programare urgentă</td></tr>
          <tr><td><strong>10</strong></td><td>Durere extremă</td><td>🆘 SUNI 112 IMEDIAT</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 weh tun — construcția cu Dativ</h5>
      <p>📌 <strong>tut weh</strong> = doare (Persoana 3 singular)<br>
      📌 <strong>tun weh</strong> = dor (Persoana 3 plural)<br>
      📌 Structura: <em>„Mein Rücken TUT mir weh"</em> sau scurt <em>„Mein Rücken tut weh"</em>.</p>
      <p>Forma cu DATIV (mir / Ihnen) e mai politicoasă: <em>„Tut Ihnen der Rücken weh?"</em> (Vă doare spatele?).</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 4 — Frühstück
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(3)">
    <h4>4️⃣ Frühstück — micul dejun german</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-3">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-4" onclick="toggleAudio(event, 'audio-4')">▶</button>
        <audio id="audio-4" preload="none"><source src="audio/04-fruehstueck.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Micul dejun german e <strong>SACRU</strong>. Brötchen proaspete (chifle), Marmelade (gem), Butter (unt), Käse (brânză), Wurst (mezel) — pus pe masă cu cafea/ceai. Frau Müller e <strong>STRICTĂ</strong> cu mic dejunul ei — dacă nu-i găsești cana ei preferată, dacă brânza nu e Gouda Mild, e o tragedie mică.</p>

    <h5 style="color:#065f46; margin-top:18px;">🍞 Mic dejun standard — vocabular</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Singular · Plural</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">das Brötchen · die Brötchen</span></td><td>chifla (de mic dejun) · plural fără schimbare</td></tr>
          <tr><td><span class="pflege-fraza">das Brot · die Brote</span></td><td>pâinea</td></tr>
          <tr><td><span class="pflege-fraza">die Butter</span></td><td>untul · NUMAI singular</td></tr>
          <tr><td><span class="pflege-fraza">die Marmelade · die Marmeladen</span></td><td>gemul</td></tr>
          <tr><td><span class="pflege-fraza">der Honig</span></td><td>mierea · NUMAI singular</td></tr>
          <tr><td><span class="pflege-fraza">der Käse · die Käse</span></td><td>brânza · feminin în RO, masculin în DE!</td></tr>
          <tr><td><span class="pflege-fraza">die Wurst · die Würste</span></td><td>mezelul · plural cu Umlaut</td></tr>
          <tr><td><span class="pflege-fraza">das Ei · die Eier</span></td><td>oul · plural cu -er</td></tr>
          <tr><td><span class="pflege-fraza">der Kaffee</span></td><td>cafeaua · NUMAI singular</td></tr>
          <tr><td><span class="pflege-fraza">der Tee</span></td><td>ceaiul · NUMAI singular</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💬 Fraze pentru servit (din Agnesa)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Frază</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Was möchten Sie zum Frühstück?</span></td><td>Ce doriți la mic dejun?</td></tr>
          <tr><td><span class="pflege-fraza">Möchten Sie Tee oder Kaffee?</span></td><td>Doriți ceai sau cafea?</td></tr>
          <tr><td><span class="pflege-fraza">Möchten Sie noch ein Brötchen?</span></td><td>Mai doriți o chiflă?</td></tr>
          <tr><td><span class="pflege-fraza">Schmeckt es Ihnen?</span></td><td>Vă place? (Este gustos?)</td></tr>
          <tr><td><span class="pflege-fraza">Gibt es etwas, das Sie gerne essen?</span></td><td>Există ceva ce mâncați cu plăcere?</td></tr>
          <tr><td><span class="pflege-fraza">Müssen wir auf etwas Besonderes achten?</span></td><td>Trebuie să avem grijă la ceva special?</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 „möchten" — politicos pentru cereri</h5>
      <p>Verbul modal <strong>möchten</strong> = aș dori / doriți. E mai politicos decât „wollen" (vreți). În Pflege folosești ÎNTOTDEAUNA möchten cu pacienta.</p>
      <p>📌 <em>„Möchten Sie einen Kaffee?"</em> = Doriți o cafea? (politicos)<br>
      📌 <em>„Wollen Sie einen Kaffee?"</em> = Vreți o cafea? (mai direct, mai puțin politicos)</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 5 — Medicamentele de dimineață
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(4)">
    <h4>5️⃣ Tabletten am Morgen — medicamentele de dimineață</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-4">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-5" onclick="toggleAudio(event, 'audio-5')">▶</button>
        <audio id="audio-5" preload="none"><source src="audio/05-medicamente.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">La ora 8:00 (după mic dejun) — pastilele de dimineață. <strong>Verifici TREI ori</strong>: pastila corectă, ora corectă, persoana corectă. Frau Müller are: tensiune (Blutdruck), diabetes (vitamine), uneori somnifere de seară. <strong>NU dai NICIODATĂ o pastilă fără să verifici planul.</strong></p>

    <h5 style="color:#065f46; margin-top:18px;">💊 Vocabularul medicamentelor</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Cuvânt</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">die Tablette · die Tabletten</span></td><td>pastila · plural -n</td></tr>
          <tr><td><span class="pflege-fraza">die Tropfen</span></td><td>picăturile · NUMAI plural</td></tr>
          <tr><td><span class="pflege-fraza">das Insulin</span></td><td>insulina · NUMAI singular</td></tr>
          <tr><td><span class="pflege-fraza">der Medikamentenplan</span></td><td>planul medicamentelor</td></tr>
          <tr><td><span class="pflege-fraza">der Blutdruck</span></td><td>tensiunea arterială</td></tr>
          <tr><td><span class="pflege-fraza">der Blutzucker</span></td><td>glicemia</td></tr>
          <tr><td><span class="pflege-fraza">einnehmen</span></td><td>a lua (medicament) — verb separabil</td></tr>
          <tr><td><span class="pflege-fraza">messen</span></td><td>a măsura (tensiunea, glicemia)</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💬 Fraze esențiale (din Agnesa)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Frază</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Hier sind Ihre Tabletten.</span></td><td>Aici sunt pastilele dumneavoastră.</td></tr>
          <tr><td><span class="pflege-fraza">Bitte vergessen Sie nicht Ihre morgendlichen Tabletten zu nehmen.</span></td><td>Nu uitați să vă luați medicamentele de dimineață.</td></tr>
          <tr><td><span class="pflege-fraza">Ich werde Ihren Blutzucker und Blutdruck messen.</span></td><td>Vă voi măsura glicemia și tensiunea.</td></tr>
          <tr><td><span class="pflege-fraza">Vor dem Essen oder nach dem Essen?</span></td><td>Înainte de masă sau după?</td></tr>
          <tr><td><span class="pflege-fraza">Mit einem Glas Wasser, bitte.</span></td><td>Cu un pahar de apă, vă rog.</td></tr>
          <tr><td><span class="pflege-fraza">Haben Sie alle Tabletten genommen?</span></td><td>Ați luat toate pastilele?</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>⚠️ Capcana vor/nach dem Essen</h5>
      <p>Unele medicamente se iau <strong>vor dem Essen</strong> (înainte de mâncare — pe stomacul gol, ex: tiroxin pentru tiroidă). Altele <strong>nach dem Essen</strong> (după mâncare — protecție stomac, ex: ibuprofen). CITEȘTE planul medicamentelor ÎNAINTE de mic dejun!</p>
      <p>📌 vor dem Essen = înainte de masă · 30 min înainte<br>
      📌 nach dem Essen = după masă · imediat după<br>
      📌 zum Essen = la masă · împreună cu mâncarea</p>
    </div>

    <div class="final-note-box">
      <h5>💖 Regula DE AUR</h5>
      <p>NU dai NICIODATĂ o pastilă fără planul medicamentelor în mână. NU schimbi orele. NU dublezi doza. Dacă ai îndoieli — <strong>SUNI Sprechstundenhilfe</strong> (asistenta medicului din L8). Mai bine întrebare deranjantă decât eroare medicamentoasă.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 6 — Gramatica Perfekt sein vs haben
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(5)">
    <h4>6️⃣ 🧱 Gramatica — Perfekt: sein vs haben + Partizip II</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-5">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-6" onclick="toggleAudio(event, 'audio-6')">▶</button>
        <audio id="audio-6" preload="none"><source src="audio/06-perfekt.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Dimineața vorbești MULT despre ce s-a întâmplat azi-noapte: Frau Müller A DORMIT, A AVUT vise, S-A TREZIT, A LUAT pastilele. Toate aceste verbe la trecut = <strong>Perfekt</strong>. Regula: <strong>sein/haben (la prezent) + Partizip II</strong>. Trucul: care verbe iau sein, care iau haben?</p>

    <h5 style="color:#065f46; margin-top:18px;">📋 Regula sein vs haben</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Auxiliar</th><th>Folosit pentru</th><th>Exemple verbale</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>sein</strong></td><td>MIȘCARE (de la A la B) sau SCHIMBARE de stare</td><td>gehen, kommen, fahren, aufwachen, aufstehen, einschlafen, sterben</td></tr>
          <tr><td><strong>haben</strong></td><td>RESTUL (~80% din verbe) · acțiuni fără mișcare</td><td>essen, trinken, schlafen, sehen, nehmen, sprechen, schmecken</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🌅 Perfekt în context Erster Morgen</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Propoziție</th><th>🇷🇴 Traducere</th><th>Aux</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Sie hat gut geschlafen.</span></td><td>A dormit bine.</td><td>haben</td></tr>
          <tr><td><span class="pflege-fraza">Sie ist um 7 Uhr aufgewacht.</span></td><td>S-a trezit la ora 7.</td><td>sein</td></tr>
          <tr><td><span class="pflege-fraza">Sie ist langsam aufgestanden.</span></td><td>S-a ridicat încet.</td><td>sein</td></tr>
          <tr><td><span class="pflege-fraza">Sie hat Brötchen gegessen.</span></td><td>A mâncat chifle.</td><td>haben</td></tr>
          <tr><td><span class="pflege-fraza">Sie hat Kaffee getrunken.</span></td><td>A băut cafea.</td><td>haben</td></tr>
          <tr><td><span class="pflege-fraza">Sie hat ihre Tabletten genommen.</span></td><td>A luat pastilele.</td><td>haben</td></tr>
          <tr><td><span class="pflege-fraza">Sie hat Albträume gehabt.</span></td><td>A avut coșmaruri.</td><td>haben</td></tr>
          <tr><td><span class="pflege-fraza">Ich bin um 6 Uhr aufgestanden.</span></td><td>M-am ridicat la ora 6.</td><td>sein</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📐 Partizip II — tipare frecvente</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Tipar</th><th>Infinitiv</th><th>Partizip II</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>ge + -t (slabe)</strong></td><td>schlafen</td><td><strong>geschlafen</strong></td></tr>
          <tr><td><strong>ge + Vokalwechsel + -en (tari)</strong></td><td>essen</td><td><strong>gegessen</strong></td></tr>
          <tr><td><strong>ge + Vokalwechsel + -en</strong></td><td>trinken</td><td><strong>getrunken</strong></td></tr>
          <tr><td><strong>ge + Vokalwechsel + -en</strong></td><td>nehmen</td><td><strong>genommen</strong></td></tr>
          <tr><td><strong>Trennbar: prefix + ge + ...</strong></td><td>aufwachen</td><td><strong>aufgewacht</strong></td></tr>
          <tr><td><strong>Trennbar: prefix + ge + ...</strong></td><td>aufstehen</td><td><strong>aufgestanden</strong></td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-summary">
      <h5 style="color:#065f46; margin-bottom:10px;">🎯 Regula de aur (3 secunde)</h5>
      <p><strong>Perfekt = HABEN/SEIN (Prezent) + Partizip II (la SFÂRȘIT propoziției)</strong></p>
      <p>📌 Aux la POZIȚIA 2 (a verbului conjugat).<br>
      📌 Partizip II la POZIȚIA FINALĂ.<br>
      📌 Restul propoziției = MIJLOC.</p>
      <p>Exemplu: <em>„Frau Müller [hat] gestern Nacht schlecht [geschlafen]."</em> = Frau Müller [a] dormit prost azi-noapte.</p>
    </div>

    <div class="capcana-box">
      <h5>⚠️ Capcane Perfekt</h5>
      <p>📌 <strong>aufstehen → aufgestanden</strong> (NU aufgesteht — e verb tare!)<br>
      📌 <strong>essen → gegessen</strong> (NU geesst — verb tare cu vocala E neschimbată!)<br>
      📌 <strong>nehmen → genommen</strong> (vocala se schimbă e → o)</p>
      <p>Aceste 3 verbe le folosești ZILNIC în Pflege. Învață-le pe de rost.</p>
    </div>

  </div>
</div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;
