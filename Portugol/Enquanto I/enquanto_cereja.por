/*Fazer um programa no qual o usu�rio deve montar uma salada de frutas com uma cereja no final.
 Deve ser perguntado em sequ�ncia �Qual fruta adicionar? �. Quando for adicionado a cereja, mostrar a frase �Sua salada de frutas est� pronta!�*/



programa {
  funcao inicio() {

    //Declarar vari�veis
    
    cadeia frutaAdicionada
    inteiro cont = 0
    

    escreva("Comece sua salada de frutas!\n")
    escreva("Qual fruta adicionar? ")
    leia(frutaAdicionada)


    enquanto (frutaAdicionada != "cereja"){

      escreva("Qual fruta adicionar? ")
      leia(frutaAdicionada)

    
    }

      escreva("\nSua salada de frutas est� pronta!\n")
    
    
  }
}
