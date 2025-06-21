//todos são formas de declarar arrays no javaScript

// var lista_frutas = Array();
/*
lista_frutas[1] = 'Banana' ;
lista_frutas[2] = 'Maçã' ;
lista_frutas[3] = 'Morango' ;
lista_frutas[4] = 'Uva' ;
*/
/*
var lista_frutas = [];

lista_frutas[1] = 'Banana' ;
lista_frutas[2] = 'Maçã' ;
lista_frutas['x'] = 'Morango' ;
lista_frutas[4] = 'Uva' ;

*/


// essas próximas não é possível escolher o índice
//eles são colocados padronizadamente e começam por 0


// var lista_frutas = Array('Banana', 'Maçã', 'Morango', 'Uva');

//var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva'];



/*
 O atributo lenght está disponível para os os array(S) e para as strings 
 o length vai funcionar no array somente se os elementos forem anexados forem indexados por valores numéricos sequenciais sem intervalo e que iniciem de 0
*/
var lista_frutas = Array();

lista_frutas[1] = 'Banana' ;
lista_frutas[2] = 'Maçã' ;
lista_frutas['x'] = 'Morango' ;
lista_frutas[4] = 'Uva' ;


console.log(lista_frutas);
document.writeln(lista_frutas.length)