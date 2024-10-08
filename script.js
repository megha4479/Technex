// JavaScript for Responsive Navbar
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.navbar-links');

// Add a class to change the navbar background when scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Smooth scrolling for all links
const allLinks = document.querySelectorAll('a[href^="#"]');
allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
