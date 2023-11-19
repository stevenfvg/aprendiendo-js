document.addEventListener('DOMContentLoaded', () => {
  // Evento con el Mouse
  const mouseButton = document.getElementById('mouseButton');
  mouseButton.addEventListener('click', () => {
    alert('Has hecho clic con el mouse');
  });

  // Evento sobre los inputs
  const inputText = document.getElementById('inputText');
  inputText.addEventListener('input', () => {
    console.log('Input: ', inputText.value);
  });

  // Evento Submit en un formulario
  const formSubmit = document.getElementById('formSubmit');
  formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
  });

  // Evento al dar scroll con el mouse
  const scrollDiv = document.getElementById('scrollDiv');
  scrollDiv.addEventListener('scroll', () => {
    console.log('Has hecho scroll');
  });

  // Event Bubbling
  const outerButton = document.getElementById('outerButton');
  const innerButton = document.getElementById('innerButton');
  const eventBubbling = document.getElementById('eventBubbling');

  outerButton.addEventListener('click', () => {
    console.log('Exterior clickeado');
  });

  innerButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevenir bubbling
    console.log('Interior clickeado');
  });

  eventBubbling.addEventListener('click', () => {
    console.log('Div contenedor clickeado');
  });
});
