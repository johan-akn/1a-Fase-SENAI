programa {
  funcao inicio() {
    

    inteiro numeroMultas, pontosPerdidos
    inteiro somaPontos = 0, contadorMultas = 0
    inteiro mediaRegular = 21
    real valorMulta, somaMultas = 0


    //Entrada de dados

    escreva("Digite o número de multas que deseja cadastrar: ")
    leia(numeroMultas)


    enquanto(contadorMultas < numeroMultas){

      escreva("Digite o valor da multa: ")
      leia(valorMulta)

      escreva("Digite os pontos perdidos: ")
      leia(pontosPerdidos)

      somaMultas = somaMultas + valorMulta
      somaPontos = somaPontos + pontosPerdidos
      contadorMultas ++
  

     }
    
     escreva("\nSoma do valor das multas: R$", somaMultas, "\n")
     escreva("Soma dos pontos: ", somaPontos, "\n")

     se(somaPontos >= mediaRegular){

      escreva("\nVocê está irregular!\n")


    }senao{

      escreva("\nVocê está regular\n")

    }

  }
}
