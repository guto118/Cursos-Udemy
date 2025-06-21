
//o forEach só funciona com valores numéricos inciados de 0

var listaFuncionarios = ["Viviane", "Rosângela", "Miguel", "Lucas", "Fernanda"];

console.log(listaFuncionarios);
document.writeln(listaFuncionarios[3] + "<br>");

var f = function (valor, indice) {
  console.log(indice + "  " + valor);
};

listaFuncionarios.forEach(f);

/*
listaFuncionarios.forEach(function(valor, indice,array){
    console.log('indice: '+ indice + ' | valor: '+ valor)

    if( valor == 'Lucas'){
        array[indice] = 'Um novo valor'
    }

    
})
document.writeln(listaFuncionarios[3])
console.log(listaFuncionarios)
*/
