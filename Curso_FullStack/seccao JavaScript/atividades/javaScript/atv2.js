/*
    Efetuar o calculo de imc

    . Deve solicitar o nome
    . Em seguida solicitar a altura em cm
    . Informar o peso
    . Converter a altura de cm para metros
    .imc <- peso(kilos)/altura^2


    O imc se classifica em: 
    imc < 16 <- Baixo peso muito grave
    imc entre 16 e 16,99 <- Baixo peso grave
    imc entre 17 e 18,49 <- Baixo peso
    imc entre 18,50 e 24,99 <- Peso normal
    imc entre 25 e 29,99 <- Sobrepeso
    imc entre 30 e 34,99 <- Obsidade grau 1
    imc entre 35 e 39,99 <- Obsidade grau 2
    imc maior que 40 <- Obsidade grau 3

    Saída: 
        <Nome> possui índice de massa corporal igual a <m>, sendo classificado como: <classificacao>
*/

var nome = prompt('Digite seu nome: ')
var altura = prompt('Digite sua altura (cm): ')
var peso = prompt('Digite seu peso(kg): ')
var siuacao

altura /= 100
peso = parseFloat(peso)

var imc = peso / (altura^2)

if (imc < 16) {
    situacao = 'Baixo peso muito grave'
} else if((imc >= 16)&&(imc <= 16.99)){
    situacao = 'Baixo peso grave'
}else if((imc >= 17)&&(imc <=18.49)){
    situacao = 'Baixo peso'
}else if((imc >= 18.5)&&( imc <=24.99 )){
    situacao = 'Peso normal'
}else if((imc >= 25)&&(imc <= 29.99)) {
    situacao = 'Sobre peso'
}else if((imc >= 30)&&(imc <= 34.99)){
    situacao = 'Obesidade grau 1'
}else if((imc >= 35)&&(imc <= 39.99)) {
    situacao = 'Obesidade grau 2'
}else if(imc >= 40) {
    situacao = 'Obesidade grau 3'
}

document.write(nome + ' possui índice de massa corporal igual a '+ imc+ ' sendo classificado como: ' + situacao)


