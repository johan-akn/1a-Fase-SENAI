/*Suponha que um caixa disponha apenas de notas de 1, 10 e 100.
Considerando que algu�m est� pagando uma compra. escreva um algoritmo que mostre
o n�mero m�nimo de cada nota que o caixa deve fornecer como troco. O algoritmo receber�
Como entrada o Valor da Compra e Valor do pagamento, ambos os valores s�o inteiro.
Caso o valor do pagamento seja inferior ao valor da compra
o c�lculo n�o ser� efetuado dever� imprimir a seguinte mensagem: �Pagamento Negado�*/


programa {
  funcao inicio() {
    
  //Declarar vari�veis

  inteiro notaUm = 1, notaDez = 10, notaCem = 100
  inteiro valorPagamento, valorCompra, trocoValor
  inteiro qtdCem, qtdDez, qtdUm
  inteiro trocoFinal


  //Entrada de dados

  escreva("Digite o valor da compra (R$): ")
  leia(valorCompra)

  escreva("Digite o valor do pagamento (R$): ")
  leia(valorPagamento)


  //C�lculos

  trocoValor = valorPagamento - valorCompra
  trocoFinal = valorPagamento - valorCompra

  //Sa�da de dados

  se(valorPagamento < valorCompra){

     escreva("\nPagamento negado!\n")


  }senao{

    qtdCem = trocoValor / notaCem
    trocoValor = trocoValor % notaCem

    qtdDez = trocoValor / notaDez
    trocoValor = trocoValor % notaDez

    qtdUm = trocoValor

     
escreva("\nTroco = R$", trocoFinal, "\n")
        escreva("Notas de R$100 = ", qtdCem, "\n")
        escreva("Notas de R$10 = ", qtdDez, "\n")
        escreva("Notas de R$1 = ", qtdUm, "\n")

  }





  }
}
