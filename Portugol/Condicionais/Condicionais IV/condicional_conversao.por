/* Conversor de moedas: Escreva um programa que converta uma quantidade de d�lares em reais.
 Se o valor do d�lar estiver acima de 5 reais, exiba uma mensagem informando que est� caro, 
 sen�o exiba uma mensagem de que est� barato.*/


programa {
  funcao inicio() {
    
    //Declarar vari�veis

    real quantidadeDolar, quantidadeReal, cotacaoDolar
    inteiro relCinco = 5


    //Entrada de dados

   escreva("Digite a cota��o do d�lar para real: ")
   leia(cotacaoDolar)


   escreva("Digite quantos d�lares ser�o convertidos: ")
   leia(quantidadeDolar)


  //C�lculo
  
  quantidadeReal = quantidadeDolar*cotacaoDolar


  //Sa�da de dados
  
  
  se(cotacaoDolar > relCinco){
  
    escreva("\nO d�lar est� caro!")
    escreva("\nValor convertido: R$", quantidadeReal, "\n")


  }senao se(cotacaoDolar <= relCinco){

    escreva("\nO d�lar est� barato!")
    escreva("\nValor convertido: R$", quantidadeReal, "\n")
  }
  }
}
