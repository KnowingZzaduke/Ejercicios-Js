function isEqual(str){
    if(str === str.toUpperCase()){
        console.log('Contiene solo mayúsculas')
    }else if(str === str.toLowerCase()){
        console.log('Contiene solo minúsculas')
    }else{
        console.log('Contiene letras mayúsculas y minúsculas');
    }
}

let resultado = isEqual('HoLa');
