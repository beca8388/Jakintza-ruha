// script.js

let xpPoints = 0; const xpDisplay = document.getElementById("xp-display");

function gainXP(points) { xpPoints += points; updateXPDisplay(); }

function updateXPDisplay() { let title = "Initiate"; if (xpPoints >= 100) title = "Starsced Ascendant"; else if (xpPoints >= 60) title = "Mystic Scholar"; else if (xpPoints >= 30) title = "Elemental Seeker";

const badgeMap = { Fire: "🔥", Water: "💧", Earth: "🌿", Air: "🌀", Aether: "✨", };

const affinity = localStorage.getItem("elementAffinity") || "Unknown"; const badge = badgeMap[affinity] || "🌟"; xpDisplay.innerHTML = ✨ XP: ${xpPoints} <br/> ${badge} ${title}; }

function hideAll() { document.querySelectorAll(".hidden, .dashboard").forEach(div => { div.style.display = "none"; }); }

// ELEMENT SELECTION function showAffinitySelector() { hideAll(); const el = document.getElementById("affinity-display"); el.style.display = "block"; el.innerHTML = <h2>Choose Your Element</h2> <button onclick="setAffinity('Fire')">🔥 Fire</button> <button onclick="setAffinity('Water')">💧 Water</button> <button onclick="setAffinity('Air')">🌀 Air</button> <button onclick="setAffinity('Earth')">🌿 Earth</button> <button onclick="setAffinity('Aether')">✨ Aether</button>; }

function setAffinity(affinity) { localStorage.setItem("elementAffinity", affinity); gainXP(10); alert(You have chosen ${affinity}.); updateXPDisplay(); hideAll(); }

// BREATHWORK function showBreathwork() { hideAll(); const el = document.getElementById("ritual-display"); el.style.display = "block"; el.innerHTML = <h2>Breathwork Ritual</h2> <p>Breathe in for 4... hold for 4... out for 4. Repeat 5 times.</p> <button onclick="completeBreathwork()">Complete</button>; }

function completeBreathwork() { gainXP(5); alert("You feel centered and light. Ritual complete."); hideAll(); }

// ELEMENTAL QUESTS function showElementalQuests() { hideAll(); const el = document.getElementById("quest-display"); el.style.display = "block"; el.innerHTML = <h2>Elemental Quest</h2> <p>Write a dream journal entry or draw a sigil for your element.</p> <button onclick="completeQuest()">Submit</button>; }

function completeQuest() { gainXP(15); alert("Quest accepted by the Elementals. Wisdom flows through you."); hideAll(); }

// SPIRIT GUIDE function showSpiritGuide() { hideAll(); const el = document.getElementById("spirit-guide-display"); el.style.display = "block"; el.innerHTML = <h2>Your Spirit Guide Appears</h2> <p>"Remember who you are. You carry the memory of stars."</p> <button onclick="gainXP(10)">Receive Blessing</button>; }

// CHALLENGE function showElementalChallenge() { hideAll(); const el = document.getElementById("challenge-display"); el.style.display = "block"; el.innerHTML = <h2>Challenge of the Chosen</h2> <p>Hold 1 hour today in total silence. Journal after.</p> <button onclick="gainXP(20)">Mark Complete</button>; }

// PARENT DASHBOARD function showParentDashboard() { hideAll(); const el = document.getElementById("parent-dashboard"); el.style.display = "block"; const affinity = localStorage.getItem("elementAffinity") || "Unknown"; el.innerHTML = <h2>Mentor Dashboard</h2> <p>Student Element: ${affinity}</p> <label><input type="checkbox"> ✅ Breathwork Completed</label><br> <label><input type="checkbox"> ✅ First Quest Submitted</label><br> <label><input type="checkbox"> ✅ Journal Updated</label><br> <button onclick="alert('You have blessed this soul.')">✨ Send Blessing</button>; }

// ADMIN DASHBOARD function showAdminDashboard() { hideAll(); const el = document.getElementById("admin-dashboard"); el.style.display = "block"; el.innerHTML = <h2>Oracle Panel</h2> <p>Element Affinity: ${localStorage.getItem("elementAffinity") || "Unknown"}</p> <p>XP: ${xpPoints}</p> <button onclick="localStorage.clear(); location.reload();">🔄 Reset Student</button>; }

// ORACLE PANEL (Input handling placeholder) function submitOracle() { const question = document.getElementById("oracle-question").value; alert(The Oracle whispers: "Your path is unfolding, even now. (${question})"); }

