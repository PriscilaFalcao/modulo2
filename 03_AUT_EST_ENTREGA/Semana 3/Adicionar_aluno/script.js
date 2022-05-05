var listaAlunos = [];
var Aluno = {
    nomeAluno: "",
    periodoAluno: 0
};

function adicionarAlunoLista(){
    var nome = document.getElementById("nomealuno").value;
    var periodo = document.getElementById("periodoaluno").value;
    var a1 = Object.create(Aluno);
    a1.nomeAluno = nome;
    a1.periodoAluno = periodo;
    listaAlunos.push(a1);
};

function mostraAlunos(){
    var listaAlunosHTML = "";
    for (var i=0; i < listaAlunos.length; i++){
        listaAlunos += listaAlunos[i].nomeAluno + " - " + listaAlunos + "<br>";
    }
    document.getElementById("saidaalunos").innerHTML = listaAlunosHTML
}