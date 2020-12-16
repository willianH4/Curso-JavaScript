let free = false;

// donde el parametro es la hora de entrada
const validarCliente = ( time ) => {
    let edad = prompt( "Cual es tu edad?" );
    if ( edad > 18 ) {
        if ( time >= 2 && time < 7 && free == false ){
            alert( "Podes pasar gratis por que sos la primer persona despues de las 2" );
            free = true;
        } else {
            alert( `Son las ${ time }:00Hs y podes pasar, pero tenes que pagar la entrada` );
        }

    } else {
        alert( "Sos menos de edad no podes entrar :(" );
    }
}

validarCliente( 23 );
validarCliente( 24 );
validarCliente( 0.2 );
validarCliente( 0.6 );
validarCliente( 2 );
validarCliente( 3 );
