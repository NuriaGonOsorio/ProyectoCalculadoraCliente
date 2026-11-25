"use strict";

/*Seleccionar elementos HTML que se usarán en el JavaScript*/
const formulario = document.getElementById("calculadora");

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");

const operacion = document.getElementById("operacion");

const botonLimpiar = document.getElementById("limpiar");

const mensajeError = document.getElementById("error");
const resultado = document.getElementById("resultado");

/*Controlar el envío del formulario para realizar el cálculo sin recargar la página*/
formulario.addEventListener("submit", (evento) => {
    /*Evitar que la página se recargue al enviar el formulario*/
    evento.preventDefault();

    /*Comprobar que los dos campos tengan valores*/
    if (numero1.value.trim() === "" || numero2.value.trim() === "") {
        mensajeError.textContent = "Introduce los dos números";
        resultado.textContent = "";
        return;
    }
    
    /*Convertir los valores introducidos a números*/
    const valor1 = Number(numero1.value);
    const valor2 = Number(numero2.value);

    /*Comprobar que los valores sean números válidos*/
    if (!Number.isFinite(valor1) || !Number.isFinite(valor2)) {
        mensajeError.textContent = "Introduce números válidos";
        resultado.textContent = "";
        return;
    }

    /*Obtener la operación seleccionada y crear la variable del resultado*/
    const operacionSeleccionada = operacion.value;
    let resultadoOperacion = 0;

    /*Realizar la operación seleccionada*/
    switch (operacionSeleccionada) {
        case "sumar":
            resultadoOperacion = valor1 + valor2;
            break;

        case "restar":
            resultadoOperacion = valor1 - valor2;
            break;

        case "multiplicar":
            resultadoOperacion = valor1 * valor2;
            break;

        case "dividir":
            /*Comprobar que el divisor no sea cero*/
            if (valor2 === 0) {
                mensajeError.textContent = "No se puede dividir entre cero";
                resultado.textContent = "";
                return;
            }
            resultadoOperacion = valor1 / valor2;
            break;

        case "potencia":
            resultadoOperacion = valor1 ** valor2;
            break;

        case "resto":
            /*Comprobar que el divisor no sea cero*/
            if (valor2 === 0) {
                mensajeError.textContent = "No se puede hacer el resto entre cero";
                resultado.textContent = "";
                return;
            }
            resultadoOperacion = valor1 % valor2;
            break;
            /*Rechazar cualquier operación que no esté contemplada*/
        default:
            mensajeError.textContent = "Operación no válida";
            resultado.textContent = "";
            return;    
    }

    /*Comprobar que el resultado sea un número finito*/
    if (!Number.isFinite(resultadoOperacion)) {
        mensajeError.textContent = "El resultado no es un número finito";
        resultado.textContent = "";
        return;
    }

    /*Mostrar el resultado y borrar cualquier mensaje de error*/
    mensajeError.textContent = "";
    resultado.textContent = "Resultado: " + resultadoOperacion;
});

/*Controlar el botón de limpiar para restablecer la calculadora*/
botonLimpiar.addEventListener("click", () => {
    numero1.value = "";
    numero2.value = "";
    operacion.value = "sumar";
    mensajeError.textContent = "";
    resultado.textContent = "";
});