// ==================== CONFIGURATION ====================
const CONFIG = {
    defaultLanguage: 'id',
    darkMode: false,
    dictionariesLoaded: false
};

// ==================== TRANSLATION SYSTEM ====================
const translationDictionaries = {
    maanyan_to_id: {},
    bakumpai_to_id: {},
    ngaju_to_id: {},
    dusun_to_id: {},
    id_to_maanyan: {},
    id_to_bakumpai: {},
    id_to_ngaju: {},
    id_to_dusun: {}
};

// Fallback dictionaries if JSON loading fails
const FALLBACK_DICTIONARIES = {
    maanyan_to_id: {"inun":"apa","maharat":"baik","kuman":"makan","inum":"minum","manuk":"ayam"},
    bakumpai_to_id: {"kakah":"kakak","bujur":"baik","kuman":"makan","inum":"minum","hayam":"ayam"},
    ngaju_to_id: {"pahari":"keluarga","ha'i":"besar","kuman":"makan","inum":"minum","manuk":"ayam"},
    dusun_to_id: {"bakoi":"tidak","ajoh":"banyak","kuman":"makan","inum":"minum","manuk":"ayam"},
    id_to_maanyan: {"apa":"inun","baik":"maharat","makan":"kuman","minum":"inum","ayam":"manuk"},
    id_to_bakumpai: {"kakak":"kakah","baik":"bujur","makan":"kuman","minum":"inum","ayam":"hayam"},
    id_to_ngaju: {"keluarga":"pahari","besar":"ha'i","makan":"kuman","minum":"inum","ayam":"manuk"},
    id_to_dusun: {"tidak":"bakoi","banyak":"ajoh","makan":"kuman","minum":"inum","ayam":"manuk"}
};

// UI Translations
const UI_TRANSLATIONS = {
    id: {
        "nav.home": "Beranda",
        "nav.about": "Tentang",
        "nav.services": "Layanan",
        "nav.contact": "Kontak",
        "nav.translate": "Terjemahan",
        "hero.title": "Dahani Dahanai Tuntung Tulus",
        "hero.subtitle": "Selamat datang di website Reinaku Baresha.",
        "hero.getStarted": "Mulai",
        "hero.learnMore": "Pelajari Lebih",
        "about.title": "Tentang",
        "about.heading": "Mengenal 4 Bahasa Daerah Dominan di Barito Selatan",
        "about.paragraph1": "Kabupaten Barito Selatan terletak di Provinsi Kalimantan Tengah dan merupakan wilayah dengan keragaman etnis dan bahasa yang kaya. Mayoritas penduduknya berasal dari Suku Dayak, dengan beberapa sub-suku seperti Bakumpai, Dusun Witu, Ma'anyan dan Ngaju. Selain itu, terdapat pula komunitas Banjar dan pendatang dari daerah lain.",
        "about.paragraph2": "Bahasa-bahasa daerah di Barito Selatan termasuk dalam rumpun bahasa Austronesia dengan ciri khas struktur dan kosakata yang unik. Meskipun Bahasa Indonesia digunakan dalam komunikasi resmi, bahasa daerah tetap hidup dalam percakapan sehari-hari, upacara adat dan tradisi lisan.",
        "feature.label.tribe": "Suku :",
        "feature.label.location": "Lokasi :",
        "feature.label.characteristic": "Ciri :",
        "feature.label.example": "Contoh :",
        "feature.bakumpai.title": "Bahasa Bakumpai",
        "feature.bakumpai.tribe": "Dayak Bakumpai",
        "feature.bakumpai.location": "Sepanjang Sungai Barito (Jenamas, Dusun Selatan)",
        "feature.bakumpai.characteristic": "Mirip Bahasa Banjar",
        "feature.bakumpai.example": "\"Ikau\" (kamu), \"Kareh\" (nanti)",
        "feature.dusun.title": "Bahasa Dusun Witu",
        "feature.dusun.tribe": "Dayak Dusun Witu",
        "feature.dusun.location": "Dusun Selatan",
        "feature.dusun.characteristic": "Berbeda dengan Dusun Sabah/Malaysia",
        "feature.dusun.example": "\"Bakoi/koi\" (tidak), \"Ajoh\" (banyak)",
        "feature.maanyan.title": "Bahasa Ma'anyan",
        "feature.maanyan.tribe": "Dayak Ma'anyan",
        "feature.maanyan.location": "Gunung Bintang Awai",
        "feature.maanyan.characteristic": "Ada kaitan dengan bahasa Madagaskar",
        "feature.maanyan.example": "\"Inun\" (Apa), \"Here\" (mereka)",
        "feature.ngaju.title": "Bahasa Ngaju",
        "feature.ngaju.tribe": "Dayak Ngaju",
        "feature.ngaju.location": "Penyebaran luas di Kalteng",
        "feature.ngaju.characteristic": "Dominan, digunakan dalam ritual Tiwah",
        "feature.ngaju.example": "\"Pahari\" (keluarga), \"ha'i\" (besar)",
        "services.title": "Layanan",
        "services.subtitle": "Menyediakan Terjemahan 4 Bahasa Domoinan di Kabupaten Barito Selatan",
        "services.translate": "Terjemahan",
        "services.bakumpai.title": "Terjemahan Bakumpai",
        "services.bakumpai.description": "Terjemahan profesional antara Bahasa Indonesia dan Bahasa Bakumpai.",
        "services.dusun.title": "Terjemahan Dusun Witu",
        "services.dusun.description": "Terjemahan profesional antara Bahasa Indonesia dan Bahasa Dusun Witu.",
        "services.maanyan.title": "Terjemahan Ma'anyan",
        "services.maanyan.description": "Terjemahan profesional antara Bahasa Indonesia dan Bahasa Ma'anyan.",
        "services.ngaju.title": "Terjemahan Ngaju",
        "services.ngaju.description": "Terjemahan profesional antara Bahasa Indonesia dan Bahasa Ngaju.",
        "modal.title": "TERJEMAHAN KATA",
        "modal.bakumpaiTitle": "TERJEMAHAN BAKUMPAI",
        "modal.dusunTitle": "TERJEMAHAN DUSUN WITU",
        "modal.maanyanTitle": "TERJEMAHAN MA'ANYAN",
        "modal.ngajuTitle": "TERJEMAHAN NGAJU",
        "modal.inputLabel": "Masukkan Kata:",
        "modal.outputLabel": "Terjemahan:",
        "modal.directionLabel": "Pilih Bahasa:",
        "modal.translateButton": "Terjemahkan",
        "modal.idToBakumpai": "Indonesia - Bakumpai",
        "modal.bakumpaiToId": "Bakumpai - Indonesia",
        "modal.idToDusun": "Indonesia - Dusun Witu",
        "modal.dusunToId": "Dusun Witu - Indonesia",
        "modal.idToMaanyan": "Indonesia - Maanyan",
        "modal.maanyanToId": "Maanyan - Indonesia",
        "modal.idToNgaju": "Indonesia - Ngaju",
        "modal.ngajuToId": "Ngaju - Indonesia",
        "contact.title": "Kontak",
        "contact.subtitle": "Kirim Kritik dan Saran",
        "contact.location": "Lokasi",
        "contact.email": "Email",
        "contact.phone": "Telepon",
        "contact.form.name": "Nama Anda",
        "contact.form.email": "Email Anda",
        "contact.form.message": "Pesan Anda",
        "contact.form.submit": "Kirim Pesan",
        "footer.description": "Melestarikan warisan linguistik Kalimantan melalui layanan terjemahan profesional.",
        "footer.services": "Layanan",
        "footer.quickLinks": "Tautan Cepat",
        "footer.rights": "Hak Cipta Dilindungi."
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.services": "Services",
        "nav.contact": "Contact",
        "nav.translate": "Translation",
        "hero.title": "Dahani Dahanai Tuntung Tulus",
        "hero.subtitle": "Welcome to Reinaku Baresha's website.",
        "hero.getStarted": "Get Started",
        "hero.learnMore": "Learn More",
        "about.title": "About",
        "about.heading": "Getting to Know the 4 Dominant Regional Languages in South Barito",
        "about.paragraph1": "South Barito Regency is located in Central Kalimantan Province and is an area with rich ethnic and linguistic diversity. The majority of its population comes from the Dayak tribe, with several sub-tribes such as Bakumpai, Dusun (Dusun Witu), Ma'anyan and Ngaju. In addition, there are also Banjar communities and migrants from other regions.",
        "about.paragraph2": "The regional languages in South Barito belong to the Austronesian language family with unique structural and vocabulary characteristics. Although Indonesian is used in official communication, regional languages remain alive in daily conversations, traditional ceremonies and oral traditions.",
        "feature.label.tribe": "Tribe :",
        "feature.label.location": "Location :",
        "feature.label.characteristic": "Characteristic :",
        "feature.label.example": "Example :",
        "feature.bakumpai.title": "Bakumpai Language",
        "feature.bakumpai.tribe": "Dayak Bakumpai",
        "feature.bakumpai.location": "Along the Barito River (Jenamas, South Dusun)",
        "feature.bakumpai.characteristic": "Similar to Banjar Language",
        "feature.bakumpai.example": "\"Ikau\" (you), \"Kareh\" (later)",
        "feature.dusun.title": "Dusun Witu Language",
        "feature.dusun.tribe": "Dayak Dusun Witu",
        "feature.dusun.location": "South Dusun",
        "feature.dusun.characteristic": "Different from Dusun Sabah/Malaysia",
        "feature.dusun.example": "\"Bakoi/koi\" (no), \"Ajoh\" (many)",
        "feature.maanyan.title": "Ma'anyan Language",
        "feature.maanyan.tribe": "Dayak Ma'anyan",
        "feature.maanyan.location": "Gunung Bintang Awai",
        "feature.maanyan.characteristic": "Related to Malagasy language",
        "feature.maanyan.example": "\"Inun\" (What), \"Here\" (they)",
        "feature.ngaju.title": "Ngaju Language",
        "feature.ngaju.tribe": "Dayak Ngaju",
        "feature.ngaju.location": "Widespread in Central Kalimantan",
        "feature.ngaju.characteristic": "Dominant, used in Tiwah rituals",
        "feature.ngaju.example": "\"Pahari\" (family), \"ha'i\" (big)",
        "services.title": "Services",
        "services.subtitle": "Providing Translations of 4 Domoinan Languages in South Barito Regency",
        "services.translate": "Translate",
        "services.bakumpai.title": "Bakumpai Translation",
        "services.bakumpai.description": "Professional translation between Indonesian and Bakumpai language.",
        "services.dusun.title": "Dusun Witu Translation",
        "services.dusun.description": "Professional translation between Indonesian and Dusun Witu language.",
        "services.maanyan.title": "Ma'anyan Translation",
        "services.maanyan.description": "Professional translation between Indonesian and Ma'anyan language.",
        "services.ngaju.title": "Ngaju Translation",
        "services.ngaju.description": "Professional translation between Indonesian and Ngaju language.",
        "modal.title": "WORD TRANSLATION",
        "modal.bakumpaiTitle": "BAKUMPAI TRANSLATION",
        "modal.dusunTitle": "DUSUN WITU TRANSLATION",
        "modal.maanyanTitle": "MA'ANYAN TRANSLATION",
        "modal.ngajuTitle": "NGAJU TRANSLATION",
        "modal.inputLabel": "Enter Word:",
        "modal.outputLabel": "Translation:",
        "modal.directionLabel": "Select Language:",
        "modal.translateButton": "Translate",
        "modal.idToBakumpai": "Indonesian - Bakumpai",
        "modal.bakumpaiToId": "Bakumpai - Indonesian",
        "modal.idToDusun": "Indonesian - Dusun Witu",
        "modal.dusunToId": "Dusun Witu - Indonesian",
        "modal.idToMaanyan": "Indonesian - Maanyan",
        "modal.maanyanToId": "Maanyan - Indonesian",
        "modal.idToNgaju": "Indonesian - Ngaju",
        "modal.ngajuToId": "Ngaju - Indonesian",
        "contact.title": "Contact",
        "contact.subtitle": "Send Criticism and Suggestions",
        "contact.location": "Location",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.form.name": "Your Name",
        "contact.form.email": "Your Email",
        "contact.form.message": "Your Message",
        "contact.form.submit": "Send Message",
        "footer.description": "Preserving Borneo's linguistic heritage through professional translation services.",
        "footer.services": "Services",
        "footer.quickLinks": "Quick Links",
        "footer.rights": "All Rights Reserved."
    }
};

// ==================== CORE FUNCTIONS ====================

/**
 * Load translation dictionaries from JSON files
 */
async function loadDictionaries() {
    try {
        const dictionaryFiles = [
            'data/maanyan_to_id.json',
            'data/bakumpai_to_id.json',
            'data/ngaju_to_id.json',
            'data/dusun_to_id.json',
            'data/id_to_maanyan.json',
            'data/id_to_bakumpai.json',
            'data/id_to_ngaju.json',
            'data/id_to_dusun.json'
        ];

        const responses = await Promise.all(
            dictionaryFiles.map(file => 
                fetch(file)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Failed to load ${file}: ${response.status}`);
                        }
                        return response.json();
                    })
                    .catch(error => {
                        console.error(`Error loading ${file}:`, error);
                        return null;
                    })
            )
        );

        // Check if any dictionary failed to load
        const allLoaded = responses.every(response => response !== null);
        
        if (allLoaded) {
            // Assign loaded dictionaries
            translationDictionaries.maanyan_to_id = responses[0];
            translationDictionaries.bakumpai_to_id = responses[1];
            translationDictionaries.ngaju_to_id = responses[2];
            translationDictionaries.dusun_to_id = responses[3];
            translationDictionaries.id_to_maanyan = responses[4];
            translationDictionaries.id_to_bakumpai = responses[5];
            translationDictionaries.id_to_ngaju = responses[6];
            translationDictionaries.id_to_dusun = responses[7];
            
            console.log('All dictionaries loaded successfully');
            CONFIG.dictionariesLoaded = true;
        } else {
            // Use fallback dictionaries if any failed to load
            throw new Error('Some dictionaries failed to load, using fallback');
        }
    } catch (error) {
        console.error('Error loading dictionaries:', error);
        // Use fallback dictionaries
        Object.assign(translationDictionaries, FALLBACK_DICTIONARIES);
        CONFIG.dictionariesLoaded = true;
    }
}

/**
 * Translate text using the loaded dictionaries
 * @param {string} input - Input text to translate
 * @param {string} direction - Translation direction (e.g., 'id_to_bakumpai')
 * @returns {string} Translated text
 */
function translate(input, direction) {
    if (!CONFIG.dictionariesLoaded) {
        return UI_TRANSLATIONS[CONFIG.defaultLanguage]['modal.error'] || 'Translation dictionaries are still loading. Please try again shortly.';
    }

    const inputText = input.trim().toLowerCase();
    
    if (!inputText) {
        return UI_TRANSLATIONS[CONFIG.defaultLanguage]['modal.inputLabel'] || 'Please enter text to translate';
    }
    
    try {
        const dictionary = translationDictionaries[direction];
        if (!dictionary) {
            return 'Invalid translation direction';
        }
        
        // Translate each word
        const translatedWords = inputText.split(' ').map(word => {
            // Try exact match first
            if (dictionary[word]) {
                return dictionary[word];
            }
            
            // Try to find a close match (case insensitive)
            const lowerWord = word.toLowerCase();
            for (const key in dictionary) {
                if (key.toLowerCase() === lowerWord) {
                    return dictionary[key];
                }
            }
            
            // Return original word if no translation found
            return word;
        });
        
        return translatedWords.join(' ');
    } catch (error) {
        console.error('Translation error:', error);
        return UI_TRANSLATIONS[CONFIG.defaultLanguage]['modal.error'] || 'Translation failed. Please try again.';
    }
}

/**
 * Switch UI language
 * @param {string} lang - Language code ('id' or 'en')
 */
function switchLanguage(lang) {
    if (!UI_TRANSLATIONS[lang]) {
        console.error(`Language ${lang} not supported`);
        return;
    }

    CONFIG.defaultLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (UI_TRANSLATIONS[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = UI_TRANSLATIONS[lang][key];
            } else {
                element.textContent = UI_TRANSLATIONS[lang][key];
            }
        }
    });
    
    // Update select options
    document.querySelectorAll('select option').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (key && UI_TRANSLATIONS[lang][key]) {
            option.textContent = UI_TRANSLATIONS[lang][key];
        }
    });
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

/**
 * Toggle dark mode
 */
function toggleDarkMode() {
    CONFIG.darkMode = !CONFIG.darkMode;
    document.body.classList.toggle('dark-mode', CONFIG.darkMode);
    
    // Change icon
    const icon = document.getElementById('themeToggle').querySelector('i');
    if (CONFIG.darkMode) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
    
    // Store preference
    localStorage.setItem('darkMode', CONFIG.darkMode);
}

/**
 * Handle contact form submission
 * @param {Event} event - Form submission event
 */
async function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
        alert(UI_TRANSLATIONS[CONFIG.defaultLanguage]['contact.form.error'] || 'Please fill in all fields');
        return;
    }
    
    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert(UI_TRANSLATIONS[CONFIG.defaultLanguage]['contact.form.emailError'] || 'Please enter a valid email address');
        return;
    }
    
    try {
        // In a real implementation, you would send this to a server
        console.log('Contact form submitted:', { name, email, message });
        
        // Show success message
        alert(UI_TRANSLATIONS[CONFIG.defaultLanguage]['contact.form.success'] || 'Thank you for your message!');
        
        // Reset form
        form.reset();
    } catch (error) {
        console.error('Error submitting contact form:', error);
        alert(UI_TRANSLATIONS[CONFIG.defaultLanguage]['contact.form.error'] || 'Failed to send message. Please try again later.');
    }
}

/**
 * Initialize the application
 */
async function initializeApp() {
    // Load dictionaries first
    await loadDictionaries();
    
    // Load preferences
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'id';
    const darkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply preferences
    CONFIG.darkMode = darkMode;
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
    
    // Set language
    switchLanguage(preferredLanguage);
    
    // Setup event listeners
    setupEventListeners();
}

/**
 * Setup all event listeners
 */
function setupEventListeners() {
    // Language switcher
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            switchLanguage(option.dataset.lang);
        });
    });
    
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navbar.classList.toggle('active');
        });
    }
    
    // Close navbar when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navbar) {
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    });
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Main translation modal (navbar button)
    const mainModal = document.getElementById('translationModal');
    const mainModalClose = document.getElementById('closeModal');
    const mainTranslateBtn = document.getElementById('translateBtn');
    
    if (mainTranslateBtn && mainModal) {
        mainTranslateBtn.addEventListener('click', () => {
            mainModal.classList.add('active');
        });
    }
    
    if (mainModalClose && mainModal) {
        mainModalClose.addEventListener('click', () => {
            mainModal.classList.remove('active');
        });
        
        // Close modal when clicking outside
        mainModal.addEventListener('click', (e) => {
            if (e.target === mainModal) {
                mainModal.classList.remove('active');
            }
        });
    }
    
    // Main translation form
    const mainTranslationForm = document.getElementById('translationForm');
    if (mainTranslationForm) {
        mainTranslationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('inputText').value;
            const direction = document.getElementById('direction').value;
            const output = translate(input, direction);
            document.getElementById('outputText').value = output;
        });
    }
    
    // Bakumpai translation modal
    const bakumpaiModal = document.getElementById('bakumpaiModal');
    const bakumpaiModalClose = document.getElementById('closeBakumpaiModal');
    const bakumpaiTranslateBtn = document.getElementById('translateBtn1');
    
    if (bakumpaiTranslateBtn && bakumpaiModal) {
        bakumpaiTranslateBtn.addEventListener('click', () => {
            bakumpaiModal.classList.add('active');
        });
    }
    
    if (bakumpaiModalClose && bakumpaiModal) {
        bakumpaiModalClose.addEventListener('click', () => {
            bakumpaiModal.classList.remove('active');
        });
        
        bakumpaiModal.addEventListener('click', (e) => {
            if (e.target === bakumpaiModal) {
                bakumpaiModal.classList.remove('active');
            }
        });
    }
    
    // Bakumpai translation form
    const bakumpaiForm = document.getElementById('bakumpaiForm');
    if (bakumpaiForm) {
        bakumpaiForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('bakumpaiInput').value;
            const direction = document.getElementById('bakumpaiDirection').value;
            const output = translate(input, direction);
            document.getElementById('bakumpaiOutput').value = output;
        });
    }
    
    // Dusun Witu translation modal
    const dusunModal = document.getElementById('dusunModal');
    const dusunModalClose = document.getElementById('closeDusunModal');
    const dusunTranslateBtn = document.getElementById('translateBtn2');
    
    if (dusunTranslateBtn && dusunModal) {
        dusunTranslateBtn.addEventListener('click', () => {
            dusunModal.classList.add('active');
        });
    }
    
    if (dusunModalClose && dusunModal) {
        dusunModalClose.addEventListener('click', () => {
            dusunModal.classList.remove('active');
        });
        
        dusunModal.addEventListener('click', (e) => {
            if (e.target === dusunModal) {
                dusunModal.classList.remove('active');
            }
        });
    }
    
    // Dusun Witu translation form
    const dusunForm = document.getElementById('dusunForm');
    if (dusunForm) {
        dusunForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('dusunInput').value;
            const direction = document.getElementById('dusunDirection').value;
            const output = translate(input, direction);
            document.getElementById('dusunOutput').value = output;
        });
    }
    
    // Ma'anyan translation modal
    const maanyanModal = document.getElementById('maanyanModal');
    const maanyanModalClose = document.getElementById('closeMaanyanModal');
    const maanyanTranslateBtn = document.getElementById('translateBtn3');
    
    if (maanyanTranslateBtn && maanyanModal) {
        maanyanTranslateBtn.addEventListener('click', () => {
            maanyanModal.classList.add('active');
        });
    }
    
    if (maanyanModalClose && maanyanModal) {
        maanyanModalClose.addEventListener('click', () => {
            maanyanModal.classList.remove('active');
        });
        
        maanyanModal.addEventListener('click', (e) => {
            if (e.target === maanyanModal) {
                maanyanModal.classList.remove('active');
            }
        });
    }
    
    // Ma'anyan translation form
    const maanyanForm = document.getElementById('maanyanForm');
    if (maanyanForm) {
        maanyanForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('maanyanInput').value;
            const direction = document.getElementById('maanyanDirection').value;
            const output = translate(input, direction);
            document.getElementById('maanyanOutput').value = output;
        });
    }
    
    // Ngaju translation modal
    const ngajuModal = document.getElementById('ngajuModal');
    const ngajuModalClose = document.getElementById('closeNgajuModal');
    const ngajuTranslateBtn = document.getElementById('translateBtn4');
    
    if (ngajuTranslateBtn && ngajuModal) {
        ngajuTranslateBtn.addEventListener('click', () => {
            ngajuModal.classList.add('active');
        });
    }
    
    if (ngajuModalClose && ngajuModal) {
        ngajuModalClose.addEventListener('click', () => {
            ngajuModal.classList.remove('active');
        });
        
        ngajuModal.addEventListener('click', (e) => {
            if (e.target === ngajuModal) {
                ngajuModal.classList.remove('active');
            }
        });
    }
    
    // Ngaju translation form
    const ngajuForm = document.getElementById('ngajuForm');
    if (ngajuForm) {
        ngajuForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('ngajuInput').value;
            const direction = document.getElementById('ngajuDirection').value;
            const output = translate(input, direction);
            document.getElementById('ngajuOutput').value = output;
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);