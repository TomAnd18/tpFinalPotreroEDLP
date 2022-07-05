addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn');

    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            const menuOp = document.getElementById('menuOp');
            menuOp.classList.toggle('show');
        })
    }
})

function infoCreador() {
    alert('Pagina Web desarrollado por Tomas Regalado Manay');
}

function showGracias1() {
    const boton1 = document.getElementById('boton1');
    boton1.innerHTML = "¡ GRACIAS POR SU COMPRA !";
}

function showGracias2() {
    const boton2 = document.getElementById('boton2');
    boton2.innerHTML = "¡ GRACIAS POR SU COMPRA !";
}

function showGracias3() {
    const boton3 = document.getElementById('boton3');
    boton3.innerHTML = "¡ GRACIAS POR SU COMPRA !";
}