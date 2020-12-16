//Creando un array
// let frutas = ["banana", "manzana", "pera", 4, 2, "willian"];

// // document.write(frutas[5]);

// // Array asociativos
// let pc1 = {
//     nombre: "willianPC",
//     procesador: "AMD Ryzen 3",
//     ram: "12GB",
//     espacio: "500GB"
// }

// //imprimiendo
// let nombre = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let espacio = pc1["espacio"];

// let frase = `Nombre de PC: <b>${nombre}</b> <br>
// Procesador de PC: <b>${procesador}</b> <br>
// Memoria de PC: <b>${ram}</b> <br>
// Espacio en disco de PC: <b>${espacio}</b> <br>`;

// document.write( frase );


// Bucles e iteracion
// let numero = 0;

// while (numero < 10){
//     numero++;

//     document.write( numero + "<br>" );
// }


//  do {
//      numero++;

//      document.write( numero + "<br>" );

//  } while (numero < 10);


// sentencia break
// while (numero < 10){
//          numero++;
    
//          document.write( numero + "<br>" );
//          if ( numero == 7) {
//              break;
//          }
//      }

// document.write( "fin" );


//bucle for
// for (let numero1 = 0; numero1 < 10; numero1++) {
//     document.write(numero1 + "<br>");
    
// }

//bucle for usando continue para saltear el valor que indiquemos
// for (let numero1 = 0; numero1 < 10; numero1++) {

//     if (numero1 == 4) {
//         continue;
//     }
//     document.write(numero1 + "<br>");   
// }

// //For in
// let animales = ["gato", "perro", "tiranosaurio rex"];

// for (animal in animales){
//     document.write(animales [animal] + "<br>");
// }

// document.write("<br>");

// // for of
// for (animal of animales){
//     document.write(animal + "<br>");
// }

// // Sentencia Label:
// array1 = ["Maria", "Juan", "Yanci"];
// array2 = ["Lucia", "Marcelo", array1, "Josefina"];

// forRancio: //Esto es sentencia Label
// for (let array in array2) {
//     if (array == 2) {

//         for (let array of array1) {
//             if (array == "Maria") {
//                 continue forRancio;
//             }
//             document.write(array + "<br>");
//         }
//     }else {
//         document.write( array2 [ array ] + "<br>" );
//     }
// }


//Funciones
// function saludar() {
//     let respuesta = prompt( "Hola como fue tu dia?" );
//     if ( respuesta == "bien" ) {
//         alert( "me alegro" );
//     }else{
//         alert( "una pena" );
//     }
// }

// saludar();


// Funciones usando return
// function saludar() {
//     alert( "hola" );
//     return 3;
// }

// let saludo = saludar();
// document.write( saludo );


// // funciones con parametros
// function suma( numero1, numero2 ) {
//     let resultado = numero1 + numero2;
//     return resultado;
// }

// let resultado = suma( 22, 33 );
// document.write( resultado );

//forma recomendada ya que las funciones nunca cambia su nombre
// const saludar = function( nombre ) {
//     let frase = `Hola ${ nombre }! como estas?`;
//     document.write( frase );
// }

// saludar( "Willian" )


// funciones flecha
