// Problema propuesto, realizar una calculadora para realizar las operaciones matematicas
// basicas

class Calculadora{
    constructor(){
    }
    
sumar ( num1, num2 ){
    return parseInt( num1 ) + parseInt( num2 );
}

restar ( num1, num2 ) {
    return parseInt( num1 ) - parseInt( num2 );
}

multiplicar ( num1, num2 ) {
    return parseInt( num1 ) * parseInt( num2 );
}

dividir ( num1, num2 ) {
    return parseInt( num1 ) / parseInt( num2 );
}

potenciar ( num, exp ) {
    let numero = num;
    for (let i = 1; i < exp; i++) {
    numero = numero * num;      
    }
    return numero;
}

raizCuadrada( num ) {
    return Math.sqrt( num );
}

raizCubica( num ) {
    return Math.cbrt( num );
}

} 
const calculadora = new Calculadora();
alert( "Que operacion deseas realizar? ");
let operacion = prompt( "1: suma, 2: resta, 3: multiplicar, 4: dividir, 5: potenciacion, 6: Raiz cuadrada, 7: Raiz cubica");

if (operacion <= 5) {
     var numero1 = prompt( "Primer numero a operar: ");
     var numero2 = prompt ( "Segundo numero a operar: ");    
} else {
     var numero1 = prompt( "Primer numero a operar: ");
    

let resultado = 0;

switch ( operacion ) {

    case "1":
        resultado = calculadora.sumar( numero1, numero2 );
        alert( `El resultado es: ${resultado}` ); 
        break;

    case "2":
        resultado = calculadora.restar( numero1, numero2 );
        alert( `El resultado es: ${resultado}` );      
        break;

     case "3":
        resultado = calculadora.multiplicar( numero1, numero2 );
         alert( `El resultado es: ${resultado}` );
         break;

     case "4":
        resultado = calculadora.dividir( numero1, numero2 );
         alert( `El resultado es: ${resultado}` );
         break;

         case "5":
            resultado = calculadora.potenciar( numero1, numero2 );
            alert( `El resultado es: ${resultado}` ); 
            break;
    
        case "6":
            resultado = calculadora.raizCuadrada( numero1);
            alert( `El resultado es: ${resultado}` );      
            break;
    
         case "7":
            resultado = calculadora.raizCubica( numero1);
             alert( `El resultado es: ${resultado}` );
             break;

     default:
         alert( "ingrese un numero de operacion valido");
         break;
 }