/* Conversor de moedas: Escreva um programa que converta uma quantidade de dólares em reais.
 Se o valor do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, 
 senão exiba uma mensagem de que está barato.*/


programa {
  funcao inicio() {
    
    //Declarar variáveis

    real quantidadeDolar, quantidadeReal, cotacaoDolar
    inteiro relCinco = 5


    //Entrada de dados

   escreva("Digite a cotação do dólar para real: ")
   leia(cotacaoDolar)


   escreva("Digite quantos dólares serão convertidos: ")
   leia(quantidadeDolar)


  //Cálculo
  
  quantidadeReal = quantidadeDolar*cotacaoDolar


  //Saída de dados
  
  
  se(cotacaoDolar > relCinco){
  
    escreva("\nO dólar está caro!")
    escreva("\nValor convertido: R$", quantidadeReal, "\n")


  }senao se(cotacaoDolar <= relCinco){

    escreva("\nO dólar está barato!")
    escreva("\nValor convertido: R$", quantidadeReal, "\n")
  }
  }
}
