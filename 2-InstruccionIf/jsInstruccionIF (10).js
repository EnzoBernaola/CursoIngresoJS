function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var random = Math.floor(Math.random()*10+1);

	if (random>=9 && random <=10){
	
	alert("Excelente");
	}
	
	else if (random>=4){

	alert ("Aprobo");
	}

	else{

	alert ("Vamos, la pròxima se puede");

	}
	

}//FIN DE LA FUNCIÓN