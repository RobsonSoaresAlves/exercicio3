function pOi(){

    var num =parseInt(document.getElementById("Num").value);

    var ParOuImpar =document.getElementById("ParOuImpar");

    if(num % 2 ==0){
        ParOuImpar.innerHTML= "par";
    }

    else{
        ParOuImpar.innerHTML="impar";
    }
}