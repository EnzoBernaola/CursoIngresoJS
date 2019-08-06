function mostrar()
{
   var marca;
   var peso;
   var temp;
   var seguir;
   var tempares=0;
   var pesoMax=0;
   var flag=0;
   var marcaMax;
   var produCero=0;
   var pesoMin;
   var flag2=0;
   var contador=0;
   var promediopeso=0;



   do{
    marca=prompt("Ingrese la marca del producto");

    peso=parseInt(prompt("Ingrese el peso"));

    while(!(peso>0&&peso<=100)){

    peso=prompt("Ingrese un peso correcto");

    }
    temp=prompt("Ingrese la temperatura de almacenamiento");
    while(!(temp>=-30&&temp<=30)){
      
    temp=prompt("ingrese una temperatura entre -30 y 30");
    } 

    
    if(temp%2==0){

    tempares++

    }
    if(peso>pesoMax||flag==0){
    pesoMax=peso;
    flag=1;
    marcaMax=marca;
    }
    if(temp<0){
    produCero++;
    }
    if(peso>pesoMax){

    pesoMax=peso;

    }  
    if(peso<pesoMin||flag2==0){
    
    pesoMin=peso;
    flag2=1;

    }  
    promediopeso=promediopeso+peso
    contador++
    seguir=prompt("Quiere ingresar otro producto?")

    

    
   }while(seguir=="si");

   promediopeso=promediopeso/contador;
   

   document.write("La cantidad de temperaturas pares es "+ tempares + "<br>");
   document.write("la marca del producto mas pesado es " + marcaMax + "<br>");
   document.write("la cantidad de productos que se conservan a menos de 0 es " + produCero + "<br>");
   document.write("el promedio del peso de todos los productos es " + promediopeso + "<br>");
   document.write("El peso maximo es "+ pesoMax + " y el peso minimo es "+ pesoMin);







}
