/* ── PARTICLES ── */
const pEl = document.getElementById("particles");
const notes = ["♩", "♪", "♫", "♬", "🎵", "🎶", "✦", "◆", "⭐"];
for (let i = 0; i < 24; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.textContent = notes[Math.floor(Math.random() * notes.length)];
  p.style.cssText = `left:${Math.random() * 100}%;bottom:-5%;--dur:${5 + Math.random() * 10}s;--delay:${Math.random() * 12}s;font-size:${10 + Math.random() * 14}px;opacity:0;`;
  pEl.appendChild(p);
}

/* ── EQUALIZER ── */
const eqEl = document.getElementById("equalizer");
for (let i = 0; i < 80; i++) {
  const b = document.createElement("div");
  b.className = "eq-bar";
  b.style.cssText = `height:${15 + Math.random() * 40}px;--spd:${0.3 + Math.random() * 0.7}s;animation-delay:${Math.random() * 0.8}s;`;
  eqEl.appendChild(b);
}

/* ── THEME ── */
const tt = document.getElementById("themeToggle");
let isDark = true;
tt.addEventListener("click", () => {
  isDark = !isDark;
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light",
  );
  tt.textContent = isDark ? "🌙" : "☀️";
});

/* ── TABLE DATA ── */
const players = [
  { rank: 1, name: "CyberBeat", avatar: "🤖", level: 15, score: 62400 },
  { rank: 2, name: "NeonViper", avatar: "🐍", level: 12, score: 48750 },
  { rank: 3, name: "PulseRider", avatar: "🎧", level: 10, score: 41300 },
  { rank: 4, name: "RhythmGhost", avatar: "👻", level: 9, score: 36900 },
  { rank: 5, name: "BeatWitch", avatar: "🧙", level: 8, score: 31200 },
  { rank: 6, name: "DropKicker", avatar: "🦊", level: 7, score: 27650 },
  { rank: 7, name: "SynthWave", avatar: "🌊", level: 6, score: 22100 },
  { rank: 8, name: "LaserTap", avatar: "⚡", level: 5, score: 17800 },
  { rank: 9, name: "FluxBoss", avatar: "🔥", level: 4, score: 13400 },
  { rank: 10, name: "PixelDrum", avatar: "🥁", level: 3, score: 9250 },
];

const tbody = document.getElementById("tbodyRows");
players.forEach((p, i) => {
  const tr = document.createElement("tr");
  tr.style.animationDelay = i * 0.05 + 0.05 + "s";

  const rankStyle =
    p.rank === 1
      ? "color:var(--gold);text-shadow:0 0 10px var(--gold)"
      : p.rank === 2
        ? "color:var(--silver)"
        : p.rank === 3
          ? "color:var(--bronze)"
          : "";

  tr.innerHTML = `
    <td class="rank-cell" style="${rankStyle}">${p.rank}</td>
    <td>
      <div class="player-cell">
        <div class="player-avatar">${p.avatar}</div>
        <span class="player-name">${p.name}</span>
      </div>
    </td>
    <td style="text-align:center"><span class="level-badge">LVL ${p.level}</span></td>
    <td class="score-cell">${p.score.toLocaleString()}</td>
  `;
  tbody.appendChild(tr);
});
