// Ejemplos de objetos y sus métodos
// Un objeto agrupa todo en una sola variable

// Creación de un objeto del tipo (bject literal)
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Ejemploville',
};

// Acceder a valores del objeto
console.log(persona.nombre); // "Juan"
console.log(persona.edad); // 30
console.log(persona.ciudad); // "Ejemploville"

// Agregar una nueva propiedad al objeto
persona.trabajo = 'Desarrollador';
console.log(persona.trabajo); // "Desarrollador"

// Eliminar una propiedad del objeto
delete persona.ciudad;
console.log(persona.ciudad); // undefined

// Destructuring de objetos
const { nombre, edad } = persona;
console.log(nombre); // "Juan"
console.log(edad); // 30

// Objetos dentro de objetos
const coche = {
  marca: 'Toyota',
  modelo: 'Camry',
};

const propietario = {
  nombre: 'Ana',
  vehiculo: coche,
};

console.log(propietario.vehiculo.marca); // "Toyota"

// Destructuring de objetos anidados
const {
  nombre: propietarioNombre,
  vehiculo: { marca: cocheMarca },
} = propietario;
console.log(propietarioNombre); // "Ana"
console.log(cocheMarca); // "Toyota"

// Congelar un objeto (no se pueden agregar, eliminar o modificar propiedades)
Object.freeze(persona);
persona.salario = 50000; // Esto no tendrá efecto
console.log(persona.salario); // undefined
// Comprobar si el objeto está congelado
console.log(Object.isFrozen(persona)); // true

// Sellar un objeto (se pueden modificar propiedades existentes, pero no se pueden agregar ni eliminar)
Object.seal(coche);
coche.modelo = 'Corolla'; // Esto funcionará
coche.color = 'Azul'; // Esto no tendrá efecto
// Comprobar si el objeto está sellado
console.log(Object.isSealed(coche)); // true

// Funciones en objetos
const calculadora = {
  sumar: function (a, b) {
    return a + b;
  },
  restar: function (a, b) {
    return a - b;
  },
};

console.log(calculadora.sumar(5, 3)); // 8
console.log(calculadora.restar(10, 4)); // 6

// Objeto constructor
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const nuevaPersona = new Persona('María', 25);
console.log(nuevaPersona.nombre); // "María"
console.log(nuevaPersona.edad); // 25

// Object.keys, Object.values y Object.entries
const frutas = {
  manzana: 'roja',
  banana: 'amarilla',
  uva: 'morada',
};

const claves = Object.keys(frutas);
const valores = Object.values(frutas);
const entradas = Object.entries(frutas);

console.log(claves); // ["manzana", "banana", "uva"]
console.log(valores); // ["roja", "amarilla", "morada"]
console.log(entradas); // [["manzana", "roja"], ["banana", "amarilla"], ["uva", "morada"]]

// Unir objetos con Object.assign
const producto = {
  nombre: 'Monitor 20 pulgadas',
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: '1kg',
  medida: '1m',
};

const productoConMedidas = Object.assign(producto, medidas);
console.log(productoConMedidas);

// Unir objetos con el Spread Operator o Rest Operator
const descripcionDeProducto = { ...producto, ...medidas };
console.log(descripcionDeProducto);
