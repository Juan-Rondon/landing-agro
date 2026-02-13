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

<<<<<<< HEAD

=======
// Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.mobile-overlay');

    console.log("Sistema de menú iniciado");

    if (mobileToggle && navLinks) {
        mobileToggle.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log("Click en toggle detectado");
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
        };
    }

    // Cerrar al hacer clic en un enlace
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.onclick = function() {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
        };
    });
});

// Mantener funciones globales solo si son necesarias por otros componentes (como el modal)
function toggleMobileMenu() { /* Ya manejado por listeners */ }
function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.mobile-overlay');
    navLinks?.classList.remove('active');
    mobileToggle?.classList.remove('active');
    document.body.classList.remove('menu-open');
    overlay?.classList.remove('active');
}
>>>>>>> origin/mejoras
// Datos extendidos para el Modal de Detalles
const serviciosDetalles = {
    1: {
        tag: "Preparación",
        titulo: "Preparación de Terrenos",
        descripcion: `Nuestro servicio de Preparación de Terrenos está enfocado en optimizar las condiciones físicas del 
            suelo antes del establecimiento del cultivo. Realizamos nivelación, descompactación y acondicionamiento estructural 
            para garantizar una base uniforme y estable. Además, evaluamos la composición del suelo y aplicamos técnicas para 
            mejorar la aireación y drenaje. Esto permite un crecimiento radicular más profundo, facilita el tránsito de maquinaria 
            y asegura un terreno productivo durante toda la temporada agrícola.`,
        caracteristicas: [
            'Análisis y evaluación técnica del suelo',
            'Corrección de desniveles y microrelieves',
            'Optimización de infiltración y drenaje',
            'Preparación para maquinaria pesada',
            'Suelo uniforme para siembra eficiente'
        ],
        media: [
            { tipo: "img", url: "images/service_1/imagen_1.jpg" },
            { tipo: "img", url: "images/service_1/imagen_2.jpg" },
            { tipo: "img", url: "images/service_1/imagen_3.jpg" },
            { tipo: "img", url: "images/service_1/imagen_4.jpg" }
        ]
    },

    2: {
        tag: "Preparación",
        titulo: "Encalle o Despaje",
        descripcion: `El servicio de Encalle o Despaje organiza los residuos vegetales y despeja calles técnicas en el terreno, 
            asegurando un paso seguro de maquinaria y facilitando la planificación de labores agrícolas. Además, permite mejorar la 
            aireación del suelo, prevenir acumulación de humedad y residuos, y optimizar la eficiencia operativa del lote, 
            contribuyendo a un manejo más sostenible y productivo.`,
        caracteristicas: [
            'Organización estratégica de residuos',
            'Prevención de acumulación de material orgánico',
            'Optimización del tránsito de maquinaria',
            'Facilitación de labores posteriores',
            'Mejora de condiciones sanitarias del terreno'
        ],
        media: [
            { tipo: "img", url: "images/service_2/imagen_1.jpg" },
            { tipo: "img", url: "images/service_2/imagen_2.jpg" },
            { tipo: "img", url: "images/service_2/imagen_3.jpg" },
            { tipo: "img", url: "images/service_2/imagen_4.jpg" }
        ]
    },

    3: {
        tag: "Preparación",
        titulo: "Roturación con Subsuelo",
        descripcion: `La Roturación con Subsuelo es una labranza profunda que permite romper capas compactadas del terreno que 
            limitan la absorción de agua y nutrientes. Utilizando maquinaria de alta potencia y técnicas especializadas, se mejora 
            la estructura interna del suelo sin afectar la superficie productiva. Esto incrementa la oxigenación, favorece el drenaje 
            y asegura un desarrollo radicular más eficiente para cultivos de alto rendimiento.`,
        caracteristicas: [
            'Fractura de capas compactadas profundas',
            'Mejora de oxigenación y drenaje',
            'Incremento de absorción de nutrientes',
            'Reducción de compactación natural',
            'Preparación para cultivos exigentes'
        ],
        media: [
            { tipo: "img", url: "images/service_3/imagen_1.jpg" },
            { tipo: "img", url: "images/service_3/imagen_2.jpg" },
            { tipo: "img", url: "images/service_3/imagen_3.jpg" },
            { tipo: "img", url: "images/service_3/imagen_4.jpg" }
        ]
    },

    4: {
        tag: "Preparación",
        titulo: "Roturación con Subsuelo Triple",
        descripcion: `La Roturación con Subsuelo Triple utiliza un implemento de tres brazos que amplía la cobertura y permite 
            una fractura más uniforme del terreno. Esta técnica reduce la compactación, mejora el drenaje y la oxigenación del suelo. 
            Gracias a su eficiencia, se disminuye el tiempo de trabajo y se garantiza que el terreno esté listo para el establecimiento 
            de cultivos con raíces profundas y uniformes.`,
        caracteristicas: [
            'Implemento de triple brazo para mayor cobertura',
            'Optimización de tiempo de trabajo',
            'Reducción de zonas compactadas',
            'Mejor drenaje y oxigenación',
            'Preparación uniforme del lote'
        ],
        media: [
            { tipo: "img", url: "images/service_4/imagen_1.jpg" },
            { tipo: "img", url: "images/service_4/imagen_2.jpg" },
            { tipo: "img", url: "images/service_4/imagen_3.jpg" },
            { tipo: "img", url: "images/service_4/imagen_4.jpg" }
        ]
    },

    5: {
        tag: "Preparación",
        titulo: "Roturación con Subesca",
        descripcion: `La Roturación con Subesca actúa en capas estratégicas del terreno para mejorar su estructura física y su 
            capacidad de retención de agua. Esta técnica optimiza la circulación de aire, aumenta la disponibilidad de nutrientes y 
            facilita la implantación uniforme de cultivos. Con ello, se logra un suelo más estable y fértil, listo para soportar un 
            crecimiento óptimo y constante de las plantas.`,
        caracteristicas: [
            'Intervención precisa en capas internas del suelo',
            'Mejora retención de humedad y aireación',
            'Aumenta disponibilidad de nutrientes',
            'Facilita implantación uniforme de cultivos',
            'Suelo más fértil y estable'
        ],
        media: [
            { tipo: "img", url: "images/service_5/imagen_1.jpg" },
            { tipo: "img", url: "images/service_5/imagen_2.jpg" },
            { tipo: "img", url: "images/service_5/imagen_3.jpg" },
            { tipo: "img", url: "images/service_5/imagen_4.jpg" }
        ]
    },

    6: {
        tag: "Suelos",
        titulo: "Escarificada",
        descripcion: `La Escarificada afina la superficie del terreno, rompe compactaciones superficiales y mejora la aireación. 
            Esto prepara el terreno para una siembra más precisa y homogénea, permitiendo un desarrollo inicial más fuerte de las 
            raíces y mejorando la absorción de nutrientes. Es una intervención clave para garantizar que el cultivo comience con las 
            mejores condiciones posibles.`,
        caracteristicas: [
            'Reducción de terrones grandes',
            'Mejora de estructura superficial',
            'Incremento de aireación y drenaje',
            'Preparación para siembra mecanizada',
            'Optimización de crecimiento inicial'
        ],
        media: [
            { tipo: "img", url: "images/service_6/imagen_1.jpg" },
            { tipo: "img", url: "images/service_6/imagen_2.jpg" },
            { tipo: "img", url: "images/service_6/imagen_3.jpg" },
            { tipo: "img", url: "images/service_6/imagen_4.jpg" }
        ]
    },

    7: {
        tag: "Manejo de Cultivo",
        titulo: "Cultivo aporque con pala",
        descripcion: `El Cultivo aporque con pala consiste en amontonar tierra alrededor de la base de la planta para favorecer 
            el desarrollo radicular, retener humedad y proteger la planta de plagas y estrés ambiental. Esto incrementa la absorción 
            de nutrientes y garantiza un crecimiento más uniforme y saludable del cultivo, optimizando la producción final.`,
        caracteristicas: [
            'Protección radicular contra estrés ambiental',
            'Mejora de retención de humedad',
            'Incremento en absorción de nutrientes',
            'Favorece desarrollo uniforme de plantas',
            'Optimización del rendimiento del cultivo'
        ],
        media: [
            { tipo: "img", url: "images/service_7/imagen_1.jpg" },
            { tipo: "img", url: "images/service_7/imagen_2.jpg" },
            { tipo: "img", url: "images/service_7/imagen_3.jpg" },
            { tipo: "img", url: "images/service_7/imagen_4.jpg" }
        ]
    },

    8: {
        tag: "Manejo de Cultivo",
        titulo: "Aporque para control de maleza",
        descripcion: `El Aporque para control de maleza es una técnica que permite eliminar la maleza alrededor de las plantas 
            mientras se airea el suelo y se mejora su estructura. Esto asegura un desarrollo radicular más eficiente, protege el 
            cultivo y facilita futuras labores agrícolas, incrementando la productividad y calidad del cultivo.`,
        caracteristicas: [
            'Eliminación de maleza sin dañar raíces',
            'Mejora aireación y drenaje',
            'Protección del cultivo',
            'Facilita labores posteriores',
            'Optimización del crecimiento de plantas'
        ],
        media: [
            { tipo: "img", url: "images/service_8/imagen_1.jpg" },
            { tipo: "img", url: "images/service_8/imagen_2.jpg" },
            { tipo: "img", url: "images/service_8/imagen_3.jpg" },
            { tipo: "img", url: "images/service_8/imagen_4.jpg" }
        ]
    },

    9: {
        tag: "Fertilización",
        titulo: "Abono con pala",
        descripcion: `El Abono con pala permite aplicar fertilizantes de manera manual asegurando una distribución homogénea y 
            controlada de nutrientes en el suelo. Esto mejora la fertilidad, potencia el desarrollo radicular y asegura un 
            crecimiento uniforme de las plantas, aumentando la productividad y calidad del cultivo.`,
        caracteristicas: [
            'Distribución homogénea de fertilizante',
            'Mejora de fertilidad del suelo',
            'Incremento de absorción de nutrientes',
            'Control de dosificación',
            'Optimización de crecimiento del cultivo'
        ],
        media: [
            { tipo: "img", url: "images/service_9/imagen_1.jpg" },
            { tipo: "img", url: "images/service_9/imagen_2.jpg" },
            { tipo: "img", url: "images/service_9/imagen_3.jpg" },
            { tipo: "img", url: "images/service_9/imagen_4.jpg" }
        ]
    },

    10: {
        tag: "Obras de Drenaje",
        titulo: "Reconstrucción de Acequías",
        descripcion: `Nuestro servicio de Reconstrucción de Acequías se centra en reparar, ampliar y mejorar canales de riego, 
            garantizando un flujo eficiente del agua en el terreno agrícola. Esto previene erosión, asegura una distribución uniforme 
            del recurso hídrico y facilita un mejor manejo del riego para todos los cultivos. También contribuye a prolongar la vida 
            útil de las acequías y mejorar la sostenibilidad del lote.`,
        caracteristicas: [
            'Reparación y mantenimiento de canales',
            'Optimización de flujo de agua',
            'Prevención de erosión y pérdidas',
            'Mejora de eficiencia hídrica',
            'Prolonga vida útil del sistema de riego'
        ],
        media: [
            { tipo: "img", url: "images/service_10/imagen_1.jpg" },
            { tipo: "img", url: "images/service_10/imagen_2.jpg" },
            { tipo: "img", url: "images/service_10/imagen_3.jpg" },
            { tipo: "img", url: "images/service_10/imagen_4.jpg" }
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
