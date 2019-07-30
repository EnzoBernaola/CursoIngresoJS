function mostrar()
{

	
	var acumulador;
	var suma=0;
	parseInt(prompt("Ingrese la cantidad de numeros a sumar"))=contador;


	while(contador){
	acumulador=parseInt(prompt ("Ingrese un numero"))
	
	suma=suma+acumulador

	contador++;


	}

	document.getElementById('suma').value=suma;
    document.getElementById('promedio').value=suma/contador;
	



}//FIN DE LA FUNCIÓN