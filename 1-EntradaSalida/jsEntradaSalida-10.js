/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{ 
      var sueldo;

    var aumento;

    var resultado;


    sueldo =parseFloat(document.getElementById("importe").value);

    descuento =sueldo *.25
    
    resultado = sueldo - descuento

    document.getElementById("resultado").value = resultado;
    
	
}
