/*Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez),
 faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média.
 Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média. 
 
 (DESAFIO: Incluir também uma opção de "Recuperação" para médias de 5 a 7)
 */


programa {
  funcao inicio() {
    
    //Declarar variáveis

    real notaUm, notaDois, notaTres
    real mediaFinal, somaNotas
    inteiro mediaAprovacao = 7, mediaRecuperacao = 5, quantidadeNotas = 3

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

    se(mediaFinal >= mediaAprovacao ){

     escreva("\nEstudante aprovado!\n")

   }senao se (mediaFinal < mediaRecuperacao){
   
     escreva("\nEstudante reprovado!\n")

  
   }senao{

     escreva("\nRecuperação!\n")



   }
 


 
 
  }
}
