num1 = prompt('Digite o primeiro número: ');
op = prompt('Digite a operação (soma ou subtracao)');
num2 = prompt('Digite o número dois: ');

function operacao(num1, num2, opera) {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    resultado = 0;


    if (opera == 'soma') {

        resultado = num1 + num2;

    }else if (opera == 'subtracao') {

        resultado = num1 - num2;

    }
    
    return resultado;
}

document.write ('O resultado da operacao é: '+ operacao(num1, num2, op));


