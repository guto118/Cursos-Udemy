


//setTimeout (acao, tempo em milissegundos)
//clearTimeout()

//setInterval (acao, tempo em milissegundos)
//clearInterval()

//setTimeout(function(){document.writeln('Teste')}, 2000)

var i = 5

var x = setInterval(function() {
    document.writeln(i + '<br>')
     i--

     if (i === 0) {
        //window.location.reload()
        clearInterval(x)
     }
    }, 1000)


