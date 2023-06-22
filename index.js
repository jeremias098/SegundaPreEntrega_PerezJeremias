//Definir una funcion para el ingreso de datos de alumnos 

function ingresarDatosAlumnos(){
    const alumnos = [];

//Pedir al usuario cantidad de alumnos

const cantidadAlumnos =parseInt(prompt("Ingrese la cantidad de alumnos del curso."));

//Iniciar un ciclo para pedir datos de cada alumno

for (let i=0;i<cantidadAlumnos;i++){
    const alumno={};
    
    //Pedir al usuario que ingrese los nombres de los alumnos 
    
    alumno.nombre=prompt("Ingrese el nombre del alumno: ");
    alumno.nota=prompt("Ingrese la nota del alumno: ");

    //Agregar al alumno al array de alumnos

    alumnos.push(alumno);

}
return alumnos;

}

//Funcion para filtrar los aprobados de los desaprobados 

function filtrarAprobadosDesaprobados (alumnos){
    const aprobados = [];
    const desaprobados = [];

    // Iterar sobre el array de alumnos 

    alumnos.forEach((alumno) =>{
        if (alumno.nota >=4 && alumno.nota <=10){
            aprobados.push(alumno);
        }else{
            desaprobados.push(alumno);
        }
    });
    return{
        aprobados,desaprobados
    };
}

//Funcion para filtrar los alumnos con nota del 4 al 7 para mejorar la nota 

function filtrarPuedenMejorar(aprobados){
    const puedenMejorar = aprobados.filter((alumno) => alumno.nota >=4 && alumno.nota <= 7);
    return puedenMejorar;
}

//Funcion para los alumnos que pueden rendir recuperatorio para aprobar la materia 

function filtrarRecuperatorio(desaprobados){
    const recuperatorio = desaprobados.filter((alumno) => alumno.nota == 3);
    return recuperatorio;

}

// LLamar a las funciones 

const alumnos = ingresarDatosAlumnos();
const {aprobados, desaprobados}= filtrarAprobadosDesaprobados(alumnos);
const puedenMejorar = filtrarPuedenMejorar(aprobados);
const recuperatorio = filtrarRecuperatorio(alumnos);

//Imprimir resultados

console.log("Alumnos Aprobados:", aprobados);
console.log("Alumnos Desaprobados:", desaprobados);
console.log("Alumnos que pueden mejorar su nota:", puedenMejorar);
console.log("Alumnos que pueden rendir recuperatorio: " , recuperatorio);