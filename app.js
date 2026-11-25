"use strict";

/*Seleccionar elementos del formulario*/
const formulario = document.getElementById("calculadora");

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");

const operacion = document.getElementById("operacion");

const botonLimpiar = document.getElementById("limpiar");

const mensajeError = document.getElementById("error");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (numero1.value.trim() === "" || numero2.value.trim() === "") {
        mensajeError.textContent = "Introduce los dos números";
        resultado.textContent = "";

        return;
    }

    const valor1 = Number(numero1.value);
    const valor2 = Number(numero2.value);

    if (!Number.isFinite(valor1) || !Number.isFinite(valor2)) {
        mensajeError.textContent = "Introduce números válidos";
        resultado.textContent = "";

        return;
    }

    const operacionSeleccionada = operacion.value;
    let resultadoOperacion = 0;

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
            if (valor2 === 0) {
                mensajeError.textContent = "No se puede hacer el resto entre cero";
                resultado.textContent = "";
                return;
            }
            resultadoOperacion = valor1 % valor2;
            break;
    }

        mensajeError.textContent = "";
        resultado.textContent = "Resultado: " + resultadoOperacion;
});
