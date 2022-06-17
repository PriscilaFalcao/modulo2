function verificar(){
    var numero = document.getElementById("numero").value;
    if (numero.length= 14 && numero[0] == "(" && numero[3] == ")" && numero[9] == "-"){
        alert("Número aceito!")
    }
    else{
        alert("O número digitado não está de acordo com o pedido.")
    };
}