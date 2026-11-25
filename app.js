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
        return;
    }

    const valor1 = Number(numero1.value);
    const valor2 = Number(numero2.value);

    const operacionSeleccionada = operacion.value;

    if (!Number.isFinite(valor1) || !Number.isFinite(valor2)) {
        mensajeError.textContent = "Introduce números válidos";
        return;
    }

});
