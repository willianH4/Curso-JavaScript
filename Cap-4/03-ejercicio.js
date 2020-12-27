let materias = {
    fisica: ["Ruiz", "pedro", "cofla", "maria", "galiano"],
    programacion: ["Hernandez", "pedro", "cofla", "maria"],
    logica: ["Estanzuela", "pedro", "cofla", "maria", "galiano"],
    quimica: ["Gomez", "cofla", "maria", "galiano"],
}

const inscribir = ( alumno, materia ) => {
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya estan llenas xD`);
    }else{
        personas.push(alumno);

        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        
        else if (materia == "programacion") {
            materias = {
                programacion: personas,
                fisica: materias['fisica'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        
        else if (materia == "logica") {
            materias = {
                logica: personas,
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                quimica: materias['quimica']
            }
        }

        else if (materia == "quimica") {
            materias = {
                quimica: personas,
                fisica: materias['fisica'],
                logica: materias['logica'],
                programacion: materias['programacion']
            }
        }
        document.write(`Felicidades ${alumno} te has incrito a ${materia} correctamente`);
    }
}

inscribir("cofla","fisica");
document.write(materias['fisica']);