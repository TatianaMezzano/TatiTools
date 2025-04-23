const modal = document.getElementById('modal');
const mostrar = document.getElementById('mostrarModal');
const hide = document.getElementById('hide');

//Muestra el <dialog> al hacer clic en el enlace
mostrar.addEventListener('click', (event) => {
event.preventDefault();
modal.showModal();  
});

//Cierra el <dialog> cuando se hace clic en el botón "Cerrar"
hide.addEventListener('click', () => {
    modal.close();
});