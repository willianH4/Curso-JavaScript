// Problema propuesto, realizar una calculadora para realizar las operaciones matematicas
// basicas

const sumar = ( num1, num2 ) => {
    return parseInt( num1 ) + parseInt( num2 );
}

const restar = ( num1, num2 ) => {
    return parseInt( num1 ) - parseInt( num2 );
}

const multiplicar = ( num1, num2 ) => {
    return parseInt( num1 ) * parseInt( num2 );
}

const dividir = ( num1, num2 ) => {
    return parseInt( num1 ) / parseInt( num2 );
}

alert( "Que operacion deseas realizar? ");
let operacion = prompt( "1: suma, 2: resta, 3: multiplicar, 4: dividir");

let numero1 = prompt( "Primer numero a operar: ");
let numero2 = prompt ( "Segundo numero a operar: ");
let resultado = 0;

switch ( operacion ) {

    case "1":
        resultado = sumar( numero1, numero2 );
        alert( `El resultado es: ${resultado}` ); 
        break;

    case "2":
        resultado = restar( numero1, numero2 );
        alert( `El resultado es: ${resultado}` );      
        break;

     case "3":
        resultado = multiplicar( numero1, numero2 );
         alert( `El resultado es: ${resultado}` );
         break;

     case "4":
        resultado = dividir( numero1, numero2 );
         alert( `El resultado es: ${resultado}` );
         break;

     default:
         alert( "ingrese un numero de operacion valido");
         break;
 }

// cuando hay mas de dos condiciones a evaluar una buena practica es usar switch y no tanto
// if, if else, else

//  if ( operacion == 1 ) {
//      let resultado = sumar( numero1, numero2 );
//      alert( `El resultado de la suma es: ${resultado}` );
//  }
//  else if ( operacion == 2 ) {
//      let resultado = restar( numero1, numero2 );
//      alert( `El resultado de la resta es: ${resultado}` );
//  }
//  else if ( operacion == 3 ) {
//      let resultado = multiplicar( numero1, numero2 );
//      alert( `El resultado de la multiplicacion es: ${resultado}` );
// }
//  else if ( operacion == 4 ) {
//      let resultado = dividir( numero1, numero2 );
//      alert( `El resultado de la division es: ${resultado}` );
//  }