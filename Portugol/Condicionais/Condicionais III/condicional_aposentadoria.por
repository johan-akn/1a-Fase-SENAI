/*Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar.
 As condições para aposentadoria são:

a) Ter pelo menos 65 anos
b) Ter trabalhado pelo menos 30 anos
c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos*/


programa {
  funcao inicio() {

    //Declarar variáveis

    inteiro idadeDigitada
    real tempoServico
    inteiro relSessentaCinco = 65, relSessenta = 60, relTrinta = 30, relVinteCinco = 25


    //Entrada de dados

    escreva("Digite sua idade: ")
    leia(idadeDigitada)

    escreva("Digite o tempo de serviço: ")
    leia(tempoServico)


    //Saída de dados

    se(idadeDigitada >= relSessentaCinco ou tempoServico >= relTrinta ou idadeDigitada >= relSessenta e tempoServico >= relVinteCinco){

      escreva("\nPode se aposentar\n")


    }senao{

      escreva("\nNão pode se aposentar\n")
    }
  }
}
