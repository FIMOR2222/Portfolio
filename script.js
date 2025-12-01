// ================================
// PORTFOLIO NAVIGATION & INTERACTIVITY
// ================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Set active nav link based on current page
    setActiveNavLink();
    
    // Add smooth scroll behavior
    initSmoothScroll();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translateY(12px)' : 'rotate(0) translateY(0)';
            spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translateY(-12px)' : 'rotate(0) translateY(0)';
        });
        
        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                
                // Reset hamburger animation
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'rotate(0) translateY(0)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'rotate(0) translateY(0)';
            });
        });
    }
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Smooth scroll for internal links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll animation for elements
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.skill-card, .education-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimation);
} else {
    initScrollAnimation();
}

// Add hover effects to interactive elements
function initHoverEffects() {
    const skillCards = document.querySelectorAll('.skill-card');
    const educationCards = document.querySelectorAll('.education-card');
    const contactItems = document.querySelectorAll('.contact-item');
    
    const elements = [...skillCards, ...educationCards, ...contactItems];
    
    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// Initialize hover effects
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHoverEffects);
} else {
    initHoverEffects();
}

// Page transition animation
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0.5';
});

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Skip if typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }
    
    // Navigation with arrow keys
    const navLinks = document.querySelectorAll('.nav-link');
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        const activeIndex = Array.from(navLinks).findIndex(link => link.classList.contains('active'));
        if (activeIndex < navLinks.length - 1) {
            navLinks[activeIndex + 1].click();
        }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        const activeIndex = Array.from(navLinks).findIndex(link => link.classList.contains('active'));
        if (activeIndex > 0) {
            navLinks[activeIndex - 1].click();
        }
    }
});

// Console message
console.log('%cWelcome to Fard\'s Portfolio!', 'color: #45b7d1; font-size: 20px; font-weight: bold;');
console.log('%cMade with passion and code ✨', 'color: #2d5f8d; font-size: 14px;');
