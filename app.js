/* ═══════════════════════════════════════════════
   JAPANESE FAREWELL — APP.JS  v2
   Translations · Tour · Interactions · Sound
═══════════════════════════════════════════════ */

// ─────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────
const T = {
  en: {
    doorCaption: 'Click the door to step inside',
    painting1Label: 'Our Memories', painting2Label: 'Together',
    obj1Label: 'Open the box', obj2Label: 'Read the letter',
    obj3Label: 'Check the books', obj4Label: 'A cushion memory',
    obj5Label: 'Game time!', obj6Label: 'Our little bonsai',
    finalBoxLabel: 'Special Gift', lockedMsg: 'Find all hidden messages first! ✦',
    guideIntro:  'Welcome! I\'ll show you around — there are memories hidden just for you. ✨',
    guide1: 'Look at the table — something special might be inside that wooden box! 📦',
    guide2: 'Over by the window… is that a letter? 💌',
    guide3: 'Come see this stack of books in the corner! 📚',
    guide4: 'This cushion holds a warm memory… 🌸',
    guide5: 'Ah — remember our game breaks together? 🎮',
    guide6: 'One last memory on that little shelf… 🌿',
    guideFinal: 'You found them all! The special box is waiting for you. Open it! 🎁',
    guideFree: 'All memories unlocked! Feel free to explore. 🌸',
    msg1Title: '✦ First Impression',
    msg2Title: '✦ More Than a Sensei',
    msg3Title: '✦ Grammar Master',
    msg4Title: '✦ A Close Bond',
    msg5Title: '✦ Game Time',
    msg6Title: '✦ Unforgettable Memories',
    msg1Stamp: 'Day 1',    msg2Stamp: 'Friend',
    msg3Stamp: '文法',     msg4Stamp: 'Bond',
    msg5Stamp: 'Play',     msg6Stamp: '思い出',
    msg1Text: 'The first time I met him, I thought he was a strict teacher, fully focused on the lesson — but that impression changed completely over the days that followed.',
    msg2Text: 'He is very friendly, far more than just a sensei. He gives a warm, genuine friend vibe that makes you feel at ease.',
    msg3Text: 'He excelled at teaching grammar, and his method was truly excellent. Complex rules became clear and simple in his hands.',
    msg4Text: 'He became close to all of us in such a short time. It felt like we had known him for years.',
    msg5Text: 'During break time, we played games together and enjoyed every single moment. Those laughs are something I will never forget.',
    msg6Text: 'I will always cherish the wonderful memories made with him. He is not just a Japanese sensei — he made learning a joy, and left a mark on all of us that will never fade.',
    finalTitle: 'From All of Us — Thank You, Sensei 🌸',
    finalText: [
      'You have been working so hard toward your dream of working in Japan in the animation field — and we believe in you completely. Our heartfelt congratulations and best wishes for that journey ahead.',
      'And finally… thank you, Sensei. Thank you very, very much for everything you have taught us, for the patience you showed, for the laughter we shared. We will never, ever forget you.'
    ],
    signatureFrom: '— With love, from all your students ✦',
    sliderLeft: '🎨 Painting Style', sliderRight: '📷 Original Photo',
    replayBtn: '↺ Replay Guide',
  },
  jp: {
    doorCaption: 'ドアをクリックして中に入ってください',
    painting1Label: '私たちの思い出', painting2Label: 'みんなで',
    obj1Label: '箱を開ける', obj2Label: '手紙を読む',
    obj3Label: '本を見る', obj4Label: 'クッションの記憶',
    obj5Label: 'ゲームタイム！', obj6Label: '小さな盆栽',
    finalBoxLabel: '特別な贈り物', lockedMsg: '隠されたメッセージをすべて見つけてください！ ✦',
    guideIntro:  'ようこそ！この部屋には、あなたへの思い出が隠されています。✨',
    guide1: '机の上を見てみましょう！あの木箱の中に何かあるかもしれません。📦',
    guide2: '窓の近くを見てください…あれは手紙ですか？💌',
    guide3: 'あのコーナーにある本を見てみましょう！📚',
    guide4: 'このクッションには温かい思い出があります…🌸',
    guide5: 'みんなで遊んだ休憩時間を覚えていますか？🎮',
    guide6: 'あの棚に、最後の思い出があります…🌿',
    guideFinal: 'すべて見つけましたね！特別な箱を開けてみてください！🎁',
    guideFree: 'すべての思い出が解放されました！自由に探索してください。🌸',
    msg1Title: '✦ 第一印象', msg2Title: '✦ 先生以上の存在',
    msg3Title: '✦ 文法の達人', msg4Title: '✦ 深い絆',
    msg5Title: '✦ ゲームタイム', msg6Title: '✦ 忘れられない思い出',
    msg1Stamp: '初日', msg2Stamp: '友達',
    msg3Stamp: '文法', msg4Stamp: '絆',
    msg5Stamp: '遊び', msg6Stamp: '思い出',
    msg1Text: '初めて会ったとき、厳しい先生だと思いました。でも、日が経つにつれてその考えはまったく変わりました。',
    msg2Text: '先生はとても親しみやすく、ただの先生以上の存在です。友達のような温かい雰囲気がありました。',
    msg3Text: '先生は文法の教え方が素晴らしかったです。難しいルールも、先生の手にかかれば分かりやすくなりました。',
    msg4Text: '先生はとても短い期間で私たちと仲良くなってくれました。何年も前から知り合いのような気がしました。',
    msg5Text: '休憩時間にはみんなでゲームをして、一つひとつの瞬間を楽しみました。あの笑い声は忘れられません。',
    msg6Text: '先生と一緒に作った素晴らしい思い出は、ずっと大切にします。先生は日本語学習を楽しくしてくださった特別な存在です。',
    finalTitle: 'みんなより——先生、本当にありがとうございました 🌸',
    finalText: [
      '先生はアニメーション分野で日本で働くという夢に向かって努力されています。その夢の実現を心よりお祝い申し上げます。これからの道も、全力で応援しています。',
      '最後に……先生、本当に、本当にありがとうございました。教えていただいたこと、見せていただいた忍耐、共に笑った時間——すべてに感謝しています。先生のことは絶対に忘れません。'
    ],
    signatureFrom: '——愛を込めて、すべての生徒より ✦',
    sliderLeft: '🎨 絵画スタイル', sliderRight: '📷 オリジナル写真',
    replayBtn: '↺ ガイドをもう一度',
  }
};

// ─────────────────────────────────
// STATE
// ─────────────────────────────────
const S = {
  lang:     'en',
  found:    new Set(),
  unlocked: false,
  toured:   false,
  step:     'none',
  doorOpen: false,
  drag:     false,
};

// Sensei floor positions: left% of viewport, bottom px from floor base
// pct = 0 means near the bottom of floor, 100 = near top of floor
const POS = {
  intro: { l: 48, p: 12 },
  1:     { l: 42, p: 12 },  // table
  2:     { l: 11, p: 55 },  // letter (left, upper)
  3:     { l:  7, p: 10 },  // books  (left, lower)
  4:     { l: 69, p: 10 },  // cushion (right, lower)
  5:     { l: 71, p: 55 },  // game (right, upper)
  6:     { l: 78, p: 32 },  // bonsai (right, mid)
  final: { l: 48, p: 72 },  // center, final box
};

const STAMP_CLR = {1:'#8b1a1a',2:'#1a3870',3:'#2a5c2a',4:'#6b1a6b',5:'#c97a10',6:'#1a5c5c'};

// ─────────────────────────────────
// I18N
// ─────────────────────────────────
function tr(k) {
  const v = (T[S.lang] || T.en)[k];
  return (v !== undefined) ? v : (T.en[k] !== undefined ? T.en[k] : k);
}
function applyAll() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = tr(el.dataset.i18n);
    if (!Array.isArray(v)) el.textContent = v;
  });
}
function setLang(lang) {
  if (S.lang === lang) return;
  S.lang = lang;
  document.getElementById('btn-en').classList.toggle('active', lang==='en');
  document.getElementById('btn-jp').classList.toggle('active', lang==='jp');
  applyAll();
  refreshLive();
}
function refreshLive() {
  // bubble
  const bub = document.getElementById('sensei-bubble');
  const txt = document.getElementById('bubble-text');
  if (!bub.classList.contains('hidden') && txt.dataset.key) txt.textContent = tr(txt.dataset.key);
  // msg modal
  const mm = document.getElementById('msg-modal');
  if (!mm.classList.contains('hidden') && mm.dataset.id) renderMsg(+mm.dataset.id);
  // final modal
  if (!document.getElementById('final-modal').classList.contains('hidden')) renderFinal();
}

// ─────────────────────────────────
// AUDIO
// ─────────────────────────────────
let aCtx = null;
function getAC() {
  if (!aCtx) try { aCtx = new (window.AudioContext||window.webkitAudioContext)(); } catch(e) {}
  return aCtx;
}
function wakeAudio() { const c=getAC(); if(c&&c.state==='suspended') c.resume().catch(()=>{}); }

function snd(type) {
  const ctx = getAC(); if (!ctx) return;
  try {
    const t0 = ctx.currentTime;
    if (type==='door') {
      const b=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*.55),ctx.sampleRate);
      const d=b.getChannelData(0);
      for(let i=0;i<d.length;i++) d[i]=(Math.random()*2-1)*Math.exp(-i/d.length*9)*.45;
      const s=ctx.createBufferSource(),g=ctx.createGain();
      s.buffer=b; g.gain.setValueAtTime(.7,t0); g.gain.linearRampToValueAtTime(0,t0+.55);
      s.connect(g); g.connect(ctx.destination); s.start(t0);
    } else if (type==='pop') {
      const o=ctx.createOscillator(),g=ctx.createGain();
      o.type='sine'; o.frequency.setValueAtTime(700,t0); o.frequency.exponentialRampToValueAtTime(220,t0+.14);
      g.gain.setValueAtTime(.35,t0); g.gain.exponentialRampToValueAtTime(.001,t0+.22);
      o.connect(g); g.connect(ctx.destination); o.start(t0); o.stop(t0+.25);
    } else if (type==='chime') {
      [523,784].forEach((f,i)=>{
        const o=ctx.createOscillator(),g=ctx.createGain();
        o.type='triangle'; o.frequency.value=f;
        const s=t0+i*.18;
        g.gain.setValueAtTime(0,s); g.gain.linearRampToValueAtTime(.3,s+.06);
        g.gain.exponentialRampToValueAtTime(.001,s+1.5);
        o.connect(g); g.connect(ctx.destination); o.start(s); o.stop(s+1.6);
      });
    } else if (type==='bubble') {
      const o=ctx.createOscillator(),g=ctx.createGain();
      o.type='sine'; o.frequency.setValueAtTime(1000,t0); o.frequency.exponentialRampToValueAtTime(1350,t0+.06);
      g.gain.setValueAtTime(.12,t0); g.gain.exponentialRampToValueAtTime(.001,t0+.14);
      o.connect(g); g.connect(ctx.destination); o.start(t0); o.stop(t0+.17);
    }
  } catch(e){}
}

// ─────────────────────────────────
// DOOR
// ─────────────────────────────────
function buildStars() {
  const w = document.getElementById('stars-wrap');
  for (let i=0;i<70;i++) {
    const el=document.createElement('div');
    el.className='star';
    const sz=Math.random()*2.5+.5;
    el.style.cssText=`width:${sz}px;height:${sz}px;top:${Math.random()*68}%;left:${Math.random()*100}%;animation-delay:${(Math.random()*5).toFixed(2)}s;animation-duration:${(Math.random()*2+2).toFixed(2)}s`;
    w.appendChild(el);
  }
}
function buildSakura() {
  const w=document.getElementById('sakura-wrap');
  const g=['🌸','🌺','✿','❀'];
  for(let i=0;i<18;i++){
    const el=document.createElement('div');
    el.className='petal-el';
    el.textContent=g[i%g.length];
    el.style.cssText=`left:${(Math.random()*108-4).toFixed(1)}%;font-size:${(9+Math.random()*11).toFixed(1)}px;animation-duration:${(7+Math.random()*10).toFixed(1)}s;animation-delay:${(Math.random()*14).toFixed(1)}s`;
    w.appendChild(el);
  }
}
function openDoor() {
  if (S.doorOpen) return;
  S.doorOpen = true;
  wakeAudio(); snd('door');
  const fw = document.getElementById('fusuma-wrap');
  fw.classList.add('opening');
  fw.onclick = null;
  setTimeout(()=>{
    document.querySelectorAll('.scene').forEach(s=>s.classList.remove('active'));
    setTimeout(()=>{
      document.getElementById('scene-room').classList.add('active');
      setTimeout(startTour, 550);
    },60);
  },900);
}

// ─────────────────────────────────
// PROGRESS
// ─────────────────────────────────
function showProgress() { document.getElementById('progress-bar').classList.remove('hidden'); }
function updateProgress() {
  const n = S.found.size;
  document.getElementById('petal-count').textContent = n+'/6';
  document.querySelectorAll('.petal').forEach(p=>{
    if(S.found.has(+p.dataset.msg)) p.classList.add('found');
  });
  if (n===6 && !S.unlocked) unlockBox();
}
function unlockBox() {
  S.unlocked = true;
  document.getElementById('final-box').classList.add('unlocked');
}

// ─────────────────────────────────
// SENSEI POSITION
// ─────────────────────────────────
function moveSensei(step) {
  const el = document.getElementById('sensei-char');
  const pos = POS[step] || POS.intro;
  el.classList.add('walking');
  el.style.left = pos.l + '%';
  // Floor occupies ~49% of viewport height from ~51% down
  const floorH = window.innerHeight * 0.49;
  el.style.bottom = Math.round((pos.p / 100) * floorH * 0.88) + 'px';
  setTimeout(()=>el.classList.remove('walking'), 950);
}

// ─────────────────────────────────
// SPEECH BUBBLE
// ─────────────────────────────────
function showBubble(key) {
  const bub = document.getElementById('sensei-bubble');
  const txt = document.getElementById('bubble-text');
  txt.dataset.key = key;
  txt.textContent = tr(key);
  snd('bubble');
  bub.classList.remove('hidden');
}
function hideBubble() { document.getElementById('sensei-bubble').classList.add('hidden'); }

// ─────────────────────────────────
// GUIDED TOUR
// ─────────────────────────────────
const TOUR = [
  {step:'intro', key:'guideIntro', auto:3400},
  {step:1, key:'guide1', auto:0},
  {step:2, key:'guide2', auto:0},
  {step:3, key:'guide3', auto:0},
  {step:4, key:'guide4', auto:0},
  {step:5, key:'guide5', auto:0},
  {step:6, key:'guide6', auto:0},
  {step:'final', key:'guideFinal', auto:0},
];
let tIdx=0, tActive=false;

function startTour() {
  showProgress();
  tActive=true; tIdx=0;
  runStep(0);
}
function runStep(i) {
  if (i>=TOUR.length){freeMode();return;}
  const e=TOUR[i];
  S.step=e.step;
  moveSensei(e.step);
  setTimeout(()=>{
    showBubble(e.key);
    if(e.auto>0) setTimeout(()=>{hideBubble();tIdx=i+1;runStep(i+1);},e.auto);
  },950);
}
function advanceTour(id) {
  if (!tActive) return;
  const cur=TOUR[tIdx];
  if (cur && cur.step===id) {
    hideBubble();
    setTimeout(()=>{tIdx++;runStep(tIdx);},700);
  }
}
function freeMode() {
  tActive=false; S.toured=true;
  showBubble('guideFree');
  setTimeout(hideBubble,3800);
  document.getElementById('free-bar').classList.remove('hidden');
}
function replayTour() {
  document.getElementById('free-bar').classList.add('hidden');
  hideBubble(); tActive=true; tIdx=0; runStep(0);
}

// ─────────────────────────────────
// OBJECT CLICKS
// ─────────────────────────────────
function clickObject(id) {
  wakeAudio();
  if (tActive && S.step!==id) {
    // Bounce sensei to hint
    const c=document.getElementById('sensei-char');
    c.style.transition='none';
    c.style.transform='translateX(-50%) translateY(-10px)';
    setTimeout(()=>{c.style.transition='';c.style.transform='';},240);
    return;
  }
  snd('pop');
  if (!S.found.has(id)) {
    S.found.add(id);
    document.getElementById('obj-'+id)?.classList.add('found-obj');
    updateProgress();
  }
  openMsg(id);
  advanceTour(id);
}

function openMsg(id) {
  renderMsg(id);
  document.getElementById('msg-modal').dataset.id=id;
  document.getElementById('msg-modal').classList.remove('hidden');
}
function renderMsg(id) {
  const stmp = document.getElementById('msg-stamp');
  const clr  = STAMP_CLR[id]||'#8b1a1a';
  stmp.textContent=tr('msg'+id+'Stamp');
  stmp.style.color=clr; stmp.style.borderColor=clr;
  stmp.style.background=clr+'1a';
  document.getElementById('msg-title').textContent=tr('msg'+id+'Title');
  document.getElementById('msg-body').textContent=tr('msg'+id+'Text');
}

// ─────────────────────────────────
// FINAL BOX
// ─────────────────────────────────
function clickFinalBox() {
  wakeAudio();
  if (!S.unlocked) {
    showBubble('lockedMsg');
    const b=document.getElementById('final-box');
    b.classList.add('shake');
    setTimeout(()=>{b.classList.remove('shake');hideBubble();},2800);
    return;
  }
  snd('chime');
  renderFinal();
  document.getElementById('final-modal').classList.remove('hidden');
  launchConfetti();
  if (!S.toured) setTimeout(freeMode,600);
}
function renderFinal() {
  document.getElementById('final-title').textContent=tr('finalTitle');
  document.getElementById('final-from').textContent=tr('signatureFrom');
  const bd=document.getElementById('final-body');
  bd.innerHTML='';
  const paras=tr('finalText');
  (Array.isArray(paras)?paras:[paras]).forEach((p,i)=>{
    const el=document.createElement('p');
    el.textContent=p;
    if(i>0) el.style.marginTop='14px';
    bd.appendChild(el);
  });
}

// ─────────────────────────────────
// MODALS
// ─────────────────────────────────
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
function closeOnBg(e,id) { if(e.target.id===id) closeModal(id); }

// ─────────────────────────────────
// CONFETTI
// ─────────────────────────────────
const CC=['#c9963a','#e8c468','#8b1a1a','#c0392b','#1a3870','#2d8a5a','#9b2980','#f0c030','#ff6b6b','#4ecdc4'];
function launchConfetti() {
  const z=document.getElementById('confetti-zone');
  z.innerHTML='';
  for(let i=0;i<72;i++){
    const b=document.createElement('div');
    b.className='confetti-bit';
    const cx=((Math.random()-.5)*320).toFixed(0);
    b.style.cssText=`background:${CC[Math.floor(Math.random()*CC.length)]};left:${(15+Math.random()*70).toFixed(1)}%;width:${(4+Math.random()*8).toFixed(1)}px;height:${(4+Math.random()*8).toFixed(1)}px;border-radius:${Math.random()>.45?'50%':'2px'};--cx:${cx}px;animation-duration:${(1.4+Math.random()*2).toFixed(2)}s;animation-delay:${(Math.random()*.6).toFixed(2)}s`;
    z.appendChild(b);
  }
}

// ─────────────────────────────────
// PAINTING SLIDER
// ─────────────────────────────────
function openPainting(id) {
  const src = 'references/painting_'+ id +'.jpeg';
  document.getElementById('ba-img-art').src  = src;
  document.getElementById('ba-img-orig').src = src;
  setSlider(50);
  document.getElementById('painting-overlay').classList.remove('hidden');
  initSlider();
}
function closePainting() {
  document.getElementById('painting-overlay').classList.add('hidden');
  killSlider();
}
function setSlider(pct) {
  pct=Math.max(3,Math.min(97,pct));
  document.getElementById('ba-divider').style.left=pct+'%';
  document.getElementById('ba-right').style.clipPath=`inset(0 0 0 ${pct}%)`;
}
let sliderKill=null;
function initSlider() {
  killSlider();
  const w=document.getElementById('ba-wrap');
  const h=document.getElementById('ba-handle');
  const pct=e=>{
    const r=w.getBoundingClientRect();
    const cx=e.touches?e.touches[0].clientX:e.clientX;
    return ((cx-r.left)/r.width)*100;
  };
  const dn=()=>{S.drag=true;document.body.style.userSelect='none';};
  const up=()=>{S.drag=false;document.body.style.userSelect='';};
  const mv=e=>{if(!S.drag)return;e.preventDefault();setSlider(pct(e));};
  const tap=e=>{if(e.target===h||h.contains(e.target))return;setSlider(pct(e));};
  h.addEventListener('mousedown',dn);
  h.addEventListener('touchstart',dn,{passive:true});
  document.addEventListener('mousemove',mv);
  document.addEventListener('touchmove',mv,{passive:false});
  document.addEventListener('mouseup',up);
  document.addEventListener('touchend',up);
  w.addEventListener('click',tap);
  sliderKill=()=>{
    h.removeEventListener('mousedown',dn);
    h.removeEventListener('touchstart',dn);
    document.removeEventListener('mousemove',mv);
    document.removeEventListener('touchmove',mv);
    document.removeEventListener('mouseup',up);
    document.removeEventListener('touchend',up);
    w.removeEventListener('click',tap);
  };
}
function killSlider(){if(sliderKill){sliderKill();sliderKill=null;}S.drag=false;}

// ─────────────────────────────────
// INIT
// ─────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  buildStars();
  buildSakura();
  applyAll();
  document.getElementById('btn-en').classList.add('active');

  // Position sensei off-screen initially
  const sen=document.getElementById('sensei-char');
  sen.style.left='110%';
  sen.style.bottom='0px';

  // Keyboard door open
  document.getElementById('fusuma-wrap').addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){e.preventDefault();openDoor();}
  });
});
