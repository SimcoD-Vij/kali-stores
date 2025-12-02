// Animations for Kali Provisions Website

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
});

function initializeAnimations() {
    setupScrollAnimations();
    setupHoverEffects();
    setupLoadingAnimations();
    setupSmoothScrolling();
    addButtonLoading();
    setupParallax();
}

// Scroll Animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .product-card, .category-card, .value-card');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
}

// Hover Effects
function setupHoverEffects() {
    // Add hover class to interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .product-card, .category-card, .feature-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// Loading Animations
function setupLoadingAnimations() {
    // Add loading animation to product images
    const productImages = document.querySelectorAll('.product-img');
    
    productImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Pulse animation for WhatsApp button
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        // Use CSS animation instead of JavaScript for better performance
        whatsappBtn.style.animation = 'pulse 2s infinite';
    }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default for same-page anchors
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Add loading state to buttons
function addButtonLoading() {
    const buttons = document.querySelectorAll('.btn[type="submit"], .btn[type="button"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Only for buttons that should show loading
            if (!this.classList.contains('no-loading')) {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                this.disabled = true;
                
                // Reset after 2 seconds (for demo)
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
}

// Parallax effect for hero section
function setupParallax() {
    const hero = document.querySelector('.hero');
    if (hero) {
        // Use requestAnimationFrame for smoother performance
        let ticking = false;
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.3;
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            ticking = false;
        }
        
        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', onScroll, { passive: true });
    }
}

// Initialize all animations when page loads
window.addEventListener('load', function() {
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
    
    // Additional animations for VV Gold elements
    animateVVGoldElements();
});

// Special animations for VV Gold brand
function animateVVGoldElements() {
    const vvGoldElements = document.querySelectorAll('.vv-gold-category, .vv-gold-badge');
    
    vvGoldElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        }, 300);
    });
}

// Error handling for animations
window.addEventListener('error', function(e) {
    console.log('Animation error:', e.message);
    // Continue execution even if animations fail
});

// Export functions for global access (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeAnimations,
        setupScrollAnimations,
        setupHoverEffects
    };
}vv// Animations for Kali Provisions Website

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
});

function initializeAnimations() {
    setupScrollAnimations();
    setupHoverEffects();
    setupLoadingAnimations();
    setupSmoothScrolling();
    addButtonLoading();
    setupParallax();
}

// Scroll Animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .product-card, .category-card, .value-card');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }
}

// Hover Effects
function setupHoverEffects() {
    // Add hover class to interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .product-card, .category-card, .feature-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// Loading Animations
function setupLoadingAnimations() {
    // Add loading animation to product images
    const productImages = document.querySelectorAll('.product-img');
    
    productImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Pulse animation for WhatsApp button
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        // Use CSS animation instead of JavaScript for better performance
        whatsappBtn.style.animation = 'pulse 2s infinite';
    }
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default for same-page anchors
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Add loading state to buttons
function addButtonLoading() {
    const buttons = document.querySelectorAll('.btn[type="submit"], .btn[type="button"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Only for buttons that should show loading
            if (!this.classList.contains('no-loading')) {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                this.disabled = true;
                
                // Reset after 2 seconds (for demo)
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
}

// Parallax effect for hero section
function setupParallax() {
    const hero = document.querySelector('.hero');
    if (hero) {
        // Use requestAnimationFrame for smoother performance
        let ticking = false;
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.3;
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            ticking = false;
        }
        
        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', onScroll, { passive: true });
    }
}

// Initialize all animations when page loads
window.addEventListener('load', function() {
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
    
    // Additional animations for VV Gold elements
    animateVVGoldElements();
});

// Special animations for VV Gold brand
function animateVVGoldElements() {
    const vvGoldElements = document.querySelectorAll('.vv-gold-category, .vv-gold-badge');
    
    vvGoldElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        }, 300);
    });
}

// Error handling for animations
window.addEventListener('error', function(e) {
    console.log('Animation error:', e.message);
    // Continue execution even if animations fail
});

// Export functions for global access (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeAnimations,
        setupScrollAnimations,
        setupHoverEffects
    };
}