var altura = window.screen.availHeight
var largura = window.screen.availWidth

document.writeln('A altura do navegador é: ' + altura + '<br>')
document.writeln('A largura é de : ' + largura + '<br>')

if (largura < 500) {
    document.writeln('Lógica para impressão do menu versão mobile')
} else {
    document.writeln('Lógica para impressão do menu versão web')
}