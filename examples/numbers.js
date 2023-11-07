// Ejemplos de números y operaciones matemáticas

// Números
const numero1 = 10;
const numero2 = 5;

// Suma
const suma = numero1 + numero2;
console.log(`Suma: ${suma}`);

// Resta
const resta = numero1 - numero2;
console.log(`Resta: ${resta}`);

// Multiplicación
const multiplicacion = numero1 * numero2;
console.log(`Multiplicación: ${multiplicacion}`);

// División
const division = numero1 / numero2;
console.log(`División: ${division}`);

// Módulo (resto de la división)
const modulo = numero1 % numero2;
console.log(`Módulo: ${modulo}`);

// Uso del objeto Math

// round: Redondeo al número entero más cercano
const numeroDecimal = 3.7;
const redondeado = Math.round(numeroDecimal);
console.log(`Redondeado: ${redondeado}`);

// ceil: Redondeo al entero mayor o igual
const techo = Math.ceil(numeroDecimal);
console.log(`Redondeo hacia arriba: ${techo}`);

// floor: Redondeo al entero menor o igual
const piso = Math.floor(numeroDecimal);
console.log(`Redondeo hacia abajo: ${piso}`);

// sqrt: Raíz cuadrada
const raizCuadrada = Math.sqrt(numero1);
console.log(`Raíz cuadrada de ${numero1}: ${raizCuadrada}`);

// abs: Valor absoluto
const valorNegativo = -7;
const valorAbsoluto = Math.abs(valorNegativo);
console.log(`Valor absoluto de ${valorNegativo}: ${valorAbsoluto}`);

// pow: Potenciación
const base = 2;
const exponente = 3;
const potencia = Math.pow(base, exponente);
console.log(`${base} elevado a la ${exponente} es igual a: ${potencia}`);

// min: Valor mínimo entre varios números
const numeroMenor = Math.min(numero1, numero2, valorNegativo);
console.log(`El número más pequeño es: ${numeroMenor}`);

// max: Valor máximo entre varios números
const numeroMayor = Math.max(numero1, numero2, valorNegativo);
console.log(`El número más grande es: ${numeroMayor}`);

// random: Generar un número aleatorio entre 0 (inclusive) y 1 (exclusivo)
const numeroAleatorio = Math.random();
console.log(`Número aleatorio entre 0 y 1: ${numeroAleatorio}`);
