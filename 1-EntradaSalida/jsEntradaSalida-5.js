/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var name;
    var edad;

name = document.getElementById("elNombre").value;

edad = document.getElementById("laEdad").value;
	

    alert ("usted se llama "  + name + " y tiene "   + edad + " años");


}

