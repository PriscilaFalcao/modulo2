function mostrar(){
    var array = document.getElementById("intervalo").value;
    var array1 = array.split(",")
    var arrayPrimos = [];
    var num1 = 0;
    var num2 = 0;
    if(array1[0] < array1[1]){
        num1 = array1[0];
        num2 = array1[1];
    };
    if(array1[1] < array1[0]){
        num1 = array1[1];
        num2 = array1[0];
    };
    console.log(num1);
    console.log(num2);
    for(var i = num1; i <= num2; i++){
        var somador = 0; 
        for(var j = 1; j <= i; j++){
            var primo = i%j
            if(primo == 0){
                somador += 1
            };
        };
        if(somador == 2){
            arrayPrimos.push(i);
        };
    };
    document.getElementById("primos").innerHTML = arrayPrimos
};