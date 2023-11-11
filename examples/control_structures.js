// Estructuras de control

// If-else
const edad = 25;

if (edad < 18) {
  console.log('Eres menor de edad');
} else if (edad >= 18 && edad < 65) {
  console.log('Eres adulto');
} else {
  console.log('Eres un adulto mayor');
}

// Operador AND (&&) y OR (||)
const esAdulto = true;
const tieneLicencia = false;

if (esAdulto && tieneLicencia) {
  console.log('Puede conducir');
} else if (esAdulto || tieneLicencia) {
  console.log('Puede estar cerca de conducir');
} else {
  console.log('No puede conducir');
}

// Switch
const metodoDePago = 'efectivo';

switch (metodoDePago) {
  case 'efectivo':
    console.log(`Pagaste con ${metodoDePago}`);
    break;
  case 'tarjeta de débito':
    console.log(`Pagaste con ${metodoDePago}`);
    break;
  case 'tarjeta de crédito':
    console.log(`Pagaste con ${metodoDePago}`);
    break;
  case 'cheque':
    console.log(`Pagaste con ${metodoDePago}`);
    break;
  default:
    console.log('Aún no has seleccionado un método de pago');
}

// Operador ternario
const autenticado = true;
console.log(autenticado ? '¡Si! está autenticado' : '¡No! no está autenticado');
