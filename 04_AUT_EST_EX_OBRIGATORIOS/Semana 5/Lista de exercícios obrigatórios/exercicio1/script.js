function soma(){
    document.getElementById("resultado").textContent = "Resultado: "
    valor1 = document.getElementById("valor1").value;
    valor2 = document.getElementById("valor2").value;
    resultado = Number(valor1) + Number(valor2);
    document.getElementById("resultado").textContent += resultado;
}

function subtracao(){
    document.getElementById("resultado").textContent = "Resultado: "
    valor1 = document.getElementById("valor1").value;
    valor2 = document.getElementById("valor2").value;
    resultado = Number(valor1) - Number(valor2);
    document.getElementById("resultado").textContent += resultado;
}

function multiplicacao(){
    document.getElementById("resultado").textContent = "Resultado: "
    valor1 = document.getElementById("valor1").value;
    valor2 = document.getElementById("valor2").value;
    resultado = Number(valor1) * Number(valor2);
    document.getElementById("resultado").textContent += resultado;
}

function divisao() {
    document.getElementById("resultado").textContent = "Resultado: "
    valor1 = document.getElementById("valor1").value;
    valor2 = document.getElementById("valor2").value;
    resultado = Number(valor1) / Number(valor2);
    document.getElementById("resultado").textContent += resultado;
}

function resto() {
    document.getElementById("resultado").textContent = "Resultado: "
    valor1 = document.getElementById("valor1").value;
    valor2 = document.getElementById("valor2").value;
    resultado = Number(valor1) % Number(valor2);
    document.getElementById("resultado").textContent += resultado;
}