// Global XP tracking and Level Titles let xpPoints = 0; const xpDisplay = document.getElementById("xpDisplay");

function gainXP(points) { xpPoints += points; updateXPDisplay(); }

function updateXPDisplay() { let title = "Initiate"; if (xpPoints >= 300) title = "Crowned Ascendant"; else if (xpPoints >= 250) title = "Illuminary Guide"; else if (xpPoints >= 200) title = "Threshold Walker"; else if (xpPoints >= 150) title = "Shadow Tamer"; else if (xpPoints >= 100) title = "Kindled Apprentice"; else if (xpPoints >= 50) title = "Remembrancer"; else if (xpPoints >= 25) title = "Dreamling";

const badgeMap = { Fire: "🔥", Water: "💧", Air: "🌬️", Earth: "🌿", Aether: "✨", }; const affinity = localStorage.getItem("elementAffinity") || "Unknown"; const badge = badgeMap[affinity] || "🌟"; xpDisplay.innerHTML = XP: ${xpPoints} <br/> ${badge} ${title}; }

function hideAll() { document.querySelectorAll(".hidden, .dashboard").forEach((div) => { div.style.display = "none"; }); }

// ELEMENT SELECTION function showAffinitySelector() { hideAll(); document.getElementById("affinity-display").style.display = "block"; }

function setAffinity(affinity) { localStorage.setItem("elementAffinity", affinity); gainXP(10); alert(You have chosen ${affinity}.); updateXPDisplay(); hideAll(); }

// BREATHWORK function showBreathwork() { hideAll(); const el = document.getElementById("ritual-display"); el.style.display = "block"; el.innerHTML = <h2>🫅 Breathwork Ritual</h2> <p>Breathe in for 4… hold for 4… out for 4. Repeat 5x.</p> <button onclick="completeBreathwork()">✅ Complete</button>; }

function completeBreathwork() { gainXP(5); alert("You feel aligned. Breathwork complete."); hideAll(); }

// JOURNAL PROMPTS function showJournalPrompt() { hideAll();

