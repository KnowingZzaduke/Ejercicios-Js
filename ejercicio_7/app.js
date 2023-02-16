const edad = prompt("Ingresa tu edad");

function edadApta(){
    if(Number(edad) >= 18){
        alert("Tienes 18 años o más, puedes conducir");
    }else{
        alert("No tienes suficiente edad para conducir");
    }
}

edadApta();