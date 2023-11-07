// Ejemplos de métodos de strings y template strings

// Definir un string
const ejemploString = '¡Hola, mundo!';

// Length: Obtener la longitud del string
const longitud = ejemploString.length;
console.log(`Longitud del string: ${longitud}`);

// indexOf: Encontrar la posición de una subcadena en el string
const posicion = ejemploString.indexOf('mundo');
console.log(`La palabra "mundo" comienza en la posición: ${posicion}`);

// includes: Verificar si una subcadena está presente en el string
const contiene = ejemploString.includes('Hola');
console.log(`¿El string contiene la palabra "Hola"? ${contiene}`);

// concat: Concatenar strings
const otroString = ' ¡Qué día hermoso!';
const concatenado = ejemploString.concat(otroString);
console.log(`Concatenado: ${concatenado}`);

// trimStart, trimEnd y trim: Eliminar espacios en blanco al principio, al final o en ambos extremos
const stringConEspacios = '   Espacios   ';
const sinEspaciosInicio = stringConEspacios.trimStart();
const sinEspaciosFinal = stringConEspacios.trimEnd();
const sinEspaciosAmbos = stringConEspacios.trim();
console.log(`Sin espacios al inicio: "${sinEspaciosInicio}"`);
console.log(`Sin espacios al final: "${sinEspaciosFinal}"`);
console.log(`Sin espacios en ambos extremos: "${sinEspaciosAmbos}"`);

// replace: Reemplazar una subcadena por otra
const reemplazado = ejemploString.replace('mundo', 'amigos');
console.log(`Reemplazado: "${reemplazado}"`);

// slice: Obtener una porción de un string
const subcadena = ejemploString.slice(2, 6);
console.log(`Subcadena: "${subcadena}"`);

// substring: Obtener una subcadena a partir de índices
const subcadena2 = ejemploString.substring(2, 6);
console.log(`Subcadena (substring): "${subcadena2}"`);

// charAt: Obtener el carácter en una posición específica
const caracter = ejemploString.charAt(5);
console.log(`Carácter en la posición 5: "${caracter}"`);

// repeat: Repetir un string cierto número de veces
const repetido = 'Hola '.repeat(3);
console.log(`Repetido 3 veces: "${repetido}"`);

// split: Dividir un string en un array de subcadenas
const palabras = ejemploString.split(' ');
console.log(`Palabras separadas por espacios: ${JSON.stringify(palabras)}`);

// toUpperCase: Convertir a mayúsculas
const mayusculas = ejemploString.toUpperCase();
console.log(`Mayúsculas: "${mayusculas}"`);

// toLowerCase: Convertir a minúsculas
const minusculas = ejemploString.toLowerCase();
console.log(`Minúsculas: "${minusculas}"`);

// toString: Convertir a string (aunque ya es un string)
const stringResultante = ejemploString.toString();
console.log(`Convertido a string (toString): "${stringResultante}"`);

// Template string
const nombre = 'Juan';
const edad = 30;
const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje);
