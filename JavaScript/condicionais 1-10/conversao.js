/*Elabore um programa que converta uma quantidade de dólares para reais.
 Devem ser solicitados o valor em dólares e a cotação do dólar.
 Mostre a conversão para reais na tela.
 Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.*/

 
 //Declarar variáveis
 let quantidadeDolar, quantidadeReal, cotacaoDolar
 let relCinco = 5


 //Entrada de dados
 cotacaoDolar = prompt('Digite a cotação do dólar: ')
 quantidadeDolar = prompt('Quantos dólares serão convertidos? ')


 //Cálculo
 quantidadeReal = quantidadeDolar * cotacaoDolar


 //Saída de dados
 if(cotacaoDolar > relCinco){

    alert('O dólar está caro!\nValor convertido: R$' + quantidadeReal)

 }
 else{

    alert('O dólar está barato!\nValor convertido: R$' + quantidadeReal)
 }