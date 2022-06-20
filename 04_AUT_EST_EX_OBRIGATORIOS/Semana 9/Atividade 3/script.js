function ordenar(){
    var nomes = document.getElementById("nomess").value;
    var ordenado = nomes.split(", ");
    nomes = ordenado.sort();
    document.getElementById("nomes").textContent = nomes;
}