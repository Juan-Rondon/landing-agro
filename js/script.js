// Base de datos de servicios (simulada)
const servicios = {
    1: { id: 1, nombre: "Preparación de Terrenos con Maquinaria Pesada", descripcion: "Adecuación integral del terreno para todo tipo de cultivos utilizando maquinaria agrícola especializada de alto rendimiento." },
    2: { id: 2, nombre: "Encalle o Despaje", descripcion: "Organización y retiro técnico de residuos vegetales formando calles estratégicas para mejorar el manejo del cultivo." },
    3: { id: 3, nombre: "Roturación con Subsuelo", descripcion: "Descompactación profunda del suelo hasta 60 cm para mejorar aireación, drenaje y desarrollo radicular." },
    4: { id: 4, nombre: "Roturación con Subsuelo Triple", descripcion: "Labranza profunda con implemento de tres brazos que permite mayor cobertura y eficiencia por hectárea." },
    5: { id: 5, nombre: "Roturación con Subesca", descripcion: "Intervención mecánica que mejora la estructura del suelo y favorece la absorción de agua y nutrientes." },
    6: { id: 6, nombre: "Rastroarado del Terreno", descripcion: "Labranza profunda posterior a la subsolada que reduce terrones, mejora la estructura del suelo y optimiza la preparación para la siembra." },
    7: { id: 7, nombre: "Subsolado del Terreno", descripcion: "Descompactación profunda del suelo hasta 60 cm para mejorar la aireación, el drenaje y el desarrollo radicular del cultivo." },
    8: { id: 8, nombre: "Subsolado Técnico y Evaluado", descripcion: "Labor especializada con arado de subsuelo que incluye planificación de dirección, señalización del terreno y evaluación técnica de calidad." },
    9: { id: 9, nombre: "Roturación con Arado de Subsuelo", descripcion: "Labranza profunda que descompacta el suelo hasta 60 cm, mejorando la aireación y el desarrollo radicular del cultivo." },
    10: { id: 10, nombre: "Encalle o Despaje", descripcion: "Recolección y organización de residuos vegetales en calles definidas (2x1 o 4x1), facilitando las labores posteriores del cultivo y mejorando el orden del terreno." }
};


// Datos extendidos para el Modal de Detalles
const serviciosDetalles = {
    1: {
        tag: "Preparación",
        titulo: "Preparación de Terrenos con Maquinaria Pesada",
        descripcion: "Adecuación integral del terreno para todo tipo de cultivos utilizando maquinaria agrícola especializada de alto rendimiento.",
        caracteristicas: [
            "Uso de maquinaria pesada",
            "Nivelación y acondicionamiento",
            "Base óptima para siembra"
        ],
        media: [
            { tipo: "img", url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" }
        ]
    },

    2: {
        tag: "Preparación",
        titulo: "Encalle o Despaje",
        descripcion: "Organización y retiro técnico de residuos vegetales formando calles estratégicas para mejorar el manejo del cultivo.",
        caracteristicas: [
            "Formación de calles 2x1 o 4x1",
            "Uso de despajadora tipo Lelly",
            "Mejor movilidad en el lote"
        ],
        media: [
            { tipo: "img", url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80" }
        ]
    },

    3: {
        tag: "Preparación",
        titulo: "Roturación con Subsuelo",
        descripcion: "Descompactación profunda del suelo hasta 60 cm para mejorar aireación, drenaje y desarrollo radicular.",
        caracteristicas: [
            "Trabajo hasta 60 cm",
            "Mejora infiltración de agua",
            "Uso de tractor categoría 6"
        ],
        media: [
            { tipo: "img", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" }
        ]
    },

    4: {
        tag: "Preparación",
        titulo: "Roturación con Subsuelo Triple",
        descripcion: "Labranza profunda con implemento de tres brazos que permite mayor cobertura y eficiencia por hectárea.",
        caracteristicas: [
            "Implemento triple brazo",
            "Mayor cobertura de terreno",
            "Fractura uniforme del suelo"
        ],
        media: [
            { tipo: "img", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" }
        ]
    },

    5: {
        tag: "Preparación",
        titulo: "Roturación con Subesca",
        descripcion: "Intervención mecánica que mejora la estructura del suelo y favorece la absorción de agua y nutrientes.",
        caracteristicas: [
            "Mejora estructura del suelo",
            "Mayor infiltración de agua",
            "Preparación eficiente para siembra"
        ],
        media: [
            { tipo: "img", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" }
        ]
    },

    6: {
        tag: "Suelos",
        titulo: "Rastroarado del Terreno",
        descripcion: "Labranza profunda posterior a la subsolada que reduce terrones, mejora la estructura del suelo y optimiza la preparación para la siembra.",
        caracteristicas: [
            "Reducción de terrones grandes",
            "Profundidad de 30 a 40 cm",
            "Mejora contacto semilla-suelo",
            "Trabajo perpendicular a surcos (90°)"
        ],
        media: [
            { tipo: "img", url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" }
        ]
    },

    7: {
        tag: "Preparación de Suelos",
        titulo: "Subsolado del Terreno",
        descripcion: "Descompactación profunda del suelo hasta 60 cm para mejorar la aireación, el drenaje y el desarrollo radicular del cultivo.",
        caracteristicas: [
            "Roturación hasta 60 cm",
            "Mejora flujo de agua y aire",
            "Uso de arado de subsuelo",
            "Tractor categoría 6 (200-290 HP)"
        ],
        media: [
            { tipo: "img", url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80" }
        ]
    },

    8: {
        tag: "Suelos",
        titulo: "Subsolado Técnico y Evaluado",
        descripcion: "Labor especializada con arado de subsuelo que incluye planificación de dirección, señalización del terreno y evaluación técnica de calidad.",
        caracteristicas: [
            "Dirección alineada al surcado",
            "Señalización del terreno",
            "Evaluación técnica (FORCTN2)",
            "Control de calidad de preparación"
        ],
        media: [
            { tipo: "img", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" }
        ]
    },

    9: {
        tag: "Preparacion",
        titulo: "Roturación con Arado de Subsuelo",
        descripcion: "Labranza profunda que descompacta el suelo hasta 60 cm, mejorando la aireación y el desarrollo radicular del cultivo.",
        caracteristicas: [
            "Descompactación profunda del suelo",
            "Trabajo hasta 60 cm de profundidad",
            "Mejora drenaje y aireación",
            "Uso de tractor categoría 6 (200-290 HP)"
        ],
        media: [
            { tipo: "img", url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" }
        ]
    },

    10: {
        tag: "Preparación",
        titulo: "Encalle o Despaje",
        descripcion: "Recolección y organización de residuos vegetales en calles definidas (2x1 o 4x1), facilitando las labores posteriores del cultivo y mejorando el orden del terreno.",
        caracteristicas: [
            "Despajadora tipo Lelly",
            "Formación de calles 2x1 o 4x1"
        ],
        media: [
            { tipo: "img", url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80" }
        ]
    }

};

// Variables globales
let cotizacion = [];
let modalAbierto = false;
let currentSlide = 0;
let totalSlides = 0;

// Cargar cotización desde localStorage al iniciar
document.addEventListener('DOMContentLoaded', function () {
    const savedQuote = localStorage.getItem('agroCotizacion');
    if (savedQuote) {
        cotizacion = JSON.parse(savedQuote);
        actualizarCotizacion();
    }

    // Lógica para animaciones de revelado al hacer scroll
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Header dinámico (cambio al hacer scroll)
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Agregar servicio a la cotización
function addToQuote(serviceId) {
    const servicio = servicios[serviceId];

    // Verificar si ya está en la cotización
    if (!cotizacion.find(item => item.id === serviceId)) {
        cotizacion.push({
            id: serviceId,
            nombre: servicio.nombre,
            descripcion: servicio.descripcion,
            agregado: new Date().toLocaleString()
        });

        // Guardar en localStorage
        localStorage.setItem('agroCotizacion', JSON.stringify(cotizacion));

        // Actualizar vista
        actualizarCotizacion();

        // Feedback visual
        mostrarNotificacion(`"${servicio.nombre}" agregado a la cotización`);
    } else {
        mostrarNotificacion('Este servicio ya está en tu cotización', 'warning');
    }
}

// Remover servicio de la cotización
function removeFromQuote(serviceId) {
    cotizacion = cotizacion.filter(item => item.id !== serviceId);
    localStorage.setItem('agroCotizacion', JSON.stringify(cotizacion));
    actualizarCotizacion();
    mostrarNotificacion('Servicio removido de la cotización');
}

// Limpiar toda la cotización
function clearQuote() {
    if (cotizacion.length > 0) {
        if (confirm('¿Estás seguro de que quieres limpiar toda la cotización?')) {
            cotizacion = [];
            localStorage.removeItem('agroCotizacion');
            actualizarCotizacion();
            mostrarNotificacion('Cotización limpiada', 'info');
        }
    } else {
        mostrarNotificacion('No hay servicios para limpiar', 'info');
    }
}

// Actualizar la vista de la cotización
function actualizarCotizacion() {
    const quoteItems = document.getElementById('quote-items');
    const totalItems = document.getElementById('total-items');

    // Actualizar contador
    totalItems.textContent = cotizacion.length;

    // Actualizar lista
    if (cotizacion.length === 0) {
        quoteItems.innerHTML = '<p class="empty-quote">No hay servicios agregados. Selecciona servicios de la lista.</p>';
        return;
    }

    let html = '';
    cotizacion.forEach(item => {
        html += `
            <div class="quote-item">
                <div class="item-name">${item.nombre}</div>
                <button class="remove-item" onclick="removeFromQuote(${item.id})" title="Eliminar">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    });

    quoteItems.innerHTML = html;
}

// Validar formulario
function validarFormulario() {
    const form = document.getElementById('quoteForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    // Resetear estilos
    requiredFields.forEach(field => {
        field.style.borderColor = '#ddd';
    });

    // Validar campos requeridos
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ff4444';
            isValid = false;

            // Scroll al primer campo inválido
            if (isValid === false) {
                field.scrollIntoView({ behavior: 'smooth', block: 'center' });
                field.focus();
            }
        }
    });

    // Validar teléfono (formato básico)
    const phoneField = document.getElementById('phone');
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
    if (phoneField.value && !phoneRegex.test(phoneField.value)) {
        phoneField.style.borderColor = '#ff4444';
        mostrarNotificacion('Por favor, ingresa un número de teléfono válido', 'warning');
        isValid = false;
    }

    return isValid;
}

// Preparar mensaje para WhatsApp
function prepararMensajeWhatsApp() {
    const formData = {
        nombre: document.getElementById('name').value,
        telefono: document.getElementById('phone').value,
        email: document.getElementById('email').value || 'No proporcionado',
        ubicacion: document.getElementById('location').value,
        area: document.getElementById('area').value || 'No especificada',
        mensaje: document.getElementById('message').value || 'Sin mensaje adicional'
    };

    // Construir mensaje
    let mensaje = `*NUEVA COTIZACIÓN - AGROSERVICIOS*\n`;
    mensaje += `------------------------------------------\n\n`;
    mensaje += `*DATOS DEL CLIENTE:*\n`;
    mensaje += `- Nombre: ${formData.nombre}\n`;
    mensaje += `- Teléfono: ${formData.telefono}\n`;
    mensaje += `- Email: ${formData.email}\n`;
    mensaje += `- Ubicación: ${formData.ubicacion}\n`;
    mensaje += `- Área: ${formData.area} hectáreas\n\n`;

    mensaje += `*SERVICIOS SOLICITADOS:*\n`;
    if (cotizacion.length === 0) {
        mensaje += `Ningún servicio seleccionado\n`;
    } else {
        cotizacion.forEach((item, index) => {
            mensaje += `${index + 1}. ${item.nombre}\n`;
        });
    }

    mensaje += `\n*TOTAL SERVICIOS:* ${cotizacion.length}\n`;
    mensaje += `------------------------------------------\n\n`;

    mensaje += `*MENSAJE ADICIONAL:*\n${formData.mensaje}\n\n`;
    mensaje += `_Generado desde la página web de AgroServicios_`;

    return encodeURIComponent(mensaje);
}

// Mostrar modal de confirmación
function mostrarModal() {
    const modal = document.getElementById('confirmationModal');
    const modalMessage = document.getElementById('modalMessage');

    if (cotizacion.length === 0) {
        modalMessage.textContent = 'No has agregado ningún servicio a la cotización. ¿Deseas continuar?';
    } else {
        modalMessage.textContent = `Vas a enviar una cotización con ${cotizacion.length} servicio(s). Se abrirá WhatsApp para completar el envío.`;
    }

    modal.style.display = 'flex';

    // Pequeño delay para activar animación
    setTimeout(() => {
        modal.classList.add('modal-active');
    }, 10);

    modalAbierto = true;
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('confirmationModal');

    modal.classList.remove('modal-active');

    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);

    modalAbierto = false;
    document.body.style.overflow = 'auto';
}

// Lógica del Modal de Detalles del Servicio
function openServiceModal(serviceId) {
    const data = serviciosDetalles[serviceId];
    if (!data) return;

    const modal = document.getElementById('serviceDetailsModal');
    const slider = document.getElementById('serviceSlider');
    const dotsContainer = document.getElementById('sliderDots');

    // Cargar Info
    document.getElementById('detailTag').textContent = data.tag;
    document.getElementById('detailTitle').textContent = data.titulo;
    document.getElementById('detailDescription').textContent = data.descripcion;

    // Cargar Características
    const featuresList = document.getElementById('detailFeatures');
    featuresList.innerHTML = data.caracteristicas.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('');

    // Configurar Botón de Añadir
    const addBtn = document.getElementById('detailAddBtn');
    addBtn.onclick = () => {
        addToQuote(serviceId);
        closeServiceModal();
    };

    // Cargar Media (Slider)
    slider.innerHTML = '';
    dotsContainer.innerHTML = '';
    currentSlide = 0;
    totalSlides = data.media.length;

    data.media.forEach((item, index) => {
        // Crear Slide
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slider-item';

        if (item.tipo === 'img') {
            slideDiv.innerHTML = `<img src="${item.url}" alt="Servicio">`;
        } else {
            slideDiv.innerHTML = `<video src="${item.url}" controls muted></video>`;
        }
        slider.appendChild(slideDiv);

        // Crear Dot
        const dot = document.createElement('div');
        dot.className = index === 0 ? 'dot active' : 'dot';
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });

    updateSlider();

    modal.style.display = 'flex';
    modalAbierto = true;
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceDetailsModal');
    modal.style.display = 'none';
    modalAbierto = false;
    document.body.style.overflow = 'auto';
}

// Navegación del Slider
function moveSlider(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    const sliderTrack = document.getElementById('serviceSlider');
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Actualizar dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Proceder a WhatsApp
function proceedToWhatsApp() {
    const mensaje = prepararMensajeWhatsApp();
    const telefonoEmpresa = '573161297288'; // SIN + para wa.me
    const urlWhatsApp = `https://wa.me/${telefonoEmpresa}?text=${mensaje}`;

    // Animación antes de cerrar
    const confirmBtn = document.querySelector('#confirmationModal .btn-confirm');
    confirmBtn.innerHTML = '<i class="fas fa-check"></i> Abriendo...';
    confirmBtn.style.opacity = "0.8";
    confirmBtn.disabled = true;

    setTimeout(() => {

        // Limpiar cotización
        cotizacion = [];
        localStorage.removeItem('agroCotizacion');
        actualizarCotizacion();

        closeModal();

        window.open(urlWhatsApp, '_blank');

        setTimeout(() => {
            mostrarNotificacion('¡Cotización enviada con éxito!', 'success');
        }, 500);

    }, 800);
}

// Función principal para enviar cotización
function sendWhatsAppQuote() {
    if (!validarFormulario()) {
        mostrarNotificacion('Por favor, completa todos los campos obligatorios', 'warning');
        return;
    }

    mostrarModal();
}

// Mostrar notificación
function mostrarNotificacion(mensaje, tipo = 'success') {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion ${tipo}`;
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        min-width: 300px;
        max-width: 400px;
    `;

    // Estilos según tipo
    if (tipo === 'success') {
        notificacion.style.backgroundColor = '#4caf50';
    } else if (tipo === 'warning') {
        notificacion.style.backgroundColor = '#ff9800';
    } else if (tipo === 'info') {
        notificacion.style.backgroundColor = '#2196f3';
    }

    // Agregar al DOM
    document.body.appendChild(notificacion);

    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notificacion.parentNode) {
                notificacion.parentNode.removeChild(notificacion);
            }
        }, 300);
    }, 3000);

    // Agregar estilos de animación si no existen
    if (!document.querySelector('#notificacion-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notificacion-styles';
        styles.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(styles);
    }
}

// Cerrar modales con ESC o haciendo clic fuera
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modalAbierto) {
        closeModal();
        closeServiceModal();
    }
});

window.onclick = function (event) {
    const confModal = document.getElementById('confirmationModal');
    const servModal = document.getElementById('serviceDetailsModal');
    if (event.target == confModal) closeModal();
    if (event.target == servModal) closeServiceModal();
}

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Guardar datos del formulario localmente mientras se completa
document.querySelectorAll('#quoteForm input, #quoteForm textarea').forEach(element => {
    element.addEventListener('input', function () {
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            location: document.getElementById('location').value,
            area: document.getElementById('area').value,
            message: document.getElementById('message').value
        };
        localStorage.setItem('agroFormData', JSON.stringify(formData));
    });
});

// Cargar datos guardados del formulario
window.addEventListener('load', function () {
    const savedFormData = localStorage.getItem('agroFormData');
    if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        Object.keys(formData).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.value = formData[key];
            }
        });
    }
});