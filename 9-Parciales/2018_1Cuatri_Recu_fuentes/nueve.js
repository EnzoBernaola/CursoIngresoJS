function mostrar()
{
    var Nanimal;
    var peso;
    var temph;
    var tempPares=0;
    var flag = 0;
    var pesoMax=0;
    var nombreMax;
    var tempMax;
    var animales0=0;
    var pesoMin;
    var seguir;
    var contador=0;
    var pesoMax0=0;
    var pesoMin0=0;
    var promediopeso=0;

do{
    Nanimal=prompt("Ingrese el nombre de un animal");
    peso=parseInt(prompt("Ingrese el peso del animal"));
    temph=parseInt(prompt("ingrese una temperatura entre -30 y 30"));

    while(!(temph>=-30&&temph<=30)){

    temph=prompt("Ingrese una temperatura correcta");
    }
    
    if(temph%2==0){

    tempPares++
    }
    if(peso>pesoMax||flag==0){
    pesoMax=peso
    nombreMax=Nanimal;
    tempMax=temph;
    }
    if(temph<0){
    
    animales0++

    }
    if(temph<0)
    pesoMax0=peso;
     
    pesoMin0=peso;
    }


    
    

    seguir=prompt("Quiere ingresar otro animal?");

    promediopeso=promediopeso+peso
    contador++


}while(seguir=="si");
proediopeso=promediopeso/contador;




document.write("la cantidad de temperaturas pares es "+tempPares + "<br>");
document.write("El nombre del animal mas pesado es "+nombreMax + " y la temperatura de este es"+ tempMax+ "<br>");
document.write("la cantidad de animales que viven a menos de 0 grados es "+ animales0 + "<br>");
document.write("el promedio del peso de todos los animales es " + promediopeso+ "<br>");
document.write("El peso maximo de las temperaturas bajo cero es " + pesoMax0 + " y el minimo es " + pesoMin0);

}
