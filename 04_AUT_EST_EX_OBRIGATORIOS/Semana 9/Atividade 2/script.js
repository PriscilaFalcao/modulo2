function calcular(){
    var num = document.getElementById("numero").value;
    var array = num.split("")
    var soma = 0
    for(var j = 0; j < array.length; j++){
        soma += Number(array[j])
    }
    document.getElementById("resultado").textContent = "Total: " + soma;
}