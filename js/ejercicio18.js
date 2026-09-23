document.addEventListener('DOMContentLoaded', function () {

    const inputElemento = document.getElementById('nuevoElemento');
    const btnAgregar = document.getElementById('btnAgregar');
    const lista = document.getElementById('lista');
    const mensajeError = document.getElementById('mensajeError');
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
    });

    function agregarElemento() {
        mensajeError.textContent = '';

        const texto = inputElemento.value.trim();

        if (texto === '') {
            mensajeError.textContent = 'Escribe algo para agregar a la lista.';
            inputElemento.focus();
            return;
        }

        const li = document.createElement('li');
        li.classList.add('item-lista');  

        const span = document.createElement('span');
        span.textContent = texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.type = 'button';  
        botonEliminar.classList.add('boton-eliminar');
        botonEliminar.textContent = 'Eliminar';

        botonEliminar.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(botonEliminar);

        lista.appendChild(li);

        inputElemento.value = '';
        inputElemento.focus();
    }

    btnAgregar.addEventListener('click', agregarElemento);

    inputElemento.addEventListener('keypress', function (evento) {
        if (evento.key === 'Enter') {
            evento.preventDefault();
            agregarElemento();
        }
    });

});