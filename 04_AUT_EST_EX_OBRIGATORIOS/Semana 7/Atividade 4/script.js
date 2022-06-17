function comprar(){
    pessoas = document.getElementById("pessoas").value;
    if(pessoas >= 50 && document.getElementById("periodo").value == "Diurno"){
        var total = (200 - (200*40/100))* pessoas;
        document.getElementById("total").textContent = "Total: R$ " + total + ",00";
    };
    if(pessoas >= 50 && document.getElementById("periodo").value == "Noturno"){
        var total = (100 - (100*20/100)) * pessoas;
        document.getElementById("total").textContent = "Total: R$ " + total + ",00";
    }
    if(pessoas < 50 && document.getElementById("periodo").value == "Diurno"){
        var total = 200 * pessoas;
        document.getElementById("total").textContent = "Total: R$ " + total + ",00";
    }
    if(pessoas < 50 && document.getElementById("periodo").value == "Noturno"){
        var total = 100 * pessoas;
        document.getElementById("total").textContent = "Total: R$ " + total + ",00";
    }
}