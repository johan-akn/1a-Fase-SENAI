/*7) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2.
 Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2,
  e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas.
  Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma.
 Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!".
 (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).*/


 //Declarar variáveis
 let cartaUm, cartaDois, valorInvalido = false
 let somaUm = 0, somaDois = 0
 let cont = 1

 while(cont<6){

    alert('Rodada ' + cont)
    cartaUm = Number(prompt('Vez do Jogador 1 \nCarta:'))
    cartaDois = Number(prompt('Vez do Jogador 2 \nCarta:'))

    if(cartaUm > 0 && cartaUm < 14 && cartaDois > 0 && cartaDois < 14){
        somaUm += cartaUm
        somaDois += cartaDois
    }
    else{
        valorInvalido = true
        break
    }

    cont++
}

if(valorInvalido == true){

    alert('Valor digitado é inválido!')

}
else if(somaUm > somaDois){
    alert('Jogador 1 venceu! \nSoma das cartas: ' + somaUm)
}
else if(somaDois > somaUm){
    alert('Jogador 2 venceu! \nSoma das cartas: ' + somaDois)
}
else{
    alert('O jogo empatou!')
}