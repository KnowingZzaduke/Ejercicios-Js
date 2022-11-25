function persona(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

//Persona
persona.prototype.obtDetalles = function(){
    return (`El nombre de la persona es ${this.nombre}, y tiene ${this.edad} años, su genereo es ${this.genero}`);
}

const datosPersona = new persona('José', 18, 'Hombre');
console.log(datosPersona.obtDetalles());

//Estudiante
function estudiante(curso, grado){
    this.curso = curso;
    this.edad = edad;
}

estudiante.prototype.registrar = function(){
    return (``)
}


const union1 = {...persona, ...estudiante};
console.log(union1)


function profesor(asignatura, nivel){
    this.asignatura = asignatura;
    this.nivel = nivel;
}

const union2 = {...estudiante, ...profesor};
console.log(union2);




// persona.prototype.detallesPersona = function(){
//     return (`El nombre de la persona es ${this.nombre}, tiene ${this.edad} años y su genero es ${this.genero}`)
// }


// const datos = new persona('José', 18, 'Hombre');
// console.log(datos.detallesPersona());