class KaliProvisions {
    constructor() {
        this.products = products; // This uses your products array
        this.currentProducts = [];
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupNavigation();
        this.setupSearch();
        this.loadFeaturedProducts();
        this.setupProductsPage();
        this.setupFAQPage();
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('nav');
        
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                nav.classList.toggle('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            });
        }
        
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                if (mobileMenuBtn) {
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    setupNavigation() {
        const currentPage = window.location.pathname.split('/').pop();
        document.querySelectorAll('nav a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    setupSearch() {
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const searchTerm = searchInput.value.trim();
                    if (searchTerm) {
                        window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
                    }
                }
            });
        }
    }

    loadFeaturedProducts() {
        const featuredContainer = document.getElementById('featuredProducts');
        if (!featuredContainer) return;
        
        featuredContainer.innerHTML = '';
        
        const featuredProducts = this.products.slice(0, 4);
        
        featuredProducts.forEach(product => {
            const productCard = this.createProductCard(product);
            featuredContainer.appendChild(productCard);
        });
    }

    createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const icons = {
            'rice': 'fas fa-wine-bottle',
            'oil': 'fas fa-oil-can',
            'toothpaste': 'fas fa-tooth',
            'biscuit': 'fas fa-cookie-bite',
            'snacks': 'fas fa-cookie',
            'soap': 'fas fa-soap',
            'beverages': 'fas fa-coffee',
            'personal-care': 'fas fa-pump-soap',
            'other': 'fas fa-shopping-basket',
            'vv-gold': 'fas fa-crown'
        };
        
        const icon = icons[product.category] || 'fas fa-shopping-basket';
        
        productCard.innerHTML = `
            <div class="product-img">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" />` : `<i class="${icon}"></i>`}
                ${product.category === 'vv-gold' ? '<div class="vv-gold-badge">VV Gold</div>' : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                ${product.weight ? `<div class="product-weight">${product.weight}</div>` : ''}
                <div class="product-rating">
                    ${this.generateStarRating(product.rating)}
                    <span>(${product.rating})</span>
                </div>
                <p class="product-desc">${product.description}</p>
                <div class="product-actions">
                    <a href="https://wa.me/919840416695?text=Hi,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name + (product.weight ? ' - ' + product.weight : ''))}" 
                       class="whatsapp-btn" target="_blank">
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
        `;
        
        return productCard;
    }

    setupProductsPage() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;
        
        this.displayProducts(this.products);
        
        const searchInput = document.getElementById('productSearch');
        const categorySelect = document.getElementById('categorySelect');
        
        if (searchInput) {
            searchInput.addEventListener('input', () => this.filterProducts());
        }
        
        if (categorySelect) {
            categorySelect.addEventListener('change', () => this.filterProducts());
        }
        
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('search');
        const categoryParam = urlParams.get('category');
        
        if (searchParam && searchInput) {
            searchInput.value = searchParam;
            this.filterProducts();
        }
        
        if (categoryParam && categorySelect) {
            categorySelect.value = categoryParam;
            this.filterProducts();
        }
    }

    filterProducts() {
        const searchTerm = document.getElementById('productSearch')?.value.toLowerCase() || '';
        const category = document.getElementById('categorySelect')?.value || 'all';
        
        const filteredProducts = this.products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = category === 'all' || product.category === category;
            
            return matchesSearch && matchesCategory;
        });
        
        this.displayProducts(filteredProducts);
    }

    displayProducts(productsToShow) {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;
        
        productsGrid.innerHTML = '';
        this.currentProducts = productsToShow;
        
        if (productsToShow.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-search"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }
        
        productsToShow.forEach(product => {
            const productCard = this.createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }

    setupFAQPage() {
        const faqCategories = document.querySelectorAll('.faq-category');
        const faqContents = document.querySelectorAll('.faq-category-content');
        
        faqCategories.forEach(category => {
            category.addEventListener('click', function() {
                const categoryId = this.getAttribute('data-category');
                
                faqCategories.forEach(cat => cat.classList.remove('active'));
                faqContents.forEach(content => content.classList.remove('active'));
                
                this.classList.add('active');
                document.getElementById(categoryId).classList.add('active');
            });
        });
        
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const icon = this.querySelector('i');
                
                this.classList.toggle('active');
                answer.classList.toggle('active');
                
                if (icon.classList.contains('fa-chevron-down')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
                
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== this && otherQuestion.classList.contains('active')) {
                        otherQuestion.classList.remove('active');
                        otherQuestion.nextElementSibling.classList.remove('active');
                        const otherIcon = otherQuestion.querySelector('i');
                        otherIcon.classList.remove('fa-chevron-up');
                        otherIcon.classList.add('fa-chevron-down');
                    }
                });
            });
        });
        
        if (faqQuestions.length > 0) {
            faqQuestions[0].click();
        }
    }

    generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.kaliProvisions = new KaliProvisions();
});







// Load featured products on homepage
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    if (!featuredContainer) return;
    
    featuredContainer.innerHTML = '';
    
    // Use first 4 products from allProducts as featured
    const featuredProducts = allProducts.slice(0, 4);
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredContainer.appendChild(productCard);
    });
}

// Create product card HTML
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    const icons = {
        'rice': 'fas fa-wine-bottle',
        'oil': 'fas fa-oil-can',
        'spices': 'fas fa-mortar-pestle',
        'grains': 'fas fa-seedling',
        'pulses': 'fas fa-seedling',
        'beverages': 'fas fa-coffee',
        'essentials': 'fas fa-cube',
        'vegetables': 'fas fa-carrot',
        'snacks': 'fas fa-cookie',
        'personalcare': 'fas fa-pump-soap',
        'vv-gold': 'fas fa-crown'
    };
    
    const icon = icons[product.category] || 'fas fa-shopping-basket';
    
    productCard.innerHTML = `
        <div class="product-img">
            <i class="${icon}"></i>
            ${product.category === 'vv-gold' ? '<div class="vv-gold-badge">VV Gold</div>' : ''}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            ${product.price ? `<div class="product-price">${product.price}</div>` : ''}
            <div class="product-rating">
                ${generateStarRating(product.rating)}
                <span>(${product.rating})</span>
            </div>
            <p class="product-desc">${product.description}</p>
            <div class="product-actions">
                <a href="https://wa.me/919840416695?text=Hi,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}" 
                   class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Order on WhatsApp
                </a>
            </div>
        </div>
    `;
    
    return productCard;
}

// Products Page Functionality
function setupProductsPage() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    // Display all products initially
    displayProducts(allProducts);
    
    // Add event listeners for filters
    const searchInput = document.getElementById('productSearch');
    const categorySelect = document.getElementById('categorySelect');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }
    
    if (categorySelect) {
        categorySelect.addEventListener('change', filterProducts);
    }
    
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const categoryParam = urlParams.get('category');
    
    if (searchParam && searchInput) {
        searchInput.value = searchParam;
        filterProducts();
    }
    
    if (categoryParam && categorySelect) {
        categorySelect.value = categoryParam;
        filterProducts();
    }
}

// Filter products based on search and category
function filterProducts() {
    const searchTerm = document.getElementById('productSearch')?.value.toLowerCase() || '';
    const category = document.getElementById('categorySelect')?.value || 'all';
    
    const filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    displayProducts(filteredProducts);
}

// Display products in grid
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--primary); margin-bottom: 15px;"></i>
                <h3 style="color: var(--secondary); margin-bottom: 10px;">No products found</h3>
                <p style="color: rgba(255,255,255,0.7);">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// FAQ Page Functionality
function setupFAQPage() {
    // FAQ Category Tabs
    const faqCategories = document.querySelectorAll('.faq-category');
    const faqContents = document.querySelectorAll('.faq-category-content');
    
    faqCategories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category');
            
            // Remove active class from all categories and contents
            faqCategories.forEach(cat => cat.classList.remove('active'));
            faqContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked category and corresponding content
            this.classList.add('active');
            document.getElementById(categoryId).classList.add('active');
        });
    });
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle active class
            this.classList.toggle('active');
            answer.classList.toggle('active');
            
            // Toggle icon
            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
            
            // Close other open FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this && otherQuestion.classList.contains('active')) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('active');
                    const otherIcon = otherQuestion.querySelector('i');
                    otherIcon.classList.remove('fa-chevron-up');
                    otherIcon.classList.add('fa-chevron-down');
                }
            });
        });
    });
    
    // Open first FAQ by default
    if (faqQuestions.length > 0) {
        faqQuestions[0].click();
    }
}

// Generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}