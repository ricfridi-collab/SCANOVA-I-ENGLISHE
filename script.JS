const rawQuestionBank = [
    // --- UNIT 1: LANDMARKS ---
    { u: "Unit1", q: "The 'Eiffel Tower' is in ______.", o: ["London", "Paris", "Berlin"], a: "Paris" },
    { u: "Unit1", q: "The Taj Mahal is located in ______.", o: ["India", "Pakistan", "China"], a: "India" },
    { u: "Unit1", q: "An ______ designs and builds buildings.", o: ["Architect", "Pilot", "Mechanic"], a: "Architect" },
    { u: "Unit1", q: "Algeria is the ______ country in Africa.", o: ["Largest", "Smallest", "Oldest"], a: "Largest" },
    { u: "Unit1", q: "Timgad is a ______ city in Batna.", o: ["Roman", "British", "Modern"], a: "Roman" },
    { u: "Unit1", q: "The Great Wall is a landmark in ______.", o: ["Japan", "China", "Korea"], a: "China" },
    { u: "Unit1", q: "Martyrs' Memorial is in ______.", o: ["Algiers", "Oran", "Constantine"], a: "Algiers" },
    { u: "Unit1", q: "A ______ shows tourists around.", o: ["Guide", "Teacher", "Doctor"], a: "Guide" },
    { u: "Unit1", q: "Big Ben is a ______ in London.", o: ["Clock tower", "Bridge", "Castle"], a: "Clock tower" },
    { u: "Unit1", q: "The 'Leaning Tower' is in ______.", o: ["Italy", "France", "Spain"], a: "Italy" },
    { u: "Unit1", q: "The Alhambra Palace is in ______.", o: ["Granada", "Madrid", "Seville"], a: "Granada" },
    { u: "Unit1", q: "Which word means 'very old'?", o: ["Ancient", "Modern", "New"], a: "Ancient" },
    { u: "Unit1", q: "A ______ is a plan of a journey.", o: ["Itinerary", "Map", "Ticket"], a: "Itinerary" },
    { u: "Unit1", q: "Statue of Liberty is in ______ City.", o: ["New York", "London", "Cairo"], a: "New York" },
    { u: "Unit1", q: "Synonym of 'Famous' is ______.", o: ["Well-known", "Unknown", "Small"], a: "Well-known" },

    // --- UNIT 2: GRAMMAR ---
    { u: "Unit2", q: "The Mona Lisa ______ by Da Vinci.", o: ["was painted", "painted", "is painting"], a: "was painted" },
    { u: "Unit2", q: "English is ______ difficult ______ Maths.", o: ["as / as", "more / than", "the / most"], a: "as / as" },
    { u: "Unit2", q: "The Pyramids ______ built by Pharaohs.", o: ["were", "was", "are"], a: "were" },
    { u: "Unit2", q: "The room ______ cleaned yesterday.", o: ["was", "is", "were"], a: "was" },
    { u: "Unit2", q: "Algeria is not as ______ as Russia.", o: ["big", "bigger", "biggest"], a: "big" },
    { u: "Unit2", q: "The phone ______ by Bell.", o: ["was invented", "invented", "invents"], a: "was invented" },
    { u: "Unit2", q: "Active: 'He cleans the car'. Passive: The car ______.", o: ["is cleaned", "was cleaned", "cleans"], a: "is cleaned" },
    { u: "Unit2", q: "The books ______ sent last week.", o: ["were", "was", "are"], a: "were" },
    { u: "Unit2", q: "Gold is ______ expensive than silver.", o: ["more", "most", "as"], a: "more" },
    { u: "Unit2", q: "Is Timgad as ______ as Tipaza?", o: ["old", "older", "oldest"], a: "old" },
    { u: "Unit2", q: "The bridge ______ in 1950.", o: ["was built", "built", "is built"], a: "was built" },
    { u: "Unit2", q: "Active: 'She wrote a book'. Passive: A book ______.", o: ["was written", "is written", "wrote"], a: "was written" },
    { u: "Unit2", q: "Diamonds are the ______ expensive gems.", o: ["most", "more", "as"], a: "most" },
    { u: "Unit2", q: "The thief ______ caught last night.", o: ["was", "were", "is"], a: "was" },
    { u: "Unit2", q: "The mosque ______ visited by many.", o: ["is", "was", "are"], a: "is" },

    // --- UNIT 3: CITIZENSHIP & MEMORIES ---
    { u: "Unit3", t: "Volunteers work for no money.", tr: "المتطوعون يعملون بلا مقابل.", q: "A volunteer helps for ______.", o: ["Free", "Salary", "Cash"], a: "Free" },
    { u: "Unit3", t: "I remember my first day at school.", tr: "أتذكر يومي الأول في المدرسة.", q: "Opposite of 'Remember' is ______.", o: ["Forget", "Know", "Recall"], a: "Forget" },
    { u: "Unit3", q: "A good citizen ______ the law.", o: ["Respects", "Breaks", "Ignores"], a: "Respects" },
    { u: "Unit3", q: "Red Crescent is a ______ organization.", o: ["Charity", "Sports", "Music"], a: "Charity" },
    { u: "Unit3", q: "My childhood was full of ______.", o: ["Memories", "Work", "Jobs"], a: "Memories" },
    { u: "Unit3", q: "A ______ helps keep the city clean.", o: ["Cleaner", "Doctor", "Teacher"], a: "Cleaner" },
    { u: "Unit3", q: "Solidarity means ______ others.", o: ["Helping", "Fighting", "Hating"], a: "Helping" },
    { u: "Unit3", q: "I want to be a ______ to help the sick.", o: ["Doctor", "Pilot", "Chef"], a: "Doctor" },
    { u: "Unit3", q: "Honesty is a good ______.", o: ["Value", "Color", "Sport"], a: "Value" },
    { u: "Unit3", q: "Childhood is the ______ period of life.", o: ["best", "worst", "hardest"], a: "best" },
    { u: "Unit3", q: "To succeed, you must work ______.", o: ["Hard", "Slowly", "Never"], a: "Hard" },
    { u: "Unit3", q: "Opposite of 'Kind' is ______.", o: ["Cruel", "Nice", "Friendly"], a: "Cruel" },
    { u: "Unit3", q: "Empathy means feeling others' ______.", o: ["Pain", "Wealth", "Cars"], a: "Pain" },
    { u: "Unit3", q: "UNICEF helps ______ worldwide.", o: ["Children", "Animals", "Planes"], a: "Children" },
    { u: "Unit3", q: "Primary school is my first ______.", o: ["Memory", "Salary", "Office"], a: "Memory" }
];

let currentQs = []; let currIdx = 0; let corrects = 0; let wrongs = 0; let active = true;

function showHome() { document.getElementById('quiz-overlay').style.display = 'none'; }

function startQuiz(unit) {
    const filtered = rawQuestionBank.filter(x => x.u === unit);
    currentQs = filtered.sort(() => 0.5 - Math.random()).slice(0, 10);
    
    if(currentQs.length === 0) {
        alert("More questions coming soon!");
        return;
    }

    currIdx = 0; corrects = 0; wrongs = 0;
    document.getElementById('quiz-overlay').style.display = 'flex';
    render();
}

function render() {
    active = true;
    const q = currentQs[currIdx];
    document.getElementById('c-count').innerText = corrects;
    document.getElementById('w-count').innerText = wrongs;
    document.getElementById('t-count').innerText = `TASK ${currIdx + 1}/10`;
    
    let html = "";
    if(q.t) {
        html += `<div class="paragraph-card"><p style="margin:0; font-size:0.9rem;">${q.t}</p><span class="translation">${q.tr}</span></div>`;
    }
    html += `<div class="question-text">${q.q}</div>`;
    
    const shuffledOptions = [...q.o].sort(() => 0.5 - Math.random());
    html += shuffledOptions.map(opt => `<button class="option-btn" onclick="check(this,'${opt.replace(/'/g, "\\'")}','${q.a.replace(/'/g, "\\'")}')">${opt}</button>`).join('');
    
    document.getElementById('quiz-box').innerHTML = html;
}

function check(btn, sel, cor) {
    if(!active) return; active = false;
    const correctText = currentQs[currIdx].a;
    if(sel === correctText) { 
        btn.classList.add('correct'); corrects++; 
    } else { 
        btn.classList.add('wrong'); wrongs++;
        document.querySelectorAll('.option-btn').forEach(b => { 
            if(b.innerText === correctText) b.classList.add('correct'); 
        });
    }
    setTimeout(() => {
        if(currIdx < currentQs.length - 1) { currIdx++; render(); }
        else { finish(); }
    }, 1200);
}

function finish() {
    document.getElementById('quiz-box').innerHTML = `
        <div style="text-align:center;">
            <h2 style="color:var(--gold-solid);">Session Finished!</h2>
            <p style="font-size:1.2rem;">Score: ${corrects} / 10</p>
            <p style="font-size:0.8rem; opacity:0.7;">Keep practicing to master BEM 2026!</p>
            <button class="option-btn" style="background:var(--gold-linear); color:black; font-weight:bold; text-align:center;" onclick="showHome()">BACK TO MENU</button>
        </div>`;
}
