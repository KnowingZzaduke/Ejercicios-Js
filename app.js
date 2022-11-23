document.addEventListener('DOMContentLoaded', function (){
   let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
   const formulario = document.querySelector('.formulario');
   const dniUser = document.getElementById('number')
   const select = document.getElementById('letra');
   const resultado = document.getElementById('respuesta');
   const divisor = 23;
   const division = dniUser.value / divisor;
   console.log(division);
   const formatear = division.toPrecision(1);//Fomatea el número con la longitud que le pasemos (Devuelve un string)
   console.log(formatear);
   const result = formatear.charAt(0); //Selecciona el primer caracter del string
   console.log(result)



   //Objetos
   const datos = {
      dniUser: dniUser.value,
      result: result,
      select: select.value,
   };
   console.log(datos)

   //Escuchar por eventos
   dniUser.addEventListener('change', function(event){
      datos[event.target.id] = event.target;
      console.log(datos)
   })

   //Funciones

   function recorrido(){
      let i = 0;
      while(i < letras.length){
         if(i == result){
            return letras[i];
         }
         i++;
      }
      return;
   }

   let resultadoRecorrido = recorrido(result);
   console.log(resultadoRecorrido);


   function selectIndicado(){
      let selected = select.options[select.selectedIndex].text;
      console.log('La letra indicada es' + ' ' + selected);

      if(resultadoRecorrido == selected){
         alert('La letra y el número indicado si coinciden, estamos iniciando sesión...')
      }else{
         alert('La letra y el número indicado no coinciden, por favor vuelve a intentarlo')
      }
      return;
   }

   formulario.addEventListener('submit', function(event){
      selectIndicado();
      event.preventDefault();
   })
});

