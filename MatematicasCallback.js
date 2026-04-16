//Operaciones Matemáticas con Callback:
//Crea una función que realice una operación matemática (suma, resta, multiplicación, división) utilizando dos números y un callback para mostrar el resultado.
function calcular(num1, num2, operacionCallback) {
    const resultado = operacionCallback(num1, num2);
    console.log(`El resultado de la operación es: ${resultado}`);
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => b !== 0 ? a / b : "Error: División por cero";

calcular(10, 5, suma);           // 15
calcular(20, 4, division);       // 5
calcular(7, 3, multiplicacion);  // 21

