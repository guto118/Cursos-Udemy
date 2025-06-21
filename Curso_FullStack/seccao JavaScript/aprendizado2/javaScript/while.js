var x = 1;

document.writeln('Início <br>')

while (x <= 10) {
    

    /*if(x == 5) {
        //para a instrução quando o valor for 5
        break;
    }*/
    x++ ;
    if (x === 5) {
        //o continue que estar depois do incremento para não dar erro
        continue;
    }
    document.writeln(x + '<br>')
    
}

document.writeln('fim <br>')