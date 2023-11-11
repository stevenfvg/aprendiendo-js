// Funciones declarativas
function suma(a, b) {
  return a + b;
}

// Funciones expresivas
const resta = function (a, b) {
  return a - b;
};

// Parámetros y argumentos
function saludar(nombre, saludo = 'Hola') {
  console.log(`${saludo}, ${nombre}!`);
}

saludar('Juan'); // Hola, Juan!
saludar('María', '¡Saludos'); // ¡Saludos, María!

// Comunicación entre funciones
function cuadrado(numero) {
  return numero * numero;
}

function dobleDelCuadrado(numero) {
  const cuadradoNumero = cuadrado(numero);
  return cuadradoNumero * 2;
}

const resultado = dobleDelCuadrado(5);
console.log(resultado); // 50

// Funciones en un objeto
const calculadora = {
  sumar: function (a, b) {
    return a + b;
  },
  restar(a, b) {
    return a - b;
  },
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => a / b,
};

console.log(calculadora.sumar(5, 3)); // 8
console.log(calculadora.restar(10, 4)); // 6
console.log(calculadora.multiplicar(2, 6)); // 12
console.log(calculadora.dividir(8, 2)); // 4

// Arrow Functions y funciones anónimas
const cuadradoArrow = (x) => x * x;
const sumaArrow = (a, b) => {
  const resultado = a + b;
  return resultado;
};

console.log(cuadradoArrow(3)); // 9
console.log(sumaArrow(4, 7)); // 11

// Ejemplo de un reproductor de música
const reproductor = {
  reproducir: id => console.log(`Reproduciendo canción ${id}`),
  pausar: () => console.log('Pausando...'),
  borrar: id => console.log(`Borrando canción ${id}`),
  crearPlayList: nombre => console.log(`Creando playlist ${nombre}`),
  reproducirPlayList: nombre =>
    console.log(`Reproduciendo playlist ${nombre}`),
};

reproductor.reproducir(30); // Reproduciendo canción 30 
reproductor.pausar(); // Pausando...
reproductor.borrar(30); // Borrando canción 30
reproductor.crearPlayList('Heavy Metal'); // Creando playlist Heavy Metal
reproductor.reproducirPlayList('Heavy Metal'); // Reproduciendo playlist Heavy Metal
