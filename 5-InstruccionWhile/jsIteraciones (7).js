function mostrar()
{
	var acumulador;
	var suma;
	var seguir;
	var contador=0;
	
     do{

	acumulador=parseInt(prompt ("Ingrese un numero"))

	suma=suma+acumulador

	seguir=prompt("Quiere ingresar otro numero?")


	while(seguir!=="si" && seguir!=="no"){

	seguir=prompt("Ingrese s para continuar o n para finalizar")
	}


	contador++
	



	} while (seguir=="si");

	document.getElementById('suma').value=suma;

	document.getElementById('promedio').value=acumulador/contado




}//FIN DE LA FUNCIÓN