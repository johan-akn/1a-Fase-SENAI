/* Em uma m�quina de cassino, ao jogar o jogador sempre ganha.
 Em cada 'partida' o jogador pode formar sequ�ncias de frutas que rendem valores em dinheiro.
 Criar um programa que pergunte ao jogador as tr�s frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

   CEREJA - CEREJA - CEREJA -> R$100
   LARANJA - LARANJA - LARANJA -> R$80
   CEREJA - LARANJA - CEREJA -> R$50
   LARANJA - CEREJA - LARANJA -> R$25*/



programa {
  funcao inicio() {

    //Declarar vari�veis

    cadeia frutaUm, frutaDois, frutaTres
    inteiro combinacaoUm = 100, combinacaoDois = 80, combinacaoTres = 50, combinacaoQuatro = 25

    //Entrada de dados

    escreva("Qual a primeira fruta? (em CAPS) ")
    leia(frutaUm)

    escreva("Qual a segunda fruta? (em CAPS) ")
    leia(frutaDois)

    escreva("Qual a terceira fruta? (em CAPS) ")
    leia(frutaTres)


    //Sa�da de dados


    se(frutaUm == "CEREJA" e frutaDois == "CEREJA" e frutaTres == "CEREJA"){

      escreva("\nGanho: R$", combinacaoUm, "\n")



    }senao se(frutaUm == "LARANJA" e frutaDois == "LARANJA" e frutaTres == "LARANJA"){

      escreva("\nGanho: R$", combinacaoDois, "\n")



    }senao se(frutaUm == "CEREJA" e frutaDois == "LARANJA" e frutaTres == "CEREJA"){

      escreva("\nGanho: R$", combinacaoTres, "\n")



    }senao se(frutaUm == "LARANJA" e frutaDois == "CEREJA" e frutaTres == "LARANJA"){

      escreva("\nGanho: R$", combinacaoQuatro, "\n")

    }senao{

      escreva("\nCombina��o inv�lida!\n")

    }
  }
}
