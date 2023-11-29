// Ejemplos utilizando Traversing The DOM

// Obtener el primer elemento hijo utilizando firstElementChild
const primeHijo = document.body.firstElementChild;
console.log('Primer elemento hijo:');
console.log(primeHijo);

// Obtener el último elemento hijo utilizando lastElementChild
const ultimoHijo = document.body.lastElementChild;
console.log('Último elemento hijo:');
console.log(ultimoHijo);

// Obtener todos los nodos hijos utilizando childNodes
const nodosHijos = document.body.childNodes;
console.log('Nodos hijos:');
console.log(nodosHijos);

// Obtener todos los elementos hijos utilizando children
const elementosHijos = document.body.children;
console.log('Elementos hijos:');
console.log(elementosHijos);

// Obtener el tipo de nodo del primer hijo utilizando nodeType
const firstChildType = document.body.firstElementChild.nodeType;
console.log('Tipo de nodo del primer hijo:');
console.log(firstChildType);

// Obtener el siguiente elemento hermano utilizando nextElementSibling
const nextSibling = document.head.nextElementSibling;
console.log('Siguiente elemento hermano:');
console.log(nextSibling);
