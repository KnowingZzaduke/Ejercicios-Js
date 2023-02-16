const texto = prompt("Ingresa un texto");
function text(){
    if(String(texto) === ""){
        alert("Ingresa un texto por favor")
    }else{
        document.write(String(texto));
    }
}

text();