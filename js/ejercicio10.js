document.addEventListener('DOMContentLoaded', function () {

    const inputCelsius = document.getElementById('celsius');
    const inputFahrenheit = document.getElementById('fahrenheit');
    const btnConvertir = document.getElementById('btnConvertir');
    const mensajeError = document.getElementById('mensajeError');

    function convertirTemperatura() {
        mensajeError.textContent = '';

        const valorCelsius = inputCelsius.value.trim();

        if (valorCelsius === '') {
            mensajeError.textContent = 'Por favor, ingresa un valor en grados Celsius.';
            inputFahrenheit.value = '';
            return;
        }

        if (isNaN(valorCelsius)) {
            mensajeError.textContent = 'El valor ingresado no es un número válido.';
            inputFahrenheit.value = '';
            return;
        }

        const celsius = parseFloat(valorCelsius);

        const fahrenheit = (celsius * 9 / 5) + 32;

        inputFahrenheit.value = fahrenheit.toFixed(2) + ' °F';
    }

    btnConvertir.addEventListener('click', convertirTemperatura);


});