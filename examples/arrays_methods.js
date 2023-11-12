// Array Methods y Spread Operator

// .some: Verifica si al menos un elemento cumple con la condición
const numeros = [1, 3, 5, 7, 9];
const hayNumeroPar = numeros.some(numero => numero % 2 === 0);
console.log('¿Hay al menos un número par?', hayNumeroPar);

// .findIndex: Encuentra el índice del primer elemento que cumple con la condición
const indiceNumeroCinco = numeros.findIndex(numero => numero === 5);
console.log('Índice del número 5:', indiceNumeroCinco);

// .reduce: Reduce el array a un solo valor aplicando una función acumuladora
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log('Suma de los números:', suma);

// .filter: Filtra los elementos que cumplen con la condición
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log('Números pares:', numerosPares);

// .find: Encuentra el primer elemento que cumple con la condición
const primerNumeroMayorASeis = numeros.find(numero => numero > 6);
console.log('Primer número mayor a 6:', primerNumeroMayorASeis);

// .every: Verifica si todos los elementos cumplen con la condición
const todosMayoresAUno = numeros.every(numero => numero > 1);
console.log('¿Todos los números son mayores a 1?', todosMayoresAUno);

// .concat: Combina dos o más arrays
const frutas = ['manzana', 'banana'];
const verduras = ['zanahoria', 'espinaca'];
const alimentos = frutas.concat(verduras);
console.log('Alimentos combinados:', alimentos);

// Spread Operator: Otra forma de combinar arrays
const postres = ['pastel', 'helado'];
const menu = [...alimentos, ...postres];
console.log('Menú combinado:', menu);
