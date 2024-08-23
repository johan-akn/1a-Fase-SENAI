
/*Criar Alta programa para calcular a densidade demogr�fica (habitantes por quil�metro quadrado) de Altaa regi�o.
 Sendo, densidade igual a popula��o (total de habitantes) dividida pela �rea (quil�metros quadrados).
 Mostrar mensagens para densidade alta (maior ou igual a 100) e densidade baixa (menor que 100)
 
 (DESAFIO: Incluir tamb�m densidade m�dia entre 50 e 100).*/


programa {
  funcao inicio() {
    

    //Declarar vari�veis

    inteiro quantidadeHabitantes, mediaDensidadeAlta = 100, mediaDensidadeBaixa = 50
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


   se(densidadeDemografica > mediaDensidadeAlta){
     
     escreva("\nDensidade alta!\n")


   }senao se(densidadeDemografica < mediaDensidadeBaixa){
   
     escreva("\nDensidade baixa!\n")


   }senao{

     escreva("\nDensidade m�dia!\n")
   
    }
  }
}
