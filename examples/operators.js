// Ejemplos de operadores y typeof

// Operadores de comparación
const numero1 = 10;
const numero2 = 5;

// Menor que
console.log(numero1 < numero2); // false

// Mayor que
console.log(numero1 > numero2); // true

// Mayor o igual que
console.log(numero1 >= numero2); // true

// Menor o igual que
console.log(numero1 <= numero2); // false

// Igual (compara valor)
console.log(numero1 == numero2); // false

// Igual estricto (compara valor y tipo de dato)
console.log(numero1 === numero2); // false

// Diferente (compara valor)
console.log(numero1 != numero2); // true

// Diferente estricto (compara valor y tipo de dato)
console.log(numero1 !== numero2); // true

// typeof: Verificar el tipo de una variable
const cadena = 'Hola';
const numero = 42;
const booleano = true;
const arreglo = [1, 2, 3];
const objeto = { nombre: 'Juan' };
const nulo = null;
const noDefinido = undefined;

console.log(typeof cadena); // "string"
console.log(typeof numero); // "number"
console.log(typeof booleano); // "boolean"
console.log(typeof arreglo); // "object"
console.log(typeof objeto); // "object"
console.log(typeof nulo); // "object" (¡esto es una peculiaridad de JavaScript!)
console.log(typeof noDefinido); // "undefined"
