function mostrar()
{

    var nota;
    var sexo;
    var promedio;
    var suma=0
    var contador=0;
    var numMax;
    var numMin;

    while(contador<5){
    var nota=parseInt(prompt("Ingrese su nota"))
    while(nota<0||nota>10){

    nota=parseInt(prompt("No es una nota valida,ingrese una nota correcta"))
    }
    var sexo=prompt("Ingrese su sexo")
    while(sexo!='f' && sexo!='m'){

    sexo=prompt("Ingrese un sexo correcto")
    }

    suma =suma+nota;
    promedio=suma/5


    contador++

    






    }

   alert("El promedio es "+promedio);
   



}



















