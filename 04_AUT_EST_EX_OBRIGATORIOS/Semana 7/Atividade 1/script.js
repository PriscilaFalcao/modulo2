var v2 = 0
var v3 = Number(document.getElementById("v1").value);

function adiciona(){
    var v1 = Number(document.getElementById("v1").value);
    if(v2 > v1){
        v2 = v2 + 1
        document.getElementById("total").textContent = "Total: " + v2};
        console.log(v2)
    if(v2 < v1){
        v2 = v1 + 1 
        document.getElementById("total").textContent = "Total: " + v2};
};


function subtrai(){
    var v1 = Number(document.getElementById("v1").value);
    if(v3 < v1){
        v3 = v3 - 1
        document.getElementById("total").textContent = "Total: " + v3};
        console.log(v3)
    if(v3 > v1){
        v3 = v1 - 1 
        document.getElementById("total").textContent = "Total: " + v3};
};