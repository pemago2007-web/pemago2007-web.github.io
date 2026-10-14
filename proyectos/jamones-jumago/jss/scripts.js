// Esperamos a que el formulario exista en el DOM
var formulario = document.getElementById("formulario-contacto");
var mensajeFeedback = document.getElementById("mensaje-feedback");

// Escuchamos el evento de envío (submit)
formulario.addEventListener("submit", function(elemento) {
    // 1. Detenemos el envío automático por defecto
    elemento.preventDefault();

    // 2. Capturamos los elementos para comprobar su validez nativa
    var campoNombre = document.getElementById("nombre");
    var campoCorreo = document.getElementById("correo");
    var campoMensaje = document.getElementById("mensaje");

    // 3. Validación basada en las propiedades nativas explicadas en clase (.checkValidity())
    if (campoNombre.checkValidity() && campoCorreo.checkValidity() && campoMensaje.checkValidity()) {
        
        // Si todo es correcto, inyectamos texto de éxito y asignamos clase adecuada
        mensajeFeedback.textContent = "¡Muchas gracias! Tu solicitud para Jamones Jumago Vialia ha sido procesada. Nos pondremos en contacto contigo pronto.";
        mensajeFeedback.className = "mensaje-oculto exito";
        
        // Limpiamos los campos del formulario de forma sencilla
        formulario.reset();

    } else {
        // Si el navegador detecta que falta algo o el correo no tiene formato correcto
        mensajeFeedback.textContent = "Por favor, rellena todos los campos correctamente antes de enviar.";
        mensajeFeedback.className = "mensaje-oculto error";
    }
});

// ... (Aquí se mantiene intacto el código anterior de validación del formulario)


// --- LÓGICA DE INTERACTIVIDAD DE LA CABECERA ---

// 1. Control del menú hamburguesa (Desplegar el 'ul' hacia abajo)
var btnMenu = document.getElementById("btn-menu");
var listaMenu = document.getElementById("lista-menu");

btnMenu.addEventListener("click", function() {
    // Si la clase "mostrar-menu" existe la quita, si no, la añade
    listaMenu.classList.toggle("mostrar-menu");
});


// 2. Control de la cesta lateral (Deslizar desde la derecha)
var btnCesta = document.getElementById("btn-cesta");
var carritoLateral = document.getElementById("carrito-lateral");

btnCesta.addEventListener("click", function() {
    // Alterna la clase para cambiar el valor de 'right' de -320px a 0
    carritoLateral.classList.toggle("mostrar-carrito");
});