// script.js

document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("respuesta").textContent = "Gracias por tu mensaje. Te responderé pronto.";
});
