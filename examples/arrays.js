// Ejemplos de arreglos

// Crear un arreglo
const frutas = ['manzana', 'banana', 'uva'];
console.table(frutas);

// Acceder a valores del arreglo
console.log(frutas[0]); // "manzana"
console.log(frutas[1]); // "banana"
console.log(frutas[2]); // "uva"

// Medir la longitud del arreglo
const longitud = frutas.length;
console.log(`Longitud del arreglo: ${longitud}`); // 3

// Recorrer el arreglo con un bucle for
console.log('Recorriendo el arreglo con un bucle for:');
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Recorrer el arreglo con forEach
console.log('Recorriendo el arreglo con forEach:');
frutas.forEach((fruta) => {
  console.log(fruta);
});

// Iterar y transformar el arreglo 'frutas' con .map
console.log('Mostrar frutas en mayusculas');
const frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase());

console.log(frutasEnMayusculas);

// Agregar valores al inicio del arreglo
frutas.unshift('frambuesa');
console.log("Arreglo después de agregar 'frambuesa':", frutas);

// Agregar valores al final del arreglo
frutas.push('fresa');
console.log("Arreglo después de agregar 'fresa':", frutas);

// Uso del Spread Operator
let copiaDeArregloFrutas;
// Agregar valor al inicio en la copia del arreglo
copiaDeArregloFrutas = ['durazno', ...frutas];
console.log("Arreglo después de agregar 'durazno':", copiaDeArregloFrutas);
// Agregar valor al final en la copia del arreglo
copiaDeArregloFrutas = [...frutas, 'piña'];
console.log("Arreglo después de agregar 'piña':", copiaDeArregloFrutas);

// Eliminar el último valor del arreglo
const ultimoElementoEliminado = frutas.pop();
console.log(`Último elemento eliminado: ${ultimoElementoEliminado}`);
console.log('Arreglo después de eliminar el último elemento:', frutas);

// Eliminar el primer valor del arreglo
const primerElementoEliminado = frutas.shift();
console.log(`Primer elemento eliminado: ${primerElementoEliminado}`);
console.log('Arreglo después de eliminar el primer elemento:', frutas);

// Encontrar el índice de un elemento en el arreglo
const indiceBanana = frutas.indexOf('banana');
console.log(`Índice de 'banana': ${indiceBanana}`);

// Eliminar un elemento en una posición específica
const indiceUva = frutas.indexOf('uva');
frutas.splice(indiceUva, 1);
console.log("Arreglo después de eliminar 'uva':", frutas);

// Crear un nuevo arreglo con elementos filtrados
const frutasFiltradas = frutas.filter((fruta) => fruta !== 'banana');
console.log('Nuevo arreglo filtrado:', frutasFiltradas);

// Destructuring con Arreglos
const [manzana, banana] = frutas;
console.log(manzana); // "manzana"
console.log(banana); // "banana"
