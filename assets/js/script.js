const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.hidetext');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
  });
});

function mostrarTexto(event, texto) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = texto;
}