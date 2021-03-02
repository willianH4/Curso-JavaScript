let alumnos = [{
    nombre: "Pato Lucas",
    email: "pato@email.com",
    materia: "Fisica 1"
},{
    nombre: "Pato Lucas",
    email: "pato@email.com",
    materia: "Fisica 1"
},{
    nombre: "Pato Lucas",
    email: "pato@email.com",
    materia: "Fisica 1"
},{
    nombre: "Pato Lucas",
    email: "pato@email.com",
    materia: "Fisica 1"
},{
    nombre: "Pato Lucas",
    email: "pato@email.com",
    materia: "Fisica 1"
}];

const contenedor = document.querySelector(".grid");
const boton = document.querySelector(".boton");

for (alumno in alumnos) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let codigoHTML = ` <div class="item">${nombre}</div>
        <div class="item">${email}</div>
        <div class="item">${materia}</div>
        <div class="item semana">
            <select name="semana" id="semana" class="semanas">
                <option value="semana 1">Semana 1</option>
                <option value="semana 2">Semana 2</option>
            </select>
        </div>
    `;
    contenedor.innerHTML += codigoHTML;
}

boton.addEventListener("click",() => {
    let confirmar = confirm("Realmente quieres confirmar?");
    if (confirmar) {
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
    let semanaElegida = document.querySelectorAll(".semanas");
    for (elemento in elementos) {
        semana = elementos[elemento];
        semana.innerHTML = semanaElegida[elemento].value;
    }
    }
});