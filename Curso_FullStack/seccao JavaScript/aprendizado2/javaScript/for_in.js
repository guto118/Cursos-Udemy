/*var listaConvidados = ['Jorge', 'Jamilton', 'José', 'Ana', 'Maria'  ];
console.log(listaConvidados);
*/

var listaConvidados = Array();
listaConvidados['a'] = 'Jorge'
listaConvidados[10] = 'Jamilton'
listaConvidados['zebra'] = 'José'
listaConvidados[-1] = 'Ana'
listaConvidados['a'] = 'Maria'


for (var x in listaConvidados) {
    console.log('indice:'+ x + ' valor:'+listaConvidados[x])
}