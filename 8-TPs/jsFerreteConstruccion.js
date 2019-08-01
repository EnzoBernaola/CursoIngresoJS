/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  var largo=parseInt(document.getElementById("Largo").value);
  var ancho=parseInt(document.getElementById("Ancho").value);
  var perimetro=largo + largo + ancho + ancho;
  alambre=perimetro*3;

  alert("se necesitan comprar "+ alambre + " metros de alambre");
}
function Circulo () 
{
	var radio=parseInt(document.getElementById("Radio").value);
    var perimetro = 2 * Math.PI*radio;
    var alambre= perimetro *3 ;
    
    alert("Se necesitan comprar "+alambre.toFixed(2) + " metros de alambre");

}
function Materiales () 
{   
    var superficie;
    var Bcal;
    var Bcem;
	var largo=parseInt(document.getElementById("Largo").value);
    var ancho=parseInt(document.getElementById("Ancho").value);
    superficie = largo * ancho;
    Bcem= 2 * superficie;
    Bcal= 3 * superficie;

    alert ("Para una superficie de " + superficie + "m2 necesito " + Bcem + ("Bolsas de cemento y "+ Bcal(" de cal")));
    

  alert("se necesitan comprar "+ alambre + " metros de alambre");









}