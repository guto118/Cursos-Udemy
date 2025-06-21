var objetos = Array('Cadeira', 'Impressora', 'Garfo');


function pegarValor() {
    var texto = document.getElementById('texto').value;
    var validacao = objetos.indexOf(texto);


    if( texto === '') {
        //se o input estiver vazio
        alert('Informe um valor válido');
    }else {
        if (validacao > -1 ) {
            //se o ojeto já estiver no array
            alert('Objeto já foi adicionado')
        }else {
            //incluindo se não estiver vazio
            objetos.push(texto);
            
        }
    }
    document.getElementById('texto').value = '';
    console.log(objetos);
    
}

function ordenaItens() {
    console.log(objetos.sort());
}