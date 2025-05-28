function calcular (tipo, valor){
    
    if (tipo === 'acao'){
        if ( valor === 'c' ) {
            document.getElementById('resultado').value = 0;
        }
        if (valor === '+'|| valor === '-'||valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor;
        }
        if (valor === '=') {
            var valor_campo = eval(document.getElementById('resultado').value);
            
            document.getElementById('resultado').value = valor_campo;

            //eval -> faz com que o navegador interprete essa informação como uma operação matemática e execute a fórmula 
        }

    }else if (tipo === 'valor') {
        document.getElementById('resultado').value +=  valor;
    }
}