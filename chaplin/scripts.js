// chaplin/scripts.js - Nueva funcionalidad para popup de QR

document.addEventListener('DOMContentLoaded', () => {
    // --- Referencias a elementos del DOM ---
    const showPopupButton = document.getElementById('show-qr-popup');
    const qrPopup = document.getElementById('qr-payment-popup');
    const closePopupButton = document.getElementById('close-popup');
    
    const decreaseTicketsButton = document.getElementById('decrease-tickets');
    const increaseTicketsButton = document.getElementById('increase-tickets');
    const ticketCountInput = document.getElementById('ticket-count');
    const totalPriceSpan = document.getElementById('total-price');
    
    const whatsappBtn = document.getElementById('whatsapp-receipt-btn');

    const TICKET_PRICE = 180;

    // --- Funciones ---

    /**
     * Calcula el precio total y actualiza la UI y el enlace de WhatsApp.
     */
    function updatePrice() {
        let ticketCount = parseInt(ticketCountInput.value);
        
        // Validar que el número no sea menor que 1
        if (isNaN(ticketCount) || ticketCount < 1) {
            ticketCount = 1;
            ticketCountInput.value = '1';
        }

        const total = ticketCount * TICKET_PRICE;
        totalPriceSpan.textContent = total;

        // Actualizar el enlace de WhatsApp con el mensaje predeterminado
        const baseMessage = `Hola Ayrton, acabo de comprar ${ticketCount} entrada(s) para el Show Cambalandia del jueves 22/01 por un total de ${total} Bs. Adjunto el comprobante.`;
        whatsappBtn.href = `https://wa.me/59170844466?text=${encodeURIComponent(baseMessage)}`;
    }

    /**
     * Muestra el popup de pago.
     */
    function showPopup() {
        if (qrPopup) {
            qrPopup.style.display = 'flex';
            updatePrice(); // Actualiza el precio al abrir el popup
        }
    }

    /**
     * Oculta el popup de pago.
     */
    function closePopup() {
        if (qrPopup) {
            qrPopup.style.display = 'none';
        }
    }

    // --- Asignación de Event Listeners ---

    // Abrir popup
    if (showPopupButton) {
        showPopupButton.addEventListener('click', showPopup);
    }

    // Cerrar popup
    if (closePopupButton) {
        closePopupButton.addEventListener('click', closePopup);
    }
     // Cerrar también al hacer clic en el overlay
    if (qrPopup) {
        qrPopup.addEventListener('click', (event) => {
            if (event.target === qrPopup) {
                closePopup();
            }
        });
    }

    // Controles de la calculadora
    if (decreaseTicketsButton) {
        decreaseTicketsButton.addEventListener('click', () => {
            let currentValue = parseInt(ticketCountInput.value);
            if (currentValue > 1) {
                ticketCountInput.value = currentValue - 1;
                updatePrice();
            }
        });
    }

    if (increaseTicketsButton) {
        increaseTicketsButton.addEventListener('click', () => {
            ticketCountInput.value = parseInt(ticketCountInput.value) + 1;
            updatePrice();
        });
    }
    
    // Actualizar precio si el usuario escribe directamente en el input
    if (ticketCountInput) {
        ticketCountInput.addEventListener('input', updatePrice);
    }
});