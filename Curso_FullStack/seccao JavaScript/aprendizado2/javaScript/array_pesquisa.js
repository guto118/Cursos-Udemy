var lista_frutas = Array();

lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maça';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva';


//serve para buscar o elemento
console.log(lista_frutas.indexOf('Morango'));


var auxiliar = lista_frutas.indexOf('Morango');

if ( auxiliar === -1 ) {
    console.log('Elemento não existe');
}else {
    console.log('O elemento existe e está na posição: ' + auxiliar );
}