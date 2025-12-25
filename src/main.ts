import './style.css'

interface Scholar {
  name: string;
  specialization: string;
  img: string;
  thesis: string;
}

interface Achievement {
  title: string;
  event: string;
  recipient: string;
  date: string;
  icon: string;
  desc: string;
  img: string; 
}

interface Event {
  year: string;
  title: string;
  desc: string;
  img: string;
}

const scholars: Scholar[] = [
  { 
    name: "Java Maulana", 
    specialization: "Java", 
    img: "/img/Java.jpg", 
    thesis: "Patah, rapuh, luruh, sembuh, tumbuh." 
  },
  { 
    name: "Naila Farizka Azzahra", 
    specialization: "Naila", 
    img: "/img/Naila.jpg", 
    thesis: "She likes editing" 
  },
  { 
    name: "Mutiara Aviva", 
    specialization: "Rara", 
    img: "/img/Rara.jpg", 
    thesis: "She likes ice cream" 
  },
  { 
    name: "Meisya Putri Jenicka", 
    specialization: "Meisya", 
    img: "/img/Meisya.jpg", 
    thesis: "She likes singing" 
  },
  { 
    name: "Nailul Athiyyah", 
    specialization: "Nailul", 
    img: "/img/Nailul.jpg", 
    thesis: "She likes money (She's bendum)" 
  },
  { 
    name: "Desy Fadilla", 
    specialization: "Desy", 
    img: "/img/Desy.jpg", 
    thesis: "The rain is falling in my heart \nWith their happiness and trauma" 
  }
];

const achievements: Achievement[] = [
  { 
    title: "Final Project Completion", 
    event: "Algorithm & Programming", 
    recipient: "SIXMA Team", 
    date: "29 June 2025", 
    icon: "fa-laptop-code", 
    desc: "Successfully developed a comprehensive program using Python language. Demonstrating computational logic and advanced problem-solving skills for the final course assessment.",
    img: "/img/ADP_Project.jpg" 
  }
];

// --- DATA: TIMELINE (SEJARAH) ---
const timelineData: Event[] = [
  { 
    year: "24 Aug 2024", 
    title: "The Convergence", 
    desc: "KBI Entrance Interview. The very first moment our coordinates aligned. Strangers became a team in a single frame.", 
    img: "/img/FirstMeet.jpg" 
  },
  { 
    year: "25 Sept 2024", 
    title: "The Diplomatic Assembly", 
    desc: "Invited by the Governor of West Sumatra to host exchange scholars from Malaysia. A night of discourse and alliance.", 
    img: "/img/Dinner.jpg" 
  },
  { 
    year: "14 Oct 2024", 
    title: "Alma Mater", 
    desc: "Wearing our Alma Mater jackets for the first time at the Rectorate Field. Officially recognized as entities of Andalas University.", 
    img: "/img/FirstAlmet.jpg" 
  }
];

// --- DATA: MUSIC PLAYLIST ---
const playlist = [
  { title: "Tujuh Belas", src: "/audio/TujuhBelas.mp3" }, // Lagu Baru (Urutan 1)
];

// --- RENDER FUNCTIONS ---

// 1. Render Scholars
const memberCont = document.getElementById('member-container');
scholars.forEach(s => {
  if(memberCont) {
    const div = document.createElement('div');
    div.className = 'member-card';
    div.innerHTML = `
      <div class="hex-img-wrapper"><img src="${s.img}" alt="${s.name}"></div>
      <h3 class="member-name">${s.name}</h3>
      <span class="member-role">${s.specialization}</span>
    `;
    // @ts-ignore
    div.onclick = () => openModal(s.name, s.thesis, s.img, s.specialization, "SIXMA Variable");
    memberCont.appendChild(div);
  }
});

// 2. Render Timeline
const timelineCont = document.getElementById('timeline-container');
timelineData.forEach(t => {
  if(timelineCont) {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `
      <img src="${t.img}" class="timeline-img">
      <div class="timeline-content">
        <span class="time-date">${t.year}</span>
        <h3>${t.title}</h3>
        <p>${t.desc}</p>
      </div>
    `;
    // @ts-ignore
    div.onclick = () => openModal(t.title, t.desc, t.img, t.year, "Historical Record");
    timelineCont.appendChild(div);
  }
});

// 3. Render Achievements (UPDATED LOGIC)
const achievementCont = document.getElementById('achievement-container');
if(achievementCont) {
  achievements.forEach(a => {
    const div = document.createElement('div');
    div.className = 'award-box';
    div.innerHTML = `
      <i class="fa-solid ${a.icon} award-icon"></i>
      <span class="award-title">${a.title}</span>
      <span class="award-winner">${a.event}</span>
      <div style="font-size:0.8rem; color:#8892b0; margin-bottom:5px;">To: ${a.recipient}</div>
      <span class="click-hint">${a.date}</span>
    `;
    
    // UPDATE: Sekarang menggunakan a.img (foto spesifik), bukan placeholder lagi
    // @ts-ignore
    div.onclick = () => openModal(`${a.title} - ${a.event}`, a.desc, a.img, `Recipient: ${a.recipient}`, `Date: ${a.date}`);
    achievementCont.appendChild(div);
  });
}

const galleryCont = document.getElementById('gallery-container');

// Kita update struktur datanya biar bisa nampung Deskripsi (d) dan Tanggal (date)
const galleryData = [
    { t: "Sweet Escape", i: "/img/Mixue.jpg", date: "26 Aug 2024", d: "Chilling and enjoying ice cream at Mixue." },
    { t: "Waiting Class", i: "/img/wait_MsMutia.jpg", date: "6 Sept 2024", d: "Patiently waiting for Ms. Mutia to arrive for the lecture." },
    { t: "International Meetup", i: "/img/WithAbroadStud.jpg", date: "24 Sept 2024", d: "Meeting Malaysian exchange students at the Governor's Office of West Sumatra." },
    { t: "Pekan Seni Bermatematika XXI", i: "/img/PSB_XXI.jpg", date: "9 Nov 2024", d: "Captured moment at the 21st Mathematics Art Week event." },
    { t: "Last Data Analysis", i: "/img/LastAndat.jpg", date: "6 Dec 2024", d: "The final tutorial session for the Data Analysis course." },
    { t: "Iftar Gathering", i: "/img/Fasting.jpg", date: "16 March 2025", d: "Breaking the fast together during the holy month of Ramadan." },
    { t: "Desy's Birthday", i: "/img/DesyBirth.jpg", date: "23 March 2025", d: "Celebrating Desy's special day with the whole squad." },
    { t: "Last Linear Algebra", i: "/img/LastAle.jpg", date: "12 April 2025", d: "Wrapping up the Elementary Linear Algebra tutorial sessions." },
    { t: "Mall Day Out", i: "/img/TransMart.jpg", date: "22 April 2025", d: "Having a fun day out and refreshing our minds at TransMart." },
    { t: "Post-Exam Relief", i: "/img/UapADP.jpg", date: "29 June 2025", d: "Full smiles after finishing the final practicum exam." },
    { t: "Tutor's Graduation", i: "/img/UniKhay.jpg", date: "20 Sept 2025", d: "Attending the graduation ceremony of Uni Khay, our former Calculus tutor." },
    { t: "Committee of PSB XXII", i: "/img/PanitPSB.jpg", date: "30 Nov 2025", d: "Serving as the committee for Pekan Seni Bermatematika XXII." }
];

if(galleryCont) {
    galleryData.forEach(g => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `<img src="${g.i}" loading="lazy"><div class="gallery-overlay"><div class="gallery-title">${g.t}</div></div>`;
        
        // Update Logic Klik: Sekarang memunculkan deskripsi & tanggal yang spesifik
        // @ts-ignore
        div.onclick = () => openModal(g.t, g.d, g.i, "Gallery Archive", g.date);
        
        galleryCont.appendChild(div);
    });
}

// --- MUSIC PLAYER LOGIC ---
let currentSongIndex = 0;
const audioEl = document.getElementById('bg-music') as HTMLAudioElement;
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const musicTitle = document.getElementById('music-title');
const playIcon = playBtn?.querySelector('i');

function loadSong(index: number) {
  if (index < 0) index = playlist.length - 1;
  if (index >= playlist.length) index = 0;
  
  currentSongIndex = index;
  audioEl.src = playlist[currentSongIndex].src;
  if(musicTitle) musicTitle.innerText = playlist[currentSongIndex].title;
}

function togglePlay() {
  if (audioEl.paused) {
    audioEl.play().catch(() => console.log("Interaction needed first"));
    playIcon?.classList.remove('fa-play');
    playIcon?.classList.add('fa-pause');
  } else {
    audioEl.pause();
    playIcon?.classList.remove('fa-pause');
    playIcon?.classList.add('fa-play');
  }
}

// Load song awal
loadSong(0);

if(playBtn) playBtn.addEventListener('click', togglePlay);
if(nextBtn) nextBtn.addEventListener('click', () => { loadSong(currentSongIndex + 1); togglePlay(); });
if(prevBtn) prevBtn.addEventListener('click', () => { loadSong(currentSongIndex - 1); togglePlay(); });

audioEl.addEventListener('ended', () => {
  loadSong(currentSongIndex + 1);
  audioEl.play();
});

audioEl.addEventListener('timeupdate', () => {
  const percent = (audioEl.currentTime / audioEl.duration) * 100;
  const fill = document.getElementById('progress-fill');
  if(fill) fill.style.width = `${percent}%`;
});


// --- BACKGROUND & ANIMATIONS ---
function generateMathBg() {
  const container = document.getElementById('math-bg');
  const symbols = ['∑', '∫', 'π', '√', '∞', '≈', '≠', '∆', 'Ω', 'λ'];
  if(container) {
    for(let i=0; i<30; i++) {
      const span = document.createElement('span');
      span.classList.add('math-symbol');
      span.innerText = symbols[Math.floor(Math.random() * symbols.length)];
      span.style.left = Math.random() * 100 + 'vw';
      span.style.fontSize = (Math.random() * 2 + 1) + 'rem';
      span.style.animationDuration = (Math.random() * 10 + 10) + 's';
      span.style.animationDelay = (Math.random() * 5) + 's';
      container.appendChild(span);
    }
  }
}

const typeEl = document.getElementById('typewriter');
const txt = "SIXMA CLASS.";
let idx = 0;
function type() { if(typeEl && idx < txt.length) { typeEl.innerHTML += txt.charAt(idx); idx++; setTimeout(type, 150); } }

window.addEventListener('load', () => {
  generateMathBg();
  type();
  const loader = document.getElementById('loader');
  if(loader) setTimeout(() => { loader.style.opacity='0'; setTimeout(()=>loader.style.display='none', 1000); }, 2000);
});

// --- MODAL ---
const modal = document.getElementById('modal-overlay') as HTMLElement;
// @ts-ignore
window.openModal = (title, desc, img, sub, note) => {
  document.getElementById('modal-title')!.innerText = title;
  document.getElementById('modal-desc')!.innerText = desc;
  (document.getElementById('modal-img') as HTMLImageElement).src = img;
  document.getElementById('modal-subtitle')!.innerText = sub;
  document.getElementById('modal-note')!.innerText = `"${note}"`;
  modal.classList.remove('hidden');
}
document.querySelector('.close-btn')?.addEventListener('click', () => modal.classList.add('hidden'));
window.addEventListener('click', (e) => { if(e.target === modal) modal.classList.add('hidden'); });

// --- MESSAGE BOARD ---
const msgBtn = document.getElementById('msg-btn');
const msgInp = document.getElementById('msg-input') as HTMLInputElement;
const msgBox = document.getElementById('msg-container');
const msgs = JSON.parse(localStorage.getItem('sixma_msgs') || '[]');
function renderMsgs() {
  if(!msgBox) return;
  msgBox.innerHTML = '';
  msgs.forEach((m:string) => {
    const d = document.createElement('div'); d.className='message-card'; d.innerText = `> ${m}`;
    msgBox.appendChild(d);
  });
}
if(msgBtn) msgBtn.addEventListener('click', () => {
  if(msgInp.value) {
    msgs.push(msgInp.value); localStorage.setItem('sixma_msgs', JSON.stringify(msgs));
    renderMsgs(); msgInp.value='';
  }
});
renderMsgs();