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

class CelularAltaGama extends Celular{
    constructor( color, peso, rdp, rdc, ram, rdce){
        super( color, peso, rdp, rdc, ram);
        this.resolucionCamaraExtra = rdce;
    }

    grabarVideoLento(){
        alert( "grabando en camara lenta" );
    }

    reconocimientoFacial(){
        alert( "reconocimiento facial encendido" );
    }

    infoAltaGama(){
        return `
        Color: <b> ${this.color} <b><br>
        Peso: <b> ${this.peso} <b><br>
        Tamaño: <b> ${this.resolucionPantalla} <b><br>
        Resolucion de video: <b> ${this.resolucionCamara} <b><br>
        Memoria Ram: <b> ${this.memoriaRam} <b><br>
        Resolucion camara extra: <b> ${this.resolucionCamaraExtra} <b><br>
        `
    }
}

// celular1 = new Celular( "rojo", "150gr", "5", "full hd", "2GB" );
// celular2 = new Celular( "gris", "160gr", "5.5", "full hd", "4GB" );
// celular3 = new Celular( "negro", "165gr", "5.99", "full hd", "3GB" );

celular1 = new CelularAltaGama( "rojo", "135gr", "5.5", "4K", "4GB", "Full hd");
celular2 = new CelularAltaGama( "silver", "145gr", "6", "4K", "6GB", "Full hd");

document.write(`
${celular1.infoAltaGama()} <br> 
${celular2.infoAltaGama()} <br>
`);