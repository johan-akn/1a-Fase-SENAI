
/*Criar um programa para calcular a densidade demogr�fica (habitantes por quil�metro quadrado) de uma regi�o.
 Sendo, densidade igual a popula��o (total de habitantes) dividida pela �rea (quil�metros quadrados).
 Mostrar mensagens para densidade alta (maior ou igual a 100) e densidade baixa (menor que 100).*/


programa {
  funcao inicio() {
    

    //Declarar vari�veis

    inteiro quantidadeHabitantes, mediaDensidade = 100
    real densidadeDemografica, espacoArea

    //Entrada de dados

    escreva("Digite a quantidade de habitantes: ")
    leia(quantidadeHabitantes)

    escreva("Digite a �rea (km�): ")
    leia(espacoArea)


   //C�lculos

   densidadeDemografica = quantidadeHabitantes / espacoArea


   //Sa�da de dados
    escreva("\nDensidade demogr�fica: ", densidadeDemografica, " habitantes por km�")


   se(densidadeDemografica >= mediaDensidade){
     
     escreva("\nDensidade alta!", "\n")

   }senao{
   
     escreva("\nDensidade baixa!", "\n")


   }  
  }
}
