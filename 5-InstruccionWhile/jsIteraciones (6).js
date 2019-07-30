function mostrar()
{

	var contador=0;
	var acumulador;
	var suma=0;

	while(contador<5){
	 
	acumulador=parseInt(prompt ("Ingrese un numero"))
	
	suma=suma+acumulador

	contador++;

	}


	

	



document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN