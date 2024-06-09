

let valor1, valor2;

valor1 = 20;
valor2 = 30;

//Mayor que valor2
document.write(valor1 > valor2 );
document.write('<br>');
//Menor que valor2
document.write(valor1 < valor2 );
document.write('<br>');
//Igual que valor2
document.write(valor1 == valor2);
document.write('<br>');
//Diferente a valor2
document.write(valor1 != valor2);
document.write('<br>');
 //Menor o Igual a valor2
document.write(valor1 <= valor2);
document.write('<br>');
//Mayor o Igual a valor2
document.write(valor1 >= valor2);
document.write('<br>');


//Redondear con Math.round() mayor a .5
var precio = Math.round(399.53);
document.write('Precio redondeado: ',precio);
document.write('<br>');

//Redondea para arriba el decimal a entero 399.1-399.9 == 400
var precio = Math.ceil(399.99);
document.write('Precio redondeado: ',precio);
document.write('<br>');

//Redondea para abajo el decimal a entero 399.1-399.9 == 400
var precio = Math.floor(399.99);
document.write('Precio redondeado: ',precio);
document.write('<br>');

//Calcular el seno de 45° es con Math.sin()
var seno = Math.sin(45);
document.write('Seno de 45° : ',seno);
document.write('<br>');


//Calcular el exponencial
var expp = Math.exp(2);
document.write('Exponencial de 2 es: ',expp);
document.write('<br>');

//Calcular el absoluto
var abss = Math.abs(-10);
document.write('Exponencial de 2 es: ',abss);
document.write('<br>');

//Calcular maximo de una secuencia
var maximo = Math.max(10,11,12,13,14);
document.write('mayor valor es: ', maximo);
document.write('<br>');

//Calcular minimo de una secuencia
var minimoo = Math.min(10,11,12,13,14);
document.write('mayor valor es: ', minimoo);
document.write('<br>');

//Numero aleatorio
var aleatorio = Math.round(Math.random()*10);
document.write('valor aleatorio es: ', aleatorio);
document.write('<br>');


//Raiz cuadrada
var raizz = Math.sqrt(81);
document.write('Raiz: ', raizz);
document.write('<br>');

//Exponencial
var exponente = Math.pow(2,2);
document.write('valor de 4 a la segunda potencia es: ', exponente);
document.write('<br>');