// Função para ordenar a array
function ordenado(lista){
    for (var i = 0; i < lista.length; i++){
        for (var j = 0; j < lista.length; j++){
            if (lista[j] > lista[j+1]){
                var auxiliar = lista[j]
                lista[j] = lista[j+1]
                lista[j+1] = auxiliar
            }
        }
    }
    return lista
}

// Função para buscar o valor foco na array
function buscaBinaria(lista) {
    var primeiro = 0;
    var ultimo = lista.length - 1;
    var achou = false;
    var item = document.getElementById("valorFoco").value

    while (primeiro <= ultimo && !achou) {
        meioLista = Math.ceil((primeiro + ultimo) / 2);
        if (lista[meioLista] == item) {
            achou = true;
        }
        else {
            if (item < lista[meioLista]) {
                ultimo = meioLista - 1;
            }
            else {
                primeiro = meioLista + 1;
            }
        }
    }
    return achou;
}

function ordenar(){
    var lista = document.getElementById("lista").value;
    lista = lista.split(',');
    var ordenaLista = lista.map(Number)
    ordenado(ordenaLista);
    document.getElementById("listaOrdenada").textContent = ordenaLista
    if (lista.includes(document.getElementById("valorFoco").value)){
        buscaBinaria(lista);
        meioLista +=1
        document.getElementById("posicaoVF").textContent = meioLista
    }
    else{
        document.getElementById("posicaoVF").textContent = "Digite um valor que pertença a lista anterior!"
    }
}



//SOLUÇÃO INTERNET:
// function ordenar(){
//     var lista = document.getElementById("lista").value;
//     lista = lista.split(',');
//     lista = lista.map(Number)
//     len = lista.length
//     var para = false;
//     do{
//         for(var i = 0; i < len; i++){
//             for(var j = 0; j < len; i++){
//                 if(lista[j] > lista[j+1]){
//                     var auxiliar = array[j];
//                     lista[j] = lista[j+1];
//                     lista[j+1] = auxiliar;
//                     para = true
//                 }
//             }
//         }
//     } while (para)
//     return lista;
// }