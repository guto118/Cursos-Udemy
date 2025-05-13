/*
        Objetivo: 
            Criar uma aplicação capaz de identificar a faixa etária com base na idade informada pelo usuário.


            .idade >= 0 e < 15 <- Criança

            .idade >= 15 e < 30 <- Jovem

            .idade >= 30 e < 60 <- Adulto

            .idade >= 60 <- Idoso

    */

            var idade = prompt('Digite sua idade: ')
            
            if ((idade >= 0) && (idade < 15)) {
                document.write('Você é uma criança')

            }else if((idade >= 15)&&(idade < 30)){
                document.write('Você é jovem')

            }else if ((idade >= 30)&&(idade < 60)) {
                document.write('Você é adulto')

            }else if(idade > 60) {
                document.write('Você é um idoso')
            }else {
                document.write('Idade informada está incorreta!!')
            }

