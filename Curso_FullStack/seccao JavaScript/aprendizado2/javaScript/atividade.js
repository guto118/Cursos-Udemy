var lista_frutas = Array();

lista_frutas[0] = 'Banana';
lista_frutas[1] = 'Maçã';
lista_frutas[2] = 'Morango';
lista_frutas[3] = 'Uva';

var quant_array = lista_frutas.length;

for (x = 0; x < quant_array; x++) {
    document.writeln(lista_frutas[x] + '<br>')
}


document.writeln('<br><br><br>')
document.writeln('<hr><hr>')
document.writeln('<br><br><br>')

var i = 1

while( i <= 10) {
    var j = 1
    while( j <= 10) {
        document.writeln(i + ' x ' + j + ' = ' + (i * j + '<br>') )
        j++
    }
    i++
    document.writeln('<hr>')
}