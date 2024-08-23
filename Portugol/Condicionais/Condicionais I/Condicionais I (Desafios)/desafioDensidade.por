
/*Criar Alta programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de Altaa região.
 Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados).
 Mostrar mensagens para densidade alta (maior ou igual a 100) e densidade baixa (menor que 100)
 
 (DESAFIO: Incluir também densidade média entre 50 e 100).*/


programa {
  funcao inicio() {
    

    //Declarar variáveis

    inteiro quantidadeHabitantes, mediaDensidadeAlta = 100, mediaDensidadeBaixa = 50
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


   se(densidadeDemografica > mediaDensidadeAlta){
     
     escreva("\nDensidade alta!\n")


   }senao se(densidadeDemografica < mediaDensidadeBaixa){
   
     escreva("\nDensidade baixa!\n")


   }senao{

     escreva("\nDensidade média!\n")
   
    }
  }
}
