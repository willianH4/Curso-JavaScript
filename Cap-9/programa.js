const button = document.querySelector(".button");

// escucha de eventos con addEventListener()
// evento click
// button.addEventListener("click", () => {
//     alert('Hola');
// });

// Doble click
button.addEventListener("dblclick", () => {
    alert('Hola');
});

// forma con funcion tradicional
// function saludar() {
//     alert('Hola');    
// }