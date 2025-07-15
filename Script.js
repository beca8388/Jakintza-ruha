/* Jakintza Ruha: Elemental Affinity Test + Full Curriculum JS */

// Elemental Affinity Data Structure const elements = { earth: { name: "Earth", guide: "Mara of Root & Bone", strengths: ["Patience", "Nurturing", "Stability"], shadow: ["Stagnation", "Control", "Over-sacrifice"], realm: ["The Hollow of Echoes", "The Sacred Hearth"], color: "#7ba46e" }, fire: { name: "Fire", guide: "Kiria Emberseer", strengths: ["Courage", "Truth", "Bold Magic"], shadow: ["Anger", "Ego", "Recklessness"], realm: ["The Ember Ring"], color: "#ff5e5e" }, water: { name: "Water", guide: "Luma of the Deep", strengths: ["Emotional Depth", "Healing", "Intuition"], shadow: ["Avoidance", "Oversensitivity"], realm: ["The Wells of Memory"], color: "#5ecbff" }, air: { name: "Air", guide: "Talon of the High Wind", strengths: ["Vision", "Analysis", "Creativity"], shadow: ["Anxiety", "Detachment"], realm: ["The Skybound Sanctum"], color: "#e0e8ff" }, aether: { name: "Aether", guide: "Nyrah the Veiled Flame", strengths: ["Cosmic Knowing", "Multidimensional Thinking"], shadow: ["Isolation", "Over-ascension"], realm: ["The Temple of Ascendants"], color: "#dcdcdc" } };

// User data store let userAnswers = []; let currentQuestion = 0;

// Quiz questions structure const quizQuestions = [ { question: "You walk into a room with five mysterious doors. Which one do you feel drawn to?", options: ["earth", "fire", "water", "air", "aether"] }, { question: "What kind of conflict draws your fire?", options: ["earth", "fire", "water", "air", "aether"] }, { question: "A stranger cries before you. What do you do instinctively?", options: ["earth", "fire", "water", "air", "aether"] }, { question: "Which sounds like you under pressure?", options: ["earth", "fire", "water", "air", "aether"] }, { question: "Which do you trust most?", options: ["earth", "fire", "water", "air", "aether"] } ];

// Render next question function renderQuestion() { if (currentQuestion >= quizQuestions.length) { calculateResult(); return; } const q = quizQuestions[currentQuestion]; const container = document.querySelector(".quiz-container"); container.innerHTML = <div class='question'>${q.question}</div> <div class='options'>${q.options.map(opt => <div class='option ${opt}' onclick='selectAnswer("${opt}")'>${elements[opt].name}</div>).join('')}</div>; }

// Store user answer and go to next function selectAnswer(elementKey) { userAnswers.push(elementKey); currentQuestion++; renderQuestion(); }

// Calculate dominant element function calculateResult() { const tally = userAnswers.reduce((acc, key) => { acc[key] = (acc[key] || 0) + 1; return acc; }, {}); const sorted = Object.entries(tally).sort((a,b) => b[1] - a[1]); const topElement = sorted[0][0]; displayResult(topElement); }

// Display result UI function displayResult(elementKey) { const e = elements[elementKey]; const container = document.querySelector(".quiz-container"); container.innerHTML = <div class='result'> <h2>You Are of the ${e.name}</h2> <p>Your Guide: <strong>${e.guide}</strong></p> <p><strong>Strengths:</strong> ${e.strengths.join(", ")}</p> <p><strong>Shadow Work:</strong> ${e.shadow.join(", ")}</p> <p><strong>Realm Alignment:</strong> ${e.realm.join(" or ")}</p> <div class='certificate'>“By the Mirror of the Five, you are remembered as a Child of ${e.name}. Walk the path of ${e.realm[0]}.”</div> <button class='cta' onclick='location.reload()'>Retake Test</button> </div>; }

// Launch quiz on load document.addEventListener("DOMContentLoaded", renderQuestion);

