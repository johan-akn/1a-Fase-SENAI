/*Em um jogo de tabuleiro com combinação de moeda e dado, temos possibilidades de cara ou coroa (moeda) e números de 1 a 6 (dado).
 Criar um programa que pergunte ao usuário qual foi o resultado da moeda e do dado, em seguida determinar o que acontece na rodada.
 Caso o resultado da moeda tenha sido cara, o jogador perde a vez,
 independente do dado. Mostrar mensagem de "Você perdeu sua vez!". Caso a moeda tenha sido coroa, o jogador pulará
 o número de casas no tabuleiro que sair na jogada do dado.
  Mostrar mensagens "Avance X casas no tabuleiro!", sendo X o número que saiu no dado.*/


 //Declarar variáveis
 let resultadoMoeda, resultadoDado
 let mediaUm = 1, mediaSeis = 6

 
 //Entrada de dados
 resultadoMoeda = prompt('Qual o lado da moeda? (cara ou coroa) ')

 if(resultadoMoeda == 'cara'){

    alert('Você perdeu sua vez!')

 }
 else if(resultadoMoeda == 'coroa'){

    resultadoDado = prompt('Qual o resultado do dado? (1 a 6) ')

    if(resultadoDado >= mediaUm && resultadoDado <= mediaSeis){
    alert('Você avançou ' + resultadoDado + ' casas no tabuleiro!')

    }
    else{

        alert('Resultado inválido!')
   
 }}
 else{

    alert('Resultado inválido!')
 }
