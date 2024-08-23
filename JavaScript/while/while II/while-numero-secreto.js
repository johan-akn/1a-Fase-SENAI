/*8) Criar um jogo de adivinhação.
 O usuário deve digitar um número entre 0 e 100 (número secreto).
 Em seguida deve ser perguntado qual número imagina-se que seja o número secreto.
 A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior".
 Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas. (DESAFIO: Gerar um número aleatório utilizando Math.random e Math.floor)*/

 //Declarar variáveis
 let numeroSecreto, numeroDigitado, qntdTentativas = 0

 numeroSecreto = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

 while(numeroDigitado != numeroSecreto){

    numeroDigitado = Number(prompt('Digite um número'))

    if(numeroDigitado > numeroSecreto){

        alert('O número digitado é maior')
    }
    else if(numeroDigitado < numeroSecreto){

        alert('O número digitado é menor')
    }

    qntdTentativas++
 }

 alert('Parabéns! O número secreto era ' + numeroSecreto + '\nTentativas: ' + qntdTentativas)