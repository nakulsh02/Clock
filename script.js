const clockFace = document.getElementById('clockFace');
const hourHand = document.getElementById('hour');
const minHand = document.getElementById('min');
const secHand = document.getElementById('sec');
const digitalTime = document.getElementById('digital');
const dateDisplay = document.getElementById('date');
const themeBtn = document.getElementById('theme-toggle');

for (let i = 1; i <= 12; i++) {
    const numWrap = document.createElement('div');
    numWrap.className = 'number';
    numWrap.style.transform = rotate(${i * 30}deg);
    const num = document.createElement('span');
    num.innerText = i;
    num.style.display = 'inline-block';
    num.style.transform = rotate(-${i * 30}deg); 
    numWrap.appendChild(num);
    clockFace.appendChild(numWrap);
}

function update() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    secHand.style.transform = translateX(-50%) rotate(${s * 6}deg);
    minHand.style.transform = translateX(-50%) rotate(${m * 6}deg);
    hourHand.style.transform = translateX(-50%) rotate(${(h % 12) * 30 + m * 0.5}deg);

    digitalTime.innerText = d.toLocaleTimeString('en-GB', { hour12: false });
    dateDisplay.innerText = d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
}

// FIXED BUTTON TOGGLE LOGIC
themeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        // Switch to Dark Mode
        document.body.classList.replace('light-mode', 'dark-mode');
        themeBtn.innerText = "LIGHT MODE"; // Now button offers to go back to Light
    } else {
        // Switch to Light Mode
        document.body.classList.replace('dark-mode', 'light-mode');
        themeBtn.innerText = "DARK MODE"; // Now button offers to go to Dark
    }
});

setInterval(update, 1000);
update();
