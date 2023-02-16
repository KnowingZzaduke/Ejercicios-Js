const nota = prompt("Ingresa una nota");

function calificación(){
    if(Number(nota) <= 10){
        if(Number(nota) >= 0 && Number(nota) <= 3){
            alert("Muy deficiente");
        }else if(Number(nota) >= 3 && Number(nota) <= 5){
            alert("Insuficiente");
        }else if(Number(nota) >= 5 && Number(nota) <= 6){
            alert("Suficiente");
        }else if(Number(nota) >= 6 && Number(nota) <= 7){
            alert("Bien");
        }else if(Number(nota) >= 7 && Number(nota) <= 9){
            alert("Notable");
        }else if(Number(nota) >= 9 && Number(nota) <= 10){
            alert("Sobesaliente");
        }
    }else{
        alert("Digita una nota válida")
    }
}
    


calificación();