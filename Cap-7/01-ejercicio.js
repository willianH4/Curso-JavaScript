let alto = window.screen.height;
let ancho = window.screen.width;

let comprar = confirm(`El alto es: ${alto}, el ancho es: ${ancho}`);

if (comprar) {
    alert("Comprar realizada exitosamente");
} else {
    alert("Compra cancelada :( ");
}