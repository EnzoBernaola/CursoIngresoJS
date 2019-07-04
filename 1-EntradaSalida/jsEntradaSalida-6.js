/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

