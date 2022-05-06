const { get } = require("express/lib/response")

function calcular(velocidade){
    var velocidade = document.getElementById("velocidade").value;
    var tempo = velocidade/10
    var hmax = (velocidade**2)/20
    document.getElementById("tempo").textContent = "Tempo total de subida do objeto em segundos: " + tempo
    document.getElementById("altura").textContent = "Altura máxima que chegará em metros: " + hmax
}