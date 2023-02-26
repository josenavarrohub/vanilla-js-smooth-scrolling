'use strict';

// Elements
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

// Event listeners
btn1.addEventListener('click', () => {
  section2.scrollIntoView({behavior: 'smooth'});
});

btn2.addEventListener('click', () => {
  section1.scrollIntoView({behavior: 'smooth'});
});
