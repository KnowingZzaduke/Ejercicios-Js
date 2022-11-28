// function persona(nombre, edad, genero){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.genero = genero;
// }

// persona.prototype.obtDetalles = function(){
//     return (`Su nombre es ${this.nombre}, tiene ${this.edad}, su genero es ${this.genero}`);
// };

// function obtenerDatosPersona(){
//     const datosPersona = new persona('José', 18, 'Hombre');
//     return (datosPersona.obtDetalles());
// }

// const resultadoPersona = obtenerDatosPersona()
// console.log(resultadoPersona)


// function estudiante(curso, grupo){
//     this.curso = curso;
//     this.grupo = grupo;
// }

// estudiante.prototype.registrar = function(){
//     return (`pertenece al curso ${this.curso} y al grupo ${this.grupo}`)
// }

// function obtenerEstudiante(){
//     const datosEstudiante = new estudiante('Inglés', 'C1');
//     return (datosEstudiante.registrar());
// }

// const resultadoEstudiante = obtenerEstudiante();
// console.log(resultadoEstudiante);

// Object.setPrototypeOf(persona, estudiante);

// console.log(resultadoPersona.nombre)

const jose = {
    developer : 'Frontend',
    años : 18,
}

const backend = {
    developer : 'Backend',
    años: 20,
    cargo: 'Fullstack'
}

Object.setPrototypeOf(jose, backend);

console.log(jose.cargo);