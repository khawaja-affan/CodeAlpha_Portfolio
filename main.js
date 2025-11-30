// Simple interactivity for nav, year and contact
document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); if(navLinks.classList.contains('show')) navLinks.classList.remove('show'); }
  });
});

// Contact form simple simulation
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = "Thanks! Your message has been recorded (demo).";
  formMsg.style.color = '#9fe7b6';
  form.reset();
});
