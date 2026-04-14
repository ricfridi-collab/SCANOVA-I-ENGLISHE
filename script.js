// --- قائمة الـ 200 كود تفعيل (Master Codes) ---
const masterCodes = [
    "BEM26-X7R2", "BEM26-A9P4", "BEM26-M5K8", "BEM26-Q1W9", "BEM26-T3V6", "BEM26-N8B2", "BEM26-L4H7", "BEM26-D2J5", "BEM26-S6F3", "BEM26-G9C1",
    "BEM26-Z1Y8", "BEM26-K4M2", "BEM26-R7X5", "BEM26-V3N9", "BEM26-P6L4", "BEM26-H2D8", "BEM26-W9Q1", "BEM26-F5S7", "BEM26-C3G9", "BEM26-J8K2",
    "BEM26-Y4B6", "BEM26-M1T9", "BEM26-R8X3", "BEM26-L5N7", "BEM26-P2V4", "BEM26-Q9W1", "BEM26-S7F5", "BEM26-K3M8", "BEM26-D6J2", "BEM26-G1C4",
    "BEM26-H8B9", "BEM26-Z4Y2", "BEM26-T7V5", "BEM26-N1M3", "BEM26-X6R8", "BEM26-A2P9", "BEM26-F4S1", "BEM26-W3Q7", "BEM26-L8H2", "BEM26-D9J5",
    "BEM26-M2K6", "BEM26-R5X1", "BEM26-C7G4", "BEM26-V8N2", "BEM26-S1F9", "BEM26-B3K7", "BEM26-T9V4", "BEM26-Z2Y6", "BEM26-P5L1", "BEM26-Q8W3",
    "BEM26-X1R5", "BEM26-A4P7", "BEM26-M9K2", "BEM26-J3D6", "BEM26-H6C8", "BEM26-F1S4", "BEM26-G2K9", "BEM26-L7H3", "BEM26-N5M8", "BEM26-W4Q2",
    "BEM26-R1X9", "BEM26-D4J7", "BEM26-S8F2", "BEM26-C5G1", "BEM26-K9M4", "BEM26-B2L6", "BEM26-T5V8", "BEM26-Z9Y3", "BEM26-P1L7", "BEM26-V4N5",
    "BEM26-X8R3", "BEM26-A1P6", "BEM26-M4K9", "BEM26-Q7W2", "BEM26-S3F8", "BEM26-H9C5", "BEM26-F2S1", "BEM26-W6Q4", "BEM26-L3H9", "BEM26-D1J2",
    "BEM26-R4X8", "BEM26-C9G2", "BEM26-V1N7", "BEM26-N7M4", "BEM26-K2M5", "BEM26-B8L9", "BEM26-T1V3", "BEM26-Z6Y7", "BEM26-P9L2", "BEM26-X4R1",
    "BEM26-A7P5", "BEM26-M2K1", "BEM26-Q3W6", "BEM26-S9F4", "BEM26-H1C2", "BEM26-F8S3", "BEM26-G5K7", "BEM26-L2H1", "BEM26-N9M6", "BEM26-W7Q8",
    "BEM26-R3X2", "BEM26-D8J9", "BEM26-C1G5", "BEM26-V6N3", "BEM26-K7M1", "BEM26-B4L8", "BEM26-T2V9", "BEM26-Z5Y1", "BEM26-P8L4", "BEM26-X9R6",
    "BEM26-A3P2", "BEM26-M6K4", "BEM26-Q5W7", "BEM26-S2F1", "BEM26-H4C9", "BEM26-F9S5", "BEM26-G3K2", "BEM26-L1H8", "BEM26-N4M7", "BEM26-W2Q9",
    "BEM26-R9X4", "BEM26-D3J6", "BEM26-C8G7", "BEM26-V5N1", "BEM26-K1M9", "BEM26-B7L2", "BEM26-T8V4", "BEM26-Z3Y5", "BEM26-P4L9", "BEM26-X2R7",
    "BEM26-A5P1", "BEM26-M8K3", "BEM26-Q2W4", "BEM26-S4F6", "BEM26-H7C1", "BEM26-F3S9", "BEM26-G8K5", "BEM26-L6H2", "BEM26-N2M9", "BEM26-W5Q3",
    "BEM26-R6X7", "BEM26-D1J4", "BEM26-C4G8", "BEM26-V9N6", "BEM26-K5M2", "BEM26-B1L3", "BEM26-T4V7", "BEM26-Z8Y9", "BEM26-P3L5", "BEM26-X5R2",
    "BEM26-A9P8", "BEM26-M1K7", "BEM26-Q6W2", "BEM26-S8F3", "BEM26-H3C5", "BEM26-F7S1", "BEM26-G1K4", "BEM26-L9H6", "BEM26-N3M2", "BEM26-W8Q5",
    "BEM26-R2X1", "BEM26-D7J3", "BEM26-C9G6", "BEM26-V4N8", "BEM26-K8M5", "BEM26-B5L1", "BEM26-T9V2", "BEM26-Z1Y4", "BEM26-P7L8", "BEM26-X3R9",
    "BEM26-A8P4", "BEM26-M5K2", "BEM26-Q1W7", "BEM26-S5F9", "BEM26-H2C3", "BEM26-F6S8", "BEM26-G4K1", "BEM26-L2H5", "BEM26-N6M1", "BEM26-W1Q4",
    "BEM26-R7X3", "BEM26-D5J9", "BEM26-C2G1", "BEM26-V3N4", "BEM26-K9M7", "BEM26-B6L2", "BEM26-T3V5", "BEM26-Z7Y8", "BEM26-P1L3", "BEM26-X6R4",
    "BEM26-A2P1", "BEM26-M7K5", "BEM26-Q4W8", "BEM26-S1F2", "BEM26-H5C7", "BEM26-F4S3", "BEM26-G9K6", "BEM26-L4H2", "BEM26-N8M5", "BEM26-W3Q1"
];

// --- بنك الأسئلة ---
const rawQuestionBank = [
    { u: "Unit1", q: "The 'Eiffel Tower' is in ______.", o: ["London", "Paris", "Berlin"], a: "Paris" },
    { u: "Unit1", q: "The Taj Mahal is located in ______.", o: ["India", "Pakistan", "China"], a: "India" },
    { u: "Unit1", q: "An ______ designs and builds buildings.", o: ["Architect", "Pilot", "Mechanic"], a: "Architect" },
    { u: "Unit1", q: "Algeria is the ______ country in Africa.", o: ["Largest", "Smallest", "Oldest"], a: "Largest" },
    { u: "Unit1", q: "Timgad is a ______ city in Batna.", o: ["Roman", "British", "Modern"], a: "Roman" },
    { u: "Unit1", q: "The Great Wall is a landmark in ______.", o: ["Japan", "China", "Korea"], a: "China" },
    { u: "Unit1", q: "Martyrs' Memorial is in ______.", o: ["Algiers", "Oran", "Constantine"], a: "Algiers" },
    { u: "Unit1", q: "A ______ shows tourists around.", o: ["Guide", "Teacher", "Doctor"], a: "Guide" },
    { u: "Unit1", q: "Big Ben is a ______ in London.", o: ["Clock tower", "Bridge", "Castle"], a: "Clock tower" },
    { u: "Unit2", q: "The Mona Lisa ______ by Da Vinci.", o: ["was painted", "painted", "is painting"], a: "was painted" },
    { u: "Unit2", q: "English is ______ difficult ______ Maths.", o: ["as / as", "more / than", "the / most"], a: "as / as" },
    { u: "Unit2", q: "The Pyramids ______ built by Pharaohs.", o: ["were", "was", "are"], a: "were" },
    { u: "Unit2", q: "The room ______ cleaned yesterday.", o: ["was", "is", "were"], a: "was" },
    { u: "Unit2", q: "Algeria is not as ______ as Russia.", o: ["big", "bigger", "biggest"], a: "big" },
    { u: "Unit3", t: "Volunteers work for no money.", tr: "المتطوعون يعملون بلا مقابل.", q: "A volunteer helps for ______.", o: ["Free", "Salary", "Cash"], a: "Free" },
    { u: "Unit3", t: "I remember my first day at school.", tr: "أتذكر يومي الأول في المدرسة.", q: "Opposite of 'Remember' is ______.", o: ["Forget", "Know", "Recall"], a: "Forget" },
    { u: "Unit3", q: "A good citizen ______ the law.", o: ["Respects", "Breaks", "Ignores"], a: "Respects" }
];

let currentQs = []; let currIdx = 0; let corrects = 0; let wrongs = 0; let active = true;

// --- نظام الحماية وبصمة الجهاز ---
function getDeviceFingerprint() {
    return navigator.userAgent + screen.width + screen.height;
}

// فحص التفعيل عند فتح التطبيق
window.addEventListener('load', () => {
    const savedCode = localStorage.getItem('BEM_ACTIVE_CODE');
    const savedFingerprint = localStorage.getItem('BEM_DEVICE_ID');
    const currentFingerprint = getDeviceFingerprint();

    if (savedCode && masterCodes.includes(savedCode) && savedFingerprint === currentFingerprint) {
        document.getElementById('app-wrapper').style.display = 'block';
        document.getElementById('activation-layer').style.display = 'none';
    } else {
        document.getElementById('activation-layer').style.display = 'flex';
        document.getElementById('app-wrapper').style.display = 'none';
    }
});

// دالة التفعيل
function verifyCode() {
    const codeInput = document.getElementById('user-input-code').value.trim().toUpperCase();
    const error = document.getElementById('error-message');
    const currentFingerprint = getDeviceFingerprint();

    if (masterCodes.includes(codeInput)) {
        localStorage.setItem('BEM_ACTIVE_CODE', codeInput);
        localStorage.setItem('BEM_DEVICE_ID', currentFingerprint);
        document.getElementById('activation-layer').style.display = 'none';
        document.getElementById('app-wrapper').style.display = 'block';
    } else {
        error.innerText = "كود خاطئ! تأكد من الكود أو تواصل مع الدعم.";
    }
}

// --- دالة زر الخروج (التي تم إصلاحها) ---
function resetActivation() {
    if (confirm("هل تريد حقاً تسجيل الخروج؟ سيتم قفل التطبيق وتحتاج لإدخال الكود مجدداً.")) {
        localStorage.removeItem('BEM_ACTIVE_CODE');
        localStorage.removeItem('BEM_DEVICE_ID');
        window.location.reload(); // إعادة التحميل لإظهار شاشة التفعيل فوراً
    }
}

// --- وظائف الكويز ---
function showHome() { 
    document.getElementById('quiz-overlay').style.display = 'none'; 
}

function startQuiz(unit) {
    const filtered = rawQuestionBank.filter(x => x.u === unit);
    currentQs = filtered.sort(() => 0.5 - Math.random()).slice(0, 10);
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
    if(q.t) { html += `<div class="paragraph-card"><p style="margin:0; font-size:0.9rem;">${q.t}</p><span class="translation">${q.tr}</span></div>`; }
    html += `<div class="question-text">${q.q}</div>`;
    
    const shuffledOptions = [...q.o].sort(() => 0.5 - Math.random());
    html += shuffledOptions.map(opt => `<button class="option-btn" onclick="check(this,'${opt.replace(/'/g, "\\'")}','${q.a.replace(/'/g, "\\'")}')">${opt}</button>`).join('');
    
    document.getElementById('quiz-box').innerHTML = html;
}

function check(btn, sel, cor) {
    if(!active) return; active = false;
    if(sel === cor) { 
        btn.classList.add('correct'); corrects++; 
    } else { 
        btn.classList.add('wrong'); wrongs++;
        document.querySelectorAll('.option-btn').forEach(b => { 
            if(b.innerText === cor) b.classList.add('correct'); 
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
            <h2 style="color:var(--gold-solid);">Finished!</h2>
            <p style="font-size:1.2rem;">Score: ${corrects} / 10</p>
            <button class="option-btn activate-btn" style="margin-top:15px; width:100%; border-radius:10px;" onclick="showHome()">BACK TO MENU</button>
        </div>`;
}
