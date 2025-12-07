const products = [


    // Rice Category (16 products)
    {
        id: 1, 
        name: "Five star sivaji rice",
        weight :"10kg",
        category:"rice",
        image:"https://5.imimg.com/data5/SELLER/Default/2025/2/492084890/ND/SO/EO/92127758/shivaji-rice-10-kg-500x500.jpg",
        rating:4.9,
        description:"premium quality boiled rice with taste and texture"
    
    },
    { 
        id: 2, 
        name: "Five Stars Sivaji Rice", 
        weight: "25kg", 
        category: "rice", 
        image:"https://5.imimg.com/data5/SELLER/Default/2025/2/492084890/ND/SO/EO/92127758/shivaji-rice-10-kg-500x500.jpg",
        rating: 4.5,
        description: "Economy pack of premium boiled rice for family use"
    },
    { 
        id: 3, 
        name: "Krishna Rice", 
        weight: "10kg", 
        category: "rice", 
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.3,
        description: "High-quality rice with perfect grain consistency"
    },
    { 
        id: 4, 
        name: "VKR Sivaji Rice", 
        weight: "10kg", 
        category: "rice", 
        image: "https://5.imimg.com/data5/SELLER/Default/2025/2/492084890/ND/SO/EO/92127758/shivaji-rice-10-kg-500x500.jpg",
        rating: 4.2,
        description: "Trusted brand rice with excellent cooking quality"
    },
    { 
        id: 5, 
        name: "Muthayam Rice", 
        weight: "10kg", 
        category: "rice", 
        image: "https://5.imimg.com/data5/SELLER/Default/2024/7/435495999/DY/WC/PN/107895787/10kg-muthayam-rice-1000x1000.jpg",
        rating: 4.4,
        description: "Traditional rice variety with authentic taste"
    },
    { 
        id: 6, 
        name: "Chennai Gate Rice", 
        weight: "10kg", 
        category: "rice", 
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.1,
        description: "Premium rice from Chennai with great flavor"
    },
    { 
        id: 7, 
        name: "Five Star Sivaji Rice", 
        weight: "5kg", 
        category: "rice", 
        image: "https://5.imimg.com/data5/SELLER/Default/2021/7/IU/FX/MR/56140060/5-star-sivaji-premium-boiled-rice-5-kg-pack-1000x1000.png",
        rating: 4.5,
        description: "Convenient 5kg pack of premium Sivaji rice"
    },
    { 
        id: 8, 
        name: "Five Star Krishna Rice", 
        weight: "5kg", 
        category: "rice", 
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.3,
        description: "Quality Krishna rice in convenient packaging"
    },
    { 
        id: 9, 
        name: "sri Krishna Rice", 
        weight: "25kg", 
        category: "rice", 
        image: "https://5.imimg.com/data5/SELLER/Default/2023/1/ZN/VE/KF/142182497/psa-sri-krishna-boiled-rice-1000x1000.jpg",
        rating: 4.3,
        description: "Bulk pack of Krishna rice for commercial use"
    },
    { 
        id: 10, 
        name: "KGP Krishna Rice", 
        weight: "25kg", 
        category: "rice", 
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.2,
        description: "KGP brand Krishna rice with consistent quality"
    },
    { 
        id: 11, 
        name: "ASP Krishna Rice", 
        weight: "25kg", 
        category: "rice", 
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.1,
        description: "ASP brand rice with good cooking results"
    },
    { 
        id: 12, 
        name: "VKR Sivaji Rice", 
        weight: "25kg", 
        category: "rice", 
        image: "https://www.bigbasket.com/media/uploads/p/l/40256924_1-vkr-sivaji-boiled-rice.jpg",
        rating: 4.2,
        description: "Large pack of VKR Sivaji rice for bulk cooking"
    },
    { 
        id: 13, 
        name: "Muthayam Rice", 
        weight: "25kg", 
        category: "rice", 
        image: "https://5.imimg.com/data5/SELLER/Default/2023/9/348301442/OZ/DH/HZ/7224144/muthayam-classic-super-premium-stream-rice-1000x1000.jpeg",
        rating: 4.4,
        description: "Bulk pack of traditional Muthayam rice"
    },
    { 
        id: 14, 
        name: "Gomatha Rice", 
        weight: "25kg", 
        category: "rice", 
        image: "https://5.imimg.com/data5/QC/YW/YQ/SELLER-19465668/silky-polish-non-basmati-rice-500x500.jpg",
        rating: 4.0,
        description: "Gomatha brand rice with good quality"
    },
    { 
        id: 15, 
        name: "M200G Rice", 
        weight: "200g", 
        category: "rice", 
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 3.8,
        description: "Small trial pack of rice for single use"
    },
    { 
        id: 16, 
        name: "thanga mayil Brand Rice", 
        weight: "25kg", 
        category: "rice", 
        image: "https://5.imimg.com/data5/SELLER/Default/2024/10/457219537/CH/UH/JQ/12648496/img-20240916-134418-1-500x500.jpg",
        rating: 4.1,
        description: "Mayil brand rice with consistent quality"
    },

    // Oil Category (17 products)
    { 
        id: 17, 
        name: "Gold Winner Oil", 
        weight: "1L Packet", 
        category: "oil", 
        image: "https://5.imimg.com/data5/SELLER/Default/2023/2/CJ/PJ/DU/182593047/274141-11-gold-winner-refined-sunflower-oil-1000x1000.jpg",
        rating: 4.6,
        description: "Premium sunflower oil for healthy cooking"
    },
    { 
        id: 18, 
        name: "Gold Winner Oil", 
        weight: "500ml Packet", 
        category: "oil", 
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/da/cms-assets/cms/product/42320631-59f1-404c-9769-c31763d6b7bd.png",
        rating: 4.6,
        description: "Medium pack of premium sunflower oil"
    },
    { 
        id: 19, 
        name: "Gold Winner Oil", 
        weight: "200ml Packet", 
        category: "oil", 
        image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/269e052f-f685-46b4-91ae-2d53cf9b845f.png",
        rating: 4.5,
        description: "Small pack of sunflower oil for trial"
    },
    { 
        id: 20, 
        name: "Balm Oil", 
        weight: "1L Packet", 
        category: "oil", 
        image: "https://5.imimg.com/data5/SELLER/Default/2023/9/345745920/QM/AJ/EQ/57788802/rishi-gold-palm-oil-1000x1000.jpeg",
        rating: 4.3,
        description: "Balm brand cooking oil for daily use"
    },
    { 
        id: 21, 
        name: "Balm Oil", 
        weight: "500ml Packet", 
        category: "oil", 
        image: "https://3.imimg.com/data3/VD/MM/MY-6601575/rishi-gold-palm-oil-1000x1000.jpg",
        rating: 4.3,
        description: "Medium pack of Balm cooking oil"
    },
    { 
        id: 22, 
        name: "Saffola Oil", 
        weight: "1L Packet", 
        category: "oil", 
        image: "https://m.media-amazon.com/images/I/811e+gTF7oL._SL1500_.jpg",
        rating: 4.7,
        description: "Heart-healthy blended oil with antioxidants"
    },
    { 
        id: 23, 
        name: "MR Gold Groundnut Oil", 
        weight: "1L Packet", 
        category: "oil", 
        image: "https://tse4.mm.bing.net/th/id/OIP.h_Ch1G_4xjADl74NDEJAcQAAAA?pid=Api&P=0&h=180",
        rating: 4.4,
        description: "Pure groundnut oil for authentic taste"
    },
    { 
        id: 24, 
        name: "SVS Groundnut Oil", 
        weight: "1L Packet", 
        category: "oil", 
        image: "https://m.media-amazon.com/images/I/812YAwKDEuL._SL1500_.jpg",
        rating: 4.2,
        description: "SVS brand pure groundnut oil"
    },
    { 
        id: 25, 
        name: "Poorna Rice Oil", 
        weight: "1L Packet", 
        category: "oil", 
        image: "https://m.media-amazon.com/images/I/81ZCPLCQiRL._SX569_.jpg",
        rating: 4.1,
        description: "Rice bran oil for healthy cooking"
    },
    { 
        id: 26, 
        name: "Idhayam Refined Gingelly Oil", 
        weight: "500ml Packet", 
        category: "oil", 
        image: "https://www.jiomart.com/images/product/600x600/490007878/idhayam-gingelly-oil-500-ml-pouch-product-images-o490007878-p490007878-1-202203151955.jpg",
        rating: 4.8,
        description: "Premium refined gingelly oil for traditional cooking"
    },
    { 
        id: 27, 
        name: "Idhayam Refined Gingelly Oil", 
        weight: "100ml Packet", 
        category: "oil", 
        image: "https://tse3.mm.bing.net/th/id/OIP.6Z7Hu5mt1ABRdl7_45tHTwHaHa?pid=Api&P=0&h=180",
        rating: 4.7,
        description: "Small pack of premium gingelly oil"
    },
    { 
        id: 28, 
        name: "Idhayam Refined Gingelly Oil", 
        weight: "50ml Packet", 
        category: "oil", 
        image: "https://tse3.mm.bing.net/th/id/OIP.6Z7Hu5mt1ABRdl7_45tHTwHaHa?pid=Api&P=0&h=180",
        rating: 4.7,
        description: "Trial pack of refined gingelly oil"
    },
    { 
        id: 29, 
        name: "KPL Coconut Oil", 
        weight: "500ml Packet", 
        category: "oil", 
        image: "https://www.jiomart.com/images/product/600x600/490016725/kpl-shudhi-coconut-oil-1-l-pouch-product-images-o490016725-p590485029-0-202203170756.jpg",
        rating: 4.5,
        description: "Pure coconut oil for cooking and hair care"
    },
    { 
        id: 30, 
        name: "Dalda Oil", 
        weight: "100ml Packet", 
        category: "oil", 
        image: "https://nsstores.in/wp-content/uploads/2025/07/untitleddesign_1_original-47-1.png",
        rating: 4.0,
        description: "Dalda brand cooking oil in small pack"
    },
    { 
        id: 31, 
        name: "Cheku Groundnut Oil Sathyam", 
        weight: "1L Bottle", 
        category: "oil", 
        image: "https://5.imimg.com/data5/SELLER/Default/2024/8/439529134/YP/XH/OC/38463047/1l-sathyam-groundnut-oil-1000x1000.jpeg",
        rating: 4.3,
        description: "Sathyam brand pure groundnut oil"
    },
    { 
        id: 32, 
        name: "Cheku Groundnut Oil Fortune", 
        weight: "1L Bottle", 
        category: "oil", 
        image: "https://5.imimg.com/data5/ANDROID/Default/2022/7/CN/ZJ/FZ/2211711/product-jpeg-1000x1000.jpg",
        rating: 4.4,
        description: "Fortune brand groundnut oil"
    },
    { 
        id: 33, 
        name: "Deepam Oil", 
        weight: "500ml Bottle", 
        category: "oil", 
        image: "https://tse4.mm.bing.net/th/id/OIP.7DxccX4nAXUIWkyb5YJE6wHaHa?pid=Api&P=0&h=180",
        rating: 4.2,
        description: "Deepam brand cooking oil"
    },

    // Toothpaste Category (14 products)
    { 
        id: 34, 
        name: "Dabur Toothpaste", 
        weight: "100g", 
        category: "toothpaste", 
        image: "https://tse2.mm.bing.net/th/id/OIP.Eq_tn9YBaQVwga1dbn1Q5QHaHa?pid=Api&P=0&h=180",
        rating: 4.5,
        description: "Ayurvedic toothpaste for complete oral care"
    },
    { 
        id: 35, 
        name: "Dabur Toothpaste", 
        weight: "200g", 
        category: "toothpaste", 
        image: "https://m.media-amazon.com/images/I/71oouscjqJL._SX679_.jpg",
        rating: 4.5,
        description: "Large pack of ayurvedic toothpaste"
    },
    { 
        id: 36, 
        name: "Dabur Toothpaste", 
        weight: "50g", 
        category: "toothpaste", 
        image: "https://tse2.mm.bing.net/th/id/OIP.Eq_tn9YBaQVwga1dbn1Q5QHaHa?pid=Api&P=0&h=180",
        rating: 4.4,
        description: "Travel pack of Dabur toothpaste"
    },
    { 
        id: 37, 
        name: "Dabur Toothpaste", 
        weight: "10 Rs", 
        category: "toothpaste", 
        image: "https://tse2.mm.bing.net/th/id/OIP.Eq_tn9YBaQVwga1dbn1Q5QHaHa?pid=Api&P=0&h=180",
        rating: 4.3,
        description: "Sachet pack of Dabur toothpaste"
    },
    { 
        id: 38, 
        name: "Colgate Toothpaste", 
        weight: "200g", 
        category: "toothpaste", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/OnNnf0mCrY-dabur_meswak_pure_miswak_extract_toothpaste_200gm_0_0.jpg",
        rating: 4.7,
        description: "Colgate strong teeth protection toothpaste"
    },
    { 
        id: 39, 
        name: "Colgate Toothpaste", 
        weight: "100g", 
        category: "toothpaste", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/OnNnf0mCrY-dabur_meswak_pure_miswak_extract_toothpaste_200gm_0_0.jpg",
        rating: 4.7,
        description: "Regular pack of Colgate toothpaste"
    },
    { 
        id: 40, 
        name: "Colgate Toothpaste", 
        weight: "50g", 
        category: "toothpaste", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/OnNnf0mCrY-dabur_meswak_pure_miswak_extract_toothpaste_200gm_0_0.jpg",
        rating: 4.6,
        description: "Small pack of Colgate toothpaste"
    },
    { 
        id: 41, 
        name: "Colgate Toothpaste", 
        weight: "10 Rs", 
        category: "toothpaste", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/OnNnf0mCrY-dabur_meswak_pure_miswak_extract_toothpaste_200gm_0_0.jpg",
        rating: 4.6,
        description: "Colgate toothpaste sachet"
    },
    { 
        id: 42, 
        name: "Pepsodent Toothpaste", 
        weight: "200g", 
        category: "toothpaste", 
        image: "https://www.4sgm.com/assets/Image/Product/detailsbig/97386.jpg",
        rating: 4.4,
        description: "Pepsodent germ protection toothpaste"
    },
    { 
        id: 43, 
        name: "Pepsodent Toothpaste", 
        weight: "100g", 
        category: "toothpaste", 
        image: "https://www.4sgm.com/assets/Image/Product/detailsbig/97386.jpg",
        rating: 4.4,
        description: "Regular pack of Pepsodent toothpaste"
    },
    { 
        id: 44, 
        name: "Pepsodent Toothpaste", 
        weight: "10 Rs", 
        category: "toothpaste", 
        image: "https://www.4sgm.com/assets/Image/Product/detailsbig/97386.jpg",
        rating: 4.3,
        description: "Pepsodent toothpaste sachet"
    },
    { 
        id: 45, 
        name: "Dabur Meshwak", 
        weight: "100g", 
        category: "toothpaste", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/OnNnf0mCrY-dabur_meswak_pure_miswak_extract_toothpaste_200gm_0_0.jpg",
        rating: 4.6,
        description: "Herbal toothpaste with Meshwak extract"
    },
    { 
        id: 46, 
        name: "Sensodyne Toothpaste", 
        weight: "Medium Size", 
        category: "toothpaste", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/kiyEb9YFk1-sensodyne_fresh_mint_toothpaste_40_gm_0_1.jpg",
        rating: 4.8,
        description: "Toothpaste for sensitive teeth protection"
    },
    { 
        id: 47, 
        name: "Colgate Vedsakthi", 
        weight: "100g", 
        category: "toothpaste", 
        image: "https://tse1.mm.bing.net/th/id/OIP.kU5u3ZmI7KYgNyRu7-kSNAHaHa?pid=Api&P=0&h=180",
        rating: 4.5,
        description: "Ayurvedic toothpaste from Colgate"
    },

    // Biscuits Category (32 products)
    { 
        id: 48, 
        name: "Oreo Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://www.sroddhaa.com/wp-content/uploads/2021/08/5411-001.jpg-1200Wx1200H-1024x1024.jpg",
        rating: 4.8,
        description: "Delicious chocolate cream filled biscuits"
    },
    { 
        id: 49, 
        name: "Treat Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://m.media-amazon.com/images/I/41pXuLmF2HL.jpg",
        rating: 4.3,
        description: "Cream filled treat biscuits"
    },
    { 
        id: 50, 
        name: "Nutrichoice Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://m.media-amazon.com/images/I/613LHX-SSZL._SL1500_.jpg",
        rating: 4.2,
        description: "Healthy digestive biscuits"
    },
    { 
        id: 51, 
        name: "Nutrichoice Biscuits", 
        weight: "25 Rs", 
        category: "biscuit", 
        image: "https://m.media-amazon.com/images/I/613LHX-SSZL._SL1500_.jpg",
        rating: 4.2,
        description: "Large pack of healthy digestive biscuits"
    },
    { 
        id: 52, 
        name: "Goodday Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://www.financialexpress.com/wp-content/uploads/2021/12/Britannia-Good-day-new-Pack-edt.png?w=1024",
        rating: 4.5,
        description: "Buttery and crispy Goodday biscuits"
    },
    { 
        id: 53, 
        name: "Goodday Biscuits", 
        weight: "25 Rs", 
        category: "biscuit", 
        image: "https://www.financialexpress.com/wp-content/uploads/2021/12/Britannia-Good-day-new-Pack-edt.png?w=1024",
        rating: 4.5,
        description: "Family pack of Goodday biscuits"
    },
    { 
        id: 54, 
        name: "Goodday Family Pack", 
        weight: "135 Rs", 
        category: "biscuit", 
        image: "https://m.media-amazon.com/images/I/71f9Ywu1yIL._SL1500_.jpg",
        rating: 4.6,
        description: "Economy family pack of Goodday biscuits"
    },
    { 
        id: 55, 
        name: "Jimjam Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://m.media-amazon.com/images/S/aplus-media/vc/2534d72c-010a-4c1d-8d0a-e752bdcfd9cb.__CR0,0,970,600_PT0_SX970_V1___.jpg",
        rating: 4.1,
        description: "Cream filled Jimjam biscuits"
    },
    { 
        id: 56, 
        name: "Bournvita Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/871c0c88-29fc-4e62-8c5f-5d566f7a32ff.__CR0,0,970,600_PT0_SX970_V1___.jpg",
        rating: 4.3,
        description: "Chocolate flavored Bournvita biscuits"
    },
    { 
        id: 57, 
        name: "Dark Fantasy Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://i.ytimg.com/vi/eIUSnOjbNJ4/maxresdefault.jpg",
        rating: 4.7,
        description: "Premium chocolate filled biscuits"
    },
    { 
        id: 58, 
        name: "Dark Fantasy Biscuits", 
        weight: "35 Rs", 
        category: "biscuit", 
        image: "https://i2.wp.com/pixahive.com/wp-content/uploads/2020/08/Dark-Fantasy-9239-pixahive.jpg?fit=1856%2C1920&ssl=1",
        rating: 4.7,
        description: "Large pack of premium chocolate biscuits"
    },
    { 
        id: 59, 
        name: "Moms Magic Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://www.bbassets.com/media/uploads/p/l/30008742_16-sunfeast-moms-magic-cookies-cashew-almond-biscuits.jpg",
        rating: 4.2,
        description: "Cashew and butter cookies"
    },
    { 
        id: 60, 
        name: "Milk Cream Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://www.agnifoods.co.uk/pub/media/catalog/product/cache/ac27b5e23b258156220e993d45c667dc/b/r/britannia-milk-cream-biscuits-44g.jpg",
        rating: 4.0,
        description: "Cream filled milk biscuits"
    },
    { 
        id: 61, 
        name: "Milk Cream Biscuits", 
        weight: "30 Rs", 
        category: "biscuit", 
        image: "https://smsupermall.in/product-img/Britannia-Milk-Bikis-Milk-Crea-1705994040.jpg",
        rating: 4.0,
        description: "Family pack of milk cream biscuits"
    },
    { 
        id: 62, 
        name: "Bounce Biscuits", 
        weight: "5 Rs", 
        category: "biscuit", 
        image: "https://globalprimenews.com/wp-content/uploads/2021/09/IMG-20210906-WA0013.jpg",
        rating: 3.9,
        description: "Economy chocolate cream biscuits"
    },
    { 
        id: 63, 
        name: "Happy Happy Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://5.imimg.com/data5/SELLER/Default/2022/2/DT/EQ/AP/146503902/20005925-2-8-parle-happy-happy-choco-chip-cookies-500x500.jpg",
        rating: 4.1,
        description: "Cream filled happy biscuits"
    },
    { 
        id: 64, 
        name: "Happy Happy Biscuits", 
        weight: "5 Rs", 
        category: "biscuit", 
        image: "https://5.imimg.com/data5/SELLER/Default/2022/2/DT/EQ/AP/146503902/20005925-2-8-parle-happy-happy-choco-chip-cookies-500x500.jpg",
        rating: 4.1,
        description: "Small pack of cream biscuits"
    },
    { 
        id: 65, 
        name: "Milk Biscuit", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://cdn.shopify.com/s/files/1/0088/4758/9476/products/01380_1196x700.jpg?v=1596437253",
        rating: 4.0,
        description: "Classic milk biscuits"
    },
    { 
        id: 66, 
        name: "Milk Biscuit", 
        weight: "30 Rs", 
        category: "biscuit", 
        image: "https://5.imimg.com/data5/SELLER/Default/2022/12/YZ/OO/US/153984375/britannia-milk-bikis-biscuit-1000x1000.jpg",
        rating: 4.0,
        description: "Medium pack of milk biscuits"
    },
    { 
        id: 67, 
        name: "Milk Biscuit", 
        weight: "45 Rs", 
        category: "biscuit", 
        image: "https://5.imimg.com/data5/SELLER/Default/2022/12/YZ/OO/US/153984375/britannia-milk-bikis-biscuit-1000x1000.jpg",
        rating: 4.1,
        description: "Large pack of classic milk biscuits"
    },
    { 
        id: 68, 
        name: "Classic Milk Biscuit", 
        weight: "18 Rs", 
        category: "biscuit", 
        image: "https://www.bigbasket.com/media/uploads/p/l/40232312-2_2-britannia-milk-bikis-classic-biscuit-zero-trans-fat.jpg",
        rating: 4.2,
        description: "Premium classic milk biscuits"
    },
    { 
        id: 69, 
        name: "Marie Gold Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://www.bigbasket.com/media/uploads/p/l/264572-2_5-britannia-marie-gold-biscuits.jpg",
        rating: 4.3,
        description: "Light and crispy Marie biscuits"
    },
    { 
        id: 70, 
        name: "Marie Gold Biscuits", 
        weight: "20 Rs", 
        category: "biscuit", 
        image: "https://www.bigbasket.com/media/uploads/p/l/264572-2_5-britannia-marie-gold-biscuits.jpg",
        rating: 4.3,
        description: "Medium pack of Marie Gold biscuits"
    },
    { 
        id: 71, 
        name: "Marie Gold Biscuits", 
        weight: "40 Rs", 
        category: "biscuit", 
        image: "https://5.imimg.com/data5/ECOM/Default/2024/1/375683815/XG/SC/ER/109941460/marie-gold-1702642905376-sku-2453-0-500x500.jpg",
        rating: 4.4,
        description: "Family pack of Marie Gold biscuits"
    },
    { 
        id: 72, 
        name: "Maggie", 
        weight: "15 Rs", 
        category: "biscuit", 
        image: "https://www.ippobuy.com/cdn/shop/files/maggi-noodle-70gm-14rs.jpg?v=1685025649&width=1100",
        rating: 4.1,
        description: "Maggi brand tasty"
    },
    { 
        id: 73, 
        name: "Maggie ", 
        weight: "84 Rs", 
        category: "biscuit", 
        image: "https://m.media-amazon.com/images/I/715saje9baL._SX679_.jpg",
        rating: 4.1,
        description: "Large economy pack of Maggi"
    },
    { 
        id: 74, 
        name: "Maggie", 
        weight: "57 Rs", 
        category: "biscuit", 
        image: "https://m.media-amazon.com/images/I/715saje9baL._SX679_.jpg",
        rating: 4.1,
        description: "Medium pack of Maggi"
    },
    { 
        id: 75, 
        name: "Hide and Seek Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://myonlinevipani.com/wp-content/uploads/2023/10/parle-hide-seek-chocolate-biscuit.jpg",
        rating: 4.6,
        description: "Chocolate chip cookies"
    },
    { 
        id: 76, 
        name: "Hide and Seek Biscuits", 
        weight: "30 Rs", 
        category: "biscuit", 
        image: "https://5.imimg.com/data5/SELLER/Default/2023/2/TH/AI/BX/144328445/20230214-175953-1000x1000.jpg",
        rating: 4.6,
        description: "Family pack of chocolate chip cookies"
    },
    { 
        id: 77, 
        name: "Pure Magic Biscuits", 
        weight: "40 Rs", 
        category: "biscuit", 
        image: "http://www.britannia.co.in/_next/image?url=https:%2F%2Fmedia.britannia.co.in%2FPure_Magic_PM_Chocolush_1_185b324a62.jpg&w=1920&q=100",
        rating: 4.3,
        description: "Chocolate coated biscuits"
    },
    { 
        id: 78, 
        name: "Super Milk Biscuits", 
        weight: "20 Rs", 
        category: "biscuit", 
        image: "https://tse4.mm.bing.net/th/id/OIP.588ogzPhP4PBAzk9KQEltAHaEo?pid=Api&P=0&h=180",
        rating: 4.0,
        description: "Rich milk flavored biscuits"
    },
    { 
        id: 79, 
        name: "Super Milk Biscuits", 
        weight: "10 Rs", 
        category: "biscuit", 
        image: "https://tse4.mm.bing.net/th/id/OIP.588ogzPhP4PBAzk9KQEltAHaEo?pid=Api&P=0&h=180",
        rating: 4.0,
        description: "Small pack of super milk biscuits"
    },

    // Snacks Category (48 products)
    { 
        id: 80, 
        name: "Wheel Chips", 
        weight: "25 Rs", 
        category: "snacks", 
        image: "https://tse2.mm.bing.net/th/id/OIP.IHlI9xAjcXloym5nlXw0gQHaEK?pid=Api&P=0&h=180",
        rating: 4.1,
        description: "Crispy potato wheel chips"
    },
    { 
        id: 81, 
        name: "Potato Chips", 
        weight: "35 Rs", 
        category: "snacks", 
        image: "https://diyjoy.com/wp-content/uploads/2023/05/homemade-crispy-potato-chips-recipe.jpg",
        rating: 4.4,
        description: "Classic potato chips"
    },
    { 
        id: 82, 
        name: "Cake Gobbels", 
        weight: "15 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/S/aplus-media/vc/4e3b6196-f3cd-4964-a017-eaf5bfae364e.__CR0,0,970,300_PT0_SX970_V1___.png",
        rating: 4.0,
        description: "Soft cake bites with cream"
    },
    { 
        id: 83, 
        name: "Love Bite", 
        weight: "20 Rs", 
        category: "snacks", 
        image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-470,ar-1500-1500,pr-true,f-auto,q-40,dpr-2/cms/product_variant/55ea45c8-9cf9-47d5-b555-43080b8abff5/Winkies-Love-Bite.jpeg",
        rating: 4.2,
        description: "Chocolate coated wafer bites"
    },
    { 
        id: 84, 
        name: "Swiss Roll", 
        weight: "10 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/718phVpqFjL._SL1500_.jpg",
        rating: 4.1,
        description: "Chocolate filled wafer rolls"
    },
    { 
        id: 85, 
        name: "Choco Stick", 
        weight: "5 Rs", 
        category: "snacks", 
        image: "http://fudzu.in/wp-content/uploads/2021/12/gone-mad-choco-stick-show-box-of-24-748.jpg",
        description: "Chocolate coated biscuit sticks"
    },
    { 
        id: 86, 
        name: "Munch", 
        weight: "5 Rs", 
        category: "snacks", 
        image: "https://5.imimg.com/data5/SELLER/Default/2022/8/CP/OC/CC/42699539/munch-chocolate-250x250.png",
        rating: 4.5,
        description: "Crispy chocolate covered nuts"
    },
    { 
        id: 87, 
        name: "Munch", 
        weight: "10 Rs", 
        category: "snacks", 
        image: "https://5.imimg.com/data5/SELLER/Default/2022/4/BX/LT/MY/5116174/nastle-maha-munch-chocolate-1000x1000.jpg",
        rating: 4.5,
        description: "Medium pack of Munch chocolates"
    },
    { 
        id: 88, 
        name: "Munch", 
        weight: "20 Rs", 
        category: "snacks", 
        image: "https://c8.alamy.com/comp/2R6G5WD/west-bangal-india-may-20-2023-munch-chocolate-photos-shot-on-different-background-2R6G5WD.jpg",
        rating: 4.6,
        description: "Large pack of crispy Munch"
    },
    { 
        id: 89, 
        name: "Munch", 
        weight: "30 Rs", 
        category: "snacks", 
        image: "https://5.imimg.com/data5/SELLER/Default/2023/8/338995590/UI/FT/YG/31272809/munch-chocolate-1000x1000.jpeg",
        rating: 4.6,
        description: "Family pack of Munch chocolates"
    },
    { 
        id: 90, 
        name: "KitKat", 
        weight: "10 Rs", 
        category: "snacks", 
        image: "https://www.bigbasket.com/media/uploads/p/xxl/40122230_9-nestle-kitkat-crispy-wafer-bar.jpg",
        rating: 4.7,
        description: "Crispy wafer fingers covered in chocolate"
    },
    { 
        id: 91, 
        name: "KitKat", 
        weight: "20 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/51uz+Ek1+DL._SX679_.jpg",
        rating: 4.7,
        description: "Medium pack of KitKat chocolate"
    },
    { 
        id: 92, 
        name: "KitKat", 
        weight: "30 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/61+TgK-kIlL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.7,
        description: "Large pack of KitKat wafer chocolate"
    },
    { 
        id: 93, 
        name: "KitKat", 
        weight: "35 Rs", 
        category: "snacks", 
        image: "https://www.bbassets.com/media/uploads/p/l/40179355_28-nestle-kitkat-share-snap-wafer-bar-coated-with-chocolate.jpg",
        rating: 4.7,
        description: "Special pack of KitKat chocolate"
    },
    { 
        id: 94, 
        name: "KitKat", 
        weight: "50 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/51vJVS61vQL._SX679_.jpg",
        rating: 4.8,
        description: "Premium pack of KitKat chocolates"
    },
    { 
        id: 95, 
        name: "KitKat", 
        weight: "80 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/61tfPpFCNnL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.8,
        description: "Family pack of KitKat wafer chocolates"
    },
    { 
        id: 96, 
        name: "KitKat", 
        weight: "210 Rs",
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/71EIOktnJOL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.8,
        description: "Gift pack of assorted KitKat chocolates"
    },
    { 
        id: 97, 
        name: "Galaxy Smooth Nut", 
        weight: "70 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/611X-6wSVIL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.6,
        description: "Smooth chocolate with crunchy nuts"
    },
    { 
        id: 98, 
        name: "Milky Bar", 
        weight: "5 Rs", 
        category: "snacks", 
        image: "http://discountdragon.co.uk/cdn/shop/files/milkybar_choo_classic.png?v=1746530941",
        rating: 4.3,
        description: "Creamy white chocolate bar"
    },
    { 
        id: 99, 
        name: "Milky Bar", 
        weight: "10 Rs", 
        category: "snacks", 
        image: "https://www.bigbasket.com/media/uploads/p/xl/40090019_4-nestle-milkybar-bar.jpg",
        rating: 4.3,
        description: "Medium white chocolate bar"
    },
    { 
        id: 100, 
        name: "Milky Bar", 
        weight: "20 Rs", 
        category: "snacks", 
        image: "https://www.cosmeticconnection.co.za/cdn/shop/files/19712.jpg?v=1694864452",
        rating: 4.4,
        description: "Large pack of creamy white chocolate"
    },
    { 
        id: 101, 
        name: "Nestle Classic Fruit & Nut", 
        weight: "45 Rs", 
        category: "snacks", 
        image: "https://www.bigbasket.com/media/uploads/p/l/40018532_8-nestle-chocolate-classic.jpg",
        rating: 4.5,
        description: "Milk chocolate with fruits and nuts"
    },
    { 
        id: 102, 
        name: "Dairy Milk", 
        weight: "10 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/516W9doFMBL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.8,
        description: "Cadbury's classic milk chocolate"
    },
    { 
        id: 103, 
        name: "Dairy Milk", 
        weight: "20 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/51Nv9p5YigL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.8,
        description: "Medium pack of Dairy Milk chocolate"
    },
    { 
        id: 104, 
        name: "Dairy Milk", 
        weight: "45 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/51BBgC4SwBL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.8,
        description: "Large pack of classic Dairy Milk"
    },
    { 
        id: 105, 
        name: "Dairy Milk", 
        weight: "110 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/51LJH732TNL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.8,
        description: "Family pack of Dairy Milk chocolate"
    },
    { 
        id: 106, 
        name: "Dairy Milk Silk Roast Almond", 
        weight: "98 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/61a8xsOXwvL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.9,
        description: "Premium silk chocolate with roasted almonds"
    },
    { 
        id: 107, 
        name: "Dairy Milk Silk Fruits & Nut", 
        weight: "98 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/61WDkPKU3EL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.9,
        description: "Silk chocolate with fruits and nuts"
    },
    { 
        id: 108, 
        name: "Dairy Milk Bubbly", 
        weight: "98 Rs", 
        category: "snacks", 
        image: "https://marchepatel.com/wp-content/uploads/2023/02/Cadbury-Dairy-Milk-Silk-Bubbly1.png",
        rating: 4.7,
        description: "Aerated chocolate with bubbles"
    },
    { 
        id: 109, 
        name: "Dairy Milk Fruit & Nut", 
        weight: "240 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/61WDkPKU3EL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.8,
        description: "Premium fruit and nut chocolate pack"
    },
    { 
        id: 110, 
        name: "Dairy Milk Chocolate", 
        weight: "230 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/71w7ppkACUL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.8,
        description: "Large pack of pure Dairy Milk chocolate"
    },
    { 
        id: 111, 
        name: "Dairy Milk Oreo", 
        weight: "215 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/71Is4cMc2NL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.7,
        description: "Dairy Milk with Oreo cookie pieces"
    },
    { 
        id: 112, 
        name: "Dairy Milk Hazelnut", 
        weight: "214 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/71DeBT4j7wL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.7,
        description: "Chocolate with crunchy hazelnuts"
    },
    { 
        id: 113, 
        name: "Jara Jara Marathi", 
        weight: "98 Rs", 
        category: "snacks", 
        image: "https://images.unsplash.com/photo-1566476967-7e8d63dcc9c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.2,
        description: "Spicy traditional Indian snack"
    },
    { 
        id: 114, 
        name: "Dairy Milk Silk ganache", 
        weight: "214 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/611Lb8em2hL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.8,
        description: "Assorted premium silk chocolates"
    },
    { 
        id: 115, 
        name: "Dairy Milk Silk Mousse", 
        weight: "240 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/71nAlDoF6oL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.8,
        description: "Silk chocolate with mousse filling"
    },
    { 
        id: 116, 
        name: "Dairy Milk Bubbly", 
        weight: "214 Rs", 
        category: "snacks", 
        image: "https://marchepatel.com/wp-content/uploads/2023/02/Cadbury-Dairy-Milk-Silk-Bubbly1.png",
        rating: 4.7,
        description: "Large pack of aerated bubbly chocolate"
    },
    { 
        id: 117, 
        name: "Dairy Milk Roast & Almond", 
        weight: "214 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/61a8xsOXwvL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.8,
        description: "Premium chocolate with roasted almonds"
    },
    { 
        id: 118, 
        name: "Cadbury Bournville Cranberry", 
        weight: "140 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/61QBqsJ5yQL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.6,
        description: "Dark chocolate with cranberries"
    },
    { 
        id: 119, 
        name: "Snickers", 
        weight: "18 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/614zWXIDoZL._SX679_.jpg",
        rating: 4.7,
        description: "Chocolate with peanuts and caramel"
    },
    { 
        id: 120, 
        name: "Five Star", 
        weight: "5 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/51QVFGccq8L._SX679_.jpg",
        rating: 4.4,
        description: "Chocolate and caramel candy bar"
    },
    { 
        id: 121, 
        name: "Five Star", 
        weight: "10 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/51QVFGccq8L._SX679_.jpg",
        rating: 4.4,
        description: "Medium pack of Five Star chocolate"
    },
    { 
        id: 122, 
        name: "Crispello", 
        weight: "10 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/61i6X8Cs9EL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Crispy wafer with chocolate filling"
    },
    { 
        id: 123, 
        name: "Crispello", 
        weight: "40 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/61rktsuhP4L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Large pack of Crispello wafers"
    },
    { 
        id: 124, 
        name: "Five Star 3D", 
        weight: "45 Rs", 
        category: "snacks", 
        image: "https://m.media-amazon.com/images/I/51keieC1RXL._SX679_.jpg",
        rating: 4.5,
        description: "3D chocolate with caramel filling"
    },
    { 
        id: 125, 
        name: "Perk", 
        weight: "5 Rs", 
        category: "snacks", 
        image: "https://5.imimg.com/data5/SELLER/Default/2024/11/465252007/VQ/DL/QT/88951834/cadbury-perk-chocolate-coated-wafer-1000x1000.jpg",
        rating: 4.3,
        description: "Chocolate covered wafer bites"
    },
    { 
        id: 126, 
        name: "Rin Soap", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/81ufvQZfLHL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.0,
        description: "Detergent soap for clothes washing"
    },
    { 
        id: 127, 
        name: "Rin Soap", 
        weight: "Big Bar 20 Rs", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/71VAypcc7WL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.1,
        description: "Large detergent soap bar"

    },
    // Continuing from previous products...

    // Soap Category (52 products)
    { 
        id: 128, 
        name: "Power Soap", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://tse3.mm.bing.net/th/id/OIP.2OPqEmal6wZMODh8-yhr2wHaD4?pid=Api&P=0&h=180",
        rating: 4.2,
        description: "Powerful cleaning soap for tough stains"
    },
    { 
        id: 129, 
        name: "Surf Excel Soap", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://www.bigbasket.com/media/uploads/p/xl/100067489_9-surf-excel-detergent-bar.jpg",
        rating: 4.3,
        description: "Stain removal soap for clothes"
    },
    { 
        id: 130, 
        name: "Surf Excel Soap", 
        weight: "Big Bar 35 Rs", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/31lQk3tCzDL._SY300_SX300_QL70_FMwebp_.jpg",
        rating: 4.4,
        description: "Large bar of stain removal soap"
    },
    { 
        id: 131, 
        name: "Tide Soap", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/71I3liu3qSL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Tide brand detergent soap"
    },
    { 
        id: 132, 
        name: "Vim Soap", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/81V66gAfTAL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.1,
        description: "Vim dishwashing soap bar"
    },
    { 
        id: 133, 
        name: "Vim Pudina Fresh", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61or8QsR1QL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.2,
        description: "Mint fresh dishwashing soap"
    },
    { 
        id: 134, 
        name: "Vim Neem Clean", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61or8QsR1QL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.2,
        description: "Neem based cleaning soap"
    },
    { 
        id: 135, 
        name: "Vim Soap", 
        weight: "20 Rs", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/81V66gAfTAL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.1,
        description: "Medium size Vim soap bar"
    },
    { 
        id: 136, 
        name: "Exo Soap", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61B85KPh3VL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.0,
        description: "Exo brand bathing soap"
    },
    { 
        id: 137, 
        name: "Exo Medium Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/71jIAZSinrL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.1,
        description: "Medium size Exo bathing soap"
    },
    { 
        id: 138, 
        name: "Exo Round Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61CwN2uZ9yL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.1,
        description: "Round shaped Exo soap"
    },
    { 
        id: 139, 
        name: "Lux Soap", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://www.esanshar.com/image/cache/catalog/Seller_94/Lux/SoftTPSC100g-1100x1100.jpg",
        rating: 4.5,
        description: "Luxury beauty soap with fragrance"
    },
    { 
        id: 140, 
        name: "Lux Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://www.esanshar.com/image/cache/catalog/Seller_94/Lux/SoftTPSC100g-1100x1100.jpg",
        rating: 4.5,
        description: "Medium size Lux beauty soap"
    },
    { 
        id: 141, 
        name: "Lux Rose", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://www.esanshar.com/image/cache/catalog/Seller_94/Lux/SoftTPSC100g-1100x1100.jpg",
        rating: 4.6,
        description: "Lux soap with rose fragrance"
    },
    { 
        id: 142, 
        name: "Lux Jasmine", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://thespicebazaar.ca/wp-content/uploads/2025/04/ITEM-32.jpg",
        rating: 4.6,
        description: "Lux soap with jasmine fragrance"
    },
    { 
        id: 143, 
        name: "Lux Sandalwood", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://www.bbassets.com/media/uploads/p/l/40342745_1-lux-advanced-clear-glow-sandalwood-soap.jpg",
        rating: 4.7,
        description: "Lux soap with sandalwood fragrance"
    },
    { 
        id: 144, 
        name: "Lifeboy Soap", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://www.bamagate.com/cdn/shop/products/61uIoOCVuTL._SL1000_b734d8ea-ba2a-432a-99b8-cb0d129fc74c_1024x1024.jpg?v=1600009024",
        rating: 4.4,
        description: "Lifeboy germ protection soap"
    },
    { 
        id: 145, 
        name: "Lifeboy Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/91QXtYJOHVL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.4,
        description: "Medium size Lifeboy soap"
    },
    { 
        id: 146, 
        name: "Lifeboy Red", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/91QXtYJOHVL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Lifeboy red variant soap"
    },
    { 
        id: 147, 
        name: "Lifeboy Yellow", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/71cJE4U1XiL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Lifeboy yellow variant soap"
    },
    { 
        id: 148, 
        name: "Lifeboy Violet", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/71cJE4U1XiL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Lifeboy violet variant soap"
    },
    { 
        id: 149, 
        name: "Johnson Baby Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://5.imimg.com/data5/SELLER/Default/2023/7/329215249/JJ/AH/LQ/164064899/johnson-and-johnson-baby-soap-25-gm-500x500.webp",
        rating: 4.7,
        description: "Gentle soap for baby's sensitive skin"
    },
    { 
        id: 150, 
        name: "Pears Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://starmart.com.hk/wp-content/uploads/2020/11/Pears-Pure-Gentle-Glysrin-Soap-Gold-125gm-500x500-1.jpg",
        rating: 4.6,
        description: "Pure and gentle Pears soap"
    },
    { 
        id: 151, 
        name: "Pears Green", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/41KmHdhrlXL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.6,
        description: "Pears green variant soap"
    },
    { 
        id: 152, 
        name: "Pears Yellow", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://starmart.com.hk/wp-content/uploads/2020/11/Pears-Pure-Gentle-Glysrin-Soap-Gold-125gm-500x500-1.jpg",
        rating: 4.6,
        description: "Pears yellow variant soap"
    },
    { 
        id: 153, 
        name: "Pears Blue", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61o40wrHNYL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.6,
        description: "Pears blue variant soap"
    },
    { 
        id: 154, 
        name: "Hamam Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://5.imimg.com/data5/SELLER/Default/2022/7/XF/MD/HU/33841417/rexona-silky-soft-skin-soap-bar-100gm-1000x1000.jpg",
        rating: 4.2,
        description: "Traditional Hamam soap"
    },
    { 
        id: 155, 
        name: "Hamam Soap", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://5.imimg.com/data5/SELLER/Default/2022/7/MP/YF/NH/14609864/hamam-neem-oil-bath-soap-500x500.jpg",
        rating: 4.2,
        description: "Small pack Hamam soap"
    },
    { 
        id: 156, 
        name: "Rexona Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://5.imimg.com/data5/SELLER/Default/2022/7/XF/MD/HU/33841417/rexona-silky-soft-skin-soap-bar-100gm-1000x1000.jpg",
        rating: 4.3,
        description: "Rexona deodorant soap"
    },
    { 
        id: 157, 
        name: "Santoor Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://aukart.com.au/wp-content/uploads/2024/01/Y168809.png",
        rating: 4.4,
        description: "Santoor sandalwood soap"
    },
    { 
        id: 158, 
        name: "Himalaya Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://himalayawellness.com.bd/cdn/shop/products/Gentle-Baby-Soap-75gm-1.png?v=1670576876&width=1080",
        rating: 4.5,
        description: "Himalaya herbal soap"
    },
    { 
        id: 159, 
        name: "Medimix Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://5.imimg.com/data5/ECOM/Default/2024/3/404728718/RX/YL/HO/206037213/untitled-21-d37a4154-a9b3-4099-8f72-ef3cd42a8c69-500x500.png",
        rating: 4.4,
        description: "Medimix ayurvedic soap"
    },
    { 
        id: 160, 
        name: "Mysore Sandal Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61eAiJeVmmL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.7,
        description: "Authentic Mysore sandalwood soap"
    },
    { 
        id: 161, 
        name: "Cinthol Soap", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61LA+OxwX7L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Cinthol deodorant soap"
    },
    { 
        id: 162, 
        name: "Cinthol Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61LA+OxwX7L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Medium size Cinthol soap"
    },
    { 
        id: 163, 
        name: "Cinthol Red", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61LA+OxwX7L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Cinthol red variant soap"
    },
    { 
        id: 164, 
        name: "Cinthol Black", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61k+aH1YoDL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Cinthol black variant soap"
    },
    { 
        id: 165, 
        name: "Cinthol Blue", 
        weight: "Medium Size", 
        category: "soap", 
        image: "http://velspices.com.au/cdn/shop/files/cinthol_cool_soap_blue_100g.jpg?v=1699351871",
        rating: 4.3,
        description: "Cinthol blue variant soap"
    },
    { 
        id: 166, 
        name: "Cinthol Yellow", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://bk.shajgoj.com/storage/2020/06/Godrej-Cinthol-Soap-Lime.jpg",
        description: "Cinthol yellow variant soap"
    },
    { 
        id: 167, 
        name: "Himalaya Cucumber & Coconut", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://lzd-img-global.slatic.net/g/p/e6e5ec6040a026e11cffeb344b57c986.jpg_720x720q80.jpg_.webp",
        rating: 4.5,
        description: "Himalaya soap with cucumber and coconut"
    },
    { 
        id: 168, 
        name: "Mysore Sandal Big Size", 
        weight: "Big Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/91QLoj2081L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.7,
        description: "Large Mysore sandalwood soap"
    },
    { 
        id: 169, 
        name: "Cinthol Big box", 
        weight: "Buy 4 Get 1 Free", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/91UizJSKZ1L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.4,
        description: "Cinthol soap combo pack"
    },
    { 
        id: 170, 
        name: "Dettol Soap", 
        weight: "10 Rs", 
        category: "soap", 
        image: "https://www.quicklly.com/upload_images/product/1673993366-dettol-blue-soap.png",
        rating: 4.6,
        description: "Dettol germ protection soap"
    },
    { 
        id: 171, 
        name: "Dettol Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://www.quicklly.com/upload_images/product/1673993366-dettol-blue-soap.png",
        rating: 4.6,
        description: "Medium size Dettol soap"
    },
    { 
        id: 172, 
        name: "Dettol Green", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://sindirasupermarket.com/wp-content/uploads/2021/09/soap125g.jpg",
        rating: 4.6,
        description: "Dettol green variant soap"
    },
    { 
        id: 173, 
        name: "Dettol Blue", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://www.quicklly.com/upload_images/product/1673993366-dettol-blue-soap.png",
        rating: 4.6,
        description: "Dettol blue variant soap"
    },
    { 
        id: 174, 
        name: "Dettol Pink", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://www.desiclik.com/images/P/7cf121156c7fb4ecf41acb09630cacdef48c8c932b287ef8604caf6edcf38a5f.jpg",
        rating: 4.6,
        description: "Dettol pink variant soap"
    },
    { 
        id: 175, 
        name: "Dove Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://i5.walmartimages.com/seo/Dove-Beauty-Bar-Women-s-Bath-Soap-Original-Deep-Moisturizing-All-Skin-3-75-oz-4-Bars_6c3c57b2-6438-4fec-85f1-8d06dbed434f.efc611ad9ca96683fa8a845b448c3c82.jpeg",
        rating: 4.7,
        description: "Dove moisturizing cream soap"
    },
    { 
        id: 176, 
        name: "Vivel Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61uQgjhcl9L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.1,
        description: "Vivel brand bathing soap"
    },
    { 
        id: 177, 
        name: "Nature Power Soap", 
        weight: "Medium Size", 
        category: "soap", 
        image: "https://m.media-amazon.com/images/I/61r5Wf8SSqL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.2,
        description: "Natural herbal power soap"
    },

    // Beverages Category (45 products)
    { 
        id: 178, 
        name: "3 Roses Tea", 
        weight: "10 Rs", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/81ayUlZaUIL._SL1500_.jpg",
        rating: 4.4,
        description: "3 Roses premium tea dust"
    },
    { 
        id: 179, 
        name: "3 Roses Tea", 
        weight: "5 Rs", 
        category: "beverages", 
        image: "https://5.imimg.com/data5/ANDROID/Default/2023/3/UU/XE/EQ/63082721/product-jpeg-1000x1000.jpg",
        rating: 4.4,
        description: "Small pack of 3 Roses tea"
    },
    { 
        id: 180, 
        name: "3 Roses Tea", 
        weight: "100g", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/61Vh0JqT+bL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.5,
        description: "100g pack of 3 Roses tea"
    },
    { 
        id: 181, 
        name: "3 Roses Tea", 
        weight: "250g", 
        category: "beverages", 
        image: "https://down-sg.img.susercontent.com/file/93f00c5b13f4818ed20842bc9ae04b99",
        rating: 4.5,
        description: "250g pack of premium tea"
    },
    { 
        id: 182, 
        name: "3 Roses Tea", 
        weight: "25g", 
        category: "beverages", 
        image: "https://api.woodlandshk.com/prisma/moviebooking/mart/3roses_tea.jpg",
        rating: 4.3,
        description: "25g trial pack of tea"
    },
    { 
        id: 183, 
        name: "Chakra Gold Tea", 
        weight: "10 Rs", 
        category: "beverages", 
        image: "https://www.ippobuy.com/cdn/shop/files/chakra-gold-care-11gm-10rs_1f11bab6-add9-4f55-af38-85a5478f50e8.jpg?v=1686211683&width=1946",
        rating: 4.5,
        description: "Chakra Gold premium tea"
    },
    { 
        id: 184, 
        name: "Chakra Gold Tea", 
        weight: "5 Rs", 
        category: "beverages", 
        image: "https://vara-lakshmi.in/wp-content/uploads/2025/03/20007744_2-tata-tea-chakra-gold-care-tea-with-tulsi-ginger-brahmi-elaichi-adhimadhuram.webp",
        description: "Small pack of Chakra Gold tea"
    },
    { 
        id: 185, 
        name: "Chakra Gold Tea", 
        weight: "100g", 
        category: "beverages", 
        image: "https://www.bigbasket.com/media/uploads/p/s/264439_11-tata-tea-chakra-gold-dust-tea.jpg",
        rating: 4.6,
        description: "100g Chakra Gold tea pack"
    },
    { 
        id: 186, 
        name: "Chakra Gold Tea", 
        weight: "250g", 
        category: "beverages", 
        image: "http://www.tmrmall.com/cdn/shop/products/KR5992.png?v=1690457457",
        rating: 4.6,
        description: "250g premium Chakra Gold tea"
    },
    { 
        id: 187, 
        name: "Natural Care 3 Roses", 
        weight: "10 Rs", 
        category: "beverages", 
        image: "https://www.grocerybus.in/admin_panel/upload/images/2823-1674633883.jpg",
        description: "Natural Care variant of 3 Roses tea"
    },
    { 
        id: 188, 
        name: "Natural Care 3 Roses", 
        weight: "100g", 
        category: "beverages", 
        image: "https://tse3.mm.bing.net/th/id/OIP.2l3tlO7tVHrGx8SBDXnOAQHaHa?pid=Api&P=0&h=180",
        rating: 4.4,
        description: "100g Natural Care tea"
    },
    { 
        id: 189, 
        name: "Natural Care 3 Roses", 
        weight: "250g", 
        category: "beverages", 
        image: "https://www.komalasvegemart.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/9/8901030409578_3084_1440746861917.jpg",
        rating: 4.5,
        description: "250g Natural Care tea pack"
    },
    { 
        id: 190, 
        name: "Red Label Tea", 
        weight: "100g", 
        category: "beverages", 
        image: "https://spicesupermarket.co.uk/wp-content/uploads/2022/06/Brooke-Bond-Red-Label-Tea-100g.png",
        rating: 4.6,
        description: "Brooke Bond Red Label tea"
    },
    { 
        id: 191, 
        name: "Red Label Tea", 
        weight: "250g", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/51hdl9zEmGL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.6,
        description: "250g Red Label tea pack"
    },
    { 
        id: 192, 
        name: "Green Tea Lipton", 
        weight: "100g", 
        category: "beverages", 
        image: "https://tse3.mm.bing.net/th/id/OIP.pymz-yKH2I-IgevvwletMQHaHa?pid=Api&P=0&h=180",
        rating: 4.5,
        description: "Lipton green tea bags"
    },
    { 
        id: 193, 
        name: "Green Tea Powder", 
        weight: "Medium Size", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/51Kd5JP8nGL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Green tea powder for health"
    },
    { 
        id: 194, 
        name: "Taj Mahal Tea", 
        weight: "250g", 
        category: "beverages", 
        image: "https://down-sg.img.susercontent.com/file/sg-11134201-7repr-m1ny8580n9s835",
        rating: 4.7,
        description: "Taj Mahal premium tea"
    },
    { 
        id: 195, 
        name: "Taj Mahal Tea", 
        weight: "100g", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/71znN3P1nOL._SL1000_.jpg",
        rating: 4.7,
        description: "100g Taj Mahal tea pack"
    },
    { 
        id: 196, 
        name: "Horlicks", 
        weight: "Bottle", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/51VlwTldHAL.jpg",
        rating: 4.6,
        description: "Horlicks health drink bottle"
    },
    { 
        id: 197, 
        name: "Horlicks", 
        weight: "Box", 
        category: "beverages", 
        image: "https://instamart.lk/public/uploads/all/8pbN3nUWeRBCW9wbDoVb3C2s1GFQ3UbdjBnGHqpj.png",
        rating: 4.6,
        description: "Horlicks health drink packet"
    },
    { 
        id: 198, 
        name: "Boost", 
        weight: "Bottle", 
        category: "beverages", 
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I04924/boost-nutrition-drink-jar-of-500-g-3-1669634995.jpg",
        rating: 4.5,
        description: "Boost energy drink bottle"
    },
    { 
        id: 199, 
        name: "Boost", 
        weight: "Packet", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/61ogjUGE6aL._SX679_.jpg",
        rating: 4.5,
        description: "Boost energy drink packet"
    },
    { 
        id: 200, 
        name: "Boost", 
        weight: "Box", 
        category: "beverages", 
        image: "https://tse1.mm.bing.net/th/id/OIP.3e-0AllXxJiwWI9R_recuwHaHa?pid=Api&P=0&h=180",
        rating: 4.5,
        description: "Boost energy drink box"
    },
    { 
        id: 201, 
        name: "Complan", 
        weight: "Bottle", 
        category: "beverages", 
        image: "https://tse4.mm.bing.net/th/id/OIP.gmgDRWNWjePbvyK2Pgxe8QHaHa?pid=Api&P=0&h=180",
        rating: 4.4,
        description: "Complan health drink bottle"
    },
    { 
        id: 202, 
        name: "Complan", 
        weight: "Packet", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/81Xoz-zYdyL._SL1500_.jpg",
        rating: 4.4,
        description: "Complan health drink packet"
    },
    { 
        id: 203, 
        name: "Complan", 
        weight: "Box", 
        category: "beverages", 
        image: "https://newassets.apollo247.com/pub/media/catalog/product/w/h/whatsapp_image_2022-09-23_at_12.28.14_pm_1_.jpeg",
        rating: 4.4,
        description: "Complan health drink box"
    },
    { 
        id: 204, 
        name: "Cerelac", 
        weight: "Box", 
        category: "beverages", 
        image: "https://cdn01.pharmeasy.in/dam/products_otc/V41276/nestle-cerelac-baby-cereal-with-milk-multigrain-fruits-baby-food-from-12-months-box-of-300-g-2-1627718387.jpg",
        rating: 4.7,
        description: "Cerelac baby food"
    },
    { 
        id: 205, 
        name: "Cerelac Multigrain & Fruits", 
        weight: "Box", 
        category: "beverages", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/SIIvIPF78m-nestle_cerelac_stage_4_12_months_powder_300_gm_multigrain_fruits_refill_pack_32238_0_1.jpg",
        rating: 4.7,
        description: "Cerelac with multigrain and fruits"
    },
    { 
        id: 206, 
        name: "Cerelac Wheat", 
        weight: "Box", 
        category: "beverages", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/3UNg1l9du0-nestle_cerelac_stage_1_6_months_powder_300_gm_wheat_refill_pack_0_1.jpg",
        rating: 4.7,
        description: "Wheat based Cerelac"
    },
    { 
        id: 207, 
        name: "Cerelac Wheat Apple", 
        weight: "Box", 
        category: "beverages", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/1X6TtOzh5h-nestle_cerelac_stage_1_6_months_powder_300_gm_wheat_apple_refill_pack_32233_0_1.jpg",
        rating: 4.7,
        description: "Wheat Cerelac with apple"
    },
    { 
        id: 208, 
        name: "Cerelac Wheat Apple Cherry", 
        weight: "Box", 
        category: "beverages", 
        image: "https://cdn01.pharmeasy.in/dam/products_otc/J52094/nestle-cerelac-baby-food-milk-wheat-apple-cherry-from-8-months-box-of-300-g-2-1613637669.jpg",
        rating: 4.7,
        description: "Wheat Cerelac with apple and cherry"
    },
    { 
        id: 209, 
        name: "Cerelac Rice", 
        weight: "Box", 
        category: "beverages", 
        image: "https://cdn.media.amplience.net/i/mrpricegroup/01_100476821_SI_00",
        rating: 4.7,
        description: "Rice based Cerelac"
    },
    { 
        id: 210, 
        name: "Kelloggs Corn Flakes", 
        weight: "Large Box", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/712fkE2vvAL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.5,
        description: "Kelloggs corn flakes breakfast cereal"
    },
    { 
        id: 211, 
        name: "Kelloggs Almond Honey", 
        weight: "Box", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/81LshAMXAAL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.6,
        description: "Corn flakes with almond and honey"
    },
    { 
        id: 212, 
        name: "Chocos", 
        weight: "Large Box", 
        category: "beverages", 
        image: "https://rukminim1.flixcart.com/image/832/832/l2p23rk0/cereal-flake/y/1/v/700-chocos-700g-box-box-1-kellogg-s-original-imagdz6kefyyznyd.jpeg?q=70",
        rating: 4.4,
        description: "Chocolate flavored cereal"
    },
    { 
        id: 213, 
        name: "Bournvita", 
        weight: "Bottle Medium", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/51f8d3ldKzL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.5,
        description: "Bournvita chocolate health drink"
    },
    { 
        id: 214, 
        name: "Pedia Sure", 
        weight: "Box", 
        category: "beverages", 
        image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/9629595a.webp",
        rating: 4.6,
        description: "PediaSure nutritional drink"
    },
    { 
        id: 215, 
        name: "Amulya", 
        weight: "Box", 
        category: "beverages", 
        image: "https://ik.imagekit.io/wlfr/wellness/images/products/286082-1.jpg/tr:l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end",
        rating: 4.2,
        description: "Amulya dairy whitener"
    },
    { 
        id: 216,
        name: "Quaker Oats", 
        weight: "Packet", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/71BzsxldCBL._SL1500_.jpg",
        rating: 4.4,
        description: "Quaker oats for healthy breakfast"
    },
    { 
        id: 217, 
        name: "Soffola Oats", 
        weight: "Packet", 
        category: "beverages", 
        image: "https://images.marico.in/800x0/uploads/spo-300g-01-6765.jpg",
        rating: 4.3,
        description: "Soffola brand oats"
    },
    { 
        id: 218, 
        name: "Manna Health Mix", 
        weight: "Box", 
        category: "beverages", 
        image: "https://m.media-amazon.com/images/I/71qgKRyD5eS._SL1500_.jpg",
        rating: 4.3,
        description: "Manna health mix powder"
    },
    { 
        id: 219, 
        name: "Aachi Health Mix", 
        weight: "Buy 1 Get 1 Free Box", 
        category: "beverages", 
        image: "https://5.imimg.com/data5/SELLER/Default/2022/5/SX/AU/EP/140245462/90002694-500x500.jpg",
        rating: 4.2,
        description: "Aachi health mix with offer"
    },
    { 
        id: 220, 
        name: "Milo", 
        weight: "Medium Size", 
        category: "beverages", 
        image: "https://dm.apac.cms.aldi.cx/is/image/aldiprodapac/product/jpg/scaleWidth/1296/1a4f0dbe-e4cc-4b3f-8bba-3d24e240fc48/Milo%20Cereal%20620g",
        rating: 4.5,
        description: "Milo chocolate malt drink"
    },
    { 
        id: 221, 
        name: "Gulcond", 
        weight: "Box Medium Orange", 
        category: "beverages", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/i-yV53AUCK-glucon_d_instant_energy_powder_tangy_orange_flavour_200_gm_refill_pack_0_0.jpg",
        rating: 4.1,
        description: "Gulcond orange glucose drink"
    },
    { 
        id: 222, 
        name: "Gulcond", 
        weight: "Box Medium Green", 
        category: "beverages", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/51_T6uPfq0-glucon_d_regular_powder_200_gm_50_gm_free_476263_0_0.jpg",
        rating: 4.1,
        description: "Gulcond green glucose drink"
    },

    // Personal Care Category (102 products)
    { 
        id: 223, 
        name: "Vim Liquid", 
        weight: "15 Rs Bottle Small", 
        category: "personal-care", 
        image: "https://tse4.mm.bing.net/th/id/OIP.Lfk1MAHguy8lFQMgst1nvQHaHa?pid=Api&P=0&h=180",
        rating: 4.3,
        description: "Vim liquid dishwash small bottle"
    },
    { 
        id: 224, 
        name: "Vim Liquid", 
        weight: "Bottle Big", 
        category: "personal-care", 
        image: "https://driftbasket.com/wp-content/uploads/2018/10/Vim-Dishwashing-Liquid-Gel-Lemon-500ml-k.jpg",
        rating: 4.4,
        description: "Vim liquid dishwash large bottle"
    },
    { 
        id: 225, 
        name: "Pril", 
        weight: "15 Rs", 
        category: "personal-care", 
        image: "https://www.goodknight.in/wp-content/uploads/2017/09/Activ-Coil-500X500-tinypng.png",
        rating: 4.2,
        description: "Pril dishwashing liquid"
    },
    { 
        id: 226, 
        name: "Goodnight Coil Box", 
        weight: "Regular", 
        category: "personal-care", 
        image: "https://www.goodknight.in/wp-content/uploads/2017/09/Activ-Coil-500X500-tinypng.png",
        rating: 4.4,
        description: "Goodnight mosquito repellent coil"
    },
    { 
        id: 227, 
        name: "Goodnight Liquid", 
        weight: "Regular", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/S/aplus-media/sota/c7a067a6-22db-454a-8d1d-ba9a137d7854.__CR0,33,300,400_PT0_SX300_V1___.jpg",
        rating: 4.5,
        description: "Goodnight liquid mosquito repellent"
    },
    { 
        id: 228, 
        name: "Goodnight Liquid with Machine", 
        weight: "Regular", 
        category: "personal-care", 
        image: "https://www.godrejindiasaarc.com/public/uploads/press_release/GK_Catron_Machine_A.jpg",
        rating: 4.6,
        description: "Goodnight liquid with machine"
    },
    { 
        id: 229, 
        name: "Harpic Bottle", 
        weight: "Small", 
        category: "personal-care", 
        image: "https://cdn01.pharmeasy.in/dam/products_otc/Z61311/harpic-power-plus-original-toilet-cleaner-bottle-of-200-ml-2-1613732484.jpg",
        rating: 4.5,
        description: "Harpic toilet cleaner small bottle"
    },
    { 
        id: 230, 
        name: "Harpic Bottle Red", 
        weight: "Big", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/514HorCFh2L._SL1000_.jpg",
        rating: 4.6,
        description: "Harpic toilet cleaner large bottle"
    },
    { 
        id: 231, 
        name: "Comfort Bottle", 
        weight: "Small", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/515cZ98V6VL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.4,
        description: "Comfort fabric conditioner small"
    },
    
    { 
        id: 233, 
        name: "Comfort Blue", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/51+E7fCElML._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.4,
        description: "Comfort blue variant"
    },
    { 
        id: 234, 
        name: "Comfort Black", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/51ytotyNnLL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.4,
        description: "Comfort black variant"
    },
    { 
        id: 235, 
        name: "Comfort Green", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/51HTZ8ZajYL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.4,
        description: "Comfort green variant"
    },
    { 
        id: 236, 
        name: "Comfort Rose", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/51EMkgrnlsL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.5,
        description: "Comfort rose fragrance variant"
    },
    { 
        id: 237, 
        name: "Softtouch", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71C6301vowL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.2,
        description: "Softtouch fabric conditioner"
    },
    { 
        id: 238, 
        name: "Dettol Liquid Bottle", 
        weight: "Small", 
        category: "personal-care", 
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I40124/dettol-antiseptic-liquid-bottle-of-1-l-2-1600442790.jpg",
        rating: 4.6,
        description: "Dettol antiseptic liquid small"
    },
    { 
        id: 239, 
        name: "Dettol Liquid Bottle", 
        weight: "Big", 
        category: "personal-care", 
        image: "https://cdn01.pharmeasy.in/dam/products_otc/I40124/dettol-antiseptic-liquid-bottle-of-1-l-2-1600442790.jpg",
        rating: 4.7,
        description: "Dettol antiseptic liquid large"
    },
    { 
        id: 242, 
        name: "Colin Bottle", 
        weight: "Small", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/51Zy0WKsc7L._SL1000_.jpg",
        rating: 4.2,
        description: "Colin glass cleaner small"
    },
    { 
        id: 243, 
        name: "Colin Bottle", 
        weight: "Big", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/51Zy0WKsc7L._SL1000_.jpg",
        rating: 4.3,
        description: "Colin glass cleaner large"
    },
    { 
        id: 244, 
        name: "Nimyle Bottle", 
        weight: "Small", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61qh4zWJYrL._SY355_.jpg",
        rating: 4.3,
        description: "Nimyle floor cleaner small"
    },
    { 
        id: 245, 
        name: "Nimyle Bottle", 
        weight: "Big", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61qh4zWJYrL._SY355_.jpg",
        rating: 4.4,
        description: "Nimyle floor cleaner large"
    },
    { 
        id: 246, 
        name: "Domex Bottle", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://5.imimg.com/data5/SELLER/Default/2021/8/XX/MT/CT/81801835/domex-toilet-cleaner-1000x1000.jpg",
        rating: 4.4,
        description: "Domex floor and toilet cleaner"
    },
    { 
        id: 247, 
        name: "Aer Bottle", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/41BbOlvrF5L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.1,
        description: "Aer room freshener"
    },
    { 
        id: 248, 
        name: "Hit Bottl  black", 
        weight: "Small", 
        category: "personal-care", 
        image: "https://nvtechmania.com/wp-content/uploads/2022/08/HIT-Spray-Flying-Insect-Killer-200ml-Mosquito-Fly-Killer-Spray-Instant-Kill-Deep-Reach-Nozzle.jpg",
        rating: 4.3,
        description: "Hit insecticide spray small"
    },
    { 
        id: 249, 
        name: "Hit Bottle black", 
        weight: "Big", 
        category: "personal-care", 
        image: "https://5.imimg.com/data5/SELLER/Default/2023/2/WW/WH/DQ/183613163/hit-black-400ml-500x500.jpg",
        rating: 4.4,
        description: "Hit insecticide spray large"
    },
    { 
        id: 250, 
        name: "Hit Red", 
        weight: "small Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71MX1WuV1JL.jpg",
        rating: 4.3,
        description: "Hit red variant"
    },
    { 
        id: 251, 
        name: "Hit red", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71MX1WuV1JL.jpg",
        rating: 4.3,
        description: "Hit black variant"
    },
    { 
        id: 252, 
        name: "Milkmaid Tin", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71tikpIQnbL.jpg",
        rating: 4.5,
        description: "Milkmaid sweetened condensed milk"
    },
    { 
        id: 253, 
        name: "Nescafe Glass Bottle", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://jodiabaazar.com/cdn/shop/products/23424919_1788714921173252_6484586720657408000_n.png?v=1665384503&width=1946",
        rating: 4.6,
        description: "Nescafe instant coffee"
    },
    { 
        id: 254, 
        name: "Ensure Pedia Box", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://cdn01.pharmeasy.in/dam/products_otc/X67473/pediasure-complete-balanced-nutrition-to-help-kids-grow-1-kg-2x500-gm-vanilla-2-1690552295.jpg",
        rating: 4.7,
        description: "Ensure pediatric nutritional drink"
    },
    { 
        id: 255, 
        name: "Horlicks Diabetes Plus Box", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://images.apollo247.in/pub/media/catalog/product/H/O/HOR0172_1-JULY23_1.jpg",
        rating: 4.5,
        description: "Horlicks for diabetic patients"
    },
    { 
        id: 256, 
        name: "Surf Excel Liquid Bottle", 
        weight: "Frontload", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/51b7Ak1l9GL.jpg",
        rating: 4.5,
        description: "Surf Excel liquid for front load"
    },
    { 
        id: 257, 
        name: "Surf Excel Liquid Bottle", 
        weight: "Top Load ", 
        category: "personal-care", 
        image: "https://res.retailershakti.com/incom/images/product/Surf-Excel-Matic-Top-Load-Liquid-Bottle-1607328405-10051300-1.jpg",
        rating: 4.5,
        description: "Surf Excel liquid for top load"
    },
    { 
        id: 258, 
        name: "Surf Powder", 
        weight: "500g", 
        category: "personal-care", 
        image: "https://tse1.mm.bing.net/th/id/OIP.U_jUEUbhkCUBIlIuD-VesgHaES?pid=Api&P=0&h=180",
        description: "Surf Excel powder 500g"
    },
    { 
        id: 259, 
        name: "Surf Powder", 
        weight: "1kg", 
        category: "personal-care", 
        image: "https://tse3.mm.bing.net/th/id/OIP.lthTq3zb8Z-nsup-5aqgOwHaHa?pid=Api&P=0&h=180",
        rating: 4.5,
        description: "Surf Excel powder 1kg"
    },
    { 
        id: 260, 
        name: "Surf Powder", 
        weight: "10 Rs", 
        category: "personal-care", 
        image: "https://www.ippobuy.com/cdn/shop/files/surf-excel-powder-65g.jpg?v=1685007414&width=1100",
        rating: 4.3,
        description: "Surf Excel powder sachet"
    },
    { 
        id: 261, 
        name: "Ariel Powder", 
        weight: "500g", 
        category: "personal-care", 
        image: "https://tse1.mm.bing.net/th/id/OIP.AsACacaJkpIIS90z4dtvIQAAAA?pid=Api&P=0&h=180",
        rating: 4.5,
        description: "Ariel detergent powder 500g"
    },
    { 
        id: 262, 
        name: "Ariel Powder", 
        weight: "1kg", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61zcRZV9UML._SL1500_.jpg",
        description: "Ariel detergent powder 1kg"
    },
    { 
        id: 263, 
        name: "Ariel Powder", 
        weight: "10 Rs", 
        category: "personal-care", 
        image: "https://5.imimg.com/data5/ANDROID/Default/2024/8/440266389/TM/DG/CF/89509857/product-jpeg-1000x1000.jpg",
        rating: 4.4,
        description: "Ariel powder sachet"
    },
    { 
        id: 264, 
        name: "Tide Powder", 
        weight: "1kg", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/81fjIPmrakL._SL1500_.jpg",
        rating: 4.4,
        description: "Tide detergent powder 1kg"
    },
    { 
        id: 265, 
        name: "Tide Powder", 
        weight: "500g", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/81fjIPmrakL._SL1500_.jpg",
        rating: 4.4,
        description: "Tide detergent powder 500g"
    },
    { 
        id: 266, 
        name: "Tide Powder", 
        weight: "10 Rs", 
        category: "personal-care", 
        image: "https://tse2.mm.bing.net/th/id/OIP.XngdKa8rN2wAuchy1Wqj7gAAAA?pid=Api&P=0&h=180",
        rating: 4.3,
        description: "Tide powder sachet"
    },
    { 
        id: 267, 
        name: "Henco Powder", 
        weight: "500g", 
        category: "personal-care", 
        image: "https://ppsnco.com/wp-content/uploads/2021/10/henko-300x300-1.jpg",
        rating: 4.2,
        description: "Henco detergent powder"
    },
    { 
        id: 268, 
        name: "Surf Excel Matic Liquid", 
        weight: "Packet", 
        category: "personal-care", 
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/3/28/b205c2ee-20aa-4dbc-9b2d-9fe497f7b72e_laundrydetergents_2XG7KS6WQF_MN.png",
        rating: 4.5,
        description: "Surf Excel for washing machines"
    },
    { 
        id: 269, 
        name: "Tide Matic Liquid", 
        weight: "Packet", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/718GaB5lYOL.jpg",
        rating: 4.4,
        description: "Tide liquid for washing machines"
    },
    { 
        id: 270, 
        name: "Ariel Liquid", 
        weight: "bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/612x+-jT-aL.jpg",
        rating: 4.6,
        description: "Ariel liquid detergent 1L"
    },
    { 
        id: 271, 
        name: "Nycin Powder", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61LwuAL+wvS._SL1500_.jpg",
        rating: 4.1,
        description: "Nycin talcum powder"
    },
    { 
        id: 272, 
        name: "Gokul Sandal Powder", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71jXpZjk0pL._SL1500_.jpg",
        rating: 4.4,
        description: "Gokul sandal talcum powder"
    },
    { 
        id: 273, 
        name: "Ponds Powder", 
        weight: "Small", 
        category: "personal-care", 
        image: "https://5.imimg.com/data5/SELLER/Default/2021/2/TW/MH/KQ/62528966/ponds-powder-500x500.jpg",
        rating: 4.5,
        description: "Ponds talcum powder small"
    },
    { 
        id: 274, 
        name: "Ponds Powder", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://5.imimg.com/data5/SELLER/Default/2021/2/TW/MH/KQ/62528966/ponds-powder-500x500.jpg",
        rating: 4.6,
        description: "Ponds talcum powder medium"
    },
    { 
        id: 275, 
        name: "Boroplus", 
        weight: "Small", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/51WgEnxLLrL.jpg",
        rating: 4.6,
        description: "Boroplus antiseptic cream small"
    },
    { 
        id: 276, 
        name: "Boroplus", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/51WgEnxLLrL.jpg",
        rating: 4.6,
        description: "Boroplus antiseptic cream medium"
    },
    { 
        id: 277, 
        name: "VVD Oil", 
        weight: "Small", 
        category: "personal-care", 
        image: "https://newassets.apollo247.com/pub/media/catalog/product/v/v/vvd0002-1.jpg",
        rating: 4.2,
        description: "VVD hair oil small"
    },
    { 
        id: 278, 
        name: "VVD Oil", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://newassets.apollo247.com/pub/media/catalog/product/v/v/vvd0002-1.jpg",
        rating: 4.3,
        description: "VVD hair oil medium"
    },
    { 
        id: 279, 
        name: "Parachute Oil", 
        weight: "Small", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61u9JoMufWL._SL1500_.jpg",
        rating: 4.7,
        description: "Parachute coconut oil small"
    },
    { 
        id: 280, 
        name: "Parachute Oil", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61u9JoMufWL._SL1500_.jpg",
        rating: 4.7,
        description: "Parachute coconut oil medium"
    },
    { 
        id: 281, 
        name: "Vatika Oil", 
        weight: "Small", 
        category: "personal-care", 
        image: "https://starindojapan.com/wp-content/uploads/2020/01/Vatika-Hair-Oil-Dabur.png",
        rating: 4.6,
        description: "Vatika enriched coconut oil small"
    },
    { 
        id: 282, 
        name: "Vatika Oil", 
        weight: "Medium Size", 
        category: "personal-care", 
        image: "https://starindojapan.com/wp-content/uploads/2020/01/Vatika-Hair-Oil-Dabur.png",
        rating: 4.6,
        description: "Vatika enriched coconut oil medium"
    },
    { 
        id: 283, 
        name: "Meera Shampoo Smooth & Shine", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_75,w_1080/v1/assets/images/2025/AUGUST/12/fxYpnpAG_c0b92d087cbd43b6bad5577431fb7bdd.jpg",
        rating: 4.4,
        description: "Meera shampoo for smooth hair"
    },
    { 
        id: 284, 
        name: "Meera Shampoo Small Onion & Fenugreek", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m237.apollo247.com/pub/media/catalog/product/M/E/MEE0292_1_1.jpg",
        rating: 4.5,
        description: "Meera shampoo with onion extract"
    },
    { 
        id: 285, 
        name: "Meera Shampoo Shikakai & Badam", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://incidecoder-content.storage.googleapis.com/75468cc7-99dd-45f5-95db-06c14f933aa7/products/meera-shampoo/meera-shampoo_front_photo_original.jpeg",
        rating: 4.5,
        description: "Meera shampoo with shikakai"
    },
    { 
        id: 286, 
        name: "Meera Shampoo Rice Kanji & Aloe Vera", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61gzz0GzCML._SX466_.jpg",
        rating: 4.4,
        description: "Meera shampoo with rice kanji"
    },
    { 
        id: 287, 
        name: "Pantene Shampoo", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://down-my.img.susercontent.com/file/id-11134207-7rasc-m61vnpw1yjtfb7",
        rating: 4.7,
        description: "Pantene hair fall control shampoo"
    },
    { 
        id: 288, 
        name: "Sunsilk Shampoo", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "http://5.imimg.com/data5/SELLER/Default/2023/5/306206172/JG/JO/OO/40237376/sunsilk-shampoo-180ml-mrp-190.jpeg",
        rating: 4.5,
        description: "Sunsilk strong and long shampoo"
    },
    { 
        id: 289, 
        name: "Dove Shampoo", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/resize-w:400/xSNpWdvSXt-dove_intense_repair_hair_shampoo_80_ml_616801_0_0.jpg",
        rating: 4.6,
        description: "Dove hair fall rescue shampoo"
    },
    { 
        id: 290, 
        name: "Tresme Shampoo", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://fmcg-viet.com/wp-content/uploads/2021/01/Tresemme-Shampoo-Bottle-620g-Salon-Rebond-1.jpg",
        description: "Tresme keratin smooth shampoo"
    },
    { 
        id: 291, 
        name: "Clinic Plus Shampoo", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71B9LMNefUL._SL1500_.jpg",
        rating: 4.4,
        description: "Clinic Plus strong hair shampoo"
    },
    { 
        id: 292, 
        name: "Head & Shoulders Shampoo", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://images.ctfassets.net/96bre0uq5ome/3gyKOKGyKRl4gR9oZECVr3/bbef2e4744676608c1370165ef55c709/HeadShoulders_2in1_ClassicClean_front.png",
        rating: 4.7,
        description: "Head & Shoulders anti-dandruff"
    },
    { 
        id: 293, 
        name: "Sunsilk Shampoo", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/613H7l-SdcL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.5,
        description: "Sunsilk pink variant shampoo"
    },
    { 
        id: 294, 
        name: "Hi Shampoo", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        rating: 4.2,
        description: "Hi Shampoo for normal hair"
    },
    { 
        id: 295, 
        name: "himalaya Shampoo", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://5.imimg.com/data5/SELLER/Default/2022/6/LH/OT/IN/115389508/himalaya-anti-hair-fall-shampoo-500x500.jpg",
        rating: 4.3,
        description: "Himalaya herbal shampoo"
    },
    { 
        id: 296, 
        name: "Cent-Fogg", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://5.imimg.com/data5/XN/UR/UM/SELLER-86150832/fogg-fragrance-body-spray-250x250.jpg",
        rating: 4.1,
        description: "Cent-Fogg room freshener"
    },
    { 
        id: 297, 
        name: "Denver", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://image3.mouthshut.com/images/imagesp/925769161s.jpg",
        rating: 4.3,
        description: "Denver deodorant for men"
    },
    { 
        id: 298, 
        name: "Wild Stone", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://rukminim1.flixcart.com/image/832/832/k20r8nk0/deodorant/s/3/w/275-ultra-sensual-perfume-deodorant-spray-wild-stone-men-original-imafhgzrn9hktvw2.jpeg?q=70",
        rating: 4.4,
        description: "Wild Stone deodorant spray"
    },
    { 
        id: 299, 
        name: "Z", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "http://zstore.in/cdn/shop/products/SL-5.png?v=1692269112",
        description: "Z deodorant for men"
    },
    { 
        id: 300, 
        name: "Axe", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61VapZxhALL._AC_SL1500_.jpg",
        rating: 4.5,
        description: "Axe signature deodorant"
    },
    { 
        id: 301, 
        name: "Yardley", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71x5zQOxbAL._SL1500_.jpg",
        rating: 4.4,
        description: "Yardley English perfume"
    },
    { 
        id: 302, 
        name: "Osum", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71aPgPm5v5L._SL1500_.jpg",
        rating: 4.3,
        description: "Osum premium deodorant"
    },
    { 
        id: 303, 
        name: "Real Man", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71XYVnvNq0L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.2,
        description: "Real Man deodorant spray"
    },
    { 
        id: 304, 
        name: "Engage", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/81Yr6V9jEpL._SX679_.jpg",
        rating: 4.3,
        description: "Engage deodorant for couples"
    },
    { 
        id: 305, 
        name: "Garnier Men Turbo Bright", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://5.imimg.com/data5/ECOM/Default/2023/7/322770401/OI/HF/FC/187962009/garnier-turbo-bright-1685709584575-sku-1153-0-500x500.jpg",
        rating: 4.4,
        description: "Garnier men's face wash"
    },
    { 
        id: 306, 
        name: "Garnier Anti Pollution", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://cdn01.pharmeasy.in/dam/products_otc/Z47732/garnier-men-face-wash-brightening-anti-pollution-turbobright-double-action-150-g-6.1-1674204803.jpg",
        rating: 4.4,
        description: "Garnier anti-pollution face wash"
    },
    { 
        id: 307, 
        name: "Acno Fight", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://api.watsons.com.my/medias/prd-side-93181.jpg?context=bWFzdGVyfHd0Y215L2ltYWdlc3w4NDUxM3xpbWFnZS9qcGVnfGFEWmhMMmd6WWk4eE1qQTRPVGM1TXpZM05USTVOQzlYVkVOTldTMDVNekU0TVMxemFXUmxMbXB3Wnd8MjMyZWI2YWU0MGYxYzI2ODAxZjNlZjc1ZGNjMDQ0NTY4NzFkYjVhNjM0NWU4NjZlNmFlYjBlMjgwZTBjNzYxZA",
        rating: 4.5,
        description: "Acno Fight anti-acne face wash"
    },
    { 
        id: 308, 
        name: "Denver Men Face Wash", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://denverformen.com/cdn/shop/files/Denver_Face_Wash_Oil_Clear_100_gm_2400x.jpg?v=1718791912",
        rating: 4.3,
        description: "Denver men's face wash"
    },
    { 
        id: 309, 
        name: "Garnier Vitamin C", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61Z8mNPUJEL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.6,
        description: "Garnier Vitamin C face wash"
    },
    { 
        id: 310, 
        name: "Ponds Bright Miracle", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://assets.unileversolutions.com/v1/122674453.png",
        rating: 4.5,
        description: "Ponds bright miracle face wash"
    },
    { 
        id: 311, 
        name: "Ponds Glow & Lovely Facewash", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/resize-w:400/VMP9Of8Okl-glow_lovely_bright_glow_facewash_100_gm_658172_1_0.jpg",
        rating: 4.5,
        description: "Ponds glow and lovely face wash"
    },
    { 
        id: 312, 
        name: "Ponds Bright Beauty", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/512dChFNuXL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.5,
        description: "Ponds bright beauty face wash"
    },
    { 
        id: 313, 
        name: "Dabur Amla", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71FlO3G++cL.jpg",
        rating: 4.6,
        description: "Dabur Amla hair oil"
    },
    { 
        id: 314, 
        name: "Indulekha", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://pinoyhyper.com/cdn/shop/files/indulekha-bringha-ayurvedic-hair-oil-100ml-pinoyhyper-7.png?v=1714482297",
        rating: 4.7,
        description: "Indulekha bringha hair oil"
    },
    { 
        id: 315, 
        name: "Aswini Hair Oil", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61KBsggcydL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Aswini herbal hair oil"
    },
    { 
        id: 316, 
        name: "Himalaya Face Wash", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/assets/item/free/resize-w:400/ygKsxFFvcp-himalaya_tan_removal_orange_face_wash_50_ml_0_0.jpg",
        rating: 4.6,
        description: "Himalaya purifying neem face wash"
    },
    { 
        id: 317, 
        name: "Garnier Brightening Facewash", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13066014_XL1_20230620.jpg",
        rating: 4.4,
        description: "Garnier Brightening face wash"
    },
    { 
        id: 318, 
        name: "Himalaya Face Gel", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://himalayawellness.in/cdn/shop/products/MOISTURIZIN-ALOE-VERA-FACE-GEL-100ML.jpg?v=1631178946",
        rating: 4.5,
        description: "Himalaya face cleansing gel"
    },
    { 
        id: 319, 
        name: "Navaratna Ayurveda Oil", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://highwaysupermarkt.nl/wp-content/uploads/2022/11/1EF28E6B-83E8-4E58-9AFC-2EF2FF1503EC.jpeg",
        rating: 4.4,
        description: "Navaratna Ayurvedic oil"
    },
    { 
        id: 320, 
        name: "Veet", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/10576281_XL1_20220519.jpg",
        rating: 4.5,
        description: "Veet hair removal cream"
    },
    { 
        id: 321, 
        name: "Keshavardini", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61PXnv8EUdL._SL1500_.jpg",
        rating: 4.3,
        description: "Keshavardini hair oil"
    },
    { 
        id: 322, 
        name: "Himalaya Brightening Vitamin C", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71zgLMg553L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.6,
        description: "Himalaya Vitamin C face wash"
    },
    { 
        id: 323, 
        name: "Vasmal Black Hair Oil", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/71e8rKvtC3L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.2,
        description: "Vasmal black hair oil colour"
    },
    { 
        id: 324, 
        name: "Garnier Color Naturals", 
        weight: "Bottle", 
        category: "personal-care", 
        image: "https://m.media-amazon.com/images/I/61MgE+3TqbL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.5,
        description: "Garnier hair color"
    },

    // Other Products Category (31 products)
    { 
        id: 325, 
        name: "Yippe Noodles", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://m.media-amazon.com/images/I/81YSjWhje0L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Yippe instant noodles"
    },
    { 
        id: 326, 
        name: "Yippe Noodles", 
        weight: "large size", 
        category: "other", 
        image: "https://m.media-amazon.com/images/I/81RgbhPPtSL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Yippe instant noodles"
    },
    { 
        id: 327, 
        name: "Top Raman Noodles", 
        weight: "medium Size", 
        category: "other", 
        image: "https://www.bigbasket.com/media/uploads/p/xl/263524_4-top-ramen-noodles-masala.jpg",
        rating: 4.2,
        description: "Top Raman instant noodles"
    },
    { 
        id: 328, 
        name: "Top Raman Curry", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://www.urbangroc.com/wp-content/uploads/2022/02/top-ramen-curry-280g.jpg",
        rating: 4.2,
        description: "Top Raman curry noodles"
    },
    { 
        id: 329, 
        name: "yippee", 
        weight: "small Size", 
        category: "other", 
        image: "https://m.media-amazon.com/images/I/81hR2nsxROL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.2,
        description: "Top Raman curry noodles"
    },
    { 
        id: 330, 
        name: "Top Raman Curry", 
        weight: "small size", 
        category: "other", 
        image: "https://m.media-amazon.com/images/I/71oatTzKl0L._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.2,
        description: "Top Raman curry noodles"
    },
    { 
        id: 331, 
        name: "Agarvathi", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://m.media-amazon.com/images/I/61ZCfDkpU3L._SL1000_.jpg",
        rating: 4.1,
        description: "Agarvathi spices"
    },
    { 
        id: 332, 
        name: "Rava", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://tse1.mm.bing.net/th/id/OIP.woTW2ysJmA4Lqc8chM18yAHaHa?pid=Api&P=0&h=180",
        rating: 4.0,
        description: "Semolina for cooking"
    },
    { 
        id: 363, 
        name: "Maida", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://h2healthyhabits.co.in/wp-content/uploads/2025/04/MAIDA-500GM-1024x1024.jpeg",
        rating: 4.0,
        description: "All purpose flour"
    },
    { 
        id: 364, 
        name: "Rusk", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://cdn.shopclues.com/images/detailed/44903/6639461_1475144260.jpg",
        rating: 4.2,
        description: "Crispy baked rusk"
    },
    { 
        id: 365, 
        name: "Nabati", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://cf.shopee.co.id/file/sg-11134201-22110-n8j209rpucjvf7",
        rating: 4.1,
        description: "Nabati cheese wafer"
    },
    { 
        id: 333, 
        name: "Honey", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://tse3.mm.bing.net/th/id/OIP.RpJgOoe3pGQngYD15CKVBQHaHa?pid=Api&P=0&h=180",
        rating: 4.6,
        description: "Pure natural honey"
    },
    { 
        id: 334, 
        name: "Kissan Jam", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://images-na.ssl-images-amazon.com/images/I/71L3BDZWGaL._SL1500_.jpg",
        rating: 4.4,
        description: "Kissan mixed fruit jam"
    },

    { 
        id: 335, 
        name: "GRB GULAB JAMUN MIX", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://ebazaar.ie/wp-content/uploads/2024/09/GRB-Gulab-Jamun.jpg",
        rating: 4.3,
        description: "BUY 1 GET 1 FREE"
    },
    { 
        id: 336, 
        name: "GRB ghee", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://www.jiomart.com/images/product/600x600/490011311/grb-ghee-200-ml-jar-product-images-o490011311-p490011311-0-202203150148.jpg",
        rating: 4.3,
        description: "best quality ghee"
    },
    { 
        id: 337, 
        name: "grb ghee 100g", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://rukminim2.flixcart.com/image/416/416/l4oi4cw0/ghee/s/t/m/100-ghee-1-pouch-grb-original-imagfgmykacthnpb.jpeg?q=70&crop=false",
        rating: 4.5,
        description: "MTR ready-to-make payasam"
    },
    { 
        id: 338, 
        name: "mtr payasam mix", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://m.media-amazon.com/images/I/710cKfklu5L._SL1100_.jpg",
        rating: 4.4,
        description: "Instant gulab jamun mix"
    },
    { 
        id: 339, 
        name: "Garnier Gel", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83MjExNVwvNzIxMTUtVW50aXRsZWQtZGVzaWduLTIwMjQtMTEtMDRUMjExMjI2LWtqZ2lnci5wbmciLCJlZGl0cyI6W119",
        rating: 4.5,
        description: "Garnier skin care product"
    },
    { 
        id: 340, 
        name: "Black Rose", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/21156453a.webp",
        rating: 4.2,
        description: "Black Rose hair color"
    },
    { 
        id: 341, 
        name: "Semiya", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://odhi.in/image/cache/catalog/grocery/noodles-vermicelli/anil-roasted-short-vermicelli-450g-front-sale-online-coimbatore-600x600.jpg",
        rating: 4.1,
        description: "Vermicelli for cooking"
    },
    { 
        id: 342, 
        name: "Brush", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://tse4.mm.bing.net/th/id/OIP.FlvuG6SDdQAXeyM7Ygq1oQHaHa?pid=Api&P=0&h=180",
        rating: 4.0,
        description: "Tooth brush"
    },
    { 
        id: 343, 
        name: "Battery", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://m.media-amazon.com/images/I/81dyPozVVEL._SL1500_.jpg",
        rating: 4.2,
        description: "AA batteries"
    },
    { 
        id: 344, 
        name: "Dustbin Cover", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://tse1.mm.bing.net/th/id/OIP.KT_24QKnMBWXMc3FDopS6AAAAA?pid=Api&P=0&h=180",
        rating: 4.1,
        description: "Dustbin plastic cover"
    },
    { 
        id: 345, 
        name: "LG Powder ", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://thedesifood.com/media/LG%20Powder%20-%20Asafoetida,%20100%20g-1.webp",
        rating: 4.3,
        description: "LG washing powder"
    },
    { 
        id: 346, 
        name: "Kimia Dates", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://5.imimg.com/data5/SELLER/Default/2021/1/MP/EX/MV/14352828/original-kimia-dates-500-grams-500x500.jpg",
        rating: 4.5,
        description: "Kimia premium dates"
    },
    { 
        id: 347, 
        name: "Lottie Choco Pie", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://tse2.mm.bing.net/th/id/OIP.WBAgI351c5lwJgGz3yYPjgHaES?pid=Api&P=0&h=180",
        rating: 4.4,
        description: "Lottie chocolate pie"
    },
    { 
        id: 348, 
        name: "Gokulam Dates", 
        weight: "Medium Size", 
        category: "other", 
        image: "http://www.gokulamdates.in/wp-content/uploads/2017/11/d22.png",
        rating: 4.4,
        description: "Gokulam premium dates"
    },
    { 
        id: 349, 
        name: "Kinder Joy", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://m.media-amazon.com/images/I/81aiLnDO+KL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.7,
        description: "Kinder Joy chocolate with toy"
    },
    { 
        id: 350, 
        name: "Lion Dates", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://m.media-amazon.com/images/I/610MkFuiHVL._AC_UL480_FMwebp_QL65_.jpg",
        rating: 4.3,
        description: "Lion brand dates"
    },
    { 
        id: 351, 
        name: "Annai Health Mix", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://www.bigbasket.com/media/uploads/p/l/60000165-2_4-annai-health-mix-roasted.jpg",
        rating: 4.2,
        description: "Annai health mix powder"
    },
    { 
        id: 352, 
        name: "GRB Soan Papudi", 
        weight: "Medium Size", 
        category: "other", 
        image:"https://www.directwholesale.com.sg/pub/media/catalog/product/cache/27ed4154bc0e5c3c51a580076325aed3/s/p/spm-grb-sop-40x250gmpkt.jpg",
        rating: 4.4,
        description: "GRB soan papdi sweet"
    },
    { 
        id: 353, 
        name: "Coca Cola", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://tse2.mm.bing.net/th/id/OIP.amD-fqUHOeQ734dEz6--7wHaHa?pid=Api&P=0&h=180",
        rating: 4.6,
        description: "Coca Cola soft drink"
    },
    { 
        id: 354, 
        name: "Sprite", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://tse4.mm.bing.net/th/id/OIP.I1k2l7avWInkuAVWVRZcAgHaJ4?pid=Api&P=0&h=180",
        rating: 4.5,
        description: "Sprite lemon soft drink"
    },
    { 
        id: 355, 
        name: "Fanta", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://tse4.mm.bing.net/th/id/OIP.b4HerH4mHbGy5to1h1JF0gHaHa?pid=Api&P=0&h=180",
        rating: 4.4,
        description: "Fanta orange soft drink"
    },
    { 
        id: 356, 
        name: "Frooti", 
        weight: "Medium Size", 
        category: "other", 
        image: "https://tse2.mm.bing.net/th/id/OIP.qJqEa3TmrzT8ASZIIQlfqAHaHa?pid=Api&P=0&h=180",
        rating: 4.5,
        description: "Frooti mango drink"
    },
    { 
        id: 357, 
        name: "Lays", 
        weight: "10 Rs", 
        category: "other", 
        image: "https://tse4.mm.bing.net/th/id/OIP.z90CQYN8jxB7FxqwgPWp_AHaHa?pid=Api&P=0&h=180",
        rating: 4.6,
        description: "Lays potato chips"
    },
    { 
        id: 358, 
        name: "Lays", 
        weight: "20 Rs", 
        category: "other", 
        image: "http://www.snackspause.com/cdn/shop/products/74012EBC-4493-4087-B50A-47A06D5C98C0.jpg?v=1679789838",
        rating: 4.6,
        description: "Lays potato chips large pack"
    },
    {
        id: 359,
        name: "Basmati Rice (1kg)",
        price: "₹120",
        category: "rice",
        rating: 4.8,
        description: "Premium quality basmati rice"
    },
    {        id: 360,
        name: "Sunflower Oil (1L)",
        price: "₹180",
        category: "oil",
        rating: 4.2,
        description: "Pure sunflower cooking oil"
    },
    {
        id: 361,
        name: "Turmeric Powder (200g)",
        price: "₹85",
        category: "spices",
        rating: 5.0,
        description: "Organic turmeric powder"
    },
    // ... (your existing products)
    
    // VV GOLD PRODUCTS - Your 80 Products (No Prices)

    {
        id: 1002,
        name: "Toor Dal 500g",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality toor dal",
        image: "images/products/vv-gold/toordal500g.jpg"
    },
    {
        id: 1003,
        name: "Toor Dal 100g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality toor dal",
        image: "images/products/vv-gold/toordal100g.jpg"
    },
    {
        id: 1004,
        name: "Urad Dal 250g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality urad dal",
        image: "images/products/vv-gold/uraddal-250g.jpg"
    },
    {
        id: 1005,
        name: "Moong Dal 500g",
        category: "vv-gold",
        rating: 4.7,
        image: "images/products/vv-gold/moongdal_500g.jpg"
    },
    {
        id: 1006,
        name: "Moong Dal 250g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality moong dal",
        image: "images/products/vv-gold/moongdal_250g.jpg"
    },
    {
        id: 1007,
        name: "Moong Dal 100g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality moong dal",
        image: "images/products/vv-gold/moongdal_100g.jpg"
    },
    {
        id: 1008,
        name: "White Chana 500g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality white chana",
        image: "images/products/vv-gold/whitechanna_500g.jpg"
    },
    {
        id: 1009,
        name: "Mysore Dal 500g",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality Mysore dal",
        image: "images/products/vv-gold/myssordal_500g.jpg"
    },
    {
        id: 1010,
        name: "Green Gram 500g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality green gram",
        image: "images/products/vv-gold/green_gram500g.jpg"
    },
    {
        id: 1011,
        name: "Green Gram 250g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality green gram",
        image: "images/products/vv-gold/greengram_250g.jpg"
    },
    {
        id: 1012,
        name: "Gram Dal 500g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality gram dal",
        image: "images/products/vv-gold/gramdal_500g.jpg"
    },
    {
        id: 1013,
        name: "Gram Dal 250g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality gram dal",
        image: "images/products/vv-gold/vv/gramdal250g.jpg"
    },
    {
        id: 1014,
        name: "White Rice Flakes (White Aval) 250g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality white rice flakes",
        image: "images/products/vv-gold/whitericeflakes(whiteaval)_250g.jpg"
    },
    {
        id: 1015,
        name: "Thick White Flakes 500g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality thick white flakes",
        image: "images/products/vv-gold/thick_white_flakes_500g.jpg"
    },
    {
        id: 1016,
        name: "Raw Groundnut 250g",
        category: "vv-gold",
        rating: 4.4,
        description: "Premium quality raw groundnut",
        image: "images/products/vv-gold/raw_groundnut_250g.jpg"
    },
    {
        id: 1017,
        name: "Roasted Groundnut 250g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality roasted groundnut",
        image: "images/products/vv-gold/roasted_groundnut_250g.jpg"
    },
    {
        id: 1018,
        name: "Black Tamarind 500g",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality black tamarind",
        image: "images/products/vv-gold/blacktamarind_500g.jpg"
    },
    {
        id: 1019,
        name: "Black Tamarind 250g",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality black tamarind",
        image: "images/products/vv-gold/blacktamarind_250g.jpg"
    },
    {
        id: 1020,
        name: "White Tamarind 250g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality white tamarind",
        image: "images/products/vv-gold/whitetamarind_250g.jpg"
    },
    {
        id: 1021,
        name: "VV Gold Biriyani Rice 1kg",
        category: "vv-gold",
        rating: 4.9,
        description: "Premium quality biriyani rice",
        image: "images/products/vv-gold/vvgoldbiriyanirice_1kg.jpg"
    },
    {
        id: 1022,
        name: "Red Chilli 500g (Neetu)",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality red chilli - Neetu variety",
        image: "images/products/vv-gold/red_chilli_500g(neetu).jpg"
    },
    {
        id: 1023,
        name: "Red Chilli 250g (Neetu)",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality red chilli - Neetu variety",
        image: "images/products/vv-gold/red_chilli_250g(neetu).jpg"
    },
    {
        id: 1024,
        name: "Red Chilli 500g (Gundu)",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality red chilli - Gundu variety",
        image: "images/products/vv-gold/redchilli_500g(gundu).jpg"
    },
    {
        id: 1025,
        name: "Red Chilli 250g (Gundu)",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality red chilli - Gundu variety",
        image: "images/products/vv-gold/red_chilli_250g(gundu).jpg"
    },
    {
        id: 1026,
        name: "Coriander Seeds 500g",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality coriander seeds",
        image: "images/products/vv-gold/corianderseeds500g.jpg"
    },
    {
        id: 1027,
        name: "Coriander Seeds 250g",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality coriander seeds",
        image: "images/products/vv-gold/corianderseeds250g.jpg"
    },
    {
        id: 1028,
        name: "Pearl Millet (Kambu) 250g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality pearl millet",
        image: "images/products/vv-gold/pearlmillet(kambu)250g.jpg"
    },
    {
        id: 1029,
        name: "Cholam 250g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality cholam",
        image: "images/products/vv-gold/cholam250g.jpg"
    },
    {
        id: 1030,
        name: "Mustard 250g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality mustard seeds",
        image: "images/products/vv-gold/mustard250g.jpg"
    },
    {
        id: 1031,
        name: "Fennel Seeds (Sombu) 250g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality fennel seeds",
        image: "images/products/vv-gold/fennelseeds(sombu)250g.jpg"
    },
    {
        id: 1032,
        name: "Diamond Kalkandu 250g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality diamond kalkandu",
        image: "images/products/vv-gold/diamondkalkandu250g.jpg"
    },
    {
        id: 1033,
        name: "Karamani (Red) 250g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality red karamani",
        image: "images/products/vv-gold/karamani(red)250g.jpg"
    },
    {
        id: 1034,
        name: "blackeyedpeas(Karamani)250g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality black eyed peas",
        image: "images/products/vv-gold/blackeyedpeas(karamani)250g.jpg"
    },
    {
        id: 1035,
        name: "White Beans (Mochakottai) 250g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality white beans",
        image: "images/products/vv-gold/whitebeans(mochakottai)250g.jpg"
    },
    {
        id: 1036,
        name: "Black Urad Dal 250g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality black urad dal",
        image: "images/products/vv-gold/blackuradal-250g.jpg"
    },
    {
        id: 1037,
        name: "Soyabeans 200g",
        category: "vv-gold",
        rating: 4.4,
        description: "Premium quality soyabeans",
        image: "images/products/vv-gold/soyabeans200g.jpg"
    },
    {
        id: 1038,
        name: "Wheat 1kg",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality wheat",
        image: "images/products/vv-gold/wheat1kg.jpg"
    },
    {
        id: 1039,
        name: "VV Gold Ponnirice 1kg",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality ponni rice",
        image: "images/products/vv-gold/vvgoldponnirice1kg.jpg"
    },
    {
        id: 1040,
        name: "VV Gold Idli Rice 1kg",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality idli rice",
        image: "images/products/vv-gold/vvgoldidlirice1kg.jpg"
    },
    {
        id: 1041,
        name: "Sugar 1kg",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality sugar",
        image: "images/products/vv-gold/sugar1kg.jpg"
    },
    {
        id: 1042,
        name: "Sugar 500g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality sugar",
        image: "images/products/vv-gold/sugar500g.jpg"
    },
    {
        id: 1043,
        name: "Sugar 250g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality sugar",
        image: "images/products/vv-gold/sugar250g.jpg"
    },
    {
        id: 1044,
        name: "Fenugreek Seeds (Venthayam) 250g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality fenugreek seeds",
        image: "images/products/vv-gold/fenugreekseeds(venthayam)250g.jpg"
    },
    {
        id: 1045,
        name: "Cashew 250g",
        category: "vv-gold",
        rating: 4.9,
        description: "Premium quality cashew",
        image: "images/products/vv-gold/cashew250g.jpg"
    },
    {
        id: 1046,
        name: "Dry Grapes 250g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality dry grapes",
        image: "images/products/vv-gold/drygrapes250g.jpg"
    },
    {
        id: 1047,
        name: "Almond 250g",
        category: "vv-gold",
        rating: 4.9,
        description: "Premium quality almond",
        image: "images/products/vv-gold/almond250g.jpg"
    },
    {
        id: 1048,
        name: "Black Dry Grapes 250g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality black dry grapes",
        image: "images/products/vv-gold/blackdrygrapes250g.jpg"
    },
    {
        id: 1049,
        name: "Fig Fruit Dry 250g",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality dry fig fruit",
        image: "images/products/vv-gold/figfruitdry(athipazha)250g.jpg"
    },
    {
        id: 1050,
        name: "Walnut 250g",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality walnut",
        image: "images/products/vv-gold/walnut250g.jpg"
    },
    {
        id: 1051,
        name: "Black Chana 500g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality black chana",
        image: "images/products/vv-gold/blackchana500g.jpg"
    },
    {
        id: 1052,
        name: "Black Chana 250g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality black chana",
        image: "images/products/vv-gold/black_chana250g.jpg"
    },
    {
        id: 1053,
        name: "Red Rice Flakes 250g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality red rice flakes",
        image: "images/products/vv-gold/redriceflakes250g.jpg"
    },
    {
        id: 1054,
        name: "Roasted Groundnut 100g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality roasted groundnut",
        image: "images/products/vv-gold/roastedgroundnut100g.jpg"
    },
    {
        id: 1055,
        name: "Bengal Dal (Kadalaparuppu) 500g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality bengal dal",
        image: "images/products/vv-gold/bengaldal(kadalaparuppu)500g.jpg"
    },
    {
        id: 1056,
        name: "Bengal Dal 250g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality bengal dal",
        image: "images/products/vv-gold/bengaldal250g.jpg"
    },
    {
        id: 1057,
        name: "Bengal Dal 100g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality bengal dal",
        image: "images/products/vv-gold/bengaldal100g.jpg"
    },
    {
        id: 1058,
        name: "China Kalkandu 500g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality china kalkandu",
        image: "images/products/vv-gold/chinakalkandu500g.jpg"
    },
    {
        id: 1059,
        name: "Biriyani Rice 2nd Quality 1kg",
        category: "vv-gold",
        rating: 4.3,
        description: "Good quality biriyani rice",
        image: "images/products/vv-gold/biriyanirice2nd quality1kg.jpg"
    },
    {
        id: 1060,
        name: "Foxtail Millet (Thinai) 500g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality foxtail millet",
        image: "images/products/vv-gold/foxtailmillet(thinai)500g.jpg"
    },
    {
        id: 1061,
        name: "Kodo Millet (Varagu) 500g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality kodo millet",
        image: "images/products/vv-gold/kodomillet(varagu)500g.jpg"
    },
    {
        id: 1062,
        name: "Little Millet (Samai) 500g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality little millet",
        image: "images/products/vv-gold/littlemilletrice(samai).jpg"
    },
    {
        id: 1063,
        name: "Barnyard Millet (Kuthiravaali) 500g",
        category: "vv-gold",
        rating: 4.4,
        description: "Premium quality barnyard millet",
        image: "images/products/vv-gold/barnyardmilletrice(kuthiravaali)500g.jpg"
    },
    {
        id: 1064,
        name: "Toor Dal 1kg",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality toor dal",
        image: "images/products/vv-gold/toordal1kg.jpg"
    },
    {
        id: 1065,
        name: "Jaggery 500g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality jaggery",
        image: "images/products/vv-gold/jaggery500g.jpg"
    },
    {
        id: 1066,
        name: "Jaggery 250g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality jaggery",
        image: "images/products/vv-gold/jaggery250g.jpg"
    },
    {
        id: 1067,
        name: "Gram Dal 100g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality gram dal",
        image: "images/products/vv-gold/gramdal100g.jpg"
    },
    {
        id: 1068,
        name: "Mustard 100g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality mustard seeds",
        image: "images/products/vv-gold/mustard100g.jpg"
    },
    {
        id: 1069,
        name: "Black Pepper 100g",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality black pepper",
        image: "images/products/vv-gold/blackpepper100g.jpg"
    },
    { 
    id: 1070,
        name: "Cumin Seeds 100g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality cumin seeds",
        image: "images/products/vv-gold/cuminseeds100g.jpg"
    },
    { 
    id: 1071,
        name: "gram dal 250g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality gram dal",
        image: "images/products/vv-gold/gram_dal250g.jpg"
    },
    {
        id: 1072,
        name: "Fennel Seeds 100g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality fennel seeds",
        image: "images/products/vv-gold/fennelseeds100g.jpg"
    },
    {
        id: 1073,
        name: "Javvarisi 250g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality javvarisi",
        image: "images/products/vv-gold/javvarisi250g.jpg"
    },
    {
        id: 1074,
        name: "Javvarisi 100g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality javvarisi",
        image: "images/products/vv-gold/javvarisi100g.jpg"
    },
    {
        id: 1075,
        name: "Fenugreek Seeds 100g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality fenugreek seeds",
        image: "images/products/vv-gold/fenugreekseed(venthayam)100g.jpg"
    },
    {
        id: 1076,
        name: "Soyabeans 100g",
        category: "vv-gold",
        rating: 4.4,
        description: "Premium quality soyabeans",
        image: "images/products/vv-gold/soyabeans100g.jpg"
    },
    {
        id: 1077,
        name: "Cashew 100g",
        category: "vv-gold",
        rating: 4.8,
        description: "Premium quality cashew",
        image: "images/products/vv-gold/cashew100g.jpg"
    },
    {
        id: 1078,
        name: "Dry Grapes 100g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality dry grapes",
        image: "images/products/vv-gold/drygrapes100g.jpg"
    },
    {
        id: 1079,
        name: "Tamarind 100g",
        category: "vv-gold",
        rating: 4.5,
        description: "Premium quality tamarind",
        image: "images/products/vv-gold/tamarind100g.jpg"
    },
    {
        id: 1080,
        name: "Naphthalene Balls 50g",
        category: "vv-gold",
        rating: 4.3,
        description: "Premium quality naphthalene balls",
        image: "images/products/vv-gold/napththaleneballs50g.jpg"
    },
    {
        id: 1081,
        name: "Poppy Seeds 50g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality poppy seeds",
        image: "images/products/vv-gold/poppyseeds50g.jpg"
    },
    {
        id: 1082,
        name: "Urad Dal 1kg",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality urad dal",
        image: "images/products/vv-gold/uraddal1kg.jpg"
    },
    {
        id: 1083,
        name: "Urad Dal 500g",
        category: "vv-gold",
        rating: 4.7,
        description: "Premium quality urad dal",
        image: "images/products/vv-gold/uraddal500g.jpg"
    },
    {
        id: 1084,
        name: "Urad Dal 100g",
        category: "vv-gold",
        rating: 4.6,
        description: "Premium quality urad dal",
        image: "images/products/vv-gold/uraddal100g.jpg"
    }
];

// Products Page Specific Functions
