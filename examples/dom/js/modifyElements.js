// Ejemplo: Modificación del texto según el navegador

// Obtiene el agente de usuario del navegador actual
const navegador = navigator.userAgent;

// Verifica si el navegador es Chrome y establece un atajo de teclado correspondiente
if (navegador.includes('Chrome')) {
  // Modifica el texto dentro de un elemento span para mostrar el atajo de teclado de Chrome
  const atajoDeTeclado = (document.querySelector(
    '.container p span'
  ).textContent = 'Ctrl+Shift+J');
}

// Verifica si el navegador es Firefox y establece un atajo de teclado correspondiente
if (navegador.includes('Firefox')) {
  // Modifica el texto dentro de un elemento span para mostrar el atajo de teclado de Firefox
  const atajoDeTeclado = (document.querySelector(
    '.container p span'
  ).textContent = 'Ctrl+Shift+K');
}

// Verifica si el navegador es Safari y establece un atajo de teclado correspondiente
if (navegador.includes('Safari') && !navegador.includes('Chrome')) {
  // Modifica el texto dentro de un elemento span para mostrar el atajo de teclado de Safari
  const atajoDeTeclado = (document.querySelector(
    '.container p span'
  ).textContent = 'Cmd+Opt+C');
}

// Verifica si el navegador es Edge y establece un atajo de teclado correspondiente
if (navegador.includes('Edg')) {
  // Modifica el texto dentro de un elemento span para mostrar el atajo de teclado de Edge
  const atajoDeTeclado = (document.querySelector(
    '.container p span'
  ).textContent = 'Ctrl+Shift+J');
}

// Verifica si el navegador es Internet Explorer y establece un atajo de teclado correspondiente
if (navegador.includes('MSIE') || navegador.includes('Trident/')) {
  // Modifica el texto dentro de un elemento span para mostrar el atajo de teclado de Internet Explorer
  const atajoDeTeclado = (document.querySelector(
    '.container p span'
  ).textContent = 'Ctrl+`');
}
