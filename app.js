/* ═══════════════════════════════════════════════════
   JAPANESE FAREWELL GIFT — APP.JS
   All logic, translations, animations, interactions
═══════════════════════════════════════════════════ */

// ─────────────────────────────────────────────
// TRANSLATION STRINGS (single source of truth)
// ─────────────────────────────────────────────
const T = {
  en: {
    // Door
    doorCaption:   'Click the door to step inside',

    // Painting labels
    painting1Label: 'Our Memories',
    painting2Label: 'Together',

    // Object hints (short labels)
    obj1Label: 'Open the box',
    obj2Label: 'Read the letter',
    obj3Label: 'Check the books',
    obj4Label: 'A cushion memory',
    obj5Label: 'Game time!',
    obj6Label: 'Our little bonsai',

    // Final box
    finalBoxLabel: 'Special Box',
    lockedMsg:     'Find all the hidden messages first! ✦',

    // Sensei guide speech
    guideIntro:    'Welcome! Let me show you around… there are memories hidden in this room for you. ✨',
    guide1:        "Let's see what's on the table! Something special might be inside that box. 📦",
    guide2:        "Look over by the window… is that a letter? 💌",
    guide3:        "Come see this stack of books in the corner! 📚",
    guide4:        "This cushion holds a warm memory… 🌸",
    guide5:        "Ah — remember our game breaks together? 🎮",
    guide6:        "One last memory on this little shelf… 🌿",
    guideFinal:    "Now that you've found them all… the special box is waiting for you. Open it! 🎁",
    guideFree:     "All memories are now unlocked! Feel free to explore. 🌸",

    // Message titles
    msg1Title: '✦ First Impression',
    msg2Title: '✦ More Than a Sensei',
    msg3Title: '✦ Grammar Master',
    msg4Title: '✦ A Close Bond',
    msg5Title: '✦ Game Time',
    msg6Title: '✦ Unforgettable Memories',

    // Message stamps (short label shown on stamp)
    msg1Stamp: 'Day 1',
    msg2Stamp: 'Friend',
    msg3Stamp: '文法',
    msg4Stamp: 'Bond',
    msg5Stamp: 'Play',
    msg6Stamp: '思い出',

    // Message bodies (the actual content)
    msg1Text: 'The first time I met him, I thought he was a strict teacher, fully focused on the lesson — but that thought changed completely over the days that followed.',
    msg2Text: 'He is very friendly, far more than just a sensei. He gives me a friend vibe — warm, genuine, and easy to talk to.',
    msg3Text: 'He excelled in grammar, and his way of teaching it was truly excellent. Complex rules became clear and simple in his hands.',
    msg4Text: 'He became close to us in such a short period of time. It felt like we had known him for years.',
    msg5Text: 'During break time, we played games together and enjoyed every single moment. Those laughs are something I will never forget.',
    msg6Text: 'I will always cherish the wonderful memories I made with him. He is not just my Japanese sensei — he is someone who made learning Japanese a joy, and left a mark on all of us that will never fade.',

    // Final message
    finalTitle:  'From All of Us — Thank You, Sensei 🌸',
    finalText:   'You have been working so hard toward your dream of working in Japan in the animation field — and we believe in you completely. Our heartfelt congratulations and best wishes for that journey ahead.\n\nAnd finally… thank you, Sensei. Thank you very, very much for everything you have taught us, for the patience you showed us, for the laughter we shared. We will never, ever forget you.',
    signatureFrom: '— With love, from all your students ✦',

    // Before/after slider
    sliderLeft:  '🎨 Painting Style',
    sliderRight: '📷 Original Photo',

    // Free mode
    replayBtn: '↺ Replay Guide',
  },

  jp: {
    // Door
    doorCaption:   'ドアをクリックして中に入ってください',

    // Painting labels
    painting1Label: '私たちの思い出',
    painting2Label: 'みんなで',

    // Object hints
    obj1Label: '箱を開ける',
    obj2Label: '手紙を読む',
    obj3Label: '本を見る',
    obj4Label: 'クッションの記憶',
    obj5Label: 'ゲームタイム！',
    obj6Label: '小さな盆栽',

    // Final box
    finalBoxLabel: '特別な箱',
    lockedMsg:     'まず、隠されたメッセージをすべて見つけてください！ ✦',

    // Sensei guide speech
    guideIntro:    'ようこそ！この部屋には、あなたへの思い出が隠されています。一緒に見てみましょう！✨',
    guide1:        '机の上を見てみましょう！あの箱の中に何か特別なものがあるかもしれません。📦',
    guide2:        '窓の近くを見てください…あれは手紙ですか？💌',
    guide3:        'あのコーナーにある本の山を見てみましょう！📚',
    guide4:        'このクッションには温かい思い出があります…🌸',
    guide5:        'ああ——みんなで遊んだ休憩時間を覚えていますか？🎮',
    guide6:        'あの棚に、最後の思い出があります…🌿',
    guideFinal:    'すべて見つけましたね…特別な箱があなたを待っています。開けてみてください！🎁',
    guideFree:     'すべての思い出が解放されました！自由に探索してください。🌸',

    // Message titles
    msg1Title: '✦ 第一印象',
    msg2Title: '✦ 先生以上の存在',
    msg3Title: '✦ 文法の達人',
    msg4Title: '✦ 深い絆',
    msg5Title: '✦ ゲームタイム',
    msg6Title: '✦ 忘れられない思い出',

    // Message stamps
    msg1Stamp: '初日',
    msg2Stamp: '友達',
    msg3Stamp: '文法',
    msg4Stamp: '絆',
    msg5Stamp: '遊び',
    msg6Stamp: '思い出',

    // Message bodies
    msg1Text: '初めて会ったとき、授業に真剣に取り組む厳しい先生だと思いました。でも、日が経つにつれて、その考えはまったく変わっていきました。',
    msg2Text: '先生はとても親しみやすく、ただの先生以上の存在です。友達のような温かい雰囲気があり、気軽に話せる方でした。',
    msg3Text: '先生は文法がとても得意で、その教え方は本当に素晴らしかったです。難しいルールも、先生の手にかかれば分かりやすくなりました。',
    msg4Text: '先生はとても短い期間で私たちと仲良くなってくれました。まるで何年も前から知り合いだったような気がしました。',
    msg5Text: '休憩時間にはみんなでゲームをして、一つひとつの瞬間を楽しみました。あの笑い声は、ずっと忘れられません。',
    msg6Text: '先生と一緒に作った素晴らしい思い出は、これからもずっと大切にします。先生は日本語の先生というだけでなく、日本語学習を楽しく、忘れられないものにしてくださった特別な存在です。',

    // Final message
    finalTitle:  'みんなより——先生、本当にありがとうございました 🌸',
    finalText:   '先生はアニメーション分野で日本で働くという夢に向かって、一生懸命努力されています。その夢の実現を心よりお祝い申し上げます。これからの道も、全力で応援しています。\n\n最後に……先生、本当に、本当にありがとうございました。教えていただいたこと、見せていただいた忍耐、共に笑った時間——すべてに感謝しています。先生のことは、絶対に忘れません。',
    signatureFrom: '——愛を込めて、すべての生徒より ✦',

    // Before/after slider
    sliderLeft:  '🎨 絵画スタイル',
    sliderRight: '📷 オリジナル写真',

    // Free mode
    replayBtn: '↺ ガイドをもう一度',
  }
};


// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
const state = {
  lang:          'en',
  scene:         'door',
  found:         new Set(),       // Set<number 1-6>
  finalUnlocked: false,
  finalViewed:   false,
  tourStep:      0,               // 0=intro, 1-6=message spots, 7=final
  tourActive:    false,
  tourComplete:  false,
  doorOpened:    false,
  sliderDragging:false,
};

// Sensei positions for each tour step { left: %, bottom: % (of floor height) }
const SPOTS = {
  intro:  { left: 47, floor: false, wallPct: 90 },  // in floor but high
  1:      { left: 40, floor: true,  pct: 20 },       // table center
  2:      { left: 12, floor: true,  pct: 60 },       // letter (left, mid)
  3:      { left:  8, floor: true,  pct: 20 },       // books (left corner, low)
  4:      { left: 68, floor: true,  pct: 20 },       // cushion (right, low)
  5:      { left: 70, floor: true,  pct: 60 },       // game (right, mid)
  6:      { left: 76, floor: true,  pct: 45 },       // bonsai (right wall)
  final:  { left: 47, floor: true,  pct: 80 },       // center, near final box
};

// ─────────────────────────────────────────────
// UTILITY — TRANSLATION
// ─────────────────────────────────────────────
function t(key) {
  return (T[state.lang] && T[state.lang][key]) || (T.en[key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
}

function setLang(lang) {
  if (state.lang === lang) return;
  state.lang = lang;

  // Update toggle button states
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-jp').classList.toggle('active', lang === 'jp');
  document.getElementById('btn-en').setAttribute('aria-pressed', lang === 'en');
  document.getElementById('btn-jp').setAttribute('aria-pressed', lang === 'jp');

  // Apply all static translations
  applyTranslations();

  // Update dynamic live text (speech bubble, open modal)
  updateDynamicText();
}

function updateDynamicText() {
  // Re-render speech bubble if visible
  const bubble = document.getElementById('sensei-bubble');
  const bubbleText = document.getElementById('bubble-text');
  if (!bubble.classList.contains('hidden') && bubbleText.dataset.key) {
    bubbleText.textContent = t(bubbleText.dataset.key);
  }

  // Re-render open message modal
  const msgModal = document.getElementById('msg-modal');
  if (!msgModal.classList.contains('hidden') && msgModal.dataset.msgId) {
    const id = parseInt(msgModal.dataset.msgId);
    document.getElementById('msg-title').textContent = t('msg' + id + 'Title');
    document.getElementById('msg-body').textContent  = t('msg' + id + 'Text');
    document.getElementById('msg-stamp').textContent = t('msg' + id + 'Stamp');
  }

  // Re-render open final modal
  const finalModal = document.getElementById('final-modal');
  if (!finalModal.classList.contains('hidden')) {
    document.getElementById('final-title').textContent = t('finalTitle');
    document.getElementById('final-body').textContent  = t('finalText').replace(/\\n/g, '\n');
    document.getElementById('final-from').textContent  = t('signatureFrom');
  }
}


// ─────────────────────────────────────────────
// SOUND (Web Audio API — fail silently)
// ─────────────────────────────────────────────
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e) { return null; }
  }
  return audioCtx;
}

function playSound(type) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  try {
    const t0 = ctx.currentTime;
    if (type === 'door') {
      // Wooden slide swish
      const buf = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        const t = i / ctx.sampleRate;
        data[i] = (Math.random() * 2 - 1) * Math.exp(-t * 8) * 0.4;
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.6, t0);
      gain.gain.linearRampToValueAtTime(0, t0 + 0.5);
      src.connect(gain);
      gain.connect(ctx.destination);
      src.start(t0);
    } else if (type === 'pop') {
      // Soft box-open pop
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, t0);
      osc.frequency.exponentialRampToValueAtTime(200, t0 + 0.12);
      gain.gain.setValueAtTime(0.4, t0);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + 0.2);
    } else if (type === 'chime') {
      // Final message chime (two notes)
      [523, 784].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, t0 + i * 0.15);
        gain.gain.linearRampToValueAtTime(0.35, t0 + i * 0.15 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, t0 + i * 0.15 + 1.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t0 + i * 0.15);
        osc.stop(t0 + i * 0.15 + 1.3);
      });
    } else if (type === 'bubble') {
      // Soft speech bubble appear
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, t0);
      osc.frequency.exponentialRampToValueAtTime(1200, t0 + 0.06);
      gain.gain.setValueAtTime(0.15, t0);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + 0.15);
    }
  } catch(e) { /* fail silently */ }
}


// ─────────────────────────────────────────────
// SCENE TRANSITIONS
// ─────────────────────────────────────────────
function showScene(id) {
  document.querySelectorAll('.scene').forEach(s => {
    s.classList.remove('active');
  });
  setTimeout(() => {
    const target = document.getElementById('scene-' + id);
    if (target) target.classList.add('active');
    state.scene = id;
  }, 50);
}


// ─────────────────────────────────────────────
// SCENE 1 — DOOR
// ─────────────────────────────────────────────
function buildStars() {
  const wrap = document.getElementById('stars-wrap');
  for (let i = 0; i < 60; i++) {
    const s = document.createElement('div');
    s.className = 'star-dot';
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      top:${Math.random()*70}%;
      left:${Math.random()*100}%;
      animation-delay:${Math.random()*4}s;
      animation-duration:${Math.random()*2+2}s;
    `;
    wrap.appendChild(s);
  }
}

function buildSakura() {
  const wrap = document.getElementById('sakura-wrap');
  const petals = ['🌸','🌺','🌹','✿'];
  for (let i = 0; i < 14; i++) {
    const p = document.createElement('div');
    p.className = 'sakura-petal';
    p.textContent = petals[i % petals.length];
    p.style.cssText = `
      left:${Math.random()*100}%;
      font-size:${10 + Math.random()*10}px;
      animation-duration:${6 + Math.random()*8}s;
      animation-delay:${Math.random()*10}s;
    `;
    wrap.appendChild(p);
  }
}

function openDoor() {
  if (state.doorOpened) return;
  state.doorOpened = true;

  playSound('door');

  const fusuma = document.getElementById('fusuma-wrap');
  fusuma.classList.add('opening');
  fusuma.style.cursor = 'default';
  fusuma.onclick = null;

  // After door slides, transition to room
  setTimeout(() => {
    showScene('room');
    setTimeout(startTour, 500);
  }, 800);
}


// ─────────────────────────────────────────────
// SCENE 2 — ROOM SETUP
// ─────────────────────────────────────────────
function showProgressIndicator() {
  document.getElementById('progress-indicator').classList.remove('hidden');
}

function updateProgress() {
  const count = state.found.size;
  document.getElementById('prog-count').textContent = count + '/6';

  document.querySelectorAll('.flower-dot').forEach(dot => {
    const id = parseInt(dot.dataset.msg);
    if (state.found.has(id)) {
      dot.classList.add('found');
    }
  });

  // Check unlock
  if (count === 6 && !state.finalUnlocked) {
    unlockFinalBox();
  }
}

function unlockFinalBox() {
  state.finalUnlocked = true;
  const box = document.getElementById('final-box');
  box.classList.add('unlocked');
}


// ─────────────────────────────────────────────
// SENSEI GUIDE — TOUR
// ─────────────────────────────────────────────
function setSenseiPosition(step) {
  const char = document.getElementById('sensei-char');
  const spot = SPOTS[step] || SPOTS.intro;

  // Compute bottom% based on floor height
  const floorEl = document.querySelector('.room-floor');
  const floorH = floorEl ? floorEl.offsetHeight : 200;
  const totalH = window.innerHeight;
  const floorTop = floorEl ? floorEl.getBoundingClientRect().top : totalH * 0.5;

  char.classList.add('walking');

  // left as % of viewport
  char.style.left = spot.left + '%';

  // Calculate bottom position relative to room-root
  if (spot.floor && floorEl) {
    // pct = percentage from bottom of floor
    const bottomFromFloor = (spot.pct / 100) * floorH;
    const bottomFromBase  = (totalH - floorTop - floorH) + bottomFromFloor;
    char.style.bottom = bottomFromBase + 'px';
  } else {
    char.style.bottom = '0px';
  }

  setTimeout(() => {
    char.classList.remove('walking');
  }, 850);
}

function showSpeechBubble(key) {
  const bubble   = document.getElementById('sensei-bubble');
  const textEl   = document.getElementById('bubble-text');
  textEl.dataset.key = key;
  textEl.textContent = t(key);
  playSound('bubble');
  bubble.classList.remove('hidden');
}

function hideSpeechBubble() {
  document.getElementById('sensei-bubble').classList.add('hidden');
}

// Tour sequence steps
const TOUR_STEPS = [
  // step, guideKey, wait before next (ms if auto-proceed, 0=wait for interaction)
  { step: 'intro', guide: 'guideIntro', autoMs: 3000 },
  { step: 1,       guide: 'guide1',     autoMs: 0 },   // wait for object click
  { step: 2,       guide: 'guide2',     autoMs: 0 },
  { step: 3,       guide: 'guide3',     autoMs: 0 },
  { step: 4,       guide: 'guide4',     autoMs: 0 },
  { step: 5,       guide: 'guide5',     autoMs: 0 },
  { step: 6,       guide: 'guide6',     autoMs: 0 },
  { step: 'final', guide: 'guideFinal', autoMs: 0 },
];

let tourStepIdx = 0;

function startTour() {
  showProgressIndicator();
  state.tourActive  = true;
  tourStepIdx       = 0;
  runTourStep(0);
}

function runTourStep(idx) {
  if (idx >= TOUR_STEPS.length) {
    enterFreeMode();
    return;
  }

  const step = TOUR_STEPS[idx];
  state.tourStep = step.step;

  setSenseiPosition(step.step);

  setTimeout(() => {
    showSpeechBubble(step.guide);

    if (step.autoMs > 0) {
      setTimeout(() => {
        hideSpeechBubble();
        tourStepIdx = idx + 1;
        runTourStep(idx + 1);
      }, step.autoMs);
    }
    // Otherwise waits for user interaction
  }, 900);
}

function advanceTourAfterClick(msgId) {
  // Find the step for this message id
  const expectedStep = TOUR_STEPS.findIndex(s => s.step === msgId);
  if (state.tourActive && tourStepIdx === expectedStep) {
    hideSpeechBubble();
    setTimeout(() => {
      tourStepIdx++;
      runTourStep(tourStepIdx);
    }, 800);
  }
}

function enterFreeMode() {
  state.tourActive   = false;
  state.tourComplete = true;
  showSpeechBubble('guideFree');
  setTimeout(hideSpeechBubble, 3500);
  document.getElementById('free-mode-bar').classList.remove('hidden');
}

function replayTour() {
  document.getElementById('free-mode-bar').classList.add('hidden');
  tourStepIdx = 0;
  state.tourActive = true;
  runTourStep(0);
}


// ─────────────────────────────────────────────
// OBJECT INTERACTIONS
// ─────────────────────────────────────────────
const STAMP_COLORS = {
  1: '#8b1a1a', // deep red
  2: '#1a3870', // navy
  3: '#2a5c2a', // forest green
  4: '#6b1a6b', // purple
  5: '#c97a10', // amber
  6: '#1a5c5c', // teal
};

function clickObject(id) {
  // Wake audio context on first interaction
  const ctx = getAudioCtx();
  if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});

  // If tour is active and this isn't the expected object, gently hint
  if (state.tourActive && state.tourStep !== id) {
    // Bounce the sensei slightly to hint
    const char = document.getElementById('sensei-char');
    char.style.transition = 'none';
    char.style.transform  = 'translateX(-50%) translateY(-8px)';
    setTimeout(() => {
      char.style.transition = '';
      char.style.transform  = '';
    }, 200);
    return;
  }

  playSound('pop');

  // Mark as found
  if (!state.found.has(id)) {
    state.found.add(id);
    // Mark obj as found visually
    const objEl = document.getElementById('obj-' + id);
    if (objEl) objEl.classList.add('found-obj');
    updateProgress();
  }

  openMessageModal(id);

  // Advance tour
  advanceTourAfterClick(id);
}

function openMessageModal(id) {
  const modal  = document.getElementById('msg-modal');
  const stamp  = document.getElementById('msg-stamp');
  const title  = document.getElementById('msg-title');
  const body   = document.getElementById('msg-body');

  stamp.textContent = t('msg' + id + 'Stamp');
  stamp.style.color       = STAMP_COLORS[id] || '#8b1a1a';
  stamp.style.borderColor = STAMP_COLORS[id] || '#8b1a1a';
  stamp.style.background  = (STAMP_COLORS[id] || '#8b1a1a') + '15';

  title.textContent = t('msg' + id + 'Title');
  body.textContent  = t('msg' + id + 'Text');

  modal.dataset.msgId = id;
  modal.classList.remove('hidden');
}

function clickFinalBox() {
  // Wake audio context
  const ctx = getAudioCtx();
  if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});

  if (!state.finalUnlocked) {
    // Show locked prompt
    showSpeechBubble('lockedMsg');
    // Also shake the box
    const box = document.getElementById('final-box');
    box.style.animation = 'card-in 0.4s ease';
    setTimeout(() => box.style.animation = '', 400);
    setTimeout(hideSpeechBubble, 2800);
    return;
  }

  playSound('chime');
  state.finalViewed = true;
  openFinalModal();
}

function openFinalModal() {
  const modal = document.getElementById('final-modal');
  document.getElementById('final-title').textContent = t('finalTitle');

  // Handle newlines in final text
  const bodyEl = document.getElementById('final-body');
  bodyEl.innerHTML = '';
  t('finalText').split('\\n').join('\n').split('\n').forEach((para, i) => {
    if (para.trim()) {
      const p = document.createElement('p');
      p.textContent = para;
      if (i > 0) p.style.marginTop = '12px';
      bodyEl.appendChild(p);
    }
  });

  document.getElementById('final-from').textContent = t('signatureFrom');
  modal.classList.remove('hidden');

  // Confetti!
  launchConfetti();

  // Enter free mode if tour was active
  if (state.tourActive || !state.tourComplete) {
    setTimeout(() => enterFreeMode(), 500);
  }
}


// ─────────────────────────────────────────────
// MODALS — CLOSE
// ─────────────────────────────────────────────
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

function closeOnBackdrop(e, id) {
  if (e.target === document.getElementById(id)) {
    closeModal(id);
  }
}


// ─────────────────────────────────────────────
// CONFETTI
// ─────────────────────────────────────────────
const CONFETTI_COLORS = [
  '#c9963a','#e8c468','#8b1a1a','#c0392b',
  '#1a3870','#2d8a5a','#9b2980','#f0c030',
];

function launchConfetti() {
  const zone = document.getElementById('confetti-zone');
  zone.innerHTML = '';
  for (let i = 0; i < 60; i++) {
    const bit = document.createElement('div');
    bit.className = 'confetti-bit';
    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    const cx    = (Math.random() - 0.5) * 300;
    bit.style.cssText = `
      background: ${color};
      left: ${20 + Math.random() * 60}%;
      width: ${4 + Math.random() * 8}px;
      height: ${4 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      --cx: ${cx}px;
      animation-duration: ${1.5 + Math.random() * 2}s;
      animation-delay: ${Math.random() * 0.5}s;
    `;
    zone.appendChild(bit);
  }
}


// ─────────────────────────────────────────────
// PAINTINGS — BEFORE/AFTER SLIDER
// ─────────────────────────────────────────────
const PAINTING_SRCS = {
  1: 'references/painting_1.jpeg',
  2: 'references/painting_2.jpeg',
};

function openPainting(id) {
  const overlay  = document.getElementById('painting-overlay');
  const artImg   = document.getElementById('ba-img-art');
  const origImg  = document.getElementById('ba-img-orig');
  const src      = PAINTING_SRCS[id];

  artImg.src  = src;
  origImg.src = src;

  // Reset slider to center
  setSliderPosition(50);
  overlay.classList.remove('hidden');

  // Init drag
  initSlider();
}

function closePainting() {
  document.getElementById('painting-overlay').classList.add('hidden');
  cleanupSlider();
}

function setSliderPosition(pct) {
  pct = Math.max(2, Math.min(98, pct));
  const divider = document.getElementById('ba-divider');
  divider.style.left = pct + '%';
  // Clip the original (right) side
  document.getElementById('ba-right').style.clipPath = `inset(0 0 0 ${pct}%)`;
}

let sliderCleanup = null;

function initSlider() {
  const wrap    = document.getElementById('ba-wrap');
  const handle  = document.getElementById('ba-handle');

  function getX(e) {
    const rect = wrap.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    return ((clientX - rect.left) / rect.width) * 100;
  }

  function onMove(e) {
    if (!state.sliderDragging) return;
    e.preventDefault();
    setSliderPosition(getX(e));
  }

  function onDown(e) {
    state.sliderDragging = true;
    document.body.style.userSelect = 'none';
  }

  function onUp() {
    state.sliderDragging = false;
    document.body.style.userSelect = '';
  }

  // Also allow clicking/tapping anywhere on the wrap to set position
  function onWrapClick(e) {
    if (e.target === handle || handle.contains(e.target)) return;
    setSliderPosition(getX(e));
  }

  handle.addEventListener('mousedown',  onDown);
  handle.addEventListener('touchstart', onDown, { passive: true });
  document.addEventListener('mousemove', onMove);
  document.addEventListener('touchmove', onMove, { passive: false });
  document.addEventListener('mouseup',   onUp);
  document.addEventListener('touchend',  onUp);
  wrap.addEventListener('click', onWrapClick);

  sliderCleanup = () => {
    handle.removeEventListener('mousedown',  onDown);
    handle.removeEventListener('touchstart', onDown);
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('mouseup',   onUp);
    document.removeEventListener('touchend',  onUp);
    wrap.removeEventListener('click', onWrapClick);
  };
}

function cleanupSlider() {
  if (sliderCleanup) { sliderCleanup(); sliderCleanup = null; }
  state.sliderDragging = false;
}


// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Build atmospheric elements
  buildStars();
  buildSakura();

  // Apply initial translations
  applyTranslations();

  // Set initial lang button state
  document.getElementById('btn-en').classList.add('active');

  // Keyboard support for door
  document.getElementById('fusuma-wrap')
    .addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openDoor();
    });

  // Make sensei character start in room but positioned off-screen right
  // (will be moved on tour start)
  const sensei = document.getElementById('sensei-char');
  sensei.style.left   = '110%';
  sensei.style.bottom = '0px';
});
