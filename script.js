// Elements
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const counter = document.getElementById('counter');
const reset = document.getElementById('reset');
const bgColor = document.getElementById('toggle-theme');
const random = document.getElementById('random-bg');
const changeText = document.getElementById('change-text');
const hideBox = document.getElementById('hide-box');
const fontUp = document.getElementById('font-up');
const fontDown = document.getElementById('font-down');
const heading = document.getElementById('heading');
const box = document.getElementById('box');

let count = 0;

// Helper to update counter color
const updateCounterColor = () => {
    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
};

// Increment
increment.addEventListener("click", () => {
    count++;
    counter.textContent = count;
    updateCounterColor();
});

// Decrement
decrement.addEventListener("click", () => {
    count--;
    counter.textContent = count;
    updateCounterColor();
});

// Reset
reset.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
    updateCounterColor();
});

// Toggle dark mode
bgColor.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Random background color
random.addEventListener("click", () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Toggle heading text
changeText.addEventListener("click", () => {
    heading.textContent = heading.textContent === 'Heading successfully changed'
        ? 'Button Playground'
        : 'Heading successfully changed';
});

// Hide the box
hideBox.addEventListener("click", () => {
    if (box.style.display === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
});

// Font size adjusters
const adjustFontSize = (change) => {
    const currentSize = window.getComputedStyle(box).getPropertyValue('font-size');
    const newSize = parseFloat(currentSize) + change;
    box.style.fontSize = `${newSize}px`;
};

fontUp.addEventListener("click", () => adjustFontSize(2));
fontDown.addEventListener("click", () => adjustFontSize(-2));


// Random fonts

const fonts = ['Arial', 'Georgia', 'Courier New', 'Comic Sans MS', 'Verdana'];

document.getElementById('random-font').addEventListener('click', () => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.body.style.fontFamily = randomFont;
});


// Party button
let partyInterval;
let isPartying = false;

document.getElementById('party-mode').addEventListener('click', () => {
    const box = document.getElementById('box');

    if (!isPartying) {
        isPartying = true;
        box.classList.add('shake-box');
        partyInterval = setInterval(() => {
            const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            box.style.backgroundColor = color;
        }, 150);
    } else {
        isPartying = false;
        clearInterval(partyInterval);
        box.classList.remove('shake-box');
        box.style.backgroundColor = ''; // reset color
    }
});


// Confetti
document.getElementById('confetti-button').addEventListener('click', () => {
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd']
    });
});



const stamp = document.createElement('div');
stamp.textContent = '🛠️ Made by Timmy';
stamp.style.position = 'fixed';
stamp.style.bottom = '15px';
stamp.style.left = '15px';
stamp.style.background = 'rgba(0, 0, 0, 0.7)';
stamp.style.color = '#fff';
stamp.style.padding = '6px 10px';
stamp.style.borderRadius = '5px';
stamp.style.fontFamily = 'monospace';
stamp.style.fontSize = '14px';
stamp.style.zIndex = '9999';
document.body.appendChild(stamp);



console.log(`
    ╔══════════════════════╗
    ║   Made with ❤️ by    ║
    ║       Timmy 💻       ║
    ╚══════════════════════╝
    `);
