/*Crie um programa que pe�a ao usu�rio para digitar tr�s notas individualmente (uma por vez),
 fa�a a m�dia e caso a m�dia seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a m�dia.
 Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a m�dia. 
 
 (DESAFIO: Incluir tamb�m uma op��o de "Recupera��o" para m�dias de 5 a 7)
 */


programa {
  funcao inicio() {
    
    //Declarar vari�veis

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
    
    //Sa�da de dados

    escreva("\nM�dia do estudante: ", mediaFinal)

    se(mediaFinal >= mediaAprovacao ){

     escreva("\nEstudante aprovado!\n")

   }senao se (mediaFinal < mediaRecuperacao){
   
     escreva("\nEstudante reprovado!\n")

  
   }senao{

     escreva("\nRecupera��o!\n")



   }
 


 
 
  }
}
