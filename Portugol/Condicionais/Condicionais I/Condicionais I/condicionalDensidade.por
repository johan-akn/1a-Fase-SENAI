
/*Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região.
 Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados).
 Mostrar mensagens para densidade alta (maior ou igual a 100) e densidade baixa (menor que 100).*/


programa {
  funcao inicio() {
    

    //Declarar variáveis

    inteiro quantidadeHabitantes, mediaDensidade = 100
    real densidadeDemografica, espacoArea

    //Entrada de dados

    escreva("Digite a quantidade de habitantes: ")
    leia(quantidadeHabitantes)

    escreva("Digite a área (km²): ")
    leia(espacoArea)


   //Cálculos

   densidadeDemografica = quantidadeHabitantes / espacoArea


   //Saída de dados
    escreva("\nDensidade demográfica: ", densidadeDemografica, " habitantes por km²")


   se(densidadeDemografica >= mediaDensidade){
     
     escreva("\nDensidade alta!", "\n")

   }senao{
   
     escreva("\nDensidade baixa!", "\n")


   }  
  }
}
