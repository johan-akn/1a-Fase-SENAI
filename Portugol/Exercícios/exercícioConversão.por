/* Elaborar um algoritmo que efetue a apresenta��o do valor da convers�o em real (R$) de um valor lido em d�lar (US$). 
 O algoritmo dever� solicitar o valor da cota��o do d�lar e tamb�m a quantidade de d�lares dispon�veis com o usu�rio.*/


programa {
  funcao inicio() {
    
    //Declarar vari�veis
    real quantidadeDolar, quantidadeReal, cotacaoDolarPorReal

    //Entrada de dados

   escreva("Digite a cota��o do d�lar para real: ")
   leia(cotacaoDolarPorReal)


   escreva("Digite quantos d�lares ser�o convertidos: ")
   leia(quantidadeDolar)


  //C�lculo
  quantidadeReal = quantidadeDolar*cotacaoDolarPorReal


  //Sa�da de dados
  escreva("\nValor convertido: (R$)", quantidadeReal, "\n")
  }
}
