function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var acumulador;
	var suma;
	var seguir;
	var contador=0;
	
    do{

	acumulador=parseInt(prompt ("Ingrese un numero"))

	
	suma=suma+acumulador

	seguir=prompt("Quiere ingresar otro numero?")

	contador++
	
	} while (seguir=="si");

	document.getElementById('suma').value=suma;

	document.getElementById('promedio').value=acumulador/contador
	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN