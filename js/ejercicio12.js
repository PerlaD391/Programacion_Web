document.addEventListener('DOMContentLoaded', function () {

    const inputPesos = document.getElementById('pesos');
    const inputDolares = document.getElementById('dolares');
    const btnConvertir = document.getElementById('btnConvertir');
    const mensajeError = document.getElementById('mensajeError');

    function convertirCambio() {
        mensajeError.textContent = '';

        const valorPesos = inputPesos.value.trim();

        if (valorPesos === '') {
            mensajeError.textContent = 'Por favor, ingresa un valor en pesos MXN';
            inputDolares.value = '';
            return;
        }

        if (isNaN(valorPesos)) {
            mensajeError.textContent = 'El valor ingresado no es un número válido.';
            inputDolares.value = '';
            return;
        }

        const pesos = parseFloat(valorPesos);
        const dolares = pesos * 0.055;
        inputDolares.value = dolares.toFixed(2) + ' dolar';
    }

    btnConvertir.addEventListener('click', convertirCambio);


});