document.addEventListener('DOMContentLoaded', function () {

    const inputNombre = document.getElementById('nombre');
    const inputCalificacion = document.getElementById('calificacion');
    const btnAgregar = document.getElementById('btnAgregar');
    const btnCalcular = document.getElementById('btnCalcular');
    const listaEstudiantes = document.getElementById('listaEstudiantes');
    const inputPromedio = document.getElementById('promedio');
    const inputMasAlta = document.getElementById('masAlta');
    const inputMasBaja = document.getElementById('masBaja');
    const mensajeError = document.getElementById('mensajeError');

    let estudiantes = [];

    function agregarEstudiante() {
        mensajeError.textContent = '';

        const nombre = inputNombre.value.trim();
        const valorCalificacion = inputCalificacion.value.trim();

        if (nombre === '' || valorCalificacion === '') {
            mensajeError.textContent = 'Por favor, completa ambos campos.';
            return;
        }

        if (isNaN(valorCalificacion)) {
            mensajeError.textContent = 'La calificación debe ser un número válido.';
            return;
        }

        const calificacion = parseFloat(valorCalificacion);

        const estudiante = {
            nombre: nombre,
            calificacion: calificacion
        };

        estudiantes.push(estudiante);

        renderizarLista();

        inputNombre.value = '';
        inputCalificacion.value = '';
        inputNombre.focus();
    }

    function renderizarLista() {
        listaEstudiantes.innerHTML = '';

        estudiantes.forEach(function (estudiante) {
            const li = document.createElement('li');
            li.innerHTML = '<span>' + estudiante.nombre + '</span><strong>' + estudiante.calificacion + '</strong>';
            listaEstudiantes.appendChild(li);
        });
    }

    function calcularResultados() {
        mensajeError.textContent = '';

        if (estudiantes.length === 0) {
            mensajeError.textContent = 'Agrega al menos un estudiante antes de calcular.';
            return;
        }

        let suma = 0;
        estudiantes.forEach(function (estudiante) {
            suma += estudiante.calificacion;
        });

        const sumaReduce = estudiantes.reduce(function (acumulador, estudiante) {
            return acumulador + estudiante.calificacion;
        }, 0);
        const promedio = sumaReduce / estudiantes.length;

        const calificaciones = estudiantes.map(function (estudiante) {
            return estudiante.calificacion;
        });

        const calificacionMaxima = Math.max(...calificaciones);
        const calificacionMinima = Math.min(...calificaciones);

        const estudianteMaximo = estudiantes.find(function (estudiante) {
            return estudiante.calificacion === calificacionMaxima;
        });

        const estudianteMinimo = estudiantes.find(function (estudiante) {
            return estudiante.calificacion === calificacionMinima;
        });

        // Mostrar resultados
        inputPromedio.value = promedio.toFixed(2);
        inputMasAlta.value = estudianteMaximo.nombre + ' (' + calificacionMaxima + ')';
        inputMasBaja.value = estudianteMinimo.nombre + ' (' + calificacionMinima + ')';
    }

    btnAgregar.addEventListener('click', agregarEstudiante);
    btnCalcular.addEventListener('click', calcularResultados);

});