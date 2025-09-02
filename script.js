// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.innerHTML;
    
    // Add a small delay for better visual effect
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 80);
    }, 500);
});

// Parallax effect for floating cards
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        card.style.transform = `translateY(${yPos}px)`;
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
        const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
        const subject = formData.get('subject') || contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = formData.get('message') || contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Skill bars animation
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
}

// Trigger skill animation when skills section is visible
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when about section is visible
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add CSS for loading animation
    if (!document.querySelector('#loading-styles')) {
        const style = document.createElement('style');
        style.id = 'loading-styles';
        style.textContent = `
            body:not(.loaded) {
                overflow: hidden;
            }
            body:not(.loaded)::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            body:not(.loaded)::after {
                content: 'Loading...';
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-size: 1.5rem;
                font-weight: 600;
                z-index: 10000;
            }
        `;
        document.head.appendChild(style);
    }
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(102, 126, 234, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle 6s infinite linear;
        `;
        
        // Random positioning and animation delay
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        hero.appendChild(particle);
    }
    
    // Add particle animation CSS
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes float-particle {
                0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize particles
createParticles();

// ===== FUN & INTERACTIVE ELEMENTS =====

// Click Counter Easter Egg
let clickCount = 0;
const clickCounter = document.getElementById('click-counter');
if (clickCounter) {
    clickCounter.addEventListener('click', () => {
        clickCount++;
        clickCounter.textContent = clickCount;
        clickCounter.style.transform = 'scale(1.5)';
        setTimeout(() => {
            clickCounter.style.transform = 'scale(1)';
        }, 200);
        
        // Special messages at certain click counts
        if (clickCount === 10) {
            showNotification('🎉 10 clicks! You\'re persistent!', 'success');
        } else if (clickCount === 25) {
            showNotification('🔥 25 clicks! Are you bored? 😄', 'success');
        } else if (clickCount === 50) {
            showNotification('💎 50 clicks! You found the diamond!', 'success');
        } else if (clickCount === 100) {
            showNotification('🏆 100 clicks! Achievement unlocked!', 'success');
        }
    });
}

// Secret Button
const secretButton = document.getElementById('secret-button');
if (secretButton) {
    secretButton.addEventListener('click', () => {
        const messages = [
            '🤫 Shh... this is a secret!',
            '🎭 You found the hidden button!',
            '🔐 Secret message: You\'re awesome!',
            '🎪 Welcome to the secret club!',
            '🌟 You have a keen eye for details!'
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        showNotification(randomMessage, 'success');
        
        // Add some fun effects
        secretButton.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => {
            secretButton.style.transform = 'rotate(0deg) scale(1)';
        }, 500);
    });
}

// Interactive Background Icons
document.querySelectorAll('.floating-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const emoji = icon.textContent;
        const messages = {
            '🎵': 'Music is life! 🎶',
            '🚀': 'To infinity and beyond! 🌌',
            '💎': 'You found the hidden gem! 💎',
            '🎯': 'Bullseye! You\'re on target! 🎯'
        };
        
        if (messages[emoji]) {
            showNotification(messages[emoji], 'success');
        }
        
        // Add bounce effect
        icon.style.transform = 'scale(1.5) rotate(15deg)';
        setTimeout(() => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
});

// Profile Interactive
const profileInteractive = document.getElementById('profile-interactive');
if (profileInteractive) {
    profileInteractive.addEventListener('click', () => {
        const facts = [
            'I once debugged for 12 hours straight! 😅',
            'My first "Hello World" was in BASIC! 👶',
            'I dream in code sometimes! 💭',
            'Coffee is my debugging fuel! ☕',
            'I can recite the alphabet backwards in binary! 🤓'
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        showNotification(randomFact, 'info');
        
        // Add rotation effect
        profileInteractive.style.transform = 'rotate(360deg) scale(1.1)';
        setTimeout(() => {
            profileInteractive.style.transform = 'rotate(0deg) scale(1)';
        }, 600);
    });
}

// Fun Fact Generator
const funFactBtn = document.getElementById('fun-fact-btn');
const funFactDisplay = document.getElementById('fun-fact-display');
if (funFactBtn && funFactDisplay) {
    const funFacts = [
        'I can solve a Rubik\'s cube in under 2 minutes! 🎯',
        'I once built an entire app in one weekend! 🚀',
        'My favorite programming language is JavaScript! 💻',
        'I\'ve contributed to open source projects! 🌟',
        'I can type 120+ WPM! ⚡',
        'I love learning new technologies! 📚',
        'I\'ve never met a bug I couldn\'t fix! 🐛',
        'I code better with music playing! 🎵',
        'I can debug by just looking at the code! 👁️',
        'I\'ve deployed apps to 5 different cloud platforms! ☁️'
    ];
    
    funFactBtn.addEventListener('click', () => {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        funFactDisplay.textContent = randomFact;
        funFactDisplay.style.animation = 'fadeInUp 0.5s ease-out';
        
        // Add button effect
        funFactBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            funFactBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// Konami Code Easter Egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showKonamiEasterEgg();
        konamiCode = [];
    }
});

function showKonamiEasterEgg() {
    const easterEgg = document.getElementById('konami-easter-egg');
    if (easterEgg) {
        easterEgg.style.display = 'flex';
        
        // Add some fun effects
        easterEgg.style.animation = 'fadeInUp 0.5s ease-out';
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            easterEgg.style.display = 'none';
        }, 10000);
    }
}

// Close easter egg
document.querySelectorAll('.close-easter-egg').forEach(btn => {
    btn.addEventListener('click', () => {
        const easterEgg = document.getElementById('konami-easter-egg');
        if (easterEgg) {
            easterEgg.style.display = 'none';
        }
    });
});

// Mini Game: Code Typing Challenge
const startGameBtn = document.getElementById('start-game');
const resetGameBtn = document.getElementById('reset-game');
const codeDisplay = document.getElementById('code-display');
const codeInput = document.getElementById('code-input');
const wpmDisplay = document.getElementById('wpm-display');
const accuracyDisplay = document.getElementById('accuracy-display');
const timeDisplay = document.getElementById('time-display');

if (startGameBtn && resetGameBtn && codeDisplay && codeInput) {
    let gameActive = false;
    let gameTimer;
    let timeLeft = 60;
    let startTime;
    let totalTyped = 0;
    let correctTyped = 0;
    
    const codeSnippets = [
        `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}`,
        `const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];
    const left = arr.slice(1).filter(x => x < pivot);
    const right = arr.slice(1).filter(x => x >= pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}`,
        `class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    
    insert(value) {
        if (value < this.value) {
            if (this.left) this.left.insert(value);
            else this.left = new BinaryTree(value);
        } else {
            if (this.right) this.right.insert(value);
            else this.right = new BinaryTree(value);
        }
    }
}`,
        `const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}`,
        `const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
};`
    ];
    
    startGameBtn.addEventListener('click', startGame);
    resetGameBtn.addEventListener('click', resetGame);
    codeInput.addEventListener('input', checkInput);
    
    function startGame() {
        if (gameActive) return;
        
        gameActive = true;
        startGameBtn.disabled = true;
        resetGameBtn.disabled = false;
        codeInput.disabled = false;
        
        // Select random code snippet
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        codeDisplay.textContent = randomSnippet;
        
        // Reset game state
        timeLeft = 60;
        totalTyped = 0;
        correctTyped = 0;
        startTime = Date.now();
        
        // Start timer
        gameTimer = setInterval(() => {
            timeLeft--;
            timeDisplay.textContent = timeLeft + 's';
            
            if (timeLeft <= 0) {
                endGame();
            }
        }, 1000);
        
        codeInput.focus();
        codeInput.value = '';
    }
    
    function checkInput() {
        if (!gameActive) return;
        
        const input = codeInput.value;
        const target = codeDisplay.textContent;
        
        totalTyped = input.length;
        
        // Calculate accuracy
        let correct = 0;
        for (let i = 0; i < Math.min(input.length, target.length); i++) {
            if (input[i] === target[i]) correct++;
        }
        correctTyped = correct;
        
        // Calculate WPM (assuming average word length of 5 characters)
        const timeElapsed = (Date.now() - startTime) / 1000 / 60; // minutes
        const wpm = Math.round((correct / 5) / timeElapsed);
        wpmDisplay.textContent = wpm || 0;
        
        // Calculate accuracy percentage
        const accuracy = totalTyped > 0 ? Math.round((correct / totalTyped) * 100) : 100;
        accuracyDisplay.textContent = accuracy + '%';
        
        // Check if completed
        if (input === target) {
            endGame();
        }
    }
    
    function endGame() {
        gameActive = false;
        clearInterval(gameTimer);
        
        startGameBtn.disabled = false;
        resetGameBtn.disabled = true;
        codeInput.disabled = true;
        
        // Show results
        const finalWpm = parseInt(wpmDisplay.textContent);
        const finalAccuracy = accuracyDisplay.textContent;
        
        let message = `Game Over! 🎮\nWPM: ${finalWpm}\nAccuracy: ${finalAccuracy}`;
        
        if (finalWpm > 80) {
            message += '\n🏆 Excellent typing speed!';
        } else if (finalWpm > 50) {
            message += '\n👍 Good job!';
        } else {
            message += '\n💪 Keep practicing!';
        }
        
        showNotification(message, 'success');
    }
    
    function resetGame() {
        gameActive = false;
        clearInterval(gameTimer);
        
        startGameBtn.disabled = false;
        resetGameBtn.disabled = true;
        codeInput.disabled = true;
        
        codeDisplay.textContent = 'Click Start to begin the challenge!';
        codeInput.value = '';
        wpmDisplay.textContent = '0';
        accuracyDisplay.textContent = '100%';
        timeDisplay.textContent = '60s';
        timeLeft = 60;
    }
}

// Add click effects to various elements
document.querySelectorAll('.stat-item, .skill-item, .project-card').forEach(element => {
    element.addEventListener('click', () => {
        element.style.transform = 'scale(0.95)';
        setTimeout(() => {
            element.style.transform = '';
        }, 150);
    });
});

// Random fun effects on page load
window.addEventListener('load', () => {
    // Add some random floating elements
    setTimeout(() => {
        const randomEmojis = ['🎉', '✨', '🚀', '💡', '🎯', '🌟', '💎', '🎪'];
        const randomEmoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
        
        const floatingElement = document.createElement('div');
        floatingElement.textContent = randomEmoji;
        floatingElement.style.cssText = `
            position: fixed;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            font-size: 2rem;
            pointer-events: none;
            z-index: 9999;
            animation: floatAndFade 3s ease-out forwards;
        `;
        
        document.body.appendChild(floatingElement);
        
        setTimeout(() => {
            floatingElement.remove();
        }, 3000);
    }, 2000);
});

// Add CSS animation for floating elements
if (!document.querySelector('#floating-animations')) {
    const style = document.createElement('style');
    style.id = 'floating-animations';
    style.textContent = `
        @keyframes floatAndFade {
            0% { transform: translateY(0) scale(0); opacity: 1; }
            50% { transform: translateY(-50px) scale(1.2); opacity: 1; }
            100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}
