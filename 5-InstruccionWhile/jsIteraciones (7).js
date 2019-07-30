function mostrar()
{
	var acumulador;
	var suma=0;
	var contador;
	contador=parseInt(prompt("Ingrese la cantidad de numeros a sumar"));
	document.getElementById('promedio').value=suma/contador
	do { 


	acumulador=parseInt(prompt ("Ingrese un numero"))
	
	suma=suma+acumulador
	

	contador--



	}

	while(contador>0) 

	document.getElementById('suma').value=suma;
	





}//FIN DE LA FUNCIÓN