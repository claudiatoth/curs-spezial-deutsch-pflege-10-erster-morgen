// ============================================
// DIALOGS.JS — Pflege 10: Erster Morgen
// 2 dialoguri (trezirea + mic dejun) · sync audio.currentTime
// Claudia Toth · Annettes Deutschkurs · A1.2
// ============================================

// ============================================
// DIALOG 1: „Guten Morgen, Frau Müller" — trezirea după noaptea cu panică
// 10 replici, ~75 sec
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'Guten Morgen, Frau Müller',
    context: 'Ora 7:00 dimineața. Andreea a stat lângă Frau Müller până la 4 noaptea (după panica din L9 când credea că are atac de cord). Acum intră ÎNCET în dormitor, deschide perdeaua doar 30%, se apropie de pat în șoaptă. Frau Müller deschide ochii, încă obosită. Acesta e momentul când AFLI cum va decurge ziua.',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 75,
    replici: [
        { id: 1, speaker: 'andreea',     start: 0,  duration: 7, de: 'Guten Morgen, Frau Müller. Sind Sie wach?', ro: 'Bună dimineața, Doamna Müller. Sunteți trează?' },
        { id: 2, speaker: 'fraumueller', start: 7,  duration: 6, de: 'Mhm... ja, ich bin wach.', ro: 'Mhm... da, sunt trează.' },
        { id: 3, speaker: 'andreea',     start: 13, duration: 7, de: 'Es ist sieben Uhr. Wie haben Sie geschlafen?', ro: 'E ora șapte. Cum ați dormit?' },
        { id: 4, speaker: 'fraumueller', start: 20, duration: 9, de: 'Nicht so gut. Ich bin oft aufgewacht.', ro: 'Nu prea bine. M-am trezit des.' },
        { id: 5, speaker: 'andreea',     start: 29, duration: 8, de: 'Das tut mir leid. Haben Sie Schmerzen?', ro: 'Îmi pare rău. Aveți dureri?' },
        { id: 6, speaker: 'fraumueller', start: 37, duration: 8, de: 'Ja, mein Rücken tut weh. Und mein Knie.', ro: 'Da, mă doare spatele. Și genunchiul.' },
        { id: 7, speaker: 'andreea',     start: 45, duration: 9, de: 'Wie stark? Auf einer Skala von 1 bis 10?', ro: 'Cât de tare? Pe o scală de la 1 la 10?' },
        { id: 8, speaker: 'fraumueller', start: 54, duration: 5, de: 'Vielleicht eine sechs.', ro: 'Poate un șase.' },
        { id: 9, speaker: 'andreea',     start: 59, duration: 9, de: 'Heute machen wir es ruhig. Möchten Sie aufstehen?', ro: 'Azi facem totul liniștit. Doriți să vă ridicați?' },
        { id: 10, speaker: 'fraumueller', start: 68, duration: 7, de: 'Ja, mit Ihrer Hilfe.', ro: 'Da, cu ajutorul dumneavoastră.' }
    ]
};

// ============================================
// DIALOG 2: „Was möchten Sie zum Frühstück?" — mic dejun + medicamente
// 10 replici, ~70 sec
// ============================================
const dialog2Data = {
    id: 'dialog2',
    title: 'Was möchten Sie zum Frühstück?',
    context: 'Frau Müller stă acum la masa din bucătărie, cu pătura pe umeri. Andreea pregătește micul dejun — cana ei preferată cu flori albastre e gata. Pe masă: Brötchen proaspete, Butter, Käse Gouda Mild, Marmelade de cireșe, Honig, ceai negru. Plus planul medicamentelor — Andreea verifică ce pastile la 8:00.',
    audioFile: 'audio/dialog-02.mp3',
    totalDuration: 70,
    replici: [
        { id: 1, speaker: 'andreea',     start: 0,  duration: 6, de: 'Was möchten Sie zum Frühstück, Frau Müller?', ro: 'Ce doriți la mic dejun, Doamna Müller?' },
        { id: 2, speaker: 'fraumueller', start: 6,  duration: 7, de: 'Ein Brötchen mit Butter und Marmelade, bitte.', ro: 'O chiflă cu unt și gem, vă rog.' },
        { id: 3, speaker: 'andreea',     start: 13, duration: 6, de: 'Tee oder Kaffee?', ro: 'Ceai sau cafea?' },
        { id: 4, speaker: 'fraumueller', start: 19, duration: 6, de: 'Tee, schwarz, ohne Zucker.', ro: 'Ceai, negru, fără zahăr.' },
        { id: 5, speaker: 'andreea',     start: 25, duration: 9, de: 'Sehr gut. Und hier sind Ihre Tabletten — Blutdruck und Vitamin D.', ro: 'Foarte bine. Și aici sunt pastilele — tensiune și vitamina D.' },
        { id: 6, speaker: 'fraumueller', start: 34, duration: 6, de: 'Vor oder nach dem Essen?', ro: 'Înainte sau după mâncare?' },
        { id: 7, speaker: 'andreea',     start: 40, duration: 9, de: 'Nach dem Frühstück. Mit einem Glas Wasser.', ro: 'După mic dejun. Cu un pahar de apă.' },
        { id: 8, speaker: 'fraumueller', start: 49, duration: 5, de: 'Schmeckt es Ihnen?', ro: 'Vă place?' },
        { id: 9, speaker: 'andreea',     start: 54, duration: 9, de: 'Ich frühstücke später. Jetzt sind Sie wichtig.', ro: 'Eu iau mic dejunul mai târziu. Acum dumneavoastră sunteți importantă.' },
        { id: 10, speaker: 'fraumueller', start: 63, duration: 7, de: 'Sie sind so gut zu mir, Andreea.', ro: 'Sunteți așa de bună cu mine, Andreea.' }
    ]
};

// ============================================
// BUILD ANIMATED DIALOG HTML
// ============================================
function buildAnimatedDialog(data) {
    const otherLabel = 'Frau Müller';
    const otherAvatar = '👵';
    const otherBadge = '👵 Frau Müller';
    const otherSpeakerCode = 'fraumueller';

    const repliciHTML = data.replici.map(r => {
        const spkrLabel = r.speaker === 'andreea' ? '🧑‍⚕️ Andreea' : otherBadge;
        return `
        <div class="reply-item" data-reply-id="${r.id}" data-speaker="${r.speaker}">
            <div class="reply-header">
                <span class="reply-num">${r.id}.</span>
                <span class="reply-speaker speaker-${r.speaker}">${spkrLabel}</span>
                <button class="btn-replay-reply" onclick="replayReply('${data.id}', ${r.id})">🔁</button>
            </div>
            <div class="reply-de">${r.de}</div>
            <div class="reply-ro">${r.ro}</div>
        </div>`;
    }).join('');

    return `
        <div class="animated-dialog" id="dialog-${data.id}" data-dialog-id="${data.id}">
            <div class="dialog-context">
                <strong>📍 Situația:</strong> ${data.context}
            </div>

            <div class="stage-container">
                <div class="stage">
                    <div class="character-wrapper character-andreea" data-speaker="andreea">
                        <div class="character-avatar">
                            <img src="images/andreea.png" alt="Andreea">
                        </div>
                        <div class="character-label">Andreea</div>
                        <div class="speech-bubble speech-andreea" id="bubble-${data.id}-andreea">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>

                    <div class="character-wrapper character-${otherSpeakerCode}" data-speaker="${otherSpeakerCode}">
                        <div class="character-avatar frau-mueller-avatar-large">
                            <span class="avatar-face" style="font-size:48px;">${otherAvatar}</span>
                        </div>
                        <div class="character-label">${otherLabel}</div>
                        <div class="speech-bubble speech-${otherSpeakerCode}" id="bubble-${data.id}-${otherSpeakerCode}">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>
                </div>

                <div class="dialog-controls">
                    <button class="btn-dialog btn-play" id="btn-play-${data.id}" onclick="playDialog('${data.id}')">▶️ Pornește</button>
                    <button class="btn-dialog btn-pause" id="btn-pause-${data.id}" onclick="pauseDialog('${data.id}')" disabled>⏸ Pauză</button>
                    <button class="btn-dialog btn-reset" id="btn-reset-${data.id}" onclick="resetDialog('${data.id}')">🔄 Reset</button>
                </div>

                <div class="dialog-progress">
                    <div class="progress-bar" id="progress-${data.id}"><div class="progress-fill" id="progress-fill-${data.id}"></div></div>
                    <div class="progress-text" id="progress-text-${data.id}">Replica 0 / ${data.replici.length}</div>
                </div>

                <audio id="audio-${data.id}" preload="none">
                    <source src="${data.audioFile}" type="audio/mpeg">
                </audio>
            </div>

            <details class="transcript-details">
                <summary>📜 Vezi transcriptul complet (bilingv)</summary>
                <div class="transcript-list">
                    ${repliciHTML}
                </div>
            </details>
        </div>
    `;
}

// ============================================
// STATE + PLAY/PAUSE cu currentTime sync
// ============================================
const dialogState = {};

function initDialogState(dialogId) {
    if (!dialogState[dialogId]) {
        dialogState[dialogId] = {
            isPlaying: false,
            currentReply: 0,
            lastDisplayedIdx: -1,
            timeouts: [],
            timeUpdateHandler: null,
            endedHandler: null,
            data: dialogId === 'dialog1' ? dialog1Data : dialog2Data
        };
    }
    return dialogState[dialogId];
}

function playDialog(dialogId) {
    const state = initDialogState(dialogId);
    if (state.isPlaying) return;
    state.isPlaying = true;
    const data = state.data;
    const audio = document.getElementById(`audio-${dialogId}`);
    document.getElementById(`btn-play-${dialogId}`).disabled = true;
    document.getElementById(`btn-pause-${dialogId}`).disabled = false;
    if (audio && !state.timeUpdateHandler) {
        state.timeUpdateHandler = () => {
            if (!state.isPlaying) return;
            const t = audio.currentTime;
            let currentIdx = -1;
            for (let i = 0; i < data.replici.length; i++) {
                if (t >= data.replici[i].start) currentIdx = i;
                else break;
            }
            if (currentIdx >= 0 && currentIdx !== state.lastDisplayedIdx) {
                state.lastDisplayedIdx = currentIdx;
                state.currentReply = currentIdx + 1;
                showReply(dialogId, data.replici[currentIdx]);
                updateProgress(dialogId);
            }
        };
        audio.addEventListener('timeupdate', state.timeUpdateHandler);
        state.endedHandler = () => endDialog(dialogId);
        audio.addEventListener('ended', state.endedHandler);
    }
    if (audio) {
        if (state.currentReply >= data.replici.length) {
            audio.currentTime = 0;
            state.currentReply = 0;
            state.lastDisplayedIdx = -1;
        }
        audio.play().catch(() => { startTimerFallback(dialogId); });
    } else {
        startTimerFallback(dialogId);
    }
}

function startTimerFallback(dialogId) {
    const state = initDialogState(dialogId);
    const data = state.data;
    const startFromReply = state.currentReply;
    const offsetMs = startFromReply > 0 ? data.replici[startFromReply - 1].start * 1000 : 0;
    for (let i = startFromReply; i < data.replici.length; i++) {
        const reply = data.replici[i];
        const delayMs = (reply.start * 1000) - offsetMs;
        const timeout = setTimeout(() => {
            if (!state.isPlaying) return;
            state.lastDisplayedIdx = i;
            showReply(dialogId, reply);
            state.currentReply = i + 1;
            updateProgress(dialogId);
            if (i === data.replici.length - 1) {
                setTimeout(() => endDialog(dialogId), reply.duration * 1000);
            }
        }, delayMs);
        state.timeouts.push(timeout);
    }
}

function showReply(dialogId, reply) {
    const activeChar = document.querySelector(`#dialog-${dialogId} .character-${reply.speaker}`);
    const sameSpeakerContinues = activeChar && activeChar.classList.contains('speaking');
    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => {
        if (c !== activeChar) c.classList.remove('speaking');
    });
    if (activeChar) activeChar.classList.add('speaking');
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => {
        if (!b.id.endsWith('-' + reply.speaker)) b.classList.remove('visible');
    });
    const bubble = document.getElementById(`bubble-${dialogId}-${reply.speaker}`);
    if (!bubble) return;
    if (sameSpeakerContinues) {
        bubble.classList.add('text-fading');
        setTimeout(() => {
            bubble.querySelector('.bubble-de').textContent = reply.de;
            bubble.querySelector('.bubble-ro').textContent = reply.ro;
            bubble.classList.remove('text-fading');
        }, 180);
    } else {
        bubble.querySelector('.bubble-de').textContent = reply.de;
        bubble.querySelector('.bubble-ro').textContent = reply.ro;
        bubble.classList.add('visible');
    }
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const replyItem = document.querySelector(`#dialog-${dialogId} .reply-item[data-reply-id="${reply.id}"]`);
    if (replyItem) replyItem.classList.add('active');
}

function pauseDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state || !state.isPlaying) return;
    state.isPlaying = false;
    state.timeouts.forEach(t => clearTimeout(t));
    state.timeouts = [];
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) audio.pause();
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function resetDialog(dialogId) {
    pauseDialog(dialogId);
    const state = initDialogState(dialogId);
    state.currentReply = 0;
    state.lastDisplayedIdx = -1;
    state.timeouts = [];
    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => c.classList.remove('speaking'));
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => b.classList.remove('visible'));
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) { audio.pause(); audio.currentTime = 0; }
    updateProgress(dialogId);
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function endDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    state.isPlaying = false;
    state.currentReply = state.data.replici.length;
    state.timeouts = [];
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function updateProgress(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    const total = state.data.replici.length;
    const pct = total > 0 ? (state.currentReply / total) * 100 : 0;
    const fill = document.getElementById(`progress-fill-${dialogId}`);
    const text = document.getElementById(`progress-text-${dialogId}`);
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `Replica ${state.currentReply} / ${total}`;
}

function replayReply(dialogId, replyId) {
    const data = (dialogId === 'dialog1') ? dialog1Data : dialog2Data;
    const replyIdx = data.replici.findIndex(r => r.id === replyId);
    if (replyIdx < 0) return;
    const reply = data.replici[replyIdx];
    const state = initDialogState(dialogId);
    state.lastDisplayedIdx = -1;
    showReply(dialogId, reply);
    state.currentReply = replyIdx + 1;
    updateProgress(dialogId);
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) {
        audio.currentTime = reply.start;
        if (audio.paused) {
            state.isPlaying = true;
            audio.play().catch(() => {});
            document.getElementById(`btn-play-${dialogId}`).disabled = true;
            document.getElementById(`btn-pause-${dialogId}`).disabled = false;
        }
    }
}

document.getElementById('dialog1-container').innerHTML = buildAnimatedDialog(dialog1Data);
document.getElementById('dialog2-container').innerHTML = buildAnimatedDialog(dialog2Data);
