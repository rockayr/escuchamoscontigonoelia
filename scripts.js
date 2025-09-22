// ==================================================
// ============ FUNCIONES ORIGINALES ================
// ==================================================

// Countdown Timer Original
function updateCountdown() {
    const targetDate = new Date('September 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const heroDays = document.getElementById('heroDays');
    const heroHours = document.getElementById('heroHours');
    const heroMinutes = document.getElementById('heroMinutes');
    const heroSeconds = document.getElementById('heroSeconds');

    if (heroDays) heroDays.textContent = days;
    if (heroHours) heroHours.textContent = hours;
    if (heroMinutes) heroMinutes.textContent = minutes;
    if (heroSeconds) heroSeconds.textContent = seconds;

    if (distance < 0) {
        if (heroDays) heroDays.textContent = '0';
        if (heroHours) heroHours.textContent = '0';
        if (heroMinutes) heroMinutes.textContent = '0';
        if (heroSeconds) heroSeconds.textContent = '0';
    }
}

// Header scroll behavior
function handleScroll() {
    const header = document.getElementById('mainHeader');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
}

// Mobile menu functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggleBtn = document.querySelector('.mobile-menu-toggle i');
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
        toggleBtn.className = 'fas fa-times';
    } else {
        toggleBtn.className = 'fas fa-bars';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const toggleBtn = document.querySelector('.mobile-menu-toggle i');
    mobileMenu.classList.remove('active');
    toggleBtn.className = 'fas fa-bars';
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Add fade-in animation on scroll
function setupScrollAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    document.querySelectorAll('.timeline-item, .help-card').forEach(el => {
        observer.observe(el);
    });
}

// Progress bar animation
function setupProgressBarAnimation() {
    const progressSection = document.querySelector('.progress-section');
    if (!progressSection) return;
    const progressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = document.querySelector('.progress-fill');
                if(progressFill) {
                    progressFill.style.width = '15%';
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    progressObserver.observe(progressSection);
}

// Donation Modal Functionality
let userCountry = null;
async function detectUserCountry() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('Response not OK');
        const data = await response.json();
        userCountry = data.country_code || 'BO';
    } catch (error) {
        console.log('Could not detect location, defaulting to Bolivia');
        userCountry = 'BO';
    }
    return userCountry;
}

async function openDonationModal() {
    const modal = document.getElementById('donationModal');
    const content = document.getElementById('donationContent');
    if (!userCountry) {
        await detectUserCountry();
    }
    if (userCountry === 'BO') {
        content.innerHTML = `
            <div class="bolivia-header"><h3>💳 Donaciones en Bolivia</h3></div>
            <img src="cdn/qr.png" alt="Código QR para donaciones" class="qr-code">
            <div class="share-section">
                <p style="text-align: center; margin-bottom: 1rem; color: #666; font-weight: 600;"><i class="fas fa-share-alt"></i> Compartir QR</p>
                <div class="share-buttons">
                    <button class="share-btn" onclick="downloadQR()"><i class="fas fa-download"></i> Descargar QR</button>
                    <button class="share-btn secondary" onclick="shareQR()"><i class="fas fa-share"></i> Compartir</button>
                </div>
            </div>
            <p style="color: #666; font-size: 0.9rem; margin-top: 1.5rem; text-align: center;">
                <strong>Otras opciones:</strong> Transferencia o depósito.<br>
                <a href="https://wa.me/59170844466?text=Hola%20Ayrton,%20necesito%20informaci%C3%B3n%20sobre%20otras%20formas%20de%20donar%20para%20Noelia" style="color: #ff6b35; text-decoration: none;">Contáctame y hablamos</a>
            </p>
        `;
    } else {
        content.innerHTML = `
            <div class="coming-soon">
                <h3>🌍 Donaciones Internacionales</h3>
                <p><strong>¡Opción disponible muy pronto!</strong></p>
                <p>Estamos trabajando para habilitar donaciones internacionales. Si deseas ayudar ahora, por favor contacta directamente a Ayrton para coordinar.</p>
            </div>
        `;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
    if (!document.querySelector('.modal-overlay.active')) {
        document.body.style.overflow = '';
    }
}

function openAngelModal() { document.getElementById('angelModal').classList.add('active'); document.body.style.overflow = 'hidden'; }
function openShareModal() { document.getElementById('shareModal').classList.add('active'); document.body.style.overflow = 'hidden'; }

// Download/Share functions
function downloadShareImage() {
    const link = document.createElement('a');
    link.href = 'cdn/share.jpg';
    link.download = 'compartir-campana-noelia.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function shareImage() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Ayuda a Noelia - Campaña de Implante Coclear',
                text: 'Conoce la historia de Noelia y cómo puedes ayudarla a recuperar su audición',
                url: window.location.href
            });
        } catch (error) {
            console.log('Error sharing:', error);
        }
    }
}

function downloadQR() {
    const qrImage = document.querySelector('#donationContent .qr-code');
    if (qrImage) {
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = 'QR_Donacion_Noelia.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('El código QR no está disponible para descargar.');
    }
}

// ==================================================
// ============ LÓGICA DE LA GRAN RIFA ============== 
// ==================================================

function openRaffleModal() {
    const modal = document.getElementById('raffleModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeRaffleModal() {
    const modal = document.getElementById('raffleModal');
    if (modal) {
        modal.classList.remove('active');
    }
    if (!document.querySelector('.modal-overlay.active')) {
        document.body.style.overflow = '';
    }
}

function updateRaffleCountdown() {
    const targetDate = new Date('November 22, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const rifaDays = document.getElementById('rifaDays');
    const rifaHours = document.getElementById('rifaHours');
    const rifaMinutes = document.getElementById('rifaMinutes');
    const rifaSeconds = document.getElementById('rifaSeconds');
    if (rifaDays) rifaDays.textContent = days;
    if (rifaHours) rifaHours.textContent = hours;
    if (rifaMinutes) rifaMinutes.textContent = minutes;
    if (rifaSeconds) rifaSeconds.textContent = seconds;
    if (distance < 0) {
        if (rifaDays) rifaDays.textContent = '0';
        if (rifaHours) rifaHours.textContent = '0';
        if (rifaMinutes) rifaMinutes.textContent = '0';
        if (rifaSeconds) rifaSeconds.textContent = '0';
    }
}

function updateRaffleProgress() {
    const ticketsVendidos = 50;
    const totalTickets = 2109;
    const progressBar = document.getElementById('rifaProgressBar');
    if (progressBar) {
        const percentage = (ticketsVendidos / totalTickets) * 100;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                progressBar.style.width = percentage + '%';
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        const rifaSection = document.getElementById('rifa');
        if (rifaSection) {
            observer.observe(rifaSection);
        }
    }
}

// ==================================================
// ============ QR LIGHTBOX LOGIC ===================
// ==================================================
function initializeQrLightbox() {
    const lightbox = document.getElementById('qrLightbox');
    if (!lightbox) return;

    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxDownload = document.getElementById('lightboxDownload');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    const openLightbox = (imgSrc) => {
        lightboxImg.src = imgSrc;
        lightboxDownload.href = imgSrc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Use event delegation on the body to handle clicks on current and future .qr-code images
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('qr-code')) {
            openLightbox(event.target.src);
        }
    });

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
}

// ==================================================
// ============ STICKY RAFFLE BANNER LOGIC ==========
// ==================================================
function handleStickyBannerVisibility() {
    const banner = document.getElementById('sticky-raffle-banner');
    const progresoSection = document.getElementById('progreso');

    if (!banner || !progresoSection) {
        return; // Exit if elements are not found
    }

    const scrollHandler = () => {
        const scrollPosition = window.scrollY;
        const progresoTop = progresoSection.offsetTop;

        // Show the banner from the top of the page until the user scrolls past the 'progreso' section.
        if (scrollPosition < progresoTop) {
            banner.classList.add('visible');
        } else {
            banner.classList.remove('visible');
        }
    };

    // Make the banner visible on initial load with a slight delay for the animation to be noticeable.
    setTimeout(() => {
        scrollHandler();
    }, 100); // A very short delay

    window.addEventListener('scroll', scrollHandler, { passive: true });
}

// ==================================================
// ============ INICIALIZACIÓN GENERAL ==============
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica Original ---
    updateCountdown();
    setInterval(updateCountdown, 1000);
    setupSmoothScrolling();
    setupScrollAnimations();
    setupProgressBarAnimation();
    detectUserCountry();

    // --- Lógica de la Rifa ---
    updateRaffleProgress();
    updateRaffleCountdown();
    setInterval(updateRaffleCountdown, 1000);

    // --- Lógica del Banner Fijo ---
    handleStickyBannerVisibility();

    // --- Manejo de Modales ---
    // Listener para botones que abren modales (excepto el de la rifa, que tiene su propio onclick)
    document.querySelectorAll('[onclick^="open"]').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr !== 'openRaffleModal()') {
            btn.addEventListener('click', () => {
                const modalName = onclickAttr.replace('open','').replace('Modal()','').toLowerCase();
                const modal = document.getElementById(modalName + 'Modal');
                if(modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        }
    });

    // Listeners para cerrar todos los modales
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                if (this.id === 'raffleModal') {
                    closeRaffleModal();
                } else {
                    closeModal(this.id);
                }
            }
        });
        const closeBtn = modal.querySelector('.modal-close');
        if(closeBtn) {
            const closeFn = modal.id === 'raffleModal' ? closeRaffleModal : () => closeModal(modal.id);
            closeBtn.addEventListener('click', closeFn);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(modal => {
                if (modal.id === 'raffleModal') {
                    closeRaffleModal();
                } else {
                    closeModal(modal.id);
                }
            });
        }
    });

    // --- Inicialización de Librerías ---
    // Swiper (si existe el elemento)
    if (document.querySelector('.swiper')) {
        const swiper = new Swiper('.swiper', {
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    }

    // GLightbox
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: false,
    });

    // --- Inicialización del Lightbox para QR ---
    initializeQrLightbox();
});
