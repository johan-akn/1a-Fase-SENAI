/* Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). 
 O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.*/


programa {
  funcao inicio() {
    
    //Declarar variáveis
    real quantidadeDolar, quantidadeReal, cotacaoDolarPorReal

    //Entrada de dados

   escreva("Digite a cotação do dólar para real: ")
   leia(cotacaoDolarPorReal)


   escreva("Digite quantos dólares serão convertidos: ")
   leia(quantidadeDolar)


  //Cálculo
  quantidadeReal = quantidadeDolar*cotacaoDolarPorReal


  //Saída de dados
  escreva("\nValor convertido: (R$)", quantidadeReal, "\n")
  }
}
