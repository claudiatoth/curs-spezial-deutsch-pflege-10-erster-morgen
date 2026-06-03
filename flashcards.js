// ============================================
// FLASHCARDS — Pflege 10: Erster Morgen
// 48 carduri în 6 categorii (8 fiecare)
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

const flashcardsData = [
    // === 1. WECKEN + SOMN (8) ===
    { de: "Guten Morgen!", ro: "🌅 Bună dimineața · primul cuvânt din zi", audio: "audio/letters/guten-morgen.wav" },
    { de: "Sind Sie wach?", ro: "🌅 Sunteți treaz? · al doilea cuvânt", audio: "audio/letters/sind-sie-wach.wav" },
    { de: "aufwachen · aufgewacht", ro: "🌅 a se trezi · cu SEIN · ist aufgewacht (NU haben!)", audio: "audio/letters/aufwachen.wav" },
    { de: "aufstehen · aufgestanden", ro: "🌅 a se ridica din pat · cu SEIN · ist aufgestanden (verb tare!)", audio: "audio/letters/aufstehen.wav" },
    { de: "wecken", ro: "🌅 a trezi pe altcineva · cu HABEN · Andreea weckt Frau Müller", audio: "audio/letters/wecken.wav" },
    { de: "Wie haben Sie geschlafen?", ro: "💤 Cum ați dormit? · PRIMA întrebare a zilei", audio: "audio/letters/wie-geschlafen.wav" },
    { de: "Ich habe gut/schlecht geschlafen.", ro: "💤 Am dormit bine/prost · răspuns standard", audio: "audio/letters/gut-schlecht-geschlafen.wav" },
    { de: "der Albtraum · die Albträume", ro: "💤 coșmarul · plural cu Umlaut · empatie când e cazul", audio: "audio/letters/albtraum.wav" },

    // === 2. SCHMERZEN MATINALI (8) ===
    { de: "Haben Sie Schmerzen?", ro: "🩹 Aveți dureri? · întrebare ZILNICĂ", audio: "audio/letters/haben-schmerzen.wav" },
    { de: "Mein Rücken tut weh.", ro: "🩹 Mă doare spatele · cel mai frecvent matinal", audio: "audio/letters/ruecken-tut-weh.wav" },
    { de: "Meine Knie tun weh.", ro: "🩹 Mă dor genunchii · PLURAL → tun (NU tut)", audio: "audio/letters/knie-tun-weh.wav" },
    { de: "Ich habe Kopfschmerzen.", ro: "🤕 Am dureri de cap · construcție cu haben", audio: "audio/letters/kopfschmerzen.wav" },
    { de: "Wo tut es weh?", ro: "🩹 Unde vă doare? · localizare", audio: "audio/letters/wo-tut-weh.wav" },
    { de: "Wie stark sind die Schmerzen?", ro: "📊 Cât de puternice sunt durerile? · scala 1-10 Agnesa", audio: "audio/letters/wie-stark.wav" },
    { de: "auf einer Skala von 1 bis 10", ro: "📊 pe o scală de la 1 la 10 · Agnesa", audio: "audio/letters/skala-1-10.wav" },
    { de: "Seit wann haben Sie die Schmerzen?", ro: "📊 De când aveți durerile? · monitorizare Agnesa", audio: "audio/letters/seit-wann.wav" },

    // === 3. FRÜHSTÜCK (8) ===
    { de: "das Frühstück · die Frühstücke", ro: "🍞 micul dejun · neutru · cel mai SACRU moment al zilei", audio: "audio/letters/fruehstueck.wav" },
    { de: "das Brötchen · die Brötchen", ro: "🥖 chifla · neutru · plural fără schimbare · cu Marmelade preferată", audio: "audio/letters/broetchen.wav" },
    { de: "die Butter", ro: "🧈 untul · feminin · NUMAI singular", audio: "audio/letters/butter.wav" },
    { de: "die Marmelade", ro: "🍓 gemul · feminin · cireșe preferat Frau Müller", audio: "audio/letters/marmelade.wav" },
    { de: "der Käse · die Käse", ro: "🧀 brânza · MASCULIN în DE (fem în RO!) · Gouda Mild preferat", audio: "audio/letters/kaese.wav" },
    { de: "das Ei · die Eier", ro: "🥚 oul · plural cu -er · die Eier", audio: "audio/letters/ei.wav" },
    { de: "der Kaffee", ro: "☕ cafeaua · NUMAI singular", audio: "audio/letters/kaffee.wav" },
    { de: "der Tee", ro: "🍵 ceaiul · NUMAI singular · Frau Müller bea negru fără zahăr", audio: "audio/letters/tee.wav" },

    // === 4. TABLETTEN + MEDICAL (8) ===
    { de: "die Tablette · die Tabletten", ro: "💊 pastila · feminin · plural cu -n", audio: "audio/letters/tablette.wav" },
    { de: "die Tropfen", ro: "💧 picăturile · NUMAI plural", audio: "audio/letters/tropfen.wav" },
    { de: "das Insulin", ro: "💉 insulina · neutru · NUMAI singular · diabet", audio: "audio/letters/insulin.wav" },
    { de: "der Medikamentenplan", ro: "📋 planul medicamentelor · CITEȘTE-L înainte!", audio: "audio/letters/medikamentenplan.wav" },
    { de: "der Blutdruck", ro: "🩸 tensiunea arterială · NUMAI singular", audio: "audio/letters/blutdruck.wav" },
    { de: "der Blutzucker", ro: "🩸 glicemia · NUMAI singular", audio: "audio/letters/blutzucker.wav" },
    { de: "einnehmen · eingenommen", ro: "💊 a lua medicament · verb separabil · Partizip II: eingenommen", audio: "audio/letters/einnehmen.wav" },
    { de: "messen · gemessen", ro: "📊 a măsura · verb · Partizip II: gemessen", audio: "audio/letters/messen.wav" },

    // === 5. PERFEKT TYPISCH (8) ===
    { de: "Sie hat gut geschlafen.", ro: "📐 A dormit bine · HABEN + Partizip II la SFÂRȘIT", audio: "audio/letters/hat-geschlafen.wav" },
    { de: "Sie ist aufgewacht.", ro: "📐 S-a trezit · SEIN + Partizip II (mișcare interioară)", audio: "audio/letters/ist-aufgewacht.wav" },
    { de: "Sie ist aufgestanden.", ro: "📐 S-a ridicat · SEIN + Partizip II (mișcare)", audio: "audio/letters/ist-aufgestanden.wav" },
    { de: "Sie hat Brötchen gegessen.", ro: "📐 A mâncat chifle · HABEN + Partizip II", audio: "audio/letters/hat-gegessen.wav" },
    { de: "Sie hat Tee getrunken.", ro: "📐 A băut ceai · HABEN + getrunken (vocala se schimbă)", audio: "audio/letters/hat-getrunken.wav" },
    { de: "Sie hat Tabletten genommen.", ro: "📐 A luat pastilele · HABEN + genommen (vocala se schimbă)", audio: "audio/letters/hat-genommen.wav" },
    { de: "Sie hat Albträume gehabt.", ro: "📐 A avut coșmaruri · haben + Partizip II al lui haben = gehabt", audio: "audio/letters/hat-gehabt.wav" },
    { de: "Sie ist eingeschlafen.", ro: "📐 A adormit · SEIN (schimbare de stare) · einschlafen", audio: "audio/letters/ist-eingeschlafen.wav" },

    // === 6. PREPOSITII MIC DEJUN + CONSTRUCȚII (8) ===
    { de: "zum Frühstück", ro: "🍞 la mic dejun · zu + dem = zum (Dativ masc/neut)", audio: "audio/letters/zum-fruehstueck.wav" },
    { de: "vor dem Essen", ro: "💊 înainte de masă · 30 min înainte · pastile pe stomacul gol", audio: "audio/letters/vor-essen.wav" },
    { de: "nach dem Essen", ro: "💊 după masă · imediat după · pastile cu protecție stomac", audio: "audio/letters/nach-essen.wav" },
    { de: "mit Butter und Marmelade", ro: "🥖 cu unt și gem · mit + Dativ", audio: "audio/letters/mit-butter.wav" },
    { de: "Möchten Sie ...?", ro: "💬 Doriți ...? · verb modal politicos (NU wollen!)", audio: "audio/letters/moechten.wav" },
    { de: "Schmeckt es Ihnen?", ro: "💬 Vă place? Este gustos? · schmecken + Dativ (Agnesa)", audio: "audio/letters/schmeckt-ihnen.wav" },
    { de: "Möchten Sie noch ...?", ro: "💬 Mai doriți ...? · noch = încă (mai)", audio: "audio/letters/moechten-noch.wav" },
    { de: "mit einem Glas Wasser", ro: "💊 cu un pahar de apă · mit + Dativ Akk·Nom · neutru ein → einem", audio: "audio/letters/glas-wasser.wav" }
];

let currentFlashcardIndex = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="flashcard-intro">
            <p>🎯 <strong>48 flashcards în 6 categorii</strong> — Wecken+Somn · Schmerzen matinali · Frühstück · Tabletten+Medical · Perfekt typisch · Prepoziții+Construcții.</p>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <button class="flashcard-audio-btn" id="flashcard-audio-btn" onclick="event.stopPropagation(); playFlashcardAudio()" aria-label="Asculta pronunția">🔊</button>
                <div class="flashcard-content">
                    <div class="de" id="flashcard-de"></div>
                    <div class="ro" id="flashcard-ro"></div>
                </div>
                <div class="flashcard-hint">👆 Apasă cardul pentru traducere · 🔊 pentru pronunție</div>
                <audio id="flashcard-audio" preload="none"></audio>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn" onclick="prevFlashcard()">← Înapoi</button>
                <span class="flashcard-counter" id="flashcard-counter">1 / 48</span>
                <button class="flashcard-btn" onclick="nextFlashcard()">Înainte →</button>
            </div>
            <div class="flashcard-progress">
                <div class="flashcard-progress-fill" id="flashcard-progress-fill"></div>
            </div>
        </div>
    `;
    showFlashcard(0);
}

function showFlashcard(index) {
    const card = flashcardsData[index];
    if (!card) return;
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');
    const audio = document.getElementById('flashcard-audio');
    if (de) de.textContent = card.de;
    if (ro) ro.textContent = card.ro;
    if (audio && card.audio) { audio.pause(); audio.src = card.audio; audio.load(); }
    if (counter) counter.textContent = `${index + 1} / ${flashcardsData.length}`;
    if (progress) progress.style.width = ((index + 1) / flashcardsData.length * 100) + '%';
    isFlipped = false;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.remove('flipped');
}

function playFlashcardAudio() {
    const audio = document.getElementById('flashcard-audio');
    if (!audio || !audio.src) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

buildFlashcards();
