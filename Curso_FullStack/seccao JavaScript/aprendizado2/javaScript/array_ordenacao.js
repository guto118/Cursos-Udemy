/*
var lista_frutas = Array();

lista_frutas[0] = 'Maçã' ;
lista_frutas[1] = 'Uva' ;
lista_frutas[2] = 'Banana' ;
lista_frutas[3] = 'Morango' ;

//acerta os arrays pela ordem das palavras
console.log(lista_frutas.sort());
*/


var lista_numeros = Array();

lista_numeros[0] = 12 ;
lista_numeros[1] = 40 ;
lista_numeros[2] = 3 ;
lista_numeros[3] = 7 ;
lista_numeros[4] = 19 ;
lista_numeros[5] = 1 ;


// para orgenizar corretamente números
console.log(lista_numeros.sort(ordenaNumeros));

function ordenaNumeros(a, b){
    return a - b;
    // valor < 0 então a ordenado antes de b
    // valor > 0 então b será ordenado antes de a
    // valor == a ordem é mantida
}