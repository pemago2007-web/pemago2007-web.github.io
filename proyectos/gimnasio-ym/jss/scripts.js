
const botonMenu = document.getElementById('icono-menu');
const contenidoMenu = document.getElementById('contenidoMenu');

botonMenu.addEventListener("click", () => {
    contenidoMenu.classList.toggle("mostrar");
});


const lista = document.querySelectorAll('#contenidoMenu li');


lista.forEach(elemento => {
    elemento.addEventListener('click', function() {
        elemento.classList.toggle('marcado');               
    });
});

const boton = document.querySelectorAll('.subCont-2 button');

console.log(boton);

boton.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('cambiaColor');
        console.log(element);
    });
});

const carritoIcono = document.getElementById('icono-carrito');
const carrito = document.querySelector('.carrito');

carritoIcono.addEventListener('click', () => {
    carrito.classList.toggle('mostrar');
});

console.log(carritoIcono);

const botonesAñadir = document.querySelectorAll('.prods button');

botonesAñadir.forEach(function(boton) {
    boton.addEventListener('click', function() {
        alert('El producto ya está en la cesta. ');
    });
});
