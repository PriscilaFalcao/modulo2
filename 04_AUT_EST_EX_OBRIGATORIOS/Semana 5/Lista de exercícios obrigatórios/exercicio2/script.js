function sacar(){
    var valor = document.getElementById("valor").value;
// Caso o valor digitado não seja possível de ser sacado:
    if(valor < 1 || valor != Math.floor(valor)) {
        document.getElementById("n100").textContent = "Notas de R$100: 0";
        document.getElementById("n50").textContent = "Notas de R$50: 0";
        document.getElementById("n20").textContent = "Notas de R$20: 0";
        document.getElementById("n10").textContent = "Notas de R$10: 0";
        document.getElementById("n5").textContent = "Notas de R$5: 0";
        document.getElementById("n2").textContent = "Notas de R$2: 0";
        document.getElementById("n1").textContent = "Notas de R$1: 0";

        document.getElementById("msgError").textContent = "Por gentileza, digite um valor INTEIRO e ACIMA de 1.";
    } else {
        var notas100 = Math.floor(valor/100);
        valor = valor - notas100 * 100;
        document.getElementById("n100").textContent = "Notas de R$100: " + notas100;

        var notas50 = Math.floor(valor/50);
        valor = valor - notas50 * 50;
        document.getElementById("n50").textContent = "Notas de R$50: " + notas50;

        var notas20 = Math.floor(valor/20);
        valor = valor - notas20 * 20;
        document.getElementById("n20").textContent = "Notas de R$20: " + notas20;

        var notas10 = Math.floor(valor/10);
        valor = valor - notas10 * 10;
        document.getElementById("n10").textContent = "Notas de R$10: " + notas10;

        var notas5 = Math.floor(valor/5);
        valor = valor - notas5 * 5;
        document.getElementById("n5").textContent = "Notas de R$5: " + notas5;

        var notas2 = Math.floor(valor/2);
        valor = valor - notas2 * 2;
        document.getElementById("n2").textContent = "Notas de R$2: " + notas2;

        var notas1 = valor;
        document.getElementById("n1").textContent = "Notas de R$: " + notas1;
    };
    
}