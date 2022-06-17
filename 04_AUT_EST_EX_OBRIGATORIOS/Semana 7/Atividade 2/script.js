function troca(){
  var v1 = document.querySelector("#v1"); //Recebe o valor 1
  var v2 = document.querySelector("#v2"); // Recebe o valor 2
  var aux = v1.value // Variável auxiliar recebe o texto de 1 
  v1.value = v2.value; // V1 recebe o valor da variável auxiliar 1 
  v2.value = aux; // V2 recebe o valor da 
}