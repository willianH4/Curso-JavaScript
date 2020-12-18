//clase
class Animal {
    constructor( especie, edad, color ){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${ this.especie }, tengo ${ this.edad } años y soy de color ${this.color}`;
    }

    // Funcion o metodo
    verInfo() {
        document.write( this.info + "<br>" );
    }
}

class Perro extends Animal {
    constructor( especie, edad, color, raza ){
        super( especie, edad, color );
        this.raza = null;
    }

    // static ladrar() {
    //     alert( "Waaan" );
    // }

    set setRaza( nombre ){
        this.raza = nombre;
    }

    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro( "perro", 5, "rojo", "doberman" );
const gato = new Animal( "gato", 2, "negro" );
const pajaro = new Animal( "pajaro", 1, "verde" );

perro.setRaza = "Pitbil";

// Perro.ladrar();
// gato.verInfo();
// pajaro.verInfo();

document.write( perro.getRaza );