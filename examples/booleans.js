// Ejemplos de booleanos

// Declaración de variables booleanas
const esVerdadero = true;
const esFalso = false;

console.log(esVerdadero); // true
console.log(esFalso); // false

// Operadores de comparación que devuelven booleanos
const numero1 = 10;
const numero2 = 5;

const mayorQue = numero1 > numero2; // true
const igual = numero1 === numero2; // false

console.log(mayorQue);
console.log(igual);

// Operadores lógicos que devuelven booleanos
const andLogico = esVerdadero && esFalso; // false
const orLogico = esVerdadero || esFalso; // true
const notLogico = !esVerdadero; // false

console.log(andLogico);
console.log(orLogico);
console.log(notLogico);

// Conversión de otros tipos de datos a booleanos
const numero = 42;
const cadena = 'Hola';
const arreglo = [];
const objeto = {};

const booleanoDesdeNumero = Boolean(numero); // true (cualquier número distinto de 0 es verdadero)
const booleanoDesdeCadena = Boolean(cadena); // true (cualquier cadena no vacía es verdadera)
const booleanoDesdeArreglo = Boolean(arreglo); // true (cualquier arreglo no vacío es verdadero)
const booleanoDesdeObjeto = Boolean(objeto); // true (cualquier objeto no vacío es verdadero)

console.log(booleanoDesdeNumero);
console.log(booleanoDesdeCadena);
console.log(booleanoDesdeArreglo);
console.log(booleanoDesdeObjeto);

// Ejemplo avanzado con el operador ternario:

const autenticado = true;

console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');
