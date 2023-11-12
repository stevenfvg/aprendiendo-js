// Ejemplo de Iteradores

// For loop
console.log('For loop:');
for (let i = 1; i <= 5; i++) {
  console.log(i % 2 === 0 ? `${i} es PAR` : `${i} es IMPAR`);
}

// Ejemplo práctico del For Loop
// Ejercicio FizzBuzz - 100 Números
// 3, 6, 9, 12 ... fizz
// 5, 10, 15, 20 ... buzz
// 15, 30, 45 ... FIZZBUZZ!

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i} FIZZBUZZ!!!`);
  } else if (i % 3 === 0) {
    console.log(`${i} fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} buzz`);
  }
}

// Break y Continue en un For loop
console.log('For loop con break y continue:');
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break; // Sale del bucle cuando i es igual a 5
  }
  if (i === 0) {
    continue; // Salta a la siguiente iteración cuando i es igual a 0
  }
  console.log(i);
}

// While loop
console.log('While loop:');
let j = 1; // Inicializar el while
while (j <= 5) {
  console.log(j);
  j++; // Incremento
}

// Do-While loop
console.log('Do-While loop:');
let k = 1; // Inicio
do {
  console.log(k);
  k++;
} while (k <= 5);

// forEach en un arreglo
console.log('forEach en un arreglo:');
const colores = ['rojo', 'verde', 'azul'];
colores.forEach(color => console.log(color));

// Map en un arreglo
console.log('Map en un arreglo:');
const numeros = [1, 2, 3];
const cuadrados = numeros.map(numero => numero ** 2);
console.log(cuadrados);

// For...of en un iterable (arreglo)
console.log('For...of en un arreglo:');
const letras = ['a', 'b', 'c'];
for (let letra of letras) {
  console.log(letra);
}

// For...in en un objeto
console.log('For...in en un objeto:');
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Ejemploville',
};
for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
