// Base de datos de servicios (simulada)
const servicios = {
    1: { id: 1, nombre: "Preparación de Terreno", descripcion: "Arado, rastreado y nivelación de terrenos" },
    2: { id: 2, nombre: "Siembra y Plantación", descripcion: "Servicios de siembra mecanizada y manual" },
    3: { id: 3, nombre: "Sistemas de Riego", descripcion: "Instalación y mantenimiento de sistemas de riego" },
    4: { id: 4, nombre: "Fertilización y Abono", descripcion: "Aplicación de fertilizantes y enmiendas" },
    5: { id: 5, nombre: "Cosecha Mecanizada", descripcion: "Servicios de cosecha con maquinaria especializada" },
    6: { id: 6, nombre: "Control de Plagas", descripcion: "Fumigación y control integrado de plagas" }
};

// Datos extendidos para el Modal de Detalles
const serviciosDetalles = {
    1: {
        tag: "Maquinaria",
        titulo: "Preparación de Terreno",
        descripcion: "Nuestro servicio de preparación de suelo utiliza maquinaria pesada equipada con GPS para garantizar una nivelación perfecta. Un terreno bien nivelado asegura que el agua de riego se distribuya uniformemente, evitando charcos y zonas secas.",
        caracteristicas: ["Arado profundo hasta 40cm", "Nivelación con GPS de precisión", "Descompactación de suelos", "Eliminación de maleza raíz"],
        media: [
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1594498308644-43285094f064?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
        ]
    },
    2: {
        tag: "Plantación",
        titulo: "Siembra y Plantación",
        descripcion: "Utilizamos sembradoras neumáticas de última generación que colocan la semilla a la profundidad exacta y a la distancia óptima entre plantas. Esto maximiza la tasa de germinación y el aprovechamiento de nutrientes de cada planta.",
        caracteristicas: ["Siembra de alta precisión", "Control de densidad de semillas", "Fertilización localizada en siembra", "Máxima eficiencia en germinación"],
        media: [
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1595053809633-ce2562be3627?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'video', url: 'https://www.w3schools.com/html/movie.mp4' }
        ]
    },
    3: {
        tag: "Instalación",
        titulo: "Sistemas de Riego",
        descripcion: "Diseñamos e instalamos sistemas de riego inteligente por goteo o aspersión. Nuestros sistemas incluyen sensores de humedad en tierra que activan el riego solo cuando es necesario, reduciendo el consumo de agua hasta en un 40%.",
        caracteristicas: ["Riego automatizado", "Sensores de humedad IoT", "Diseño hidráulico eficiente", "Mantenimiento preventivo anual"],
        media: [
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1463123081488-729f3aaba306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
        ]
    },
    4: {
        tag: "Suelos",
        titulo: "Fertilización y Abono",
        descripcion: "No adivinamos qué nutrientes le faltan a su tierra. Realizamos análisis previos y aplicamos mezclas personalizadas de abono orgánico y mineral utilizando tecnología de tasa variable para una nutrición perfecta.",
        caracteristicas: ["Análisis de suelo incluido", "Abono orgánico certificado", "Aplicación mecanizada", "Aumento de vigor foliar"],
        media: [
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1628352081506-83c43143ed6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1505235687559-28b5f54645b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'video', url: 'https://www.w3schools.com/html/movie.mp4' }
        ]
    },
    5: {
        tag: "Maquinaria",
        titulo: "Cosecha Tecnificada",
        descripcion: "Nuestro equipo de cosecha cuenta con cabezales suaves que minimizan el daño mecánico al fruto. La velocidad de trabajo permite recolectar grandes hectáreas en tiempo récord para mantener la frescura del producto.",
        caracteristicas: ["Velocidad de cosecha récord", "Cero pérdida por grano", "Transporte logístico incluido", "Operadores expertos"],
        media: [
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1530513511394-87779d7bc7d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1594488755677-83c92131ea5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1502472991706-0ad111b51832?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
        ]
    },
    6: {
        tag: "Fumigación",
        titulo: "Control de Plagas",
        descripcion: "Incorporamos drones de aspersión DJI Agras que pueden cubrir áreas de difícil acceso con precisión milimétrica. Esto reduce el uso de químicos hasta en un 30% y evita que el operario tenga contacto directo con los fitosanitarios.",
        caracteristicas: ["Fumigación con Drones", "Mapas de calor de plagas", "Bio-pesticidas selectivos", "Seguimiento satelital"],
        media: [
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1595053809633-ce2562be3627?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1589367948553-c98c886bf671?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'img', url: 'https://images.unsplash.com/photo-1628352081506-83c43143ed6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
            { tipo: 'video', url: 'https://www.w3schools.com/html/movie.mp4' }
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
    const telefonoEmpresa = '+573013471279'; // Reemplazar con número real
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