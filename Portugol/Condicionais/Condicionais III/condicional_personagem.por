/*Em um jogo o seu personagem tem 100 de HP (vida).
 Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem).
 Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over".
 Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50,
 mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!"*/



programa {
  funcao inicio() {

    //Declarar variáveis

    inteiro vidaPersonagem = 100
    inteiro danoRecebido
    inteiro relZero = 0, relVinte = 20, relCinquenta = 50


    //Entrada de dados

    escreva("Digite o dano recebido: ")
    leia(danoRecebido)


    //Cálculo

    
    vidaPersonagem = vidaPersonagem - danoRecebido
  

    //Saída de dados

    escreva("\nVida final: ", vidaPersonagem, "\n")

     se(vidaPersonagem <= relZero){

      escreva("\nGame over.\n")


    }senao se(vidaPersonagem <= relVinte){

      escreva("\nDano crítico, quase sem vida.\n")


    }senao se(vidaPersonagem <= relCinquenta){

      escreva("\nDano moderado, vida estável.\n")

    }senao{

      escreva("\nDano leve, vida boa.\n")
    }
    
  }
}
