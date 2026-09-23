const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const operaciones = {
    sumar: sumar,
    restar: restar,
    multiplicar: multiplicar,
    dividir: dividir
};

document.addEventListener('DOMContentLoaded', function () {

    const inputNumero1 = document.getElementById('numero1');
    const inputNumero2 = document.getElementById('numero2');
    const inputResultado = document.getElementById('resultado');

    window.calcularOperacion = function (tipoOperacion) {
        const valor1 = inputNumero1.value.trim();
        const valor2 = inputNumero2.value.trim();

        if (valor1 === '' || valor2 === '') {
            Swal.fire({
                icon: 'error',
                title: 'Campos vacíos',
                text: 'Por favor, ingresa ambos números.'
            });
            inputResultado.value = '';
            return;
        }

        const num1 = parseFloat(valor1);
        const num2 = parseFloat(valor2);

        if (isNaN(num1) || isNaN(num2)) {
            Swal.fire({
                icon: 'error',
                title: 'Valores inválidos',
                text: 'Los valores ingresados no son números válidos.'
            });
            inputResultado.value = '';
            return;
        }

        const resultado = operaciones[tipoOperacion](num1, num2);

        if (resultado === 'Error: División por cero') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede dividir entre cero.'
            });
            inputResultado.value = '';
            return;
        }

        inputResultado.value = resultado.toFixed(2);
    };

});