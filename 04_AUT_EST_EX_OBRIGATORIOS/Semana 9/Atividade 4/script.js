function mostrar(){
    var num = document.getElementById("valor").value;
    var ant = 0;
    var atu = 1;
    var array = [];
    for(var c = 1; c <= num; c++){
        var prox = ant + atu;
        ant = atu;
        atu = prox;
        array.push(prox)
    }
    document.getElementById("sequencia").textContent = "1," + array;
}