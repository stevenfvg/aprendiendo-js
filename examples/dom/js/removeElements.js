// Eliminar elemento del DOM (Ejemplo)

// Selecciona el primer elemento que tenga la clase 'container' en el documento HTML
const elemento = document.querySelector('.container');

// Remueve el tercer elemento hijo del elemento seleccionado anteriormente
elemento.removeChild(elemento.children[2]);
