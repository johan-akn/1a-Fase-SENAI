/*6) Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas.
 Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos).
 Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”,
 sendo X o número a mais de hóspedes que ficariam sem leito.
 (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres).*/

 //Declarar variáveis
 let movimentacaoPessoas, totalLeitos = 130
 let leitosDisponiveis, excessoLeitos, ocupaçãoExcesso

 leitosDisponiveis = (totalLeitos / 2) - 25

 do{
    
    movimentacaoPessoas = Number(prompt('Qual foi a movimentação de pessoas de hoje? \n\nLeitos vagos: ' + leitosDisponiveis))
    
    leitosDisponiveis -= movimentacaoPessoas

    switch(true){
        
     case leitosDisponiveis > 40:
        alert('O limite de leitos disponíveis é 40!')
        leitosDisponiveis += movimentacaoPessoas
        break;
   }


 }while(leitosDisponiveis >= 0)

 excessoLeitos = leitosDisponiveis * -1

 alert('Não é possível pois ultrapassa a capacidade em ' + excessoLeitos + ' leitos.')
