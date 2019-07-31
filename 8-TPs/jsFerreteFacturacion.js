/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/





function Sumar () 
{ 
    var suma;
    var P1=parseInt(document.getElementById("PrecioUno").value);

    var P2=parseInt(document.getElementById("PrecioDos").value);

    var P3=parseInt(document.getElementById("PrecioTres").value);

    suma= P1 + P2 + P3 


    alert("la suma de los precios es "+suma);
    
    
}
function Promedio () 
{
    var promedio;
    var P1=parseInt(document.getElementById("PrecioUno").value);

    var P2=parseInt(document.getElementById("PrecioDos").value);

    var P3=parseInt(document.getElementById("PrecioTres").value);

    promedio=(P1+P2+P3)/3
    alert("el promedio es "+ promedio);



}
function PrecioFinal () 
{
    var P;
    var iva;
    var P1=parseInt(document.getElementById("PrecioUno").value);

    var P2=parseInt(document.getElementById("PrecioDos").value);

    var P3=parseInt(document.getElementById("PrecioTres").value);
    var iva=(P1+P2+P3)*.21
    var P=P1+P2+P3

    PFinal=P+iva

    alert("el precio final es "+ PFinal);
	
}