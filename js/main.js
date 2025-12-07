class KaliProvisions {
    
    constructor() {
        // Safely check if products exist
        if (typeof products !== 'undefined') {
            this.products = products; 
        } else {
            this.products = [];
            console.error("Products data not loaded!");
        }
        this.currentProducts = [];
        this.cart = [];
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupNavigation();
        this.setupSearch();
        this.loadFeaturedProducts();
        this.setupProductsPage();
        this.setupFAQPage();
        this.setupCart();
        this.loadCart();
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
    }

    setupNavigation() {
        const currentPage = window.location.pathname.split('/').pop();
        document.querySelectorAll('nav a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    setupSearch() {
        const searchInput = document.getElementById('globalSearch');
        
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
        if (!featuredContainer || this.products.length === 0) return;
        
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
        productCard.dataset.id = product.id;
        productCard.dataset.category = product.category;
        
        const icons = {
            'rice': 'fas fa-seedling',
            'oil': 'fas fa-oil-can',
            'toothpaste': 'fas fa-tooth',
            'biscuit': 'fas fa-cookie-bite',
            'snacks': 'fas fa-cookie',
            'soap': 'fas fa-soap',
            'beverages': 'fas fa-coffee',
            'personal-care': 'fas fa-pump-soap',
            'vv-gold': 'fas fa-crown',
            'other': 'fas fa-shopping-basket'
        };
        
        const icon = icons[product.category] || 'fas fa-shopping-basket';
        const hasImage = product.image && product.image !== "";
        const fullProductName = product.name + (product.weight ? ' - ' + product.weight : '');
        
        productCard.innerHTML = `
            <div class="product-img-container">
                <div class="product-img">
                    ${hasImage ? 
                        `<img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.parentElement.innerHTML='<i class=\\'${icon}\\'></i>'">` : 
                        `<i class="${icon}" style="font-size: 3rem; color: #ccc;"></i>`
                    }
                    ${product.category === 'vv-gold' ? '<div class="vv-gold-badge">VV Gold</div>' : ''}
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                ${product.weight ? `<div class="product-weight">${product.weight}</div>` : ''}
                <div class="product-rating">
                    ${this.generateStarRating(product.rating || 4.0)}
                    <span>(${product.rating || 4.0})</span>
                </div>
                <p class="product-desc">${product.description || ''}</p>
                
                <div class="product-quantity-section">
                    <div class="quantity-controls">
                        <button class="qty-btn qty-minus" data-id="${product.id}">−</button>
                        <input type="number" class="qty-input" value="1" min="1" data-id="${product.id}" data-name="${fullProductName}">
                        <button class="qty-btn qty-plus" data-id="${product.id}">+</button>
                    </div>
                    
                    <div class="product-buttons">
                        <button class="add-to-cart-btn" data-id="${product.id}">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                        
                        <a href="https://wa.me/919840416695?text=Hi,%20I%20would%20like%20to%20order%20${encodeURIComponent(fullProductName)}" 
                           class="whatsapp-btn" target="_blank">
                            <i class="fab fa-whatsapp"></i> Quick Order
                        </a>
                    </div>
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
        const searchInput = document.getElementById('productSearch');
        const categorySelect = document.getElementById('categorySelect');
        
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const category = categorySelect ? categorySelect.value : 'all';
        
        const filteredProducts = this.products.filter(product => {
            const matchesSearch = (product.name && product.name.toLowerCase().includes(searchTerm)) || 
                                  (product.description && product.description.toLowerCase().includes(searchTerm));
            const matchesCategory = category === 'all' || product.category === category;
            
            return matchesSearch && matchesCategory;
        });
        
        this.displayProducts(filteredProducts);
    }

    displayProducts(productsToShow) {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;
        
        productsGrid.innerHTML = '';
        
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
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                this.classList.toggle('active');
                answer.classList.toggle('active');
            });
        });
    }

    generateStarRating(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star" style="color: #FFD700;"></i>';
        }
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt" style="color: #FFD700;"></i>';
        }
        return stars;
    }
    
    // CART METHODS
    setupCart() {
        this.setupCartEventListeners();
    }

    loadCart() {
        const savedCart = localStorage.getItem('kaliCart');
        if (savedCart) {
            try {
                this.cart = JSON.parse(savedCart);
                this.updateCartDisplay();
            } catch (e) {
                this.cart = [];
            }
        }
    }

    saveCart() {
        localStorage.setItem('kaliCart', JSON.stringify(this.cart));
    }

    addToCart(productId, productName, quantity) {
        if (!quantity || quantity < 1) {
            this.showNotification('Please select at least 1 quantity!', 'error');
            return;
        }
        
        console.log('Adding to cart:', { productId, productName, quantity });
        
        const existingItem = this.cart.find(item => item.id == productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
            this.showNotification(`Added ${quantity} more ${productName} to cart! (Total: ${existingItem.quantity})`, 'success');
        } else {
            this.cart.push({
                id: productId,
                name: productName,
                quantity: quantity
            });
            this.showNotification(`Added ${quantity} × ${productName} to cart!`, 'success');
        }
        
        this.saveCart();
        this.updateCartDisplay();
        
        // Visual feedback
        const addToCartBtn = document.querySelector(`[data-id="${productId}"] .add-to-cart-btn`);
        const qtyInput = document.querySelector(`[data-id="${productId}"] .qty-input`);
        
        if (addToCartBtn) {
            addToCartBtn.classList.add('added', 'cart-add-animation');
            addToCartBtn.innerHTML = '<i class="fas fa-check"></i> Added!';
            addToCartBtn.style.backgroundColor = '#25D366';
            
            setTimeout(() => {
                addToCartBtn.classList.remove('added', 'cart-add-animation');
                addToCartBtn.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
                addToCartBtn.style.backgroundColor = '';
            }, 2000);
        }
        
        if (qtyInput) {
            qtyInput.value = 1;
        }
        
        this.updateHeaderCartBadge();
    }

    updateHeaderCartBadge() {
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartBadge = document.querySelector('.cart-badge');
        
        if (cartBadge) {
            if (totalItems > 0) {
                cartBadge.textContent = totalItems;
                cartBadge.style.display = 'flex';
            } else {
                cartBadge.style.display = 'none';
            }
        }
    }

    updateCartItem(productId, quantity) {
        if (quantity <= 0) {
            this.removeFromCart(productId);
            return;
        }
        
        const item = this.cart.find(item => item.id == productId);
        if (item) {
            item.quantity = quantity;
            this.saveCart();
            this.updateCartDisplay();
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id != productId);
        this.saveCart();
        this.updateCartDisplay();
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartDisplay();
        document.querySelectorAll('.qty-input').forEach(input => {
            input.value = 1;
        });
    }

    updateCartDisplay() {
        const cartItemsEl = document.getElementById('cart-items');
        const summaryTotalEl = document.getElementById('summary-total-items');
        
        // Calculate total items
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        
        // Update header badges
        document.querySelectorAll('.cart-badge, .cart-count-badge').forEach(el => {
            el.textContent = totalItems;
            el.style.display = totalItems > 0 ? 'inline-block' : 'none';
        });

        // Update Summary Count
        if (summaryTotalEl) {
            summaryTotalEl.textContent = totalItems;
        }
        
        // Safety check if we are not on cart page but have cart logic running
        if (!cartItemsEl) return;
        
        // 1. Handle Empty Cart
        if (this.cart.length === 0) {
            cartItemsEl.innerHTML = `
                <div class="empty-cart-state">
                    <i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.5;"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add some products from our store to get started.</p>
                    <a href="products.html" class="btn btn-primary" style="margin-top: 15px;">Browse Products</a>
                </div>
            `;
            return;
        }
        
        // 2. Render Cart Items (Professional Cards)
        if (window.location.pathname.includes('cart.html')) {
            cartItemsEl.innerHTML = this.cart.map(item => `
                <div class="cart-item-card" data-id="${item.id}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-meta">
                            <i class="fas fa-tag"></i> Item ID: ${item.id}
                        </div>
                    </div>
                    
                    <div class="cart-item-actions">
                        <div class="qty-control-group">
                            <button class="qty-btn-mini cart-item-minus" data-id="${item.id}">
                                <i class="fas fa-minus" style="font-size: 0.7rem;"></i>
                            </button>
                            <div class="qty-display">${item.quantity}</div>
                            <button class="qty-btn-mini cart-item-plus" data-id="${item.id}">
                                <i class="fas fa-plus" style="font-size: 0.7rem;"></i>
                            </button>
                        </div>
                        
                        <button class="btn-remove-item cart-item-remove" data-id="${item.id}" title="Remove Item">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    setupCartEventListeners() {
        document.addEventListener('click', (e) => {
            const target = e.target;
            
            // Add to Cart button
            let addToCartBtn = null;
            if (target.classList.contains('add-to-cart-btn')) {
                addToCartBtn = target;
            } else if (target.closest('.add-to-cart-btn')) {
                addToCartBtn = target.closest('.add-to-cart-btn');
            }
            
            if (addToCartBtn) {
                e.preventDefault();
                const productId = addToCartBtn.dataset.id;
                const productCard = addToCartBtn.closest('.product-card');
                
                if (!productCard) return;
                
                const productNameEl = productCard.querySelector('h3');
                const productWeightEl = productCard.querySelector('.product-weight');
                const productName = productNameEl ? 
                    productNameEl.textContent + (productWeightEl ? ' ' + productWeightEl.textContent : '') : 
                    'Unknown Product';
                
                const quantityInput = productCard.querySelector('.qty-input');
                const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
                
                this.addToCart(productId, productName, quantity);
                return;
            }
            
            // Quantity minus button
            if (target.classList.contains('qty-minus') || target.closest('.qty-minus')) {
                const btn = target.classList.contains('qty-minus') ? target : target.closest('.qty-minus');
                const input = btn.parentElement.querySelector('.qty-input');
                
                if (input) {
                    let value = parseInt(input.value) || 1;
                    if (value > 1) {
                        value--;
                        input.value = value;
                    }
                }
                return;
            }
            
            // Quantity plus button
            if (target.classList.contains('qty-plus') || target.closest('.qty-plus')) {
                const btn = target.classList.contains('qty-plus') ? target : target.closest('.qty-plus');
                const input = btn.parentElement.querySelector('.qty-input');
                
                if (input) {
                    let value = parseInt(input.value) || 1;
                    value++;
                    input.value = value;
                }
                return;
            }
            
            // Cart item controls
            if (target.classList.contains('cart-item-minus') || target.closest('.cart-item-minus')) {
                const btn = target.classList.contains('cart-item-minus') ? target : target.closest('.cart-item-minus');
                const productId = btn.dataset.id;
                const item = this.cart.find(item => item.id == productId);
                
                if (item && item.quantity > 1) {
                    this.updateCartItem(productId, item.quantity - 1);
                } else {
                    this.removeFromCart(productId);
                }
                return;
            }
            
            if (target.classList.contains('cart-item-plus') || target.closest('.cart-item-plus')) {
                const btn = target.classList.contains('cart-item-plus') ? target : target.closest('.cart-item-plus');
                const productId = btn.dataset.id;
                const item = this.cart.find(item => item.id == productId);
                
                if (item) {
                    this.updateCartItem(productId, item.quantity + 1);
                }
                return;
            }
            
            if (target.classList.contains('cart-item-remove') || target.closest('.cart-item-remove')) {
                const btn = target.classList.contains('cart-item-remove') ? target : target.closest('.cart-item-remove');
                const productId = btn.dataset.id;
                this.removeFromCart(productId);
                return;
            }
        });
        
        // Clear Cart button
        const clearCartBtn = document.getElementById('clear-cart');
        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', () => {
                if (this.cart.length === 0) {
                    this.showNotification('Cart is already empty!', 'info');
                    return;
                }
                
                if (confirm('Clear all items from cart?')) {
                    this.clearCart();
                    this.showNotification('Cart cleared!', 'success');
                }
            });
        }
        
        // WhatsApp Order button
        const sendOrderBtn = document.getElementById('send-whatsapp-order');
        if (sendOrderBtn) {
            sendOrderBtn.addEventListener('click', () => {
                this.sendWhatsAppOrder();
            });
        }
    }

    sendWhatsAppOrder() {
        const name = document.getElementById('customer-name')?.value.trim();
        const phone = document.getElementById('customer-phone')?.value.trim();
        const location = document.getElementById('customer-location')?.value.trim();
        const orderType = document.querySelector('input[name="order-type"]:checked')?.value;
        
        if (!name || !phone) {
            this.showNotification('Please enter your name and phone number!', 'error');
            return;
        }
        
        if (this.cart.length === 0) {
            this.showNotification('Your cart is empty! Add some products first.', 'error');
            return;
        }
        
        let message = `*NEW ORDER - KALI PROVISIONS*\n\n`;
        message += `*Customer Name:* ${name}\n`;
        message += `*Phone:* ${phone}\n`;
        if (location) message += `*Location:* ${location}\n`;
        message += `*Order Type:* ${orderType === 'instore' ? 'In-Store Pickup' : 'Cash on Delivery (COD)'}\n`;
        message += `*Order Time:* ${new Date().toLocaleString()}\n\n`;
        message += `*ORDER ITEMS:*\n`;
        
        this.cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} - Quantity: ${item.quantity}\n`;
        });
        
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        message += `\n*Order Summary:*\n`;
        message += `- Total Items: ${totalItems}\n`;
        message += `- Product Types: ${this.cart.length}\n`;
        message += `- Payment: ${orderType === 'instore' ? 'Pay at Store' : 'Cash on Delivery'}\n`;
        
        if (orderType === 'cod') {
            message += `- COD Minimum: ₹800 (total will be confirmed)\n`;
        }
        
        message += `\nPlease confirm availability and total amount. Thank you! 🛒`;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/919840416695?text=${encodedMessage}`, '_blank');
        this.showNotification('Order sent via WhatsApp! Please check your WhatsApp to confirm.', 'success');
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => notification.classList.add('show'), 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        });
        
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    window.kaliProvisions = new KaliProvisions();
});