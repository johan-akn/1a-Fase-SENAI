programa {
  funcao inicio() {

     //Declarar vari�veis
    real valorArroz 
    real valorBatata
    real valorSuco
    real somaValor
    real valorPagamento = 100
    real valorTroco


    //Entrada de dados
   escreva("Digite o valor do arroz: R$")
  leia(valorArroz)


  escreva("Digite o valor da batata palha: R$")
  leia(valorBatata)

   escreva("Digite o valor do suco de garrafa: R$")
  leia(valorSuco)


  //C�lculos
  somaValor = valorArroz + valorBatata + valorSuco
  valorTroco =  valorPagamento - somaValor

  //Sa�da de dados

  escreva("\nTroco: R$", valorTroco, "\n")
  }
  }
}
