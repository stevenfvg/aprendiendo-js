document.addEventListener('DOMContentLoaded', () => {
  // Acceder al dominio del sitio web
  const dominio = document.domain;
  console.log('Dominio: ', dominio);

  // Acceder al total de enlaces en el DOM
  const enlaces = document.links.length;
  console.log('Enlaces: ', enlaces);

  // Acceder al total de imágenes en el DOM.
  const imagenes = document.images.length;
  console.log('Imágenes: ', imagenes);

  // Acceder a un elemento por su ID
  const titulo = document.getElementById('contenido');
  titulo.style.backgroundColor = '#e0e0e0';

  // Acceder a elementos por su clase
  const parrafos = document.getElementsByClassName('parrafo');
  for (let parrafo of parrafos) {
    parrafo.style.fontWeight = 'bold';
  }

  // Usar querySelector para seleccionar el primer párrafo
  const primerParrafo = document.querySelector('.parrafo');
  primerParrafo.style.color = 'red';

  // Modificar texto con querySelector
  const nuevoEncabezado = 'Mi Página Web';
  document.querySelector('h1').textContent = nuevoEncabezado;

  // Usar querySelectorAll para seleccionar todos los párrafos
  const todosLosParrafos = document.querySelectorAll('.parrafo');
  todosLosParrafos.forEach((parrafo) => {
    parrafo.style.fontSize = '18px';
  });

  // Generar HTML con JavaScript
  const nuevoTexto = document.createElement('span');
  nuevoTexto.innerHTML = `<em>Abre la consola del navegador con (Ctrl + Shift + I).</em>`;
  nuevoTexto.style.fontSize = 'small';

  // Agregar el nuevo texto al DOM
  const contenido = document.getElementById('contenido');
  contenido.appendChild(nuevoTexto);
});
