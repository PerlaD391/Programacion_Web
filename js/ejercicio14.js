document.addEventListener('DOMContentLoaded', function () {

    const inputNumeros = document.getElementById('numeros');
    const inputMayor = document.getElementById('mayor');
    const inputMenor = document.getElementById('menor');
    const inputPromedio = document.getElementById('promedio');
    const btnCalcular = document.getElementById('btnCalcular');
    const mensajeError = document.getElementById('mensajeError');

    function calcularEstadisticas() {
        mensajeError.textContent = '';

        const valorNumeros = inputNumeros.value.trim();

        if (valorNumeros === '') {
            mensajeError.textContent = 'Por favor, ingresa números separados por comas.';
            limpiarResultados();
            return;
        }

        const arreglo = valorNumeros.split(',').map(function (item) {
            return Number(item.trim());
        });

        if (arreglo.some(isNaN)) {
            mensajeError.textContent = 'Asegúrate de ingresar solo números separados por coma.';
            limpiarResultados();
            return;
        }

        const mayor = Math.max(...arreglo);
        const menor = Math.min(...arreglo);

        const suma = arreglo.reduce(function (acumulador, valor) {
            return acumulador + valor;
        }, 0);

        const promedio = suma / arreglo.length;

        inputMayor.value = mayor;
        inputMenor.value = menor;
        inputPromedio.value = promedio.toFixed(2);
    }

    function limpiarResultados() {
        inputMayor.value = '';
        inputMenor.value = '';
        inputPromedio.value = '';
    }

    btnCalcular.addEventListener('click', calcularEstadisticas);

});