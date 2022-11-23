function polindrome(srt){
    var re = /[^A-Za-z0-9]/g;
    srt = srt.toUpperCase().replace(re, '')
    var len = srt.length;
    for(let i = 0; i < len/2; i++){
        if(srt[i] != srt[len - 1 - i]){
            return false;
        }
     }   
    return true;
}
let resultado = polindrome('racecar');
console.log(resultado);