/*
JS-Aula5:Calculadora FLEX
@uthor Ivan Rodrigues
*/

var etanol,gasolina;

function calcular(){
/*a funçao replace serve pra trocar a virgula por ponto sem esta funçao o console vai ignorar os valores decimais*/
   etanol = parseFloat(frmFlex.TxtEtanol.value.replace(",","."));

   gasolina = parseFloat(frmFlex.TxtGasolina.value.replace(",","."));

   if (etanol < 0.7 * gasolina) {
       document.getElementById('status').src="etanol.png";



   } else {
        document.getElementById('status').src="gasolina.png";

          

   }
  



}

function resetar(){
    
     document.getElementById('status').src="neutro.png";
    

}