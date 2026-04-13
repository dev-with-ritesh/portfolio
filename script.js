// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 5px and 15px
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `-${size}px`;
        
        // Random animation duration between 10s and 20s
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Mobile menu toggle
function toggleMenu() {
    const menuOpenIcon = document.querySelector('.fa-bars');
    const menuCloseIcon = document.querySelector('.fa-xmark');
    const nav = document.querySelector('.nav');
    
    // Initialize - close icon hidden
    menuCloseIcon.style.display = 'none';
    
    // Open menu
    menuOpenIcon.addEventListener('click', () => {
        nav.classList.add('active');
        menuOpenIcon.style.display = 'none';
        menuCloseIcon.style.display = 'block';
    });
    
    // Close menu
    menuCloseIcon.addEventListener('click', () => {
        nav.classList.remove('active');
        menuOpenIcon.style.display = 'block';
        menuCloseIcon.style.display = 'none';
    });
    
    // Close menu when clicking any link (FIXED)
    document.querySelectorAll('.nav-links a, .nav-links button').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuOpenIcon.style.display = 'block';
            menuCloseIcon.style.display = 'none';
        });
    });
}

// Initialize toggle
toggleMenu();

// Typing Effect
const typingText = document.querySelector('.hero-text h2');
const words = ["Student", "Web Developer", "Gamer", "Creator"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;
    
function type() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);

    typingText.textContent = currentChar
    
    if (!isDeleting && charIndex < currentWord.length) {
        // Typing
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        // Deleting
        charIndex--;
        setTimeout(type, 50);
    } else {
        // Change word
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
    }
}
    
// Start typing effect
setTimeout(type, 1000);

// Profile image mouse pointer effect
function profileImageEffect() {
    const profileImage = document.querySelector('.hero-image img');

    profileImage.addEventListener('mousemove', (e) => {
        const rect = profileImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        profileImage.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
    });
        
    profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
}

// Initialize image effect
profileImageEffect();