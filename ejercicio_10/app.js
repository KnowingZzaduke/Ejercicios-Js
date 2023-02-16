let numeros = [];

function dado1(){
    return Math.ceil(Math.random() * 6); 
}

function dado2(){
    return Math.ceil(Math.random() * 6);
}

function lanzarDados() {
    const suma = dado1() + dado2();
    if(suma){
        numeros.push(suma);
        let resultadoNumeros = [...numeros];
        console.log(resultadoNumeros);
    }
};

lanzarDados();

