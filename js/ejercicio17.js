
const manejarTareas = (() => {
    
    const CLAVE = 'tareas_json';

    const obtenerTareas = () => {
        const tareasGuardadas = localStorage.getItem(CLAVE);
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    };

    const agregarTarea = (nuevaTarea) => {
        const tareas = obtenerTareas();
        tareas.push(nuevaTarea);
        localStorage.setItem(CLAVE, JSON.stringify(tareas));
    };

    const eliminarTarea = (indice) => {
        const tareas = obtenerTareas();
        tareas.splice(indice, 1);
        localStorage.setItem(CLAVE, JSON.stringify(tareas));
    };

    return {
        obtener: obtenerTareas,
        agregar: agregarTarea,
        eliminar: eliminarTarea
    };
})();

const renderizarTareas = () => {
    const lista = document.getElementById('listaTareas');
    
    if (!lista) return;

    lista.innerHTML = '';

    const tareas = manejarTareas.obtener();

    if (tareas.length === 0) {
        const li = document.createElement('li');
        li.className = 'lista-vacia';
        li.textContent = 'No hay tareas pendientes.';
        lista.appendChild(li);
        return;
    }

    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = tarea;

        const btnEliminar = document.createElement('button');
        btnEliminar.type = 'button';  // ✅ CLAVE: evita que envíe el formulario
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'boton-eliminar';
        
        btnEliminar.onclick = () => confirmarEliminacion(index, tarea);

        li.appendChild(span);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
};

const confirmarEliminacion = (indice, texto) => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'La tarea "' + texto + '" se eliminará permanentemente.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();
            Swal.fire({
                icon: 'success',
                title: '¡Eliminada!',
                text: 'Tu tarea ha sido borrada.',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {

    const btnAgregar = document.getElementById('btnAgregar');
    const inputTarea = document.getElementById('nuevaTarea');
    const mensajeError = document.getElementById('mensajeError');

    btnAgregar.addEventListener('click', () => {
        const textoTarea = inputTarea.value.trim();

        if (textoTarea === '') {
            mensajeError.textContent = 'Escribe una tarea antes de agregarla.';
            return;
        }

        mensajeError.textContent = '';
        manejarTareas.agregar(textoTarea);
        inputTarea.value = '';
        inputTarea.focus();
        renderizarTareas();
    });

    inputTarea.addEventListener('keypress', (evento) => {
        if (evento.key === 'Enter') {
            evento.preventDefault();
            btnAgregar.click();
        }
    });

    renderizarTareas();

});