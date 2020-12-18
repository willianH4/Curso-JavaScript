// clase
class Celular {
    constructor( color, peso, rdp, rdc, ram ){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = rdp;
        this.resolucionCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    botonEncendido(){
        if ( this.encendido == true ) {
            alert( "celular encendido" );
        }else {
            alert( "celular apagado" );
            this.encendido = false;
        }
    }

    reiniciar(){
        if ( this.encendido == true ) {
            alert( "reiniciando" );
        }else {
            alert( "celular apagado" );
        }
    }

    tomarFoto(){
        alert( `foto tomada con una resolucion de ${this.resolucionCamara}` );
    }

    grabarVideo(){
        alert( `grabando video en ${this.resolucionCamara}` )
    }

    mobileInfo(){
        return `
        Color: <b> ${this.color} <b><br>
        Peso: <b> ${this.peso} <b><br>
        Tamaño: <b> ${this.resolucionPantalla} <b><br>
        Resolucion de video: <b> ${this.resolucionCamara} <b><br>
        Memoria Ram: <b> ${this.memoriaRam} <b><br>
        `
    }
}

celular1 = new Celular( "rojo", "150gr", "5", "full hd", "2GB" );
celular2 = new Celular( "gris", "160gr", "5.5", "full hd", "4GB" );
celular3 = new Celular( "negro", "165gr", "5.99", "full hd", "3GB" );

document.write(`
${celular1.mobileInfo()} <br> 
${celular2.mobileInfo()} <br>
${celular3.mobileInfo()} <br>
`);