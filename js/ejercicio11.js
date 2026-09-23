document.addEventListener('DOMContentLoaded', function () {

    const inputKilometros = document.getElementById('kilometros');
    const inputMillas = document.getElementById('millas');
    const btnConvertir = document.getElementById('btnConvertir');
    const mensajeError = document.getElementById('mensajeError');

    function convertirDistancia() {
        mensajeError.textContent = '';

        const valorKilometros = inputKilometros.value.trim();

        if (valorKilometros === '') {
            mensajeError.textContent = 'Por favor, ingresa un valor en kilometros';
            inputMillas.value = '';
            return;
        }

        if (isNaN(valorKilometros)) {
            mensajeError.textContent = 'El valor ingresado no es un número válido.';
            inputMillas.value = '';
            return;
        }

        const kilometros = parseFloat(valorKilometros);
        const millas = kilometros * 0.621371;
        inputMillas.value = millas.toFixed(2) + ' millas';
    }

    btnConvertir.addEventListener('click', convertirDistancia);


});