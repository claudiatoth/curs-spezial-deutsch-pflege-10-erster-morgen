// ============================================
// FINAL TEST — Pflege 10: Erster Morgen
// 25 întrebări × 5 categorii
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

function normalizeAnswerFT(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

const finalTestData = [
    // === 1. WECKEN + SOMN (5) ===
    { id: 1, category: 'Wecken + Somn', type: 'fill', question: 'Întrebarea standard despre somn: „Wie haben Sie ____?" (Partizip II)', correct: 'geschlafen', accept: ['geschlafen'] },
    { id: 2, category: 'Wecken + Somn', type: 'mc', question: '🚨 Capcana aufwachen vs aufstehen:', options: ['Sunt sinonime', 'aufwachen = a se trezi (ochi se deschid) · aufstehen = a se ridica din pat (acțiune fizică)', 'aufwachen e formal, aufstehen informal', 'aufwachen e pentru copii, aufstehen pentru adulți'], correctIndex: 1, correct: 'aufwachen = a se trezi (fiziologic) · aufstehen = a se ridica din pat' },
    { id: 3, category: 'Wecken + Somn', type: 'fill', question: 'Verb-ul pentru „a trezi pe altcineva" (eu o trezesc pe Frau Müller): „____"', correct: 'wecken', accept: ['wecken'] },
    { id: 4, category: 'Wecken + Somn', type: 'mc', question: '„Sie ist oft aufgewacht." — Acest Perfekt folosește:', options: ['haben (acțiune fără mișcare)', 'sein (mișcare/schimbare de stare)', 'oricare (e opțional)', 'werden (pasiv)'], correctIndex: 1, correct: 'sein — aufwachen e o schimbare de stare (din somn la treaz)' },
    { id: 5, category: 'Wecken + Somn', type: 'fill', question: 'Coșmar (cu articol): „der ____"', correct: 'Albtraum', accept: ['albtraum'] },

    // === 2. SCHMERZEN + SCALA (5) ===
    { id: 6, category: 'Schmerzen + Scala', type: 'fill', question: '„Mă doare spatele." → „Mein Rücken tut ____."', correct: 'weh', accept: ['weh'] },
    { id: 7, category: 'Schmerzen + Scala', type: 'mc', question: 'Pentru plural (Mă dor genunchii), formula corectă:', options: ['Meine Knie tut weh.', 'Meine Knie tun weh. (PLURAL → tun)', 'Meine Kniee tut weh.', 'Mein Knie tun weh.'], correctIndex: 1, correct: 'Meine Knie tun weh. (plural → tun, NU tut)' },
    { id: 8, category: 'Schmerzen + Scala', type: 'fill', question: 'Întrebarea scalei (Agnesa): „Wie ____ sind die Schmerzen?" (cât de puternice)', correct: 'stark', accept: ['stark'] },
    { id: 9, category: 'Schmerzen + Scala', type: 'mc', question: 'La scala 7-9 (durere severă), ce faci?', options: ['Aștepți să treacă', 'Pastilă banală + repaus', 'SUNI Hausarzt-ul sau Sprechstundenhilfe pentru programare urgentă', 'SUNI 112 imediat'], correctIndex: 2, correct: 'SUNI Hausarzt-ul. La 10 = SUNI 112.' },
    { id: 10, category: 'Schmerzen + Scala', type: 'fill', question: 'De când durerile? „____ wann haben Sie die Schmerzen?" (Agnesa)', correct: 'Seit', accept: ['seit'] },

    // === 3. FRÜHSTÜCK + MEDICAMENTE (5) ===
    { id: 11, category: 'Frühstück + Medicamente', type: 'fill', question: 'Chifla (cu articol): „das ____"', correct: 'Brötchen', accept: ['broetchen', 'brötchen'] },
    { id: 12, category: 'Frühstück + Medicamente', type: 'mc', question: 'Pentru „Doriți o cafea?" în Pflege folosești:', options: ['„Wollen Sie einen Kaffee?" (direct)', '„Möchten Sie einen Kaffee?" (politicos)', '„Trinken Sie Kaffee?" (general)', '„Gibt es Kaffee?" (impersonal)'], correctIndex: 1, correct: 'Möchten Sie einen Kaffee? — möchten e POLITICOS, standard în Pflege' },
    { id: 13, category: 'Frühstück + Medicamente', type: 'fill', question: 'Pastilele cu apă: „Mit einem ____ Wasser, bitte." (PAHAR)', correct: 'Glas', accept: ['glas'] },
    { id: 14, category: 'Frühstück + Medicamente', type: 'fill', question: 'Întrebarea Agnesa: „____ es Ihnen?" (Vă place — verb cu Dativ)', correct: 'Schmeckt', accept: ['schmeckt'] },
    { id: 15, category: 'Frühstück + Medicamente', type: 'mc', question: 'Vor dem Essen / nach dem Essen / zum Essen?', options: ['Toate sunt sinonime', 'vor = înainte (stomac gol) · nach = după (protecție stomac) · zum = la masă (cu mâncare)', 'Diferă doar formal', 'vor = formal, nach = informal'], correctIndex: 1, correct: 'vor (înainte, 30 min) · nach (după, imediat) · zum (în timpul mesei)' },

    // === 4. PERFEKT — SEIN VS HABEN (5) ===
    { id: 16, category: 'Perfekt — sein vs haben', type: 'fill', question: '„A dormit bine." → „Sie ____ gut geschlafen."', correct: 'hat', accept: ['hat'] },
    { id: 17, category: 'Perfekt — sein vs haben', type: 'fill', question: '„S-a trezit la 7." → „Sie ____ um 7 Uhr aufgewacht."', correct: 'ist', accept: ['ist'] },
    { id: 18, category: 'Perfekt — sein vs haben', type: 'mc', question: 'Care verbe iau SEIN în Perfekt?', options: ['Toate', 'Verbele de MIȘCARE și SCHIMBARE de stare (gehen, kommen, aufwachen, aufstehen, einschlafen, sterben)', 'Doar verbele tari', 'Verbele cu prefix'], correctIndex: 1, correct: 'Verbele de MIȘCARE (de la A la B) și SCHIMBARE de stare iau sein' },
    { id: 19, category: 'Perfekt — sein vs haben', type: 'fill', question: 'Partizip II al lui essen: „____"', correct: 'gegessen', accept: ['gegessen'] },
    { id: 20, category: 'Perfekt — sein vs haben', type: 'fill', question: 'Partizip II al lui aufstehen: „____" (verb tare separabil)', correct: 'aufgestanden', accept: ['aufgestanden'] },

    // === 5. TRADUCERE + SITUAȚII (5) ===
    { id: 21, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Cum ați dormit?" → 🇩🇪 ?', correct: 'Wie haben Sie geschlafen?', accept: ['wie haben sie geschlafen', 'wie haben sie geschlafen?'] },
    { id: 22, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „A luat pastilele." → 🇩🇪 ?', correct: 'Sie hat ihre Tabletten genommen.', accept: ['sie hat ihre tabletten genommen', 'sie hat die tabletten genommen'] },
    { id: 23, category: 'Traducere + Situații', type: 'mc', question: '🌅 Pacienta răspunde „Ich habe nicht geschlafen!" Ce faci?', options: ['Ignori', '„Trebuie să dormiți!"', 'Notezi în caiet + zi mai liniștită + sun Hausarzt dacă continuă 3-4 zile', 'Sun 112 imediat'], correctIndex: 2, correct: 'Notezi pattern + zi liniștită · sun Hausarzt dacă persistă' },
    { id: 24, category: 'Traducere + Situații', type: 'fill', question: '🇷🇴 „Ce doriți la mic dejun?" → 🇩🇪 ?', correct: 'Was möchten Sie zum Frühstück?', accept: ['was moechten sie zum fruehstueck', 'was möchten sie zum frühstück', 'was möchten sie zum frühstück?'] },
    { id: 25, category: 'Traducere + Situații', type: 'mc', question: 'Regula DE AUR pentru medicamente:', options: ['Dai oricând în 30 min', 'NU dai NICIODATĂ fără planul medicamentelor în mână', 'Schimbi ore dacă pacienta cere', 'Dublu doza dacă uită una'], correctIndex: 1, correct: 'NU dai fără planul în mână. Dacă îndoieli → suni Sprechstundenhilfe.' }
];

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    let html = `
        <div class="final-test-intro">
            <h4>🎯 Test Final — 25 întrebări</h4>
            <p>5 categorii × 5 întrebări: <strong>Wecken+Somn · Schmerzen+Scala · Frühstück+Medicamente · Perfekt sein vs haben · Traducere+Situații</strong></p>
            <p>📝 Diacriticele DE și RO sunt opționale.</p>
        </div>
        <div id="ft-questions">`;
    finalTestData.forEach((q, i) => {
        html += `<div class="ft-question" data-q-id="${q.id}">
            <div class="ft-q-header">
                <span class="ft-q-num">Întrebarea ${i + 1} / 25</span>
                <span class="ft-q-category">${q.category}</span>
            </div>
            <div class="ft-q-text">${q.question}</div>`;
        if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                html += `<label class="ft-option"><input type="radio" name="ft-${q.id}" value="${idx}"> <span>${opt}</span></label>`;
            });
        } else if (q.type === 'fill') {
            html += `<input type="text" class="ft-input" id="ft-input-${q.id}" placeholder="Scrie răspunsul...">`;
        }
        html += `<div class="ft-feedback" id="ft-fb-${q.id}"></div></div>`;
    });
    html += `</div>
        <div class="ft-controls">
            <button class="btn btn-check" onclick="checkFinalTest()">🎯 Verifică TOT testul</button>
            <button class="btn btn-reset" onclick="resetFinalTest()">↻ Reia testul</button>
        </div>
        <div class="ft-score" id="ft-score"></div>`;
    container.innerHTML = html;
}

function checkFinalTest() {
    let correct = 0;
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (!fb) return;
        let userOk = false;
        if (q.type === 'mc') {
            const checked = document.querySelector(`input[name="ft-${q.id}"]:checked`);
            if (checked && parseInt(checked.value) === q.correctIndex) userOk = true;
        } else if (q.type === 'fill') {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp && q.accept.some(a => normalizeAnswerFT(a) === normalizeAnswerFT(inp.value))) userOk = true;
        }
        fb.className = userOk ? 'ft-feedback correct' : 'ft-feedback incorrect';
        fb.innerHTML = userOk ? `✓ Corect!` : `✗ Răspuns corect: <strong>${q.correct}</strong>`;
        if (userOk) correct++;
    });
    const pct = Math.round((correct / finalTestData.length) * 100);
    const scoreEl = document.getElementById('ft-score');
    if (!scoreEl) return;
    let msg = '';
    if (pct === 100) msg = `🏆 ${correct}/25 (100%) — PERFECT! Prima dimineață e a ta!`;
    else if (pct >= 80) msg = `🎉 ${correct}/25 (${pct}%) — Foarte bine! Mai recapitulează Perfekt sein/haben.`;
    else if (pct >= 60) msg = `💪 ${correct}/25 (${pct}%) — Bine. Reia teoria pe părți.`;
    else msg = `📚 ${correct}/25 (${pct}%) — Mai exersează. Reia teoria + flashcards.`;
    scoreEl.textContent = msg;
    scoreEl.className = 'ft-score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
}

function resetFinalTest() {
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (fb) { fb.className = 'ft-feedback'; fb.innerHTML = ''; }
        if (q.type === 'mc') {
            document.querySelectorAll(`input[name="ft-${q.id}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp) inp.value = '';
        }
    });
    const scoreEl = document.getElementById('ft-score');
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'ft-score'; }
}

buildFinalTest();
