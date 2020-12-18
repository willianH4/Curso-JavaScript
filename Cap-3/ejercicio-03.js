class App {
    constructor( descargas, puntuacion, peso ){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar(){
        if ( this.instalada == false ) {
            this.instalada = true
            alert( "app instalada correctamente" );
        }
    }

    
    abrir(){
        if ( this.iniciada == false && this.instalada == true ) {
            this.iniciada = true;
            alert( "app iniciada" );
        }
    }

    cerrar(){
        if ( this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert( "app cerrada correctamente");
        }
    }

    desintalar(){
        if ( this.instalada == true ) {
            this.instalada = false;
            alert( "app desinstalada correctamente" );
        }
    }

    appInfo(){
        return `
        <br>
        Descargas: <b> ${this.descargas} </b><br>
        Puntuacion: <b> ${this.puntuacion} </b><br>
        Peso: <b> ${this.peso} </b><br>
        `
    }
}


app1 = new App ("100,000", "5 estrellas", "900MB" );
app2 = new App ("10,000", "3 estrellas", "100MB" );
app3 = new App ("1,000", "4 estrellas", "700MB" );
app4 = new App ("10,000", "2 estrellas", "800MB" );
app5 = new App ("1,000", "4 estrellas", "400MB" );
app6 = new App ("100", "3 estrellas", "190MB" );
app7 = new App ("10,000", "2 estrellas", "22MB" );

document.write(
    `
    ${ app1.appInfo() }<br>
    ${ app2.appInfo() }<br>
    ${ app3.appInfo() }<br>
    ${ app4.appInfo() }<br>
    ${ app5.appInfo() }<br>
    ${ app6.appInfo() }<br>
    ${ app7.appInfo() }<br>
    `
)