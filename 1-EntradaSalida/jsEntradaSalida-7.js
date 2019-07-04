/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

     var n1;
    
    var n2;

    var suma

n1= parseInt(document.getElementById("numeroUno").value); // parseInt se utiliza para transformar cadenas en nùmeros

n2= parseInt(document.getElementById("numeroDos").value);

suma = n1 + n2

alert ("la suma es " + suma);

	
}

function restar()
{ var n1;
    
    var n2;

    var resta

n1= parseInt(document.getElementById("numeroUno").value); // parseInt se utiliza para transformar cadenas en nùmeros

n2= parseInt(document.getElementById("numeroDos").value);

resta = n1 - n2

alert ("la resta es " + resta);

	
}

function multiplicar()

{ 
     var n1;
    
     var n2;

    var multiplicaciòn

n1= parseInt(document.getElementById("numeroUno").value); // parseInt se utiliza para transformar cadenas en nùmeros

n2= parseInt(document.getElementById("numeroDos").value);

multiplicaciòn = n1 * n2

alert ("la multiplicaciòn es " + multiplicaciòn);

	
}

function dividir()
{
     var n1;
    
    var n2;

    var division

n1= parseInt(document.getElementById("numeroUno").value); // parseInt se utiliza para transformar cadenas en nùmeros

n2= parseInt(document.getElementById("numeroDos").value);

division = n1 / n2

alert ("la division es " + division);

	
}

