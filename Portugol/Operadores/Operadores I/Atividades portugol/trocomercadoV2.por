programa {
  funcao inicio() {

     //Declarar vari�veis
    real valorArroz 
    real valorBatata
    real valorSuco
    real somaValor
    real valorPagamento 
    real valorTroco


    //Entrada de dados
   escreva("Digite o valor do arroz: R$")
  leia(valorArroz)


  escreva("Digite o valor da batata palha: R$")
  leia(valorBatata)

   escreva("Digite o valor do suco de garrafa: R$")
  leia(valorSuco)


  escreva("Digite o valor do pagamento: R$")
  leia(valorPagamento)


  //C�lculos
  somaValor = valorArroz + valorBatata + valorSuco
  valorTroco =  valorPagamento - somaValor

  //Sa�da de dados

  escreva("\nTroco: R$", valorTroco, "\n")
  }
  }
}
