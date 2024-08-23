/*Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final.
 Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar a frase “Sua salada de frutas está pronta!”*/



programa {
  funcao inicio() {

    //Declarar variáveis
    
    cadeia frutaAdicionada
    inteiro cont = 0
    

    escreva("Comece sua salada de frutas!\n")
    escreva("Qual fruta adicionar? ")
    leia(frutaAdicionada)


    enquanto (frutaAdicionada != "cereja"){

      escreva("Qual fruta adicionar? ")
      leia(frutaAdicionada)

    
    }

      escreva("\nSua salada de frutas está pronta!\n")
    
    
  }
}
