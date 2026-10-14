
const botonMenu = document.getElementById('icono-menu');
const contenidoMenu = document.getElementById('contenidoMenu');

botonMenu.addEventListener("click", () => {
    contenidoMenu.classList.toggle("mostrar");
});


const btnDest = document.getElementById('btnDest');
const actDest = document.getElementById('actDest');

btnDest.addEventListener('click', () => {
    actDest.classList.toggle('oculto');
    
    if (actDest.classList.contains('oculto')) {
        btnDest.textContent = "Ver actividades destacadas";
    } else {
        btnDest.textContent = "Ocultar actividades destacadas";
    }
});

const btnDestacar = document.getElementById('btn-destacar');
const acts = document.querySelectorAll('.acts');

btnDestacar.addEventListener('click', () => {
    acts.forEach(tarjeta => {
        tarjeta.classList.toggle('destacada');
    });
});