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
// Select all testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        // Get the position of the cursor relative to the card
        const cardRect = card.getBoundingClientRect();
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;

        // Update the background of the card to follow the cursor
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(128, 0, 128, 0.6), rgba(0, 0, 0, 1) 60%)`;
    });

    card.addEventListener('mouseleave', function() {
        // Reset the background when the cursor leaves the card
        card.style.background = '';
    });
});
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        item.classList.toggle('active');
        
        const answer = item.querySelector('.faq-answer');
        if (item.classList.contains('active')) {
            answer.style.display = 'block';
            question.querySelector('span').innerHTML = '&#x25B2;'; // Up arrow
        } else {
            answer.style.display = 'none';
            question.querySelector('span').innerHTML = '&#x25BC;'; // Down arrow
        }
    });
});



