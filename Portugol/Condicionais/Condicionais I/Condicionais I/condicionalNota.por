/*Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez),
 faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média.
 Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média. */


programa {
  funcao inicio() {
    
    //Declarar variáveis

    real notaUm, notaDois, notaTres
    real mediaFinal, somaNotas
    inteiro mediaNota = 7, quantidadeNotas = 3

    //Entrada de dados
    
    escreva("Digite a primeira nota: ")
    leia(notaUm)

    escreva("Digite a segunda nota: ")
    leia(notaDois)

    escreva("Digite a terceira nota: ")
    leia(notaTres)
    
    //Calculos

    somaNotas = notaUm + notaDois + notaTres
    mediaFinal = somaNotas / quantidadeNotas
    
    //Saída de dados

    escreva("\nMédia do estudante: ", mediaFinal)

    se(mediaFinal >= mediaNota ){
    escreva("\nEstudante aprovado!")

  }senao{ escreva("\nEstudante reprovado!")}
 
 
 
  }
}
