// ============================================
// EXERCISES.JS — Pflege 10: Erster Morgen
// 7 exerciții × 10 itemi = 70 itemi total
// Schreiben form: forms.gle/GCG4TDW2oay9QtHVA
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    if (item.sentence) {
        const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
        return item.accept.some(a => {
            const full = sentenceClean.replace(/____+/g, a);
            return normalizeAnswer(full) === u;
        });
    }
    return false;
}

// EX 1: Match vocabular dimineață
const ex1Data = [
    { id: 'a', de: 'aufwachen', accept: ['a se trezi', 'trezirea', 'a se trezi din somn'], correct: 'a se trezi (din somn)' },
    { id: 'b', de: 'aufstehen', accept: ['a se ridica', 'a se ridica din pat'], correct: 'a se ridica din pat' },
    { id: 'c', de: 'das Frühstück', accept: ['mic dejun', 'micul dejun'], correct: 'micul dejun' },
    { id: 'd', de: 'das Brötchen', accept: ['chifla', 'o chifla', 'chifla de mic dejun'], correct: 'chifla' },
    { id: 'e', de: 'die Marmelade', accept: ['gem', 'gemul'], correct: 'gemul' },
    { id: 'f', de: 'die Tablette', accept: ['pastila', 'tableta'], correct: 'pastila' },
    { id: 'g', de: 'der Blutdruck', accept: ['tensiunea', 'tensiunea arteriala', 'tensiunea arterială'], correct: 'tensiunea arterială' },
    { id: 'h', de: 'der Blutzucker', accept: ['glicemia', 'glicemie'], correct: 'glicemia' },
    { id: 'i', de: 'die Schmerzen', accept: ['durerile', 'dureri'], correct: 'durerile' },
    { id: 'j', de: 'der Albtraum', accept: ['cosmar', 'coșmar', 'cosmarul'], correct: 'coșmarul' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌅 Scrie traducerea în română</strong> pentru fiecare cuvânt al dimineții.</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇩🇪 ${it.de}</label><input type="text" id="ex1-${it.id}" placeholder="Scrie traducerea..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 2: Perfekt sein sau haben?
const ex2Data = [
    { id: 'a', sentence: 'Sie ____ gut geschlafen. (a dormi)', translation: 'A dormit bine.', correct: 'hat', accept: ['hat'] },
    { id: 'b', sentence: 'Sie ____ um 7 Uhr aufgewacht. (a se trezi — mișcare)', translation: 'S-a trezit la 7.', correct: 'ist', accept: ['ist'] },
    { id: 'c', sentence: 'Sie ____ langsam aufgestanden. (a se ridica)', translation: 'S-a ridicat încet.', correct: 'ist', accept: ['ist'] },
    { id: 'd', sentence: 'Sie ____ Brötchen gegessen. (a mânca)', translation: 'A mâncat chifle.', correct: 'hat', accept: ['hat'] },
    { id: 'e', sentence: 'Sie ____ Tee getrunken. (a bea)', translation: 'A băut ceai.', correct: 'hat', accept: ['hat'] },
    { id: 'f', sentence: 'Sie ____ ihre Tabletten genommen. (a lua)', translation: 'A luat pastilele.', correct: 'hat', accept: ['hat'] },
    { id: 'g', sentence: 'Ich ____ um 6 Uhr aufgestanden. (eu — mișcare)', translation: 'Eu m-am ridicat la 6.', correct: 'bin', accept: ['bin'] },
    { id: 'h', sentence: 'Sie ____ Albträume gehabt. (a avea)', translation: 'A avut coșmaruri.', correct: 'hat', accept: ['hat'] },
    { id: 'i', sentence: 'Sie ____ schnell eingeschlafen. (a adormi — mișcare/schimbare)', translation: 'A adormit repede.', correct: 'ist', accept: ['ist'] },
    { id: 'j', sentence: 'Wir ____ zusammen gefrühstückt. (a lua mic dejun)', translation: 'Am luat mic dejunul împreună.', correct: 'haben', accept: ['haben'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📐 Perfekt: sein sau haben?</strong> sein = MIȘCARE/SCHIMBARE de stare (aufwachen, aufstehen, einschlafen) · haben = restul (essen, trinken, schlafen, nehmen).</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="sein sau haben (conjugat)..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 3: Audio dictat
const ex3Data = [
    { id: 'a', audio: 'audio/dictat-01.wav', correct: 'das Frühstück', accept: ['das fruehstueck', 'das frühstück', 'fruehstueck', 'frühstück'] },
    { id: 'b', audio: 'audio/dictat-02.wav', correct: 'das Brötchen', accept: ['das broetchen', 'das brötchen', 'broetchen', 'brötchen'] },
    { id: 'c', audio: 'audio/dictat-03.wav', correct: 'die Marmelade', accept: ['die marmelade', 'marmelade'] },
    { id: 'd', audio: 'audio/dictat-04.wav', correct: 'die Tablette', accept: ['die tablette', 'tablette'] },
    { id: 'e', audio: 'audio/dictat-05.wav', correct: 'der Blutdruck', accept: ['der blutdruck', 'blutdruck'] },
    { id: 'f', audio: 'audio/dictat-06.wav', correct: 'die Schmerzen', accept: ['die schmerzen', 'schmerzen'] },
    { id: 'g', audio: 'audio/dictat-07.wav', correct: 'der Albtraum', accept: ['der albtraum', 'albtraum'] },
    { id: 'h', audio: 'audio/dictat-08.wav', correct: 'aufwachen', accept: ['aufwachen'] },
    { id: 'i', audio: 'audio/dictat-09.wav', correct: 'aufstehen', accept: ['aufstehen'] },
    { id: 'j', audio: 'audio/dictat-10.wav', correct: 'einnehmen', accept: ['einnehmen'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎙️ Audio dictat — Mic dejun + medicamente + verbe trezire.</strong> Ascultă și scrie ce auzi (cu articol unde e cazul).</div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><div class="audio-dictat-row"><button class="audio-btn-mini" id="btn-${it.audio}" onclick="toggleAudio(event, 'audio-dictat-${it.id}')">▶</button><audio id="audio-dictat-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio><span style="color:#6b7280; font-size:0.9rem;">Ascultă și scrie:</span></div><input type="text" id="ex3-${it.id}" placeholder="Scrie cuvântul..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 4: Partizip II
const ex4Data = [
    { id: 'a', sentence: 'schlafen → ____', translation: 'a dormi → dormit', correct: 'geschlafen', accept: ['geschlafen'] },
    { id: 'b', sentence: 'essen → ____ (Partizip II)', translation: 'a mânca → mâncat', correct: 'gegessen', accept: ['gegessen'] },
    { id: 'c', sentence: 'trinken → ____ (vocala se schimbă)', translation: 'a bea → băut', correct: 'getrunken', accept: ['getrunken'] },
    { id: 'd', sentence: 'nehmen → ____ (vocala se schimbă)', translation: 'a lua → luat', correct: 'genommen', accept: ['genommen'] },
    { id: 'e', sentence: 'aufwachen → ____ (verb separabil)', translation: 'a se trezi → trezit', correct: 'aufgewacht', accept: ['aufgewacht'] },
    { id: 'f', sentence: 'aufstehen → ____ (verb separabil, tare)', translation: 'a se ridica → ridicat', correct: 'aufgestanden', accept: ['aufgestanden'] },
    { id: 'g', sentence: 'haben → ____ (auxiliar)', translation: 'a avea → avut', correct: 'gehabt', accept: ['gehabt'] },
    { id: 'h', sentence: 'einnehmen → ____ (separabil)', translation: 'a lua medicament → luat', correct: 'eingenommen', accept: ['eingenommen'] },
    { id: 'i', sentence: 'messen → ____ (Partizip II)', translation: 'a măsura → măsurat', correct: 'gemessen', accept: ['gemessen'] },
    { id: 'j', sentence: 'frühstücken → ____ (Partizip II)', translation: 'a lua mic dejun → luat mic dejun', correct: 'gefrühstückt', accept: ['gefruehstueckt', 'gefrühstückt'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📐 Partizip II — formele corecte.</strong> Tipare: slabe ge+t · tari ge+Vokalwechsel+en · separabile prefix+ge+...</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="Partizip II..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 5: Dialog Gap-Fill (Dialog 1 trezire)
const ex5Data = [
    { id: 'a', sentence: 'Andreea: „____ Morgen, Frau Müller." (BUNĂ)', translation: 'BUNĂ dimineața.', correct: 'Guten', accept: ['guten'] },
    { id: 'b', sentence: 'Andreea: „Sind Sie ____?" (treaz)', translation: 'Sunteți TREAZĂ?', correct: 'wach', accept: ['wach'] },
    { id: 'c', sentence: 'Andreea: „Wie haben Sie ____?" (Partizip II — a dormit)', translation: 'Cum AȚI DORMIT?', correct: 'geschlafen', accept: ['geschlafen'] },
    { id: 'd', sentence: 'Frau Müller: „Nicht so gut. Ich bin oft ____." (Partizip II — m-am trezit)', translation: 'M-am TREZIT des.', correct: 'aufgewacht', accept: ['aufgewacht'] },
    { id: 'e', sentence: 'Andreea: „Das tut mir ____." (rău)', translation: 'Îmi pare RĂU.', correct: 'leid', accept: ['leid'] },
    { id: 'f', sentence: 'Frau Müller: „Mein Rücken tut ____." (doare)', translation: 'Mă DOARE spatele.', correct: 'weh', accept: ['weh'] },
    { id: 'g', sentence: 'Andreea: „Wie ____? Auf einer Skala von 1 bis 10?" (cât de tare)', translation: 'Cât de TARE?', correct: 'stark', accept: ['stark'] },
    { id: 'h', sentence: 'Frau Müller: „Vielleicht eine ____." (CIFRA 6)', translation: 'Poate un ȘASE.', correct: 'sechs', accept: ['sechs', '6'] },
    { id: 'i', sentence: 'Andreea: „Heute machen wir es ____." (LINIȘTIT)', translation: 'Azi facem totul LINIȘTIT.', correct: 'ruhig', accept: ['ruhig'] },
    { id: 'j', sentence: 'Frau Müller: „Ja, mit Ihrer ____." (AJUTOR — feminin)', translation: 'Da, cu AJUTORUL dumneavoastră.', correct: 'Hilfe', accept: ['hilfe'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌅 Dialog gap-fill — Trezirea Frau Müller (Dialog 1).</strong> Completează replicile lipsă.</div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 6: Traducere RO → DE
const ex6Data = [
    { id: 'a', ro: 'Bună dimineața. Cum ați dormit?', correct: 'Guten Morgen. Wie haben Sie geschlafen?', accept: ['guten morgen wie haben sie geschlafen', 'guten morgen. wie haben sie geschlafen?'] },
    { id: 'b', ro: 'Aveți dureri?', correct: 'Haben Sie Schmerzen?', accept: ['haben sie schmerzen', 'haben sie schmerzen?'] },
    { id: 'c', ro: 'Mă doare spatele.', correct: 'Mein Rücken tut weh.', accept: ['mein ruecken tut weh', 'mein rücken tut weh'] },
    { id: 'd', ro: 'Ce doriți la mic dejun?', correct: 'Was möchten Sie zum Frühstück?', accept: ['was moechten sie zum fruehstueck', 'was möchten sie zum frühstück', 'was möchten sie zum frühstück?'] },
    { id: 'e', ro: 'Ceai sau cafea?', correct: 'Tee oder Kaffee?', accept: ['tee oder kaffee'] },
    { id: 'f', ro: 'Aici sunt pastilele dumneavoastră.', correct: 'Hier sind Ihre Tabletten.', accept: ['hier sind ihre tabletten'] },
    { id: 'g', ro: 'Cu un pahar de apă, vă rog.', correct: 'Mit einem Glas Wasser, bitte.', accept: ['mit einem glas wasser bitte', 'mit einem glas wasser, bitte'] },
    { id: 'h', ro: 'A dormit bine.', correct: 'Sie hat gut geschlafen.', accept: ['sie hat gut geschlafen'] },
    { id: 'i', ro: 'S-a trezit la ora 7.', correct: 'Sie ist um 7 Uhr aufgewacht.', accept: ['sie ist um 7 uhr aufgewacht', 'sie ist um sieben uhr aufgewacht'] },
    { id: 'j', ro: 'A luat pastilele.', correct: 'Sie hat ihre Tabletten genommen.', accept: ['sie hat ihre tabletten genommen', 'sie hat die tabletten genommen'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Traducere RO → DE.</strong> Scrie frazele dimineții în germană (atenție la Perfekt!).</div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇷🇴 ${it.ro}</label><input type="text" id="ex6-${it.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// EX 7: Schreiben — Raport dimineață către Petra
function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    c.innerHTML = `
        <div class="schreiben-wrapper">
            <div class="schreiben-prompt">
                <h4>✍️ Tema ta de scriere — Raport dimineață către Petra (fiica)</h4>
                <p>Ora 9:30 dimineața. Frau Müller a mâncat micul dejun și e acum în Wohnzimmer cu ceaiul ei. <strong>Trimite-i un SMS Petrei</strong> (5-7 propoziții) cu raportul dimineții. Folosește MULT Perfekt (sein/haben).</p>
                <p>Include: <em>cum a dormit · dacă a avut dureri (scala 1-10) · ce a mâncat · ce pastile a luat · cum se simte acum</em>.</p>

                <div class="schreiben-hints">
                    <h5>💡 Structuri utile (Perfekt!)</h5>
                    <p>Ihre Mutter hat ... geschlafen · Sie ist um 7 Uhr aufgewacht · Sie hat Schmerzen gehabt · Sie hat Brötchen mit Marmelade gegessen · Sie hat Tee getrunken · Sie hat ihre Tabletten genommen · Es geht ihr besser</p>
                </div>
            </div>

            <textarea id="ex7-text" class="schreiben-textarea" placeholder="Schreib hier den Morgen-Bericht auf Deutsch...
Beispiel:
Hallo Petra. Ihre Mutter hat..."></textarea>

            <details class="schreiben-model">
                <summary>📝 Vezi un model de răspuns</summary>
                <div class="model-text">
                    <p><em>Beispiel-Antwort:</em></p>
                    <p>Hallo Petra. Ihre Mutter hat schlecht geschlafen — sie ist oft aufgewacht. Heute Morgen hat sie Schmerzen gehabt — der Rücken, etwa Stufe 6 auf der Skala. Zum Frühstück hat sie ein Brötchen mit Butter und Marmelade gegessen und Tee getrunken. Sie hat ihre Tabletten genommen — Blutdruck und Vitamin D. Jetzt sitzt sie im Wohnzimmer und es geht ihr besser. Schönen Tag! Andreea.</p>
                    <p class="model-translation"><em>Traducere:</em> Bună Petra. Mama dumneavoastră a dormit prost — s-a trezit des. Azi-dimineață a avut dureri — spatele, aproximativ nivel 6 pe scală. La mic dejun a mâncat o chiflă cu unt și gem și a băut ceai. A luat pastilele — tensiune și vitamina D. Acum stă în sufragerie și se simte mai bine. O zi frumoasă! Andreea.</p>
                </div>
            </details>

            <div class="schreiben-cta">
                <a href="https://forms.gle/GCG4TDW2oay9QtHVA" target="_blank" class="btn-google-form-big">
                    ✍️ Vrei feedback PERSONAL de la Annette? Trimite raportul aici
                </a>
                <p class="schreiben-promise">📩 Răspunde Annette personal în 24-48 ore — corectare + sfaturi.</p>
            </div>
        </div>
    `;
}

function checkExercise(n) {
    const checkers = { 1: checkEx1, 2: checkEx2, 3: checkEx3, 4: checkEx4, 5: checkEx5, 6: checkEx6 };
    if (!checkers[n]) return;
    const result = checkers[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) {
        const pct = Math.round((result.correct / result.total) * 100);
        let msg = `Scor: ${result.correct}/${result.total} (${pct}%)`;
        if (pct === 100) msg += ' — Perfect! 🎉';
        else if (pct >= 80) msg += ' — Foarte bine! 💪';
        else if (pct >= 60) msg += ' — Bine, mai exersează puțin. 🙂';
        else msg += ' — Reia teoria și încearcă din nou. 📚';
        scoreEl.textContent = msg;
        scoreEl.className = 'score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
    }
}

function resetExercise(n) {
    const containerId = `ex${n}-container`;
    const c = document.getElementById(containerId);
    if (!c) return;
    c.querySelectorAll('input[type="text"]').forEach(inp => inp.value = '');
    c.querySelectorAll('.feedback').forEach(fb => { fb.className = 'feedback'; fb.textContent = ''; });
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'score'; }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
