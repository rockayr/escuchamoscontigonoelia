        // Countdown Timer
        function updateCountdown() {
            const targetDate = new Date('September 1, 2025 00:00:00').getTime();
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update hero countdown (full countdown)
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
            const scrollPosition = window.scrollY;
            
            if (scrollPosition > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
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

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileMenu = document.getElementById('mobileMenu');
            const toggleBtn = document.querySelector('.mobile-menu-toggle');
            
            if (!mobileMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
                closeMobileMenu();
            }
        });

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Update countdown every second
        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Story Carousel Functionality
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = slides.length;

        function showSlide(index) {
            const slidesContainer = document.getElementById('carouselSlides');
            const offset = -index * 100;
            slidesContainer.style.transform = `translateX(${offset}%)`;
            
            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentSlideIndex = index;
        }

        function nextSlide() {
            const nextIndex = (currentSlideIndex + 1) % totalSlides;
            showSlide(nextIndex);
        }

        function prevSlide() {
            const prevIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
            showSlide(prevIndex);
        }

        function currentSlide(index) {
            showSlide(index - 1);
        }

        // Auto-advance carousel every 5 seconds
        setInterval(nextSlide, 5000);

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

        // Add fade-in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.timeline-item, .help-card').forEach(el => {
            observer.observe(el);
        });

        // Progress bar animation
        function animateProgressBar() {
            const progressFill = document.querySelector('.progress-fill');
            const targetWidth = 5; // 5% progress
            let currentWidth = 0;
            
            const animation = setInterval(() => {
                if (currentWidth >= targetWidth) {
                    clearInterval(animation);
                } else {
                    currentWidth++;
                    progressFill.style.width = currentWidth + '%';
                }
            }, 50);
        }

        // Trigger progress animation when section is visible
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBar();
                    progressObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        progressObserver.observe(document.querySelector('.progress-section'));

        // Donation Modal Functionality
        let userCountry = null;

        // Function to detect user's country
        async function detectUserCountry() {
            try {
                // Try to get location from IP geolocation API
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                userCountry = data.country_code;
                return data.country_code;
            } catch (error) {
                console.log('Could not detect location, defaulting to Bolivia');
                userCountry = 'BO'; // Default to Bolivia
                return 'BO';
            }
        }

        // Function to open donation modal
        async function openDonationModal() {
            const modal = document.getElementById('donationModal');
            const content = document.getElementById('donationContent');
            
            // Detect user country if not already detected
            if (!userCountry) {
                await detectUserCountry();
            }
            
            // Generate content based on location
            if (userCountry === 'BO') {
                // Bolivia - Show QR code and local donation options
                content.innerHTML = `
                    <div class="bolivia-header">
                        <h3>💳 Donaciones en Bolivia</h3>
                    </div>
                    
                    <div class="qr-container">
                        <div class="qr-placeholder" id="qrCodeContainer">
                            <!-- QR Code will be shown here when qr.jpeg is available -->
                            <div style="text-align: center;">
                                <i class="fas fa-qrcode" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.7;"></i>
                                <br>
                                <small>Código QR para donaciones</small>
                            </div>
                        </div>
                    </div>
                    
                    <div class="share-section">
                        <p style="text-align: center; margin-bottom: 1rem; color: #666; font-weight: 600;">
                            <i class="fas fa-share-alt"></i> Compartir QR
                        </p>
                        <div class="share-buttons">
                            <button class="share-btn" onclick="downloadQR()">
                                <i class="fas fa-download"></i>
                                Descargar QR
                            </button>
                            <button class="share-btn secondary" onclick="shareQR()">
                                <i class="fas fa-share"></i>
                                Compartir
                            </button>
                        </div>
                        <p style="text-align: center; font-size: 0.85rem; color: #888; margin-top: 1rem;">
                            Ayuda a difundir la campaña compartiendo el QR con tus contactos
                        </p>
                    </div>
                    
                    <p style="color: #666; font-size: 0.9rem; margin-top: 1.5rem; text-align: center;">
                        <strong>Otras opciones de donación:</strong><br>
                        Transferencia bancaria • Depósito directo<br>
                        <a href="https://wa.me/59170844466?text=Hola%20Ayrton,%20necesito%20informaci%C3%B3n%20sobre%20otras%20formas%20de%20donar%20para%20Noelia" style="color: #ff6b35; text-decoration: none;">
                            Contáctame y hablamos
                        </a>
                    </p>
                `;
                
                // Try to load the QR code image if it exists
                const qrImage = new Image();
                qrImage.onload = function() {
                    const container = document.getElementById('qrCodeContainer');
                    container.innerHTML = `<img src="cdn/qr.jpeg" alt="Código QR para donaciones" class="qr-code">`;
                };
                qrImage.onerror = function() {
                    // Keep the placeholder if image doesn't exist
                };
                qrImage.src = 'cdn/qr.jpeg';
                
            } else {
                // International - Show coming soon message
                content.innerHTML = `
                    <div class="coming-soon">
                        <h3>🌍 Donaciones Internacionales</h3>
                        <p><strong>¡Opción disponible muy pronto!</strong></p>
                        <p>Estamos trabajando para habilitar donaciones internacionales a través de:</p>
                        <ul style="text-align: left; margin: 1rem 0;">
                            <li>💳 PayPal</li>
                            <li>💰 Western Union</li>
                            <li>🏦 Transferencias internacionales</li>
                            <li>🔗 Plataformas de crowdfunding</li>
                        </ul>
                        <p><strong>Mientras tanto:</strong></p>
                        <p>Si deseas ayudar ahora mismo, contacta directamente a Ayrton para coordinar una donación internacional.</p>
                    </div>
                `;
            }
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        // Function to close donation modal
        function closeDonationModal() {
            const modal = document.getElementById('donationModal');
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Angel Modal Functions
        function openAngelModal() {
            const modal = document.getElementById('angelModal');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeAngelModal() {
            const modal = document.getElementById('angelModal');
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Share Modal Functions
        function openShareModal() {
            const modal = document.getElementById('shareModal');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeShareModal() {
            const modal = document.getElementById('shareModal');
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Function to download the share image
        function downloadShareImage() {
            const link = document.createElement('a');
            link.href = 'cdn/share.jpg';
            link.download = 'compartir-campana-noelia.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Function to share the image (using Web Share API if available)
        async function shareImage() {
            if (navigator.share) {
                try {
                    // Try to use Web Share API for mobile devices
                    await navigator.share({
                        title: 'Ayuda a Noelia - Campaña de Implante Coclear',
                        text: 'Conoce la historia de Noelia y cómo puedes ayudarla a recuperar su audición',
                        url: window.location.href
                    });
                } catch (error) {
                    console.log('Error sharing:', error);
                    // Fallback to copying link
                    copyToClipboard();
                }
            } else {
                // Fallback for desktop browsers
                copyToClipboard();
            }
        }

        // Function to copy the campaign link to clipboard
        function copyToClipboard() {
            const campaignText = `Conoce la historia de Noelia y cómo puedes ayudarla: ${window.location.href}`;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(campaignText).then(() => {
                    alert('¡Enlace copiado al portapapeles! Ya puedes pegarlo donde quieras compartirlo.');
                }).catch(() => {
                    // Fallback for older browsers
                    fallbackCopyToClipboard(campaignText);
                });
            } else {
                // Fallback for older browsers
                fallbackCopyToClipboard(campaignText);
            }
        }

        // Fallback function for copying to clipboard
        function fallbackCopyToClipboard(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
                alert('¡Enlace copiado al portapapeles! Ya puedes pegarlo donde quieras compartirlo.');
            } catch (err) {
                alert('No se pudo copiar automáticamente. Por favor copia este enlace manualmente: ' + text);
            }
            
            document.body.removeChild(textArea);
        }

        // Close modal when clicking outside
        document.getElementById('donationModal').addEventListener('click', function(event) {
            if (event.target === this) {
                closeDonationModal();
            }
        });

        // Close angel modal when clicking outside
        document.getElementById('angelModal').addEventListener('click', function(event) {
            if (event.target === this) {
                closeAngelModal();
            }
        });

        // Close share modal when clicking outside
        document.getElementById('shareModal').addEventListener('click', function(event) {
            if (event.target === this) {
                closeShareModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeDonationModal();
                closeAngelModal();
                closeShareModal();
            }
        });

        // Pre-detect user country when page loads (non-blocking)
        detectUserCountry();

        // QR Share and Download Functions
        function downloadQR() {
            // Check if QR image exists
            const qrImage = document.querySelector('.qr-code');
            if (qrImage) {
                // Create a download link for the QR image
                const link = document.createElement('a');
                link.href = 'cdn/qr.jpeg';
                link.download = 'QR_Donacion_Noelia.jpeg';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                // If no QR image is available, show message
                alert('El código QR aún no está disponible. Por favor contacta a Ayrton para obtenerlo.');
            }
        }

        function shareQR() {
            // Check if Web Share API is supported (mainly mobile devices)
            if (navigator.share) {
                // For mobile devices with share capability
                navigator.share({
                    title: 'Donación para Noelia - Implantes Cocleares',
                    text: '¡Ayuda a Noelia a conseguir sus nuevos procesadores de implantes cocleares! Cada donación cuenta.',
                    url: window.location.href
                }).catch((error) => {
                    console.log('Error sharing:', error);
                    fallbackShare();
                });
            } else {
                // Fallback for desktop or browsers without Web Share API
                fallbackShare();
            }
        }

        function fallbackShare() {
            // Create a text to copy with campaign information
            const shareText = `🦻 ¡Ayuda a Noelia a escuchar mejor!

Noelia necesita nuevos procesadores para sus implantes cocleares. Después de 8+ años de uso, solo tiene 1 procesador funcional.

💰 Meta: USD 17,712 (dos procesadores de sonido)
📅 Primera meta: USD 8,856 antes del 1 de septiembre de 2025

Visita: ${window.location.href}

#EscuchamosContigoNoelia #ImplantesCocleares #Solidaridad`;

            // Try to copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(shareText).then(() => {
                    alert('✅ Información copiada al portapapeles. ¡Ahora puedes pegarla donde quieras compartir!');
                }).catch(() => {
                    showShareText(shareText);
                });
            } else {
                showShareText(shareText);
            }
        }

        function showShareText(text) {
            // Show the text in a modal for manual copying
            const shareModal = document.createElement('div');
            shareModal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                z-index: 3000;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            shareModal.innerHTML = `
                <div style="background: white; padding: 2rem; border-radius: 15px; max-width: 500px; width: 90%;">
                    <h3 style="color: #ff6b35; margin-bottom: 1rem;">📋 Copiar información para compartir</h3>
                    <textarea readonly style="width: 100%; height: 200px; padding: 1rem; border: 1px solid #ddd; border-radius: 8px; font-size: 0.9rem;">${text}</textarea>
                    <div style="text-align: center; margin-top: 1rem;">
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: #ff6b35; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; cursor: pointer;">
                            Cerrar
                        </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(shareModal);
            
            // Select the text in the textarea
            const textarea = shareModal.querySelector('textarea');
            textarea.select();
            textarea.setSelectionRange(0, 99999); // For mobile devices
        }
