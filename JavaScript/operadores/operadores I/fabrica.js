/*Em uma fábrica de reciclagem de materiais, cada 10kg de plástico
 rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00.
 Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais.*/


 //Declarar variáveis
 let quantidadePlastico, quantidadePapel, quantidadeMetal
 let mediaPlastico = 10, mediaPapel = 30, mediaMetal = 50
 let precoPlastico = 2, precoPapel = 3, precoMetal = 5
 let valorPlastico, valorPapel, valorMetal
 let valorTotal


 //Entrada de dados
 quantidadePlastico = prompt('Quantidade de plástico entregue (kg): ')
 quantidadePapel = prompt('Quantidade de papel entregue (kg): ')
 quantidadeMetal = prompt('Quantidade de metal entregue (kg): ')

 
 //Cálculos
 valorPlastico = (quantidadePlastico / mediaPlastico) * precoPlastico
 valorPapel = (quantidadePapel / mediaPapel) * precoPapel
 valorMetal = (quantidadeMetal / mediaMetal) * precoMetal
 valorTotal = valorPlastico + valorPapel + valorMetal


 //Saída de dados
 alert('Valor total da entrega: R$' + valorTotal)



