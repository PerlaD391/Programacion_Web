document.addEventListener('DOMContentLoaded', function () {

    const inputEdad = document.getElementById('edad');
    const inputResultado = document.getElementById('resultado');
    const btnVerificar = document.getElementById('btnVerificar');
    const mensajeError = document.getElementById('mensajeError');

    function verificarVotacion() {
        mensajeError.textContent = '';

        const valorEdad = inputEdad.value.trim();

        if (valorEdad === '') {
            mensajeError.textContent = 'Por favor, ingresa tu edad.';
            inputResultado.value = '';
            return;
        }

        if (isNaN(valorEdad) || Number(valorEdad) < 0) {
            mensajeError.textContent = 'El valor ingresado no es una edad válida.';
            inputResultado.value = '';
            return;
        }

        const edad = parseInt(valorEdad);

        if (edad >= 18) {
            inputResultado.value = 'Puedes votar';
        } else {
            inputResultado.value = 'No puedes votar';
        }
    }

    btnVerificar.addEventListener('click', verificarVotacion);

});