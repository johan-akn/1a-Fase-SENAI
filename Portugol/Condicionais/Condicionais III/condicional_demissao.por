/*Criar um programa no qual o usu�rio digite o motivo da sua sa�da em uma empresa e o valor do seus FGTS.
 Para motivo "Justa causa" o valor a receber � o valor do FGTS somado a uma multa de R$4.000,00. Para motivo
 "Sem justa causa" o valor a receber � o valor do FGTS com desconto de 15%.
  Ao final mostrar o valor a receber.*/

  /*Enunciado incorreto?*/


programa {
  funcao inicio() {
    
    //Declarar vari�veis

    cadeia motivoDemissao = ""
    real valorFgts
    real valorReceber
    real descontoFgts, calcDesconto
    inteiro relQuinze = 15, relCem = 100
    inteiro multaDemissao = 4000


    descontoFgts = relQuinze / relCem


    //Entrada de dados

    escreva("Digite o motivo da sa�da: ")
    leia(motivoDemissao)



    //C�lculos

    se(motivoDemissao == "Justa causa" ou motivoDemissao == "justa causa"){

      escreva("Digite o valor do seu FGTS (R$): ")
      leia(valorFgts)

      valorReceber = valorFgts + multaDemissao

      escreva("\nValor a receber: R$", valorReceber, "\n")

    }senao se(motivoDemissao == "Sem justa causa" ou motivoDemissao == "sem justa causa"){
      
      escreva("Digite o valor do seu FGTS (R$): ")
      leia(valorFgts)
      
      calcDesconto = valorFgts * descontoFgts
      valorReceber = valorFgts - calcDesconto
   
      escreva("\nValor a receber: R$", valorReceber, "\n")

    }senao{

      escreva("\nMotivo inv�lido\n")

    }



    //Sa�da de dados

    
  }
}
