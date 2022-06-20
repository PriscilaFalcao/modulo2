function calcular(){
    var num = document.getElementById("numero").value;
    if(num.length != 3){
        alert("O número informado não possui 3 dígitos!")
    }
    else{
        var array = num.split("")
        var centena = array[0]
        if(centena%2 == 0){
            document.getElementById("resultado").textContent = "A centena é par!";
        }
        else{
            document.getElementById("resultado").textContent = "A centena é ímpar!";
        }
    }
}