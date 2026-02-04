// Base de datos de servicios (simulada)
const servicios = {
    1: { id: 1, nombre: "Preparación de Terreno", descripcion: "Arado, rastreado y nivelación de terrenos" },
    2: { id: 2, nombre: "Siembra y Plantación", descripcion: "Servicios de siembra mecanizada y manual" },
    3: { id: 3, nombre: "Sistemas de Riego", descripcion: "Instalación y mantenimiento de sistemas de riego" },
    4: { id: 4, nombre: "Fertilización y Abono", descripcion: "Aplicación de fertilizantes y enmiendas" },
    5: { id: 5, nombre: "Cosecha Mecanizada", descripcion: "Servicios de cosecha con maquinaria especializada" },
    6: { id: 6, nombre: "Control de Plagas", descripcion: "Fumigación y control integrado de plagas" }
};

// Variables globales
let cotizacion = [];
let modalAbierto = false;

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
    modalAbierto = true;
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'none';
    modalAbierto = false;
    document.body.style.overflow = 'auto';
}

// Proceder a WhatsApp
function proceedToWhatsApp() {
    const mensaje = prepararMensajeWhatsApp();
    const telefonoEmpresa = '+573161297288'; // Reemplazar con número real
    const urlWhatsApp = `https://wa.me/${telefonoEmpresa}?text=${mensaje}`;

    // Limpiar cotización después de enviar
    cotizacion = [];
    localStorage.removeItem('agroCotizacion');
    actualizarCotizacion();

    // Cerrar modal y abrir WhatsApp
    closeModal();
    window.open(urlWhatsApp, '_blank');

    // Mostrar confirmación
    setTimeout(() => {
        mostrarNotificacion('¡Cotización enviada con éxito!', 'success');
    }, 1000);
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

// Cerrar modal con ESC
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modalAbierto) {
        closeModal();
    }
});

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