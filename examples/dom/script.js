document.addEventListener('DOMContentLoaded', () => {
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

  // Usar querySelectorAll para seleccionar todos los párrafos
  const todosLosParrafos = document.querySelectorAll('.parrafo');
  todosLosParrafos.forEach(parrafo => {
    parrafo.style.fontSize = '18px';
  });
});
