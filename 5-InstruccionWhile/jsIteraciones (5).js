function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo !="f" && sexo !="m"){

alert("el sexo es invalido");

sexo=prompt("ingrese un sexo correcto");

}


document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN