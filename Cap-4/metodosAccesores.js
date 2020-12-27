// let numeros = [1,2,3,4,5,6,7];

// document.write(numeros + "<br>");

// // crea una cadena de texto a partir de un array
// let resultado = numeros.join("<br>Elemento: ");
// document.write( resultado );

// metodo slice();
let numeros = [1,2,3,4,5,6,7];

document.write(numeros + "<br>");

// extrae los elementos segun le indicamos en los parametros que le pasamos
// para que nos muestre todos los elementos hay que poner -1 en el segundo parametro
let resultado = numeros.slice(0,2);
document.write( resultado );