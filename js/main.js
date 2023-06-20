
   // TYPING EFFECT
const textElement = document.querySelector('.typed');
const words = ['exclusive', 'cheap', 'awesome']; // Add more words if desired
const typingDelay = 100; // Delay between each character typing
const erasingDelay = 100; // Delay between each character erasing
const newTextDelay = 1000; // Delay before typing the next word

let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    textElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (words.length) {
    setTimeout(type, newTextDelay + 250);
  }
});
