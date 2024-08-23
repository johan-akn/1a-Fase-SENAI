/*Suponha que um caixa disponha apenas de notas de 1, 10 e 100.
Considerando que alguém está pagando uma compra. escreva um algoritmo que mostre
o número mínimo de cada nota que o caixa deve fornecer como troco. O algoritmo receberá
Como entrada o Valor da Compra e Valor do pagamento, ambos os valores são inteiro.
Caso o valor do pagamento seja inferior ao valor da compra
o cálculo não será efetuado deverá imprimir a seguinte mensagem: “Pagamento Negado”*/


programa {
  funcao inicio() {
    
  //Declarar variáveis

  inteiro notaUm = 1, notaDez = 10, notaCem = 100
  inteiro valorPagamento, valorCompra, trocoValor
  inteiro qtdCem, qtdDez, qtdUm
  inteiro trocoFinal


  //Entrada de dados

  escreva("Digite o valor da compra (R$): ")
  leia(valorCompra)

  escreva("Digite o valor do pagamento (R$): ")
  leia(valorPagamento)


  //Cálculos

  trocoValor = valorPagamento - valorCompra
  trocoFinal = valorPagamento - valorCompra

  //Saída de dados

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
