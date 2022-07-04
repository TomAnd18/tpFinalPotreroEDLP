addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn');

    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            const menuOp = document.getElementById('menuOp');
            menuOp.classList.toggle('show');
        })
    }
})

