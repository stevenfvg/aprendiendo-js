/* DOM (Modelo de objetos de documento):
    El DOM es una representación estructurada en forma de árbol de un documento HTML o XML.
    Cuando un navegador web carga una página web, crea una representación del contenido de la página como objetos que pueden manipularse mediante JavaScript.
    Cada elemento HTML se convierte en un objeto en el DOM, organizado en una jerarquía que refleja la estructura del documento.
    Esto permite que JavaScript acceda, modifique y manipule dinámicamente elementos y contenido en una página web. */

// Obtener en consola todo el objeto Document
console.log(document);
// Obtener el dominio del documento actual
console.log(`dominio: ${document.domain}`);
// Obtener el número total de elementos HTML del Document
console.log(`elementos: ${document.all.length}`);

// Obtener en consola todo el objeto <head> del Document
console.log(document.head);
// Obtener el número de elementos <meta> dentro del <head>
console.log(`metadata: ${document.head.querySelectorAll('meta').length}`);
// Obtener el número de elementos <link> dentro del <head>
console.log(`links: ${document.head.querySelectorAll('link').length}`);
// Obtener el número total de elementos secundarios dentro del <head>
console.log(`elementos: ${document.head.childElementCount}`);

// Obtener en consola todo el objeto <body> del Document
console.log(document.body);

/* querySelectorAll: es también un método del objeto Document, pero en lugar de devolver sólo un elemento, devuelve una colección (NodeList) de todos los elementos que coinciden con un selector CSS dado. 
Puedes usarlo para seleccionar múltiples elementos y luego iterar sobre ellos. Por ejemplo:

const elementos = document.querySelectorAll('.element-class');
elementos.forEach(elemento => {
  // Hacer algo con cada elemento
});

En resumen, el DOM es la representación estructurada del contenido de un documento HTML o XML en forma de árbol de objetos. 
querySelector y querySelectorAll son métodos que permiten seleccionar elementos específicos en el DOM utilizando selectores CSS, ya sea para seleccionar un solo elemento o varios a la vez. 
Estas funciones son esenciales para manipular y trabajar dinámicamente con contenido web mediante JavaScript. */

// Obtener el número total de elementos con un atributo "class" en el Document
console.log(`clases: ${document.querySelectorAll('[class]').length}`);
// Obtener el número total de elementos con un atributo "id" en el Document
console.log(`identificadores: ${document.querySelectorAll('[id]').length}`);

/* querySelector: es un método perteneciente al objeto Document en JavaScript. 
Permite seleccionar y devolver el primer elemento que coincida con un selector CSS especificado. 
El selector CSS es una cadena que sigue las mismas reglas que las utilizadas en las hojas de estilo CSS. 
Por ejemplo, si tienes un elemento con el id "mi-elemento", puedes seleccionarlo de la siguiente manera:

const elemento = document.querySelector('#mi-elemento');

Esto devuelve el primer elemento con el id "mi-elemento" en el DOM.*/

// Obtener el número de atributos de la clase ".container" (suponiendo que exista)
console.log(
  `contenedores: ${document.querySelector('.container').attributes.length}`
);
// Obtener el número total de elementos <div> dentro del <body>
console.log(`divisiones: ${document.body.querySelectorAll('div').length}`);
// Obtener el número total de elementos <a> (enlace) dentro del <body>
console.log(`enlaces: ${document.links.length}`);
// Obtener el número total de elementos <img> dentro del <body>
console.log(`imágenes: ${document.images.length}`);
// Obtener el número total de elementos <form> dentro del <body>
console.log(`formularios: ${document.forms.length}`);

// Obtener elemento del document por ID
console.log(`título: ${document.getElementById('title').textContent}`);
// Obtener elemento del document por el nombre de la clase CSS
console.log(`iconos: ${document.getElementsByClassName('icon-link').length}`);
