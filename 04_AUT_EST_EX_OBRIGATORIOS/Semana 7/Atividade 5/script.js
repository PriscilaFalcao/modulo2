
var alunos = []
var j = 0
function addAluno(){
    console.log(j)
    var addAluno ={
        nome: document.createElement("input"),
        notaP: document.createElement("input"),
        notaT: document.createElement("input")
    }

    //Seta os atributos para os objetos criados
    addAluno.nome.setAttribute("type", "text");
    addAluno.nome.setAttribute("id", "aluno" + j);
    addAluno.nome.setAttribute("class", "addAluno");
    addAluno.notaP.setAttribute("type", "number");
    addAluno.notaP.setAttribute("id", "notaP" + j);
    addAluno.notaP.setAttribute("class", "addAluno");
    addAluno.notaT.setAttribute("type", "number");
    addAluno.notaT.setAttribute("id", "notaT" + j);
    addAluno.notaT.setAttribute("class", "addAluno");

    //Add no front os objetos alunos criados
    document.getElementById("alunosDiv").innerHTML = "<p>Nome:</p>"
    document.getElementById("alunosDiv").appendChild(addAluno.nome);
    document.getElementById("alunosDiv").appendChild(addAluno.notaP);
    document.getElementById("alunosDiv").appendChild(addAluno.notaT);

    j++;
}