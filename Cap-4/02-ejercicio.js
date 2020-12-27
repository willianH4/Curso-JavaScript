const obtenerInformacion = ( materia ) => {
    // array de objetos
    materias = {
        fisica: ["Ruiz", "pedro", "cofla", "maria", "galiano"],
        programacion: ["Hernandez", "pedro", "cofla", "maria"],
        logica: ["Estanzuela", "pedro", "cofla", "maria", "galiano"],
        quimica: ["Gomez", "cofla", "maria", "galiano"],
    }

    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    }else{
        return materias;
    }
}

const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

if (informacion !== false) {
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
 document.write(`<hr>El profesor de <b>${informacion[1]}</b> es: ${profesor} <br><br>
Los Alumnos son: <b>${alumnos}<b><br><br>`);   

}
} 

const cantidadClases = (alumno) => {
    let informacion = obtenerInformacion();
    let cantidadTotal = 0;
    let clasesPresentes = [];

    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++
            clasesPresentes.push(" " + info);
        }
    }

    return `${alumno} esta en ${cantidadTotal} clases: ${clasesPresentes} <br>`;
}

mostrarInformacion("fisica")
mostrarInformacion("programacion")
mostrarInformacion("logica")
mostrarInformacion("quimica")

document.write(cantidadClases("cofla"));
document.write(cantidadClases("maria"));
document.write(cantidadClases("pedro"));
document.write(cantidadClases("galiano"));