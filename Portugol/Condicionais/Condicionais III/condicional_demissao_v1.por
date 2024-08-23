/*Criar um programa no qual o usuário digite o motivo da sua saída em uma empresa e o valor do seus FGTS.
 Para motivo "Justa causa" o valor a receber é o valor do FGTS somado a uma multa de R$4.000,00. Para motivo
 "Sem justa causa" o valor a receber é o valor do FGTS com desconto de 15%.
  Ao final mostrar o valor a receber.*/

  /*Enunciado incorreto?*/


programa {
  funcao inicio() {
    
    //Declarar variáveis

    cadeia motivoDemissao = ""
    real valorFgts
    real valorReceber
    real descontoFgts, calcDesconto
    inteiro relQuinze = 15, relCem = 100
    inteiro multaDemissao = 4000


    descontoFgts = relQuinze / relCem


    //Entrada de dados

    escreva("Digite o motivo da demissão: ")
    leia(motivoDemissao)

    escreva("Digite o valor do seu FGTS (R$): ")
    leia(valorFgts)


    //Cálculos

    se(motivoDemissao == "Justa causa"){

      valorReceber = valorFgts + multaDemissao

    }senao se(motivoDemissao == "Sem justa causa"){
      
      calcDesconto = valorFgts * descontoFgts
      valorReceber = valorFgts - calcDesconto
    }



    //Saída de dados

    escreva("\nValor a receber: R$", valorReceber, "\n")
  }
}
